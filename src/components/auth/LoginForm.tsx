import { useForm } from "react-hook-form";
import { FormCancelButton, FormSubmitButton } from "../form/FormAction";
import { FormInputControl } from "../form/FormInput";
import { NavLink, useNavigate } from "react-router";
import { LoginDTO, type ICredentials } from "../../pages/auth/auth.contract";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosInstance from "../../config/axios.config";
import { FormLabel } from "../form/FormLabel";
import { toast } from "sonner";
 import Cookies from "js-cookie"


export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginDTO),
  });

const navigate=useNavigate();

  const submitForm =async (credentials: ICredentials) => {
   try{
    const response=await axiosInstance.post("auth/login",credentials);
  //console.log(response)
     Cookies.set("token",response.data,{
    expires:1,secure:true,sameSite:"lax"
   })


   const loggedInUser=await axiosInstance.get("auth/me");
   //console.log(loggedInUser);
    toast.success("Welcome to user Panel, "+loggedInUser.data.name)
   navigate("/"+loggedInUser.data.role)



   }catch{
    //console.log(exception);
    toast.error("Sorry!Could not login now!!!!",
      {description:"There was some problem while logging you in at this moment,try again."}
    )

   }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        id="loginForm"
        className="flex flex-col gap-5 p-4 "
      >
        <div className="flex flex-col w-full md:flex-row md:items-center">
          <FormLabel htmlFor="email">User name:</FormLabel>
          <div className="w-full md:w-3/4">
            <FormInputControl<ICredentials>
              name="email"
              type="email"
              control={control}
              placeholder="Enter your username"
              errMsg={errors?.email?.message}
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row md:items-center">
          <FormLabel htmlFor="password">Password:</FormLabel>
          <div className="w-full md:w-3/4">
            {/* <FormInput
              type="password"
              name="password"
              placeholder="Enter your password..."
              handler={control}
            /> */}
            <FormInputControl
              name="password"
              type="password"
              placeholder="Enter you password..."
              control={control}
              errMsg={errors?.password?.message}
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row justify-end">
          <NavLink
            to="/forget-password"
            className="text-teal-800 italic text-sm hover:underline"
          >
            Forget Password
          </NavLink>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-5 items-center">
          <FormCancelButton disabled={isSubmitting} label="Reset" />
          <FormSubmitButton disabled={isSubmitting} label="Login" />
        </div>
      </form>
    </>
  );
}
