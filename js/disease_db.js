/**
 * PhytoCure AI - Comprehensive Botanical Pathology & Cure Database
 * Standardized according to EPPO & PlantVillage agronomic taxonomies.
 */

const PLANT_DISEASE_DB = [
  {
    id: "tomato_early_blight",
    crop: "Tomato",
    cropCategory: "Vegetables",
    disease: "Early Blight",
    scientificName: "Alternaria solani",
    pathogenType: "Fungal",
    severity: "Moderate",
    severityLevel: 65,
    sampleFile: "assets/samples/tomato_early_blight.svg",
    svgDataUri: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0ibGVhZkdyYWQiIGN4PSI0MCUiIGN5PSIzMCUiIHI9IjcwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM0YWRlODAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiMxNmEzNGEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTQ1MzJkIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJibGlnaHRDZW50ZXIiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyNzE1MGMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI0MCUiIHN0b3AtY29sb3I9IiM0NTFhMDMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiM3ODM1MGYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjY2E4YTA0IiBzdG9wLW9wYWNpdHk9IjAuOCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iaGFsbyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NhOGEwNCIgc3RvcC1vcGFjaXR5PSIwLjkiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiNlYWIzMDgiIHN0b3Atb3BhY2l0eT0iMC42Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzIyYzU1ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8IS0tIEJhY2tncm91bmQgc29mdCBjYW52YXMgLS0+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmMWY1ZjkiIHJ4PSIxNiIvPgogIDxyZWN0IHg9IjEyIiB5PSIxMiIgd2lkdGg9IjM3NiIgaGVpZ2h0PSIzNzYiIGZpbGw9IiNmZmZmZmYiIHJ4PSIxMiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEuNSIvPgoKICA8IS0tIFN0ZW0gLS0+CiAgPHBhdGggZD0iTSAyMDAsMzcwIEMgMjA1LDMwMCAyMDAsMjMwIDE5OCwxMjAiIHN0cm9rZT0iIzcxM2YxMiIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiLz4KCiAgPCEtLSBUb21hdG8gTGVhZiBTaWxob3VldHRlIChDb21wb3VuZCBTZXJyYXRlZCBMb2JlcykgLS0+CiAgPHBhdGggZD0iTSAxOTgsODAgCiAgICAgICAgICAgQyAyMjAsMTAwIDI3MCwxMjAgMjgwLDE2MCAKICAgICAgICAgICBDIDI1NSwxNjUgMjQwLDE1NSAyNDUsMTg1IAogICAgICAgICAgIEMgMjc1LDE5NSAzMDAsMjI1IDI5MCwyNjAgCiAgICAgICAgICAgQyAyNjAsMjUwIDI0MCwyNDAgMjMwLDI3MCAKICAgICAgICAgICBDIDIxNSwzMTAgMjA1LDM0MCAxOTgsMzYwCiAgICAgICAgICAgQyAxOTAsMzQwIDE4MCwzMTAgMTY1LDI3MCAKICAgICAgICAgICBDIDE1NSwyNDAgMTM1LDI1MCAxMDUsMjYwIAogICAgICAgICAgIEMgOTUsMjI1IDEyMCwxOTUgMTUwLDE4NSAKICAgICAgICAgICBDIDE1NSwxNTUgMTQwLDE2NSAxMTUsMTYwIAogICAgICAgICAgIEMgMTI1LDEyMCAxNzUsMTAwIDE5OCw4MCBaIiAKICAgICAgICBmaWxsPSJ1cmwoI2xlYWZHcmFkKSIgc3Ryb2tlPSIjMTY2NTM0IiBzdHJva2Utd2lkdGg9IjIiLz4KCiAgPCEtLSBNYWluIFZlaW5zIC0tPgogIDxwYXRoIGQ9Ik0gMTk4LDg1IEwgMTk4LDM1MCIgc3Ryb2tlPSIjODZlZmFjIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMC42Ii8+CiAgPHBhdGggZD0iTSAxOTgsMTUwIFEgMjQwLDE1NSAyNzAsMTcwIiBzdHJva2U9IiM4NmVmYWMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxOTgsMTUwIFEgMTU1LDE1NSAxMjUsMTcwIiBzdHJva2U9IiM4NmVmYWMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxOTgsMjIwIFEgMjUwLDIzMCAyODAsMjQ1IiBzdHJva2U9IiM4NmVmYWMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxOTgsMjIwIFEgMTQ1LDIzMCAxMTUsMjQ1IiBzdHJva2U9IiM4NmVmYWMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41IiBmaWxsPSJub25lIi8+CgogIDwhLS0gRWFybHkgQmxpZ2h0IENvbmNlbnRyaWMgVGFyZ2V0IFJpbmcgTGVzaW9ucyAtLT4KICA8IS0tIExlc2lvbiAxIChNYWpvcikgLS0+CiAgPGNpcmNsZSBjeD0iMjM1IiBjeT0iMTkwIiByPSIzMiIgZmlsbD0idXJsKCNoYWxvKSIvPgogIDxlbGxpcHNlIGN4PSIyMzUiIGN5PSIxOTAiIHJ4PSIyNCIgcnk9IjIyIiBmaWxsPSJ1cmwoI2JsaWdodENlbnRlcikiLz4KICA8ZWxsaXBzZSBjeD0iMjM1IiBjeT0iMTkwIiByeD0iMTgiIHJ5PSIxNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNzgzNTBmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuOCIvPgogIDxlbGxpcHNlIGN4PSIyMzUiIGN5PSIxOTAiIHJ4PSIxMiIgcnk9IjExIiBmaWxsPSJub25lIiBzdHJva2U9IiM0NTFhMDMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC45Ii8+CiAgPGVsbGlwc2UgY3g9IjIzNSIgY3k9IjE5MCIgcng9IjYiIHJ5PSI1IiBmaWxsPSIjMWMwYTAyIi8+CgogIDwhLS0gTGVzaW9uIDIgLS0+CiAgPGNpcmNsZSBjeD0iMTU1IiBjeT0iMjQwIiByPSIyNCIgZmlsbD0idXJsKCNoYWxvKSIvPgogIDxlbGxpcHNlIGN4PSIxNTUiIGN5PSIyNDAiIHJ4PSIxOCIgcnk9IjE2IiBmaWxsPSJ1cmwoI2JsaWdodENlbnRlcikiLz4KICA8ZWxsaXBzZSBjeD0iMTU1IiBjeT0iMjQwIiByeD0iMTIiIHJ5PSIxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNzgzNTBmIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDxlbGxpcHNlIGN4PSIxNTUiIGN5PSIyNDAiIHJ4PSI1IiByeT0iNCIgZmlsbD0iIzFjMGEwMiIvPgoKICA8IS0tIExlc2lvbiAzIChTbWFsbCBzYXRlbGxpdGUpIC0tPgogIDxjaXJjbGUgY3g9IjE4NSIgY3k9IjEzMCIgcj0iMTQiIGZpbGw9InVybCgjaGFsbykiLz4KICA8ZWxsaXBzZSBjeD0iMTg1IiBjeT0iMTMwIiByeD0iOSIgcnk9IjgiIGZpbGw9InVybCgjYmxpZ2h0Q2VudGVyKSIvPgogIDxjaXJjbGUgY3g9IjE4NSIgY3k9IjEzMCIgcj0iMyIgZmlsbD0iIzFjMGEwMiIvPgoKICA8IS0tIExlc2lvbiA0IChFZGdlIG5lY3Jvc2lzKSAtLT4KICA8Y2lyY2xlIGN4PSIyNzAiIGN5PSIyNDAiIHI9IjE2IiBmaWxsPSJ1cmwoI2hhbG8pIi8+CiAgPGVsbGlwc2UgY3g9IjI3MCIgY3k9IjI0MCIgcng9IjExIiByeT0iMTAiIGZpbGw9InVybCgjYmxpZ2h0Q2VudGVyKSIvPgoKICA8IS0tIENhcHRpb24gYmFkZ2UgLS0+CiAgPHJlY3QgeD0iMjUiIHk9IjI1IiB3aWR0aD0iMTcwIiBoZWlnaHQ9IjMwIiByeD0iNiIgZmlsbD0iI2ZlZTJlMiIgc3Ryb2tlPSIjZmNhNWE1Ii8+CiAgPHRleHQgeD0iMzUiIHk9IjQ1IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjOTkxYjFiIj5Ub21hdG86IEVhcmx5IEJsaWdodDwvdGV4dD4KICA8dGV4dCB4PSIzMzAiIHk9IjQ1IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjNjQ3NDhiIj5TYW1wbGUgIzE8L3RleHQ+Cjwvc3ZnPgo=",
    colorProfile: { necrosis: "#451a03", chlorosis: "#ca8a04", dominant: "brown-yellow-rings" },
    symptoms: [
      "Circular brown-to-black spots with concentric rings creating a 'target board' pattern.",
      "Prominent yellow chlorotic halo surrounding necrotic lesions.",
      "Begins on older lower foliage and progresses upwards.",
      "Premature leaf drop causing sunscald damage to exposed ripening fruit."
    ],
    idealConditions: "Warm temperatures (24Â°C - 30Â°C) with persistent moisture from dew, rain, or overhead irrigation.",
    organicCures: [
      {
        treatment: "Cold-Pressed Neem Oil Emulsion (0.5%)",
        recipe: "5 ml Neem Oil + 2 ml organic horticultural soap per 1 Liter lukewarm water.",
        frequency: "Foliar spray every 7 days in late afternoon to avoid leaf scorch.",
        action: "Disrupts fungal cell membranes and suppresses spore germination."
      },
      {
        treatment: "Bio-Fungicide (Bacillus subtilis / Trichoderma viride)",
        recipe: "3 grams or 5 ml bio-inoculant per 1 Liter water.",
        frequency: "Apply at first sign of spots and after rain events.",
        action: "Colonizes leaf phyllosphere, outcompeting Alternaria mycelium."
      },
      {
        treatment: "Potassium Bicarbonate Foliar Wash",
        recipe: "4 grams potassium bicarbonate + 2 drops liquid soap per Liter water.",
        frequency: "Spray every 5 days during humid spells.",
        action: "Alkalizes leaf surface pH (pH > 8.0) inhibiting fungal enzyme activity."
      }
    ],
    chemicalCures: [
      {
        activeIngredient: "Chlorothalonil (Broad-Spectrum Contact Protectant)",
        commercialName: "Bravo / Daconil 2787",
        dosage: "2.0 - 2.5 ml per 1 Liter of water (or 45 ml / 15L backpack tank)",
        fracCode: "M05 (Multi-site, low resistance risk)",
        phi: "Pre-Harvest Interval: 1 day",
        precautions: "Apply preventively or immediately at first symptom. Wear gloves and eye protection."
      },
      {
        activeIngredient: "Azoxystrobin + Difenoconazole",
        commercialName: "Amistar Top",
        dosage: "1.0 ml per Liter of water",
        fracCode: "11 + 3 (Dual systemic mode of action)",
        phi: "Pre-Harvest Interval: 7 days",
        precautions: "Do not exceed 2 consecutive applications to prevent fungal strain resistance."
      }
    ],
    culturalPractices: [
      "Prune and discard the lowest 12 inches of foliage to stop soil-splash transmission.",
      "Apply 2 inches of clean straw or wood mulch around the plant drip line.",
      "Switch entirely to drip or soaker hose irrigation; never wet foliage late in the day.",
      "Practice strict 3-year crop rotation avoiding other Solanaceae (potatoes, eggplants, peppers)."
    ],
    recoveryTimeline: {
      day1_3: "Halt lesion expansion; prune heavily infected lower leaves and dispose in trash (not compost).",
      day7: "New vegetative flush shows zero target spots; existing lesions dry out into brittle dark scars.",
      day14: "Canopy stabilized; normal flowering and fruit set continues without defoliation."
    }
  },
  {
    id: "potato_late_blight",
    crop: "Potato",
    cropCategory: "Vegetables",
    disease: "Late Blight",
    scientificName: "Phytophthora infestans",
    pathogenType: "Oomycete",
    severity: "Critical",
    severityLevel: 95,
    sampleFile: "assets/samples/potato_late_blight.svg",
    svgDataUri: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icG90YXRvTGVhZiIgY3g9IjM1JSIgY3k9IjM1JSIgcj0iNjUlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzM0ZDM5OSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjcwJSIgc3RvcC1jb2xvcj0iIzA1OTY2OSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwNjRlM2IiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IndhdGVyU29ha2VkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFlMjkzYiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjQwJSIgc3RvcC1jb2xvcj0iIzNmM2Y0NiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjgwJSIgc3RvcC1jb2xvcj0iIzcxM2YxMiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNjYThhMDQiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Im1vbGREdXN0IiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuOCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjYwJSIgc3RvcC1jb2xvcj0iI2UyZThmMCIgc3RvcC1vcGFjaXR5PSIwLjQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjY2JkNWUxIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZjFmNWY5IiByeD0iMTYiLz4KICA8cmVjdCB4PSIxMiIgeT0iMTIiIHdpZHRoPSIzNzYiIGhlaWdodD0iMzc2IiBmaWxsPSIjZmZmZmZmIiByeD0iMTIiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KCiAgPCEtLSBTdGVtIC0tPgogIDxwYXRoIGQ9Ik0gMjAwLDM3MCBRIDIwMiwyODAgMjAwLDEwMCIgc3Ryb2tlPSIjMDY0ZTNiIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIvPgoKICA8IS0tIFBvdGF0byBMZWFmIEJsYWRlIChPdmF0ZSwgc2xpZ2h0bHkgdW5kdWxhdGluZykgLS0+CiAgPHBhdGggZD0iTSAyMDAsNzAgCiAgICAgICAgICAgQyAyNjAsOTAgMzEwLDE1MCAzMDAsMjQwIAogICAgICAgICAgIEMgMjkwLDI5MCAyNTAsMzQwIDIwMCwzNjAgCiAgICAgICAgICAgQyAxNTAsMzQwIDExMCwyOTAgMTAwLDI0MCAKICAgICAgICAgICBDIDkwLDE1MCAxNDAsOTAgMjAwLDcwIFoiIAogICAgICAgIGZpbGw9InVybCgjcG90YXRvTGVhZikiIHN0cm9rZT0iIzA0Nzg1NyIgc3Ryb2tlLXdpZHRoPSIyIi8+CgogIDwhLS0gVmVpbnMgLS0+CiAgPHBhdGggZD0iTSAyMDAsNzAgTCAyMDAsMzYwIiBzdHJva2U9IiNhN2YzZDAiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iMC42Ii8+CiAgPHBhdGggZD0iTSAyMDAsMTQwIFEgMjQwLDE2MCAyODAsMTgwIiBzdHJva2U9IiNhN2YzZDAiIHN0cm9rZS13aWR0aD0iMS44IiBvcGFjaXR5PSIwLjUiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNIDIwMCwxNDAgUSAxNjAsMTYwIDEyMCwxODAiIHN0cm9rZT0iI2E3ZjNkMCIgc3Ryb2tlLXdpZHRoPSIxLjgiIG9wYWNpdHk9IjAuNSIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0gMjAwLDIxMCBRIDI0NSwyMzAgMjg1LDI1MCIgc3Ryb2tlPSIjYTdmM2QwIiBzdHJva2Utd2lkdGg9IjEuOCIgb3BhY2l0eT0iMC41IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAyMDAsMjEwIFEgMTU1LDIzMCAxMTUsMjUwIiBzdHJva2U9IiNhN2YzZDAiIHN0cm9rZS13aWR0aD0iMS44IiBvcGFjaXR5PSIwLjUiIGZpbGw9Im5vbmUiLz4KCiAgPCEtLSBMYXRlIEJsaWdodCBXYXRlci1Tb2FrZWQgTmVjcm90aWMgQmxvdGNoZXMgKElycmVndWxhciwgd2V0IGxvb2spIC0tPgogIDxwYXRoIGQ9Ik0gMjAwLDc1IEMgMjQwLDgwIDI4MCwxMTAgMjg1LDE1MCBDIDI2MCwxODAgMjIwLDE2MCAyMTAsMTMwIEMgMTkwLDExMCAxODAsOTAgMjAwLDc1IFoiIAogICAgICAgIGZpbGw9InVybCgjd2F0ZXJTb2FrZWQpIiBvcGFjaXR5PSIwLjk1Ii8+CiAgPGNpcmNsZSBjeD0iMjUwIiBjeT0iMTIwIiByPSIxNSIgZmlsbD0idXJsKCNtb2xkRHVzdCkiLz4KICA8Y2lyY2xlIGN4PSIyMzAiIGN5PSIxNDAiIHI9IjEyIiBmaWxsPSJ1cmwoI21vbGREdXN0KSIvPgoKICA8IS0tIE1ham9yIFNpZGUgQmxvdGNoIC0tPgogIDxwYXRoIGQ9Ik0gMTA1LDIwMCBDIDE0MCwxOTAgMTcwLDIyMCAxNjAsMjYwIEMgMTMwLDI5MCA5NSwyNzAgMTA1LDIwMCBaIiAKICAgICAgICBmaWxsPSJ1cmwoI3dhdGVyU29ha2VkKSIgb3BhY2l0eT0iMC45MiIvPgogIDxjaXJjbGUgY3g9IjEzNSIgY3k9IjIzNSIgcj0iMTYiIGZpbGw9InVybCgjbW9sZER1c3QpIi8+CgogIDwhLS0gVGlwIGNvbGxhcHNlIC0tPgogIDxlbGxpcHNlIGN4PSIyNjAiIGN5PSIyODAiIHJ4PSIzNSIgcnk9IjI1IiBmaWxsPSJ1cmwoI3dhdGVyU29ha2VkKSIgb3BhY2l0eT0iMC44OCIvPgoKICA8IS0tIENhcHRpb24gYmFkZ2UgLS0+CiAgPHJlY3QgeD0iMjUiIHk9IjI1IiB3aWR0aD0iMTY1IiBoZWlnaHQ9IjMwIiByeD0iNiIgZmlsbD0iI2ZlZTJlMiIgc3Ryb2tlPSIjZmNhNWE1Ii8+CiAgPHRleHQgeD0iMzUiIHk9IjQ1IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjOTkxYjFiIj5Qb3RhdG86IExhdGUgQmxpZ2h0PC90ZXh0PgogIDx0ZXh0IHg9IjMzMCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiM2NDc0OGIiPlNhbXBsZSAjMjwvdGV4dD4KPC9zdmc+Cg==",
    colorProfile: { necrosis: "#1e293b", chlorosis: "#713f12", dominant: "water-soaked-black" },
    symptoms: [
      "Water-soaked, dark green to purplish-black irregular lesions on leaf edges.",
      "Fine white cottony downy fungal growth on the underside of leaves during damp mornings.",
      "Rapidly wilting and blackening petioles, leading to total canopy collapse within days.",
      "Foul-smelling secondary soft rot and brown tuber flesh discoloration."
    ],
    idealConditions: "Cool to moderate temperatures (12Â°C - 22Â°C) combined with relative humidity > 90% for over 10 hours.",
    organicCures: [
      {
        treatment: "Bordeaux Mixture (1:1:100 Ratio)",
        recipe: "10 grams Copper Sulfate + 10 grams Hydrated Lime dissolved in 1 Liter clean water.",
        frequency: "Preventive spray every 5â€“7 days before rain during cool wet weather.",
        action: "Copper ions create toxic barrier preventing zoospore encystment and germination."
      },
      {
        treatment: "Copper Octanoate (Copper Soap)",
        recipe: "10 - 15 ml per 1 Liter of water.",
        frequency: "Spray thoroughly covering upper and lower leaf surfaces.",
        action: "Gentler organic copper formulation suitable for certified organic production."
      }
    ],
    chemicalCures: [
      {
        activeIngredient: "Metalaxyl-M + Mancozeb",
        commercialName: "Ridomil Gold MZ 68 WG",
        dosage: "2.5 grams per 1 Liter of water (37.5 g / 15L knapsack)",
        fracCode: "4 + M03 (Systemic + Multi-site contact)",
        phi: "Pre-Harvest Interval: 14 days",
        precautions: "Apply immediately when late blight warning is issued in your district."
      },
      {
        activeIngredient: "Cymoxanil + Famoxadone",
        commercialName: "Equation Pro",
        dosage: "0.4 grams per 1 Liter of water",
        fracCode: "27 + 11 (Curative kickback activity up to 48 hours post-infection)",
        phi: "Pre-Harvest Interval: 7 days",
        precautions: "Use with non-ionic surfactant for optimal leaf penetration."
      }
    ],
    culturalPractices: [
      "Immediately rogue and bury or burn severely diseased vines (do not leave on field margin).",
      "Hill up soil around potato hills by 10-15 cm to protect tubers from spore wash-down.",
      "Plant only certified disease-free seed tubers with documented resistance.",
      "Eliminate all volunteer potato plants and cull piles within 500 meters of the field."
    ],
    recoveryTimeline: {
      day1_3: "Emergency fungicide knockdown; white sporulation halted on leaf undersides.",
      day7: "Infected zones desiccate; monitor tuber crowns for any brown rot exudate.",
      day14: "Healthy new vine growth; maintain protective spray barrier until haulm desiccation."
    }
  },
  {
    id: "apple_scab",
    crop: "Apple",
    cropCategory: "Fruits",
    disease: "Apple Scab",
    scientificName: "Venturia inaequalis",
    pathogenType: "Fungal",
    severity: "Severe",
    severityLevel: 75,
    sampleFile: "assets/samples/apple_scab.svg",
    svgDataUri: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iYXBwbGVMZWFmIiBjeD0iMzAlIiBjeT0iMzAlIiByPSI3MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjODZlZmFjIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjMjJjNTVlIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzE1ODAzZCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0ic2NhYkxlc2lvbiIgY3g9IjQ1JSIgY3k9IjQ1JSIgcj0iNTUlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFlMjkzYiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjcwJSIgc3RvcC1jb2xvcj0iIzMzNDE1NSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0NzU1NjkiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZjFmNWY5IiByeD0iMTYiLz4KICA8cmVjdCB4PSIxMiIgeT0iMTIiIHdpZHRoPSIzNzYiIGhlaWdodD0iMzc2IiBmaWxsPSIjZmZmZmZmIiByeD0iMTIiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KCiAgPCEtLSBTdGVtIC0tPgogIDxwYXRoIGQ9Ik0gMjAwLDM3MCBRIDE5OCwzMTAgMTk2LDEwMCIgc3Ryb2tlPSIjODU0ZDBlIiBzdHJva2Utd2lkdGg9IjQuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIi8+CgogIDwhLS0gRWxsaXB0aWNhbCBzZXJyYXRlZCBBcHBsZSBsZWFmIC0tPgogIDxwYXRoIGQ9Ik0gMTk2LDc1IAogICAgICAgICAgIEMgMjcwLDExMCAzMjAsMTgwIDMwMCwyNzAgCiAgICAgICAgICAgQyAyODAsMzMwIDIzMCwzNTUgMTk2LDM2NSAKICAgICAgICAgICBDIDE2MCwzNTUgMTEwLDMzMCA5MCwyNzAgCiAgICAgICAgICAgQyA3MCwxODAgMTIwLDExMCAxOTYsNzUgWiIgCiAgICAgICAgZmlsbD0idXJsKCNhcHBsZUxlYWYpIiBzdHJva2U9IiMxNjY1MzQiIHN0cm9rZS13aWR0aD0iMiIvPgoKICA8IS0tIExlYWYgVmVpbiBwYXR0ZXJuIC0tPgogIDxwYXRoIGQ9Ik0gMTk2LDc1IEwgMTk2LDM2NSIgc3Ryb2tlPSIjYmJmN2QwIiBzdHJva2Utd2lkdGg9IjIuNSIgb3BhY2l0eT0iMC43Ii8+CiAgPHBhdGggZD0iTSAxOTYsMTMwIFEgMjQwLDE1MCAyODAsMTcwIiBzdHJva2U9IiNiYmY3ZDAiIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjYiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNIDE5NiwxMzAgUSAxNTAsMTUwIDExMCwxNzAiIHN0cm9rZT0iI2JiZjdkMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0gMTk2LDE5MCBRIDI0NSwyMTAgMjkwLDIzMCIgc3Ryb2tlPSIjYmJmN2QwIiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC42IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxOTYsMTkwIFEgMTQ1LDIxMCAxMDAsMjMwIiBzdHJva2U9IiNiYmY3ZDAiIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjYiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNIDE5NiwyNTAgUSAyNDAsMjcwIDI3MCwyOTAiIHN0cm9rZT0iI2JiZjdkMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0gMTk2LDI1MCBRIDE1MCwyNzAgMTIwLDI5MCIgc3Ryb2tlPSIjYmJmN2QwIiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC42IiBmaWxsPSJub25lIi8+CgogIDwhLS0gU2NhYiBsZXNpb25zIChPbGl2ZS1ncmVlbiB0byB2ZWx2ZXR5IGRhcmsgc3BvdHMgd2l0aCBwdWNrZXJpbmcpIC0tPgogIDxjaXJjbGUgY3g9IjIzMCIgY3k9IjE2MCIgcj0iMjIiIGZpbGw9InVybCgjc2NhYkxlc2lvbikiLz4KICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSIxNTAiIHI9IjE0IiBmaWxsPSIjMGYxNzJhIiBvcGFjaXR5PSIwLjYiLz4KICA8Y2lyY2xlIGN4PSIxNjAiIGN5PSIxODAiIHI9IjE4IiBmaWxsPSJ1cmwoI3NjYWJMZXNpb24pIi8+CiAgPGNpcmNsZSBjeD0iMjEwIiBjeT0iMjQwIiByPSIyNiIgZmlsbD0idXJsKCNzY2FiTGVzaW9uKSIvPgogIDxjaXJjbGUgY3g9IjIyMCIgY3k9IjI0OCIgcj0iMTUiIGZpbGw9IiMwZjE3MmEiIG9wYWNpdHk9IjAuNyIvPgogIDxjaXJjbGUgY3g9IjE0NSIgY3k9IjI2NSIgcj0iMTUiIGZpbGw9InVybCgjc2NhYkxlc2lvbikiLz4KICA8Y2lyY2xlIGN4PSIyNjAiIGN5PSIyMTAiIHI9IjEyIiBmaWxsPSJ1cmwoI3NjYWJMZXNpb24pIi8+CiAgPGNpcmNsZSBjeD0iMTc1IiBjeT0iMTIwIiByPSIxMCIgZmlsbD0idXJsKCNzY2FiTGVzaW9uKSIvPgoKICA8IS0tIENhcHRpb24gYmFkZ2UgLS0+CiAgPHJlY3QgeD0iMjUiIHk9IjI1IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjMwIiByeD0iNiIgZmlsbD0iI2ZlZjNjNyIgc3Ryb2tlPSIjZmRlNjhhIi8+CiAgPHRleHQgeD0iMzUiIHk9IjQ1IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjOTI0MDBlIj5BcHBsZTogQXBwbGUgU2NhYjwvdGV4dD4KICA8dGV4dCB4PSIzMzAiIHk9IjQ1IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjNjQ3NDhiIj5TYW1wbGUgIzM8L3RleHQ+Cjwvc3ZnPgo=",
    colorProfile: { necrosis: "#0f172a", chlorosis: "#475569", dominant: "olive-velvety-black" },
    symptoms: [
      "Olive-green to velvety brown-black spots with indistinct margins on upper leaf surface.",
      "Leaf tissue puckers, bubbles, and becomes distorted around expanding scab spots.",
      "Premature defoliation weakening the tree's winter hardiness and fruit bud formation.",
      "Corky, brown, cracked scabs on fruit skin causing severe cracking and lopsided deformity."
    ],
    idealConditions: "Spring rains and wet leaves at 15Â°C - 24Â°C for 6 to 9 consecutive hours (Mills Period).",
    organicCures: [
      {
        treatment: "Micronized Wettable Sulfur (80% WDG)",
        recipe: "3 to 4 grams per 1 Liter of water.",
        frequency: "Spray at green tip, tight cluster, and petal fall. Avoid spraying above 28Â°C.",
        action: "Elemental sulfur vapor inhibits fungal spore respiration."
      },
      {
        treatment: "Bio-Inoculant (Bacillus subtilis Strain QST 713)",
        recipe: "5 ml per 1 Liter of water (Serenade ASO).",
        frequency: "Apply every 7 days during early spring shoot elongation.",
        action: "Produces lipopeptides that break down Venturia fungal cell walls."
      }
    ],
    chemicalCures: [
      {
        activeIngredient: "Myclobutanil (Sterol Demethylation Inhibitor)",
        commercialName: "Rally 40W / Systhane",
        dosage: "0.5 grams per 1 Liter of water",
        fracCode: "3 (Systemic with 72-hour reach-back eradicant power)",
        phi: "Pre-Harvest Interval: 14 days",
        precautions: "Maximum 4 sprays per season to manage resistance development."
      },
      {
        activeIngredient: "Captan 50 WP",
        commercialName: "Captan",
        dosage: "2.5 grams per 1 Liter water",
        fracCode: "M04 (Broad spectrum multi-site)",
        phi: "Pre-Harvest Interval: 0 days (safe near harvest)",
        precautions: "Do not mix with or apply within 14 days of horticultural oil sprays."
      }
    ],
    culturalPractices: [
      "Rake, chop, or burn fallen autumn apple leaves to eliminate primary ascospore overwintering.",
      "Spray 5% agricultural urea solution onto fallen autumn leaves to accelerate leaf breakdown.",
      "Prune the tree canopy in late winter to create open vase architecture for fast morning drying.",
      "Select resistant cultivars (e.g., Liberty, Enterprise, Freedom, Pristine) for new plantings."
    ],
    recoveryTimeline: {
      day1_3: "Scab spots cease active sporulation; spore release stopped.",
      day7: "Existing spots darken into dormant lesions; uninfected leaves protected.",
      day14: "Fruit development stabilizes; seasonal spray program maintains clean canopy."
    }
  },
  {
    id: "corn_leaf_blight",
    crop: "Corn (Maize)",
    cropCategory: "Grains",
    disease: "Northern Leaf Blight",
    scientificName: "Exserohilum turcicum",
    pathogenType: "Fungal",
    severity: "Severe",
    severityLevel: 70,
    sampleFile: "assets/samples/corn_leaf_blight.svg",
    svgDataUri: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY29ybkxlYWYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzE1ODAzZCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjI1JSIgc3RvcC1jb2xvcj0iIzIyYzU1ZSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzRhZGU4MCIvPgogICAgICA8c3RvcCBvZmZzZXQ9Ijc1JSIgc3RvcC1jb2xvcj0iIzIyYzU1ZSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxNjY1MzQiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImNpZ2FyTGVzaW9uIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNjYThhMDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIyMCUiIHN0b3AtY29sb3I9IiM3ODM1MGYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiM0NTFhMDMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI4MCUiIHN0b3AtY29sb3I9IiM3ODM1MGYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjY2E4YTA0Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YxZjVmOSIgcng9IjE2Ii8+CiAgPHJlY3QgeD0iMTIiIHk9IjEyIiB3aWR0aD0iMzc2IiBoZWlnaHQ9IjM3NiIgZmlsbD0iI2ZmZmZmZiIgcng9IjEyIiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMS41Ii8+CgogIDwhLS0gTG9uZyBzdHJhcC1saWtlIG1haXplIGxlYWYgLS0+CiAgPHBhdGggZD0iTSAyMDAsNDAgCiAgICAgICAgICAgQyAyNDAsMTAwIDI3MCwyMjAgMjUwLDM3MCAKICAgICAgICAgICBMIDE1MCwzNzAgCiAgICAgICAgICAgQyAxMzAsMjIwIDE2MCwxMDAgMjAwLDQwIFoiIAogICAgICAgIGZpbGw9InVybCgjY29ybkxlYWYpIiBzdHJva2U9IiMxNjY1MzQiIHN0cm9rZS13aWR0aD0iMiIvPgoKICA8IS0tIFBhcmFsbGVsIFZlbmF0aW9uIC0tPgogIDxsaW5lIHgxPSIyMDAiIHkxPSI0MCIgeDI9IjIwMCIgeTI9IjM3MCIgc3Ryb2tlPSIjZmVmMDhhIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuOCIvPgogIDxsaW5lIHgxPSIxODUiIHkxPSI2MCIgeDI9IjE3NSIgeTI9IjM3MCIgc3Ryb2tlPSIjODZlZmFjIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNSIvPgogIDxsaW5lIHgxPSIyMTUiIHkxPSI2MCIgeDI9IjIyNSIgeTI9IjM3MCIgc3Ryb2tlPSIjODZlZmFjIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNSIvPgogIDxsaW5lIHgxPSIxNzAiIHkxPSIxMDAiIHgyPSIxNjAiIHkyPSIzNzAiIHN0cm9rZT0iIzg2ZWZhYyIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjQiLz4KICA8bGluZSB4MT0iMjMwIiB5MT0iMTAwIiB4Mj0iMjQwIiB5Mj0iMzcwIiBzdHJva2U9IiM4NmVmYWMiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC40Ii8+CgogIDwhLS0gQ2hhcmFjdGVyaXN0aWMgY2lnYXItc2hhcGVkIGVsb25nYXRlZCBsZXNpb25zIChOb3J0aGVybiBDb3JuIExlYWYgQmxpZ2h0KSAtLT4KICA8IS0tIExlc2lvbiAxIC0tPgogIDxyZWN0IHg9IjE2MCIgeT0iMTQwIiB3aWR0aD0iMzAiIGhlaWdodD0iMTEwIiByeD0iMTUiIGZpbGw9InVybCgjY2lnYXJMZXNpb24pIi8+CiAgPHJlY3QgeD0iMTY1IiB5PSIxNTUiIHdpZHRoPSIyMCIgaGVpZ2h0PSI4MCIgcng9IjEwIiBmaWxsPSIjMjkxMzA1IiBvcGFjaXR5PSIwLjYiLz4KCiAgPCEtLSBMZXNpb24gMiAtLT4KICA8cmVjdCB4PSIyMTAiIHk9IjIxMCIgd2lkdGg9IjI4IiBoZWlnaHQ9Ijk1IiByeD0iMTQiIGZpbGw9InVybCgjY2lnYXJMZXNpb24pIi8+CiAgPHJlY3QgeD0iMjE1IiB5PSIyMjUiIHdpZHRoPSIxOCIgaGVpZ2h0PSI2NSIgcng9IjkiIGZpbGw9IiMyOTEzMDUiIG9wYWNpdHk9IjAuNiIvPgoKICA8IS0tIExlc2lvbiAzIChzbWFsbGVyKSAtLT4KICA8cmVjdCB4PSIxODAiIHk9IjcwIiB3aWR0aD0iMTgiIGhlaWdodD0iNTUiIHJ4PSI5IiBmaWxsPSJ1cmwoI2NpZ2FyTGVzaW9uKSIvPgoKICA8IS0tIENhcHRpb24gYmFkZ2UgLS0+CiAgPHJlY3QgeD0iMjUiIHk9IjI1IiB3aWR0aD0iMTc1IiBoZWlnaHQ9IjMwIiByeD0iNiIgZmlsbD0iI2ZlZjNjNyIgc3Ryb2tlPSIjZmRlNjhhIi8+CiAgPHRleHQgeD0iMzUiIHk9IjQ1IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjOTI0MDBlIj5Db3JuOiBMZWFmIEJsaWdodDwvdGV4dD4KICA8dGV4dCB4PSIzMzAiIHk9IjQ1IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjNjQ3NDhiIj5TYW1wbGUgIzQ8L3RleHQ+Cjwvc3ZnPgo=",
    colorProfile: { necrosis: "#451a03", chlorosis: "#ca8a04", dominant: "cigar-shaped-tan" },
    symptoms: [
      "Elongated, cigar-shaped, elliptical grayish-green to tan lesions (2.5 to 15 cm long).",
      "Lesions run strictly parallel to leaf veins, developing dark dusty spore masses in damp air.",
      "Severe infection causes entire leaves to shrivel and appear frost-bitten or torched.",
      "Substantial reduction in photosynthetic leaf area causing poor ear fill and stalk lodging."
    ],
    idealConditions: "Moderate temperatures (18Â°C - 27Â°C) accompanied by extended periods of heavy dew.",
    organicCures: [
      {
        treatment: "Trichoderma harzianum Foliar Spray",
        recipe: "4 grams bio-formulation per Liter water + 1 ml seaweed extract as spreader.",
        frequency: "Spray at V6 knee-high stage and repeat before tasseling.",
        action: "Mycoparasitic competition reduces viable inoculum in the canopy."
      },
      {
        treatment: "Liquid Seaweed & Silica Foliar Drench",
        recipe: "3 ml soluble potassium silicate + 2 ml kelp meal per Liter water.",
        frequency: "Every 10 days to reinforce leaf epidermal silicification.",
        action: "Thickens plant cuticle, making physical hyphal entry mechanically difficult."
      }
    ],
    chemicalCures: [
      {
        activeIngredient: "Pyraclostrobin + Fluxapyroxad",
        commercialName: "Priaxor / Headline AMP",
        dosage: "0.8 - 1.0 ml per 1 Liter of water",
        fracCode: "11 + 7 (Dual physiological greening & curative fungicide)",
        phi: "Pre-Harvest Interval: 21 days",
        precautions: "Apply at VT-R1 (tasseling to early silking) when lesions reach ear leaf."
      },
      {
        activeIngredient: "Propiconazole",
        commercialName: "Tilt 250 EC",
        dosage: "1.0 ml per Liter of water",
        fracCode: "3 (Triazole systemic)",
        phi: "Pre-Harvest Interval: 30 days for grain",
        precautions: "Apply preventively when weather forecast shows high humidity during pollination."
      }
    ],
    culturalPractices: [
      "Deep tillage of post-harvest crop residue to bury infected corn stubble below root zone.",
      "Implement a 1 to 2-year crop rotation with non-host crops like soybeans or sunflower.",
      "Plant corn hybrids containing multi-genic or Ht1, Ht2, or HtN resistance traits.",
      "Ensure balanced soil potassium (K) levels, as low potassium elevates susceptibility."
    ],
    recoveryTimeline: {
      day1_3: "Fungicide penetration halts lesion elongation toward leaf midrib.",
      day7: "Ear leaf and upper canopy foliage maintained green and photosynthetic.",
      day14: "Kernel pollination progresses unimpeded; crop yield potential preserved."
    }
  },
  {
    id: "grape_powdery_mildew",
    crop: "Grape",
    cropCategory: "Fruits",
    disease: "Powdery Mildew",
    scientificName: "Erysiphe necator",
    pathogenType: "Fungal",
    severity: "Moderate",
    severityLevel: 60,
    sampleFile: "assets/samples/grape_powdery_mildew.svg",
    svgDataUri: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ3JhcGVMZWFmIiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1NSUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjJjNTVlIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iNzAlIiBzdG9wLWNvbG9yPSIjMTU4MDNkIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzE0NTMyZCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icG93ZGVyeVBhdGNoIiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuOTUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI0NSUiIHN0b3AtY29sb3I9IiNmMWY1ZjkiIHN0b3Atb3BhY2l0eT0iMC44Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iODUlIiBzdG9wLWNvbG9yPSIjY2JkNWUxIiBzdG9wLW9wYWNpdHk9IjAuMzUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOTRhM2I4IiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZjFmNWY5IiByeD0iMTYiLz4KICA8cmVjdCB4PSIxMiIgeT0iMTIiIHdpZHRoPSIzNzYiIGhlaWdodD0iMzc2IiBmaWxsPSIjZmZmZmZmIiByeD0iMTIiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KCiAgPCEtLSBHcmFwZSBzdGVtIC0tPgogIDxwYXRoIGQ9Ik0gMjAwLDM3MCBRIDIwNSwzMjAgMjAwLDI3MCIgc3Ryb2tlPSIjNzgzNTBmIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIvPgoKICA8IS0tIFBhbG1hdGUgMy1sb2JlZCBHcmFwZSBMZWFmIFNoYXBlIC0tPgogIDxwYXRoIGQ9Ik0gMjAwLDgwIAogICAgICAgICAgIEMgMjIwLDk1IDI0MCw4NSAyNzAsMTEwIAogICAgICAgICAgIEMgMjYwLDEzMCAyODAsMTUwIDMxMCwxNzAgCiAgICAgICAgICAgQyAyOTUsMTkwIDMwMCwyMTAgMzIwLDI0MCAKICAgICAgICAgICBDIDI5MCwyNTAgMjcwLDI3MCAyNjAsMzAwIAogICAgICAgICAgIEMgMjQwLDI5MCAyMjAsMzEwIDIwMCwzMTUgCiAgICAgICAgICAgQyAxODAsMzEwIDE2MCwyOTAgMTQwLDMwMCAKICAgICAgICAgICBDIDEzMCwyNzAgMTEwLDI1MCA4MCwyNDAgCiAgICAgICAgICAgQyAxMDAsMjEwIDEwNSwxOTAgOTAsMTcwIAogICAgICAgICAgIEMgMTIwLDE1MCAxNDAsMTMwIDEzMCwxMTAgCiAgICAgICAgICAgQyAxNjAsODUgMTgwLDk1IDIwMCw4MCBaIiAKICAgICAgICBmaWxsPSJ1cmwoI2dyYXBlTGVhZikiIHN0cm9rZT0iIzE2NjUzNCIgc3Ryb2tlLXdpZHRoPSIyIi8+CgogIDwhLS0gUGFsbWF0ZSB2ZW5hdGlvbiByYWRpYXRpbmcgZnJvbSBiYXNlIC0tPgogIDxwYXRoIGQ9Ik0gMjAwLDMxNSBMIDIwMCw4MCIgc3Ryb2tlPSIjODZlZmFjIiBzdHJva2Utd2lkdGg9IjIuNSIgb3BhY2l0eT0iMC42Ii8+CiAgPHBhdGggZD0iTSAyMDAsMzE1IFEgMjQwLDIyMCAyOTAsMTQwIiBzdHJva2U9IiM4NmVmYWMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC42IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAyMDAsMzE1IFEgMTYwLDIyMCAxMTAsMTQwIiBzdHJva2U9IiM4NmVmYWMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC42IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAyMDAsMzE1IFEgMjYwLDI3MCAzMTUsMjM1IiBzdHJva2U9IiM4NmVmYWMiIHN0cm9rZS13aWR0aD0iMS44IiBvcGFjaXR5PSIwLjUiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNIDIwMCwzMTUgUSAxNDAsMjcwIDg1LDIzNSIgc3Ryb2tlPSIjODZlZmFjIiBzdHJva2Utd2lkdGg9IjEuOCIgb3BhY2l0eT0iMC41IiBmaWxsPSJub25lIi8+CgogIDwhLS0gV2hpdGUgcG93ZGVyeSBtaWxkZXcgcGF0Y2hlcyBjb3ZlcmluZyBzdXJmYWNlIC0tPgogIDxjaXJjbGUgY3g9IjE2MCIgY3k9IjE4MCIgcj0iNDUiIGZpbGw9InVybCgjcG93ZGVyeVBhdGNoKSIvPgogIDxjaXJjbGUgY3g9IjIzMCIgY3k9IjE2MCIgcj0iNTAiIGZpbGw9InVybCgjcG93ZGVyeVBhdGNoKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjIzMCIgcj0iNDAiIGZpbGw9InVybCgjcG93ZGVyeVBhdGNoKSIvPgogIDxjaXJjbGUgY3g9IjI3MCIgY3k9IjIxMCIgcj0iMzIiIGZpbGw9InVybCgjcG93ZGVyeVBhdGNoKSIvPgogIDxjaXJjbGUgY3g9IjEzMCIgY3k9IjIzMCIgcj0iMzUiIGZpbGw9InVybCgjcG93ZGVyeVBhdGNoKSIvPgoKICA8IS0tIENhcHRpb24gYmFkZ2UgLS0+CiAgPHJlY3QgeD0iMjUiIHk9IjI1IiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjMwIiByeD0iNiIgZmlsbD0iI2YxZjVmOSIgc3Ryb2tlPSIjY2JkNWUxIi8+CiAgPHRleHQgeD0iMzUiIHk9IjQ1IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjMzM0MTU1Ij5HcmFwZTogUG93ZGVyeSBNaWxkZXc8L3RleHQ+CiAgPHRleHQgeD0iMzMwIiB5PSI0NSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzY0NzQ4YiI+U2FtcGxlICM1PC90ZXh0Pgo8L3N2Zz4K",
    colorProfile: { necrosis: "#334155", chlorosis: "#ffffff", dominant: "white-powdery-dust" },
    symptoms: [
      "Fine white to ash-gray powdery fungal patches on upper and lower leaf surfaces.",
      "Young leaves become crinkled, upwardly curled, and stunted.",
      "Green shoots develop web-like reddish-brown scars.",
      "Infected berries turn webbed, harden, crack open, and attract secondary vinegar fruit flies."
    ],
    idealConditions: "Warm, dry shaded weather (20Â°C - 28Â°C) with high relative humidity (does not require free water).",
    organicCures: [
      {
        treatment: "Fresh Cow Milk Spray (1:9 Dilution)",
        recipe: "100 ml fresh whole cow milk mixed with 900 ml clean water.",
        frequency: "Spray in direct morning sunlight every 5â€“7 days.",
        action: "Milk proteins exposed to UV sunlight generate free oxygen radicals that lyse fungal spores."
      },
      {
        treatment: "Potassium Bicarbonate + Pure Horticultural Mineral Oil",
        recipe: "4 grams Potassium Bicarbonate + 5 ml mineral oil per 1 Liter water.",
        frequency: "Apply at first trace of powdery dust.",
        action: "Dissolves fungal mycelium and alters leaf surface osmotic balance."
      },
      {
        treatment: "Elemental Sulfur Dusting / Spray",
        recipe: "3 grams wettable sulfur per Liter water.",
        frequency: "Preventive program up to veraison (do not apply within 30 days of wine harvest).",
        action: "Sublimes into sulfur vapor penetrating dense vine foliage."
      }
    ],
    chemicalCures: [
      {
        activeIngredient: "Tebuconazole",
        commercialName: "Folicur 250 EW",
        dosage: "0.6 ml per 1 Liter of water",
        fracCode: "3 (DMI-Fungicide)",
        phi: "Pre-Harvest Interval: 14 days",
        precautions: "Do not exceed 3 applications per vegetative cycle."
      },
      {
        activeIngredient: "Trifloxystrobin",
        commercialName: "Flint 50 WG",
        dosage: "0.3 grams per Liter water",
        fracCode: "11 (Strobilurin with mesostemic vapor movement)",
        phi: "Pre-Harvest Interval: 14 days",
        precautions: "Always rotate with an alternate FRAC mode of action."
      }
    ],
    culturalPractices: [
      "Perform canopy leaf pulling around the fruit cluster zone right after bloom.",
      "Orient vineyard rows north-south to optimize bilateral solar exposure.",
      "Prune out diseased flag shoots early in spring where fungus overwintered.",
      "Avoid excessive spring nitrogen fertilizer which causes dense, humid shaded vine growth."
    ],
    recoveryTimeline: {
      day1_3: "White powdery mycelial colonies collapse and desiccate into translucent film.",
      day7: "Berry clusters remain free of scarring; cane growth continues cleanly.",
      day14: "Grape bunches expand normally; sugar accumulation proceeds without off-flavors."
    }
  },
  {
    id: "citrus_canker",
    crop: "Citrus",
    cropCategory: "Fruits",
    disease: "Citrus Canker",
    scientificName: "Xanthomonas axonopodis pv. citri",
    pathogenType: "Bacterial",
    severity: "High",
    severityLevel: 85,
    sampleFile: "assets/samples/citrus_canker.svg",
    svgDataUri: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iY2l0cnVzTGVhZiIgY3g9IjM1JSIgY3k9IjMwJSIgcj0iNzAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzRhZGU4MCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzE2YTM0YSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxNDUzMmQiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImNhbmtlckNyYXRlciIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzQ1MWEwMyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjQwJSIgc3RvcC1jb2xvcj0iIzc4MzUwZiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjcwJSIgc3RvcC1jb2xvcj0iI2I0NTMwOSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNjYThhMDQiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Im9pbHlIYWxvIiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmFjYzE1IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiNlYWIzMDgiIHN0b3Atb3BhY2l0eT0iMC44Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzE2YTM0YSIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YxZjVmOSIgcng9IjE2Ii8+CiAgPHJlY3QgeD0iMTIiIHk9IjEyIiB3aWR0aD0iMzc2IiBoZWlnaHQ9IjM3NiIgZmlsbD0iI2ZmZmZmZiIgcng9IjEyIiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMS41Ii8+CgogIDwhLS0gQ2l0cnVzIFdpbmdlZCBQZXRpb2xlIFN0ZW0gLS0+CiAgPHBhdGggZD0iTSAyMDAsMzcwIEwgMjAwLDMyMCIgc3Ryb2tlPSIjMTU4MDNkIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxlbGxpcHNlIGN4PSIyMDAiIGN5PSIzMzAiIHJ4PSIxMCIgcnk9IjE2IiBmaWxsPSIjMTU4MDNkIi8+CgogIDwhLS0gR2xvc3N5IEVsbGlwdGljIENpdHJ1cyBMZWFmIC0tPgogIDxwYXRoIGQ9Ik0gMjAwLDcwIAogICAgICAgICAgIEMgMjcwLDExMCAzMTAsMTgwIDI5MCwyNjAgCiAgICAgICAgICAgQyAyNzAsMzEwIDIzMCwzMjAgMjAwLDMyMCAKICAgICAgICAgICBDIDE3MCwzMjAgMTMwLDMxMCAxMTAsMjYwIAogICAgICAgICAgIEMgOTAsMTgwIDEzMCwxMTAgMjAwLDcwIFoiIAogICAgICAgIGZpbGw9InVybCgjY2l0cnVzTGVhZikiIHN0cm9rZT0iIzE0NTMyZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CgogIDwhLS0gTWlkcmliIGFuZCBGaW5lIFZlaW5zIC0tPgogIDxwYXRoIGQ9Ik0gMjAwLDc1IEwgMjAwLDMyMCIgc3Ryb2tlPSIjODZlZmFjIiBzdHJva2Utd2lkdGg9IjIuNSIgb3BhY2l0eT0iMC43Ii8+CiAgPHBhdGggZD0iTSAyMDAsMTIwIFEgMjM1LDE0MCAyNzAsMTU1IiBzdHJva2U9IiM4NmVmYWMiIHN0cm9rZS13aWR0aD0iMS4yIiBvcGFjaXR5PSIwLjUiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNIDIwMCwxMjAgUSAxNjUsMTQwIDEzMCwxNTUiIHN0cm9rZT0iIzg2ZWZhYyIgc3Ryb2tlLXdpZHRoPSIxLjIiIG9wYWNpdHk9IjAuNSIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0gMjAwLDE4MCBRIDI0MCwyMDAgMjgwLDIxNSIgc3Ryb2tlPSIjODZlZmFjIiBzdHJva2Utd2lkdGg9IjEuMiIgb3BhY2l0eT0iMC41IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAyMDAsMTgwIFEgMTYwLDIwMCAxMjAsMjE1IiBzdHJva2U9IiM4NmVmYWMiIHN0cm9rZS13aWR0aD0iMS4yIiBvcGFjaXR5PSIwLjUiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNIDIwMCwyNDAgUSAyMzUsMjU1IDI2NSwyNzAiIHN0cm9rZT0iIzg2ZWZhYyIgc3Ryb2tlLXdpZHRoPSIxLjIiIG9wYWNpdHk9IjAuNSIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0gMjAwLDI0MCBRIDE2NSwyNTUgMTM1LDI3MCIgc3Ryb2tlPSIjODZlZmFjIiBzdHJva2Utd2lkdGg9IjEuMiIgb3BhY2l0eT0iMC41IiBmaWxsPSJub25lIi8+CgogIDwhLS0gUmFpc2VkIENvcmt5IENhbmtlciBMZXNpb25zIHdpdGggYnJpZ2h0IHllbGxvdyBvaWx5IGhhbG9zIC0tPgogIDwhLS0gU3BvdCAxIC0tPgogIDxjaXJjbGUgY3g9IjIzMCIgY3k9IjE1MCIgcj0iMjgiIGZpbGw9InVybCgjb2lseUhhbG8pIi8+CiAgPGNpcmNsZSBjeD0iMjMwIiBjeT0iMTUwIiByPSIxNCIgZmlsbD0idXJsKCNjYW5rZXJDcmF0ZXIpIi8+CiAgPGNpcmNsZSBjeD0iMjMwIiBjeT0iMTUwIiByPSI2IiBmaWxsPSIjMWMxOTE3Ii8+CgogIDwhLS0gU3BvdCAyIC0tPgogIDxjaXJjbGUgY3g9IjE2MCIgY3k9IjIwMCIgcj0iMjQiIGZpbGw9InVybCgjb2lseUhhbG8pIi8+CiAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iMjAwIiByPSIxMSIgZmlsbD0idXJsKCNjYW5rZXJDcmF0ZXIpIi8+CiAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iMjAwIiByPSI0IiBmaWxsPSIjMWMxOTE3Ii8+CgogIDwhLS0gU3BvdCAzIC0tPgogIDxjaXJjbGUgY3g9IjIyMCIgY3k9IjI0MCIgcj0iMjIiIGZpbGw9InVybCgjb2lseUhhbG8pIi8+CiAgPGNpcmNsZSBjeD0iMjIwIiBjeT0iMjQwIiByPSIxMCIgZmlsbD0idXJsKCNjYW5rZXJDcmF0ZXIpIi8+CgogIDwhLS0gU3BvdCA0IC0tPgogIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjEzMCIgcj0iMTYiIGZpbGw9InVybCgjb2lseUhhbG8pIi8+CiAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTMwIiByPSI3IiBmaWxsPSJ1cmwoI2NhbmtlckNyYXRlcikiLz4KCiAgPCEtLSBDYXB0aW9uIGJhZGdlIC0tPgogIDxyZWN0IHg9IjI1IiB5PSIyNSIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIzMCIgcng9IjYiIGZpbGw9IiNmZWYzYzciIHN0cm9rZT0iI2ZkZTY4YSIvPgogIDx0ZXh0IHg9IjM1IiB5PSI0NSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzkyNDAwZSI+Q2l0cnVzOiBDaXRydXMgQ2Fua2VyPC90ZXh0PgogIDx0ZXh0IHg9IjMzMCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiM2NDc0OGIiPlNhbXBsZSAjNjwvdGV4dD4KPC9zdmc+Cg==",
    colorProfile: { necrosis: "#451a03", chlorosis: "#facc15", dominant: "corky-crater-yellow-halo" },
    symptoms: [
      "Raised, rough, corky, blister-like craters on leaves, twigs, and fruit.",
      "Lesions surrounded by a distinctive oily, water-soaked, brilliant yellow halo.",
      "Leaves become brittle and drop prematurely, causing major dieback.",
      "Fruit develops cratered blemishes causing severe premature fruit drop before maturity."
    ],
    idealConditions: "Wind-driven rains, storms, and warm temperatures (20Â°C - 35Â°C); spread via leafminer feeding wounds.",
    organicCures: [
      {
        treatment: "Copper Oxychloride + Agricultural Sticker",
        recipe: "2.5 grams Copper Oxychloride 50 WP + 0.5 ml spreader per 1 Liter water.",
        frequency: "Spray emerging leaf flushes every 14â€“21 days during rainy months.",
        action: "Copper ions denature bacterial proteins and kill Xanthomonas on leaf surfaces."
      },
      {
        treatment: "Biological Bacteriophage Foliar Wash",
        recipe: "Formulated bacteriophage bio-solution as per manufacturer specs.",
        frequency: "Apply at dusk during shoot expansion.",
        action: "Specific lytic bacterial viruses selectively destroy Xanthomonas bacterial cells."
      }
    ],
    chemicalCures: [
      {
        activeIngredient: "Copper Hydroxide + Kasugamycin",
        commercialName: "Kocide 3000 + Kasumin",
        dosage: "1.5 g Copper Hydroxide + 1.5 ml Kasugamycin per Liter water",
        fracCode: "M01 + 24 (Bactericidal contact + Aminoglycoside protein inhibitor)",
        phi: "Pre-Harvest Interval: 7 days",
        precautions: "Maintain solution pH between 6.0 and 7.0 for optimal copper ionization."
      }
    ],
    culturalPractices: [
      "Plant dense Casuarina or Bamboo windbreaks around the citrus grove to dampen wind speeds below 8 m/s.",
      "Strictly sanitize pruning tools and machinery with 10% sodium hypochlorite bleach between trees.",
      "Aggressively control Asian Citrus Leafminer pests, as their feeding galleries provide bacterial entry portals.",
      "Avoid harvesting or working in the grove when foliage is wet from morning dew or rainfall."
    ],
    recoveryTimeline: {
      day1_3: "Active bacterial oozing arrested; halo expansion ceases.",
      day7: "Corky pustules seal over; new unblemished flush emerges from terminal buds.",
      day14: "Fruit development stabilizes without premature detachment."
    }
  },
  {
    id: "rice_blast",
    crop: "Rice",
    cropCategory: "Grains",
    disease: "Rice Blast",
    scientificName: "Magnaporthe oryzae",
    pathogenType: "Fungal",
    severity: "Critical",
    severityLevel: 90,
    sampleFile: "assets/samples/rice_blast.svg",
    svgDataUri: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icmljZUxlYWYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzE1ODAzZCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjM1JSIgc3RvcC1jb2xvcj0iIzIyYzU1ZSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjY1JSIgc3RvcC1jb2xvcj0iIzRhZGU4MCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxNjY1MzQiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImJsYXN0U3BpbmRsZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y4ZmFmYyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjQwJSIgc3RvcC1jb2xvcj0iI2NiZDVlMSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjcwJSIgc3RvcC1jb2xvcj0iIzdmMWQxZCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjkwJSIgc3RvcC1jb2xvcj0iIzk5MWIxYiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNiNDUzMDkiIHN0b3Atb3BhY2l0eT0iMC44Ii8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YxZjVmOSIgcng9IjE2Ii8+CiAgPHJlY3QgeD0iMTIiIHk9IjEyIiB3aWR0aD0iMzc2IiBoZWlnaHQ9IjM3NiIgZmlsbD0iI2ZmZmZmZiIgcng9IjEyIiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMS41Ii8+CgogIDwhLS0gUmljZSBibGFkZSAoc2xlbmRlciBsaW5lYXIgZ3Jhc3MtbGlrZSBsZWFmKSAtLT4KICA8cGF0aCBkPSJNIDIwMCwzMCAKICAgICAgICAgICBDIDIyNSw5MCAyNDAsMjAwIDIzNSwzNzAgCiAgICAgICAgICAgTCAxNjUsMzcwIAogICAgICAgICAgIEMgMTYwLDIwMCAxNzUsOTAgMjAwLDMwIFoiIAogICAgICAgIGZpbGw9InVybCgjcmljZUxlYWYpIiBzdHJva2U9IiMxNTgwM2QiIHN0cm9rZS13aWR0aD0iMiIvPgoKICA8IS0tIEZpbmUgcGFyYWxsZWwgdmVpbnMgLS0+CiAgPGxpbmUgeDE9IjIwMCIgeTE9IjMwIiB4Mj0iMjAwIiB5Mj0iMzcwIiBzdHJva2U9IiNmZWYwOGEiIHN0cm9rZS13aWR0aD0iMi41IiBvcGFjaXR5PSIwLjkiLz4KICA8bGluZSB4MT0iMTg4IiB5MT0iNTAiIHgyPSIxODIiIHkyPSIzNzAiIHN0cm9rZT0iIzg2ZWZhYyIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjYiLz4KICA8bGluZSB4MT0iMjEyIiB5MT0iNTAiIHgyPSIyMTgiIHkyPSIzNzAiIHN0cm9rZT0iIzg2ZWZhYyIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjYiLz4KCiAgPCEtLSBTcGluZGxlIC8gRXllLXNoYXBlZCBkaWFtb25kIGxlc2lvbnMgKFJpY2UgQmxhc3QpIC0tPgogIDwhLS0gU3BpbmRsZSAxIC0tPgogIDxwYXRoIGQ9Ik0gMTgwLDE0MCBDIDE5MCwxMjUgMjEwLDEyNSAyMjAsMTQwIEMgMjEwLDE1NSAxOTAsMTU1IDE4MCwxNDAgWiIgZmlsbD0idXJsKCNibGFzdFNwaW5kbGUpIi8+CiAgPHBhdGggZD0iTSAxODYsMTQwIEMgMTkzLDEzMiAyMDcsMTMyIDIxNCwxNDAgQyAyMDcsMTQ4IDE5MywxNDggMTg2LDE0MCBaIiBmaWxsPSIjZjFmNWY5Ii8+CgogIDwhLS0gU3BpbmRsZSAyIChsYXJnZXIpIC0tPgogIDxwYXRoIGQ9Ik0gMTc1LDIyMCBDIDE5MCwxOTUgMjE1LDE5NSAyMzAsMjIwIEMgMjE1LDI0NSAxOTAsMjQ1IDE3NSwyMjAgWiIgZmlsbD0idXJsKCNibGFzdFNwaW5kbGUpIi8+CiAgPHBhdGggZD0iTSAxODMsMjIwIEMgMTk0LDIwNSAyMTEsMjA1IDIyMiwyMjAgQyAyMTEsMjM1IDE5NCwyMzUgMTgzLDIyMCBaIiBmaWxsPSIjZTJlOGYwIi8+CgogIDwhLS0gU3BpbmRsZSAzIChsb3dlcikgLS0+CiAgPHBhdGggZD0iTSAxNzAsMjkwIEMgMTgyLDI3NSAyMDAsMjc1IDIxMiwyOTAgQyAyMDAsMzA1IDE4MiwzMDUgMTcwLDI5MCBaIiBmaWxsPSJ1cmwoI2JsYXN0U3BpbmRsZSkiLz4KCiAgPCEtLSBDYXB0aW9uIGJhZGdlIC0tPgogIDxyZWN0IHg9IjI1IiB5PSIyNSIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIzMCIgcng9IjYiIGZpbGw9IiNmZWUyZTIiIHN0cm9rZT0iI2ZjYTVhNSIvPgogIDx0ZXh0IHg9IjM1IiB5PSI0NSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzk5MWIxYiI+UmljZTogUmljZSBCbGFzdDwvdGV4dD4KICA8dGV4dCB4PSIzMzAiIHk9IjQ1IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjNjQ3NDhiIj5TYW1wbGUgIzc8L3RleHQ+Cjwvc3ZnPgo=",
    colorProfile: { necrosis: "#7f1d1d", chlorosis: "#f8fafc", dominant: "spindle-diamond-eye" },
    symptoms: [
      "Spindle- or eye-shaped lesions with gray or whitish centers and dark reddish-brown borders.",
      "Lesions enlarge rapidly and coalesce, burning up entire leaves ('leaf blast').",
      "Rotten neck / collar rot at the panicle base, turning black and snapping under wind.",
      "Empty, upright, bleached white grain heads with zero grain filling ('whitehead blast')."
    ],
    idealConditions: "Prolonged leaf wetness (>10 hours), night temperatures of 17Â°C - 23Â°C, and excessive nitrogen fertilizer.",
    organicCures: [
      {
        treatment: "Pseudomonas fluorescens Bio-Control",
        recipe: "10 grams bio-powder per 1 Liter water (seed treatment and foliar spray at tillering).",
        frequency: "Apply twice: at active tillering and panicle initiation.",
        action: "Produces 2,4-diacetylphloroglucinol (DAPG) antibiotic, inducing systemic plant defense."
      },
      {
        treatment: "Soluble Silica Foliar Supplementation",
        recipe: "5 ml liquid potassium silicate per 1 Liter water.",
        frequency: "Apply at maximum tillering and boot leaf stage.",
        action: "Forms a rigid double-layer of biogenic opal silica below the cuticle, resisting fungal penetration."
      }
    ],
    chemicalCures: [
      {
        activeIngredient: "Tricyclazole 75% WP",
        commercialName: "Beam 75 WP",
        dosage: "0.6 grams per 1 Liter of water (9 g / 15L knapsack)",
        fracCode: "16.1 (Melanin Biosynthesis Inhibitor - MBI)",
        phi: "Pre-Harvest Interval: 28 days",
        precautions: "The gold standard for systemic blast prevention. Spray at early symptom onset."
      },
      {
        activeIngredient: "Isoprothiolane 40% EC",
        commercialName: "Fuji-One",
        dosage: "1.5 ml per 1 Liter of water",
        fracCode: "6 (Phospholipid biosynthesis inhibitor)",
        phi: "Pre-Harvest Interval: 21 days",
        precautions: "Excellent translaminar movement protecting emerging tillers."
      }
    ],
    culturalPractices: [
      "Avoid excessive split applications of chemical urea/nitrogen fertilizer; use split dosage with potassium.",
      "Maintain continuous shallow ponded water in paddy fields (intermittent drought stresses plants, spiking blast).",
      "Burn or compost infected straw and stubble after harvest; do not leave on bunds.",
      "Plant certified blast-resistant seed varieties adapted to your agro-ecological zone."
    ],
    recoveryTimeline: {
      day1_3: "Fungal melanin synthesis blocked; appressoria fail to infect new leaf tissue.",
      day7: "Spindle spots stop multiplying; flag leaf unfolds healthy and green.",
      day14: "Panicle emergence proceeds with normal grain filling and full kernel weight."
    }
  },
  {
    id: "healthy_plant",
    crop: "General Crops",
    cropCategory: "General",
    disease: "Healthy Leaf (No Pathology Detected)",
    scientificName: "Plantae sanus",
    pathogenType: "Healthy",
    severity: "None",
    severityLevel: 0,
    sampleFile: "assets/samples/healthy_leaf.svg",
    svgDataUri: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iaGVhbHRoeVZpZ29yIiBjeD0iMzUlIiBjeT0iMzAlIiByPSI3MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNGFkZTgwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjMTZhMzRhIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzE0NTMyZCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic2hlZW4iIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjA1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YxZjVmOSIgcng9IjE2Ii8+CiAgPHJlY3QgeD0iMTIiIHk9IjEyIiB3aWR0aD0iMzc2IiBoZWlnaHQ9IjM3NiIgZmlsbD0iI2ZmZmZmZiIgcng9IjEyIiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMS41Ii8+CgogIDwhLS0gSGVhbHRoeSBQZXRpb2xlIC8gU3RlbSAtLT4KICA8cGF0aCBkPSJNIDIwMCwzNzAgUSAyMDIsMzAwIDE5OCwxMTAiIHN0cm9rZT0iIzE1ODAzZCIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiLz4KCiAgPCEtLSBQZXJmZWN0IFByaXN0aW5lIExlYWYgQmxhZGUgLS0+CiAgPHBhdGggZD0iTSAxOTgsNzAgCiAgICAgICAgICAgQyAyNzUsMTAwIDMyNSwxODAgMzA1LDI3MCAKICAgICAgICAgICBDIDI4NSwzMzAgMjM1LDM1NSAxOTgsMzY1IAogICAgICAgICAgIEMgMTYwLDM1NSAxMTAsMzMwIDkwLDI3MCAKICAgICAgICAgICBDIDcwLDE4MCAxMjAsMTAwIDE5OCw3MCBaIiAKICAgICAgICBmaWxsPSJ1cmwoI2hlYWx0aHlWaWdvcikiIHN0cm9rZT0iIzE2NjUzNCIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KCiAgPCEtLSBHbG9zc3kgY3V0aWNsZSBzaGVlbiBoaWdobGlnaHQgLS0+CiAgPHBhdGggZD0iTSAxOTgsNzUgCiAgICAgICAgICAgQyAyNDAsMTAwIDI3MCwxNTAgMjYwLDIyMCAKICAgICAgICAgICBDIDIzMCwyMzAgMjEwLDE4MCAyMDAsMTIwIFoiIAogICAgICAgIGZpbGw9InVybCgjc2hlZW4pIi8+CgogIDwhLS0gVmlicmFudCBIZWFsdGh5IFZlaW4gQXJjaGl0ZWN0dXJlIC0tPgogIDxwYXRoIGQ9Ik0gMTk4LDcwIEwgMTk4LDM2NSIgc3Ryb2tlPSIjYmJmN2QwIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuOCIvPgogIDxwYXRoIGQ9Ik0gMTk4LDEzMCBRIDI0MCwxNDUgMjg1LDE2MCIgc3Ryb2tlPSIjYmJmN2QwIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0gMTk4LDEzMCBRIDE1NSwxNDUgMTEwLDE2MCIgc3Ryb2tlPSIjYmJmN2QwIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0gMTk4LDE5MCBRIDI1MCwyMDUgMjk1LDIyNSIgc3Ryb2tlPSIjYmJmN2QwIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0gMTk4LDE5MCBRIDE0NSwyMDUgMTAwLDIyNSIgc3Ryb2tlPSIjYmJmN2QwIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0gMTk4LDI1NSBRIDI0MCwyNzAgMjc1LDI5MCIgc3Ryb2tlPSIjYmJmN2QwIiBzdHJva2Utd2lkdGg9IjEuOCIgb3BhY2l0eT0iMC43IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTSAxOTgsMjU1IFEgMTU1LDI3MCAxMjAsMjkwIiBzdHJva2U9IiNiYmY3ZDAiIHN0cm9rZS13aWR0aD0iMS44IiBvcGFjaXR5PSIwLjciIGZpbGw9Im5vbmUiLz4KCiAgPCEtLSBDYXB0aW9uIGJhZGdlIC0tPgogIDxyZWN0IHg9IjI1IiB5PSIyNSIgd2lkdGg9IjE2NSIgaGVpZ2h0PSIzMCIgcng9IjYiIGZpbGw9IiNkY2ZjZTciIHN0cm9rZT0iIzg2ZWZhYyIvPgogIDx0ZXh0IHg9IjM1IiB5PSI0NSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzE1ODAzZCI+U3RhdHVzOiBIZWFsdGh5IEZvbGlhZ2U8L3RleHQ+CiAgPHRleHQgeD0iMzMwIiB5PSI0NSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzY0NzQ4YiI+U2FtcGxlICM4PC90ZXh0Pgo8L3N2Zz4K",
    colorProfile: { necrosis: "none", chlorosis: "none", dominant: "rich-emerald-green" },
    symptoms: [
      "Uniform, vibrant chlorophyll pigmentation across the leaf blade.",
      "Intact, smooth leaf margins without necrotic blotches, holes, or puckering.",
      "Strong turgor pressure; vascular veins are clear and structurally sound.",
      "Zero signs of fungal sporulation, powdery residue, or bacterial water-soaking."
    ],
    idealConditions: "Optimal photosynthetic conditions with balanced moisture, airflow, and balanced nutrients.",
    organicCures: [
      {
        treatment: "Proactive Foliar Seaweed & Compost Tea Tonic",
        recipe: "2 ml cold-water kelp extract per Liter water applied every 14 days.",
        frequency: "Bi-weekly preventative foliar feeding.",
        action: "Provides micronutrients and natural cytokinins to reinforce cell wall elasticity."
      }
    ],
    chemicalCures: [
      {
        activeIngredient: "No chemical intervention needed",
        commercialName: "N/A",
        dosage: "0.0 ml",
        fracCode: "None required",
        phi: "Immediate harvest safe",
        precautions: "Avoid prophylactic chemical sprays to preserve beneficial predatory insects."
      }
    ],
    culturalPractices: [
      "Maintain regular soil moisture monitoring (keep soil evenly moist, not soggy).",
      "Rotate crops annually to avoid pathogen buildup in the rhizosphere.",
      "Apply organic worm castings or compost around root zone each spring.",
      "Regularly scout the undersides of leaves weekly for early warning of insect pests."
    ],
    recoveryTimeline: {
      day1_3: "Plant is flourishing at peak photosynthetic productivity.",
      day7: "Maintain regular care schedule and moisture levels.",
      day14: "Expect robust vegetative expansion and reproductive flowering."
    }
  }
];

// Helper lookup functions
function getDiseaseById(id) {
  return PLANT_DISEASE_DB.find(d => d.id === id) || PLANT_DISEASE_DB[0];
}

function getAllCrops() {
  const crops = new Set(PLANT_DISEASE_DB.map(d => d.crop));
  return Array.from(crops);
}

function getDiseasesByCrop(crop) {
  return PLANT_DISEASE_DB.filter(d => d.crop.toLowerCase() === crop.toLowerCase());
}
