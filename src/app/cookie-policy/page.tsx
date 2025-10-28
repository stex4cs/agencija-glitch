"use client";

export default function CookiePolicy() {
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
          Politika Kolačića (Cookie Policy)
        </h1>
        <p className="text-white/60 mb-8">Poslednje ažuriranje: {new Date().toLocaleDateString('sr-RS')}</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          {/* 1. Šta su kolačići */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Šta su kolačići?</h2>
            <p>
              Kolačići (cookies) su male tekstualne datoteke koje se čuvaju na vašem uređaju (kompjuter, telefon, tablet)
              kada posetite našu web stranicu. Kolačići omogućavaju veb stranici da "zapamti" vaše akcije i preferencije
              tokom određenog perioda.
            </p>
            <p className="mt-4">
              Kolačići ne sadrže viruse i ne mogu oštetiti vaš uređaj. Oni su bezbedni i standardna praksa u web developmentu.
            </p>
          </section>

          {/* 2. Zašto koristimo kolačiće */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Zašto koristimo kolačiće?</h2>
            <p className="mb-4">Kolačiće koristimo da:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Obezbedimo pravilno funkcionisanje web stranice</li>
              <li>Zapamtimo vaše postavke i preferencije</li>
              <li>Analiziramo kako koristite našu stranicu (Google Analytics)</li>
              <li>Personalizujemo vaše iskustvo</li>
              <li>Poboljšamo performanse sajta</li>
              <li>Razumemo odakle dolazite (marketing kampanje)</li>
            </ul>
          </section>

          {/* 3. Vrste kolačića */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Vrste kolačića koje koristimo</h2>

            <div className="space-y-6 mt-6">
              {/* Strictly Necessary */}
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  Nužni kolačići (Strictly Necessary)
                </h3>
                <p className="mb-3">
                  <strong>Svrha:</strong> Omogućavaju osnovne funkcionalnosti sajta
                </p>
                <p className="mb-3">
                  <strong>Trajanje:</strong> Session (brišu se kad zatvorite browser)
                </p>
                <p className="mb-3">
                  <strong>Možete li ih blokirati:</strong> Ne (sajt neće raditi bez njih)
                </p>
                <p className="mb-3">
                  <strong>Primeri:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 text-sm space-y-1 text-white/70">
                  <li>Session ID - identifikacija sesije</li>
                  <li>Security tokens - zaštita od CSRF napada</li>
                  <li>Load balancing - distribucija saobraćaja</li>
                </ul>
              </div>

              {/* Functional */}
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  Funkcionalni kolačići (Functional)
                </h3>
                <p className="mb-3">
                  <strong>Svrha:</strong> Pamte vaše postavke i preferencije
                </p>
                <p className="mb-3">
                  <strong>Trajanje:</strong> Do 1 godine
                </p>
                <p className="mb-3">
                  <strong>Možete li ih blokirati:</strong> Da, ali će sajt izgubiti neke funkcionalnosti
                </p>
                <p className="mb-3">
                  <strong>Primeri:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 text-sm space-y-1 text-white/70">
                  <li>cookie_consent - vaša saglasnost za kolačiće</li>
                  <li>language - izabrani jezik</li>
                  <li>theme - svetla/tamna tema (ako postoji)</li>
                </ul>
              </div>

              {/* Analytics */}
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Analitički kolačići (Analytics)
                </h3>
                <p className="mb-3">
                  <strong>Svrha:</strong> Razumevanje kako koristite sajt
                </p>
                <p className="mb-3">
                  <strong>Trajanje:</strong> Do 2 godine (Google Analytics: 26 meseci)
                </p>
                <p className="mb-3">
                  <strong>Možete li ih blokirati:</strong> Da
                </p>
                <p className="mb-3">
                  <strong>Primeri (Google Analytics 4):</strong>
                </p>
                <ul className="list-disc list-inside ml-4 text-sm space-y-1 text-white/70">
                  <li>_ga - razlikuje korisnike</li>
                  <li>_ga_XXXXXXXXXX - persists session state</li>
                  <li>_gid - razlikuje korisnike (24h)</li>
                  <li>_gat - ograničava zahteve (throttling)</li>
                </ul>
                <p className="mt-3 text-sm text-white/60">
                  Google Analytics ne prikuplja lične podatke direktno. Koristimo ga da vidimo broj posetilaca,
                  koje stranice su popularne, odakle dolaze korisnici, itd.
                </p>
              </div>

              {/* Marketing */}
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Marketing kolačići (Advertising/Marketing)
                </h3>
                <p className="mb-3">
                  <strong>Svrha:</strong> Praćenje efikasnosti marketing kampanja
                </p>
                <p className="mb-3">
                  <strong>Trajanje:</strong> Do 1 godine
                </p>
                <p className="mb-3">
                  <strong>Možete li ih blokirati:</strong> Da
                </p>
                <p className="mb-3">
                  <strong>Primeri:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 text-sm space-y-1 text-white/70">
                  <li>Facebook Pixel - praćenje konverzija iz Facebook ads</li>
                  <li>Google Ads conversion tracking</li>
                  <li>UTM parametri - izvor saobraćaja (campaign tracking)</li>
                </ul>
                <p className="mt-3 text-sm text-white/60">
                  Napomena: Trenutno NE koristimo ove kolačiće, ali možemo ih dodati u budućnosti
                  (obavestićemo vas ažuriranjem ove politike).
                </p>
              </div>
            </div>
          </section>

          {/* 4. Kolačići trećih strana */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Kolačići trećih strana</h2>
            <p className="mb-4">
              Pored naših kolačića (first-party), koristimo i kolačiće trećih strana:
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-white/10 rounded-xl p-5">
                <h4 className="font-semibold text-white mb-2">📊 Google Analytics 4</h4>
                <p className="text-sm mb-2">
                  <strong>Provajder:</strong> Google LLC
                </p>
                <p className="text-sm mb-2">
                  <strong>Svrha:</strong> Analiza saobraćaja, demografija korisnika, ponašanje na sajtu
                </p>
                <p className="text-sm mb-2">
                  <strong>Privacy Policy:</strong>{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-glitch-accent hover:underline"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
                <p className="text-sm">
                  <strong>Opt-out:</strong>{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-glitch-accent hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </p>
              </div>

              {/* Dodaj druge third-party ako koristiš */}
            </div>
          </section>

          {/* 5. Kako upravljati kolačićima */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Kako upravljati kolačićima?</h2>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">5.1 Postavke browsera</h3>
            <p className="mb-4">
              Možete kontrolisati i brisati kolačiće kroz postavke vašeg browsera:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/40 border border-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">🌐 Google Chrome</h4>
                <p className="text-sm text-white/70">
                  Settings → Privacy and security → Cookies and other site data
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">🦊 Mozilla Firefox</h4>
                <p className="text-sm text-white/70">
                  Options → Privacy & Security → Cookies and Site Data
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">🧭 Safari</h4>
                <p className="text-sm text-white/70">
                  Preferences → Privacy → Manage Website Data
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">🌊 Microsoft Edge</h4>
                <p className="text-sm text-white/70">
                  Settings → Cookies and site permissions → Cookies and site data
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">5.2 Cookie consent banner</h3>
            <p>
              Kada prvi put posetite naš sajt, videćete banner koji vam omogućava da:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Prihvatite sve kolačiće</li>
              <li>Odbijete opcione kolačiće (Analytics, Marketing)</li>
              <li>Podesite kolačiće po kategorijama</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">5.3 "Do Not Track" (DNT)</h3>
            <p>
              Poštujemo "Do Not Track" signal vašeg browsera. Ako imate DNT uključen, nećemo postavljati
              marketing ili analitičke kolačiće.
            </p>
          </section>

          {/* 6. Brisanje kolačića */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Šta se dešava ako obrišete kolačiće?</h2>
            <p className="mb-4">Ako obrišete kolačiće:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Moraćete ponovo da date saglasnost za kolačiće</li>
              <li>Vaše postavke (jezik, tema) će biti resetovane</li>
              <li>Možda ćete morati ponovo da se ulogujete (ako koristite dashboard)</li>
              <li>Neke funkcionalnosti sajta mogu prestati da rade</li>
            </ul>
            <p className="mt-4 text-white/60">
              Napomena: Brisanje kolačića ne utiče na vaše podatke koje smo već prikupili
              (npr. email za newsletter).
            </p>
          </section>

          {/* 7. Izmene politike */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Izmene Cookie Policy</h2>
            <p>
              Možemo ažurirati ovu Cookie Policy kada uvedemo nove kolačiće ili promenimo postojeće.
              Sve izmene će biti objavljene na ovoj stranici sa novim datumom.
            </p>
            <p className="mt-4">
              Za značajne izmene (npr. dodavanje marketing kolačića), tražićemo vašu novu saglasnost
              putem cookie banner-a.
            </p>
          </section>

          {/* 8. GDPR i kolačići */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. GDPR i kolačići</h2>
            <p>
              Prema GDPR-u, moramo dobiti vašu <strong>eksplicitnu saglasnost</strong> pre postavljanja
              neesencijalnih kolačića (Analytics, Marketing).
            </p>
            <p className="mt-4 mb-4">Vaša prava:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pravo da odbijete kolačiće (osim nužnih)</li>
              <li>Pravo da povučete saglasnost u bilo kom trenutku</li>
              <li>Pravo da zatražite brisanje podataka prikupljenih putem kolačića</li>
              <li>Pravo na pristup podacima koje smo prikupili</li>
            </ul>
            <p className="mt-4">
              Više o GDPR pravima:{" "}
              <a href="/gdpr" className="text-glitch-accent hover:underline">
                GDPR stranica
              </a>
            </p>
          </section>

          {/* 9. Lista trenutnih kolačića */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Trenutna lista kolačića</h2>
            <p className="mb-4 text-white/70">Ažurirano: {new Date().toLocaleDateString('sr-RS')}</p>

            <div className="overflow-x-auto">
              <table className="w-full border border-white/10 rounded-lg overflow-hidden text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="border-b border-white/10 px-4 py-3 text-left">Ime kolačića</th>
                    <th className="border-b border-white/10 px-4 py-3 text-left">Provajder</th>
                    <th className="border-b border-white/10 px-4 py-3 text-left">Svrha</th>
                    <th className="border-b border-white/10 px-4 py-3 text-left">Trajanje</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr>
                    <td className="border-b border-white/10 px-4 py-3">_ga</td>
                    <td className="border-b border-white/10 px-4 py-3">Google</td>
                    <td className="border-b border-white/10 px-4 py-3">Analytics - User ID</td>
                    <td className="border-b border-white/10 px-4 py-3">2 godine</td>
                  </tr>
                  <tr>
                    <td className="border-b border-white/10 px-4 py-3">_gid</td>
                    <td className="border-b border-white/10 px-4 py-3">Google</td>
                    <td className="border-b border-white/10 px-4 py-3">Analytics - Session</td>
                    <td className="border-b border-white/10 px-4 py-3">24 sata</td>
                  </tr>
                  <tr>
                    <td className="border-b border-white/10 px-4 py-3">cookie_consent</td>
                    <td className="border-b border-white/10 px-4 py-3">GLITCH</td>
                    <td className="border-b border-white/10 px-4 py-3">Saglasnost za kolačiće</td>
                    <td className="border-b border-white/10 px-4 py-3">1 godina</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 10. Kontakt */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Kontakt</h2>
            <p className="mb-4">Za pitanja o kolačićima, kontaktirajte nas:</p>
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-2">
              <p><strong>GLITCH</strong></p>
              <p>Email: <a href="mailto:privacy@glitch.rs" className="text-glitch-accent hover:underline">privacy@glitch.rs</a></p>
              <p>Email (opšti): <a href="mailto:info@glitch.rs" className="text-glitch-accent hover:underline">info@glitch.rs</a></p>
              <p>Telefon: <a href="tel:+381111234567" className="text-glitch-accent hover:underline">+381 (0)11 123 4567</a></p>
            </div>
          </section>

          {/* Dodatne stranice */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Dodatne pravne stranice</h2>
            <div className="space-y-2">
              <p>
                <a href="/privacy-policy" className="text-glitch-accent hover:underline">
                  🔒 Privacy Policy (Politika privatnosti)
                </a>
              </p>
              <p>
                <a href="/terms-of-service" className="text-glitch-accent hover:underline">
                  📄 Terms of Service (Uslovi korišćenja)
                </a>
              </p>
              <p>
                <a href="/gdpr" className="text-glitch-accent hover:underline">
                  🛡️ GDPR - Vaša prava i zaštita podataka
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
