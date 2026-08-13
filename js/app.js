(() => {
  const html = document.documentElement;
  const STORAGE_THEME = "casabrasa-theme";
  const STORAGE_LANG = "casabrasa-lang";

  const translations = {
    es: {
      skip: "Saltar al contenido",
      "nav.home": "Inicio",
      "nav.history": "Historia",
      "nav.mission": "Misión",
      "nav.menu": "Menú",
      "nav.gallery": "Galería",
      "nav.promos": "Promociones",
      "nav.location": "Ubicación",
      "nav.contact": "Contacto",
      "hero.title": "Fuego lento, sabor verdadero",
      "hero.lead": "Cocina de brasa en el corazón de la ciudad.",
      "hero.ctaMenu": "Ver menú",
      "hero.ctaReserve": "Reservar mesa",
      "placeholder.photo": "Tu foto aquí",
      "history.eyebrow": "Nuestra historia",
      "history.title": "Del fogón familiar a tu mesa",
      "history.p1":
        "Casa Brasa nació en 2012 en la cocina de una casa familiar, donde el carbón y la paciencia definían cada platillo. Lo que empezó como reuniones de domingo se convirtió en un restaurante que celebra el fuego vivo.",
      "history.p2":
        "Hoy seguimos asando a la leña, moliendo especias a mano y recibiendo a cada visita como si fuera de la familia. Cada temporada renovamos el menú, pero el alma del fogón no cambia.",
      "mission.eyebrow": "Quiénes somos",
      "mission.title": "Misión y visión",
      "mission.missionTitle": "Misión",
      "mission.missionText":
        "Ofrecer cocina de brasa auténtica, con ingredientes locales y un servicio cálido, para que cada comida sea un momento memorable alrededor del fuego.",
      "mission.visionTitle": "Visión",
      "mission.visionText":
        "Ser el referente de la cocina a la brasa en la región: un lugar donde tradición, calidad y hospitalidad se encuentran en cada visita.",
      "menu.eyebrow": "Carta",
      "menu.title": "Menú de productos",
      "menu.lead": "Quince platillos pensados para compartir alrededor de la brasa.",
      "menu.all": "Todos",
      "menu.drinks": "Bebidas",
      "menu.starters": "Entradas",
      "menu.mains": "Principales",
      "menu.desserts": "Postres",
      "dish.1.name": "Café con leche",
      "dish.1.desc": "Café suave servido con leche caliente.",
      "dish.2.name": "Café negro",
      "dish.2.desc": "Café negro puro, recién preparado.",
      "dish.3.name": "Limonada",
      "dish.3.desc": "Limonada natural, fresca y refrescante.",
      "dish.4.name": "Quesadillas",
      "dish.4.desc": "Tortillas de maíz con queso derretido y salsa al gusto.",
      "dish.5.name": "Tamales",
      "dish.5.desc": "Tamales tradicionales envueltos en hoja de maíz.",
      "dish.6.name": "Tostadas con huevo",
      "dish.6.desc": "Tostadas crujientes servidas con huevo y salsa.",
      "dish.7.name": "Huevos con chile",
      "dish.7.desc": "Huevos revueltos con chile y acompañamientos de la casa.",
      "dish.8.name": "Chilaquiles rojos",
      "dish.8.desc": "Totopos bañados en salsa roja, crema y queso.",
      "dish.9.name": "Enchiladas verdes",
      "dish.9.desc": "Enchiladas en salsa verde con crema, queso y cebolla.",
      "dish.10.name": "Tacos al pastor",
      "dish.10.desc": "Tacos de pastor con piña, cilantro y cebolla.",
      "dish.11.name": "Carne asada",
      "dish.11.desc": "Carne asada con cebolla, guacamole, arroz y frijoles.",
      "dish.12.name": "Mole poblano",
      "dish.12.desc": "Pollo bañado en mole poblano tradicional.",
      "dish.13.name": "Pozole rojo",
      "dish.13.desc": "Pozole rojo con maíz, carne y acompañamientos.",
      "dish.14.name": "Guiso de calabaza con pollo",
      "dish.14.desc": "Guiso casero de calabaza con pollo y especias.",
      "dish.15.name": "Empanada de piña",
      "dish.15.desc": "Empanada dulce rellena de piña.",
      "gallery.eyebrow": "Ambiente",
      "gallery.title": "Galería fotográfica",
      "gallery.lead": "Momentos del fogón, la mesa y la noche.",
      "promos.eyebrow": "Especiales",
      "promos.title": "Promociones",
      "promos.1.day": "Martes",
      "promos.1.title": "Noche de parrillada",
      "promos.1.text": "20% de descuento en la Parrillada Casa Brasa para dos.",
      "promos.2.day": "Jueves",
      "promos.2.title": "2×1 en entradas",
      "promos.2.text": "Lleva dos entradas al precio de una después de las 6:00 p.m.",
      "promos.3.day": "Domingo",
      "promos.3.title": "Menú familiar",
      "promos.3.text": "Menú completo para 4 personas a precio especial.",
      "location.eyebrow": "Visítanos",
      "location.title": "Ubicación y horarios",
      "location.addressTitle": "Dirección",
      "location.address": "Av. Reforma 245, Col. Centro<br />Ciudad de México, CDMX 06000",
      "hours.title": "Horarios de atención",
      "hours.week": "Lun – Jue",
      "hours.fri": "Vie – Sáb",
      "hours.sun": "Domingo",
      "contact.infoTitle": "Información de contacto",
      "contact.eyebrow": "Escríbenos",
      "contact.title": "Formulario de contacto",
      "contact.lead": "Reservas, eventos o comentarios. Te respondemos pronto.",
      "contact.name": "Nombre",
      "contact.email": "Correo",
      "contact.phone": "Teléfono",
      "contact.subject": "Asunto",
      "contact.subjectPlaceholder": "Selecciona una opción",
      "contact.optReserve": "Reserva",
      "contact.optEvent": "Evento privado",
      "contact.optOther": "Otro",
      "contact.message": "Mensaje",
      "contact.submit": "Enviar mensaje",
      "contact.success": "¡Gracias! Tu mensaje se envió correctamente.",
      "contact.error": "Revisa los campos e inténtalo de nuevo.",
      "footer.copy": "© 2026 Casa Brasa. Todos los derechos reservados.",
      "footer.top": "Volver arriba",
    },
    en: {
      skip: "Skip to content",
      "nav.home": "Home",
      "nav.history": "History",
      "nav.mission": "Mission",
      "nav.menu": "Menu",
      "nav.gallery": "Gallery",
      "nav.promos": "Promos",
      "nav.location": "Location",
      "nav.contact": "Contact",
      "hero.title": "Slow fire, true flavor",
      "hero.lead": "Live-fire cooking in the heart of the city.",
      "hero.ctaMenu": "View menu",
      "hero.ctaReserve": "Book a table",
      "placeholder.photo": "Your photo here",
      "history.eyebrow": "Our story",
      "history.title": "From a family hearth to your table",
      "history.p1":
        "Casa Brasa was born in 2012 in a family kitchen, where charcoal and patience shaped every dish. What began as Sunday gatherings grew into a restaurant that celebrates live fire.",
      "history.p2":
        "Today we still cook over wood, grind spices by hand, and welcome every guest like family. The menu changes with the seasons, but the soul of the hearth stays the same.",
      "mission.eyebrow": "Who we are",
      "mission.title": "Mission & vision",
      "mission.missionTitle": "Mission",
      "mission.missionText":
        "To serve authentic live-fire cooking with local ingredients and warm hospitality, so every meal becomes a memorable moment around the fire.",
      "mission.visionTitle": "Vision",
      "mission.visionText":
        "To be the region’s go-to destination for grill cuisine: a place where tradition, quality, and hospitality meet at every visit.",
      "menu.eyebrow": "The card",
      "menu.title": "Product menu",
      "menu.lead": "Fifteen dishes made for sharing around the grill.",
      "menu.all": "All",
      "menu.drinks": "Drinks",
      "menu.starters": "Starters",
      "menu.mains": "Mains",
      "menu.desserts": "Desserts",
      "dish.1.name": "Coffee with milk",
      "dish.1.desc": "Mild coffee served with hot milk.",
      "dish.2.name": "Black coffee",
      "dish.2.desc": "Pure black coffee, freshly brewed.",
      "dish.3.name": "Lemonade",
      "dish.3.desc": "Fresh natural lemonade.",
      "dish.4.name": "Quesadillas",
      "dish.4.desc": "Corn tortillas with melted cheese and salsa.",
      "dish.5.name": "Tamales",
      "dish.5.desc": "Traditional tamales wrapped in corn husks.",
      "dish.6.name": "Egg tostadas",
      "dish.6.desc": "Crispy tostadas served with egg and salsa.",
      "dish.7.name": "Eggs with chile",
      "dish.7.desc": "Scrambled eggs with chile and house sides.",
      "dish.8.name": "Red chilaquiles",
      "dish.8.desc": "Tortilla chips in red salsa, cream, and cheese.",
      "dish.9.name": "Green enchiladas",
      "dish.9.desc": "Enchiladas in green salsa with cream, cheese, and onion.",
      "dish.10.name": "Al pastor tacos",
      "dish.10.desc": "Pastor tacos with pineapple, cilantro, and onion.",
      "dish.11.name": "Grilled steak",
      "dish.11.desc": "Grilled steak with onion, guacamole, rice, and beans.",
      "dish.12.name": "Mole poblano",
      "dish.12.desc": "Chicken covered in traditional mole poblano.",
      "dish.13.name": "Red pozole",
      "dish.13.desc": "Red pozole with corn, meat, and toppings.",
      "dish.14.name": "Squash and chicken stew",
      "dish.14.desc": "Homestyle squash stew with chicken and spices.",
      "dish.15.name": "Pineapple empanada",
      "dish.15.desc": "Sweet empanada filled with pineapple.",
      "gallery.eyebrow": "Atmosphere",
      "gallery.title": "Photo gallery",
      "gallery.lead": "Moments from the fire, the table, and the night.",
      "promos.eyebrow": "Specials",
      "promos.title": "Promotions",
      "promos.1.day": "Tuesday",
      "promos.1.title": "Grill night",
      "promos.1.text": "20% off the Casa Brasa grill platter for two.",
      "promos.2.day": "Thursday",
      "promos.2.title": "2-for-1 starters",
      "promos.2.text": "Get two starters for the price of one after 6:00 p.m.",
      "promos.3.day": "Sunday",
      "promos.3.title": "Family menu",
      "promos.3.text": "Full menu for 4 people at a special price.",
      "location.eyebrow": "Visit us",
      "location.title": "Location & hours",
      "location.addressTitle": "Address",
      "location.address": "Av. Reforma 245, Col. Centro<br />Mexico City, CDMX 06000",
      "hours.title": "Opening hours",
      "hours.week": "Mon – Thu",
      "hours.fri": "Fri – Sat",
      "hours.sun": "Sunday",
      "contact.infoTitle": "Contact information",
      "contact.eyebrow": "Write to us",
      "contact.title": "Contact form",
      "contact.lead": "Reservations, events, or comments. We’ll get back to you soon.",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.subject": "Subject",
      "contact.subjectPlaceholder": "Select an option",
      "contact.optReserve": "Reservation",
      "contact.optEvent": "Private event",
      "contact.optOther": "Other",
      "contact.message": "Message",
      "contact.submit": "Send message",
      "contact.success": "Thank you! Your message was sent successfully.",
      "contact.error": "Please check the fields and try again.",
      "footer.copy": "© 2026 Casa Brasa. All rights reserved.",
      "footer.top": "Back to top",
    },
  };

  let lang = localStorage.getItem(STORAGE_LANG) || "es";
  let theme =
    localStorage.getItem(STORAGE_THEME) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  function applyTheme(next) {
    theme = next;
    html.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute(
        "aria-label",
        theme === "dark"
          ? lang === "es"
            ? "Cambiar a modo claro"
            : "Switch to light mode"
          : lang === "es"
            ? "Cambiar a modo oscuro"
            : "Switch to dark mode"
      );
    }
  }

  function applyLang(next) {
    lang = next;
    html.setAttribute("lang", lang);
    localStorage.setItem(STORAGE_LANG, lang);

    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (value == null) return;
      if (value.includes("<br")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    const langLabel = document.getElementById("lang-label");
    if (langLabel) langLabel.textContent = lang === "es" ? "EN" : "ES";

    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.setAttribute(
        "aria-label",
        lang === "es" ? "Switch to English" : "Cambiar a español"
      );
    }

    applyTheme(theme);
  }

  /* Theme & language */
  applyTheme(theme);
  applyLang(lang);

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  });

  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    applyLang(lang === "es" ? "en" : "es");
  });

  /* Mobile nav */
  const nav = document.getElementById("nav");
  const menuToggle = document.getElementById("menu-toggle");

  function closeNav() {
    nav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }

  menuToggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  /* Header scroll state */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Active nav section */
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav a")];

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  /* Reveal on scroll */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* Menu filters */
  const chips = document.querySelectorAll(".menu-filters .chip");
  const dishes = document.querySelectorAll(".dish");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      const filter = chip.dataset.filter;
      dishes.forEach((dish) => {
        const show = filter === "all" || dish.dataset.cat === filter;
        dish.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* Contact form */
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const dict = translations[lang];

    if (!form.checkValidity()) {
      status.hidden = false;
      status.classList.add("is-error");
      status.textContent = dict["contact.error"];
      form.reportValidity();
      return;
    }

    status.hidden = false;
    status.classList.remove("is-error");
    status.textContent = dict["contact.success"];
    form.reset();
  });
})();
