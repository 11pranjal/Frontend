import { useEffect, useState, type ReactNode } from "react";
import AuthContext from "../AuthContext";
import type { ICredentials, IUser } from "../../pages/auth/auth.contract";
import axiosInstance from "../../config/axios.config";
import Cookies from "js-cookie";

export default function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {

    const [loggedInUser, setLoggedInUser] = useState<IUser | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const login = async (credentials: ICredentials): Promise<IUser | void> => {
        // NOTE: axiosInstance response interceptor returns response.data.data for auth endpoints

        const response = await axiosInstance.post("/auth/login", credentials);

        const token =
            (response as any)?.tokens?.accessToken ??
            (response as any)?.accessToken ??
            (response as any)?.token ??
            response;

        Cookies.set("token", String(token), {
            expires: 1,
            sameSite: "lax",
            // don't block cookies on http://localhost during dev
            secure: import.meta.env.PROD || window.location.protocol === "https:",

        })

        const userResponse = await getLoggedInUser();
        return userResponse;
    };

    const getLoggedInUser = async (): Promise<IUser | void> => {
        try {
            // axiosInstance interceptor returns response.data.data for auth endpoints
            const user = (await axiosInstance.get("/auth/me")) as unknown as IUser;
            setLoggedInUser(user);
            return user;
        } catch {
            setLoggedInUser(undefined);
        } finally {
            setLoading(false);
        }
    };

    const logout = async (): Promise<void> => {
        try {
            // If you have a specific logout API endpoint, call it here:
            await axiosInstance.post("/auth/logout");
        } catch (error) {
            // Silently fail if network/API fails - still clear state/client
        } finally {
            Cookies.remove("token");
            setLoggedInUser(undefined);
        }
    };
    

    useEffect(() => {
        getLoggedInUser();
    }, []);
    return (
        <>
            {loading ? "Loading..." : (
                <AuthContext.Provider value={{
                    login,
                    getLoggedInUser,
                    logout,
                    loggedInUser
                }}>
                    {children}
                </AuthContext.Provider>
            )}
        </>
    );
}