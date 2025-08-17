import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
    label: string
}

export const Input = ({ label, id, className = "", ...props }: InputProps) => {
    const baseInputClasses = "w-full px-4 py-3 rounded-lg border border-gray-300";
    const focusClasses = "focus:outline-none focus:ring-2 focus:ring-[#F47458] focus:border-[#F47458]";
    const transitionClass = "transition";

    return (
        <div className="">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                {label}
            </label>

            <input
                id={id}
                className={`${baseInputClasses} ${focusClasses} ${transitionClass} ${className}`}
                {...props}
            />
        </div>
    );
};