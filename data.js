/* =========================================================================
   KILÀ HAIR SALON — UNICA FONTE DATI
   -------------------------------------------------------------------------
   Tutto ciò che cambia nel tempo (prezzi, orari, servizi, team, contatti,
   link) vive QUI. Per aggiornare il sito modifica una riga in questo file:
   non serve toccare l'HTML, il CSS o il layout.
   ========================================================================= */

window.KILA = {

  /* ---- Identità ------------------------------------------------------- */
  brand: {
    name: "Kilà Hair Salon",
    wordmark: "kilà",
    sub: "hair salon",
    tagline: "Luxury hair, ad Angri.",
    claim: "Un salone di nuova generazione dove taglio, colore ed extension diventano un rituale su misura.",
    city: "Angri",
    priceRange: "€€€",
    url: "https://kilaparrucchieri.it"
  },

  /* ---- Contatti ------------------------------------------------------- */
  contact: {
    addressLine: "Via dei Goti 205",
    addressCity: "84012 Angri (SA)",
    addressFull: "Via dei Goti 205, 84012 Angri SA",
    geo: { lat: 40.731221, lng: 14.562671 },     // fonte: Treatwell
    transit: "Di fronte alla fermata bus Angri Uscita A/3.",
    phoneDisplay: "081 18815663",
    phoneHref: "tel:+3908118815663",
    whatsappDisplay: "327 199 2350",
    whatsappNumber: "393271992350",             // formato internazionale per wa.me
    email: "emilianadelsorbo10@gmail.com"
  },

  /* ---- Link esterni --------------------------------------------------- */
  links: {
    instagram: "https://www.instagram.com/kilaparrucchieri",
    facebook: "https://www.facebook.com/kilaparrucchieri/",
    whatsapp: "https://wa.me/393271992350",
    whatsappQr: "https://wa.me/qr/LVLCT42O4GLMM1",
    linktree: "https://tr.ee/-04eH5vsEW",
    // Prenotazione online alternativa (esiste su Treatwell):
    bookingOnline: "https://www.treatwell.it/salone/kila-hair-salon/",
    // Lascia una recensione su Google (apre il profilo con "Scrivi recensione"):
    reviewUrl: "https://www.google.com/search?q=Kila%27+Hair+Salon+-+Parrucchieri+Angri+recensioni"
  },

  /* ---- Orari (chiave: 0=Dom ... 6=Sab) --------------------------------
     La logica "aperto ora / chiuso" è calcolata in JS su questi valori,
     nel fuso Europe/Rome. Per cambiare un orario modifica qui.            */
  hours: [
    { d: 0, label: "Domenica",  closed: true },
    { d: 1, label: "Lunedì",    closed: true },
    { d: 2, label: "Martedì",   open: "08:30", close: "18:30" },
    { d: 3, label: "Mercoledì", open: "08:30", close: "18:30" },
    { d: 4, label: "Giovedì",   open: "08:30", close: "18:30" },
    { d: 5, label: "Venerdì",   open: "08:30", close: "18:30" },
    { d: 6, label: "Sabato",    open: "08:30", close: "20:30" }
  ],

  /* ---- Marchi utilizzati (reali) ------------------------------------- */
  brands: ["Balmain", "GHD", "Hairdreams", "Paul Mitchell", "Wella"],

  /* ---- Nota prezzi ---------------------------------------------------- */
  servicesNote: "Il nostro listino. I prezzi dei servizi Kila Menù e Balmain sono da sommare tra loro. Tutti i servizi si prenotano su WhatsApp; la Hair SPA è l'unica con pagamento anticipato online.",

  /* ---- Servizi (categorie -> voci) -----------------------------------
     name, desc, duration, price. Metti price:"Su consulenza" dove il
     prezzo dipende dal capello; usa un valore in € solo se è fisso.       */
  services: [
    {
      title: "Signature",
      lead: "Il nostro trattamento firma — l'unico con pagamento anticipato online.",
      items: [
        { name: "Hair SPA esclusiva", desc: "Un rituale completo di detersione, trattamento e styling: il momento in cui il capello — e chi lo indossa — si rimette al centro.", duration: "1 h 20 min", price: "€ 100", featured: true, prepaid: true, policy: "Disdetta gratuita fino a 24 ore prima dell'appuntamento. Oltre questo termine l'importo pagato non è rimborsabile." }
      ]
    },
    {
      title: "Kila Menù",
      lead: "I nostri servizi in salone, con sistema Wella.",
      note: "Tutti i prezzi sono da sommare tra loro.",
      items: [
        { name: "Piega",             price: "€ 15" },
        { name: "Taglio",            price: "€ 16" },
        { name: "Colore Wella base", price: "€ 32" },
        { name: "Toner",             price: "€ 13" },
        { name: "Sfumature",         price: "a partire da € 80" },
        { name: "Ricostruzione",     price: "€ 60" },
        { name: "Laminazione",       price: "€ 30" }
      ]
    },
    {
      title: "Balmain Hair Services",
      lead: "La linea premium Balmain Hair Couture.",
      note: "Tutti i prezzi sono da sommare tra loro.",
      items: [
        { name: "Piega Balmain",         price: "€ 30" },
        { name: "Colore Balmain base",   price: "€ 45" },
        { name: "Toner Balmain",         price: "€ 21" },
        { name: "Sfumature Balmain",     price: "a partire da € 80" },
        { name: "Rituel",                price: "€ 100" },
        { name: "Nanoplastia",           price: "€ 4 al grammo" }
      ]
    }
  ],

  /* ---- Team ----------------------------------------------------------
     Se aggiungi una foto (URL o assets/team/nome.webp) comparirà al posto
     dell'iniziale. Ruolo e specialità sono modificabili qui.             */
  team: [
    { name: "Emiliana Del Sorbo", role: "Titolare · Master Stylist", specialty: "Direzione artistica, taglio e colore", photo: "" },
    { name: "Anna",     role: "Hair Stylist", specialty: "Colore & luce",            photo: "" },
    { name: "Bianca",   role: "Hair Stylist", specialty: "Taglio & piega",           photo: "" },
    { name: "Cleo",     role: "Hair Stylist", specialty: "Styling & acconciature",   photo: "" },
    { name: "Alessio",  role: "Hair Stylist", specialty: "Taglio",                   photo: "" },
    { name: "Emanuela", role: "Hair Stylist", specialty: "Extension",                photo: "" }
  ],

  /* ---- Portfolio / galleria (foto reali del salone) ------------------ */
  gallery: [
    { src: "assets/gallery/salone-1.webp", alt: "Postazioni taglio con specchi e parete verde nel salone Kilà" },
    { src: "assets/gallery/salone-2.webp", alt: "Zona lavaggio con poltrone in pelle e corner Hairdreams" },
    { src: "assets/gallery/salone-3.webp", alt: "Bancone accoglienza in noce con calici e piante" },
    { src: "assets/gallery/salone-4.webp", alt: "Sala del salone Kilà con parete verde e illuminazione LED" },
    { src: "assets/gallery/salone-5.webp", alt: "Corner extension Hairdreams e specchio scultoreo" }
  ],

  /* ---- Recensioni (sentiment reale dai profili Google/Facebook) ------ */
  reviews: {
    rating: "5.0",
    count: "recensioni verificate",
    items: [
      { text: "Mi hanno capita subito, assecondando gusti ed esigenze con prodotti davvero performanti. Consigliatissimo.", author: "Recensione Google" },
      { text: "Molto professionali, gentili e attenti a ogni richiesta. Super soddisfatta.", author: "Recensione Google" },
      { text: "Un salone di nuova generazione: accogliente, curato in ogni dettaglio e con uno staff che mette a proprio agio.", author: "Recensione Facebook" }
    ]
  },

  /* ---- Servizi & comfort (attributi reali della struttura) ----------- */
  amenities: [
    "Prodotti vegani e bio", "Ingredienti naturali", "Cruelty free",
    "Wi-Fi gratuito", "Bevande analcoliche offerte", "Aria condizionata",
    "Accessibile in sedia a rotelle", "Animali ammessi", "Bambini benvenuti",
    "LGBTQIA+ friendly", "Parcheggio disponibile", "Italiano & English"
  ],

  /* ---- Kila Brides (sezione sposa dedicata, con video) ---------------
     Il video e il poster stanno in assets/. Il pacchetto e le voci
     incluse sono modificabili qui.                                       */
  bride: {
    eyebrow: "Kila Brides",
    title: "Il giorno più importante, dalla prova al velo.",
    intro: "Un percorso su misura che accompagna la sposa dalla prima prova fino al mattino delle nozze — con la stessa cura, in ogni dettaglio.",
    video: "assets/bride.mp4",
    poster: "assets/bride-poster.webp",
    package: { name: "Pacchetto Sposa", price: "€ 500" },
    includes: [
      "Prove",
      "Acconciatura",
      "Trattamento di ricostruzione un mese prima",
      "Prove + acconciatura mamma sposa",
      "Shampoo + trattamento la sera prima (sposa)"
    ],
    extra: [
      { name: "Cambio sposa", price: "a partire da € 200" }
    ],
    deposit: "Acconto del 10% per confermare la data.",
    note: "In fase di consulenza verranno valutati eventuali costi e servizi non riportati da listino.",
    ctaLabel: "Richiedi la consulenza sposa"
  }
};
