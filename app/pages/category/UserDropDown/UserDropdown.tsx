"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserDropdown = () => {
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // click outside close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        toast.success("Logout successful! 🎉");
        router.push("/pages/auth/login");
    };

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 hover:border-gray-400 transition-colors flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 shadow-sm"
            >
                <img
                    src="/img/user.svg"
                    alt="User Avatar"
                    className="w-8 h-8 object-cover"
                />
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden transition-all duration-300 transform origin-top-right scale-100 opacity-100">
                    <div className="p-2">
                        <div className="px-3 py-2 border-b border-gray-100">
                            <p className="text-sm font-medium text-gray-700 text-center">Ibrahim Gazi</p>
                            <p className="text-xs text-gray-500">ibrahimgazi@example.com</p>
                        </div>

                        <Link
                            href="/pages/profile"
                            className="flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-purple-50 rounded-lg transition-colors group"
                            onClick={() => setDropdownOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-500 group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Profile
                        </Link>

                        <Link
                            href="/settings"
                            className="flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors group"
                            onClick={() => setDropdownOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Settings
                        </Link>

                        <button
                            onClick={() => {
                                handleLogout();
                                setDropdownOpen(false);
                            }}
                            className="flex items-center w-full text-left px-3 py-3 text-sm text-gray-700 hover:bg-red-50 rounded-lg transition-colors group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-red-500 group-hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserDropdown;
