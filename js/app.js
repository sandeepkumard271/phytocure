/**
 * PhytoCure AI - Main Application Controller
 * Fully standalone, resilient, with zero-dependency fallbacks.
 */

// Define global tab switcher at top level so inline HTML onclick calls work immediately
window.switchTab = function (targetId) {
  // Update nav links active state
  document.querySelectorAll("[data-nav-target]").forEach((link) => {
    if (link.getAttribute("data-nav-target") === targetId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Hide all sections
  document.querySelectorAll(".app-section").forEach((sec) => {
    sec.classList.add("d-none");
  });

  // Show target section
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Close mobile navbar collapse if open
  const navCollapse = document.getElementById("navbarContent");
  if (navCollapse) {
    navCollapse.classList.remove("show");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Sub-modules with safe try/catch blocks
  try {
    window.scanner = new PlantScanner();
    window.scanner.init();
  } catch (e) {
    console.error("Scanner init error:", e);
  }

  try {
    window.diseaseComparator = new DiseaseComparator();
    window.diseaseComparator.init();
  } catch (e) {
    console.error("Comparator init error:", e);
  }

  try {
    window.dosageCalculator = new DosageCalculator();
    window.dosageCalculator.init();
  } catch (e) {
    console.error("Calculator init error:", e);
  }

  try {
    window.agronomistChat = new AgronomistChat();
    window.agronomistChat.init();
  } catch (e) {
    console.error("Agronomist init error:", e);
  }

  try {
    window.plantJournal = new PlantJournal();
    window.plantJournal.init();
  } catch (e) {
    console.error("Journal init error:", e);
  }

  // 2. Setup Navigation Routing
  setupNavigation();

  // 3. Setup Cure Tabs (Vanilla JS fallback)
  setupCureTabs();

  // 4. Setup Mobile Navbar Toggler (Vanilla JS fallback)
  setupMobileNav();

  // 5. Setup Library Filter and Search
  setupLibrary();

  // 6. Setup Print Diagnostic Report
  setupPrintReport();

  // 7. Setup Weather Risk Simulator
  setupWeatherRisk();

  // 8. Silent instant load of default demonstration sample (Tomato Early Blight)
  if (window.scanner) {
    window.scanner.loadSampleById("tomato_early_blight", true);
  }
});

// Navigation Tab Switcher
function setupNavigation() {
  const navLinks = document.querySelectorAll("[data-nav-target]");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-nav-target");
      window.switchTab(targetId);
    });
  });
}

// Mobile Navbar Hamburger Toggler
function setupMobileNav() {
  const toggler = document.querySelector(".navbar-toggler");
  const navCollapse = document.getElementById("navbarContent");
  if (toggler && navCollapse) {
    toggler.addEventListener("click", (e) => {
      e.preventDefault();
      navCollapse.classList.toggle("show");
    });
  }
}

// Cure Protocol Tabs (Vanilla JS support)
function setupCureTabs() {
  const cureTabButtons = document.querySelectorAll("#cureTabs button");
  cureTabButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      // Remove active from all tabs
      cureTabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Hide all panes
      const panes = document.querySelectorAll("#cureTabsContent .tab-pane");
      panes.forEach((p) => p.classList.remove("show", "active"));

      // Target pane
      const targetSelector = btn.getAttribute("data-bs-target") || btn.getAttribute("data-target");
      if (targetSelector) {
        const targetPane = document.querySelector(targetSelector);
        if (targetPane) {
          targetPane.classList.add("show", "active");
        }
      }
    });
  });
}

