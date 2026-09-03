# Kilà Hair Salon — sito

Sito statico (HTML + CSS + JS puro). Nessun build, nessun backend: si pubblica così com'è.

## Modificare i contenuti
Tutto ciò che cambia nel tempo vive in **`data.js`**. Apri il file, modifica una riga, salva.

- **Prezzi / servizi** → array `services`. Metti un prezzo fisso (`"€ 5"`) o `"Su consulenza"`.
- **Orari** → array `hours` (la scritta “aperto/chiuso” si aggiorna da sola).
- **Team** → array `team`. Per mostrare una foto reale, metti il percorso in `photo`
  (es. `photo: "assets/team/emiliana.webp"`); se resta vuoto compare l'iniziale.
- **Contatti, link social, WhatsApp, recensioni** → oggetti `contact`, `links`, `reviews`.
- **Galleria** → array `gallery` (aggiungi file in `assets/gallery/`).

Non serve toccare `index.html`, `styles.css` o `app.js`.

> Nota: i dati per Google (scheda “HairSalon”) sono anche nel blocco
> `application/ld+json` dentro `index.html`. Se cambi **indirizzo, orari o telefono**,
> aggiorna anche lì (è segnalato da un commento).

## Prenotazione
Il pulsante **Prenota** apre un form che compone un messaggio WhatsApp già pronto
verso il numero in `contact.whatsappNumber`. L'unico servizio prenotabile online è
quello con `bookable: true` in `data.js` (attualmente la **Hair SPA**): per renderne
prenotabile un altro, aggiungi `bookable: true` alla sua voce. In alternativa è
presente il link a Treatwell (`links.bookingOnline`).

## Sezione Sposa (Kila Brides)
Cliccando **Sposa** (o "Scopri il pacchetto sposa") si apre una pagina dedicata con
il video e tutte le voci del pacchetto. Contenuti, prezzo, voci incluse, extra,
acconto e nota si modificano nell'oggetto `bride` di `data.js`. Il video è
`assets/bride.mp4` (con poster `assets/bride-poster.webp`) e viene caricato **solo**
all'apertura della pagina sposa, così la home resta leggera.

## Pubblicare su GitHub Pages
1. Crea un repository e carica tutti i file (con la cartella `assets/`).
2. Repository → **Settings → Pages**.
3. **Source: Deploy from a branch**, Branch: `main`, cartella `/root`. Salva.
4. Dopo ~1 minuto il sito è online all'indirizzo indicato.

### Dominio personalizzato (kilaparrucchieri.it)
Se colleghi il dominio, i valori `canonical`/`og:url` in `index.html` puntano già a
`https://kilaparrucchieri.it/`. Se l'indirizzo pubblico è diverso, aggiornali.

## Struttura
```
index.html      pagina unica
styles.css      stile (palette nero + oro dal logo)
app.js          rendering + orari + prenotazione
data.js         UNICA fonte dati da modificare
assets/         logo, video hero, poster, galleria, og, favicon
```
