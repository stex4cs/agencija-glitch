"use client";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h7l-1 3h6l-2 6h8" stroke="#00e5ff" strokeWidth="2" />
                <path d="M2 18h8l2-6H6l2-6" stroke="#8b5cf6" strokeWidth="2" />
              </svg>
              <span className="text-xl font-bold">GLITCH</span>
            </a>
            <a href="/" className="text-sm text-white/70 hover:text-glitch-accent transition-colors">
              ← Nazad na sajt
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-glitch-accent to-glitch-primary">
          Politika Privatnosti
        </h1>
        <p className="text-white/60 mb-8">Poslednje ažuriranje: {new Date().toLocaleDateString('sr-RS')}</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          {/* 1. Uvod */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Uvod</h2>
            <p>
              GLITCH ("mi", "naša kompanija") posvećena je zaštiti vaše privatnosti. Ova Politika privatnosti objašnjava kako prikupljamo,
              koristimo, delimo i štitimo vaše lične podatke kada koristite našu veb stranicu <strong>glitch.rs</strong> i naše usluge.
            </p>
            <p className="mt-4">
              Korišćenjem naših usluga, pristajete na prikupljanje i korišćenje podataka u skladu sa ovom politikom.
            </p>
          </section>

          {/* 2. Podaci koje prikupljamo */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Podaci koje prikupljamo</h2>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">2.1 Podaci koje direktno pružate</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Kontakt informacije:</strong> ime, email adresa, broj telefona</li>
              <li><strong>Informacije o projektu:</strong> detalji o vašim potrebama, budžet, rok</li>
              <li><strong>Newsletter:</strong> email adresa za prijavu na newsletter</li>
              <li><strong>Komunikacija:</strong> poruke koje nam šaljete putem kontakt forme ili email-a</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">2.2 Podaci koje automatski prikupljamo</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Tehnički podaci:</strong> IP adresa, tip browsera, operativni sistem</li>
              <li><strong>Podaci o upotrebi:</strong> stranice koje posećujete, vreme provedeno na sajtu</li>
              <li><strong>Kolačići (Cookies):</strong> podaci prikupljeni putem kolačića (videti Cookie Policy)</li>
              <li><strong>Analytics:</strong> Google Analytics 4 podaci za analizu saobraćaja</li>
            </ul>
          </section>

          {/* 3. Kako koristimo vaše podatke */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Kako koristimo vaše podatke</h2>
            <p className="mb-4">Vaše podatke koristimo za sledeće svrhe:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pružanje naših usluga (web dizajn, development, marketing)</li>
              <li>Komunikaciju sa vama u vezi sa projektima i upitima</li>
              <li>Slanje newsletter-a (samo ako ste se prijavili)</li>
              <li>Poboljšanje naših usluga i korisničkog iskustva</li>
              <li>Analizu saobraćaja i performansi sajta</li>
              <li>Zaštitu od prevare i zloupotrebe</li>
              <li>Poštovanje zakonskih obaveza</li>
            </ul>
          </section>

          {/* 4. Pravni osnov za obradu */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Pravni osnov za obradu podataka (GDPR)</h2>
            <p className="mb-4">Vaše podatke obrađujemo na osnovu sledećih pravnih osnova:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Pristanak:</strong> Kada nam date izričit pristanak (npr. newsletter)</li>
              <li><strong>Ugovor:</strong> Kada je obrada neophodna za izvršenje ugovora</li>
              <li><strong>Legitimni interes:</strong> Za poboljšanje usluga i bezbednost</li>
              <li><strong>Zakonska obaveza:</strong> Kada to zahteva zakon (npr. računovodstvo)</li>
            </ul>
          </section>

          {/* 5. Deljenje podataka */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Deljenje podataka sa trećim stranama</h2>
            <p className="mb-4">Vaše podatke možemo deliti sa:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Provajderi usluga:</strong> Google Analytics, email provajderi, hosting servisi</li>
              <li><strong>Poslovni partneri:</strong> Samo uz vaš pristanak ili kada je neophodno za projekat</li>
              <li><strong>Zakonski zahtevi:</strong> Državni organi kada to zahteva zakon</li>
            </ul>
            <p className="mt-4 text-yellow-400">
              ⚠️ <strong>Nikada ne prodajemo vaše lične podatke trećim stranama.</strong>
            </p>
          </section>

          {/* 6. Kolačići */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Kolačići (Cookies)</h2>
            <p>
              Koristimo kolačiće za poboljšanje funkcionalnosti sajta i analizu saobraćaja.
              Detaljne informacije o kolačićima potražite u našoj{" "}
              <a href="/cookie-policy" className="text-glitch-accent hover:underline">
                Cookie Policy
              </a>.
            </p>
          </section>

          {/* 7. Zaštita podataka */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Bezbednost i zaštita podataka</h2>
            <p className="mb-4">
              Koristimo savremene bezbednosne mere za zaštitu vaših podataka:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>SSL/TLS enkripcija za sve komunikacije</li>
              <li>Sigurni serveri sa redovnim backup-ima</li>
              <li>Pristup podacima ograničen samo na ovlašćeno osoblje</li>
              <li>Redovno ažuriranje bezbednosnih protokola</li>
            </ul>
            <p className="mt-4 text-white/60">
              Napomena: Nijedna metoda prenosa preko interneta nije 100% sigurna. Trudimo se da koristimo najbolje bezbednosne prakse.
            </p>
          </section>

          {/* 8. Vaša prava */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Vaša prava (GDPR)</h2>
            <p className="mb-4">Imate sledeća prava u vezi sa vašim ličnim podacima:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Pravo na pristup:</strong> Možete zatražiti kopiju podataka koje imamo o vama</li>
              <li><strong>Pravo na ispravku:</strong> Možete zatražiti ispravku netačnih podataka</li>
              <li><strong>Pravo na brisanje:</strong> Možete zatražiti brisanje vaših podataka ("pravo na zaborav")</li>
              <li><strong>Pravo na ograničenje obrade:</strong> Možete zatražiti ograničenje obrade podataka</li>
              <li><strong>Pravo na prenosivost:</strong> Možete zatražiti prenos podataka drugom provajderu</li>
              <li><strong>Pravo na prigovor:</strong> Možete prigovoriti obradi podataka</li>
              <li><strong>Pravo na povlačenje pristanka:</strong> Možete povući pristanak u bilo kom trenutku</li>
            </ul>
            <p className="mt-4">
              Da biste ostvarili ova prava, kontaktirajte nas na:{" "}
              <a href="mailto:privacy@glitch.rs" className="text-glitch-accent hover:underline">
                privacy@glitch.rs
              </a>
            </p>
          </section>

          {/* 9. Čuvanje podataka */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Čuvanje podataka</h2>
            <p className="mb-4">Vaše podatke čuvamo:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Klijentski podaci:</strong> Tokom trajanja projekta + 3 godine (računovodstvene obaveze)</li>
              <li><strong>Newsletter:</strong> Dok se ne odjavite</li>
              <li><strong>Analytics:</strong> 26 meseci (Google Analytics retention)</li>
              <li><strong>Kontakt upiti:</strong> 12 meseci</li>
            </ul>
          </section>

          {/* 10. Deca */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Privatnost dece</h2>
            <p>
              Naše usluge nisu namenjene deci mlađoj od 16 godina. Ne prikupljamo svesno lične podatke od dece.
              Ako smo slučajno prikupili podatke deteta, molimo vas da nas kontaktirate kako bismo ih odmah obrisali.
            </p>
          </section>

          {/* 11. Međunarodni transferi */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Međunarodni transferi podataka</h2>
            <p>
              Vaši podaci mogu biti preneti i čuvani na serverima van Srbije (npr. Google serveri).
              Osiguravamo da svi prenosi podataka budu u skladu sa GDPR-om i da treće strane primenjuju odgovarajuće
              bezbednosne mere (npr. EU-US Data Privacy Framework).
            </p>
          </section>

          {/* 12. Izmene politike */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Izmene politike privatnosti</h2>
            <p>
              Zadržavamo pravo da ažuriramo ovu Politiku privatnosti. Sve izmene će biti objavljene na ovoj stranici
              sa novim datumom ažuriranja. Preporučujemo da redovno proveravate ovu stranicu.
            </p>
            <p className="mt-4">
              Za značajne izmene, obavestićemo vas putem email-a (ako ste prijavljen na newsletter) ili
              obaveštenja na sajtu.
            </p>
          </section>

          {/* 13. Kontakt */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Kontakt</h2>
            <p className="mb-4">Za sva pitanja u vezi sa privatnošću, kontaktirajte nas:</p>
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-2">
              <p><strong>GLITCH</strong></p>
              <p>Email: <a href="mailto:privacy@glitch.rs" className="text-glitch-accent hover:underline">privacy@glitch.rs</a></p>
              <p>Email (opšti): <a href="mailto:info@glitch.rs" className="text-glitch-accent hover:underline">info@glitch.rs</a></p>
              <p>Telefon: <a href="tel:+381111234567" className="text-glitch-accent hover:underline">+381 (0)11 123 4567</a></p>
              <p>Adresa: Beograd, Srbija</p>
            </div>
          </section>

          {/* 14. Dodatne informacije */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Dodatne pravne stranice</h2>
            <div className="space-y-2">
              <p>
                <a href="/terms-of-service" className="text-glitch-accent hover:underline">
                  📄 Terms of Service (Uslovi korišćenja)
                </a>
              </p>
              <p>
                <a href="/cookie-policy" className="text-glitch-accent hover:underline">
                  🍪 Cookie Policy (Politika kolačića)
                </a>
              </p>
              <p>
                <a href="/gdpr" className="text-glitch-accent hover:underline">
                  🔒 GDPR - Vaša prava i zaštita podataka
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Back to top */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 rounded-xl border border-white/20 hover:border-glitch-accent hover:bg-glitch-accent/10 transition-all"
          >
            ↑ Nazad na vrh
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} GLITCH. Sva prava zadržana.</p>
        </div>
      </footer>
    </div>
  );
}
