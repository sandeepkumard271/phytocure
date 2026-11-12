/**
 * PhytoCure AI - Crop Health Journal & Scan History (LocalStorage)
 */

class PlantJournal {
  constructor() {
    this.storageKey = "phytocure_scans_v1";
    this.container = document.getElementById("journalEntriesList");
    this.exportBtn = document.getElementById("exportJournalCsvBtn");
    this.clearBtn = document.getElementById("clearJournalBtn");
  }

  init() {
    if (this.exportBtn) {
      this.exportBtn.addEventListener("click", () => this.exportCsv());
    }
    if (this.clearBtn) {
      this.clearBtn.addEventListener("click", () => this.clearAll());
    }
    this.render();
  }

  getEntries() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : this.getDefaultSampleEntries();
    } catch (e) {
      return this.getDefaultSampleEntries();
    }
  }

  getDefaultSampleEntries() {
    const tomato = typeof getDiseaseById === "function" ? getDiseaseById("tomato_early_blight") : null;
    const apple = typeof getDiseaseById === "function" ? getDiseaseById("apple_scab") : null;
    return [
      {
        id: "scan_101",
        crop: "Tomato",
        disease: "Early Blight",
        scientificName: "Alternaria solani",
        pathogen: "Fungal",
        severity: "Moderate",
        severityLevel: 65,
        confidence: 97.4,
        date: "Nov 10, 2026, 09:15 AM",
        status: "Improving",
        thumbnail: (tomato && tomato.svgDataUri) ? tomato.svgDataUri : "assets/samples/tomato_early_blight.svg",
        notes: "Pruned lower 10 inches. Applied Neem 0.5% + potassium bicarbonate."
      },
      {
        id: "scan_102",
        crop: "Apple",
        disease: "Apple Scab",
        scientificName: "Venturia inaequalis",
        pathogen: "Fungal",
        severity: "Severe",
        severityLevel: 75,
        confidence: 96.8,
        date: "Nov 08, 2026, 02:40 PM",
        status: "Active Treatment",
        thumbnail: (apple && apple.svgDataUri) ? apple.svgDataUri : "assets/samples/apple_scab.svg",
        notes: "Sprayed Captan protectant following 14-hour rain spell."
      }
    ];
  }

  addEntry(entry) {
    const entries = this.getEntries();
    const newEntry = {
      id: "scan_" + Date.now(),
      status: "Active Treatment",
      notes: "Scanned via PhytoCure Diagnostic Studio.",
      ...entry
    };
    entries.unshift(newEntry);
    this.saveEntries(entries);
    this.render();
  }

  saveEntries(entries) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(entries));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }

  toggleStatus(id) {
    const entries = this.getEntries();
    const item = entries.find((e) => e.id === id);
    if (item) {
      if (item.status === "Active Treatment") item.status = "Improving";
      else if (item.status === "Improving") item.status = "Resolved";
      else item.status = "Active Treatment";
      this.saveEntries(entries);
      this.render();
    }
  }

  deleteEntry(id) {
    let entries = this.getEntries();
    entries = entries.filter((e) => e.id !== id);
    this.saveEntries(entries);
    this.render();
  }

  clearAll() {
    if (confirm("Are you sure you want to clear your plant scan history?")) {
      localStorage.removeItem(this.storageKey);
      this.render();
    }
  }

  render() {
    if (!this.container) return;
    const entries = this.getEntries();

    const countBadge = document.getElementById("journalCountBadge");
    if (countBadge) countBadge.textContent = entries.length;

    if (entries.length === 0) {
      this.container.innerHTML = `
        <div class="text-center py-5 text-muted">
          <i class="bi bi-journal-x fs-1 d-block mb-2 text-secondary"></i>
          <h6>No plant scans recorded yet</h6>
          <p class="small">Upload or capture a leaf photo in the Diagnostic Studio to start tracking your crop health.</p>
        </div>
      `;
      return;
    }

    this.container.innerHTML = `
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0 small">
          <thead class="table-light">
            <tr>
              <th>Leaf Sample</th>
              <th>Date / Time</th>
              <th>Crop & Pathology</th>
              <th>Severity</th>
              <th>Confidence</th>
              <th>Treatment Status</th>
              <th class="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${entries
              .map((e) => {
                let badgeClass = "bg-warning-subtle text-warning-emphasis border";
                if (e.status === "Improving") badgeClass = "bg-info-subtle text-info-emphasis border";
                if (e.status === "Resolved") badgeClass = "bg-success-subtle text-success border";

                return `
                <tr>
                  <td>
                    <img src="${e.thumbnail || 'assets/samples/healthy_leaf.svg'}" alt="${e.crop}" style="width: 44px; height: 44px; object-fit: cover;" class="rounded border">
                  </td>
                  <td>
                    <div class="fw-semibold text-dark">${e.date}</div>
                    <small class="text-muted">${e.notes || ''}</small>
                  </td>
                  <td>
                    <div class="fw-bold text-dark">${e.crop}: ${e.disease}</div>
                    <small class="text-muted fst-italic">${e.scientificName || ''} (${e.pathogen})</small>
                  </td>
                  <td>
                    <span class="badge ${e.severity === 'Critical' ? 'bg-danger' : e.severity === 'Severe' || e.severity === 'High' ? 'bg-warning text-dark' : 'bg-success'}">
                      ${e.severity} (${e.severityLevel}%)
                    </span>
                  </td>
                  <td>
                    <span class="fw-bold text-primary">${e.confidence}%</span>
                  </td>
                  <td>
                    <button class="btn btn-sm ${badgeClass} text-nowrap" onclick="window.plantJournal.toggleStatus('${e.id}')" title="Click to toggle status">
                      <i class="bi bi-arrow-repeat me-1"></i> ${e.status}
                    </button>
                  </td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-outline-danger border-0" onclick="window.plantJournal.deleteEntry('${e.id}')" title="Delete record">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              `;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  exportCsv() {
    const entries = this.getEntries();
    if (entries.length === 0) {
      alert("No records to export.");
      return;
    }

    let csv = "ID,Date,Crop,Disease,ScientificName,Pathogen,Severity,Confidence,Status,Notes\n";
    entries.forEach((e) => {
      csv += `"${e.id}","${e.date}","${e.crop}","${e.disease}","${e.scientificName}","${e.pathogen}","${e.severity}","${e.confidence}%","${e.status}","${(e.notes || '').replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `PhytoCure_Crop_Journal_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

window.PlantJournal = PlantJournal;