// Disease Library Explorer
function setupLibrary() {
  const container = document.getElementById("libraryCardsGrid");
  const searchInput = document.getElementById("librarySearchInput");
  const filterPills = document.querySelectorAll(".library-filter-pill");

  if (!container) return;

  function renderCards(filterCategory = "All", searchQuery = "") {
    const query = searchQuery.toLowerCase().trim();
    const filtered = PLANT_DISEASE_DB.filter((d) => {
      const matchCat = filterCategory === "All" || d.cropCategory === filterCategory;
      const matchSearch =
        !query ||
        d.crop.toLowerCase().includes(query) ||
        d.disease.toLowerCase().includes(query) ||
        d.scientificName.toLowerCase().includes(query) ||
        d.pathogenType.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5 text-muted">
          <i class="bi bi-search fs-2 mb-2 d-block"></i>
          <h5>No pathological entries match your search</h5>
          <p class="small">Try searching by crop name (e.g., Tomato, Potato, Apple, Citrus) or pathogen type.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered
      .map(
        (d) => `
      <div class="col-lg-4 col-md-6">
        <div class="card h-100 border shadow-sm bio-card">
          <div class="position-relative">
            <img src="${d.svgDataUri || d.sampleFile}" alt="${d.crop} - ${d.disease}" class="card-img-top p-2 bg-light border-bottom" style="height: 190px; object-fit: contain;">
            <div class="position-absolute top-0 end-0 m-3">
              <span class="badge ${d.severity === 'Critical' ? 'bg-danger' : d.severity === 'Severe' || d.severity === 'High' ? 'bg-warning text-dark' : d.severity === 'None' ? 'bg-success' : 'bg-info text-dark'} shadow-sm">
                ${d.severity}
              </span>
            </div>
            <div class="position-absolute top-0 start-0 m-3">
              <span class="badge bg-white text-dark border shadow-sm">
                ${d.pathogenType}
              </span>
            </div>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-baseline mb-1">
              <h5 class="fw-bold text-dark mb-0">${d.crop}: ${d.disease}</h5>
            </div>
            <small class="text-muted fst-italic mb-2">${d.scientificName}</small>
            <p class="small text-secondary mb-3 flex-grow-1">${d.symptoms[0]}</p>

            <div class="border-top pt-2 mb-3 small">
              <div class="text-success fw-semibold"><i class="bi bi-flower1 me-1"></i> Bio: ${d.organicCures[0].treatment}</div>
              <div class="text-primary fw-semibold"><i class="bi bi-shield-shaded me-1"></i> Chem: ${d.chemicalCures[0].commercialName}</div>
            </div>

            <div class="mt-auto d-flex gap-2">
              <button class="btn btn-sm btn-outline-primary flex-grow-1" onclick="loadDiseaseIntoScanner('${d.id}')">
                <i class="bi bi-camera-fill me-1"></i> Test in Scanner
              </button>
              <button class="btn btn-sm btn-light border" onclick="compareWithThis('${d.id}')" title="Compare in Matrix">
                <i class="bi bi-pie-chart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }

  // Initial render
  renderCards();

  // Search input event
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const activePill = document.querySelector(".library-filter-pill.active");
      const activeCat = activePill ? activePill.getAttribute("data-category") : "All";
      renderCards(activeCat, searchInput.value);
    });
  }

  // Filter pills event
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active", "btn-primary"));
      filterPills.forEach((p) => p.classList.add("btn-outline-secondary"));

      pill.classList.remove("btn-outline-secondary");
      pill.classList.add("active", "btn-primary");

      const cat = pill.getAttribute("data-category");
      renderCards(cat, searchInput ? searchInput.value : "");
    });
  });
}

// Global hook: Load selected library disease into diagnostic scanner
window.loadDiseaseIntoScanner = function (diseaseId) {
  window.switchTab("studioTab");
  if (window.scanner) {
    window.scanner.loadSampleById(diseaseId);
  }
};

window.compareWithThis = function (diseaseId) {
  window.switchTab("comparatorTab");
  if (window.diseaseComparator) {
    window.diseaseComparator.selectA.value = diseaseId;
    window.diseaseComparator.renderComparison();
  }
};

// Setup Printable Diagnosis Sheet
function setupPrintReport() {
  const printBtn = document.getElementById("printReportBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

// Weather & Fungal Risk Advisory Simulator
function setupWeatherRisk() {
  const tempSlider = document.getElementById("riskTempSlider");
  const humidSlider = document.getElementById("riskHumidSlider");
  const tempVal = document.getElementById("riskTempVal");
  const humidVal = document.getElementById("riskHumidVal");
  const riskBadge = document.getElementById("weatherRiskBadge");
  const riskDesc = document.getElementById("weatherRiskDesc");

  if (!tempSlider || !humidSlider) return;

  function updateRisk() {
    const t = parseInt(tempSlider.value);
    const h = parseInt(humidSlider.value);
    if (tempVal) tempVal.textContent = t + "°C";
    if (humidVal) humidVal.textContent = h + "%";

    let score = 0;
    if (t >= 18 && t <= 30) score += 40;
    else if (t >= 14 && t <= 35) score += 20;

    if (h >= 85) score += 55;
    else if (h >= 70) score += 35;
    else if (h >= 50) score += 15;

    if (riskBadge && riskDesc) {
      if (score >= 80) {
        riskBadge.className = "badge bg-danger fs-6 px-3 py-2";
        riskBadge.innerHTML = '<i class="bi bi-radioactive me-1"></i> HIGH SPORE OUTBREAK RISK';
        riskDesc.textContent = "Extremely favorable for Late Blight, Downy Mildew, and Anthracnose sporulation. Apply protective bio-fungicide or copper barrier within 24 hours.";
      } else if (score >= 50) {
        riskBadge.className = "badge bg-warning text-dark fs-6 px-3 py-2";
        riskBadge.innerHTML = '<i class="bi bi-exclamation-triangle-fill me-1"></i> MODERATE FUNGAL THREAT';
        riskDesc.textContent = "Warm humid conditions promote Early Blight and Powdery Mildew. Inspect lower foliage daily and avoid overhead irrigation.";
      } else {
        riskBadge.className = "badge bg-success fs-6 px-3 py-2";
        riskBadge.innerHTML = '<i class="bi bi-shield-check me-1"></i> LOW PATHOGEN PRESSURE';
        riskDesc.textContent = "Dry air suppresses fungal germination. Maintain routine cultural care and regular soil moisture checks.";
      }
    }
  }

  tempSlider.addEventListener("input", updateRisk);
  humidSlider.addEventListener("input", updateRisk);
  updateRisk();
}
