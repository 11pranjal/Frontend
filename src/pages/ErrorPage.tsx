//import { PageHeadingWithSubtitle } from "../components/page-heading/PageHeading";

import { NotFound } from "../components/errors/Errors";

export default function ErrorPage({
  code,
  redirectLink = "",
  redirectTxt = "",
}: Readonly<{ code: number; redirectLink?: string; redirectTxt?: string }>) {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center p-2">
        <div className="w-full md:w-2xl lg:w-3xl xl:w-4xl shadow-2xl bg-stone-200/75 rounded-tl-lg rounded-br-lg p-4  py-10 pb-5 ">
          {code === 404 ? (
            <NotFound redirectLink={redirectLink} redirectTxt={redirectTxt} />
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
}
