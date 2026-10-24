/**
 * LUCKY TWINS ANNAPURNA VIEW POINT HOTEL & RESTAURANT
 * Boutique Mountain Hospitality & Dining — Gandaki, Nepal
 * Vanilla JavaScript (ES6+)
 * 
 * Central Configuration, Dynamic Rendering, Validation, and WhatsApp Dispatch
 */

// ==========================================================================
// 1. CENTRAL CONFIGURATION OBJECT
// Update business details, numbers, menu, rooms, and gallery in one place.
// ==========================================================================
const CONFIG = {
  business: {
    name: "Lucky Twins Annapurna View Point Hotel & Restaurant",
    shortName: "Lucky Twins Hotel & Restaurant",
    tagline: "Where Mountain Views Meet Warm Nepali Hospitality",
    proprietor: "Ex. Army Yubaraj KC",
    phone: "+977 984-6064766",
    phoneRaw: "+9779846064766",
    altPhone: "+977 980-6448075",
    whatsappNumber: "9779846064766", // International format without + or spaces
    address: "7VMC+FM6, Namling-2 / Annapurna-1, Kaski, Gandaki Province 33700, Nepal",
    locationCode: "7VMC+FM6 Gandaki",
    mapsUrl: "https://maps.google.com/?q=7VMC%2BFM6,+Gandaki+Province+33700,+Nepal",
    hours: "Open Daily: 6:00 AM – 9:30 PM",
    kitchenHours: "Fresh wood-fire cooking available all day",
    suppliedRating: {
      stars: 4.2,
      reviewCount: 19,
      note: "Based on supplied Google Maps listing (verification ongoing)"
    },
    signatureFeature: "एक चरी पाँच थरी (One Whole Local Chicken in 5 Traditional Preparations)"
  },

  // Transcribed faithfully from the authentic in-house menu whiteboard
  menuItems: [
    // --- Nepali Khana (Meal Sets) ---
    {
      id: "khana-mutton",
      name: "Local Mutton Khana Set",
      nepaliName: "१. मटन खाना",
      category: "khana",
      priceNpr: 450,
      diet: "non-veg",
      description: "Steamed fragrant rice, tender mountain goat curry, golden lentil dal, organic saag, gundruk/timur achar, and crunchy papad."
    },
    {
      id: "khana-local-chicken",
      name: "Local Village Chicken Khana",
      nepaliName: "२. लो. चिकेन खाना",
      category: "khana",
      priceNpr: 450,
      diet: "non-veg",
      popular: true,
      description: "Authentic free-range local chicken simmered with Himalayan spices, served with steaming rice, dal, greens, and house-made chutney."
    },
    {
      id: "khana-chicken",
      name: "Chicken Khana Set",
      nepaliName: "३. चिकेन खाना",
      category: "khana",
      priceNpr: 360,
      diet: "non-veg",
      description: "Classic Nepali chicken curry thali with aromatic rice, yellow dal, seasonal vegetables, and spicy mountain pickle."
    },
    {
      id: "khana-fish",
      name: "Fresh Fish Khana",
      nepaliName: "४. माछा खाना",
      category: "khana",
      priceNpr: 400,
      diet: "non-veg",
      description: "Delicately spiced mountain river fish curry served with hot rice, lentil soup, greens, and fresh pickle."
    },
    {
      id: "khana-veg",
      name: "Traditional Vegetarian Khana",
      nepaliName: "५. भेज खाना (दाल भात तरकारी)",
      category: "khana",
      priceNpr: 300,
      diet: "veg",
      description: "Wholesome Nepali staple: Steamed rice, rich yellow dal, fresh garden vegetables, saag, and homemade timur achar."
    },
    {
      id: "khana-biryani",
      name: "Chicken Biryani",
      nepaliName: "६. चिकेन बिरयानी",
      category: "khana",
      priceNpr: 450,
      diet: "non-veg",
      description: "Fragrant basmati rice slow-cooked with spiced marinated chicken, whole herbs, and served with tangy raita."
    },
    {
      id: "khana-dhindo",
      name: "Authentic Dhindo with Meat Gravy",
      nepaliName: "७. ढिँडो मासु",
      category: "khana",
      priceNpr: 450,
      diet: "non-veg",
      popular: true,
      description: "Traditional nutrient-rich hot buckwheat mash stirred to perfection, served with melting pure cow ghee and savory meat gravy."
    },

    // --- Khaja & Snacks ---
    {
      id: "khaja-chicken-chowmein",
      name: "Chicken Chowmein",
      nepaliName: "१. चिकेन चाउमिन",
      category: "khaja",
      priceNpr: 200,
      diet: "non-veg",
      description: "Wok-tossed mountain noodles with shredded chicken, crunchy cabbage, carrots, bell peppers, and scallions."
    },
    {
      id: "khaja-veg-chowmein",
      name: "Vegetable Chowmein",
      nepaliName: "२. भेज चाउमिन",
      category: "khaja",
      priceNpr: 120,
      diet: "veg",
      description: "Fresh pan-fried noodles tossed with garden-fresh greens and aromatic Nepali seasoning."
    },
    {
      id: "khaja-egg-chowmein",
      name: "Egg Chowmein",
      nepaliName: "३. अण्डा चाउमिन",
      category: "khaja",
      priceNpr: 150,
      diet: "non-veg",
      description: "Stir-fried noodles enriched with freshly scrambled eggs, onion, and herbs."
    },
    {
      id: "khaja-sukuti-chowmein",
      name: "Mountain Sukuti Chowmein",
      nepaliName: "४. सुकुटी चाउमिन",
      category: "khaja",
      priceNpr: 200,
      diet: "non-veg",
      popular: true,
      description: "Stir-fried noodles paired with tender spiced dried smoked mountain jerky (sukuti), green chili, and timur."
    },
    {
      id: "khaja-chana-chiura",
      name: "Chana Chiura",
      nepaliName: "५. चना चिउरा",
      category: "khaja",
      priceNpr: 120,
      diet: "veg",
      description: "Tender spiced black chickpeas served alongside crunchy roasted beaten rice (chiura)."
    },
    {
      id: "khaja-chicken-momo",
      name: "Steamed Chicken Mo:Mo",
      nepaliName: "६. चिकेन मम",
      category: "khaja",
      priceNpr: 150,
      diet: "non-veg",
      popular: true,
      description: "Freshly handmade steamed dumplings packed with juicy minced chicken and Himalayan spices, served with zesty tomato-sesame dip."
    },
    {
      id: "khaja-egg-chana",
      name: "Egg & Chana Plate",
      nepaliName: "७. अण्डा चना",
      category: "khaja",
      priceNpr: 100,
      diet: "non-veg",
      description: "Farm egg paired with hearty spiced chickpea curry and chopped onion-coriander garnish."
    },
    {
      id: "khaja-bread-egg",
      name: "Bread & Omelette",
      nepaliName: "८. ब्रेड अण्डा",
      category: "khaja",
      priceNpr: 70,
      diet: "non-veg",
      description: "Golden toasted bread slices with a freshly beaten masala herb omelette."
    },
    {
      id: "khaja-chowchow-sandheko",
      name: "Chowchow Sandheko",
      nepaliName: "९. चाउचाउ साँधेको",
      category: "khaja",
      priceNpr: 60,
      diet: "veg",
      description: "Quick, crunchy spiced noodle salad tossed with red onion, tomato, lemon juice, green chili, and mustard oil."
    },
    {
      id: "khaja-bhatmas-sandheko",
      name: "Bhatmas Sandheko",
      nepaliName: "१४. भट्मास साँधेको",
      category: "khaja",
      priceNpr: 100,
      diet: "veg",
      description: "Crispy roasted mountain soybeans marinated with crushed garlic, ginger, fresh green chilies, and Sichuan pepper (timur)."
    },

    // --- Special Khaja Sets & Platters ---
    {
      id: "special-ek-chari",
      name: "Signature 'Ek Chari Panch Thari' (1 Bird, 5 Styles)",
      nepaliName: "यहाँको स्पेसल — १ वा चिकेन ५ आइटम",
      category: "specials",
      priceNpr: 4500,
      diet: "non-veg",
      popular: true,
      description: "The pride of Lucky Twins: One whole fresh local chicken prepared into 5 distinct dishes (rich wood-fire curry, spiced sekuwa fry, crispy bhutan, clear herb soup, and bone broth) for sharing."
    },
    {
      id: "special-local-mutton-set",
      name: "Local Mutton Khaja Set",
      nepaliName: "१०. लो. मटन खाजा सेट",
      category: "specials",
      priceNpr: 400,
      diet: "non-veg",
      description: "Hearty travelers' platter of seasoned mountain mutton, crunchy beaten rice, roasted soybeans, and fresh salad."
    },
    {
      id: "special-local-chicken-set",
      name: "Local Chicken Khaja Set",
      nepaliName: "११. लो. चिकेन खाजा सेट",
      category: "specials",
      priceNpr: 350,
      diet: "non-veg",
      description: "Authentic local chicken fry served with chiura, spiced bhatmas, and garden garnishes."
    },
    {
      id: "special-chicken-set",
      name: "Chicken Khaja Set",
      nepaliName: "१२. चिकेन खाजा सेट",
      category: "specials",
      priceNpr: 300,
      diet: "non-veg",
      description: "Tender chicken snack platter with roasted chiura, bhatmas sandheko, and fiery achar."
    },
    {
      id: "special-bhutan-set",
      name: "Bhutan Khaja Set",
      nepaliName: "१३. भुटन खाजा सेट",
      category: "specials",
      priceNpr: 300,
      diet: "non-veg",
      description: "Traditional Nepali fried organ delicacy slow-cooked with robust spices and served with crispy beaten rice."
    },
    {
      id: "special-rajkhani-set",
      name: "Rajkhani / Sukuti Set",
      nepaliName: "१५. राजखानी / सुकुटी सेट",
      category: "specials",
      priceNpr: 300,
      diet: "non-veg",
      description: "Aromatic dried meat sauteed with onions, green peppers, and cumin, served alongside chiura."
    },

    // --- Beverages ---
    {
      id: "drink-tea",
      name: "Himalayan Spiced Milk Tea",
      nepaliName: "१६. चिया",
      category: "drinks",
      priceNpr: 40,
      diet: "veg",
      description: "Fresh cow milk boiled with fragrant CTC mountain tea, crushed green cardamom, and fresh ginger."
    },
    {
      id: "drink-coffee",
      name: "Hot Brewed Coffee",
      nepaliName: "१६. कफी",
      category: "drinks",
      priceNpr: 100,
      diet: "veg",
      description: "Warm, energizing hot coffee to greet the cool mountain morning breeze."
    }
  ],

  // Rooms Data for Accommodation
  rooms: [
    {
      id: "room-panoramic",
      name: "Himalayan Panoramic View Room",
      capacity: "Up to 2 Guests",
      bed: "1 Large Double Bed",
      view: "Direct Annapurna & Machhapuchhre Vista",
      image: "assets/images/room_himalayan_view_1792847353643.jpg",
      description: "Bright room with natural Himalayan pine accents, warm woolen duvets, panoramic window frames capturing morning sunlight over the peaks, and attached private washroom.",
      amenities: ["Mountain View Window", "Attached Bathroom", "Clean Warm Linens", "Tea/Coffee Service", "Charging Sockets"],
      priceNpr: 2500,
      priceNote: "Indicative rate per night (seasonal confirmation required)"
    },
    {
      id: "room-family",
      name: "Annapurna Ridge Family Retreat",
      capacity: "Up to 3-4 Guests",
      bed: "1 Double Bed + 1 Single Bed",
      view: "Valley & Snow Peak Panorama",
      image: "assets/images/room_himalayan_view_1792847353643.jpg",
      description: "Spacious family layout ideal for traveling groups and families visiting Kaski. Quiet atmosphere, seating area, direct terrace access, and pristine mountain air.",
      amenities: ["Terrace View Access", "Multiple Beds", "Warm Blankets", "Spacious Layout", "Room Service Dining"],
      priceNpr: 3200,
      priceNote: "Indicative rate per night (seasonal confirmation required)"
    },
    {
      id: "room-trekker",
      name: "Trekker's Rest Cozy Room",
      capacity: "1-2 Guests",
      bed: "2 Single Twin Beds",
      view: "Hillside Garden & Trail View",
      image: "assets/images/room_himalayan_view_1792847353643.jpg",
      description: "Comfortable, economical retreat designed for trekkers, backpackers, and highway travelers needing peaceful sleep, a hot meal, and an early morning start.",
      amenities: ["Comfortable Twin Beds", "Fresh Towels", "Quiet Corner", "Luggage Storage Space"],
      priceNpr: 1800,
      priceNote: "Indicative rate per night (seasonal confirmation required)"
    }
  ],

  // Gallery items combining real owner photography with high-res atmosphere photos
  gallery: [
    {
      id: "gal-real-exterior",
      category: "property",
      title: "Hotel Exterior & Annapurna Peak Panorama",
      image: "assets/aistudio/IMG_6797_994b48c8.jpeg",
      badge: "Real Property Photo",
      caption: "Lucky Twins hotel terrace against the majestic backdrop of snowcapped Annapurna and Machhapuchhre (Fishtail) peaks."
    },
    {
      id: "gal-real-board",
      category: "property",
      title: "Official Roadside Billboard — Kaski Highway",
      image: "assets/aistudio/IMG_6796_e61389e5.jpeg",
      badge: "Real Signpost",
      caption: "Highway landmark board at Annapurna-1, Kaski, managed by Proprietor Ex. Army Yubaraj KC."
    },
    {
      id: "gal-real-menu",
      category: "food",
      title: "Authentic In-House Menu Board & Aquarium",
      image: "assets/aistudio/IMG_6795_ae7e2561.jpeg",
      badge: "Verified Menu",
      caption: "The restaurant's handwritten whiteboard featuring Nepali Khana, Khaja snacks, and the signature 'Ek Chari Panch Thari'."
    },
    {
      id: "gal-khana-thali",
      category: "food",
      title: "Hand-Crafted Nepali Khana Thali",
      image: "assets/images/nepali_thali_curry_1792847355014.jpg",
      badge: "Signature Dining",
      caption: "Traditional brass platter serving freshly cooked local chicken curry, lentil soup, rice, and mountain timur pickle."
    },
    {
      id: "gal-woodfire-hearth",
      category: "food",
      title: "Traditional Wood-Fire Cooking Hearth",
      image: "assets/images/woodfire_chicken_hearth_1792847355743.jpg",
      badge: "Mountain Kitchen",
      caption: "Slow-simmered chicken curry prepared over open firewood embers, infusing rich rustic smoky flavor into every bite."
    },
    {
      id: "gal-dhindo-set",
      category: "food",
      title: "Traditional Himalayan Dhindo Set",
      image: "assets/images/dhindo_mountain_specialty_1792847355587.jpg",
      badge: "Himalayan Specialty",
      caption: "Hot organic buckwheat dhindo with pure clarified ghee and tender mountain meat gravy."
    },
    {
      id: "gal-room-interior",
      category: "rooms",
      title: "Pine-Wood Mountain Lodge Room",
      image: "assets/images/room_himalayan_view_1792847353643.jpg",
      badge: "Accommodation",
      caption: "Cozy interior with panoramic view windows, clean bedding, and natural wood aesthetics."
    }
  ],

  faqs: [
    {
      q: "How do I reserve a room at Lucky Twins?",
      a: "You can click any 'Enquire About This Room' button or use the booking modal on our website. This automatically drafts a formatted WhatsApp enquiry with your requested dates and room type to send to our proprietor. Alternatively, you may call us directly at +977 984-6064766."
    },
    {
      q: "Are room reservations confirmed immediately on the website?",
      a: "No. Because we operate as a tranquil mountain property without complex online payment systems, submitting an enquiry does not guarantee a room. Our owner will review availability and confirm your booking and current rates directly via WhatsApp or phone call."
    },
    {
      q: "What is your signature dish 'Ek Chari Panch Thari'?",
      a: "It translates to 'One Bird, Five Styles'. It is our celebrated house specialty (NPR 4,500) where one whole fresh local village chicken is prepared into 5 distinct authentic mountain recipes: wood-fire curry, spicy dry fry, sekuwa roast, clear herb broth, and seasoned organ delicacy."
    },
    {
      q: "Can I reserve a table for lunch or dinner?",
      a: "Yes! Use the Table Reservation form on this page or message us on WhatsApp. Inform us about your party size, arrival time, and seating preference (indoor or terrace). We freshly prepare meats and dhindo to order, so giving us advance notice ensures minimal wait times."
    },
    {
      q: "Where is Lucky Twins located and how do I reach it?",
      a: "We are located at 7VMC+FM6, Namling-2 / Annapurna-1, Kaski, along the scenic ridge highway in Gandaki Province, Nepal. We have a prominent roadside billboard marking the property. You can use the 'Get Directions' button in our Location section for Google Maps routing."
    },
    {
      q: "What payment methods are accepted at the property?",
      a: "We accept Nepalese Rupees (NPR) cash, and standard Nepali mobile banking QR codes (Fonepay / eSewa) subject to local network availability. We recommend carrying cash when traveling through the mountain regions."
    }
  ]
};

