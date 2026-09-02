/* =========================================================================
   KILÀ HAIR SALON — logica di rendering e interazioni
   Legge tutto da window.KILA (data.js). Nessuna dipendenza esterna.
   ========================================================================= */
(function () {
  "use strict";
  var K = window.KILA;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (m) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[m]; }); };
  var h2min = function (t) { var p = t.split(":"); return (+p[0]) * 60 + (+p[1]); };

  /* ---------- BRAND STRIP ---------- */
  (function () {
    var row = $("#brandsRow"); if (!row) return;
    K.brands.forEach(function (b) { row.appendChild(el("span", null, esc(b))); });
  })();

  /* ---------- SERVIZI ---------- */
  (function () {
    var note = $("#svcNote"); if (note) note.textContent = K.servicesNote;
    var wrap = $("#svcCats"); if (!wrap) return;
    K.services.forEach(function (cat) {
      if (cat.title === "Signature") return; // reso nel blocco dedicato
      var sec = el("div", "svc-cat reveal");
      sec.appendChild(el("h3", "svc-cat__title", esc(cat.title)));
      if (cat.lead) sec.appendChild(el("p", "svc-cat__lead", esc(cat.lead)));
      var list = el("div", "svc-list");
      cat.items.forEach(function (it) {
        var item = el("div", "svc-item");
        item.appendChild(el("span", "svc-item__name", esc(it.name)));
        item.appendChild(el("span", "svc-item__price", esc(it.price)));
        if (it.desc) item.appendChild(el("p", "svc-item__desc", esc(it.desc)));
        if (it.duration) item.appendChild(el("span", "svc-item__dur", esc(it.duration)));
        list.appendChild(item);
      });
      sec.appendChild(list);
      wrap.appendChild(sec);
    });
  })();

  /* ---------- SIGNATURE (Hair SPA) ---------- */
  (function () {
    var spa = null;
    K.services.forEach(function (c) { c.items.forEach(function (i) { if (i.featured) spa = i; }); });
    if (!spa) return;
    var t = $("#sigTitle"), d = $("#sigDesc"), p = $("#sigPrice"), m = $("#sigMeta");
    if (t) t.textContent = spa.name;
    if (d) d.textContent = spa.desc;
    if (p) p.textContent = spa.price;
    if (m) m.textContent = spa.duration;
  })();

  /* ---------- GALLERY ---------- */
  (function () {
    var g = $("#gallery"); if (!g) return;
    K.gallery.forEach(function (im) {
      var fig = el("figure");
      var img = el("img");
      img.src = im.src; img.alt = im.alt; img.loading = "lazy"; img.decoding = "async";
      img.width = 680; img.height = 453;
      fig.appendChild(img); g.appendChild(fig);
    });
  })();

  /* ---------- TEAM ---------- */
  (function () {
    var g = $("#teamGrid"); if (!g) return;
    K.team.forEach(function (mm, i) {
      var card = el("div", "member" + (i === 0 ? " member--lead" : "") + " reveal");
      var ava = el("div", "member__ava");
      if (mm.photo) {
        var img = el("img"); img.src = mm.photo; img.alt = mm.name; img.loading = "lazy";
        ava.appendChild(img);
      } else {
        ava.appendChild(el("span", "member__ini", esc(mm.name.charAt(0))));
      }
      card.appendChild(ava);
      var body = el("div");
      body.appendChild(el("div", "member__name", esc(mm.name)));
      body.appendChild(el("div", "member__role", esc(mm.role)));
      if (mm.specialty) body.appendChild(el("div", "member__spec", esc(mm.specialty)));
      card.appendChild(body);
      g.appendChild(card);
    });
  })();

  /* ---------- AMENITIES ---------- */
  (function () {
    var u = $("#amenities"); if (!u) return;
    K.amenities.forEach(function (a) { u.appendChild(el("li", null, esc(a))); });
  })();

  /* ---------- REVIEWS ---------- */
  (function () {
    var r = K.reviews;
    var sc = $("#revScore"); if (sc) sc.textContent = r.rating;
    var ct = $("#revCount"); if (ct) ct.textContent = r.count;
    var g = $("#reviews"); if (!g) return;
    r.items.forEach(function (q) {
      var c = el("blockquote", "quote reveal");
      c.appendChild(el("p", "quote__text", "“" + esc(q.text) + "”"));
      c.appendChild(el("cite", "quote__by", esc(q.author)));
      g.appendChild(c);
    });
  })();

  /* ---------- CONTATTI: info, orari, mappa, social ---------- */
  (function () {
    var c = K.contact, l = K.links;

    var addr = $("#cAddress"); if (addr) addr.innerHTML = esc(c.addressLine) + "<br>" + esc(c.addressCity);
    var tr = $("#cTransit"); if (tr) tr.textContent = c.transit;
    var ph = $("#cPhone"); if (ph) { ph.textContent = c.phoneDisplay; ph.href = c.phoneHref; }
    var wa = $("#cWhats"); if (wa) { wa.textContent = c.whatsappDisplay; wa.href = l.whatsapp; }
    var em = $("#cEmail"); if (em) { em.textContent = c.email; em.href = "mailto:" + c.email; }

    // mappa (embed senza API key)
    var map = $("#map");
    if (map) {
      var q = encodeURIComponent(c.addressFull);
      var f = el("iframe");
      f.src = "https://www.google.com/maps?q=" + q + "&output=embed";
      f.title = "Mappa — " + c.addressFull;
      f.loading = "lazy"; f.referrerPolicy = "no-referrer-when-downgrade";
      f.setAttribute("allowfullscreen", "");
      map.appendChild(f);
    }

    // orari
    var ol = $("#hoursList");
    var today = romeNow().day;
    if (ol) {
      // ordina Lun->Dom per lettura
      var order = [1, 2, 3, 4, 5, 6, 0];
      order.forEach(function (d) {
        var e = K.hours.filter(function (x) { return x.d === d; })[0];
        var li = el("li"); if (d === today) li.className = "is-today";
        li.appendChild(el("span", "d", esc(e.label)));
        li.appendChild(el("span", "t", e.closed ? "Chiuso" : (e.open + " – " + e.close)));
        ol.appendChild(li);
      });
    }

    // social
    var soc = $("#socials");
    if (soc) {
      var ig = '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2m0 1.98c-3.14 0-3.5.01-4.74.07-.9.04-1.4.2-1.72.32-.43.17-.74.37-1.06.7-.32.31-.52.62-.7 1.05-.12.33-.28.83-.32 1.72-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.04.9.2 1.4.32 1.72.17.43.37.74.7 1.06.31.32.62.52 1.05.7.33.12.83.28 1.72.32 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.4-.2 1.72-.32.43-.17.74-.37 1.06-.7.32-.31.52-.62.7-1.05.12-.33.28-.83.32-1.72.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.2-1.4-.32-1.72a2.86 2.86 0 0 0-.7-1.06 2.86 2.86 0 0 0-1.05-.7c-.33-.12-.83-.28-1.72-.32-1.24-.06-1.6-.07-4.74-.07m0 3.37a4.45 4.45 0 1 1 0 8.9 4.45 4.45 0 0 1 0-8.9m0 1.98a2.47 2.47 0 1 0 0 4.94 2.47 2.47 0 0 0 0-4.94m5.66-2.2a1.04 1.04 0 1 1-2.08 0 1.04 1.04 0 0 1 2.08 0"/></svg>';
      var fb = '<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12"/></svg>';
      var waIco = '<svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.98c2.11 0 4.09.82 5.58 2.31a7.86 7.86 0 0 1 2.31 5.58c0 4.37-3.55 7.92-7.92 7.92a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-2.99.78.8-2.92-.19-.3a7.86 7.86 0 0 1-1.21-4.2c0-4.37 3.55-7.92 7.92-7.92m4.57 11.24c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.13-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.78 2.72 4.3 3.81.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29"/></svg>';
      var link = '<svg viewBox="0 0 24 24"><path d="M12 2 3 7v10l9 5 9-5V7l-9-5m0 2.3 6.5 3.6L12 11.5 5.5 7.9 12 4.3M5 9.6l6 3.3v6.9l-6-3.3V9.6m8 10.2v-6.9l6-3.3v6.9l-6 3.3"/></svg>';
      var mk = function (href, ic, label) {
        var a = el("a"); a.href = href; a.target = "_blank"; a.rel = "noopener";
        a.innerHTML = ic + "<span>" + label + "</span>"; return a;
      };
      soc.appendChild(mk(l.instagram, ig, "Instagram"));
      soc.appendChild(mk(l.facebook, fb, "Facebook"));
      soc.appendChild(mk(l.whatsapp, waIco, "WhatsApp"));
      soc.appendChild(mk(l.linktree, link, "Tutti i link"));
    }

    // link recensione + prenotazione online
    var rev = $("#reviewCta"); if (rev) rev.href = l.reviewUrl;
    var onl = $("#bookOnline"); if (onl) onl.href = l.bookingOnline;

    // footer contatti
    var fAddr = $("#fAddress"); if (fAddr) fAddr.textContent = c.addressFull;
    var fPhone = $("#fPhone"); if (fPhone) { fPhone.textContent = c.phoneDisplay; fPhone.href = c.phoneHref; }
  })();

  /* ---------- OPEN NOW ---------- */
  function romeNow() {
    var r = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Rome" }));
    return { day: r.getDay(), min: r.getHours() * 60 + r.getMinutes() };
  }
  (function () {
    var box = $("#status"); if (!box) return;
    var now = romeNow();
    var todays = K.hours.filter(function (x) { return x.d === now.day; })[0];
    var open = false, txt = "";
    if (todays && !todays.closed) {
      var o = h2min(todays.open), cl = h2min(todays.close);
      if (now.min >= o && now.min < cl) { open = true; txt = "Aperto ora · fino alle " + todays.close; }
    }
    if (!open) {
      // trova prossima apertura
      var lbls = ["dom", "lun", "mar", "mer", "gio", "ven", "sab"];
      for (var i = 1; i <= 7; i++) {
        var d = (now.day + i) % 7;
        var e = K.hours.filter(function (x) { return x.d === d; })[0];
        if (e && !e.closed) { txt = "Chiuso · apre " + lbls[d] + " alle " + e.open; break; }
      }
      // se apre oggi più tardi
      if (todays && !todays.closed && now.min < h2min(todays.open)) txt = "Chiuso · apre oggi alle " + todays.open;
    }
    box.className = "status " + (open ? "status--open" : "status--closed");
    box.innerHTML = '<span class="status__dot"></span><span>' + txt + "</span>";
  })();

  /* ---------- NAV: scroll + drawer ---------- */
  (function () {
    var nav = $("#nav"), drawer = $("#drawer"), burger = $("#burger");
    var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 40); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    var toggle = function (f) { nav.classList.toggle("open", f); drawer.classList.toggle("open", f); document.body.style.overflow = f ? "hidden" : ""; };
    burger.addEventListener("click", function () { toggle(!drawer.classList.contains("open")); });
    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { toggle(false); }); });
  })();

  /* ---------- DOCK mobile (mostra dopo l'hero) ---------- */
  (function () {
    var dock = $("#dock"), hero = $("#hero"); if (!dock || !hero) return;
    var io = new IntersectionObserver(function (ents) {
      dock.classList.toggle("show", !ents[0].isIntersecting);
    }, { threshold: 0.15 });
    io.observe(hero);
  })();

  /* ---------- REVEAL ---------- */
  (function () {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  })();

  /* ---------- BOOKING (WhatsApp) ---------- */
  (function () {
    var modal = $("#modal"); if (!modal) return;
    var card = $("#modalCard"), form = $("#bookForm"), confirm = $("#confirm");
    var open = function () {
      // popola select servizi
      var sel = $("#fServizio");
      if (sel && !sel.dataset.filled) {
        K.services.forEach(function (cat) {
          var og = el("optgroup"); og.label = cat.title;
          cat.items.forEach(function (it) {
            var o = el("option"); o.value = it.name; o.textContent = it.name + (it.price && it.price.indexOf("€") === 0 ? " — " + it.price : "");
            og.appendChild(o);
          });
          sel.appendChild(og);
        });
        sel.dataset.filled = "1";
      }
      // popola parrucchiere
      var pp = $("#fParr");
      if (pp && !pp.dataset.filled) {
        K.team.forEach(function (m) { var o = el("option"); o.value = m.name; o.textContent = m.name; pp.appendChild(o); });
        pp.dataset.filled = "1";
      }
      // data minima = oggi
      var fd = $("#fData");
      if (fd) { var t = new Date(); fd.min = t.toISOString().split("T")[0]; }
      confirm.classList.remove("show"); form.style.display = "";
      modal.classList.add("open"); document.body.style.overflow = "hidden";
    };
    var close = function () { modal.classList.remove("open"); document.body.style.overflow = ""; };

    document.querySelectorAll("[data-book]").forEach(function (b) { b.addEventListener("click", function (e) { e.preventDefault(); open(); }); });
    $("#modalClose").addEventListener("click", close);
    $("#modalScrim").addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    var setErr = function (id, msg) {
      var f = $("#" + id).closest(".field");
      f.classList.toggle("invalid", !!msg);
      if (msg) { var e = f.querySelector(".field__err"); if (e) e.textContent = msg; }
      return !msg;
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = $("#fNome").value.trim();
      var serv = $("#fServizio").value;
      var data = $("#fData").value;
      var ora = $("#fOra").value;
      var parr = $("#fParr").value;
      var ok = true;
      ok &= setErr("fNome", nome ? "" : "Scrivi il tuo nome.");
      ok &= setErr("fServizio", serv ? "" : "Scegli un servizio.");
      ok &= setErr("fData", data ? "" : "Scegli una data.");
      ok &= setErr("fOra", ora ? "" : "Scegli un orario.");

      // valida data+ora sugli orari
      if (data && ora) {
        var wd = new Date(data + "T00:00").getDay();
        var day = K.hours.filter(function (x) { return x.d === wd; })[0];
        if (day.closed) { ok &= setErr("fData", "Siamo chiusi in questa data. Scegli un altro giorno."); }
        else {
          var m = h2min(ora);
          if (m < h2min(day.open) || m >= h2min(day.close)) {
            ok &= setErr("fOra", "Apertura " + day.open + "–" + day.close + " in questo giorno.");
          }
        }
      }
      if (!ok) return;

      var dparts = data.split("-");
      var dit = dparts[2] + "/" + dparts[1] + "/" + dparts[0];
      var msg = "Ciao Kilà! Vorrei prenotare un appuntamento.\n"
        + "• Nome: " + nome + "\n"
        + "• Servizio: " + serv + "\n"
        + "• Data: " + dit + "\n"
        + "• Orario: " + ora + "\n"
        + "• Parrucchiere: " + (parr || "indifferente");
      var url = "https://wa.me/" + K.contact.whatsappNumber + "?text=" + encodeURIComponent(msg);
      window.open(url, "_blank", "noopener");
      form.style.display = "none";
      confirm.classList.add("show");
    });
  })();

  /* ---------- year ---------- */
  var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
})();
