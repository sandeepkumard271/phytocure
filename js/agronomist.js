/**
 * PhytoCure AI - Interactive Agronomist & Botanical Doctor Chat
 */

class AgronomistChat {
  constructor() {
    this.messagesContainer = document.getElementById("chatMessages");
    this.input = document.getElementById("chatInput");
    this.sendBtn = document.getElementById("chatSendBtn");
    this.suggestions = document.querySelectorAll(".chat-prompt-pill");
  }

  init() {
    if (!this.sendBtn || !this.input) return;

    this.sendBtn.addEventListener("click", () => this.handleSend());
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.handleSend();
    });

    this.suggestions.forEach((pill) => {
      pill.addEventListener("click", () => {
        const query = pill.getAttribute("data-query");
        if (query) {
          this.input.value = query;
          this.handleSend();
        }
      });
    });
  }

  handleSend() {
    const text = this.input.value.trim();
    if (!text) return;

    this.appendMessage("user", text);
    this.input.value = "";

    // Show typing state
    const typingId = this.showTyping();

    setTimeout(() => {
      this.removeTyping(typingId);
      const reply = this.generateAgronomistReply(text);
      this.appendMessage("bot", reply);
    }, 650);
  }

  appendMessage(sender, htmlContent) {
    if (!this.messagesContainer) return;
    const msgDiv = document.createElement("div");
    msgDiv.className = `d-flex mb-3 ${sender === "user" ? "justify-content-end" : "justify-content-start"}`;

    if (sender === "user") {
      msgDiv.innerHTML = `
        <div class="user-bubble p-3 rounded-3 bg-primary text-white shadow-sm" style="max-width: 80%;">
          ${this.escapeHtml(htmlContent)}
        </div>
      `;
    } else {
      msgDiv.innerHTML = `
        <div class="d-flex align-items-start" style="max-width: 85%;">
          <div class="bg-success text-white rounded-circle p-2 me-2 d-flex align-items-center justify-content-center" style="width: 36px; height: 36px;">
            <i class="bi bi-person-fill-gear"></i>
          </div>
          <div class="bot-bubble p-3 rounded-3 bg-white border text-dark shadow-sm">
            <div class="small fw-bold text-success mb-1">Senior Agronomist Dr. Flora AI</div>
            <div class="small text-secondary">${htmlContent}</div>
          </div>
        </div>
      `;
    }

    this.messagesContainer.appendChild(msgDiv);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  showTyping() {
    const id = "typing_" + Date.now();
    const div = document.createElement("div");
    div.id = id;
    div.className = "d-flex mb-3 justify-content-start";
    div.innerHTML = `
      <div class="d-flex align-items-center p-2 rounded bg-light border text-muted small">
        <span class="spinner-grow spinner-grow-sm text-success me-2" role="status"></span>
        <span>Consulting agronomy knowledge base...</span>
      </div>
    `;
    this.messagesContainer.appendChild(div);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    return id;
  }

  removeTyping(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  escapeHtml(str) {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
  }

  generateAgronomistReply(query) {
    const q = query.toLowerCase();

    if (q.includes("neem") && q.includes("copper")) {
      return `
        <strong>Safety Advisory:</strong> You should <strong>NOT</strong> tank-mix concentrated Neem Oil with Copper Fungicides (e.g. Copper Hydroxide or Bordeaux mixture).
        <br><br>
        <strong>Why?</strong> The oil can trap copper ions against the delicate cuticle under direct sunlight, causing phytotoxic leaf burn and leaf drop.
        <br><br>
        <strong>Correct Protocol:</strong> Apply your Copper protectant first. Allow 5–7 days for rain and foliage drying, then apply your bio-neem spray during the evening hours.
      `;
    }

    if (q.includes("curl") || q.includes("yellow")) {
      return `
        Yellowing and curling leaves usually indicate one of three distinct stresses:
        <ul class="mb-2 mt-1 ps-3">
          <li><strong>Early Blight / Fungal Spot:</strong> Yellowing starts with concentric target spots on bottom leaves. Solution: Prune lower foliage and spray Potassium Bicarbonate (4g/L) or Chlorothalonil.</li>
          <li><strong>Overwatering & Root Hypoxia:</strong> Leaves turn pale yellow and limp without spots. Solution: Let top 2 inches of soil dry completely between irrigations.</li>
          <li><strong>Aphids or Whiteflies:</strong> Leaves curl downwards with sticky honeydew beneath. Solution: Spray 0.5% neem oil emulsion on leaf undersides.</li>
        </ul>
      `;
    }

    if (q.includes("phi") || q.includes("mancozeb") || q.includes("harvest")) {
      return `
        <strong>Pre-Harvest Intervals (PHI) Explained:</strong>
        <ul class="mb-2 mt-1 ps-3">
          <li><strong>Mancozeb (FRAC M03):</strong> PHI is typically <strong>5 to 14 days</strong> depending on the crop (5 days for tomatoes, 14 days for potatoes). Always wash fruit thoroughly.</li>
          <li><strong>Chlorothalonil (Daconil):</strong> PHI is <strong>1 day</strong> for tomatoes, 7 days for brassicas.</li>
          <li><strong>Organic Neem Oil & Bacillus subtilis:</strong> PHI is <strong>0 days</strong> (safe to harvest same day after gentle washing).</li>
        </ul>
      `;
    }

    if (q.includes("powdery") || q.includes("mildew")) {
      return `
        <strong>Organic Powdery Mildew Protocol:</strong>
        <br>Powdery mildew (*Erysiphe*) thrives in high humidity without free water on leaves.
        <br><br>
        <strong>Proven 3-Step Remedy:</strong>
        <ol class="mb-2 mt-1 ps-3">
          <li><strong>Milk Foliar Spray:</strong> Mix 1 part fresh milk to 9 parts water. Spray in direct morning sunlight. Milk proteins create natural free radicals that lyse fungal hyphae.</li>
          <li><strong>Potassium Bicarbonate:</strong> 4 grams per Liter water + 2 drops of horticultural liquid soap. Shifts pH to 8.2, killing spores instantly.</li>
          <li><strong>Prune for Airflow:</strong> Remove dense center leaves to allow morning sunlight and wind to penetrate the canopy.</li>
        </ol>
      `;
    }

    if (q.includes("fertilizer") || q.includes("nitrogen")) {
      return `
        <strong>Nutrient & Disease Interaction:</strong>
        <br>Excessive nitrogen produces fast, succulent, thin-walled leaf tissue that is exceptionally vulnerable to <em>Late Blight, Rice Blast, and Powdery Mildew</em>.
        <br><br>
        <strong>Recommendation:</strong> When disease is active in your crop, pause synthetic urea/high-N fertilizers immediately. Boost <strong>Soluble Potassium (K)</strong> and <strong>Calcium (Ca)</strong> to thicken leaf cell walls and activate systemic acquired resistance (SAR).
      `;
    }

    // Default conversational agronomist response
    return `
      Thank you for your agronomy inquiry regarding <em>"${this.escapeHtml(query)}"</em>.
      <br><br>
      Here are the foundational plant health steps our agronomy team recommends:
      <ol class="mb-2 mt-1 ps-3">
        <li><strong>Foliage Sanitation:</strong> Always water at the base of plants; 85% of leaf pathogens require 4+ hours of leaf wetness to germinate.</li>
        <li><strong>Early Detection:</strong> If you spot brown lesions, upload a picture to our <strong>Diagnostic Studio</strong> to calculate exact disease type and lesion area.</li>
        <li><strong>Integrated Pest Management (IPM):</strong> Start with certified bio-controls (like <em>Bacillus subtilis</em> or Cold-Pressed Neem 0.5%) before stepping up to synthetic fungicides.</li>
      </ol>
      Feel free to ask about specific chemical dilutions, organic remedies, or companion plants!
    `;
  }
}

window.AgronomistChat = AgronomistChat;
