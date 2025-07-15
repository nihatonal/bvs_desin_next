"use client";
import React, { useState } from 'react';
import { usePathname, useRouter } from '@/node_modules/next/navigation';
import { useTranslations } from "next-intl";

const smoothScrollTo = (targetY: number, duration = 600) => {
    const startY = window.scrollY;
    const distanceY = targetY - startY;
    let startTime: number | null = null;

    const step = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = 0.5 * (1 - Math.cos(Math.PI * progress));

        window.scrollTo(0, startY + distanceY * ease);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
};
const HeaderMenu = () => {
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("nav");
    const [selectedSection, setSelectedSection] = useState("home")


    const navItems = [
        { id: "home", label: t("home") },
        { id: "about", label: t("about") },
        { id: "services", label: t("services") },
        { id: "portfolio", label: t("portfolio") },
        { id: "pricing", label: t("pricing") },
        { id: "contact", label: t("contact") },
    ];


    const handleMenuClick = (id: string) => {
        const locale = pathname.split("/")[1]; // tr, en, ru gibi
        const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
        setSelectedSection(id);

        if (isHomePage) {
            const section = document.getElementById(id);
            if (section) {
                smoothScrollTo(section.offsetTop, 800); // 800ms yumuşak scroll
            }
        } else {
            router.push(`/${locale}`); // lokalize ana sayfaya yönlendir
            sessionStorage.setItem("scrollTo", id);
        }
    };

    return (
        <div className="hidden md:inline-flex w-1/3 items-center justify-center gap-3 lg:gap-7 text-sm capitalize font-semibold text-gray-800/80">
            {navItems?.map((item) => (
                <button
                    key={item?.id}
                    aria-label="nav button"
                    onClick={() => handleMenuClick(item.id)}
                    className={`whitespace-nowrap hover:text-bvs-accent hoverEffect relative group ${selectedSection === item?.id && "text-bvs-purple"
                        }`}
                >
                    {item.label}
                    <span
                        className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-bvs-purple group-hover:w-1/2 hoverEffect group-hover:left-0 ${selectedSection === item?.id && "w-1/2"
                            }`}
                    />
                    <span
                        className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-bvs-purple group-hover:w-1/2 hoverEffect group-hover:right-0 ${selectedSection === item?.id && "w-1/2"
                            }`}
                    />
                </button>
            ))}
        </div>

    )
}

export default HeaderMenu