(function () {
  "use strict";

  const frenchText = {
    "Skip to content": "Aller au contenu",
    "Home": "Accueil",
    "About": "À propos",
    "Career": "Parcours",
    "Resume": "CV",
    "Django backend developer · Casablanca": "Développeur backend Django · Casablanca",
    "I build dependable digital products from backend to browser.": "Je conçois des produits numériques fiables, du backend au navigateur.",
    "I'm": "Je suis",
    "Software engineer focused on Django backends, thoughtful APIs, and full stack applications that stay fast, secure, and maintainable as they grow.": "Ingénieur logiciel spécialisé dans les backends Django, les API bien conçues et les applications full stack rapides, sécurisées et maintenables.",
    "Explore my work": "Découvrir mes projets",
    "Let's work together": "Travaillons ensemble",
    "Open to new opportunities": "Ouvert à de nouvelles opportunités",
    "Currently": "Actuellement",
    "Django Backend Developer": "Développeur backend Django",
    "Learn more about me": "En savoir plus sur moi",
    "Django Backend & Full Stack Developer": "Développeur backend Django & Full Stack",
    "Hi, my name is Moad Hrimech. I am a systems and software engineering graduate from the National School of Applied Science in Agadir. I’m a Full Stack developer with a strong passion for building exceptional user experiences through innovative and efficient web development.": "Je m’appelle Moad Hrimech. Diplômé en ingénierie des systèmes et du logiciel de l’École Nationale des Sciences Appliquées d’Agadir, je suis développeur Full Stack avec une passion pour la création d’expériences web performantes, utiles et soignées.",
    "Age:": "Âge :",
    "Phone:": "Téléphone :",
    "City:": "Ville :",
    "Casablanca, Morocco": "Casablanca, Maroc",
    "Degree:": "Diplôme :",
    "Master degree (ENSA)": "Master (ENSA)",
    "Email:": "E-mail :",
    "Freelance:": "Freelance :",
    "Available": "Disponible",
    "Skills": "Compétences",
    "Web technologies": "Technologies web",
    "Programming Languages": "Langages de programmation",
    "Development & Databases": "Développement & bases de données",
    "Implementation Tools": "Outils de développement",
    "Embedded Systems": "Systèmes embarqués",
    "AI & Machine Learning": "IA & Machine Learning",
    "Project Management": "Gestion de projet",
    "Interests": "Centres d’intérêt",
    "Software Development": "Développement logiciel",
    "Web Design": "Conception web",
    "Algorithms": "Algorithmique",
    "Check My Resume": "Mon parcours",
    "Professional Experience": "Expérience professionnelle",
    "Education": "Formation",
    "Django Backend Developer - Smarteez": "Développeur backend Django - Smarteez",
    "Full Stack/IoT Developer - SITI Tea": "Développeur Full Stack / IoT - SITI Tea",
    "Full Stack Developer - Lecourt Consulting": "Développeur Full Stack - Lecourt Consulting",
    "React Js Developer": "Développeur React.js",
    "React Js Developer - SITI": "Développeur React.js - SITI",
    "Full Stack PHP Developer - M’BROUKA cooperative, Agadir": "Développeur Full Stack PHP - Coopérative M’BROUKA, Agadir",
    "Full Stack PHP Developer - GREEN CROP, Ouled Teima": "Développeur Full Stack PHP - GREEN CROP, Ouled Teima",
    "Location:": "Lieu :",
    "Job Position:": "Poste :",
    "Responsibilities:": "Responsabilités :",
    "Technologies Used:": "Technologies utilisées :",
    "July 2025 - Present": "Juillet 2025 - Aujourd’hui",
    "February 2025 - June 2025 (5 months)": "Février 2025 - Juin 2025 (5 mois)",
    "June 2023 - June 2024 (1 year)": "Juin 2023 - Juin 2024 (1 an)",
    "April 2022 - Present": "Avril 2022 - Aujourd’hui",
    "April 2023 - June 2023": "Avril 2023 - Juin 2023",
    "April 2022 - May 2022": "Avril 2022 - Mai 2022",
    "July 2021 - May 2022": "Juillet 2021 - Mai 2022",
    "2023 - Present": "2023 - Aujourd’hui",
    "Part-Time": "Temps partiel",
    "Intern": "Stagiaire",
    "Internship": "Stage",
    "Freelance": "Freelance",
    "Security": "Sécurité",
    "more...": "plus...",
    "Building and maintaining robust Django backends and web applications.": "Développement et maintenance de backends Django robustes et d’applications web.",
    "Designing scalable data flows, integrations, and application features.": "Conception de flux de données, d’intégrations et de fonctionnalités évolutives.",
    "Building the IoT architecture (sensors, microcontrollers, communication protocols)": "Conception de l’architecture IoT : capteurs, microcontrôleurs et protocoles de communication.",
    "Optimizing the Dashboard Web Application": "Optimisation de l’application web de supervision.",
    "Contributing to innovative projects": "Contribution à des projets innovants.",
    "Building performant web applications": "Développement d’applications web performantes.",
    "Creating responsive websites with a focus on scalability and fast load times.": "Création de sites responsives axés sur l’évolutivité et la rapidité de chargement.",
    "Customizing website designs.": "Personnalisation d’interfaces web.",
    "Developing a Real-Time Monitoring System": "Développement d’un système de supervision en temps réel.",
    "Developed a landing page for the cooperative": "Développement d’une landing page pour la coopérative.",
    "Developed an employee management system": "Développement d’un système de gestion des employés.",
    "Developed a stock management system": "Développement d’un système de gestion de stock.",
    "Master's Degree in Embedded Systems": "Master en génie logiciel et systèmes embarqués",
    "Applied Science High School (ENSA) - Agadir": "École Nationale des Sciences Appliquées (ENSA) - Agadir",
    "Studied a comprehensive curriculum with a focus on:": "Formation approfondie axée sur :",
    "Bachelor's Degree in Computer Systems and Software Engineering": "Licence en systèmes informatiques et génie logiciel",
    "Higher School of Technology - Essaouira": "École Supérieure de Technologie - Essaouira",
    "University Diploma in Technology in Computer Engineering": "DUT en génie informatique",
    "Higher School of Technology - Guelmim": "École Supérieure de Technologie - Guelmim",
    "Explored a diverse curriculum, including:": "Formation pluridisciplinaire comprenant :",
    "Design Patterns": "Patrons de conception",
    "Advanced Networking": "Réseaux avancés",
    "Algorithms, C, C++ and PHP languages": "Algorithmique et langages C, C++ et PHP",
    "Networking Basics": "Bases des réseaux",
    "My Resume - French & English Versions": "Mon CV en français et en anglais",
    "French Version": "Version française",
    "English Version": "Version anglaise",
    "Download French Version": "Télécharger la version française",
    "Download English Version": "Télécharger la version anglaise",
    "My Works": "Mes réalisations",
    "All": "Tous",
    "Project information": "Informations sur le projet",
    "Contact Me": "Me contacter",
    "My Address": "Mon adresse",
    "Social Profiles": "Réseaux sociaux",
    "Email Me": "M’envoyer un e-mail",
    "Call Me": "M’appeler",
    "E-commerce Project": "Projet e-commerce",
    "Work Project": "Projet professionnel",
    "Work Projet": "Projet professionnel",
    "Personal Project": "Projet personnel",
    "Final Project": "Projet de fin d’études",
    "Internship Project": "Projet de stage",
    "Visit Website": "Visiter le site",
    "Live Demo": "Voir la démo",
    "Live demo": "Voir la démo",
    "View on GitHub": "Voir sur GitHub",
    "Coming Soon": "Bientôt disponible",
    "Production": "En production",
    "Category": "Catégorie",
    "Type": "Type",
    "Project URL": "Lien du projet"
  };

  const frenchProjectDescriptions = {
    asivelle: "Une expérience e-commerce bilingue dédiée aux sacs pour femme au Maroc, avec découverte des produits, filtres par marque et couleur, offres, favoris et paiement à la livraison.",
    "0": "Un système de supervision industrielle avec tableau de bord temps réel, indicateurs de performance et chronologie pour faciliter l’analyse et la prise de décision.",
    "1": "Une plateforme d’analyse de données destinée aux structures Info Jeunes du CIDJ.",
    "2": "Le portail institutionnel du SIMV, réunissant actualités, ressources réglementaires et contenus professionnels dédiés à la santé animale en France et en Europe.",
    "3": "Une extension d’IJ-Stats intégrant notamment la messagerie, les réunions et des fonctions collaboratives.",
    "4": "La plateforme nationale du CIDJ destinée aux jeunes de 14 à 30 ans, avec orientation, ressources pratiques, accompagnement et outils numériques.",
    "5": "Un site institutionnel régional présentant services, missions, actualités et informations pratiques aux bénéficiaires et partenaires.",
    "6": "Le site syndical de CGT Énergies 77, regroupant actualités, actions, publications et ressources pour les salariés du secteur.",
    "7": "Une plateforme de recherche universitaire consacrée à la culture visuelle, aux publications, événements et ressources scientifiques collaboratives.",
    "8": "Le site national de référence du secteur social et solidaire en France, avec contenus institutionnels, ressources juridiques et outils associatifs.",
    "9": "Une application mettant en relation franchiseurs et entrepreneurs grâce à des fiches détaillées, une messagerie et des outils de planification.",
    "10": "Une plateforme qui accompagne la création d’entreprise en France, du choix du statut à la génération des documents, avec des espaces client, comptable et administration.",
    "11": "Une marketplace de vêtements de seconde main permettant de publier, découvrir, acheter et vendre des articles tout en favorisant une mode plus durable.",
    "12": "Une plateforme de création et de gestion de boutiques en ligne avec produits configurables, variantes et interface d’administration complète.",
    "13": "Un site de présentation développé pour valoriser la coopérative M’Brouka, ses activités et ses produits.",
    "14": "Une expérience pédagogique interactive expliquant le fonctionnement et le rôle des airbags grâce à des animations et simulations.",
    "15": "Une collection de thèmes e-commerce personnalisables, conçus pour lancer rapidement des boutiques modernes et fonctionnelles.",
    "16": "Une landing page consacrée aux créations artisanales, mettant en avant le savoir-faire, les produits et les histoires des artisans.",
    "17": "Un site de services de développement web proposant des solutions rapides, responsives et adaptées aux entreprises et startups.",
    "18": "Une marketplace MERN moderne qui met en relation vendeurs et acheteurs de vêtements de seconde main dans une expérience simple et sécurisée.",
    "19": "Une application interactive pour mesurer et améliorer sa vitesse de frappe grâce à différents tests, exercices et niveaux de difficulté.",
    "21": "Un système de gestion de stock destiné aux magasins de matériel agricole, avec suivi des ventes, de l’inventaire et des niveaux de stock."
  };

  const isFrench = window.location.pathname.replace(/\/+$/, "") === "/fr" ||
    new URLSearchParams(window.location.search).get("lang") === "fr";
  const language = isFrench ? "fr" : "en";
  const siteUrl = "https://moadhrimech.netlify.app";

  if (isFrench && window.location.pathname === "/" && new URLSearchParams(window.location.search).get("lang") === "fr") {
    const remainingParams = new URLSearchParams(window.location.search);
    remainingParams.delete("lang");
    const remainingQuery = remainingParams.toString();
    window.history.replaceState(null, "", `/fr/${remainingQuery ? `?${remainingQuery}` : ""}${window.location.hash}`);
  }

  function normalize(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function translateTextNodes() {
    if (!isFrench) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    let node;
    while ((node = walker.nextNode())) {
      const source = normalize(node.nodeValue);
      const translation = frenchText[source];
      if (!translation) continue;
      const leading = node.nodeValue.match(/^\s*/)[0];
      const trailing = node.nodeValue.match(/\s*$/)[0];
      node.nodeValue = `${leading}${translation}${trailing}`;
    }
  }

  function setMeta(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.setAttribute("content", value);
  }

  function updateSeo() {
    const canonicalUrl = isFrench ? `${siteUrl}/fr/` : `${siteUrl}/`;
    const title = isFrench
      ? "Moad Hrimech | Développeur Backend Django & Full Stack"
      : "Moad Hrimech | Django Backend & Full Stack Developer";
    const description = isFrench
      ? "Portfolio de Moad Hrimech, développeur backend Django et Full Stack à Casablanca, spécialisé en API, plateformes de données et applications web évolutives."
      : "Portfolio of Moad Hrimech, a Django backend and full stack developer in Casablanca building APIs, data platforms, and scalable web applications.";

    document.title = title;
    document.documentElement.lang = language;
    document.querySelector('link[rel="canonical"]').href = canonicalUrl;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:locale"]', isFrench ? "fr_FR" : "en_US");
    setMeta('meta[property="twitter:url"]', canonicalUrl);
    setMeta('meta[property="twitter:title"]', title);
    setMeta('meta[property="twitter:description"]', description);

    if (isFrench) {
      const personSchema = document.getElementById("person-schema");
      const websiteSchema = document.getElementById("website-schema");
      if (personSchema) {
        const person = JSON.parse(personSchema.textContent);
        person.url = canonicalUrl;
        person.description = "Développeur backend Django et Full Stack spécialisé dans les API fiables et les applications web évolutives";
        person.jobTitle = "Développeur backend Django";
        personSchema.textContent = JSON.stringify(person);
      }
      if (websiteSchema) {
        const website = JSON.parse(websiteSchema.textContent);
        website.url = canonicalUrl;
        website.name = title;
        website.description = description;
        website.inLanguage = "fr-FR";
        websiteSchema.textContent = JSON.stringify(website);
      }
    }
  }

  function configureLanguageLinks() {
    const hash = window.location.hash;
    document.querySelectorAll("[data-language]").forEach((link) => {
      const targetLanguage = link.dataset.language;
      link.href = `${targetLanguage === "fr" ? "/fr/" : "/"}${hash}`;
      const active = targetLanguage === language;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
      link.addEventListener("click", () => {
        link.href = `${targetLanguage === "fr" ? "/fr/" : "/"}${window.location.hash}`;
      });
    });

    if (isFrench) {
      document.querySelector(".language-switcher")?.setAttribute("aria-label", "Sélecteur de langue");
      document.querySelector(".hero-card")?.setAttribute("aria-label", "Poste actuel");
      document.querySelector(".hero-stack")?.setAttribute("aria-label", "Technologies principales");
      document.querySelector(".project-pagination")?.setAttribute("aria-label", "Pages du portfolio");
      document.querySelector("#french-pdf-viewer")?.setAttribute("title", "CV français au format PDF");
      document.querySelector("#english-pdf-viewer")?.setAttribute("title", "CV anglais au format PDF");
    }
  }

  updateSeo();
  translateTextNodes();
  configureLanguageLinks();

  window.siteI18n = {
    language,
    isFrench,
    projectDescriptions: frenchProjectDescriptions,
    t(value) {
      return isFrench && frenchText[value] ? frenchText[value] : value;
    }
  };
})();
