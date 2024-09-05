"use client";

import { BoardType } from "@/app/api/boards/route";
import { ProjectMemberType } from "@/app/api/members/route";
import { ProjectType } from "@/app/api/projects/route";
import ProjectNavbar from "@/app/components/ProjectNavbar";
import ProjectSidebar from "@/app/components/ProjectSidebar";
import Spinner from "@/app/components/Spinner";
import { ItemStatus } from "@/prisma/generated/client";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

const getProject = async (id: number) => {
  const res = await fetch(`/api/projects/${id}`, {
    method: "GET",
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return data;
};

const getBoards = async (projectId: number) => {
  const res = await fetch(`/api/boards?projectId=${projectId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch boards");
  }

  return data;
};

const getProjectMembers = async (projectId: number) => {
  const res = await fetch(`/api/members?projectId=${projectId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch boards");
  }

  return data;
};

const TaskPage = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [project, setProject] = useState<ProjectType["project"]>();
  const [boards, setBoards] = useState<BoardType[]>();
  const [members, setMembers] = useState<ProjectMemberType[]>();
  const [isAddNewTask, setIsAddNewTask] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleStatus = async (itemId: number, status: string) => {
    setIsLoading(true);

    const res = await fetch("/api/items/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId, status }),
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
    } else {
      alert("Ooopss, gagal!");
      console.log(data);
    }

    setIsLoading(false);
  };

  const handleAssign = async (itemId: number, userId: number) => {
    setIsLoading(true);

    const res = await fetch("/api/items/assign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, itemId }),
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
    } else {
      alert("Ooopss, gagal!");
      console.log(data);
    }

    setIsLoading(false);
  };

  const handleNewTask = async (e: FormEvent, boardId: number) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: taskTitle, boardId }),
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
    } else {
      alert("Ooopss, gagal!");
      console.log(data);
    }

    setTaskTitle("");
    setIsAddNewTask(false);
    setIsLoading(false);
  };

  useEffect(() => {
    getProject(id).then(({ project }) => setProject(project));
    getBoards(id).then(({ boards }) => setBoards(boards));
    getProjectMembers(id).then(({ members }) => setMembers(members));
  }, []);

  return (
    <div className="relative flex-1 flex">
      {isLoading && <Spinner />}
      <ProjectSidebar projectId={id} pageActive="Tugas" />
      <div className="flex-1 flex flex-col">
        <ProjectNavbar />
        <div className="flex flex-col flex-1">
          <div className="container p-4 md:p-8 lg:p-16 mx-auto">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <Link
                    href="/projects"
                    className="font-poppins text-custom-gray text-sm underline"
                  >
                    Proyek
                  </Link>
                  <span className="font-poppins text-custom-gray text-sm">
                    /
                  </span>
                  {project && (
                    <Link
                      href={`/projects/${id}/dashboard`}
                      className="font-poppins text-custom-gray text-sm underline"
                    >
                      {project.title}
                    </Link>
                  )}
                </div>
                <h1 className="text-custom-gray text-4xl font-bold font-poppins">
                  Tugas
                </h1>
              </div>
              {boards?.map((board) => {
                return (
                  <div
                    className="flex flex-col rounded-2xl bg-white p-4 gap-4"
                    key={board.id}
                  >
                    <div className="flex items-center justify-between">
                      <h1 className="font-poppins text-custom-gray text-sm font-medium">
                        {board.title}
                      </h1>
                      <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                          <div className="w-6 h-6 overflow-hidden aspect-square flex items-center justify-center p-2 rounded-full bg-gray-400">
                            <p className="text-custom-gray text-xs">0</p>
                          </div>
                          <div className="w-6 h-6 overflow-hidden aspect-square flex items-center justify-center p-2 rounded-full bg-blue-500">
                            <p className="text-custom-gray text-xs">0</p>
                          </div>
                          <div className="w-6 h-6 overflow-hidden aspect-square flex items-center justify-center p-2 rounded-full bg-green-500">
                            <p className="text-custom-gray text-xs">0</p>
                          </div>
                        </div>
                        <button className="group pl-4 pr-5 py-2.5 flex items-center gap-2 rounded-lg border-[1px] border-custom-gray hover:bg-custom-gray">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4 text-custom-gray group-hover:text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>

                          <p className="text-custom-gray font-medium text-xs group-hover:text-white">
                            Ubah Papan
                          </p>
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col divide-y-[1px] border-[1px] rounded-lg overflow-hidden">
                      {board.Item.map((item) => {
                        return (
                          <div
                            className="grid grid-cols-7 hover:cursor-pointer hover:bg-gray-50"
                            key={item.id}
                          >
                            <div className="p-4 col-span-2">
                              {item.content && (
                                <p className="text-custom-gray text-sm font-medium">
                                  {item.content}
                                </p>
                              )}
                            </div>
                            <div className="p-4">
                              {item.start && (
                                <p className="text-custom-gray text-sm font-medium">
                                  {item.start.toDateString()}
                                </p>
                              )}
                            </div>
                            <div className="p-4">
                              {item.end && (
                                <p className="text-custom-gray text-sm font-medium">
                                  {item.end.toDateString()}
                                </p>
                              )}
                            </div>
                            <div className="p-2">
                              <select
                                onChange={(e) => {
                                  const selected = e.target.value;
                                  if (selected == "TODO") {
                                    item.status = ItemStatus.TODO;
                                  } else if (selected == "ONPROGRESS") {
                                    item.status = ItemStatus.ONPROGRESS;
                                  } else if (selected == "COMPLETED") {
                                    item.status = ItemStatus.COMPLETED;
                                  }

                                  handleStatus(item.id, selected);
                                }}
                                name="status"
                                id="status"
                                className={`font-poppins p-2 rounded-lg text-sm ${
                                  item.status == "TODO"
                                    ? "bg-gray-100"
                                    : item.status == "ONPROGRESS"
                                    ? "bg-blue-100"
                                    : "bg-green-100"
                                }`}
                              >
                                <option
                                  className="bg-gray-100"
                                  value="TODO"
                                  selected={
                                    item.status == "TODO" ? true : false
                                  }
                                >
                                  To Do
                                </option>
                                <option
                                  className="bg-blue-100"
                                  value="ONPROGRESS"
                                  selected={
                                    item.status == "ONPROGRESS" ? true : false
                                  }
                                >
                                  On Progress
                                </option>
                                <option
                                  className="bg-green-100"
                                  value="COMPLETED"
                                  selected={
                                    item.status == "COMPLETED" ? true : false
                                  }
                                >
                                  Completed
                                </option>
                              </select>
                            </div>
                            <div className="p-2">
                              <select
                                onChange={(e) =>
                                  handleAssign(
                                    item.id,
                                    parseInt(e.target.value)
                                  )
                                }
                                name="members"
                                id="members"
                                className="font-poppins p-2 rounded-lg text-sm"
                              >
                                <option value="">Tugaskan</option>
                                {members?.map((member) => {
                                  return (
                                    <option
                                      selected={
                                        member.userId == item.userId
                                          ? true
                                          : false
                                      }
                                      value={member.userId}
                                      key={member.id}
                                    >
                                      {member.user.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <div className="flex items-center justify-end gap-2 p-2">
                              <button className="group flex items-center p-2 rounded-lg border-orange-500 border-[1px] hover:bg-orange-500 transition-all duration-300 ease-in-out">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-4 text-orange-500 group-hover:text-white transition-all duration-300 ease-in-out"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                  />
                                </svg>
                              </button>
                              <button className="group flex items-center p-2 rounded-lg border-red-500 border-[1px] hover:bg-red-500 transition-all duration-300 ease-in-out">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-4 text-red-500 group-hover:text-white transition-all duration-300 ease-in-out"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                      {isAddNewTask ? (
                        <form onSubmit={(e) => handleNewTask(e, board.id)}>
                          <div className="grid grid-cols-7">
                            <div className="col-span-6">
                              <input
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                required
                                type="text"
                                placeholder="Judul tugas"
                                className="p-4 w-full outline-none text-sm placeholder:text-sm"
                              />
                            </div>
                            <div className="flex gap-2 items-center justify-center">
                              <button
                                type="button"
                                className="group px-5 py-2.5 border-[1px] border-custom-gray rounded-lg hover:bg-custom-gray"
                                onClick={() => setIsAddNewTask(false)}
                              >
                                <p className="text-custom-gray text-xs font-medium group-hover:text-white">
                                  Batal
                                </p>
                              </button>
                              <button
                                type="submit"
                                className="px-5 py-2.5 bg-custom-gray rounded-lg hover:bg-gray-900"
                              >
                                <p className="text-white text-xs font-medium">
                                  Simpan
                                </p>
                              </button>
                            </div>
                          </div>
                        </form>
                      ) : (
                        <button
                          className="flex items-center gap-2 p-4 hover:bg-gray-50"
                          onClick={() => setIsAddNewTask(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4 text-custom-gray"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                          <p className="text-custom-gray font-medium text-xs">
                            Tambah Tugas
                          </p>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
