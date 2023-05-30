import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import {
  HomeICon,
  ServerIcon,
  LoginIcon,
  ClientIcon,
} from "../components/Icons";
import { signOut, useSession } from "next-auth/react";
import Profile from "./protected/ProfileBox";
const navs = [
  { href: "/", title: "Home", icon: <HomeICon /> },
  { href: "/login", title: "Login", icon: <LoginIcon /> },
  { href: "/protected/client", title: "Client", icon: <ClientIcon /> },
  { href: "/protected/server", title: "Server", icon: <ServerIcon /> },
];
function MyDropdown() {
  return (
    <Menu as="div">
      {({ open }) => (
        <>
          <Menu.Button
            className={` p-2 rounded-lg bg-purple-400/50 ring-purple-700 transition-all text-sm ${
              open && "ring-2 ring-offset-2"
            }`}
          >
            Menu
          </Menu.Button>
          <Transition
            className={"origin-top-left"}
            show={open}
            enter="transition duration-500 ease-in-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-500 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items
              className={
                "grid p-2 mt-2 rounded-md text-slate-900 bg-purple-100"
              }
            >
              {navs?.map((link, id) => {
                return (
                  <Menu.Item className="px-3 py-2 rounded-md" key={id}>
                    {({ active }) => (
                      <Link
                        href={link.href}
                        className="py-2 px-4 rounded-md hover:bg-purple-600 transition-all hover:text-purple-200 text-sm"
                      >
                        <Menu.Button
                          className={"flex gap-2 items-center justify-center"}
                        >
                          <span className="p-0 w-6 h-6">{link.icon}</span>
                          {link.title}
                        </Menu.Button>
                      </Link>
                    )}
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
function Navbar() {
  const { data: session } = useSession();
  const UserIcon = () => {
    return (
      <div className="relative">
        <Menu as="div">
          {({ open }) => (
            <>
              <Menu.Button
                className={` p-2 rounded-lg bg-purple-400/50 ring-purple-700 transition-all text-sm ${
                  open && "ring-2 ring-offset-2"
                }`}
              >
                {session?.user?.name}
              </Menu.Button>
              <Transition
                className={"origin-top-left"}
                show={open}
                enter="transition duration-300 ease-in"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-300 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items
                  className={
                    "grid  first-letter: mt-2 rounded-md text-slate-900  absolute -right-4  min-w-max p-0"
                  }
                >
                  <Menu.Item className="px-3 py-2 rounded-md">
                    {({ active }) => (
                      <Menu.Button
                        className={"flex gap-2 items-center justify-center"}
                      >
                        <Profile
                          email={session?.user?.email}
                          image={session?.user?.image}
                          name={session?.user?.name}
                          func={() => signOut()}
                        />
                      </Menu.Button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    );
  };
  return (
    <nav className="container ">
      <div className="flex gap-3  items-center justify-between bg-default_bg/50 border-2 border-primary p-2">
        <MyDropdown data={navs} />
        {session && <UserIcon />}
      </div>
    </nav>
  );
}

export default Navbar;
