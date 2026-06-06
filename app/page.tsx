"use client";import { useState } from "react";
export default function MuzWebsite() {
  const [language, setLanguage] = useState("it");

  const content = {
    it: {
      about: "About",
      urban: "Esibizione Urbana",
      contact: "Contact",
      hero: "Arte. Strada. Memoria.",
      mailing: "Mailing List",
      mailingText:
        "Puoi metterti in contatto con me direttamente attraverso questo form per sapere di più sui progetti futuri, collaborazioni, interventi o altre informazioni.",
      join: "Iscriviti",
      urbanTitle: "Esibizione Urbana. Per le strade del Pigneto.",
      urbanText:
        "L'arte si incontra per strada.",
    },
    en: {
      about: "About",
      urban: "Urban Exhibition",
      contact: "Contact",
      hero: "Art. Street. Memory.",
      mailing: "Contact",
      mailingText:
        "You can contact me directly through this form to know more about future projects, collaborations, interventions, or other information.",
      join: "Send",
      urbanTitle: "Urban Exhibition. Through the streets of Pigneto.",
      urbanText:
        "Art is encountered in the street.",
    },
    ar: {
      about: "حول",
      urban: "عرض حضري",
      contact: "تواصل",
      hero: "فن. شارع. ذاكرة.",
      mailing: "تواصل",
      mailingText:
        "يمكنك التواصل معي مباشرة عبر هذه الاستمارة لمعرفة المزيد عن المشاريع المستقبلية أو التعاونات أو التدخلات الفنية أو أي معلومات أخرى.",
      join: "إرسال",
      urbanTitle: "عرض حضري. في شوارع بينيتو.",
      urbanText:
        "الفن يُصادف في الشارع.",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-mono">
      {/* TEXTURE BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(0,0,0,0.95))]" />

      <div className="absolute inset-0 opacity-[0.08] mix-blend-screen bg-[url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />

      {/* NAV */}
      <header className="relative z-20 flex justify-between items-center px-6 md:px-12 py-8 uppercase tracking-[0.28em] text-[10px] md:text-xs text-red-600">
        <nav className="flex gap-6 md:gap-14">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#urban" className="hover:text-white transition-colors">{t.urban}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t.contact}</a>
        </nav>

        <div className="flex gap-2 text-white/50">
          <button onClick={() => setLanguage('it')} className="hover:text-red-600">IT</button>
          <span>/</span>
          <button onClick={() => setLanguage('ar')} className="hover:text-red-600">AR</button>
          <span>/</span>
          <button onClick={() => setLanguage('en')} className="hover:text-red-600">EN</button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative z-10 px-6 md:px-12 pt-10 md:pt-20 pb-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-10 md:mb-16">
            <h1 className="text-[5rem] md:text-[11rem] lg:text-[14rem] leading-[0.9] font-black tracking-[-0.06em] text-red-700 uppercase select-none drop-shadow-[0_0_25px_rgba(255,0,0,0.45)]">
              muz &lt;3
            </h1>

            <div className="h-[2px] w-32 bg-red-700 mt-6 mb-8" />

            <p className="max-w-3xl uppercase text-red-500 tracking-[0.35em] leading-loose text-xs md:text-lg">
              {t.hero}
            </p>
          </div>

          <div className="grid lg:grid-cols-[420px_1fr] gap-20 items-end mt-20">
            {/* MAILING */}
            <div>
              <h2 className="text-red-700 uppercase tracking-[0.45em] text-2xl md:text-4xl mb-8">
                {t.mailing}
              </h2>

              <p className="uppercase text-white/70 tracking-[0.18em] leading-loose text-xs md:text-sm mb-12">
                {t.mailingText}
              </p>

              <form className="space-y-6 uppercase tracking-[0.22em] text-xs">
                <div className="border-b border-white/20 pb-4">
                  <input
                    type="email"
                    placeholder="La tua email"
                    className="bg-transparent outline-none border-none w-full text-white placeholder:text-white/30"
                  />
                </div>

                <div className="border-b border-white/20 pb-4">
                  <textarea
                    placeholder="Scrivi il tuo messaggio"
                    rows={4}
                    className="bg-transparent outline-none border-none w-full text-white placeholder:text-white/30 resize-none"
                  />
                </div>

                <button className="text-red-600 hover:translate-x-1 transition-transform whitespace-nowrap">
                  {t.join}
                </button>
              </form>
            </div>

            {/* VISUAL BLOCK */}
            <div className="relative h-[420px] md:h-[620px] overflow-hidden border border-white/10 bg-black">
              <img
                src="/texture-main.png"
                alt="muz texture"
                className="absolute inset-0 w-full h-full object-cover opacity-95"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />

              <div className="absolute bottom-10 left-10 text-red-700 uppercase tracking-[0.4em] text-xs md:text-sm">
                urban texture archive
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URBAN */}
      <section id="urban" className="relative z-10 px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start border-t border-red-900/40 pt-20">
          <div>
            <h3 className="text-red-700 uppercase tracking-[0.35em] leading-relaxed text-2xl md:text-5xl mb-12 max-w-xl">
              {t.urbanTitle}
            </h3>

            <p className="text-white/75 uppercase tracking-[0.18em] leading-loose text-xs md:text-sm max-w-md mb-16">
              {t.urbanText}
            </p>

            <button className="text-red-600 uppercase tracking-[0.35em] text-xs hover:translate-x-2 transition-transform">
              Vedi l’opera →
            </button>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-zinc-900 min-h-[500px]">
            <img
              src="/urban-artwork.jpeg"
              alt="Urban artwork"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 text-red-600 uppercase tracking-[0.3em] text-xs leading-loose">
              Pigneto / Roma / Urban intervention / Surface memory
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="relative z-10 border-t border-red-900/40 px-6 md:px-12 py-12 uppercase tracking-[0.25em] text-[10px]"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 text-red-700">
          <div className="space-y-4">
            <p>muz &lt;3</p>
            <p className="text-white/40">© 2026</p>
          </div>

          <div className="space-y-4">
            <p>Mail</p>
          </div>

          <div>
            <p className="text-white/50">muz.minoredi3@proton.me</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
