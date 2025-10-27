"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0b]">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/404-bg.webp')"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
        
        {/* Matrix code effect - animated */}
        <div className="absolute inset-0 opacity-20 text-xs font-mono text-[#00e5ff] leading-tight overflow-hidden pointer-events-none">
          <div className="animate-pulse p-8">
            <pre className="text-[10px] md:text-xs">{`ERROR: 404
diversion of /boot/fixup_cd.dat to /usr/share/rpikernelhack/
diversion of /boot/fixup_db.dat to /usr/share/rpikernelhack/
diversion of /boot/fixup_x.dat to /usr/share/rpikernelhack/
diversion of /boot/bootcode.bin to /usr/share/rpikernelhack/
diversion of /boot/start/
NOT FOUND: The page you are looking for doesn't exist
kernel:hack_error_404 not found in system
TRACEBACK ERROR 0x404
SYSTEM PROCESS TERMINATED`}</pre>
          </div>
        </div>
        
        {/* Matrix grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(0,229,255,0.03)_1px),linear-gradient(90deg,transparent_0,rgba(0,229,255,0.03)_1px)] bg-[length:50px_50px] opacity-40"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* 3D layered card */}
          <div className="relative group animate-fadeIn">
            {/* Shadow layers */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#1a2828]/40 to-[#0d1414]/40 rounded-3xl transform translate-y-8 translate-x-6 blur-3xl opacity-60"></div>
            <div className="absolute -inset-3 bg-gradient-to-br from-[#1a2828]/60 to-[#0d1414]/60 rounded-3xl transform translate-y-4 translate-x-3 blur-2xl opacity-70"></div>
            
            {/* Main card */}
            <div className="relative bg-black/90 border border-white/20 rounded-3xl p-12 md:p-16 backdrop-blur-xl">
              {/* Matrix grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px] rounded-3xl opacity-60"></div>
              
              {/* Glowing border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00e5ff]/30 via-[#8b5cf6]/30 to-[#00e5ff]/30 rounded-3xl opacity-60 blur-xl"></div>

              <div className="relative z-10">
                {/* Warning icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00e5ff]/20 to-[#8b5cf6]/20 border-2 border-[#00e5ff]/30 mb-8 animate-pulse">
                  <span className="text-6xl">⚠️</span>
                </div>

                {/* 404 Number - Glitch effect */}
                <div className="relative mb-6">
                  <h1 className="text-8xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00e5ff] via-white to-[#8b5cf6]">
                    404
                  </h1>
                  {/* Glitch shadow */}
                  <div className="absolute inset-0 text-8xl md:text-9xl font-extrabold text-[#00e5ff]/20 blur-sm -z-10">
                    404
                  </div>
                </div>

                {/* Error title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Page Not Found
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
                  Stranica koju tražiš ne postoji ili je premeštena.
                  <br />
                  <span className="text-sm text-white/50">Error code: 404 - Resource not found</span>
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#00e5ff] text-black font-bold shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Idi na početnu</span>
                  </Link>
                  
                  <Link
                    href="/#kontakt"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 hover:border-[#00e5ff] hover:bg-white/5 transition-all duration-300 backdrop-blur-sm text-white"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Kontaktiraj nas</span>
                  </Link>
                </div>

                {/* Quick links */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-sm text-white/50 mb-4">Možda tražiš:</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Link href="/#usluge" className="text-sm px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00e5ff]/30 transition-all text-white">
                      Usluge
                    </Link>
                    <Link href="/#radovi" className="text-sm px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00e5ff]/30 transition-all text-white">
                      Radovi
                    </Link>
                    <Link href="/#proces" className="text-sm px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00e5ff]/30 transition-all text-white">
                      Proces
                    </Link>
                    <Link href="/#kontakt" className="text-sm px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00e5ff]/30 transition-all text-white">
                      Kontakt
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </main>
  );
}