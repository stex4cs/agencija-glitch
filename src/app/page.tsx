"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";



export default function Page() {
  // Refs (mobilni meni i video)
  const navBtnRef = useRef<HTMLButtonElement | null>(null);
  const navMenuRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Godina u footeru (setujemo posle mount-a)
  const [year, setYear] = useState<number | null>(null);

  // Data-URI "noise" pozadina (memo)
  const noiseBg = useMemo(
    () =>
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
    []
  );

  // State (dodaj na vrh Page komponente):
const [openFaq, setOpenFaq] = useState<number | null>(null);

// FAQ data:
const faqs = [
  {
    question: "Koliko košta izrada web sajta?",
    answer: "Cena zavisi od kompleksnosti projekta. Landing page kreće od 500€, dok kompleksnije aplikacije počinju od 2000€. Kontaktirajte nas za tačnu procenu prilagođenu vašim potrebama.",
    icon: "💰"
  },
  {
    question: "Koliko traje proces izrade?",
    answer: "Landing page možemo isporučiti za 1-2 nedelje, dok kompleksniji projekti kao e-commerce ili SaaS aplikacije traju 4-12 nedelja. Tokom procesa imate redovne revizije i ažuriranja.",
    icon: "⏱️"
  },
  {
    question: "Da li nudite održavanje i podršku?",
    answer: "Da! Uz svaki projekat dobijate 30 dana besplatne podrške. Nakon toga nudimo mesečne pakete održavanja od 100€ mesečno koji uključuju ažuriranja, backup i tehničku podršku.",
    icon: "🛠️"
  },
  {
    question: "Koje tehnologije koristite?",
    answer: "Koristimo moderne web tehnologije: React/Next.js za frontend, Node.js ili Python za backend, PostgreSQL/MongoDB za baze podataka. Za dizajn koristimo Figma, za video Adobe Premiere i After Effects.",
    icon: "⚡"
  },
  {
    question: "Da li radite sa klijentima van Srbije?",
    answer: "Apsolutno! Radimo sa klijentima iz cele regije i šire. Komunikacija se odvija online putem Zoom sastanaka, Slack ili email-a. Plaćanje prihvatamo preko bankovnog transfera ili PayPal-a.",
    icon: "🌍"
  },
  {
    question: "Šta je potrebno da započnemo saradnju?",
    answer: "Potreban je kratak brief gde opisujete projekat, ciljeve i budžet. Nakon inicijalnog razgovora pripremamo ponudu sa rokovima i cenom. Posle potpisivanja ugovora, plaćanje se vrši u ratama (50% početak, 50% završetak).",
    icon: "🚀"
  },
  {
    question: "Da li nudite SEO optimizaciju?",
    answer: "Da, svi naši sajtovi su SEO optimized od starta - brzo učitavanje, mobilna verzija, meta tagovi, strukturirani podaci. Nudimo i mesečne SEO pakete za kontinuiranu optimizaciju i praćenje performansi.",
    icon: "📈"
  },
  {
    question: "Mogu li dobiti training za korišćenje sajta?",
    answer: "Naravno! Uz isporuku dobijate kompletnu dokumentaciju i 1-2 training sesije (live ili snimljeno) gde pokazujemo kako se upravlja sadržajem, dodaju proizvodi, menjaju stranice itd.",
    icon: "🎓"
  }
];


  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(null);

const integrations = [
  {
    name: "Meta Ads",
    icon: "📱",
    color: "from-blue-500 to-blue-600",
    description: "Facebook i Instagram advertising integracija. Kreiraj kampanje, prati konverzije i optimizuj budžet direktno iz naše platforme.",
    features: ["Campaign Management", "Pixel Integration", "Audience Targeting", "Real-time Analytics"]
  },
  {
    name: "Google Ads",
    icon: "🔍",
    color: "from-green-500 to-green-600",
    description: "Google Ads integration za search i display kampanje. Automatizovano bidovanje i kompletna analitika.",
    features: ["Search Campaigns", "Display Network", "Shopping Ads", "Performance Max"]
  },
  {
    name: "Stripe",
    icon: "💳",
    color: "from-purple-500 to-purple-600",
    description: "Stripe payment gateway integracija. Prihvataj plaćanja, rukuj pretplatama i upravljaj fakturama.",
    features: ["Payment Processing", "Subscriptions", "Invoicing", "Fraud Detection"]
  },
  {
    name: "Telegram Ads",
    icon: "✈️",
    color: "from-cyan-500 to-blue-500",
    description: "Telegram Ads platforma za targeted oglašavanje. Dosegni više od 800M+ korisnika.",
    features: ["Channel Promotion", "Bot Integration", "Message Broadcasting", "Analytics"]
  },
  {
    name: "Notion",
    icon: "📝",
    color: "from-gray-600 to-gray-700",
    description: "Notion & Frame.io integracija za project management. Sinhronizuj taskove, fajlove i timsku komunikaciju.",
    features: ["Task Sync", "File Management", "Team Collaboration", "Workflow Automation"]
  },
  {
    name: "GA4 & GSC",
    icon: "📊",
    color: "from-orange-500 to-red-500",
    description: "Google Analytics 4 i Search Console integracija. Kompletna analitika web traffica i SEO performansi.",
    features: ["Traffic Analytics", "SEO Insights", "Conversion Tracking", "Custom Reports"]
  },
];

  useEffect(() => {
  const btn = navBtnRef.current;
  const menu = navMenuRef.current;
  
  // Helper function - proveri da li je mobilni
  const isMobile = () => window.innerWidth < 768;
  
  const openMenu = () => {
    menu?.classList.remove('hidden');
    setTimeout(() => {
      menu?.classList.add('animate-fadeIn');
    }, 10);
    
    // Blokiraj scroll SAMO na mobilnom
    if (isMobile()) {
      document.body.style.overflow = 'hidden';
    }
  };
  
  const closeMenu = () => {
    menu?.classList.add('hidden');
    menu?.classList.remove('animate-fadeIn');
    
    // Vrati scroll SAMO ako je bio blokiran (mobilni)
    if (isMobile()) {
      document.body.style.overflow = '';
    }
  };
  
  const toggleMenu = () => {
    if (menu?.classList.contains('hidden')) {
      openMenu();
    } else {
      closeMenu();
    }
  };
  
  btn?.addEventListener('click', toggleMenu);
  
  // Close menu when clicking on links
  const menuLinks = menu?.querySelectorAll('a');
  menuLinks?.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Close menu on ESC key
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  };
  document.addEventListener('keydown', handleEscape);

  // Reveal on scroll
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("active");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document
    .querySelectorAll<HTMLElement>(".reveal")
    .forEach((el) => io.observe(el));

  // Footer year
  setYear(new Date().getFullYear());

  // Force video playback na iOS
  const video = videoRef.current;
  if (video) {
    // Pokušaj da pustiš video nakon što se učita
    video.load();
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Ako autoplay ne uspe, pokušaj ponovo nakon interakcije
        const playOnInteraction = () => {
          video.play();
          document.removeEventListener('touchstart', playOnInteraction);
          document.removeEventListener('click', playOnInteraction);
        };
        document.addEventListener('touchstart', playOnInteraction);
        document.addEventListener('click', playOnInteraction);
      });
    }
  }

  return () => {
    btn?.removeEventListener('click', toggleMenu);
    menuLinks?.forEach(link => {
      link.removeEventListener('click', closeMenu);
    });
    document.removeEventListener('keydown', handleEscape);
    io.disconnect();
    
    // Cleanup - vrati scroll
    document.body.style.overflow = '';
  };
}, []);


  return (
    <main className="bg-glitch-bg text-glitch-fg font-display antialiased selection:bg-glitch-primary/30">
      {/* Noise overlay */}
      <div
        className="noise pointer-events-none fixed inset-0 opacity-5 mix-blend-soft-light"
        aria-hidden="true"
        style={{ backgroundImage: noiseBg }}
      />

      {/* NAVBAR - SA POBOLJŠANIM MOBILNIM MENIJEM */}
<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
  <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
    {/* Logo */}
    <a href="#home" className="flex items-center gap-2 group">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="drop-shadow-glow"
        aria-hidden="true"
      >
        <path
          d="M3 6h7l-1 3h6l-2 6h8"
          stroke="#00e5ff"
          strokeWidth="2"
        />
        <path d="M2 18h8l2-6H6l2-6" stroke="#8b5cf6" strokeWidth="2" />
      </svg>
      <span className="text-xl font-extrabold tracking-wide">GLITCH</span>
    </a>

    {/* Hamburger Button */}
    <button
      ref={navBtnRef}
      className="md:hidden relative w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-glitch-accent transition-colors"
      aria-label="Toggle menu"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    {/* Desktop Menu */}
    <ul className="hidden md:flex items-center gap-6 text-sm">
      <li>
        <a href="#usluge" className="hover:text-glitch-accent transition-colors">
          Usluge
        </a>
      </li>
      <li>
        <a href="#radovi" className="hover:text-glitch-accent transition-colors">
          Radovi
        </a>
      </li>
      <li>
        <a href="#proces" className="hover:text-glitch-accent transition-colors">
          Proces
        </a>
      </li>
      <li>
        <a href="#kontakt" className="hover:text-glitch-accent transition-colors">
          Kontakt
        </a>
      </li>
      <li>
        <a
          href="#ponuda"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-glitch-primary to-glitch-accent text-black font-semibold hover:scale-105 transition-transform"
        >
          Zatraži ponudu
        </a>
      </li>
    </ul>
  </nav>

  {/* Mobile Menu Overlay - SA JAKIM BLUR-om */}
<div
  ref={navMenuRef}
  className="md:hidden fixed inset-0 z-50 hidden bg-black"
>
  {/* Content */}
  <div className="relative h-full flex flex-col bg-black">
    {/* Header with Close Button */}
    <div className="flex items-center justify-between px-4 py-4 border-b border-white/10 bg-black">
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h7l-1 3h6l-2 6h8" stroke="#00e5ff" strokeWidth="2" />
          <path d="M2 18h8l2-6H6l2-6" stroke="#8b5cf6" strokeWidth="2" />
        </svg>
        <span className="text-lg font-bold">GLITCH</span>
      </div>
      
      <button
        onClick={() => {
          navMenuRef.current?.classList.add('hidden');
          document.body.style.overflow = 'auto';
        }}
        className="w-10 h-10 rounded-lg border border-white/20 hover:border-red-500 hover:bg-red-500/10 flex items-center justify-center transition-all"
        aria-label="Close menu"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    {/* Navigation Links */}
    <nav className="flex-1 flex items-center justify-center px-6 bg-black">
      <ul className="space-y-8 text-center w-full">
        <li>
          <a 
            href="#usluge" 
            className="block text-4xl font-bold hover:text-glitch-accent transition-all hover:scale-105"
            onClick={() => {
              navMenuRef.current?.classList.add('hidden');
              document.body.style.overflow = 'auto';
            }}
          >
            Usluge
          </a>
        </li>
        <li>
          <a 
            href="#radovi" 
            className="block text-4xl font-bold hover:text-glitch-accent transition-all hover:scale-105"
            onClick={() => {
              navMenuRef.current?.classList.add('hidden');
              document.body.style.overflow = 'auto';
            }}
          >
            Radovi
          </a>
        </li>
        <li>
          <a 
            href="#proces" 
            className="block text-4xl font-bold hover:text-glitch-accent transition-all hover:scale-105"
            onClick={() => {
              navMenuRef.current?.classList.add('hidden');
              document.body.style.overflow = 'auto';
            }}
          >
            Proces
          </a>
        </li>
        <li>
          <a 
            href="#kontakt" 
            className="block text-4xl font-bold hover:text-glitch-accent transition-all hover:scale-105"
            onClick={() => {
              navMenuRef.current?.classList.add('hidden');
              document.body.style.overflow = 'auto';
            }}
          >
            Kontakt
          </a>
        </li>
        <li className="pt-6">
          <a
            href="#ponuda"
            className="inline-block px-10 py-5 rounded-xl bg-gradient-to-r from-glitch-primary to-glitch-accent text-black text-xl font-bold shadow-glow hover:scale-105 transition-transform"
            onClick={() => {
              navMenuRef.current?.classList.add('hidden');
              document.body.style.overflow = 'auto';
            }}
          >
            Zatraži ponudu
          </a>
        </li>
      </ul>
    </nav>

    {/* Footer Info */}
    <div className="px-6 py-6 border-t border-white/10 bg-black">
      <div className="space-y-3 text-center text-sm">
        <div>
          <a href="mailto:info@glitch.rs" className="text-white/70 hover:text-glitch-accent transition-colors">
            info@glitch.rs
          </a>
        </div>
        <div>
          <a href="tel:+381111234567" className="text-white/70 hover:text-glitch-accent transition-colors">
            +381 (0)11 123 4567
          </a>
        </div>
        <div className="flex gap-3 justify-center pt-3">
          <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-glitch-accent hover:bg-glitch-accent/10 flex items-center justify-center transition-all">
            📷
          </a>
          <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-glitch-accent hover:bg-glitch-accent/10 flex items-center justify-center transition-all">
            💼
          </a>
          <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-glitch-accent hover:bg-glitch-accent/10 flex items-center justify-center transition-all">
            🎨
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</header>

     {/* HERO - Sa videom kao full background */}
<section
  id="home"
  className="relative min-h-screen flex items-center overflow-hidden"
>
  {/* Background video */}
  <div className="absolute inset-0 overflow-hidden">
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/images/hero-image.webp"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ pointerEvents: 'none' }}
    >
      <source src="/images/hero-video.webm" type="video/webm" />
      {/* Dodaj MP4 verziju za iOS kompatibilnost - konvertuj video u MP4 format */}
      Tvoj browser ne podržava video background.
    </video>

    {/* Dark overlay za bolji kontrast teksta */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Matrix grid overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(0,229,255,0.03)_1px),linear-gradient(90deg,transparent_0,rgba(0,229,255,0.03)_1px)] bg-[length:50px_50px] opacity-40"></div>

    {/* Gradient overlay odozdo */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
  </div>

  {/* Sadržaj - preko videa */}
  <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
    <div className="max-w-3xl reveal">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
        Marketing koji{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-glitch-accent to-glitch-primary">
          pravi hype
        </span>{" "}
        i proizvodi rezultate.
      </h1>
      <p className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl">
        Snimanje i postprodukcija, dizajn i kodiranje, izrada web sajtova
        i aplikacija. GLITCH isporučuje{" "}
        <span className="text-glitch-accent font-semibold">WOW efekat</span> uz
        performanse i pristupačnost.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#ponuda"
          className="px-6 py-4 rounded-xl bg-glitch-accent text-black font-semibold shadow-glow hover:shadow-[0_0_60px_rgba(0,229,255,.3)] transition-all"
        >
          Zatraži ponudu
        </a>
        <a
          href="#radovi"
          className="px-6 py-4 rounded-xl border-2 border-white/30 hover:border-glitch-accent hover:bg-glitch-accent/10 transition-all backdrop-blur-sm"
        >
          Pogledaj radove
        </a>
      </div>
      <div className="mt-8 text-sm text-white/70 backdrop-blur-sm bg-black/20 inline-block px-4 py-2 rounded-full">
        Prosečan odgovor u roku od 24h • Beograd
      </div>
    </div>
  </div>
</section>




      
     {/* USLUGE - SA MATRIX EFEKTIMA */}
<section
  id="usluge"
  className="relative py-24 md:py-32 border-t border-white/10 overflow-hidden"
>
  {/* Background image - dodaj svoju ili koristi gradijent */}
  <div 
  className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
  //                                              ^^^^^^^^ OVO JE PARALLAX!
  style={{
    backgroundImage: "url('/images/services-bg.webp')"
  }}
>
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-[#0a0a0b]/80"></div>
    
    {/* Matrix grid */}
    <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(0,229,255,0.03)_1px),linear-gradient(90deg,transparent_0,rgba(0,229,255,0.03)_1px)] bg-[length:40px_40px] opacity-30"></div>
    
    {/* Diagonal stripes */}
    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_30px,rgba(139,92,246,0.03)_30px,rgba(139,92,246,0.03)_60px)]"></div>
    
    {/* Animated gradient orbs */}
    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#8b5cf6]/10 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00e5ff]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
        Šta{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-glitch-accent to-glitch-primary">
          radimo
        </span>
      </h2>
      <p className="reveal text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
        Kompletan spektar digitalnih usluga za tvoj brend
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {/* Marketing & Strategija */}
      <article className="reveal group relative">
        {/* 3D Layered shadows */}
        <div className="absolute -inset-3 bg-gradient-to-br from-[#1a2828]/40 to-[#0d1414]/40 rounded-2xl transform translate-y-4 translate-x-3 blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
        <div className="absolute -inset-1 bg-gradient-to-br from-[#1a2828]/60 to-[#0d1414]/60 rounded-2xl transform translate-y-2 translate-x-1.5 blur-lg opacity-0 group-hover:opacity-80 transition-all duration-500"></div>

        {/* Main card */}
        <div className="relative p-8 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-sm hover:border-glitch-accent/40 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden h-full">
          {/* Matrix grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.05)_50%,transparent_75%)] bg-[length:15px_15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Diagonal stripes */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(255,255,255,0.02)_8px,rgba(255,255,255,0.02)_16px)] opacity-60"></div>
          
          {/* Glow effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-glitch-accent/0 via-glitch-accent/20 to-glitch-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

          <div className="relative z-10">
            {/* Icon sa gradient */}
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              📣
            </div>

            <h3 className="font-bold text-xl mb-3 group-hover:text-glitch-accent transition-colors">
              Marketing & Strategija
            </h3>
            
            <p className="text-white/70 text-sm leading-relaxed">
              Kampanje koje podižu brend: social, performance, kreativa,
              medija planovi i analitika.
            </p>

            {/* Hover indicator */}
            <div className="mt-4 flex items-center gap-2 text-xs text-glitch-accent opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Saznaj više</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </article>

      {/* Video produkcija */}
      <article className="reveal group relative">
        <div className="absolute -inset-3 bg-gradient-to-br from-[#1a2828]/40 to-[#0d1414]/40 rounded-2xl transform translate-y-4 translate-x-3 blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
        <div className="absolute -inset-1 bg-gradient-to-br from-[#1a2828]/60 to-[#0d1414]/60 rounded-2xl transform translate-y-2 translate-x-1.5 blur-lg opacity-0 group-hover:opacity-80 transition-all duration-500"></div>

        <div className="relative p-8 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-sm hover:border-glitch-primary/40 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden h-full">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.05)_50%,transparent_75%)] bg-[length:15px_15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(255,255,255,0.02)_8px,rgba(255,255,255,0.02)_16px)] opacity-60"></div>
          <div className="absolute -inset-[1px] bg-gradient-to-r from-glitch-primary/0 via-glitch-primary/20 to-glitch-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-700/20 border border-purple-500/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              🎬
            </div>

            <h3 className="font-bold text-xl mb-3 group-hover:text-glitch-primary transition-colors">
              Video produkcija
            </h3>
            
            <p className="text-white/70 text-sm leading-relaxed">
              Snimanje i montaža komercijalnih spotova, korporativnih videa,
              Instagram / TikTok reels.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-glitch-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Saznaj više</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </article>

      {/* Web sajtovi & aplikacije */}
      <article className="reveal group relative">
        <div className="absolute -inset-3 bg-gradient-to-br from-[#1a2828]/40 to-[#0d1414]/40 rounded-2xl transform translate-y-4 translate-x-3 blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
        <div className="absolute -inset-1 bg-gradient-to-br from-[#1a2828]/60 to-[#0d1414]/60 rounded-2xl transform translate-y-2 translate-x-1.5 blur-lg opacity-0 group-hover:opacity-80 transition-all duration-500"></div>

        <div className="relative p-8 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-sm hover:border-glitch-accent/40 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden h-full">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.05)_50%,transparent_75%)] bg-[length:15px_15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(255,255,255,0.02)_8px,rgba(255,255,255,0.02)_16px)] opacity-60"></div>
          <div className="absolute -inset-[1px] bg-gradient-to-r from-glitch-accent/0 via-glitch-accent/20 to-glitch-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              💻
            </div>

            <h3 className="font-bold text-xl mb-3 group-hover:text-glitch-accent transition-colors">
              Web sajtovi & aplikacije
            </h3>
            
            <p className="text-white/70 text-sm leading-relaxed">
              Landing page, e-commerce, SaaS app. React / Next.js, Tailwind,
              API integracije i hosting.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-glitch-accent opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Saznaj više</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </article>

      {/* Grafički dizajn & brending */}
      <article className="reveal group relative">
        <div className="absolute -inset-3 bg-gradient-to-br from-[#1a2828]/40 to-[#0d1414]/40 rounded-2xl transform translate-y-4 translate-x-3 blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
        <div className="absolute -inset-1 bg-gradient-to-br from-[#1a2828]/60 to-[#0d1414]/60 rounded-2xl transform translate-y-2 translate-x-1.5 blur-lg opacity-0 group-hover:opacity-80 transition-all duration-500"></div>

        <div className="relative p-8 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-sm hover:border-glitch-primary/40 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden h-full">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.05)_50%,transparent_75%)] bg-[length:15px_15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(255,255,255,0.02)_8px,rgba(255,255,255,0.02)_16px)] opacity-60"></div>
          <div className="absolute -inset-[1px] bg-gradient-to-r from-glitch-primary/0 via-glitch-primary/20 to-glitch-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-500/20 border border-purple-600/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              🎨
            </div>

            <h3 className="font-bold text-xl mb-3 group-hover:text-glitch-primary transition-colors">
              Grafički dizajn & brending
            </h3>
            
            <p className="text-white/70 text-sm leading-relaxed">
              Vizuelni identiteti, social media creative, newsletter dizajn,
              prezentacije, 3D vizualizacije.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-glitch-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Saznaj više</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </article>
    </div>

    {/* CTA na dnu */}
    <div className="reveal text-center mt-16">
      <a 
        href="#kontakt"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-glitch-accent text-black font-bold shadow-glow hover:scale-105 transition-all"
      >
        <span>Zatraži besplatnu konsultaciju</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</section>

      {/* RADOVI - SA MATRIX EFEKTIMA */}
