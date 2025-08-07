import { cn } from "@/lib/utils";
import Image from "@/node_modules/next/image";
import { usePathname, useRouter } from "@/node_modules/next/navigation";
import { handleMenuNavigation } from "@/utils/navigation";

import React from "react";
import logo from '../assets/webp/bravix_x.png'
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
        <button aria-label="home page" className="flex text-bvs-logoText">

            <div className="group relative flex flex-col">
                <h2
                    className={cn(
                        "flex flex-col text-2xl leading-none text-bvs-logoT font-black tracking-wider uppercase group-hover:text-bvs-logoText/80 hoverEffect group font-sans",
                        className
                    )}
                    onClick={() => scrollToHome("home")}
                >
                    Bravi
                    <span
                        className={cn(
                            "text-sm font-medium group-hover:text-bvs-accent hoverEffect",
                            spanDesign
                        )}
                    >
                        Creative
                    </span>

                    <Image
                        src={logo}
                        alt="bravix logo"
                        width={32}
                        height={32}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      className="absolute -top-1 -right-8 object-cover rounded-xl"
                        priority
                        fetchPriority="high"
                        placeholder="blur"
                    />
                </h2>


            </div>

        </button>
    );
};

export default Logo;    