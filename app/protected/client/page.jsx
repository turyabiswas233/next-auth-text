"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ClientProtectPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login?callbackUrl=/protected/client");
    },
  });
  return (
    <section>
      <div className="container">
        <h2 className="text-2xl">
          this is a <span className="text-rose-400">client side proteced </span>
          page
        </h2>
      </div>
    </section>
  );
};

export default ClientProtectPage;
