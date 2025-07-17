"use client";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";

import hero_image from "../public/images/stylish_realistic_web_designer_office__2.webp";
import { ArrowRight, MessageSquare } from "lucide-react";
import { handleMenuNavigation } from "@/utils/navigation";
import { usePathname, useRouter } from "@/node_modules/next/navigation";

const HiddenImageSection = dynamic(() => import('@/components/HiddenImageSection'), {
    ssr: false, // sadece istemci tarafında yüklenecek
    loading: () => null, // yüklenene kadar hiçbir şey gösterme
});

export default function Hero() {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("hero");
    const [showSection, setShowSection] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowSection(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" } // biraz önden yüklemeye başlasın
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);
    const scrollToSection = (id: string) => {
        handleMenuNavigation({
            id,
            pathname,
            router
        });
    };

    return (
        <div>
            <div
                id="home"
                className="relative  min-h-screen flex flex-col justify-start pt-32 lg:pt-44 px-4"
            >
                <div className="max-w-screen-xl mx-auto grid grid-areas-mobile lg:grid-areas-desktop grid-cols-1 lg:grid-cols-2 items-center gap-20">
                    {/* Text */}
                    <div
                        ref={ref}
                        className="grid-in-text space-y-6 min-h-[320px]"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] text-bvs-blue">
                            {t("title.part1")}{" "}
                            <span className="gradient-text">{t("title.part2")} </span>
                            {t("title.part3")}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 lg:mb-8 max-w-xl">
                            {t("description")}
                        </p>

                        <div className="grid grid-cols-2 lg:flex gap-4 pt-6">
                            <button
                                aria-label="portfolio button"
                                onClick={() => scrollToSection("portfolio")}
                                className="flex items-center justify-center gap-2 bg-bvs-accent hover:bg-bvs-purple py-2 px-4 text-white rounded-[8px]"
                            >
                                {t("cta_1")}<ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                aria-label="contact button"
                                onClick={() => scrollToSection("contact")}
                                className="flex items-center justify-center gap-2 btn-outline py-2 px-4 text-bvs-accent border border-1 border-bvs-accent hover:bg-bvs-purple hover:text-white rounded-[8px]"
                            >
                                {t("cta_2")}<MessageSquare className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute top-0 right-[-4rem] w-80 h-80 bg-bvs-lightPurple rounded-full filter blur-3xl opacity-20"></div>
                        <div className="absolute bottom-0 left-[-4rem] w-72 h-72 bg-bvs-purple rounded-full filter blur-2xl opacity-20"></div>
                    </div>

                    {/* Image */}
                    <div ref={ref}>
                        {showSection && <HiddenImageSection hero_image={hero_image} />}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-32 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-10 h-16 border-2 border-bvs-accent/80 rounded-full flex justify-center mb-1">
                        <div className="w-1 h-3 bg-bvs-accent/80 rounded-full mt-2 animate-scroll"></div>
                    </div>
                    <span className="text-sm text-[#58758D]">{t("scroll")}</span>
                </div>
            </div>
        </div>
    );
}
