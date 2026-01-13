//import RegisterForm from "../../components/auth/RegisterForm";
//import { PageHeadingWithSubtitle } from "../../components/page-heading/PageHeading";
import { useEffect } from "react";
import { useOutletContext } from "react-router";
import { type IOutletContext } from "../layout/AuthLayout";
export default function RegisterPage() {
  const outletContext = useOutletContext<IOutletContext>();
  useEffect(() => {
    outletContext.setLayoutData({
      pageTitle: "Register from Here",
      subTitle: "Lorem ipsum yestai ho",
      btnTxt: "Login Here",
      btnLink: "/",
    });
  }, []);
  return <>Register Form</>;
}
