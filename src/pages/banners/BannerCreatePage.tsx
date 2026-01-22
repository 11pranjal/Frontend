import { useForm } from "react-hook-form";
import { TableHedaer } from "../../components/ui/TableHeader";
import { useAuth } from "../../hooks/auth";
import { BannerDTO, type IBannerCreateData } from "./banner.contract";
import { FormLabel } from "../../components/form/FormLabel";
import { FileInput, FormInputControl, SelectInput } from "../../components/form/FormInput";
import { FormCancelButton, FormSubmitButton } from "../../components/form/FormAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axiosInstance from "../../config/axios.config";
import { useNavigate } from "react-router";

export default function BannerCreatePage() {
    const {loggedInUser}=useAuth()
    const {control,handleSubmit,formState:{errors,isSubmitting}}=useForm<IBannerCreateData>({
        defaultValues:{ title: "",
    url: "",
    status: "",
    image: {} as File},
    resolver:zodResolver(BannerDTO)
    })
    const navigate = useNavigate()

    const submitHandler=async(data:IBannerCreateData)=>{
  try{
   await axiosInstance.post("/banner",data,{
    headers:{
        "Content-Type":"multipart/form-data"
    }
   })
    toast.success("Banner created successfully!")
    navigate(`/${loggedInUser?.role}/banners`)
  }catch{
    toast.error("Could not create banner at this moment, try again later!!!")
  }
    
    }


return(<section className="flex flex-col gap-6">
    <TableHedaer title="Banner Create Page" showSearch={false} btnTxt="<-Go Back" btnUrl={`/${loggedInUser?.role}/banners`}/>
   <div className="overflow-x-auto rounded-lg shadow bg-gray-200 p-5">
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-5">
    <div className="flex">
  <FormLabel htmlFor="title" >Title:</FormLabel>
  <div className="w-3/4">
  <FormInputControl
    control={control}
    name="title"
    type="text"
    placeholder="Enter banner title here..."
   errMsg={errors.title?.message}
  />
  </div>
    </div>


 <div className="flex">
  <FormLabel htmlFor="url" >Url:</FormLabel>
  <div className="w-3/4">
  <FormInputControl
    control={control}
    name="url"
    type="url"
    placeholder="Enter banner link here..."
   errMsg={errors.url?.message}
  />
  </div>
    </div>

    <div className="flex">
  <FormLabel htmlFor="status" >Status:</FormLabel>
  <div className="w-3/4">
  <SelectInput
   name="status"
    control={control}
    errMsg={errors.status?.message}
    options={[
        {label:"Published",value:"active"},
        {label:"Unpublished",value:"inactive"}
    ]}
  />
  </div>
    </div>

 <div className="flex">
  <FormLabel htmlFor="image" >Image:</FormLabel>
  <div className="w-3/4">
  <FileInput
  name="image"
control={control}
errMsg={errors.image?.message}/>
  </div>
    </div>

    
        <div className="flex flex-col md:flex-row w-full  justify-end">
          <div className="w-3/4 flex gap-3">
          <FormCancelButton disabled={isSubmitting} label="Reset" />
          <FormSubmitButton disabled={isSubmitting} label="Submit" />
        </div>
        </div>

    </form>

   </div>
   
    </section>)

}