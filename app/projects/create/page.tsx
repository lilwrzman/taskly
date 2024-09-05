"use client";

import NavbarInside from "@/app/components/NavbarInside";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Spinner from "@/app/components/Spinner";

const CreateProject = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [projectScope, setProjectScope] = useState<string | "PRIVATE" | "PUBLIC">("PRIVATE")
  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
    projectScope?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    setIsLoading(true);

    const res = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, projectScope }),
    });

    const data = await res.json();
    setIsLoading(false);

    if (res?.ok) {
      alert(data.message);
      router.push("/projects");
    } else {
      if (res.status == 400) {
        setErrors(data.errors);
      } else {
        alert(data.message);
        console.log(data.error);
      }
    }
  };

  return (
    <div className="relative">
      {isLoading && <Spinner />}
      <NavbarInside currentPage="projects" />
      <div className="container px-4 py-16 md:px-8 md:py-16 lg:p-16 mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <Link
            href="/projects"
            className="flex items-center gap-1 text-custom-gray font-light text-sm font-poppins"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Kembali
          </Link>
          <h1 className="text-2xl font-bold text-custom-gray font-poppins">
            Buat Proyek
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col rounded-2xl bg-white p-6 w-full md:max-w-xl gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-custom-gray"
              >
                Judul Proyek
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="title"
                name="title"
                placeholder="Judul proyek anda"
                className="block w-full py-2.5 px-4 bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-custom-gray focus:border-custom-gray"
              />
              {errors && errors.title && (
                <p className="text-red-500 font-normal text-sm">
                  {errors.title}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-custom-gray"
              >
                Deskripsi Proyek
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                id="description"
                placeholder="Deskripsi proyek anda"
                className="block w-full py-2.5 px-4 bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-custom-gray focus:border-custom-gray"
              ></textarea>
              {errors && errors.description && (
                <p className="text-red-500 font-normal text-sm">
                  {errors.description}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="projectScope"
                className="block mb-2 text-sm font-medium text-custom-gray"
              >
                Lingkup Proyek
              </label>
              <select
                value={projectScope}
                onChange={(e) => setProjectScope(e.target.value)}
                name="projectScope"
                id="projectScope"
                className="block w-full py-2.5 px-4 bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-custom-gray focus:border-custom-gray font-poppins"
              >
                <option value="PRIVATE">Privat</option>
                <option value="PUBLIC">Publik</option>
              </select>
              {errors && errors.projectScope && (
                <p className="text-red-500 font-normal text-sm">
                  {errors.projectScope}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <button
                type="reset"
                className="px-5 py-2.5 text-sm font-medium rounded-lg border-[1px] border-custom-gray text-custom-gray hover:bg-custom-gray hover:text-white"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-medium rounded-lg bg-custom-gray text-white hover:bg-gray-900"
              >
                Buat
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
