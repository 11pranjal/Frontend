import { useState } from "react"
import { FormCancelButton, FormSubmitButton } from "../form/FormAction"
import { EmailInput,FormInput } from "../form/FormInput"
import { FormLabel } from "../form/FormLabel"
import { NavLink } from "react-router";

 export interface ICredentials{
    email:string;
    password:string;
}
export default function LoginForm() {
    const [credentials,setCredentials]=useState<ICredentials>({
        email:"",
        password:""
    })

    console.log(credentials)
    
    return(
<>
 <form id="loginForm" className="flex flex-col gap-5 p-4 ">
             <div className="flex flex-col w-full md:flex-row md:items-center">
                <FormLabel htmlFor="email">
                User name:
                </FormLabel>
                <div className="w-full md:w-3/4">
                   <EmailInput name="email" placeholder="Enter your email..."/>
                </div>
             </div>

             <div className="flex flex-col w-full md:flex-row md:items-center">
                <FormLabel htmlFor="password">
                Password:
                </FormLabel>
                <div className="w-full md:w-3/4">
                   <FormInput type="password" name="password" placeholder="Enter your password..."/>
                </div>
             </div>

             <div className="flex flex-col w-full md:flex-row justify-end">
               <NavLink to="/forget-password"className="text-teal-800 italic text-sm hover:underline">
              Forget Password
               </NavLink>
             </div>

             <div className="flex flex-col md:flex-row w-full gap-5 items-center">
                <FormCancelButton label="Reset"/>
                <FormSubmitButton label="Login"/>
             </div>
         </form>
</>
    )

}