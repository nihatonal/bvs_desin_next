import { cn } from "@/lib/utils";
import Link from "@/node_modules/next/link";

import React from "react";

const Logo = ({
    className,
    spanDesign,
}: {
    className?: string;
    spanDesign?: string;
}) => {
    return (
        <Link aria-label="home page" href={"/"} className="inline-flex">
            <h2
                className={cn(
                    "text-2xl text-bvs-accent font-black tracking-wider uppercase hover:text-bvs-purple hoverEffect group font-sans",
                    className
                )}
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
        </Link>
    );
};

export default Logo;