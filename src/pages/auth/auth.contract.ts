import * as z from "zod"

export interface ICredentials {
    email: string;
    password: string;
  }
  
  export const LoginDTO = z.object({
    email: z.email().nonempty().nonoptional(),
    password: z.string().min(8).nonempty().nonoptional(),
  });