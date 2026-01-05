"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
    username: string | null;
    login: (name: string) => void;
    isLoggedIn: boolean;
    hasCheckedSession: boolean;
}

const UserContext = createContext<UserContextType>({
    username: null,
    login: () => { },
    isLoggedIn: false,
    hasCheckedSession: false,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [username, setUsername] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasCheckedSession, setHasCheckedSession] = useState(false);

    useEffect(() => {
        // Check local storage on mount
        const storedUser = localStorage.getItem("cosy_username");
        if (storedUser) {
            setUsername(storedUser);
            setIsLoggedIn(true);
        }
        setHasCheckedSession(true);
    }, []);

    const login = (name: string) => {
        localStorage.setItem("cosy_username", name);
        setUsername(name);
        setIsLoggedIn(true);
    };

    return (
        <UserContext.Provider value={{ username, login, isLoggedIn, hasCheckedSession }}>
            {children}
        </UserContext.Provider>
    );
};
