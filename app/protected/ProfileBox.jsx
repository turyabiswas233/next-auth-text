import { SettingIcon, SignOutIcon } from "../../components/Icons";

function Profile({ name, email, image, func }) {
  return (
    <div className=" bg-slate-100 text-slate-950 w-fit rounded-md overflow-y-hidden">
      <header className="flex flex-row-reverse items-center p-3 gap-3 my-2 font-bold">
        <section className="right grid grid-cols-1 gap-1 leading-tight text-sm">
          <p>{name}</p>

          <p>{email}</p>
        </section>
        <section className="left">
          <img
            src={image}
            width={50}
            height={50}
            className="rounded-full shadow-stone-800"
          />
        </section>
      </header>
      <section className="main container ">
        <p className="setting">
          {" "}
          <SettingIcon /> Manage user
        </p>

        <button className="singout w-full" onClick={func}>
          <SignOutIcon /> Sign out
        </button>
      </section>
    </div>
  );
}

export default Profile;
