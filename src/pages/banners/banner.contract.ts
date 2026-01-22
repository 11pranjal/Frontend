import z from "zod";

export interface IBannerCreateData{
    title: string,
    url: string,
    status: string,
    image: File 
}
export const BannerDTO=z.object({
title:z.string().min(3,"Atleast 3 character is required for title").nonempty("Title is required"),
url:z.url().nonempty("URL is required"),
status:z.string().regex(/^(active|inactive)$/,"Status can only be either Published or Unpublished").nonempty("Status is required"),
image:z.file().nonoptional()
})