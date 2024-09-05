import ProjectNavbar from "@/app/components/ProjectNavbar";
import ProjectSidebar from "@/app/components/ProjectSidebar";

const DashboardPage = ({ params }: { params: { id: number } }) => {
  const { id } = params;

  return (
    <div className="relative flex-1 flex">
      <ProjectSidebar projectId={id} pageActive="Beranda" />
      <div className="flex-1 flex flex-col">
        <ProjectNavbar />
      </div>
    </div>
  );
};

export default DashboardPage;