<section
  id="radovi"
  className="relative py-24 md:py-32 border-t border-white/10 overflow-hidden"
>
  {/* Background */}
  <div className="absolute inset-0">
    {/* Dark base */}
    <div className="absolute inset-0 bg-[#0a0a0b]"></div>
    
    {/* Gradient orbs */}
    <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-[#8b5cf6] opacity-8 rounded-full blur-[140px] animate-pulse"></div>
    <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#00e5ff] opacity-8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    
    {/* Matrix grid */}
    <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(0,229,255,0.02)_1px),linear-gradient(90deg,transparent_0,rgba(0,229,255,0.02)_1px)] bg-[length:50px_50px] opacity-20"></div>
    
    {/* Diagonal stripes */}
    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(139,92,246,0.02)_40px,rgba(139,92,246,0.02)_80px)]"></div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    {/* Header */}
    <div className="mb-16">
      <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
        Naši{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-glitch-accent to-glitch-primary">
          radovi
        </span>
      </h2>
      <p className="reveal text-lg md:text-xl text-white/70 max-w-2xl">
        Projekti koje smo realizovali za naše klijente - od strateškog brendinga do kompleksnih web aplikacija.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {/* Projekat 1 - Kompletan rebrand */}
      <article className="reveal group relative">
        {/* 3D layered shadows */}
        <div className="absolute -inset-4 bg-gradient-to-br from-[#1a2828]/30 to-[#0d1414]/30 rounded-3xl transform translate-y-6 translate-x-4 blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
        <div className="absolute -inset-2 bg-gradient-to-br from-[#1a2828]/50 to-[#0d1414]/50 rounded-3xl transform translate-y-3 translate-x-2 blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

        {/* Main card */}
        <div className="relative rounded-3xl bg-black/70 border border-white/10 backdrop-blur-sm overflow-hidden group-hover:border-glitch-accent/40 transition-all duration-500 group-hover:-translate-y-2">
          {/* Matrix grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Glow effect */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-glitch-accent/0 via-glitch-accent/30 to-glitch-accent/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

          <div className="relative z-10 p-6 md:p-8">
            {/* Image placeholder sa hover overlay */}
            <div className="relative aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-600/10 overflow-hidden group-hover:border-glitch-accent/30 transition-colors">
              {/* Image overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              
              {/* Diagonal stripes on image */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]"></div>
              
              {/* Hover overlay text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <span className="text-sm font-semibold text-glitch-accent">Pogledaj projekat</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300">Branding</span>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">Video</span>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">Web</span>
              </div>

              <h3 className="font-bold text-2xl mb-2 group-hover:text-glitch-accent transition-colors">
                Kompletan rebrand
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                Izrada brend identiteta, foto-video produkcija, novi sajt sa custom CMS sistemom i integracijom sa društvenim mrežama.
              </p>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-glitch-accent">6+</div>
                  <div className="text-xs text-white/50">Meseci</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-glitch-accent">3x</div>
                  <div className="text-xs text-white/50">ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-glitch-accent">50K+</div>
                  <div className="text-xs text-white/50">Reach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Projekat 2 - SaaS aplikacija */}
      <article className="reveal group relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-[#1a2828]/30 to-[#0d1414]/30 rounded-3xl transform translate-y-6 translate-x-4 blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
        <div className="absolute -inset-2 bg-gradient-to-br from-[#1a2828]/50 to-[#0d1414]/50 rounded-3xl transform translate-y-3 translate-x-2 blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

        <div className="relative rounded-3xl bg-black/70 border border-white/10 backdrop-blur-sm overflow-hidden group-hover:border-glitch-primary/40 transition-all duration-500 group-hover:-translate-y-2">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.05)_50%,transparent_75%)] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute -inset-[2px] bg-gradient-to-r from-glitch-primary/0 via-glitch-primary/30 to-glitch-primary/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

          <div className="relative z-10 p-6 md:p-8">
            <div className="relative aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-blue-600/10 overflow-hidden group-hover:border-glitch-primary/30 transition-colors">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-2">💻</div>
                  <span className="text-sm font-semibold text-glitch-primary">Pogledaj projekat</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">SaaS</span>
                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">Next.js</span>
                <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">Stripe</span>
              </div>

              <h3 className="font-bold text-2xl mb-2 group-hover:text-glitch-primary transition-colors">
                SaaS aplikacija
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                Next.js frontend, Node + PostgreSQL backend, Stripe payment integracija, real-time analytics dashboard.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-glitch-primary">8+</div>
                  <div className="text-xs text-white/50">Meseci</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-glitch-primary">1K+</div>
                  <div className="text-xs text-white/50">Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-glitch-primary">99%</div>
                  <div className="text-xs text-white/50">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Projekat 3 - Instagram kampanja */}
      <article className="reveal group relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-[#1a2828]/30 to-[#0d1414]/30 rounded-3xl transform translate-y-6 translate-x-4 blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
        <div className="absolute -inset-2 bg-gradient-to-br from-[#1a2828]/50 to-[#0d1414]/50 rounded-3xl transform translate-y-3 translate-x-2 blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

        <div className="relative rounded-3xl bg-black/70 border border-white/10 backdrop-blur-sm overflow-hidden group-hover:border-glitch-accent/40 transition-all duration-500 group-hover:-translate-y-2">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute -inset-[2px] bg-gradient-to-r from-glitch-accent/0 via-glitch-accent/30 to-glitch-accent/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

          <div className="relative z-10 p-6 md:p-8">
            <div className="relative aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-pink-600/10 overflow-hidden group-hover:border-glitch-accent/30 transition-colors">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <span className="text-sm font-semibold text-glitch-accent">Pogledaj projekat</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300">Social</span>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">Marketing</span>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">Video</span>
              </div>

              <h3 className="font-bold text-2xl mb-2 group-hover:text-glitch-accent transition-colors">
                Instagram kampanja
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                Kreativa, video produkcija, content planiranje i performance oglašavanje sa real-time optimizacijom.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-glitch-accent">3+</div>
                  <div className="text-xs text-white/50">Meseca</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-glitch-accent">500K+</div>
                  <div className="text-xs text-white/50">Impressions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-glitch-accent">8%</div>
                  <div className="text-xs text-white/50">Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Projekat 4 - E-commerce */}
      <article className="reveal group relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-[#1a2828]/30 to-[#0d1414]/30 rounded-3xl transform translate-y-6 translate-x-4 blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
        <div className="absolute -inset-2 bg-gradient-to-br from-[#1a2828]/50 to-[#0d1414]/50 rounded-3xl transform translate-y-3 translate-x-2 blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

        <div className="relative rounded-3xl bg-black/70 border border-white/10 backdrop-blur-sm overflow-hidden group-hover:border-glitch-primary/40 transition-all duration-500 group-hover:-translate-y-2">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.05)_50%,transparent_75%)] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute -inset-[2px] bg-gradient-to-r from-glitch-primary/0 via-glitch-primary/30 to-glitch-primary/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

          <div className="relative z-10 p-6 md:p-8">
            <div className="relative aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-green-500/10 to-purple-600/10 overflow-hidden group-hover:border-glitch-primary/30 transition-colors">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-2">🛒</div>
                  <span className="text-sm font-semibold text-glitch-primary">Pogledaj projekat</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">E-commerce</span>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">Shopify</span>
                <span className="text-xs px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300">Ads</span>
              </div>

              <h3 className="font-bold text-2xl mb-2 group-hover:text-glitch-primary transition-colors">
                E-commerce platforma
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                Shopify setup, custom theme development, payment integracije, inventory sistem i performance marketing.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-glitch-primary">4+</div>
                  <div className="text-xs text-white/50">Meseca</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-glitch-primary">2K+</div>
                  <div className="text-xs text-white/50">Orders</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-glitch-primary">4.5x</div>
                  <div className="text-xs text-white/50">ROAS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>

    {/* CTA */}
    
  </div>
