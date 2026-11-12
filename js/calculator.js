/**
 * PhytoCure AI - Treatment & Spray Volume Calculator
 */

class DosageCalculator {
  constructor() {
    this.cropDiseaseSelect = document.getElementById("calcDiseaseSelect");
    this.treatmentSelect = document.getElementById("calcTreatmentSelect");
    this.areaUnit = document.getElementById("calcAreaUnit");
    this.areaValue = document.getElementById("calcAreaValue");
    this.tankCapacity = document.getElementById("calcTankCapacity");
    this.resultContainer = document.getElementById("calculatorResults");
    this.calculateBtn = document.getElementById("runCalculationBtn");
  }

  init() {
    if (!this.calculateBtn) return;
    this.populateDiseaseOptions();

    this.calculateBtn.addEventListener("click", () => this.calculate());
    if (this.cropDiseaseSelect) {
      this.cropDiseaseSelect.addEventListener("change", () => this.syncTreatmentOptions());
    }

    this.syncTreatmentOptions();
    this.calculate();
  }

  populateDiseaseOptions() {
    if (!this.cropDiseaseSelect) return;
    this.cropDiseaseSelect.innerHTML = PLANT_DISEASE_DB.filter(d => d.id !== "healthy_plant").map(
      (d) => `<option value="${d.id}">${d.crop} - ${d.disease}</option>`
    ).join("");
  }

  syncTreatmentOptions() {
    if (!this.cropDiseaseSelect || !this.treatmentSelect) return;
    const diseaseId = this.cropDiseaseSelect.value;
    const disease = getDiseaseById(diseaseId);
    if (!disease) return;

    let options = "";
    disease.organicCures.forEach((c, idx) => {
      options += `<option value="organic_${idx}">[Organic] ${c.treatment}</option>`;
    });
    disease.chemicalCures.forEach((c, idx) => {
      options += `<option value="chemical_${idx}">[Conventional] ${c.commercialName} (${c.activeIngredient})</option>`;
    });

    this.treatmentSelect.innerHTML = options;
  }

  prefillForDisease(disease) {
    if (this.cropDiseaseSelect) {
      this.cropDiseaseSelect.value = disease.id;
      this.syncTreatmentOptions();
      this.calculate();
    }
  }

