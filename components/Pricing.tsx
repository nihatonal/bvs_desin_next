"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { usePlan } from "@/lib/PlanContext";
import { pricingFeatures } from "@/constants/pricingFeatures";

interface RawPlan {
    key: "basic" | "pro" | "premium";
    highlighted: boolean;
}
type SupportedLocale = keyof typeof pricingFeatures; // "en" | "tr" | "ru"

export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const locale = useLocale() as SupportedLocale;
    const t = useTranslations("pricing");
    const { setSelectedPlan } = usePlan();

    const rawPlans: RawPlan[] = [
        { key: "basic", highlighted: false },
        { key: "pro", highlighted: true },
        { key: "premium", highlighted: false },
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth",
            });
        }
    };

    const handleClick = (planLabel: string) => {
        setSelectedPlan(planLabel);
        scrollToSection("contact");
    };

    return (
        <section id="pricing" className="py-20 bg-gray-50 px-2 lg:px-20">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">{t("subtitle")}</p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {rawPlans.map((plan, index) => {
                        const name = t(`${plan.key}.title`);
                        const price = t(`${plan.key}.price`);
                        const description = t(`${plan.key}.description`);
                        const features = pricingFeatures[locale]?.[plan.key] || [];
                        const cta = t(`${plan.key}.cta`);

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`rounded-xl overflow-hidden ${plan.highlighted
                                    ? "shadow-xl border-bvs-purple border-2 transform md:-translate-y-4 relative"
                                    : "shadow-md border border-gray-100"
                                    }`}
                            >
                                {plan.highlighted && (
                                    <div className="absolute top-6 right-4 -mr-4 -mt-4 bg-bvs-purple text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                                        {t("popular")}
                                    </div>
                                )}

                                <div
                                    className={`p-6 md:p-8 bg-white ${plan.highlighted
                                        ? "bg-gradient-to-b from-white to-bvs-light-purple/5"
                                        : ""
                                        }`}
                                >
                                    <h3 className="text-xl font-bold mb-1">{name}</h3>
                                    <p className="text-gray-600 mb-4 text-sm">{description}</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold">{price}</span>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {features.map((feature: string, i: number) => (
                                            <li key={i} className="flex items-start">
                                                <div
                                                    className={`flex-shrink-0 mr-2 mt-1 ${plan.highlighted
                                                        ? "text-bvs-purple"
                                                        : "text-gray-700"
                                                        }`}
                                                >
                                                    <Check size={18} />
                                                </div>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        aria-label="price button"
                                        className={`w-full py-3 rounded-lg font-medium ${plan.highlighted
                                            ? "bg-bvs-purple text-white hover:bg-bvs-purple/90"
                                            : "bg-white border border-bvs-purple text-bvs-purple hover:bg-bvs-purple/5"
                                            } transition-colors`}
                                        onClick={() => handleClick(`${name} ${price}`)}
                                    >
                                        {cta}
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.p
                    className="text-center mt-12 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {t("custom")}
                </motion.p>
            </div>
        </section>
    );
}
