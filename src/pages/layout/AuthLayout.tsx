import {useState} from "react";
import { NavLink, Outlet } from "react-router";
import { PageHeadingWithSubtitle } from "../../components/page-heading/PageHeading";
import { type Dispatch, type SetStateAction} from "react"
import { type IOutletContextProps } from "../auth/LoginPage";

export interface ILayoutData{
  pageTitle: string,
  subTitle:string,
  btnTxt:string,
  btnLink: string
}
export interface IOutletContext{
  setLayoutData: Dispatch<SetStateAction<IOutletContextProps>>
}
export default function AuthLayout() {
  const [ layoutData, setLayoutData] = useState<ILayoutData>({
    pageTitle: "Login from Here",
    subTitle: "Lorem ipsum yestai ho",
    btnTxt: "Register Here",
    btnLink: "/register"
  })
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center p-2">
        <div className="w-full md:w-2xl lg:w-3xl xl:w-4xl shadow-2xl bg-stone-200/75 rounded-tl-lg rounded-br-lg p-4  py-10 ">
          <PageHeadingWithSubtitle title={layoutData.pageTitle}>
           {layoutData.subTitle}
          </PageHeadingWithSubtitle>

          <Outlet  context={{
            layoutData,
            setLayoutData
          }}/>
          <div className="w-full flex flex-col gap-5">
            <span className="flex items-center">
              <span className="h-px flex-1 bg-gray-300"></span>
              <span className="shrink-0 px-4 text-gray-900">OR</span>

              <span className="h-px flex-1 bg-gray-300"></span>
            </span>

            <div className="flex w-full justify-center">
              <NavLink
                to={layoutData.btnLink}
                className="cursor-pointer hover:underline  transition hover:scale-96 w-full p-2 rounded-full border border-emerald-800 text-green-950 text-lg text-center"
              >
               {layoutData.btnTxt}
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}