  calculate() {
    const diseaseId = this.cropDiseaseSelect ? this.cropDiseaseSelect.value : "tomato_early_blight";
    const disease = getDiseaseById(diseaseId);
    const treatmentVal = this.treatmentSelect ? this.treatmentSelect.value : "organic_0";
    const unit = this.areaUnit ? this.areaUnit.value : "sqft";
    const area = parseFloat(this.areaValue ? this.areaValue.value : 500) || 500;
    const tankSize = parseFloat(this.tankCapacity ? this.tankCapacity.value : 16) || 16;

    // Convert area to square meters
    let areaInM2 = area;
    if (unit === "sqft") areaInM2 = area * 0.0929;
    else if (unit === "acre") areaInM2 = area * 4046.86;
    else if (unit === "hectare") areaInM2 = area * 10000;
    else if (unit === "pots") areaInM2 = area * 0.5;

    // Typical foliar spray volume: approx 0.05 to 0.08 Liters per square meter of canopy
    const totalWaterVolume = Math.max(1, Math.round(areaInM2 * 0.065 * 10) / 10);
    const tanksRequired = Math.max(1, Math.ceil(totalWaterVolume / tankSize));

    // Determine dosage per liter
    let isOrganic = treatmentVal.startsWith("organic");
    let treatmentObj = null;
    let dosePerLiter = 2.5; // default ml/g
    let unitDose = "ml";

    if (isOrganic) {
      const idx = parseInt(treatmentVal.split("_")[1]) || 0;
      treatmentObj = disease.organicCures[idx] || disease.organicCures[0];
      if (treatmentObj.recipe.includes("5 ml")) { dosePerLiter = 5; unitDose = "ml"; }
      else if (treatmentObj.recipe.includes("4 grams") || treatmentObj.recipe.includes("3 grams")) { dosePerLiter = 4; unitDose = "grams"; }
      else if (treatmentObj.recipe.includes("10 grams")) { dosePerLiter = 10; unitDose = "grams"; }
    } else {
      const idx = parseInt(treatmentVal.split("_")[1]) || 0;
      treatmentObj = disease.chemicalCures[idx] || disease.chemicalCures[0];
      if (treatmentObj.dosage.includes("2.5 ml") || treatmentObj.dosage.includes("2.5 grams")) { dosePerLiter = 2.5; unitDose = "ml/g"; }
      else if (treatmentObj.dosage.includes("1.0 ml")) { dosePerLiter = 1.0; unitDose = "ml"; }
      else if (treatmentObj.dosage.includes("0.6 grams")) { dosePerLiter = 0.6; unitDose = "grams"; }
      else { dosePerLiter = 2.0; unitDose = "ml/g"; }
    }

    const dosePerTank = Math.round(dosePerLiter * tankSize * 10) / 10;
    const totalDoseNeeded = Math.round(dosePerLiter * totalWaterVolume * 10) / 10;

    if (!this.resultContainer) return;

    this.resultContainer.innerHTML = `
      <div class="row g-3">
        <!-- KPI Metrics -->
        <div class="col-md-3 col-6">
          <div class="p-3 bg-white border rounded text-center">
            <div class="small text-secondary fw-semibold">Total Water Needed</div>
            <div class="fs-3 fw-bold text-primary">${totalWaterVolume} <span class="fs-6">Liters</span></div>
            <div class="small text-muted">For ${area} ${unit}</div>
          </div>
        </div>

        <div class="col-md-3 col-6">
          <div class="p-3 bg-white border rounded text-center">
            <div class="small text-secondary fw-semibold">Number of Tanks</div>
            <div class="fs-3 fw-bold text-dark">${tanksRequired} <span class="fs-6">Tanks</span></div>
            <div class="small text-muted">${tankSize}L tank capacity</div>
          </div>
        </div>

        <div class="col-md-3 col-6">
          <div class="p-3 bg-white border rounded text-center">
            <div class="small text-secondary fw-semibold">Dosage Per Tank</div>
            <div class="fs-3 fw-bold text-success">${dosePerTank} <span class="fs-6">${unitDose}</span></div>
            <div class="small text-muted">Mix per full ${tankSize}L fill</div>
          </div>
        </div>

        <div class="col-md-3 col-6">
          <div class="p-3 bg-white border rounded text-center">
            <div class="small text-secondary fw-semibold">Total Product Required</div>
            <div class="fs-3 fw-bold text-danger">${totalDoseNeeded} <span class="fs-6">${unitDose}</span></div>
            <div class="small text-muted">For entire spray run</div>
          </div>
        </div>
      </div>

      <!-- Preparation Card -->
      <div class="card border shadow-sm mt-3">
        <div class="card-body">
          <h6 class="fw-bold text-dark mb-2">
            <i class="bi bi-flask text-primary me-2"></i> Preparation & Mixing Protocol: ${isOrganic ? treatmentObj.treatment : treatmentObj.commercialName}
          </h6>
          <p class="small text-secondary mb-3">
            <strong>Standard Formula:</strong> Add half tank volume with clean water (pH 6.2 - 6.8). Premix <strong>${dosePerTank} ${unitDose}</strong> in a bucket with 2 Liters water, pour through strainer into tank, then top up with water to ${tankSize} Liters.
          </p>

          <div class="row g-2 small">
            <div class="col-md-6">
              <div class="p-2 rounded bg-light border">
                <strong class="text-dark"><i class="bi bi-wind text-info me-1"></i> Weather Rules:</strong>
                <ul class="mb-0 ps-3 text-secondary mt-1">
                  <li>Wind speed must be under 10 km/h (prevent drift).</li>
                  <li>Do not spray when ambient temperature exceeds 28°C.</li>
                  <li>Ensure no rain is forecast within 4 hours.</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-2 rounded bg-light border">
                <strong class="text-dark"><i class="bi bi-shield-check text-warning me-1"></i> PPE & Safety:</strong>
                <ul class="mb-0 ps-3 text-secondary mt-1">
                  <li>Nitrile chemical gloves and safety eyewear required.</li>
                  <li>${isOrganic ? 'Safe harvest: 0 to 1 day after treatment.' : treatmentObj.phi}</li>
                  <li>Triple-rinse spray equipment and empty away from water sources.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

window.DosageCalculator = DosageCalculator;
