"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { TUser } from "types/auth";

interface TAuthContext {
    user: TUser | null;
    setUser: (user: TUser | null) => void;
}

export const AuthContext = createContext<TAuthContext>({
    user: null,
    setUser: () => {},
});

interface Props {
    children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<TUser | null>(null);

    useEffect(() => {
        if(!user){
            let existingUser = null;
            const userLocalStorage = async () => (existingUser = localStorage.getItem('stike_data'));

            console.log("**** ***** ***** " + userLocalStorage)

            if (existingUser) {
                try {
                  setUser(JSON.parse(existingUser));
                } catch (e) {
                  console.log(e);
                }
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
          {children}
        </AuthContext.Provider>
    );
}