</section>

     {/* PROCES SARADNJE - SA BACKGROUND SLIKOM (KONTRAST SA RADOVI) */}
<section
  id="proces"
  className="relative py-24 md:py-32 border-t border-white/10 overflow-hidden"
>
  {/* Background slika */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
    style={{
      backgroundImage: "url('/images/process-bg.webp')" // Dodaj svoju sliku
    }}
  >
    {/* Dark overlay - jači nego obično */}
    <div className="absolute inset-0 bg-black/85"></div>
    
    {/* Vertical stripes - kao na integrations sekciji */}
    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.4)_10%,rgba(0,0,0,0.6)_20%,rgba(0,0,0,0.4)_30%,transparent_40%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.6)_60%,rgba(0,0,0,0.4)_70%,transparent_80%,rgba(0,0,0,0.4)_90%)]"></div>
    
    {/* Jednostavan matrix grid - bez puno efekata */}
    <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(0,229,255,0.04)_1px),linear-gradient(90deg,transparent_0,rgba(0,229,255,0.04)_1px)] bg-[length:60px_60px] opacity-30"></div>
    
    {/* Gradient fade odozdo */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0b]/80"></div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
        Proces{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-glitch-accent to-glitch-primary">
          saradnje
        </span>
      </h2>
      <p className="reveal text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
        Transparentan i strukturiran pristup od prvog kontakta do finalne isporuke
      </p>
    </div>

    {/* Timeline - Desktop verzija */}
    <div className="max-w-6xl mx-auto mb-20">
      {/* Connecting line */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
          <div className="h-full bg-gradient-to-r from-transparent via-glitch-accent/40 to-transparent"></div>
        </div>
        
        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {/* Step 1 */}
          <div className="reveal text-center pt-16 md:pt-32">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/80 border-4 border-glitch-accent shadow-[0_0_40px_rgba(0,229,255,0.4)] mb-6 backdrop-blur-sm">
              <span className="text-3xl font-bold text-glitch-accent">1</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="reveal text-center pt-16 md:pt-32" style={{ animationDelay: '200ms' }}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/80 border-4 border-glitch-primary shadow-[0_0_40px_rgba(139,92,246,0.4)] mb-6 backdrop-blur-sm">
              <span className="text-3xl font-bold text-glitch-primary">2</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="reveal text-center pt-16 md:pt-32" style={{ animationDelay: '400ms' }}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/80 border-4 border-green-400 shadow-[0_0_40px_rgba(16,185,129,0.4)] mb-6 backdrop-blur-sm">
              <span className="text-3xl font-bold text-green-400">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Process Cards - BEZ 3D shadows, jednostavnije */}
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Step 1 - Kickoff */}
      <article className="reveal group relative">
        {/* Main card - jednostavniji stil */}
        <div className="relative rounded-2xl bg-black/80 border border-white/20 backdrop-blur-md p-8 hover:border-glitch-accent hover:bg-black/90 transition-all duration-300 h-full">
          <div className="relative z-10">
            {/* Number + Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-glitch-accent/10 border-2 border-glitch-accent/30 flex items-center justify-center text-3xl font-bold text-glitch-accent">
                1
              </div>
              <div className="text-5xl">🚀</div>
            </div>

            <h3 className="font-bold text-2xl mb-3 text-white">
              Kickoff
            </h3>
            
            <p className="text-white/70 leading-relaxed mb-6">
              Razgovaramo o ciljevima, budžetu, rokovima. Potpisujemo brief i započinjemo pripremu projekta sa detaljnim planom.
            </p>

            {/* Lista stavki */}
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-glitch-accent mt-0.5">✓</span>
                <span className="text-white/60">Inicijalni sastanak (online/offline)</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-glitch-accent mt-0.5">✓</span>
                <span className="text-white/60">Definisanje scope-a i deliverables</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-glitch-accent mt-0.5">✓</span>
                <span className="text-white/60">Ugovor i timeline</span>
              </li>
            </ul>

            {/* Duration badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glitch-accent/10 border border-glitch-accent/30">
              <svg className="w-4 h-4 text-glitch-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-semibold text-glitch-accent">1-2 dana</span>
            </div>
          </div>
        </div>
      </article>

      {/* Step 2 - Produkcija */}
      <article className="reveal group relative" style={{ animationDelay: '200ms' }}>
        <div className="relative rounded-2xl bg-black/80 border border-white/20 backdrop-blur-md p-8 hover:border-glitch-primary hover:bg-black/90 transition-all duration-300 h-full">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-glitch-primary/10 border-2 border-glitch-primary/30 flex items-center justify-center text-3xl font-bold text-glitch-primary">
                2
              </div>
              <div className="text-5xl">⚡</div>
            </div>

            <h3 className="font-bold text-2xl mb-3 text-white">
              Produkcija
            </h3>
            
            <p className="text-white/70 leading-relaxed mb-6">
              Kreativni i dev timovi kreiraju sadržaj i sajt. Redovne revizije i feedback loop sa klijentom.
            </p>

            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-glitch-primary mt-0.5">✓</span>
                <span className="text-white/60">Design mockups i wireframes</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-glitch-primary mt-0.5">✓</span>
                <span className="text-white/60">Development & content creation</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-glitch-primary mt-0.5">✓</span>
                <span className="text-white/60">Weekly status updates</span>
              </li>
            </ul>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glitch-primary/10 border border-glitch-primary/30">
              <svg className="w-4 h-4 text-glitch-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-semibold text-glitch-primary">2-8 nedelja</span>
            </div>
          </div>
        </div>
      </article>

      {/* Step 3 - Isporuka */}
      <article className="reveal group relative" style={{ animationDelay: '400ms' }}>
        <div className="relative rounded-2xl bg-black/80 border border-white/20 backdrop-blur-md p-8 hover:border-green-400 hover:bg-black/90 transition-all duration-300 h-full">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-green-400/10 border-2 border-green-400/30 flex items-center justify-center text-3xl font-bold text-green-400">
                3
              </div>
              <div className="text-5xl">🎉</div>
            </div>

            <h3 className="font-bold text-2xl mb-3 text-white">
              Isporuka
            </h3>
            
            <p className="text-white/70 leading-relaxed mb-6">
              Finalni proizvod. Uz dokumentaciju, instrukcije, training i podršku u prvih mesec dana.
            </p>

            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-white/60">Final review & approval</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-white/60">Deployment & go-live</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-white/60">Documentation & training</span>
              </li>
            </ul>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/10 border border-green-400/30">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-semibold text-green-400">30 dana podrške</span>
            </div>
          </div>
        </div>
      </article>
    </div>

    {/* Bottom CTA */}
    
  </div>
