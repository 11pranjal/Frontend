import { createContext } from "react";
import type { ICredentials, IUser } from "../pages/auth/auth.contract";

export interface IAuthContext {
    login: (data: ICredentials) => Promise<IUser | void>;
    getLoggedInUser: () => Promise<IUser | void>,
    loggedInUser: undefined | IUser
}

const AuthContext = createContext<IAuthContext>({
    // eslint-disable-next-line 
    login: async (): Promise<IUser | void> => { },
    getLoggedInUser: async (): Promise<IUser | void> => {},
    loggedInUser: undefined
});

export default AuthContext;