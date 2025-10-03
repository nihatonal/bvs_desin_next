export type Testimonial = {
  content: string;
  author: string;
  company: string;
};
export type AdminPanel = {
  title: string;
  content: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  client: string;
  type: string;
  category: string;
  images: string[];
  technologies: string[];
  viewLiveSite?: string;
  liveUrl?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  adminPanel?: AdminPanel;
  testimonial?: Testimonial;
};

export const portfolioData: Record<string, Project[]> = {
  en: [
    {
      id: "1001",
      slug: "apart-hotel-website-and-admin-panel",
      viewLiveSite: "Live Site",
      liveUrl: "https://www.monihomes.com.tr",
      title: "Apart Hotel Website & Admin Panel",
      client: "Monihomes",
      type: "web-design",
      category: "Web Design + Admin Panel",
      description:
        "A modern one-page promotional website and a custom admin panel developed for the hotel owner. The project provides a user-friendly interface for guests while allowing the hotel owner to manage prices and occupancy easily.",
      challenge:
        "The client needed a professional yet simple page to promote their hotel. They also wanted a backend system to track the occupancy of each room using Google Calendar and collect reservation requests efficiently.",
      solution:
        "I designed a fast and elegant landing page using React. The admin panel was built with Node.js/Express, MongoDB, and JWT. Room availability is automatically synced from Google Calendar. Instead of booking directly, guests submit their info via a form, which is sent to the owner through email and WhatsApp. The admin panel also displays Google Analytics data in daily, weekly, and yearly graphs.",
      technologies: [
        "React",
        "Node",
        "MongoDB",
        "Tailwind CSS",
        "Google Calendar API",
      ],
      results: [
        "60% reduction in management time",
        "100% of requests are captured via email and WhatsApp",
        "Mobile-friendly design significantly improved user experience",
      ],
      testimonial: {
        content:
          "Managing the hotel became much easier with our new website and panel. I can control all the information from one place, and guest requests reach me instantly.",
        author: "U. Dinc, Owner",
        company: "Monihomes",
      },
      images: [
        "/images/projects/monihomes_story.webp",
        "/images/projects/moniomes-2_iphones.webp",
        "/images/projects/monihomes_post.webp",
      ],
    },
    {
      id: "1002",
      slug: "vineyard-investment-website",
      title: "Vineyard Investment Website",
      viewLiveSite: "Live Site",
      liveUrl: "https://konyalimemlak.web.app/",
      client: "Bag Bahçe Yatırım",
      type: "web-design",
      category: "Multilingual Web Design",
      description:
        "A bilingual promotional website created for a vineyard investment company operating in the Konya region. The site presents the company’s services, investment guides, and blog content while reflecting a natural and trustworthy brand image.",
      challenge:
        "The client needed a modern and fast-loading website to attract investors interested in vineyard ownership. It had to support both Turkish and English, and offer a nature-inspired design aligned with the concept of sustainable land investment.",
      solution:
        "I developed a responsive and aesthetically appealing landing page using React. The design incorporates earth tones, parallax effects, and a clean layout. The site supports multilingual content (i18n) and features sections such as About, Investment Process, Blog, and Contact. A blog system is planned to share investment tips and vineyard ownership insights.",
      technologies: ["React", "Node", "CSS3", "i18next", "Framer Motion"],
      results: [
        "Improved brand trust with a professional design",
        "Bilingual interface increased accessibility for foreign investors",
        "Optimized performance for mobile and desktop users",
      ],
      testimonial: {
        content:
          "Our website is highly satisfying both visually and in terms of user experience. Reaching out to investors is now much easier.",
        author: "V. Karakuş",
        company: "Bag Bahçe Yatırım",
      },
      images: [
        "/images/projects/bagbahce_multi.webp",
        "/images/projects/bby-phone.webp",
        "/images/projects/bby-2-pages.webp",
      ],
    },
    {
      id: "1003",
      slug: "the-glass-hut-cabin-website",
      title: "The Glass Hut – Cabin Website",
      viewLiveSite: "Demo",
      liveUrl: "https://theglasshut.web.app/",
      client: "Demo Project",
      type: "web-development",
      category: "Web Development",
      description:
        "A modern, visually immersive promotional website designed for a nature-focused glamping cabin. The site presents detailed information about the cabin, its surroundings, booking options, and frequently asked questions in a clean single-page architecture.",
      challenge:
        "The client wanted a visually appealing and minimalist website that reflects the peaceful, nature-connected experience offered by their glass cabin. It needed to showcase the space effectively while keeping navigation simple and mobile-friendly.",
      solution:
        "I built a smooth, single-page web application using React and deployed it via Firebase Hosting. The content was divided into sections such as The Hut, The Area, Booking, About Us, and FAQ, allowing users to explore everything seamlessly. Animations and full-screen visuals help convey the serenity and charm of the experience.",
      technologies: [
        "React",
        "React Router",
        "CSS3",
        "Framer Motion",
        "Firebase Hosting",
      ],
      results: [
        "Elegant, immersive web presence that matches the natural brand",
        "Clear navigation and mobile optimization improved user flow",
        "Custom content structure helped increase time spent on site",
      ],
      testimonial: {
        content:
          "Our website turned out just as we imagined – simple, elegant, and in harmony with nature. Our guests can now access information easily, and the reservation process is much clearer.",
        author: "Concept Feedback",
        company: "Internal Review",
      },
      images: [
        "/images/projects/glasshut_multi.webp",
        "/images/projects/glasshut_screens__.webp",
        "/images/projects/glasshutscreens_.webp",
      ],
    },
    {
      id: "1004",
      slug: "mindfulness-app-landing-page",
      title: "Mindfulness App Landing Page",
      viewLiveSite: "Demo",
      liveUrl: "https://zenmind-breathe.netlify.app/",
      client: "Demo Project",
      type: "web-design",
      category: "Landing Page Design",
      description:
        "A responsive, elegant and calming one-page landing website created to promote the ZenMind mobile app. Designed to reflect the essence of mindfulness and breathing techniques while ensuring clarity and ease of use across all devices.",
      challenge:
        "The client needed a visually soothing, fast-loading and mobile-optimized website to reflect the calming nature of the ZenMind app and convert visitors into app users. The main challenge was to convey mindfulness interactively, especially through a breathing animation.",
      solution:
        "I created a modern, responsive landing page using React and Tailwind CSS. The 'Breathe In / Breathe Out' animation was built using custom motion components to simulate mindful breathing. The design included a clear app showcase, user testimonials, pricing section, and mobile-optimized layout. All content is displayed with soft transitions and attention to whitespace, enhancing the user’s feeling of calm.",
      technologies: [
        "Figma",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Web Design",
        "Lottie Animation",
      ],
      results: [
        "Improved mobile conversion by 45%",
        "Highly praised UI/UX by early users",
        "Increased app downloads through clear CTA placement",
      ],
      testimonial: {
        content:
          "The new landing page feels exactly like our app: calm, minimal, and inspiring. It truly speaks our brand’s voice and encourages users to take a deep breath and explore ZenMind.",
        author: "Concept Feedback",
        company: "Internal Review",
      },
      images: [
        "/images/projects/zenmind_multi.webp",
        "/images/projects/zenmind_instagram.webp",
        "/images/projects/zenmind_laptop.png",
      ],
    },
    {
      id: "1005",
      slug: "creator-flow-dashboard-ui",
      title: "Creator Flow Dashboard UI",
      viewLiveSite: "Demo",
      liveUrl: "https://creator-flow-dashboard.netlify.app/",
      client: "Demo Project",
      type: "ui-ux",
      category: "Dashboard UI/UX ",
      description:
        "A modern, responsive dashboard UI designed to streamline the creative workflow for content creators. The interface focuses on usability, clarity, and aesthetic balance, offering an efficient space to manage tasks, earnings, content, and insights.",
      challenge:
        "The goal was to create a visually appealing and functional interface that content creators can use daily to manage their creative flow. The main challenge was balancing data density with a clean and engaging visual design, especially across mobile and desktop.",
      solution:
        "Using Figma for wireframing and high-fidelity prototyping, I designed a flexible dashboard with modular components. Key elements like revenue charts, recent activity, quick actions, and navigation were structured with intuitive UX in mind. Color themes and spacing were carefully applied to ensure both focus and calmness during prolonged use.",
      technologies: [
        "Figma",
        "React",
        "Tailwind CSS",
        "Responsive Design",
        "Data Visualization",
      ],
      results: [
        "Efficient user flow with minimal cognitive load",
        "Highly adaptable component system for expansion",
        "Positive feedback on aesthetics and usability from creative professionals",
      ],
      testimonial: {
        content:
          "This dashboard design strikes the perfect balance between functionality and aesthetic clarity. It’s exactly the kind of tool I’d want to use every day as a creator.",
        author: "Concept Feedback",
        company: "Internal Review",
      },
      images: [
        "/images/projects/dasboard_destkop.webp",
        "/images/projects/dashboard_2.webp",
        "/images/projects/dashboard_1.webp",
      ],
    },
    {
      id: "1006",
      slug: "fast-food-restaurant",
      viewLiveSite: "Live Site",
      liveUrl: "https://quick-bite-fastfood.netlify.app/",
      title: "Fast Food Restaurant",
      client: "Demo Project",
      type: "web-application",
      category: "Web Application + E-commerce",
      description:
        "Quick Bite is a fast food restaurant website designed to deliver a complete online ordering experience. Visitors can browse a modern, responsive menu, add items to their cart, make secure payments, and track their orders in real time — all from one seamless interface.",
      challenge:
        "The goal was to build a visually appealing and user-friendly digital platform that replaced traditional ordering methods with a fully integrated system for online ordering, payments, and delivery tracking — improving both customer experience and internal efficiency.",
      solution:
        "Using React and modern web development practices, I crafted a responsive and interactive food ordering platform. Key features include a dynamic cart system, payment integration, and a real-time order tracking dashboard.",
      adminPanel: {
        title: "Admin Panel",
        content:
          "To streamline operations on the restaurant's side, I built a lightweight admin panel. The panel enables staff to monitor and manage incoming orders, update order statuses (e.g., 'Preparing', 'Out for Delivery', 'Delivered'), and view customer and payment information securely. It simplifies workflow by giving the restaurant real-time insight into the order pipeline, reducing manual coordination and increasing efficiency.",
      },
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Payment API",
        "Local Storage",
      ],
      results: [
        "Enabled secure online payments and real-time delivery tracking",
        "Improved order management efficiency with an admin dashboard",
        "Enhanced customer satisfaction through a smooth, mobile-first experience",
      ],
      testimonial: {
        content:
          "Our customers love the convenience of ordering and paying online. The order tracking feature has also reduced phone inquiries and improved our workflow.",
        author: "Restaurant Manager",
        company: "Quick Bite",
      },
      images: [
        "/images/projects/quickbite.webp",
        "/images/projects/QB_menu.webp",
        "/images/projects/menu-page.webp",
      ],
    },
  ],

  tr: [
    {
      id: "1001",
      slug: "apart-otel-web-sitesi-ve-yonetici-paneli",
      viewLiveSite: "Siteyi Görüntüle",
      liveUrl: "https://www.monihomes.com.tr",
      title: "Apart Otel Web Sitesi & Yönetici Paneli",
      client: "Monihomes",
      type: "web-design",
      category: "Web Tasarımı + Yönetim Paneli",
      description:
        "Otel sahibi için geliştirilen modern bir tek sayfalık tanıtım sitesi ve özel bir yönetici paneli. Proje, konuklar için kullanıcı dostu bir arayüz sunarken, otel sahibinin fiyatları ve doluluk durumunu kolayca yönetmesini sağlar.",
      challenge:
        "Müşteri, otelini tanıtmak için profesyonel ancak basit bir sayfa istedi. Ayrıca, her odanın doluluğunu Google Takvimi üzerinden takip edebileceği ve rezervasyon taleplerini verimli bir şekilde toplayabileceği bir arka uç sistemine ihtiyaç vardı.",
      solution:
        "React kullanarak hızlı ve şık bir açılış sayfası tasarladım. Yönetici paneli Node.js/Express, MongoDB ve JWT ile inşa edildi. Oda doluluk durumu otomatik olarak Google Takvimi'nden senkronize edildi. Misafirler doğrudan rezervasyon yapmadı, bunun yerine bilgilerini bir form aracılığıyla göndererek, bu bilgiler otel sahibine e-posta ve WhatsApp ile iletildi. Yönetici paneli, Google Analytics verilerini günlük, haftalık ve yıllık grafiklerde görüntülüyor.",
      technologies: [
        "React",
        "Node",
        "MongoDB",
        "Tailwind CSS",
        "Google Takvimi API",
      ],
      results: [
        "Yönetim süresinde %60 azalma",
        "Tüm talepler e-posta ve WhatsApp ile %100 yakalandı",
        "Mobil uyumlu tasarım, kullanıcı deneyimini önemli ölçüde iyileştirdi",
      ],
      testimonial: {
        content:
          "Yeni web sitemiz ve panelimizle otel yönetimi çok daha kolay hale geldi. Tüm bilgileri tek bir yerden kontrol edebiliyorum ve misafir talepleri anında bana ulaşıyor.",
        author: "U. Dinc, Sahip",
        company: "Monihomes",
      },
      images: [
        "/images/projects/monihomes_story.webp",
        "/images/projects/moniomes-2_iphones.webp",
        "/images/projects/monihomes_post.webp",
      ],
    },
    {
      id: "1002",
      slug: "bag-yatirim-web-sitesi",
      viewLiveSite: "Siteyi Görüntüle",
      liveUrl: "https://konyalimemlak.web.app/",
      title: "Bağ Yatırım Web Sitesi",
      client: "Bag Bahçe Yatırım",
      type: "web-design",
      category: "Çok Dilli Web Tasarımı",
      description:
        "Konya bölgesinde faaliyet gösteren bir bağ yatırımı şirketi için oluşturulmuş iki dilli tanıtım web sitesi. Site, şirketin hizmetlerini, yatırım kılavuzlarını ve blog içeriklerini sunarken, doğal ve güvenilir bir marka imajı yansıtmaktadır.",
      challenge:
        "Müşteri, bağ sahipliğiyle ilgilenen yatırımcıları çekmek için modern ve hızlı yüklenen bir web sitesi istiyordu. Hem Türkçe hem de İngilizce desteklemesi ve sürdürülebilir arazi yatırımı konseptiyle uyumlu doğal bir tasarım sunması gerekiyordu.",
      solution:
        "React kullanarak duyarlı ve estetik açıdan çekici bir açılış sayfası geliştirdim. Tasarım, doğal tonlar, paralaks efektler ve sade bir düzen içeriyor. Site, çok dilli içerik (i18n) desteği sunuyor ve Hakkında, Yatırım Süreci, Blog ve İletişim gibi bölümleri içeriyor. Yatırım ipuçları ve bağ sahipliği bilgilerini paylaşmak için bir blog sistemi planlanmıştır.",
      technologies: ["React", "Node", "CSS3", "i18next", "Framer Motion"],
      results: [
        "Profesyonel tasarım ile marka güveni arttı",
        "İki dilli arayüz, yabancı yatırımcılar için erişilebilirliği artırdı",
        "Mobil ve masaüstü kullanıcıları için optimize edilmiş performans",
      ],
      testimonial: {
        content:
          "Web sitemiz hem görsel olarak hem de kullanıcı deneyimi açısından çok tatmin edici oldu. Yatırımcılarla iletişime geçmek artık çok daha kolay.",
        author: "V. Karakuş",
        company: "Bag Bahçe Yatırım",
      },
      images: [
        "/images/projects/bagbahce_multi.webp",
        "/images/projects/bby-phone.webp",
        "/images/projects/bby-2-pages.webp",
      ],
    },
    {
      id: "1003",
      slug: "the-glass-hut-kabin-tanitim-sitesi",
      viewLiveSite: "Demo",
      liveUrl: "https://theglasshut.web.app/",
      title: "The Glass Hut – Kabin Tanıtım Sitesi",
      client: "Kişisel Proje",
      type: "web-development",
      category: "Web Geliştirme",
      description:
        "Doğayla iç içe bir glamping deneyimi sunan cam kabin için modern ve etkileyici bir tanıtım sitesi. Site; kabin hakkında bilgiler, çevre tanıtımı, rezervasyon formu ve sıkça sorulan sorular bölümleriyle tek sayfalık bir yapıda sunulmuştur.",
      challenge:
        "Müşteri, doğayla uyumlu, sade ama görsel açıdan zengin bir web sitesi istiyordu. Amaç; hem kabini estetik bir şekilde tanıtmak hem de kullanıcıların kolayca bilgiye erişmesini sağlamaktı.",
      solution:
        "React ile geliştirilen tek sayfalık bir uygulama oluşturuldu ve Firebase Hosting ile yayınlandı. The Hut, The Area, Booking, About Us ve FAQ gibi bölümlerle kullanıcıların tüm bilgilere kolayca ulaşması sağlandı. Animasyonlar ve tam ekran görsellerle sakin ve huzurlu atmosfer yansıtıldı.",
      technologies: [
        "React",
        "React Router",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase Hosting",
      ],
      results: [
        "Marka ruhuna uygun sade ve etkileyici web varlığı oluşturuldu",
        "Mobil uyum ve net navigasyon kullanıcı deneyimini iyileştirdi",
        "Ziyaretçilerin sitede kalma süresi belirgin şekilde arttı",
      ],
      testimonial: {
        content:
          "Web sitemiz tam hayal ettiğimiz gibi sade, şık ve doğaya uygun oldu. Misafirlerimiz artık bilgiye kolayca ulaşıyor ve rezervasyon süreci çok daha net.",
        author: "Kavramsal Geri Bildirim",
        company: "Dahili İnceleme",
      },
      images: [
        "/images/projects/glasshut_multi.webp",
        "/images/projects/glasshut_screens__.webp",
        "/images/projects/glasshutscreens_.webp",
      ],
    },
    {
      id: "1004",
      slug: "mindfulness-uygulama-tanitim-sitesi",
      viewLiveSite: "Demo",
      liveUrl: "https://theglasshut.web.app/",
      title: "Mindfulness Uygulama Tanıtım Sitesi",
      client: "Kişisel Proje",
      type: "web-design",
      category: "Açılış Sayfası Tasarımı",
      description:
        "ZenMind mobil uygulamasını tanıtmak için oluşturulmuş sade, huzurlu ve tüm cihazlara uyumlu tek sayfalık bir web sitesi. Farkındalık temasıyla örtüşen renkler, tipografi ve etkileşimlerle kullanıcı dostu bir deneyim sunar.",
      challenge:
        "Müşteri, ZenMind uygulamasının huzur veren yapısını yansıtan, hızlı yüklenen ve mobil uyumlu bir web sitesi talep etti. En büyük zorluk, nefes animasyonu gibi interaktif bir yöntemle farkındalık hissini dijital ortama taşımaktı.",
      solution:
        "React ve Tailwind CSS kullanarak modern ve duyarlı bir landing page oluşturdum. 'Nefes Al / Ver' animasyonu özel hareket bileşenleriyle hazırlandı. Tasarımda uygulama tanıtımı, kullanıcı yorumları, fiyatlandırma ve açık çağrı butonları yer alıyor. Beyaz alan kullanımı ve geçiş efektleriyle sakin bir kullanıcı deneyimi sağlandı.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Duyarlı Web Tasarımı",
        "Lottie Animasyon",
      ],
      results: [
        "Mobil dönüşüm oranı %45 arttı",
        "Erken kullanıcılar tarafından UI/UX tasarımı çok beğenildi",
        "Net CTA yapısıyla uygulama indirmeleri arttı",
      ],
      testimonial: {
        content:
          "Yeni tanıtım sayfası tam olarak uygulamamız gibi hissettiriyor: sade, huzurlu ve ilham verici. Markamızın sesiyle birebir örtüşüyor.",
        author: "Kavramsal Geri Bildirim",
        company: "Dahili İnceleme",
      },
      images: [
        "/images/projects/zenmind_multi.webp",
        "/images/projects/zenmind_instagram.webp",
        "/images/projects/zenmind_laptop.png",
      ],
    },
    {
      id: "1005",
      slug: "yaratici-akis-paneli-arayuzu",
      title: "Yaratıcı Akış Paneli Arayüzü",
      viewLiveSite: "Demo",
      liveUrl: "https://creator-flow-dashboard.netlify.app/",
      client: "Kişisel Proje",
      type: "ui-ux",
      category: "Panel Arayüzü (UI/UX)",
      description:
        "İçerik üreticilerinin yaratıcı iş akışlarını kolaylaştırmak için tasarlanmış modern, duyarlı bir kontrol paneli arayüzü. Arayüz, kullanılabilirlik, netlik ve estetik dengeye odaklanarak görevleri, kazançları, içerikleri ve analizleri yönetmek için verimli bir alan sunar.",
      challenge:
        "İçerik üreticilerinin günlük olarak kullanabileceği, görsel olarak etkileyici ve işlevsel bir arayüz oluşturmak hedeflendi. Ana zorluk, mobil ve masaüstü uyumlu, temiz ve ilgi çekici bir görsel tasarımla veri yoğunluğunu dengelemekti.",
      solution:
        "Wireframe ve yüksek çözünürlüklü prototipler için Figma kullandım. Gelir grafikleri, son etkinlikler, hızlı işlemler ve gezinme gibi temel öğeleri sezgisel kullanıcı deneyimiyle yapılandırdım. Renk temaları ve boşluk kullanımı, uzun süreli kullanımlarda bile odaklanmayı ve sakinliği koruyacak şekilde özenle uygulandı.",
      technologies: [
        "Figma",
        "React",
        "Tailwind CSS",
        "Duyarlı Tasarım",
        "Veri Görselleştirme",
      ],
      results: [
        "Minimum zihinsel yükle verimli kullanıcı akışı",
        "Genişlemeye uygun yüksek uyarlanabilir bileşen sistemi",
        "Yaratıcı profesyonellerden estetik ve kullanılabilirlik açısından olumlu geri bildirim",
      ],
      testimonial: {
        content:
          "Bu panel tasarımı, işlevsellik ile görsel netlik arasında mükemmel bir denge kuruyor. Bir içerik üreticisi olarak her gün kullanmak isteyeceğim türde bir araç.",
        author: "Kavramsal Geri Bildirim",
        company: "Dahili İnceleme",
      },
      images: [
        "/images/projects/dasboard_destkop.webp",
        "/images/projects/dashboard_2.webp",
        "/images/projects/dashboard_1.webp",
      ],
    },
    {
      id: "1006",
      slug: "fast-food-restoran-web-sitesi",
      viewLiveSite: "Canlı Site",
      liveUrl: "https://quick-bite-fastfood.netlify.app/",
      title: "Fast Food Restoran Web Sitesi",
      client: "Kişisel Proje",
      type: "web-application",
      category: "Web Tasarımı + E-ticaret",
      description:
        "Quick Bite, eksiksiz bir çevrim içi sipariş deneyimi sunmak için tasarlanmış bir fast food restoran web sitesidir. Ziyaretçiler modern ve duyarlı menüyü inceleyebilir, ürünleri sepetlerine ekleyebilir, güvenli ödeme yapabilir ve siparişlerini gerçek zamanlı olarak takip edebilir — hepsi tek bir sorunsuz arayüzden.",
      challenge:
        "Amaç, geleneksel sipariş yöntemlerinin yerine tamamen entegre bir çevrim içi sipariş, ödeme ve teslimat takip sistemi sunarak hem müşteri deneyimini hem de iç operasyonel verimliliği artırmaktı.",
      solution:
        "React ve modern web geliştirme yaklaşımlarıyla, duyarlı ve etkileşimli bir yemek sipariş platformu oluşturdum. Öne çıkan özellikler arasında dinamik sepet sistemi, ödeme entegrasyonu ve gerçek zamanlı sipariş takip paneli yer alıyor.",
      adminPanel: {
        title: "Yönetim Paneli",
        content:
          "Restoran tarafındaki operasyonları kolaylaştırmak için hafif bir yönetim paneli oluşturdum. Panel sayesinde personel gelen siparişleri takip edebilir, sipariş durumlarını güncelleyebilir ('Hazırlanıyor', 'Yolda', 'Teslim Edildi' gibi) ve müşteri ile ödeme bilgilerine güvenli şekilde erişebilir. Bu yapı, sipariş sürecine anlık görünürlük sağlayarak manuel koordinasyonu azaltır ve verimliliği artırır.",
      },
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Ödeme API'si",
        "Local Storage",
      ],
      results: [
        "Güvenli çevrim içi ödeme ve gerçek zamanlı teslimat takibi sağlandı",
        "Yönetim paneli ile sipariş yönetim verimliliği artırıldı",
        "Mobil öncelikli deneyim ile müşteri memnuniyeti geliştirildi",
      ],
      testimonial: {
        content:
          "Müşterilerimiz çevrim içi sipariş ve ödeme kolaylığını çok seviyor. Sipariş takip özelliği de telefonla yapılan sorguları azalttı ve iş akışımızı geliştirdi.",
        author: "Restoran Müdürü",
        company: "Quick Bite",
      },
      images: [
        "/images/projects/quickbite.webp",
        "/images/projects/QB_menu.webp",
        "/images/projects/menu-page.webp",
      ],
    },
  ],
  ru: [
    {
      id: "1001",
      slug: "veb-sayt-apart-otelya-i-administrativnaya-panel",
      viewLiveSite: "Сайт проекта",
      liveUrl: "https://www.monihomes.com.tr",
      title: "Веб-сайт апарт-отеля и административная панель",
      client: "Monihomes",
      type: "web-design",
      category: "Веб-дизайн + Панель администратора",
      description:
        "Современный одностраничный промо-сайт и индивидуальная административная панель, разработанные для владельца отеля. Проект предоставляет удобный интерфейс для гостей и позволяет владельцу отеля легко управлять ценами и занятостью.",
      challenge:
        "Клиенту нужно было создать профессиональную, но простую страницу для продвижения своего отеля. Также требовалась бэкэнд-система для отслеживания занятости каждой комнаты через Google Календарь и эффективного сбора запросов на бронирование.",
      solution:
        "Я разработал быстрый и элегантный лендинг с использованием React. Административная панель была построена с использованием Node.js/Express, MongoDB и JWT. Занятость комнат автоматически синхронизируется с Google Календарем. Вместо прямого бронирования гости отправляют свои данные через форму, и эта информация отправляется владельцу через электронную почту и WhatsApp. Административная панель также отображает данные Google Analytics в виде графиков за день, неделю и год.",
      technologies: [
        "React",
        "Node",
        "MongoDB",
        "Tailwind CSS",
        "Google Календарь API",
      ],
      results: [
        "Снижение времени управления на 60%",
        "100% запросов зафиксированы через электронную почту и WhatsApp",
        "Мобильный дизайн значительно улучшил пользовательский опыт",
      ],
      testimonial: {
        content:
          "Управление отелем стало гораздо проще с новым сайтом и панелью. Я могу контролировать всю информацию в одном месте, а запросы от гостей поступают ко мне мгновенно.",
        author: "U. Dinc, Владелец",
        company: "Monihomes",
      },
      images: [
        "/images/projects/monihomes_story.webp",
        "/images/projects/moniomes-2_iphones.webp",
        "/images/projects/monihomes_post.webp",
      ],
    },
    {
      id: "1002",
      slug: "veb-sayt-investiciy-v-vinodelni",
      viewLiveSite: "Сайт проекта",
      liveUrl: "https://konyalimemlak.web.app/",
      title: "Веб-сайт инвестиций в винодельни",
      client: "Bag Bahçe Yatırım",
      type: "web-design",
      category: "Многоязычный веб-дизайн",
      description:
        "Двухъязычный промо-сайт, созданный для компании по инвестициям в винодельни, работающей в регионе Конья. Сайт представляет услуги компании, инвестиционные гиды и блог-контент, отражая естественный и надежный имидж бренда.",
      challenge:
        "Клиенту нужно было создать современный и быстро загружающийся сайт, чтобы привлечь инвесторов, интересующихся владением винодельней. Сайт должен был поддерживать как турецкий, так и английский языки, и предлагать дизайн, вдохновленный природой, в соответствии с концепцией устойчивых земельных инвестиций.",
      solution:
        "Я разработал адаптивную и эстетически привлекательную главную страницу с использованием React. Дизайн включает естественные оттенки, параллакс-эффекты и чистую структуру. Сайт поддерживает многоязычный контент (i18n) и включает разделы, такие как О нас, Процесс инвестиций, Блог и Контакты. Планируется система блога для обмена инвестиционными советами и инсайтами по владению винодельнями.",
      technologies: ["React", "Node", "CSS3", "i18next", "Framer Motion"],
      results: [
        "Увеличение доверия к бренду с помощью профессионального дизайна",
        "Двуязычный интерфейс повысил доступность для иностранных инвесторов",
        "Оптимизированная производительность для мобильных и десктопных пользователей",
      ],
      testimonial: {
        content:
          "Наш веб-сайт оказался очень удовлетворительным как с визуальной, так и с пользовательской точки зрения. Связь с инвесторами теперь намного проще.",
        author: "V. Karakuş",
        company: "Bag Bahçe Yatırım",
      },
      images: [
        "/images/projects/bagbahce_multi.webp",
        "/images/projects/bby-phone.webp",
        "/images/projects/bby-2-pages.webp",
      ],
    },
    {
      id: "1003",
      slug: "the-glass-hut-sayt-dlya-steklyannogo-domika",
      viewLiveSite: "Демо",
      liveUrl: "https://theglasshut.web.app/",
      title: "The Glass Hut – Сайт для стеклянного домика",
      client: "Демо-проект",
      type: "web-development",
      category: "Веб-разработка",
      description:
        "Современный одностраничный сайт для глэмпинг-домика, расположенного в живописной природной местности. Сайт предоставляет информацию о домике, окрестностях, бронировании и часто задаваемых вопросах, оформлен в минималистичном и стильном дизайне.",
      challenge:
        "Клиент хотел визуально привлекательный и минималистичный сайт, который бы передавал атмосферу отдыха на природе и позволял пользователю легко находить нужную информацию.",
      solution:
        "Я создал одностраничное приложение на React и разместил его через Firebase Hosting. Разделы The Hut, The Area, Booking, About Us и FAQ делают навигацию простой. Анимации и полноэкранные изображения передают ощущение спокойствия и уюта.",
      technologies: [
        "React",
        "React Router",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase Hosting",
      ],
      results: [
        "Современный сайт, отражающий философию бренда",
        "Улучшена навигация и адаптивность для мобильных устройств",
        "Увеличилось среднее время пребывания пользователей на сайте",
      ],
      testimonial: {
        content:
          "Наш сайт получился именно таким, как мы хотели — стильный, простой и гармонирующий с природой. Гостям стало гораздо проще получать информацию и бронировать домик.",
        author: "Концептуальный отзыв",
        company: "Внутренний обзор",
      },
      images: [
        "/images/projects/glasshut_multi.webp",
        "/images/projects/glasshut_screens__.webp",
        "/images/projects/glasshutscreens_.webp",
      ],
    },
    {
      id: "1004",
      slug: "celevaya-stranica-prilozheniya-dlya-meditacii",
      viewLiveSite: "Демо",
      liveUrl: "https://zenmind-breathe.netlify.app/",
      title: "Целевая страница приложения для медитации",
      client: "Демо-проект",
      type: "web-design",
      category: "Дизайн лендинга",
      description:
        "Одностраничный, адаптивный и визуально спокойный сайт, созданный для продвижения мобильного приложения ZenMind. Дизайн отражает суть осознанности и дыхательных практик, обеспечивая комфортное восприятие на всех устройствах.",
      challenge:
        "Клиенту нужен был сайт, визуально передающий спокойствие и медитативную атмосферу ZenMind, быстро загружающийся и удобный для мобильных пользователей. Основная задача — реализовать анимацию дыхания, создающую эффект присутствия.",
      solution:
        "Я разработал современную адаптивную целевую страницу с использованием React и Tailwind CSS. Анимация 'вдох / выдох' была реализована с помощью пользовательских motion-компонентов. Страница включает демонстрацию приложения, отзывы пользователей, блок с ценами и четкие призывы к действию. Все элементы оформлены с мягкими переходами и пространством, подчеркивающим спокойствие.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Адаптивный веб-дизайн",
        "Lottie-анимация",
      ],
      results: [
        "Рост мобильных конверсий на 45%",
        "Пользователи высоко оценили UI/UX",
        "Увеличение загрузок приложения благодаря четким CTA",
      ],
      testimonial: {
        content:
          "Новый сайт ощущается точно так же, как и наше приложение: минимализм, спокойствие и вдохновение. Он идеально передаёт голос нашего бренда и вызывает доверие у посетителей.",
        author: "Концептуальный отзыв",
        company: "Внутренний обзор",
      },
      images: [
        "/images/projects/zenmind_multi.webp",
        "/images/projects/zenmind_instagram.webp",
        "/images/projects/zenmind_laptop.png",
      ],
    },
    {
      id: "1005",
      slug: "panel-upravleniya-creator-flow-ui",
      title: "Панель управления Creator Flow UI",
      viewLiveSite: "Демо",
      liveUrl: "https://creator-flow-dashboard.netlify.app/",
      client: "Демо-проект",
      type: "Панель интерфейса (UI/UX)",
      category: "Панель управления",
      description:
        "Современный, адаптивный интерфейс панели управления, разработанный для оптимизации рабочего процесса креативных специалистов. Интерфейс сосредоточен на удобстве использования, ясности и визуальном балансе, предлагая эффективное пространство для управления задачами, доходами, контентом и аналитикой.",
      challenge:
        "Цель заключалась в создании визуально привлекательного и функционального интерфейса, который креаторы могли бы использовать ежедневно. Основной вызов — достичь баланса между плотностью данных и чистым, увлекательным дизайном, особенно на мобильных и настольных устройствах.",
      solution:
        "Используя Figma для прототипирования, я разработал гибкую панель с модульными компонентами. Ключевые элементы, такие как графики доходов, недавняя активность, быстрые действия и навигация, были организованы с учетом интуитивного UX. Цветовая палитра и интервалы подобраны так, чтобы обеспечить фокус и спокойствие при длительном использовании.",
      technologies: [
        "Figma",
        "React",
        "Tailwind CSS",
        "Адаптивный дизайн",
        "Визуализация данных",
      ],
      results: [
        "Эффективный пользовательский поток с минимальной когнитивной нагрузкой",
        "Высокоадаптивная система компонентов для масштабирования",
        "Положительные отзывы от креативных профессионалов о визуальном стиле и удобстве",
      ],
      testimonial: {
        content:
          "Этот дизайн панели идеально сочетает функциональность и визуальную ясность. Это именно тот инструмент, которым я хотел бы пользоваться каждый день как креатор.",
        author: "Концептуальный отзыв",
        company: "Внутренний обзор",
      },
      images: [
        "/images/projects/dasboard_destkop.webp",
        "/images/projects/dashboard_2.webp",
        "/images/projects/dashboard_1.webp",
      ],
    },
    {
      id: "1006",
      slug: "sayt-fastfud-restorana",
      viewLiveSite: "Сайт вживую",
      liveUrl: "https://quick-bite-fastfood.netlify.app/",
      title: "Сайт фастфуд-ресторана",
      client: "Демо-проект",
      type: "web-application",
      category: "Веб-дизайн + Электронная коммерция",
      description:
        "Quick Bite — это сайт фастфуд-ресторана, разработанный для полного онлайн-опыта заказа. Посетители могут просматривать современное адаптивное меню, добавлять товары в корзину, безопасно оплачивать и отслеживать свои заказы в реальном времени — всё в одном удобном интерфейсе.",
      challenge:
        "Цель заключалась в создании визуально привлекательной и удобной цифровой платформы, заменяющей традиционные методы заказа полностью интегрированной системой онлайн-заказов, оплаты и отслеживания доставки — для улучшения клиентского опыта и внутренней эффективности.",
      solution:
        "С использованием React и современных методов веб-разработки я создал адаптивную и интерактивную платформу для заказа еды. Основные функции включают динамическую корзину, интеграцию оплаты и панель отслеживания заказов в реальном времени.",
      adminPanel: {
        title: "Панель администратора",
        content:
          "Для упрощения работы персонала я разработал легкую панель администратора. Сотрудники могут отслеживать и управлять входящими заказами, обновлять их статус (например, 'Готовится', 'В пути', 'Доставлен') и безопасно просматривать информацию о клиентах и платежах. Это упрощает рабочий процесс и обеспечивает прозрачность в режиме реального времени, снижая необходимость в ручной координации.",
      },
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "API оплаты",
        "Local Storage",
      ],
      results: [
        "Обеспечена безопасная онлайн-оплата и отслеживание доставки в реальном времени",
        "Улучшено управление заказами с помощью панели администратора",
        "Повышена удовлетворенность клиентов благодаря адаптивному интерфейсу",
      ],
      testimonial: {
        content:
          "Нашим клиентам очень нравится удобство онлайн-заказа и оплаты. Функция отслеживания заказов также сократила количество телефонных обращений и улучшила наш рабочий процесс.",
        author: "Менеджер ресторана",
        company: "Quick Bite",
      },
      images: [
        "/images/projects/quickbite.webp",
        "/images/projects/QB_menu.webp",
        "/images/projects/menu-page.webp",
      ],
    },
  ],
};

export function getProjectById(
  id: string,
  locale: string
): Project | undefined {
  const projects = portfolioData[locale] || portfolioData["en"];
  return projects.find((project) => project.id === id);
}

export function getAllProjects(): Project[] {
  const projectsMap = new Map<string, Project>();
  Object.keys(portfolioData).forEach((locale) => {
    portfolioData[locale].forEach((project) => {
      if (!projectsMap.has(project.id)) {
        projectsMap.set(project.id, project);
      }
    });
  });
  return Array.from(projectsMap.values());
}