</section>

      {/* CTA / PRICING - Sa background slikom */}
<section
  id="ponuda"
  className="relative py-20 md:py-28 border-t border-white/10 overflow-hidden"
>
  {/* Background slika */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
    style={{ backgroundImage: "url('/images/cta-background.webp')" }}
  >
    {/* Dark overlay za kontrast */}
    <div className="absolute inset-0 bg-black/80" />

    {/* Matrix grid overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(0,229,255,0.03)_1px),linear-gradient(90deg,transparent_0,rgba(0,229,255,0.03)_1px)] bg-[length:50px_50px] opacity-30" />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
  </div>

  {/* Content - preko pozadine */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="reveal card-compact max-w-3xl mx-auto p-10 md:p-16 text-center backdrop-blur-sm bg-black/40 border border-white/10 rounded-2xl">
      <h2 className="text-3xl md:text-5xl font-extrabold">
        Zainteresovan/a za saradnju?
      </h2>

      <p className="text-white/90 mt-4 max-w-xl mx-auto text-lg">
        Pošalji nam ukratko šta ti treba, odgovorićemo u roku od 24h sa
        inicijalnom procenom i sledećim koracima.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#kontakt"
          className="px-8 py-4 rounded-xl bg-glitch-accent text-black font-semibold shadow-glow hover:shadow-[0_0_60px_rgba(0,229,255,0.4)] transition-all hover:scale-105"
        >
          Kontaktiraj nas
        </a>

        <a
          href="#radovi"
          className="px-8 py-4 rounded-xl border-2 border-white/30 hover:border-glitch-accent hover:bg-white/5 transition-all backdrop-blur-md"
        >
          Vidi portfolio
        </a>
      </div>
    </div>
  </div>
</section>


      {/* KONTAKT - 3D Layered sa Matrix efektima */}
<section
  id="kontakt"
  className="py-20 md:py-28 border-t border-white/10 relative overflow-hidden"
>
  {/* Background grid */}
  <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(0,229,255,0.02)_1px),linear-gradient(90deg,transparent_0,rgba(0,229,255,0.02)_1px)] bg-[length:60px_60px] opacity-30"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-16 reveal text-center">
      Kontakt
    </h2>

    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* 3D LAYERED FORMA */}
      <div className="reveal relative group">
        {/* Layered shadows - 3D efekat */}
        <div className="absolute -inset-4 bg-gradient-to-br from-[#1a2828]/40 to-[#0d1414]/40 rounded-2xl transform translate-y-8 translate-x-4 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="absolute -inset-2 bg-gradient-to-br from-[#1a2828]/60 to-[#0d1414]/60 rounded-2xl transform translate-y-4 translate-x-2 blur-xl opacity-70 group-hover:opacity-90 transition-opacity"></div>
        
        {/* Main card */}
        <div className="relative rounded-2xl bg-black/90 border border-white/10 backdrop-blur-xl p-8 md:p-10 group-hover:border-glitch-accent/30 transition-all duration-500">
          {/* Matrix grid overlay sa hover efektom */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.03)_50%,transparent_75%)] bg-[length:20px_20px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Glow efekat na hover */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-glitch-accent/20 via-glitch-primary/20 to-glitch-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Tell us how we can help</h3>
            <p className="text-white/60 mb-8">Pošaljite nam poruku, odgovorićemo u roku od 24h.</p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-white/80">Ime i prezime</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/80 border border-white/10 focus:border-glitch-accent focus:bg-[#1a1a1a] outline-none transition-all placeholder:text-white/30"
                  placeholder="Tvoje ime"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-white/80">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/80 border border-white/10 focus:border-glitch-accent focus:bg-[#1a1a1a] outline-none transition-all placeholder:text-white/30"
                  placeholder="tvoj@email.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-white/80">Šta te zanima?</label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer group/radio">
                    <input type="radio" name="type" className="w-4 h-4 accent-glitch-accent" />
                    <span className="text-sm group-hover/radio:text-glitch-accent transition-colors">Marketing</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group/radio">
                    <input type="radio" name="type" className="w-4 h-4 accent-glitch-accent" />
                    <span className="text-sm group-hover/radio:text-glitch-accent transition-colors">Video</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group/radio">
                    <input type="radio" name="type" className="w-4 h-4 accent-glitch-accent" />
                    <span className="text-sm group-hover/radio:text-glitch-accent transition-colors">Web sajt</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group/radio">
                    <input type="radio" name="type" className="w-4 h-4 accent-glitch-accent" />
                    <span className="text-sm group-hover/radio:text-glitch-accent transition-colors">Aplikacija</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-white/80">Poruka</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a]/80 border border-white/10 focus:border-glitch-accent focus:bg-[#1a1a1a] outline-none resize-none transition-all placeholder:text-white/30"
                  placeholder="Opiši nam svoj projekat..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full px-6 py-4 rounded-lg bg-glitch-accent text-black font-bold shadow-glow hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Pošalji poruku
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* INFO KARTICA - Takođe sa 3D efektom */}
      <div className="reveal space-y-6">
        <div className="relative group">
          {/* Mini layered shadow */}
          <div className="absolute -inset-2 bg-black/40 rounded-2xl transform translate-y-3 translate-x-2 blur-xl opacity-60"></div>
          
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black/40 p-6 backdrop-blur-sm group-hover:border-glitch-accent/20 transition-all">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_50%,transparent_75%)] bg-[length:15px_15px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative">
              <div className="text-glitch-accent text-2xl mb-3">📧</div>
              <h3 className="font-semibold text-xl mb-2">Email</h3>
              <a href="mailto:info@glitch.rs" className="text-white/70 hover:text-glitch-accent transition-colors">
                info@glitch.rs
              </a>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-black/40 rounded-2xl transform translate-y-3 translate-x-2 blur-xl opacity-60"></div>
          
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black/40 p-6 backdrop-blur-sm group-hover:border-glitch-accent/20 transition-all">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_50%,transparent_75%)] bg-[length:15px_15px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative">
              <div className="text-glitch-accent text-2xl mb-3">📱</div>
              <h3 className="font-semibold text-xl mb-2">Telefon</h3>
              <a href="tel:+381111234567" className="text-white/70 hover:text-glitch-accent transition-colors">
                +381 (0)11 123 4567
              </a>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-black/40 rounded-2xl transform translate-y-3 translate-x-2 blur-xl opacity-60"></div>
          
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black/40 p-6 backdrop-blur-sm group-hover:border-glitch-accent/20 transition-all">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_50%,transparent_75%)] bg-[length:15px_15px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative">
              <div className="text-glitch-accent text-2xl mb-3">📍</div>
              <h3 className="font-semibold text-xl mb-2">Beograd</h3>
              <p className="text-white/70 text-sm mb-3">
                Cara Dušana 42, 11000 Beograd
              </p>
              <a href="#" className="text-sm text-glitch-accent hover:underline">
                Pogledaj mapu →
              </a>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-black/40 rounded-2xl transform translate-y-3 translate-x-2 blur-xl opacity-60"></div>
          
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black/40 p-6 backdrop-blur-sm group-hover:border-glitch-accent/20 transition-all">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_50%,transparent_75%)] bg-[length:15px_15px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative">
              <div className="text-glitch-accent text-2xl mb-3">🏢</div>
              <h3 className="font-semibold text-xl mb-2">Novi Sad</h3>
              <p className="text-white/70 text-sm mb-3">
                Bulevar oslobođenja 11, Novi Sad
              </p>
              <a href="#" className="text-sm text-glitch-accent hover:underline">
                Pogledaj mapu →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Mapa placeholder sa 3D efektom */}
    <div className="reveal relative mt-16 group">
      <div className="absolute -inset-4 bg-black/40 rounded-2xl transform translate-y-6 blur-2xl opacity-50"></div>
      <div className="relative h-96 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black/40 overflow-hidden group-hover:border-glitch-accent/30 transition-all">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.03)_50%,transparent_75%)] bg-[length:30px_30px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">🗺️</div>
            <p className="text-white/50">Google Maps integracija</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* INTEGRATIONS SECTION */}
