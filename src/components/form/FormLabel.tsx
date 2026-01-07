import type { ReactNode } from "react";

export const FormLabel=({htmlFor,children}:Readonly<{htmlFor:string,children:ReactNode}>)=>
{
  return(
  <>
  <label htmlFor={htmlFor} className="w-full md:w-1/4 font-bold">
                {children}
                </label>
  </>
  )  
}