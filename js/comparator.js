/**
 * PhytoCure AI - Disease Comparison & Differential Diagnosis Engine
 */

class DiseaseComparator {
  constructor() {
    this.selectA = document.getElementById("compareSelectA");
    this.selectB = document.getElementById("compareSelectB");
    this.container = document.getElementById("comparisonResultsArea");
  }

  init() {
    if (!this.selectA || !this.selectB) return;
    this.populateDropdowns();

    this.selectA.addEventListener("change", () => this.renderComparison());
    this.selectB.addEventListener("change", () => this.renderComparison());

    // Default selection
    this.selectA.value = "tomato_early_blight";
    this.selectB.value = "potato_late_blight";
    this.renderComparison();
  }

  populateDropdowns() {
    const optionsHtml = PLANT_DISEASE_DB.map(
      (d) => `<option value="${d.id}">${d.crop}: ${d.disease} (${d.scientificName})</option>`
    ).join("");

    this.selectA.innerHTML = optionsHtml;
    this.selectB.innerHTML = optionsHtml;
  }

  renderComparison() {
    const idA = this.selectA.value;
    const idB = this.selectB.value;
    const itemA = getDiseaseById(idA);
    const itemB = getDiseaseById(idB);

    if (!this.container) return;

    this.container.innerHTML = `
      <div class="row g-4 mt-2">
        <!-- Candidate A Card -->
        <div class="col-lg-6">
          <div class="card h-100 border shadow-sm">
            <div class="card-header bg-white border-bottom d-flex justify-content-between align-items-center">
              <div>
                <span class="badge bg-primary-subtle text-primary border small mb-1">Pathogen A</span>
                <h5 class="fw-bold text-dark mb-0">${itemA.crop}: ${itemA.disease}</h5>
                <small class="text-muted fst-italic">${itemA.scientificName}</small>
              </div>
              <img src="${itemA.svgDataUri || itemA.sampleFile}" alt="${itemA.disease}" style="width: 56px; height: 56px; object-fit: cover;" class="rounded border">
            </div>
            <div class="card-body">
              <div class="mb-3">
                <span class="badge ${itemA.severity === 'Critical' ? 'bg-danger' : 'bg-warning text-dark'} mb-2">Severity: ${itemA.severity} (${itemA.severityLevel}%)</span>
                <span class="badge bg-light text-dark border ms-1">Class: ${itemA.pathogenType}</span>
              </div>

              <h6 class="fw-bold text-dark small text-uppercase">Diagnostic Hallmarks:</h6>
              <ul class="small text-secondary ps-3 mb-3">
                ${itemA.symptoms.map(s => `<li>${s}</li>`).join("")}
              </ul>

              <h6 class="fw-bold text-dark small text-uppercase">Climate Triggers:</h6>
              <p class="small text-secondary bg-light p-2 rounded mb-3">${itemA.idealConditions}</p>

              <h6 class="fw-bold text-success small text-uppercase">Primary Organic Cure:</h6>
              <div class="p-2 rounded bg-success-subtle border small mb-3">
                <strong>${itemA.organicCures[0].treatment}</strong>
                <p class="mb-0 text-secondary">${itemA.organicCures[0].recipe}</p>
              </div>

              <h6 class="fw-bold text-primary small text-uppercase">Standard Chemical Intervention:</h6>
              <div class="p-2 rounded bg-primary-subtle border small">
                <strong>${itemA.chemicalCures[0].commercialName} (${itemA.chemicalCures[0].activeIngredient})</strong>
                <div class="text-muted small">Dosage: ${itemA.chemicalCures[0].dosage} | FRAC: ${itemA.chemicalCures[0].fracCode}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Candidate B Card -->
        <div class="col-lg-6">
          <div class="card h-100 border shadow-sm">
            <div class="card-header bg-white border-bottom d-flex justify-content-between align-items-center">
              <div>
                <span class="badge bg-teal-subtle text-success border small mb-1">Pathogen B</span>
                <h5 class="fw-bold text-dark mb-0">${itemB.crop}: ${itemB.disease}</h5>
                <small class="text-muted fst-italic">${itemB.scientificName}</small>
              </div>
              <img src="${itemB.svgDataUri || itemB.sampleFile}" alt="${itemB.disease}" style="width: 56px; height: 56px; object-fit: cover;" class="rounded border">
            </div>
            <div class="card-body">
              <div class="mb-3">
                <span class="badge ${itemB.severity === 'Critical' ? 'bg-danger' : 'bg-warning text-dark'} mb-2">Severity: ${itemB.severity} (${itemB.severityLevel}%)</span>
                <span class="badge bg-light text-dark border ms-1">Class: ${itemB.pathogenType}</span>
              </div>

              <h6 class="fw-bold text-dark small text-uppercase">Diagnostic Hallmarks:</h6>
              <ul class="small text-secondary ps-3 mb-3">
                ${itemB.symptoms.map(s => `<li>${s}</li>`).join("")}
              </ul>

              <h6 class="fw-bold text-dark small text-uppercase">Climate Triggers:</h6>
              <p class="small text-secondary bg-light p-2 rounded mb-3">${itemB.idealConditions}</p>

              <h6 class="fw-bold text-success small text-uppercase">Primary Organic Cure:</h6>
              <div class="p-2 rounded bg-success-subtle border small mb-3">
                <strong>${itemB.organicCures[0].treatment}</strong>
                <p class="mb-0 text-secondary">${itemB.organicCures[0].recipe}</p>
              </div>

              <h6 class="fw-bold text-primary small text-uppercase">Standard Chemical Intervention:</h6>
              <div class="p-2 rounded bg-primary-subtle border small">
                <strong>${itemB.chemicalCures[0].commercialName} (${itemB.chemicalCures[0].activeIngredient})</strong>
                <div class="text-muted small">Dosage: ${itemB.chemicalCures[0].dosage} | FRAC: ${itemB.chemicalCures[0].fracCode}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Differential Diagnostic Matrix Table -->
      <div class="card border shadow-sm mt-4">
        <div class="card-header bg-light fw-bold text-dark">
          <i class="bi bi-layout-three-columns me-2 text-primary"></i> Differential Agronomic Matrix
        </div>
        <div class="table-responsive">
          <table class="table table-bordered align-middle mb-0 small">
            <thead class="table-light">
              <tr>
                <th style="width: 25%;">Diagnostic Dimension</th>
                <th style="width: 37.5%;">${itemA.disease} (${itemA.crop})</th>
                <th style="width: 37.5%;">${itemB.disease} (${itemB.crop})</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-semibold">Causal Pathogen Class</td>
                <td><span class="badge bg-light text-dark border">${itemA.pathogenType}</span></td>
                <td><span class="badge bg-light text-dark border">${itemB.pathogenType}</span></td>
              </tr>
              <tr>
                <td class="fw-semibold">Primary Visual Distinguisher</td>
                <td>${itemA.symptoms[0]}</td>
                <td>${itemB.symptoms[0]}</td>
              </tr>
              <tr>
                <td class="fw-semibold">Spread Velocity</td>
                <td>${itemA.severityLevel > 80 ? "Rapid (Canopy collapse in 48-72h)" : "Moderate (Progressive defoliation over 1-3 weeks)"}</td>
                <td>${itemB.severityLevel > 80 ? "Rapid (Canopy collapse in 48-72h)" : "Moderate (Progressive defoliation over 1-3 weeks)"}</td>
              </tr>
              <tr>
                <td class="fw-semibold">Bio-Protectant Target</td>
                <td>${itemA.organicCures[0].treatment}</td>
                <td>${itemB.organicCures[0].treatment}</td>
              </tr>
              <tr>
                <td class="fw-semibold">Active Chemical FRAC Code</td>
                <td><code>${itemA.chemicalCures[0].fracCode}</code></td>
                <td><code>${itemB.chemicalCures[0].fracCode}</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

window.DiseaseComparator = DiseaseComparator;
