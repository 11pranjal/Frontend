import z from "zod";
import type { IImage } from "../../common/GlobalType";

export interface IBannerCreateData {
    title: string,
    url: string,
    status: string,
    image: File 
}

export interface IBannerEditData {
    title: string,
    url: string,
    status: string,
    image?: File | null
}

export interface IBanner {
    _id: string,
    title: string,
    url: string,
    image: IImage,
    status: string, 
}

export const BannerDTO = z.object({
    title: z.string().min(3, "Atleast 3 character is required for title").nonempty("Title is required"),
    url: z.url().nonempty("URL is required"),
        status: z.string().regex(/^(active|inactive)$/, "Status can only be either Published or Unpublished").nonempty("Status is required"),
            image: z.file().nonoptional()
})

export const BannerEditDTO = z.object({
    title: z.string().min(3, "Atleast 3 character is required for title").nonempty("Title is required"),
    url: z.url().nonempty("URL is required"),
        status: z.string().regex(/^(active|inactive)$/, "Status can only be either Published or Unpublished").nonempty("Status is required"),
            image: z.file().optional().nullable()
})
