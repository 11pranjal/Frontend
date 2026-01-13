import LoginForm from "../../components/auth/LoginForm";
import { useEffect } from "react";
import { useOutletContext } from "react-router";
import { type IOutletContext } from "../layout/layout.contract";

export default function LoginPage() {
  const outletContext = useOutletContext<IOutletContext>();
  useEffect(() => {
    outletContext.setLayoutData({
      pageTitle: "Login from Here",
      subTitle: "Lorem ipsum yestai ho",
      btnTxt: "Register Here",
      btnLink: "/register",
    });
  }, []);
  return (
    <>
      <LoginForm />
    </>
  );
}
