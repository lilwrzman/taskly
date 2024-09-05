"use client";

import Link from "next/link";
import { ReactElement, useState } from "react";

const ProjectSidebar = ({
  projectId,
  pageActive,
}: {
  projectId: number;
  pageActive: string;
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const menuItem: { icon: ReactElement; label: string; href: string }[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.4}
          stroke="currentColor"
          className={`size-6 group-hover:text-white ${
            pageActive == "Beranda" ? "text-white" : "text-custom-gray"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      label: "Beranda",
      href: `/projects/${projectId}/dashboard`,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.4}
          stroke="currentColor"
          className={`size-6 group-hover:text-white ${
            pageActive == "Tugas" ? "text-white" : "text-custom-gray"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </svg>
      ),
      label: "Tugas",
      href: `/projects/${projectId}/task`,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.4}
          stroke="currentColor"
          className={`size-6 group-hover:text-white ${
            pageActive == "Lini Masa" ? "text-white" : "text-custom-gray"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      ),
      label: "Lini Masa",
      href: `/projects/${projectId}/timeline`,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.4}
          stroke="currentColor"
          className={`size-6 group-hover:text-white ${
            pageActive == "Anggota" ? "text-white" : "text-custom-gray"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
      label: "Anggota",
      href: `/projects/${projectId}/members`,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.4}
          stroke="currentColor"
          className={`size-6 group-hover:text-white ${
            pageActive == "Pengaturan" ? "text-white" : "text-custom-gray"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
      label: "Pengaturan",
      href: `/projects/${projectId}/settings`,
    },
  ];

  return (
    <aside
      className={`bg-white border-r-[1px] ${
        isCollapsed ? "w-fit" : "w-64"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col gap-10 h-full">
        <div
          className={`flex items-center gap-4 justify-start ${
            isCollapsed ? "py-6 px-8" : "py-4 px-10"
          }`}
        >
          <button onClick={() => setIsCollapsed(!isCollapsed)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <h1
            className={`font-bold text-custom-gray text-2xl md:text-4xl ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            Taskly
          </h1>
        </div>
        <div
          className={`flex flex-col gap-4 ${
            isCollapsed ? "px-4" : "px-5"
          } flex-1`}
        >
          {menuItem.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className={`group flex items-center gap-5 py-4 rounded-lg hover:bg-custom-gray hover:py-5 transition-all duration-300 ease-in-out ${
                  isCollapsed ? "px-4" : "px-5"
                } ${pageActive == item.label && "bg-custom-gray"}`}
              >
                {item.icon}
                <p
                  className={`font-poppins text-base group-hover:text-white ${
                    isCollapsed ? "hidden" : "block"
                  } ${
                    pageActive == item.label ? "text-white" : "text-custom-gray"
                  }`}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>
        <div
          className={`flex flex-col gap-4 py-4 ${
            isCollapsed ? "px-4" : "px-5"
          }`}
        >
          <Link
            href="/projects"
            className={`group flex items-center gap-5 py-4 rounded-lg hover:bg-custom-gray hover:py-5 transition-all duration-300 ease-in-out ${
              isCollapsed ? "px-4" : "px-5"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.4}
              stroke="currentColor"
              className="size-6 text-custom-gray group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <p
              className={`font-poppins text-base text-custom-gray group-hover:text-white ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              Proyek Anda
            </p>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default ProjectSidebar;
