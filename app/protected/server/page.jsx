import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOpt } from "@/api/auth/[...nextauth]/route";
import Profile from "../ProfileBox";

const ServerProtectPage = async () => {
  const session = await getServerSession(authOpt);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <section>
        <div>
          <h1>this is a server side page</h1>
        </div>
      </section>
      <Profile
        email={session?.user?.email}
        image={session?.user?.image}
        name={session?.user?.name}
      />
    </>
  );
};

export default ServerProtectPage;