<section className="relative py-24 overflow-hidden">
  {/* Hero sa background slikom */}
  <div 
    className="relative h-80 flex items-center justify-center mb-16 bg-fixed"
    style={{
      backgroundImage: "url('/images/integrations-bg.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    {/* Vertical stripes */}
    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.3)_10%,rgba(0,0,0,0.5)_20%,rgba(0,0,0,0.3)_30%,transparent_40%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0.3)_70%,transparent_80%,rgba(0,0,0,0.3)_90%)]"></div>
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0b]"></div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
        Integracije
      </h2>
      <p className="reveal text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
        Povezujemo tvoj projekat sa alatima koje već koristiš. Seamless integracija, merenje i automatizacija.
      </p>
    </div>
  </div>

  {/* Cards Grid */}
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {integrations.map((integration, index) => (
        <div
          key={integration.name}
          onClick={() => setSelectedIntegration(integration.name)}
          className="reveal group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/40 p-8 cursor-pointer transition-all duration-300 hover:border-glitch-accent/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,229,255,0.15)]"
        >
          {/* Diagonal stripes */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(255,255,255,0.03)_8px,rgba(255,255,255,0.03)_16px)] opacity-60"></div>
          </div>

          {/* Matrix hover */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(0,229,255,0.05)_1px),linear-gradient(90deg,transparent_0,rgba(0,229,255,0.05)_1px)] bg-[length:20px_20px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-glitch-accent/0 via-glitch-accent/20 to-glitch-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              {integration.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3 group-hover:text-glitch-accent transition-colors">
              {integration.name}
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              {integration.description.substring(0, 80)}...
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-glitch-accent opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Saznaj više</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* FAQ SECTION - ADVANCED */}
<section 
  id="faq"
  className="relative py-32 overflow-hidden"
>
  {/* Background image sa parallax */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
    style={{
      backgroundImage: "url('/images/faq-bg.webp')"
    }}
  >
    {/* Dark overlay sa gradijentom */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
    
    {/* Animated matrix grid */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(0,229,255,0.05)_1px),linear-gradient(90deg,transparent_0,rgba(0,229,255,0.05)_1px)] bg-[length:30px_30px] animate-pulse opacity-30"></div>
    </div>
    
    {/* Diagonal stripes */}
    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,229,255,0.02)_20px,rgba(0,229,255,0.02)_40px)]"></div>
    
    {/* Glowing orbs */}
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-glitch-accent/5 rounded-full blur-[100px] animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-glitch-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    {/* Header sa 3D efektom */}
    <div className="text-center mb-20">
      <div className="relative inline-block">
        {/* Shadow layers */}
        <div className="absolute -inset-8 bg-gradient-to-r from-glitch-accent/20 to-glitch-primary/20 rounded-full blur-3xl opacity-50"></div>
        
        <h2 className="reveal relative text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Često Postavljana{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-glitch-accent to-glitch-primary">
            Pitanja
          </span>
        </h2>
      </div>
      
      <p className="reveal text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
        Odgovori na najčešća pitanja o našim uslugama, procesu rada i saradnji.
        <br />
        <span className="text-sm text-white/50 mt-2 inline-block">Klikni na pitanje da vidiš odgovor</span>
      </p>
    </div>

    {/* FAQ Grid - 2 kolone na desktop */}
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="reveal group relative"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          {/* 3D Layered shadows */}
          <div className="absolute -inset-3 bg-gradient-to-br from-[#1a2828]/40 to-[#0d1414]/40 rounded-2xl transform translate-y-4 translate-x-3 blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
          <div className="absolute -inset-1 bg-gradient-to-br from-[#1a2828]/60 to-[#0d1414]/60 rounded-2xl transform translate-y-2 translate-x-1.5 blur-lg opacity-0 group-hover:opacity-80 transition-all duration-500"></div>

          {/* Main card */}
          <div className="relative rounded-2xl bg-black/70 border border-white/10 backdrop-blur-xl overflow-hidden group-hover:border-glitch-accent/40 transition-all duration-500 group-hover:-translate-y-1">
            {/* Matrix grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.08)_50%,transparent_75%)] bg-[length:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Gradient glow na hover */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-glitch-accent/0 via-glitch-accent/30 to-glitch-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

            {/* Question button */}
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full text-left p-6 flex items-start gap-4 relative z-10"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-glitch-accent/20 to-glitch-primary/20 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {faq.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold group-hover:text-glitch-accent transition-colors leading-tight">
                  {faq.question}
                </h3>
              </div>
              
              {/* Toggle icon */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-glitch-accent/50 group-hover:bg-glitch-accent/10 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] ${openFaq === index ? 'rotate-180 bg-glitch-accent/20' : ''}`}>
                <svg 
                  className={`w-5 h-5 transition-colors ${openFaq === index ? 'text-glitch-accent' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Answer - smooth accordion */}
            <div 
              className={`relative z-10 overflow-hidden transition-all duration-700 ease-in-out ${
                openFaq === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 pt-0">
                {/* Animated divider */}
                <div className="relative h-px mb-5 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-glitch-accent to-transparent transition-transform duration-1000 ${openFaq === index ? 'translate-x-0' : '-translate-x-full'}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
                
                {/* Answer text sa fade-in */}
                <p className={`text-white/80 leading-relaxed transition-all duration-500 ${openFaq === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {faq.answer}
                </p>
              </div>
            </div>

            {/* Animated bottom glow */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-glitch-accent to-transparent transition-all duration-500 ${openFaq === index ? 'opacity-100 blur-sm' : 'opacity-0'}`}></div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA sa 3D efektom */}
    <div className="reveal text-center mt-20">
      <div className="relative inline-block">
        {/* Shadow layers */}
        <div className="absolute -inset-6 bg-glitch-accent/10 rounded-full blur-3xl"></div>
        
        <div className="relative">
          <p className="text-white/70 mb-6 text-lg">
            Nisi pronašao odgovor na svoje pitanje?
          </p>
          <a 
            href="#kontakt"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-glitch-accent text-black font-bold shadow-glow hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] hover:scale-105 transition-all duration-300"
          >
            <span>Kontaktiraj nas</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* NEWSLETTER + FOOTER - ENHANCED */}
<footer className="relative py-16 border-t border-white/10 overflow-hidden">
  {/* Background effects */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[#0a0a0b]"></div>
    
    {/* Matrix grid */}
    <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(0,229,255,0.02)_1px),linear-gradient(90deg,transparent_0,rgba(0,229,255,0.02)_1px)] bg-[length:50px_50px] opacity-20"></div>
    
    {/* Gradient orbs */}
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[100px]"></div>
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[100px]"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Newsletter Section */}
    <div className="reveal max-w-4xl mx-auto mb-16">
      <div className="relative group">
        {/* 3D shadow layers */}
        <div className="absolute -inset-3 bg-gradient-to-br from-[#1a2828]/30 to-[#0d1414]/30 rounded-2xl transform translate-y-3 translate-x-3 blur-xl opacity-60"></div>
        
        {/* Main card */}
        <div className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-8 md:p-10 overflow-hidden">
          {/* Matrix overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.03)_50%,transparent_75%)] bg-[length:20px_20px] opacity-50"></div>
          
          {/* Glow effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-glitch-accent/20 via-glitch-primary/20 to-glitch-accent/20 rounded-2xl blur-xl opacity-60"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Prijavi se na newsletter
              </h3>
              <p className="text-white/70">
                Povremeni insajti iz produkcije, marketinga i dev-a. Bez spama, samo kvalitetan sadržaj.
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[400px]">
              <input
                type="email"
                placeholder="tvoj@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-black/40 border border-white/20 focus:border-glitch-accent outline-none transition-colors placeholder:text-white/30"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-glitch-accent text-black font-bold hover:shadow-glow hover:scale-105 transition-all whitespace-nowrap w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    {/* Main Footer Content */}
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
      {/* Brand Column */}
      <div className="lg:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          {/* Logo */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-glitch-accent to-glitch-primary flex items-center justify-center shadow-glow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 6h7l-1 3h6l-2 6h8"
                stroke="#000"
                strokeWidth="2"
              />
              <path d="M2 18h8l2-6H6l2-6" stroke="#000" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-2xl font-extrabold">GLITCH</span>
        </div>
        
        <p className="text-white/70 mb-6 max-w-sm">
          Kreativna agencija: snimanje, marketing, sajtovi i aplikacije. 
          Pomažemo brendovima da se istaknu u digitalnom svetu.
        </p>

        {/* Social Links */}
        <div className="flex gap-3">
          <a 
            href="#" 
            className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-glitch-accent hover:bg-white/10 flex items-center justify-center transition-all group"
            aria-label="Instagram"
          >
            <span className="group-hover:text-glitch-accent transition-colors">📷</span>
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-glitch-accent hover:bg-white/10 flex items-center justify-center transition-all group"
            aria-label="LinkedIn"
          >
            <span className="group-hover:text-glitch-accent transition-colors">💼</span>
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-glitch-accent hover:bg-white/10 flex items-center justify-center transition-all group"
            aria-label="Behance"
          >
            <span className="group-hover:text-glitch-accent transition-colors">🎨</span>
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-glitch-accent hover:bg-white/10 flex items-center justify-center transition-all group"
            aria-label="GitHub"
          >
            <span className="group-hover:text-glitch-accent transition-colors">💻</span>
          </a>
        </div>
      </div>

      {/* Company Links */}
      <div>
        <h4 className="font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-glitch-accent">▸</span>
          Company
        </h4>
        <ul className="space-y-3">
          <li>
            <a href="#home" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#usluge" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              Usluge
            </a>
          </li>
          <li>
            <a href="#radovi" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              Radovi
            </a>
          </li>
          <li>
            <a href="#proces" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              Proces
            </a>
          </li>
          <li>
            <a href="#ponuda" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              Ponuda
            </a>
          </li>
        </ul>
      </div>

      {/* Resources Links */}
      <div>
        <h4 className="font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-glitch-primary">▸</span>
          Resources
        </h4>
        <ul className="space-y-3">
          <li>
            <a href="#faq" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              FAQ
            </a>
          </li>
          <li>
            <a href="#kontakt" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              Kontakt
            </a>
          </li>
          <li>
            <a href="#" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              Case Studies
            </a>
          </li>
        </ul>
      </div>

      {/* Legal Links */}
      <div>
        <h4 className="font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-green-400">▸</span>
          Legal
        </h4>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              Cookie Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-white/70 hover:text-glitch-accent transition-colors text-sm">
              GDPR
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="text-sm text-white/50 flex items-center gap-2">
          <span>© {year !== null ? year : ""} GLITCH</span>
          <span className="text-white/20">•</span>
          <span>Beograd, Srbija</span>
        </div>

        {/* Made with love */}
        <div className="text-sm text-white/50 flex items-center gap-2">
          <span>Made with</span>
          <span className="text-red-500 animate-pulse">♥</span>
          <span>& lots of</span>
          <span className="text-glitch-accent">☕</span>
        </div>

        {/* Scroll to top */}
        <a
          href="#home"
          className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-glitch-accent hover:bg-white/10 transition-all text-sm"
        >
          <span className="text-white/70 group-hover:text-glitch-accent transition-colors">Back to top</span>
          <svg className="w-4 h-4 text-white/70 group-hover:text-glitch-accent group-hover:-translate-y-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

      {/* MODAL - dodaj ovo pre zatvarajućeg </main> tag-a */}
{selectedIntegration && (
  <div 
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    onClick={() => setSelectedIntegration(null)}
  >
    <div 
      className="relative max-w-2xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute -inset-4 bg-gradient-to-br from-[#1a2828]/60 to-[#0d1414]/60 rounded-2xl transform translate-y-6 translate-x-4 blur-2xl opacity-70"></div>
      <div className="absolute -inset-2 bg-gradient-to-br from-[#1a2828]/80 to-[#0d1414]/80 rounded-2xl transform translate-y-3 translate-x-2 blur-xl opacity-80"></div>

      <div className="relative bg-black/95 border border-white/20 rounded-2xl p-8 md:p-10 backdrop-blur-xl">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.03)_50%,transparent_75%)] bg-[length:20px_20px] rounded-2xl opacity-50"></div>

        <button
          onClick={() => setSelectedIntegration(null)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all hover:rotate-90 duration-300"
        >
          ✕
        </button>

        <div className="relative z-10">
          {integrations.map((integration) => 
            integration.name === selectedIntegration && (
              <div key={integration.name}>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${integration.color} flex items-center justify-center text-5xl mb-6 shadow-2xl`}>
                  {integration.icon}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {integration.name}
                </h3>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  {integration.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                    Ključne Funkcionalnosti
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {integration.features.map((feature) => (
                      <div 
                        key={feature}
                        className="flex items-center gap-2 text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:border-glitch-accent/30 transition-colors"
                      >
                        <span className="text-glitch-accent">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 px-6 py-3 rounded-xl bg-glitch-accent text-black font-bold shadow-glow hover:scale-105 transition-transform">
                    Aktiviraj
                  </button>
                  <button className="flex-1 px-6 py-3 rounded-xl border-2 border-white/30 hover:border-glitch-accent hover:bg-white/5 transition-all">
                    Dokumentacija
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </div>
)}
    </main>
  );
}