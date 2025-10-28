"use client";

import { useState } from "react";

export default function GDPR() {
  const [activeTab, setActiveTab] = useState<"rights" | "request" | "faq">("rights");

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
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-glitch-accent to-glitch-primary">
          GDPR - Zaštita Podataka
        </h1>
        <p className="text-white/60 mb-8">
          General Data Protection Regulation (GDPR) je EU zakon o zaštiti podataka koji garantuje vaša prava u digitalnom svetu.
        </p>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab("rights")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "rights"
                ? "text-glitch-accent border-b-2 border-glitch-accent"
                : "text-white/60 hover:text-white"
            }`}
          >
            🛡️ Vaša prava
          </button>
          <button
            onClick={() => setActiveTab("request")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "request"
                ? "text-glitch-accent border-b-2 border-glitch-accent"
                : "text-white/60 hover:text-white"
            }`}
          >
            📝 Podnesi zahtev
          </button>
          <button
            onClick={() => setActiveTab("faq")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "faq"
                ? "text-glitch-accent border-b-2 border-glitch-accent"
                : "text-white/60 hover:text-white"
            }`}
          >
            ❓ FAQ
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-8 text-white/80 leading-relaxed">
          {/* PRAVA TAB */}
          {activeTab === "rights" && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Vaša GDPR prava</h2>
                <p className="mb-6">
                  Prema GDPR-u, imate sledeća prava u vezi sa vašim ličnim podacima:
                </p>

                {/* Right to Access */}
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">🔍</span>
                    1. Pravo na pristup (Right to Access)
                  </h3>
                  <p className="mb-3">
                    Imate pravo da zatražite kopiju svih ličnih podataka koje imamo o vama.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mt-3">
                    <p className="text-sm font-semibold mb-2">Šta možete zatražiti:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/70">
                      <li>Koje podatke imamo o vama</li>
                      <li>Zašto ih obrađujemo</li>
                      <li>Kome ih delimo</li>
                      <li>Koliko dugo ih čuvamo</li>
                      <li>Odakle smo ih dobili (ako niste vi)</li>
                    </ul>
                  </div>
                  <p className="text-sm text-white/60 mt-3">
                    ⏱️ Rok: Odgovaramo u roku od 30 dana od prijema zahteva.
                  </p>
                </div>

                {/* Right to Rectification */}
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">✏️</span>
                    2. Pravo na ispravku (Right to Rectification)
                  </h3>
                  <p className="mb-3">
                    Ako su vaši podaci netačni ili nepotpuni, možete zatražiti ispravku.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mt-3">
                    <p className="text-sm font-semibold mb-2">Primeri:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/70">
                      <li>Promena email adrese</li>
                      <li>Ispravka imena ili prezimena</li>
                      <li>Ažuriranje adrese ili telefona</li>
                      <li>Dopuna nedostajućih informacija</li>
                    </ul>
                  </div>
                  <p className="text-sm text-white/60 mt-3">
                    ⏱️ Rok: Ispravka se vrši odmah ili u roku od 30 dana.
                  </p>
                </div>

                {/* Right to Erasure */}
                <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">🗑️</span>
                    3. Pravo na brisanje - "Pravo na zaborav" (Right to Erasure)
                  </h3>
                  <p className="mb-3">
                    Možete zatražiti da obrišemo vaše lične podatke u određenim slučajevima.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mt-3">
                    <p className="text-sm font-semibold mb-2">Kada možete zatražiti brisanje:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/70">
                      <li>Podaci više nisu potrebni za svrhu za koju su prikupljeni</li>
                      <li>Povlačite saglasnost (ako je obrada zasnovana na saglasnosti)</li>
                      <li>Prigovarate obradi i nema legitimnih razloga da nastavimo</li>
                      <li>Podaci su nezakonito obrađeni</li>
                      <li>Podaci moraju biti obrisani da bi se ispoštovala zakonska obaveza</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-3">
                    <p className="text-sm font-semibold mb-2 text-yellow-400">⚠️ Izuzeci:</p>
                    <p className="text-sm text-white/70">
                      Ne možemo obrisati podatke ako su potrebni za poštovanje zakonskih obaveza
                      (npr. računovodstvo - 5 godina), izvršenje ugovora, ili pravne zahteve.
                    </p>
                  </div>
                  <p className="text-sm text-white/60 mt-3">
                    ⏱️ Rok: Brisanje se vrši u roku od 30 dana.
                  </p>
                </div>

                {/* Right to Restriction */}
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">⏸️</span>
                    4. Pravo na ograničenje obrade (Right to Restriction)
                  </h3>
                  <p className="mb-3">
                    Možete zatražiti da "zamrznemo" obradu vaših podataka (čuvamo ih, ali ih ne koristimo).
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mt-3">
                    <p className="text-sm font-semibold mb-2">Kada možete zatražiti ograničenje:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/70">
                      <li>Osporavate tačnost podataka (dok proveravamo)</li>
                      <li>Obrada je nezakonita, ali ne želite brisanje</li>
                      <li>Podatke nam više ne trebaju, ali vama jesu za pravni zahtev</li>
                      <li>Prigovorili ste obradi (dok proveravamo legitimnost)</li>
                    </ul>
                  </div>
                </div>

                {/* Right to Data Portability */}
                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">📦</span>
                    5. Pravo na prenosivost (Right to Data Portability)
                  </h3>
                  <p className="mb-3">
                    Imate pravo da dobijete svoje podatke u strukturiranom, mašinski čitljivom formatu
                    i da ih prenesete drugom provajderu.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mt-3">
                    <p className="text-sm font-semibold mb-2">Format izvoza:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/70">
                      <li>JSON (preporučeno za programere)</li>
                      <li>CSV (za Excel/Sheets)</li>
                      <li>PDF (za čitljiv format)</li>
                    </ul>
                  </div>
                  <p className="text-sm text-white/60 mt-3">
                    Napomena: Ovo pravo se odnosi samo na podatke koje ste nam vi pružili, ne na analizirane/izvedene podatke.
                  </p>
                </div>

                {/* Right to Object */}
                <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">🚫</span>
                    6. Pravo na prigovor (Right to Object)
                  </h3>
                  <p className="mb-3">
                    Možete prigovoriti obradi vaših podataka u određenim situacijama.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mt-3">
                    <p className="text-sm font-semibold mb-2">Prigovori koji su uvek prihvaćeni:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/70">
                      <li><strong>Direktni marketing:</strong> Uvek možete optirati-out iz newslettera/emails</li>
                      <li><strong>Profilisanje za marketing:</strong> Možete odbiti personalizovane ponude</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 mt-3">
                    <p className="text-sm font-semibold mb-2">Ostali prigovori:</p>
                    <p className="text-sm text-white/70 mb-2">
                      Za druge vrste obrade (npr. legitimni interes), razmotrićemo vaš prigovor i
                      zaustaviti obradu osim ako imamo убедљив legitimni razlog da nastavimo.
                    </p>
                  </div>
                </div>

                {/* Right to Withdraw Consent */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">↩️</span>
                    7. Pravo na povlačenje pristanka (Right to Withdraw Consent)
                  </h3>
                  <p className="mb-3">
                    Ako je obrada zasnovana na vašoj saglasnosti, možete povući pristanak u bilo kom trenutku.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mt-3">
                    <p className="text-sm font-semibold mb-2">Primeri:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/70">
                      <li>Odjava sa newsletter-a (link "Unsubscribe" u svakom email-u)</li>
                      <li>Povlačenje saglasnosti za marketing kolačiće</li>
                      <li>Odbijanje dodatnih analitičkih alata</li>
                    </ul>
                  </div>
                  <p className="text-sm text-white/60 mt-3">
                    ⚠️ Povlačenje pristanka ne utiče na zakonitost obrade koja je izvršena pre povlačenja.
                  </p>
                </div>

                {/* Right to Complain */}
                <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">📢</span>
                    8. Pravo na pritužbu (Right to Lodge a Complaint)
                  </h3>
                  <p className="mb-3">
                    Imate pravo da podnesete pritužbu nadležnom organu za zaštitu podataka.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 mt-3">
                    <p className="text-sm font-semibold mb-2">🇷🇸 Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti (Srbija)</p>
                    <ul className="text-sm space-y-1 text-white/70">
                      <li>Email: <a href="mailto:office@poverenik.rs" className="text-glitch-accent hover:underline">office@poverenik.rs</a></li>
                      <li>Web: <a href="https://www.poverenik.rs" target="_blank" className="text-glitch-accent hover:underline">www.poverenik.rs</a></li>
                      <li>Telefon: +381 11 3408 900</li>
                      <li>Adresa: Bulevar kralja Aleksandra 15, Beograd</li>
                    </ul>
                  </div>
                  <p className="text-sm text-white/60 mt-3">
                    Preporučujemo da nas prvo kontaktirate kako bismo pokušali da rešimo problem pre kontaktiranja Poverenika.
                  </p>
                </div>
              </section>
            </div>
          )}

          {/* ZAHTEV TAB */}
          {activeTab === "request" && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Podnesite GDPR zahtev</h2>
                <p className="mb-6">
                  Koristite formu ispod da ostvarite svoja GDPR prava. Odgovorićemo u roku od 30 dana.
                </p>

                <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                  <form className="space-y-6">
                    {/* Ime */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Ime i prezime *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 focus:border-glitch-accent outline-none transition-colors"
                        placeholder="Vaše puno ime"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email adresa *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 focus:border-glitch-accent outline-none transition-colors"
                        placeholder="vas@email.com"
                      />
                      <p className="text-xs text-white/50 mt-1">
                        Koristite email adresu koju ste registrovali kod nas
                      </p>
                    </div>

                    {/* Tip zahteva */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Tip zahteva *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 focus:border-glitch-accent outline-none transition-colors"
                      >
                        <option value="">-- Izaberite tip zahteva --</option>
                        <option value="access">🔍 Pravo na pristup - Kopija mojih podataka</option>
                        <option value="rectification">✏️ Pravo na ispravku - Ispravi moje podatke</option>
                        <option value="erasure">🗑️ Pravo na brisanje - Obriši moje podatke</option>
                        <option value="restriction">⏸️ Pravo na ograničenje - Ograniči obradu</option>
                        <option value="portability">📦 Pravo na prenosivost - Izvezi moje podatke</option>
                        <option value="object">🚫 Pravo na prigovor - Prigovaram obradi</option>
                        <option value="withdraw">↩️ Povlačenje pristanka</option>
                        <option value="complaint">📢 Pritužba</option>
                      </select>
                    </div>

                    {/* Detalji */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Detalji zahteva *</label>
                      <textarea
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 focus:border-glitch-accent outline-none transition-colors resize-none"
                        placeholder="Detaljno opišite vaš zahtev..."
                      ></textarea>
                    </div>

                    {/* Verifikacija */}
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <p className="text-sm text-yellow-400 mb-2">
                        ⚠️ Verifikacija identiteta
                      </p>
                      <p className="text-xs text-white/70">
                        Da bismo zaštitili vaše podatke, možda ćemo zatražiti dodatnu verifikaciju
                        identiteta (fotografija lične karte, dodatna email verifikacija, itd.)
                        pre nego što ispunimo zahtev.
                      </p>
                    </div>

                    {/* GDPR Saglasnost */}
                    <div>
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          required
                          className="mt-1"
                        />
                        <span className="text-sm text-white/70">
                          Razumem da će moji podaci biti korišćeni isključivo za obradu ovog GDPR zahteva
                          i biće obrisani nakon što zahtev bude rešen (30-90 dana). *
                        </span>
                      </label>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full px-8 py-4 rounded-xl bg-glitch-accent text-black font-bold hover:shadow-glow hover:scale-105 transition-all"
                    >
                      Podnesi GDPR zahtev
                    </button>
                  </form>
                </div>

                {/* Alternative contact */}
                <div className="mt-8 bg-black/40 border border-white/10 rounded-xl p-6">
                  <h3 className="font-semibold mb-3">📧 Alternativni način podnošenja zahteva</h3>
                  <p className="text-sm text-white/70 mb-3">
                    Možete i direktno poslati email na:
                  </p>
                  <p className="text-glitch-accent font-semibold mb-2">
                    <a href="mailto:privacy@glitch.rs">privacy@glitch.rs</a>
                  </p>
                  <p className="text-xs text-white/60">
                    U email-u navedite: ime, prezime, tip zahteva i detalje. Odgovorićemo u roku od 30 dana.
                  </p>
                </div>
              </section>
            </div>
          )}

          {/* FAQ TAB */}
          {activeTab === "faq" && (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">GDPR - Često postavljana pitanja</h2>

                {/* FAQ Item 1 */}
                <div className="bg-black/40 border border-white/10 rounded-xl p-6 mb-4">
                  <h3 className="font-semibold text-lg mb-3">❓ Da li se GDPR primenjuje na GLITCH?</h3>
                  <p className="text-white/70">
                    Da. Iako je GLITCH kompanija iz Srbije, GDPR se primenjuje jer:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 text-sm text-white/60 space-y-1">
                    <li>Možemo imati klijente iz EU</li>
                    <li>Koristimo EU servise (Google, hosting u EU data centru)</li>
                    <li>Srbija ima svoj ekvivalent GDPR-a (Zakon o zaštiti podataka o ličnosti)</li>
                  </ul>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-black/40 border border-white/10 rounded-xl p-6 mb-4">
                  <h3 className="font-semibold text-lg mb-3">❓ Koliko košta podnošenje GDPR zahteva?</h3>
                  <p className="text-white/70">
                    <strong>Besplatno je.</strong> Prvi zahtev je uvek besplatan. Za ponovljene ili
                    nepotrebne zahteve možemo naplatiti administrativnu naknadu.
                  </p>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-black/40 border border-white/10 rounded-xl p-6 mb-4">
                  <h3 className="font-semibold text-lg mb-3">❓ Koliko dugo traje obrada zahteva?</h3>
                  <p className="text-white/70">
                    Maksimalno <strong>30 dana</strong> od prijema zahteva. U složenim slučajevima možemo
                    produžiti za dodatnih 60 dana (ukupno 90), uz obaveštenje.
                  </p>
                </div>

                {/* FAQ Item 4 */}
                <div className="bg-black/40 border border-white/10 rounded-xl p-6 mb-4">
                  <h3 className="font-semibold text-lg mb-3">❓ Šta ako GLITCH odbije moj zahtev?</h3>
                  <p className="text-white/70 mb-2">
                    Obavestićemo vas o razlogu odbijanja. Možete:
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm text-white/60 space-y-1">
                    <li>Zatražiti objašnjenje</li>
                    <li>Podneti pritužbu Povereniku za informacije (Srbija)</li>
                    <li>Pokrenuti sudski postupak</li>
                  </ul>
                </div>

                {/* FAQ Item 5 */}
                <div className="bg-black/40 border border-white/10 rounded-xl p-6 mb-4">
                  <h3 className="font-semibold text-lg mb-3">❓ Da li mogu da zahtevam brisanje podataka tokom aktivnog projekta?</h3>
                  <p className="text-white/70">
                    <strong>Ne u potpunosti.</strong> Tokom aktivnog projekta, podaci su nam potrebni za izvršenje ugovora.
                    Možete zatražiti brisanje nakon završetka projekta ili otkazivanja ugovora.
                  </p>
                </div>

                {/* FAQ Item 6 */}
                <div className="bg-black/40 border border-white/10 rounded-xl p-6 mb-4">
                  <h3 className="font-semibold text-lg mb-3">❓ Šta se dešava sa podacima nakon brisanja?</h3>
                  <p className="text-white/70 mb-2">
                    Brišemo podatke iz:
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm text-white/60 space-y-1">
                    <li>Aktivne baze podataka</li>
                    <li>Backup-ova (starijih od 30 dana)</li>
                    <li>Analitičkih alata (Google Analytics - anonimizujemo)</li>
                  </ul>
                  <p className="text-white/70 mt-3">
                    <strong>Izuzetak:</strong> Podaci potrebni za računovodstvo čuvaju se 5 godina (zakonska obaveza).
                  </p>
                </div>

                {/* FAQ Item 7 */}
                <div className="bg-black/40 border border-white/10 rounded-xl p-6 mb-4">
                  <h3 className="font-semibold text-lg mb-3">❓ Kako mogu da proverim da li imate moje podatke?</h3>
                  <p className="text-white/70">
                    Podnesite zahtev za "Pravo na pristup" koristeći formu na ovoj stranici.
                    Dobićete kompletnu listu svih podataka koje imamo o vama.
                  </p>
                </div>

                {/* FAQ Item 8 */}
                <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3">❓ Da li delite moje podatke sa trećim stranama?</h3>
                  <p className="text-white/70 mb-2">
                    Delimo samo sa:
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm text-white/60 space-y-1">
                    <li>Google Analytics (analiza saobraćaja)</li>
                    <li>Email provajder (slanje email-ova)</li>
                    <li>Hosting provajder (čuvanje podataka)</li>
                  </ul>
                  <p className="text-white/70 mt-3">
                    Svi provajderi su GDPR compliant i potpisali smo DPA (Data Processing Agreement) sa njima.
                  </p>
                  <p className="text-red-400 font-semibold mt-2">
                    ❌ Nikada ne prodajemo vaše podatke marketinškim kompanijama ili broker-ima.
                  </p>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* Dodatne informacije */}
        <div className="mt-12 bg-gradient-to-r from-glitch-accent/10 to-glitch-primary/10 border border-white/10 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4">📚 Dodatni resursi</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="/privacy-policy"
              className="block p-4 rounded-lg bg-black/40 border border-white/10 hover:border-glitch-accent transition-all"
            >
              <h4 className="font-semibold mb-1">🔒 Privacy Policy</h4>
              <p className="text-sm text-white/60">Kako čuvamo vaše podatke</p>
            </a>
            <a
              href="/cookie-policy"
              className="block p-4 rounded-lg bg-black/40 border border-white/10 hover:border-glitch-accent transition-all"
            >
              <h4 className="font-semibold mb-1">🍪 Cookie Policy</h4>
              <p className="text-sm text-white/60">Kako koristimo kolačiće</p>
            </a>
            <a
              href="/terms-of-service"
              className="block p-4 rounded-lg bg-black/40 border border-white/10 hover:border-glitch-accent transition-all"
            >
              <h4 className="font-semibold mb-1">📄 Terms of Service</h4>
              <p className="text-sm text-white/60">Uslovi korišćenja</p>
            </a>
            <a
              href="https://www.poverenik.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-black/40 border border-white/10 hover:border-glitch-accent transition-all"
            >
              <h4 className="font-semibold mb-1">🇷🇸 Poverenik RS</h4>
              <p className="text-sm text-white/60">Zaštita podataka u Srbiji</p>
            </a>
          </div>
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
