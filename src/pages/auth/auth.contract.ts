import * as z from "zod"

export interface ICredentials {
  email: string;
  password: string;
}

export const LoginDTO = z.object({
  email: z.email().nonempty().nonoptional(),
  password: z.string().min(8).nonempty().nonoptional(),
});

export interface IUser {
  address
  :
  null
  email: string,
  image: {
    publicID: string,
    url: string,
    thumb: string,
  }
  name: string,
  role: string,
  status: string,
  _id: string

}