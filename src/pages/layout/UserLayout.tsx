import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../hooks/auth";
import { UserHeader } from "../../components/user-dashboard/UserHeader";
import type { IUser } from "../auth/auth.contract";
import { UserSidebar } from "../../components/user-dashboard/UserSidebar";
import { UserFooter } from "../../components/user-dashboard/UserFooter";
import { useEffect} from "react";
import { toast } from "sonner";

export default function UserLayout() {
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if(!loggedInUser) {
      toast.info("You are not logged in.", {
        description: "Please login first to access"
      })
      navigate("/")
    }
  }, [])
  return (
    <>
      <UserHeader loggedInUser={loggedInUser as IUser} />
      <main className="flex w-full h-screen">
        <UserSidebar loggedInUser={loggedInUser as IUser} />
        <section className="p-5 bg-gray-300 m-3 rounded-lg w-full">
          <Outlet />
        </section>
      </main>
      <UserFooter />
    </>
  );
}
