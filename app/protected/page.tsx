import { getServerSession } from "next-auth";
import { authOptions } from "../lib/AuthOptions";
import { redirect } from "next/navigation";
import Image from "next/image";
import SignOutButton from "../components/SignOutButton";

const ProtectedPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      <h1>Welcome, {session.user?.email}</h1>
      <p>Session ID: {session.user?.id}</p>
      {session.user?.image && <Image src={session.user.image} alt="User Image" width={50} height={50} />}
      <SignOutButton/>
    </div>
  );
};

export default ProtectedPage;
