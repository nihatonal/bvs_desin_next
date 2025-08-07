import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/node_modules/next/navigation";
import { handleMenuNavigation } from "@/utils/navigation";

import React from "react";

const Logo = ({
    className,
    spanDesign,
}: {
    className?: string;
    spanDesign?: string;
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const scrollToHome = (id: string) => {
        handleMenuNavigation({
            id,
            pathname,
            router
        });
    };
    return (
        <button aria-label="home page" className="flex flex-col text-bvs-logoText">
            <h2
                className={cn(
                    "text-2xl text-bvs-logoT font-black tracking-wider uppercase hover:text-bvs-purple hoverEffect group font-sans",
                    className
                )}
                onClick={() => scrollToHome("home")}
            >
                Bravi<span className="text-bvs-logoX">X</span>{" "}

            </h2>
            <span
                className={cn(
                    "text-md group-hover:text-bvs-accent hoverEffect",
                    spanDesign
                )}
            >
                Creative
            </span>
        </button>
    );
};

export default Logo;