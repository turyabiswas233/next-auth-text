"use client";

import { useSession, signIn, signOut } from "next-auth/react";

function Page() {
  const { data: session } = useSession();
  if (session) {
    console.log(session?.user);
  }
  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-10">Login Account</h2>
      {session ? (
        <>
          Signed in as {session.user.email} <br />
          <button className="btn btn-danger" onClick={() => signOut()}>
            Sign out
          </button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button
            className="btn btn-danger"
            onClick={() =>
              signIn().catch((err) => {
                throw new Error(err);
              })
            }
          >
            Sign in with Others
          </button>
        </>
      )}
    </div>
  );
}

export default Page;
