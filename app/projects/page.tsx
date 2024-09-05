"use client";

import { redirect } from "next/navigation";
import NavbarInside from "../components/NavbarInside";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Spinner from "../components/Spinner";
import { ProjectType } from "../api/projects/route";

const getProjects = async (): Promise<ProjectType[]> => {
  const res = await fetch("/api/projects", {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();
  return data;
};

const ProjectPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: session } = useSession();
  const [projects, setProjects] = useState<ProjectType[] | null>(null);
  const [filterProject, setFilterProject] = useState<
    "" | "FAVORITE" | "PUBLIC" | "PRIVATE"
  >("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        setProjects(projectData);
      } catch (e) {
        console.log(e);
      }
    };

    if (session) {
      fetchProjects();
    }
  }, [session]);

  const refreshProjects = async () => {
    try {
      const projectData = await getProjects();
      setProjects(projectData);
    } catch (e) {
      console.log(e);
    }
  };

  if (!session) {
    redirect("/signin");
  }

  const filteredProjects = useMemo(() => {
    if (!projects) return null;

    switch (filterProject) {
      case "FAVORITE":
        return projects.filter((project) => project.isFavorite);
      case "PUBLIC":
        return projects.filter(
          (project) => project.project.projectScope == "PUBLIC"
        );
      case "PRIVATE":
        return projects.filter(
          (project) => project.project.projectScope == "PRIVATE"
        );
      default:
        return projects;
    }
  }, [projects, filterProject]);

  const toggleFilter = (value: "" | "FAVORITE" | "PUBLIC" | "PRIVATE") => {
    setFilterProject(value === filterProject ? "" : value);
  };

  return (
    <div className="relative flex-1">
      {isLoading && <Spinner />}
      <NavbarInside currentPage="projects" />
      <div className="container px-4 py-16 md:px-8 md:py-16 lg:p-16 mx-auto flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl text-custom-gray font-poppins">
            Proyek Anda
          </h1>
          <Link
            href="/projects/create"
            className="pl-4 pr-5 py-2.5 bg-custom-gray rounded-lg"
          >
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <p className="font-medium text-sm text-white">Buat Proyek</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <FilterProject
            filter={filterProject}
            changeFilter={toggleFilter}
            projects={projects}
          />

          <ProjectList
            projects={filteredProjects}
            onFavoriteChange={refreshProjects}
            onLoading={setIsLoading}
          />
        </div>
      </div>
    </div>
  );
};

const ProjectList = ({
  projects,
  onFavoriteChange,
  onLoading,
}: {
  projects: ProjectType[] | null;
  onFavoriteChange: () => void;
  onLoading: (value: boolean) => void;
}) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {projects?.length == 0 && (
        <div className="bg-red-300 border-[1px] border-red-600 rounded-lg p-3 col-span-4 flex items-center gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-red-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>

          <p className="text-red-900 font-medium text-sm">Belum ada proyek</p>
        </div>
      )}
      {projects?.map((project) => {
        return (
          <div
            className="flex justify-between bg-white rounded-2xl p-4"
            key={project.id}
          >
            <div className="flex flex-col">
              <p className="text-xs font-bold text-custom-gray">Proyek</p>
              <Link
                href={`/projects/${project.projectId}/dashboard`}
                className="text-lg text-custom-gray font-poppins hover:underline"
              >
                {project.project.title}
              </Link>
            </div>
            <FavoriteButton
              projectId={project.projectId}
              isFavorite={project.isFavorite}
              onChange={onFavoriteChange}
              onLoading={onLoading}
            />
          </div>
        );
      })}
    </div>
  );
};

const FavoriteButton = ({
  projectId,
  isFavorite,
  onChange,
  onLoading,
}: {
  projectId: number;
  isFavorite: boolean;
  onChange: () => void;
  onLoading: (value: boolean) => void;
}) => {
  const toggleFavorite = async () => {
    try {
      onLoading(true);
      const res = await fetch("/api/projects/favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectId }),
      });

      if (res.ok) {
        onChange();
      } else {
        const data = await res.json();
        console.log(data);
      }

      onLoading(false);
    } catch (error) {
      console.error("Failed to toggle favorite", error);
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={toggleFavorite}>
        {isFavorite ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-custom-orange"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6 text-custom-gray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

const FilterProject = ({
  projects,
  filter,
  changeFilter,
}: {
  projects: ProjectType[] | null;
  filter: string;
  changeFilter: (value: "" | "FAVORITE" | "PUBLIC" | "PRIVATE") => void;
}) => {
  return (
    <div className="flex gap-4 items-center">
      <button
        className={`transition-all ease-in-out duration-200 flex gap-2 items-center p-1 rounded-full ${
          filter == "" && "bg-custom-gray"
        }`}
        onClick={() => changeFilter("")}
      >
        <p
          className={`text-sm ml-3 font-medium ${
            filter == "" ? "text-white" : "text-custom-gray"
          }`}
        >
          Semua
        </p>
        <div className="bg-white rounded-full aspect-square px-2 flex items-center">
          <p className="text-xs text-wrap text-custom-gray">
            {projects?.length}
          </p>
        </div>
      </button>
      <button
        className={`transition-all ease-in-out duration-200 flex gap-2 items-center p-1 rounded-full ${
          filter == "FAVORITE" && "bg-custom-gray"
        }`}
        onClick={() => changeFilter("FAVORITE")}
      >
        <p
          className={`text-sm ml-3 font-medium ${
            filter == "FAVORITE" ? "text-white" : "text-custom-gray"
          }`}
        >
          Favorite
        </p>
        <div className="bg-white rounded-full aspect-square px-2 flex items-center">
          <p className="text-xs text-wrap text-custom-gray">
            {projects?.filter((project) => project.isFavorite).length}
          </p>
        </div>
      </button>
      <button
        className={`transition-all ease-in-out duration-200 flex gap-2 items-center p-1 rounded-full ${
          filter == "PRIVATE" && "bg-custom-gray"
        }`}
        onClick={() => changeFilter("PRIVATE")}
      >
        <p
          className={`text-sm ml-3 font-medium ${
            filter == "PRIVATE" ? "text-white" : "text-custom-gray"
          }`}
        >
          Privat
        </p>
        <div className="bg-white rounded-full aspect-square px-2 flex items-center">
          <p className="text-xs text-wrap text-custom-gray">
            {
              projects?.filter((project) => project.project.projectScope == 'PRIVATE')
                .length
            }
          </p>
        </div>
      </button>
      <button
        className={`transition-all ease-in-out duration-200 flex gap-2 items-center p-1 rounded-full ${
          filter == "PUBLIC" && "bg-custom-gray"
        }`}
        onClick={() => changeFilter("PUBLIC")}
      >
        <p
          className={`text-sm ml-3 font-medium ${
            filter == "PUBLIC" ? "text-white" : "text-custom-gray"
          }`}
        >
          Publik
        </p>
        <div className="bg-white rounded-full aspect-square px-2 flex items-center">
          <p className="text-xs text-wrap text-custom-gray">
            {
              projects?.filter((project) => project.project.projectScope == "PUBLIC")
                .length
            }
          </p>
        </div>
      </button>
    </div>
  );
};

export default ProjectPage;
