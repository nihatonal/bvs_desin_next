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
        <button aria-label="home page" className="inline-flex">
            <h2
                className={cn(
                    "text-2xl text-bvs-accent font-black tracking-wider uppercase hover:text-bvs-purple hoverEffect group font-sans",
                    className
                )}
                onClick={() => scrollToHome("home")}
            >
                Bvs-
                <span
                    className={cn(
                        "text-bvs-blue group-hover:text-bvs-accent hoverEffect",
                        spanDesign
                    )}
                >
                    Design
                </span>
            </h2>
        </button>
    );
};

export default Logo;