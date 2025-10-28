"use client";

export default function TermsOfService() {
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
          Uslovi Korišćenja
        </h1>
        <p className="text-white/60 mb-8">Poslednje ažuriranje: {new Date().toLocaleDateString('sr-RS')}</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          {/* 1. Prihvatanje uslova */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Prihvatanje uslova</h2>
            <p>
              Dobrodošli na GLITCH platformu. Pristupom i korišćenjem naše veb stranice (<strong>glitch.rs</strong>) i
              usluga, pristajete da budete vezani ovim Uslovima korišćenja ("Uslovi"). Ako se ne slažete sa ovim Uslovima,
              molimo vas da ne koristite naše usluge.
            </p>
            <p className="mt-4">
              Ovi Uslovi predstavljaju pravno obavezujući ugovor između vas ("Korisnik", "vi") i GLITCH-a ("mi", "naša kompanija").
            </p>
          </section>

          {/* 2. Definicije */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Definicije</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>"Usluge"</strong> - web dizajn, development, marketing, branding i sve ostale usluge koje GLITCH pruža</li>
              <li><strong>"Platforma"</strong> - veb sajt glitch.rs i sve povezane digitalne usluge</li>
              <li><strong>"Sadržaj"</strong> - svi tekstovi, slike, video materijali, kod i ostali materijali na platformi</li>
              <li><strong>"Projekat"</strong> - konkretan posao dogovoren između GLITCH-a i Korisnika</li>
              <li><strong>"Ugovor"</strong> - pisani sporazum o saradnji i izvršenju projekta</li>
            </ul>
          </section>

          {/* 3. Usluge */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Usluge koje pružamo</h2>
            <p className="mb-4">GLITCH pruža sledeće usluge:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Web dizajn i development:</strong> Kreiranje web sajtova, landing page-a, aplikacija</li>
              <li><strong>Marketing:</strong> Digital marketing, SEO, social media, advertising kampanje</li>
              <li><strong>Branding:</strong> Vizuelni identitet, logo dizajn, grafički materijali</li>
              <li><strong>Video produkcija:</strong> Promo video, animacije, motion graphics</li>
              <li><strong>Konsultacije:</strong> Savetovanje u oblasti digitalne strategije</li>
            </ul>
            <p className="mt-4 text-white/60">
              Detalji svakog projekta biće definisani u zasebnom Ugovoru između GLITCH-a i Korisnika.
            </p>
          </section>

          {/* 4. Registracija i nalog */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Korišćenje platforme</h2>
            <p className="mb-4">Pristajete da:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Koristite platformu samo u legalne svrhe</li>
              <li>Ne kopirate, modifikujete ili distribuirate naš sadržaj bez dozvole</li>
              <li>Ne zloupotrebljavate kontakt forme ili newsletter sistem (spam)</li>
              <li>Pružite tačne i ažurne informacije prilikom kontakta</li>
              <li>Ne vršite reverse engineering ili pokušaje hakovanja platforme</li>
              <li>Poštujete autorska prava i intelektualnu svojinu</li>
            </ul>
          </section>

          {/* 5. Proces saradnje */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Proces saradnje na projektu</h2>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">5.1 Inicijalna konzultacija</h3>
            <p>
              Svaki projekat počinje besplatnom konzultacijom gde diskutujemo vaše potrebe, ciljeve i budžet.
              Ovo nije obavezujuće i možete odustati u bilo kom trenutku pre potpisivanja Ugovora.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">5.2 Ponuda i ugovor</h3>
            <p className="mb-4">Nakon konzultacije, pripremamo:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Detaljnu ponudu sa cenama i rokovima</li>
              <li>Scope of Work dokument (opseg posla)</li>
              <li>Ugovor o pružanju usluga</li>
            </ul>
            <p className="mt-4">Projekat počinje nakon potpisivanja Ugovora i uplate početnog depozita (obično 50%).</p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">5.3 Izvršenje projekta</h3>
            <p className="mb-4">Tokom projekta:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Održavamo redovne sastanke i ažuriranja</li>
              <li>Pružamo revizije prema dogovoru (obično 2-3 runde)</li>
              <li>Koristite svesno samo u legalne svrhe</li>
              <li>Tražimo vašu saglasnost za sve značajne promene</li>
              <li>Poštujemo dogovorene rokove</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">5.4 Isporuka i plaćanje</h3>
            <p>
              Nakon finalnih revizija i vaše saglasnosti, isporučujemo projekat. Preostali deo plaćanja (obično 50%)
              dospeva nakon isporuke. Svi materijali i pristup prenose se nakon kompletnog plaćanja.
            </p>
          </section>

          {/* 6. Cene i plaćanje */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Cene i plaćanje</h2>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">6.1 Struktura cena</h3>
            <p className="mb-4">
              Cene se određuju individualno za svaki projekat na osnovu složenosti, obima posla i rokova.
              Sve cene su u EUR (€) ili RSD (динари), zavisno od dogovora.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">6.2 Način plaćanja</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Bankovni transfer (domaći ili međunarodni)</li>
              <li>PayPal (za međunarodne klijente)</li>
              <li>Gotovina (samo za klijente iz Srbije)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">6.3 Rokovi plaćanja</h3>
            <p>
              Depozit (50%) dospeva pre početka rada. Preostali deo dospeva nakon isporuke projekta.
              Za veće projekte možemo dogovoriti plaćanje u ratama (milestones).
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">6.4 Kašnjenje plaćanja</h3>
            <p>
              Kašnjenje plaćanja duže od 14 dana od dogovorenog roka može rezultirati:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Zaustavljanjem rada na projektu</li>
              <li>Naplatom kamata (2% mesečno)</li>
              <li>Trajnim zaključavanjem/brisanjem isporučenih materijala</li>
            </ul>
          </section>

          {/* 7. Autorska prava */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Autorska prava i intelektualna svojina</h2>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">7.1 Vaša prava</h3>
            <p>
              Nakon <strong>kompletnog plaćanja</strong> projekta, stičete puna prava nad konačnim deliverable-om
              (web sajt, logo, video, itd.). To uključuje pravo korišćenja, izmene i komercijalizacije.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">7.2 Naša prava</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Zadržavamo pravo da koristimo projekat u našem portfoliju</li>
              <li>Možemo koristiti projekat za marketing svrhe (uz vašu saglasnost)</li>
              <li>Zadržavamo autorska prava nad kodom/template-ima koje razvijamo (ne-custom komponente)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">7.3 Treća strana</h3>
            <p>
              Za korišćenje stock fotografija, fontova, ilustracija, muzike ili drugih materijala trećih strana,
              odgovornost nabavke licenci je na GLITCH-u (uključeno u cenu projekta, osim ako nije drugačije dogovoreno).
            </p>
          </section>

          {/* 8. Garancije */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Garancije i podrška</h2>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">8.1 Garancija kvaliteta</h3>
            <p>
              Garantujemo da će svi isporučeni projekti:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Funkcionisati u skladu sa specifikacijom</li>
              <li>Biti kompatibilni sa modernim browser-ima</li>
              <li>Biti responsive (prilagođeni mobilnim uređajima)</li>
              <li>Biti optimizovani za performanse</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">8.2 Besplatna podrška</h3>
            <p>
              Uz svaki projekat dobijate 30 dana besplatne tehničke podrške nakon isporuke.
              To uključuje bug fix-ove i manja prilagođavanja.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">8.3 Održavanje</h3>
            <p>
              Nakon besplatnog perioda, nudimo mesečne pakete održavanja (od 100€/mesečno) koji uključuju:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Redovna ažuriranja i patch-evi</li>
              <li>Backup i oporavak podataka</li>
              <li>Tehnička podrška (prioritetna)</li>
              <li>Monitoring i sigurnost</li>
            </ul>
          </section>

          {/* 9. Ograničenje odgovornosti */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Ograničenje odgovornosti</h2>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">9.1 Šta NE garantujemo</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Specifične poslovne rezultate (npr. povećanje prodaje, broj posetilaca)</li>
              <li>100% uptime servera (zavisimo od hosting provajdera)</li>
              <li>Kompatibilnost sa zastarelim browser-ima (npr. IE 11)</li>
              <li>Zaštitu od hakovanja (primenićemo best practices, ali ne možemo garantovati)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">9.2 Maksimalna odgovornost</h3>
            <p>
              Naša maksimalna odgovornost za bilo kakvu štetu ograničena je na <strong>ukupan iznos koji ste nam
              platili za dati projekat</strong>. Ne odgovaramo za indirektnu štetu, izgubljenu dobit ili slične troškove.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">9.3 Vaša odgovornost</h3>
            <p>Vi ste odgovorni za:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Tačnost sadržaja koji nam pružate</li>
              <li>Legalnost vaših poslovnih aktivnosti</li>
              <li>Bezbednost pristupnih podataka (username/password)</li>
              <li>Backup podataka (preporučujemo)</li>
            </ul>
          </section>

          {/* 10. Otkazivanje */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Otkazivanje projekta</h2>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">10.1 Otkazivanje od strane klijenta</h3>
            <p>Možete otkazati projekat u bilo kom trenutku, ali:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Depozit (50%) se <strong>ne vraća</strong></li>
              <li>Plaćate sve već izvršene usluge prema ceni sata (ako prelazi depozit)</li>
              <li>Ne stičete prava nad nedovršenim materijalima</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">10.2 Otkazivanje od strane GLITCH-a</h3>
            <p>Možemo otkazati projekat u slučaju:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Neplаćanja u roku</li>
              <li>Neprofesionalnog ponašanja ili uznemiravanja osoblja</li>
              <li>Zahteva za ilegalnim ili neetičkim sadržajem</li>
              <li>Nemogućnosti ispunjenja projekta iz objektivnih razloga</li>
            </ul>
            <p className="mt-4">
              U tom slučaju, vraćamo preostali deo depozita nakon odbitka izvršenih usluga.
            </p>
          </section>

          {/* 11. Poverljivost */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Poverljivost</h2>
            <p>
              Sve informacije koje nam pružite tretiramo kao poverljive. Nećemo deliti vaše poslovne tajne,
              podatke ili strategije sa trećim stranama bez vašeg pristanka.
            </p>
            <p className="mt-4">
              Za projekte koji zahtevaju dodatni nivo zaštite, možemo potpisati NDA (Non-Disclosure Agreement).
            </p>
          </section>

          {/* 12. Force Majeure */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Viša sila (Force Majeure)</h2>
            <p>
              Nismo odgovorni za kašnjenje ili neispunjenje obaveza uzrokovano događajima van naše kontrole:
              prirodne katastrofe, ratovi, pandemije, štrajkovi, pad elektroenergetskog sistema, cyber napadi, itd.
            </p>
            <p className="mt-4">
              U takvim slučajevima, obaveštavamo vas i dogovaramo nove rokove.
            </p>
          </section>

          {/* 13. Izmene uslova */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Izmene uslova korišćenja</h2>
            <p>
              Zadržavamo pravo da ažuriramo ove Uslove. Sve izmene će biti objavljene na ovoj stranici sa novim
              datumom ažuriranja. Nastavak korišćenja platforme nakon izmena predstavlja prihvatanje novih Uslova.
            </p>
            <p className="mt-4">
              Za aktivne projekte, primenjuju se Uslovi koji su bili važeći u trenutku potpisivanja Ugovora.
            </p>
          </section>

          {/* 14. Merodavno pravo */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Merodavno pravo i nadležnost</h2>
            <p className="mb-4">
              Ovi Uslovi se tumače i primenjuju u skladu sa zakonima Republike Srbije.
            </p>
            <p>
              Za sve sporove nadležan je sud u Beogradu, Republika Srbija.
            </p>
            <p className="mt-4 text-white/60">
              Pre pokretanja sudskog postupka, ohrabrujemo pokušaj mirnog rešavanja spora putem pregovora ili medijacije.
            </p>
          </section>

          {/* 15. Razno */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Razno</h2>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">15.1 Odvajanje odredbi</h3>
            <p>
              Ako se bilo koja odredba ovih Uslova smatra nevažećom, preostale odredbe ostaju na snazi.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">15.2 Odricanje</h3>
            <p>
              Naše neinsistiranje na nekoj odredbi ne predstavlja odricanje od prava da insistiramo na njoj u budućnosti.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">15.3 Prenošenje prava</h3>
            <p>
              Ne možete preneti svoja prava ili obaveze iz ovog Ugovora trećoj strani bez našeg pismenog pristanka.
            </p>
          </section>

          {/* 16. Kontakt */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Kontakt</h2>
            <p className="mb-4">Za sva pitanja u vezi sa Uslovima korišćenja, kontaktirajte nas:</p>
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-2">
              <p><strong>GLITCH</strong></p>
              <p>Email: <a href="mailto:info@glitch.rs" className="text-glitch-accent hover:underline">info@glitch.rs</a></p>
              <p>Telefon: <a href="tel:+381111234567" className="text-glitch-accent hover:underline">+381 (0)11 123 4567</a></p>
              <p>Adresa: Beograd, Srbija</p>
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
                <a href="/cookie-policy" className="text-glitch-accent hover:underline">
                  🍪 Cookie Policy (Politika kolačića)
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