// ==========================================================================
// 2. DOM INITIALIZATION & STATE MANAGEMENT
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initMenu();
  initGallery();
  initFaq();
  initModalsAndForms();
  initScrollAnimations();
  initBackToTop();
  updateDynamicContent();
});

// ==========================================================================
// 3. NAVIGATION (STICKY, SCROLL-AWARE, MOBILE DRAWER)
// ==========================================================================
function initNavigation() {
  const header = document.querySelector(".top-header");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileDrawer = document.querySelector(".mobile-nav-drawer");
  const mobileBackdrop = document.querySelector(".mobile-nav-backdrop");
  const mobileClose = document.querySelector(".mobile-close-btn");
  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");
  const desktopLinks = document.querySelectorAll(".nav-link");

  // Scroll effect for header
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Mobile Drawer Toggle
  const openDrawer = () => {
    mobileDrawer.classList.add("open");
    mobileBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove("open");
    mobileBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (mobileToggle) mobileToggle.addEventListener("click", openDrawer);
  if (mobileClose) mobileClose.addEventListener("click", closeDrawer);
  if (mobileBackdrop) mobileBackdrop.addEventListener("click", closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  // Smooth scroll & active state tracking
  const sections = document.querySelectorAll("section[id]");
  const updateActiveNav = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(curr => {
      const top = curr.offsetTop;
      const height = curr.offsetHeight;
      const id = curr.getAttribute("id");
      if (scrollPos >= top && scrollPos < top + height) {
        desktopLinks.forEach(l => {
          l.classList.remove("active");
          if (l.getAttribute("href") === `#${id}`) {
            l.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", updateActiveNav, { passive: true });
}

// ==========================================================================
// 4. RESTAURANT MENU (FILTERING, SEARCH & RENDERING)
// ==========================================================================
let currentMenuCategory = "all";
let currentMenuSearch = "";

function initMenu() {
  const tabs = document.querySelectorAll(".menu-tab-btn");
  const searchInput = document.getElementById("menuSearchInput");
  const printBtn = document.getElementById("printMenuBtn");
  const viewOriginalMenuBtn = document.getElementById("viewOriginalMenuBtn");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentMenuCategory = tab.dataset.category;
      renderMenuItems();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentMenuSearch = e.target.value.toLowerCase().trim();
      renderMenuItems();
    });
  }

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  if (viewOriginalMenuBtn) {
    viewOriginalMenuBtn.addEventListener("click", () => {
      openLightbox("assets/aistudio/IMG_6795_ae7e2561.jpeg", "Original Authentic Whiteboard Menu Board at Lucky Twins Restaurant");
    });
  }

  renderMenuItems();
}

function renderMenuItems() {
  const container = document.getElementById("menuGrid");
  if (!container) return;

  const filtered = CONFIG.menuItems.filter(item => {
    const matchesCategory = currentMenuCategory === "all" || item.category === currentMenuCategory;
    const matchesSearch = !currentMenuSearch || 
      item.name.toLowerCase().includes(currentMenuSearch) || 
      item.nepaliName.toLowerCase().includes(currentMenuSearch) ||
      item.description.toLowerCase().includes(currentMenuSearch);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #fff; border-radius: var(--radius-sm); border: 1px dashed var(--color-border);">
        <p style="font-size: 1.1rem; color: var(--color-forest); margin-bottom: 0.5rem; font-family: var(--font-serif); font-weight: 600;">No dishes found matching "${escapeHtml(currentMenuSearch)}"</p>
        <p style="font-size: 0.875rem; color: var(--color-muted);">Try a different keyword or reset filters to see our full authentic Nepali menu.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="menu-item-card" data-category="${item.category}">
      <div class="menu-item-body">
        <div class="menu-item-header">
          <div>
            <h4 class="menu-item-name">${escapeHtml(item.name)}</h4>
            <span class="menu-item-nepali">${escapeHtml(item.nepaliName)}</span>
          </div>
          <span class="menu-item-price tabular-nums">NPR ${item.priceNpr.toLocaleString()}</span>
        </div>
        <p class="menu-item-desc">${escapeHtml(item.description)}</p>
        <span class="diet-tag ${item.diet === 'veg' ? 'diet-veg' : 'diet-nonveg'}">
          ${item.diet === 'veg' ? '● Vegetarian' : '▲ Non-Veg'}
        </span>
      </div>
    </article>
  `).join("");
}

// ==========================================================================
// 5. IMAGE GALLERY & FULLSCREEN LIGHTBOX
// ==========================================================================
let currentGalleryFilter = "all";
let currentLightboxIndex = 0;
let visibleGalleryItems = [];

function initGallery() {
  const filterTabs = document.querySelectorAll(".gallery-tab-btn");
  const lightbox = document.getElementById("lightboxModal");
  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentGalleryFilter = tab.dataset.filter;
      renderGallery();
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", showPrevLightboxImage);
  if (nextBtn) nextBtn.addEventListener("click", showNextLightboxImage);

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrevLightboxImage();
    if (e.key === "ArrowRight") showNextLightboxImage();
  });

  renderGallery();
}

function renderGallery() {
  const container = document.getElementById("galleryGrid");
  if (!container) return;

  visibleGalleryItems = CONFIG.gallery.filter(item => {
    return currentGalleryFilter === "all" || item.category === currentGalleryFilter;
  });

  container.innerHTML = visibleGalleryItems.map((item, index) => `
    <div class="gallery-item" onclick="openLightboxByIndex(${index})" role="button" tabindex="0" aria-label="${escapeHtml(item.title)}">
      <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
      <div class="gallery-caption-overlay">
        <span class="gallery-caption-badge">${escapeHtml(item.badge)}</span>
        <h4 class="gallery-caption-title">${escapeHtml(item.title)}</h4>
      </div>
    </div>
  `).join("");
}

function openLightboxByIndex(index) {
  currentLightboxIndex = index;
  const item = visibleGalleryItems[index];
  if (!item) return;
  openLightbox(item.image, `${item.title} — ${item.caption}`);
}

function openLightbox(imgSrc, captionText) {
  const lightbox = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");

  if (!lightbox || !img) return;

  img.src = imgSrc;
  if (caption) caption.textContent = captionText;

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightboxModal");
  if (!lightbox) return;
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

function showPrevLightboxImage() {
  if (visibleGalleryItems.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
  openLightboxByIndex(currentLightboxIndex);
}

function showNextLightboxImage() {
  if (visibleGalleryItems.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % visibleGalleryItems.length;
  openLightboxByIndex(currentLightboxIndex);
}

// ==========================================================================
// 6. ACCORDION FAQ
// ==========================================================================
function initFaq() {
  const container = document.getElementById("faqAccordion");
  if (!container) return;

  container.innerHTML = CONFIG.faqs.map((faq, i) => `
    <div class="faq-item ${i === 0 ? 'active' : ''}">
      <button class="faq-trigger" aria-expanded="${i === 0 ? 'true' : 'false'}" aria-controls="faq-desc-${i}">
        <span>${escapeHtml(faq.q)}</span>
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div id="faq-desc-${i}" class="faq-content" style="${i === 0 ? 'max-height: 200px;' : ''}">
        <div class="faq-inner">${escapeHtml(faq.a)}</div>
      </div>
    </div>
  `).join("");

  const triggers = container.querySelectorAll(".faq-trigger");
  triggers.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const content = item.querySelector(".faq-content");
      const isExpanded = item.classList.contains("active");

      // Close all others
      triggers.forEach(t => {
        const otherItem = t.closest(".faq-item");
        const otherContent = otherItem.querySelector(".faq-content");
        otherItem.classList.remove("active");
        t.setAttribute("aria-expanded", "false");
        otherContent.style.maxHeight = null;
      });

      if (!isExpanded) {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

// ==========================================================================
// 7. MODALS, RESERVATIONS & WHATSAPP GENERATOR
// ==========================================================================
function initModalsAndForms() {
  initRoomBookingModal();
  initTableReservationForm();
  initContactForm();
  setupDateMinConstraints();
}

function setupDateMinConstraints() {
  const today = new Date().toISOString().split("T")[0];
  const dateInputs = document.querySelectorAll('input[type="date"]');
  dateInputs.forEach(input => {
    input.min = today;
  });

  const checkinInput = document.getElementById("roomCheckin");
  const checkoutInput = document.getElementById("roomCheckout");
  if (checkinInput && checkoutInput) {
    checkinInput.addEventListener("change", () => {
      if (checkinInput.value) {
        // checkout must be at least same day or day after
        checkoutInput.min = checkinInput.value;
        if (checkoutInput.value && checkoutInput.value < checkinInput.value) {
          checkoutInput.value = checkinInput.value;
        }
      }
    });
  }
}

// Room Enquiry Modal
function initRoomBookingModal() {
  const modal = document.getElementById("roomModal");
  const closeBtn = document.getElementById("closeRoomModal");
  const form = document.getElementById("roomEnquiryForm");
  const roomSelect = document.getElementById("modalRoomSelect");

  // Populate room options
  if (roomSelect) {
    roomSelect.innerHTML = CONFIG.rooms.map(r => `
      <option value="${escapeHtml(r.name)}">${escapeHtml(r.name)} (~NPR ${r.priceNpr}/night)</option>
    `).join("");
  }

  // Trigger buttons across the site
  document.querySelectorAll("[data-open-room-modal]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const preselectedRoom = btn.dataset.roomName;
      if (preselectedRoom && roomSelect) {
        roomSelect.value = preselectedRoom;
      }
      openRoomModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeRoomModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeRoomModal();
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const guestName = document.getElementById("roomGuestName").value.trim();
      const guestPhone = document.getElementById("roomGuestPhone").value.trim();
      const roomType = document.getElementById("modalRoomSelect").value;
      const checkin = document.getElementById("roomCheckin").value;
      const checkout = document.getElementById("roomCheckout").value;
      const adults = document.getElementById("roomAdults").value;
      const children = document.getElementById("roomChildren").value || "0";
      const specialReq = document.getElementById("roomNotes").value.trim();

      if (!guestName || !guestPhone || !checkin || !checkout) {
        alert("Please complete the required fields (Name, Phone, Check-in, Check-out).");
        return;
      }

      const msg = `Namaste Lucky Twins! I would like to enquire about room availability.
• Guest Name: ${guestName}
• Phone: ${guestPhone}
• Room: ${roomType}
• Check-in: ${checkin}
• Check-out: ${checkout}
• Guests: ${adults} Adult(s), ${children} Child(ren)
${specialReq ? `• Notes: ${specialReq}` : ''}

Please confirm current availability and price. Thank you!`;

      openWhatsAppWithMessage(msg);
      closeRoomModal();
    });
  }
}

function openRoomModal() {
  const modal = document.getElementById("roomModal");
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeRoomModal() {
  const modal = document.getElementById("roomModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Table Reservation Form
function initTableReservationForm() {
  const form = document.getElementById("tableReservationForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("tableName").value.trim();
    const phone = document.getElementById("tablePhone").value.trim();
    const date = document.getElementById("tableDate").value;
    const time = document.getElementById("tableTime").value;
    const guests = document.getElementById("tableGuests").value;
    const seating = document.getElementById("tableSeating").value;
    const notes = document.getElementById("tableNotes").value.trim();

    if (!name || !phone || !date || !time) {
      alert("Please provide your Name, Phone Number, Date, and Time.");
      return;
    }

    const msg = `Namaste Lucky Twins! I would like to reserve a dining table.
• Name: ${name}
• Phone: ${phone}
• Date: ${date}
• Time: ${time}
• Guests: ${guests}
• Seating Preference: ${seating}
${notes ? `• Special Requests: ${notes}` : ''}

Please let me know if a table is available. Thank you!`;

    openWhatsAppWithMessage(msg);
  });
}

// General Contact Form
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const inquiryType = document.getElementById("contactType").value;
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !phone || !message) {
      alert("Please enter your Name, Contact Number, and Message.");
      return;
    }

    const msg = `Namaste Lucky Twins!
• Name: ${name}
• Contact: ${phone}
• Enquiry Type: ${inquiryType}
• Message: ${message}

Looking forward to your response!`;

    openWhatsAppWithMessage(msg);
  });
}

// Safe WhatsApp URL opener
function openWhatsAppWithMessage(message) {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${CONFIG.business.whatsappNumber}?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// ==========================================================================
// 8. SCROLL ANIMATIONS & INTERSECTION OBSERVER
// ==========================================================================
function initScrollAnimations() {
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));
}

// ==========================================================================
// 9. BACK TO TOP BUTTON
// ==========================================================================
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==========================================================================
// 10. DYNAMIC CONTENT INSERTS (YEAR, CONTACTS)
// ==========================================================================
function updateDynamicContent() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Populate any elements requiring configuration text
  document.querySelectorAll("[data-config-phone]").forEach(el => {
    el.textContent = CONFIG.business.phone;
    if (el.tagName === "A") el.href = `tel:${CONFIG.business.phoneRaw}`;
  });

  document.querySelectorAll("[data-config-address]").forEach(el => {
    el.textContent = CONFIG.business.address;
  });
}

// Utility: simple HTML escaper
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Expose openLightbox globally for inline onclicks
window.openLightboxByIndex = openLightboxByIndex;
window.openLightbox = openLightbox;
