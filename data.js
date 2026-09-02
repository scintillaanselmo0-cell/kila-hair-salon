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
  servicesNote: "Ogni trattamento su misura viene definito in consulenza: il prezzo varia in base a lunghezza e struttura del capello.",

  /* ---- Servizi (categorie -> voci) -----------------------------------
     name, desc, duration, price. Metti price:"Su consulenza" dove il
     prezzo dipende dal capello; usa un valore in € solo se è fisso.       */
  services: [
    {
      title: "Consulenze",
      lead: "Il punto di partenza di ogni servizio: cinque minuti per capire pelle, capello e desideri prima di scegliere il trattamento.",
      items: [
        { name: "Consulenza taglio",     desc: "Analisi del viso e della struttura per definire la forma giusta.", duration: "5 min", price: "€ 5" },
        { name: "Consulenza colore",     desc: "Studio del riflesso e della tecnica più adatta al tuo incarnato.", duration: "5 min", price: "€ 5" },
        { name: "Consulenza piega",      desc: "La messa in piega pensata per il tuo capello e le tue giornate.",  duration: "5 min", price: "€ 5" },
        { name: "Consulenza extension",  desc: "Valutazione di volume e lunghezza con sistemi Hairdreams e Balmain.", duration: "5 min", price: "€ 5" }
      ]
    },
    {
      title: "Signature",
      lead: "Il nostro trattamento firma.",
      items: [
        { name: "Hair SPA esclusiva", desc: "Un rituale completo di detersione, trattamento e styling: il momento in cui il capello — e chi lo indossa — si rimette al centro.", duration: "1 h 20 min", price: "€ 120", featured: true }
      ]
    },
    {
      title: "Taglio & Piega",
      lead: "Tagli su misura e styling curato, con finish GHD.",
      items: [
        { name: "Taglio donna",         desc: "Forma e movimento disegnati sul tuo viso.",            duration: "su misura", price: "Su consulenza" },
        { name: "Piega & styling",      desc: "Dalla piega naturale all'acconciatura da sera.",       duration: "su misura", price: "Su consulenza" },
        { name: "Acconciature evento",  desc: "Sposa e cerimonia, con prova dedicata.",               duration: "su misura", price: "Su consulenza" }
      ]
    },
    {
      title: "Colore",
      lead: "Colore e luce con sistema Wella: dal ritocco naturale alle schiariture su misura.",
      items: [
        { name: "Colore",               desc: "Copertura e riflesso costruiti sul tuo incarnato.",    duration: "su misura", price: "Su consulenza" },
        { name: "Schiariture & meches", desc: "Balayage, meches e giochi di luce graduali.",          duration: "su misura", price: "Su consulenza" },
        { name: "Trattamenti capillari",desc: "Cura e ricostruzione per capelli sani e luminosi.",    duration: "su misura", price: "Su consulenza" }
      ]
    },
    {
      title: "Extension",
      lead: "Volume e lunghezza con i sistemi premium Hairdreams e Balmain Hair Couture.",
      items: [
        { name: "Extension",            desc: "Applicazione naturale, invisibile e su misura.",       duration: "su misura", price: "Su consulenza" },
        { name: "Manutenzione extension",desc: "Controllo, spostamento e cura nel tempo.",            duration: "su misura", price: "Su consulenza" }
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
    { name: "Barbara",  role: "Hair Stylist", specialty: "Hair SPA & trattamenti",   photo: "" },
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
  ]
};
