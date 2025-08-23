"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useProtectRoute = (options?: { guestOnly?: boolean, redirect?: string }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (options?.guestOnly) {
            if (token) {
                router.push(options.redirect || '/pages/category');
            } else {
                setIsAuthenticated(true);
                setLoading(false);
            }
        } else {
            if (!token) {
                router.push(options?.redirect || '/auth/login');
            } else {
                setIsAuthenticated(true);
                setLoading(false);
            }
        }
    }, [options, router]);

    return { loading, isAuthenticated };
};
