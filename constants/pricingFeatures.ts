export const pricingFeatures = {
  en: {
    basic: [
      "5-page responsive website",
      "Basic SEO setup",
      "Contact form",
      "Mobile friendly design",
      "3 rounds of revisions",
    ],
    pro: [
      "10-page responsive website",
      "Advanced SEO setup",
      "Content Management System",
      "E-commerce functionality",
      "Social media integration",
      "5 rounds of revisions",
    ],
    premium: [
      "Unlimited pages",
      "Full SEO package",
      "Custom animations",
      "E-commerce with payment gateway",
      "Advanced analytics",
      "Unlimited revisions",
      "Priority support",
    ],
  },
  tr: {
    basic: [
      "5 sayfalık duyarlı web sitesi",
      "Temel SEO ayarları",
      "İletişim formu",
      "Mobil uyumlu tasarım",
      "3 revizyon hakkı",
    ],
    pro: [
      "10 sayfalık duyarlı web sitesi",
      "Gelişmiş SEO ayarları",
      "İçerik Yönetim Sistemi",
      "E-ticaret özelliği",
      "Sosyal medya entegrasyonu",
      "5 revizyon hakkı",
    ],
    premium: [
      "Sınırsız sayfa",
      "Tam SEO paketi",
      "Özel animasyonlar",
      "Ödeme altyapılı e-ticaret",
      "Gelişmiş analiz araçları",
      "Sınırsız revizyon",
      "Öncelikli destek",
    ],
  },
  ru: {
    basic: [
      "Адаптивный сайт из 5 страниц",
      "Базовая SEO-настройка",
      "Форма обратной связи",
      "Мобильный дизайн",
      "3 раунда правок",
    ],
    pro: [
      "Адаптивный сайт из 10 страниц",
      "Продвинутая SEO-настройка",
      "CMS система",
      "Функциональность электронной торговли",
      "Интеграция с соцсетями",
      "5 раундов правок",
    ],
    premium: [
      "Неограниченное количество страниц",
      "Полный SEO пакет",
      "Индивидуальные анимации",
      "Электронная торговля с оплатой",
      "Расширенная аналитика",
      "Неограниченные правки",
      "Приоритетная поддержка",
    ],
  },
} as const;

export type PlanLocale = keyof typeof pricingFeatures; // 'en' | 'tr' | 'ru'
export type PlanKey = keyof (typeof pricingFeatures)["en"]; // 'basic' | 'pro' | 'premium'
