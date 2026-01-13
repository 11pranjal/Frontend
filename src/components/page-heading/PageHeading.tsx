import type { ReactNode } from "react";

//export const PageHeadingTitle= (props:Readonly<{title: ReactNode}>) =>{
export const PageHeadingTitle = ({
  title,
  className = "",
}: Readonly<{ title: ReactNode; className?: string }>) => {
  return (
    <>
      <h1 className={`text-3xl font-bold text-black ${className}`}>
        {/*{props.title} */}
        {title}
      </h1>
    </>
  );
};

export const PageHeadingSubtitle = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <span className="font-sm font-black italic font-[fantasy]">
        {children}
      </span>
    </>
  );
};

export const PageHeadingWithSubtitle = ({
  title,
  children,
  titleClass = "",
}: Readonly<{
  title: ReactNode;
  children: ReactNode;
  titleClass?: string;
}>) => {
  return (
    <>
      <PageHeadingTitle title={title} className={titleClass} />
      <PageHeadingSubtitle>{children}</PageHeadingSubtitle>
    </>
  );
};
