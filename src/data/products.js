// Product data extracted from gajanand_catlog.pdf (49-page image-only catalog).
// Extracted via OCR + visual review, then cleaned up. Numeric specs were
// legible on most pages; a few source pages were low-resolution/handwritten
// style and those fields are left out rather than guessed. Treat exact spec
// numbers as "verify against source catalog before printing" where in doubt.
//
// Each product has `image: null` — a placeholder box renders in its place
// showing the label below until real photography/renders are supplied.

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const categories = [
  {
    slug: "band-sealers",
    name: "Band Sealer",
    blurb: "Continuous band sealers for pouches and bags, with and without nitrogen flushing.",
    products: [
      { name: "Mini Band Sealer", modelNo: "FR400", specs: { Power: "650W", "Machine Body": "MS Body", Voltage: "220V/50Hz", "Sealing Width": "15mm", "Sealing Thickness": "0.02-0.08mm", "Sealing Speed": "0-12m/Min", "Temperature Range": "0-300°C", "Item Weight": "10Kg", "Item Dimension": "40x25.5x24cm" } },
      { name: "Horizontal Band Sealer", modelNo: "FR900", specs: { Power: "650W", "Machine Body": "MS Body", Voltage: "220V-240/60Hz", "Sealing Width": "6-15mm", "Sealing Thickness": "0.02-0.08mm", "Sealing Speed": "0-12m/Min", "Item Weight": "25Kg", "Item Dimension": "40x25.5x24cm" } },
      { name: "Vertical Band Sealer", modelNo: "FR900V", specs: { Power: "650W", "Machine Body": "MS Body", "Sealing Speed": "0-12m/Min", "Temperature Range": "0-300°C", "Item Weight": "30Kg", "Max. Conveyor Load": "5Kg" } },
      { name: "SS Horizontal Band Sealer", modelNo: "FR900 (SS)", specs: { Power: "650W", "Machine Body": "SS Body", Voltage: "220V-240/60Hz", "Sealing Width": "6-12mm", "Item Weight": "25Kg", "Max. Conveyor Load": "3Kg", "Item Dimension": "80x40x36cm" } },
      { name: "SS Vertical Band Sealer", modelNo: "FR900V (SS)", specs: { Power: "650W", "Machine Body": "SS Body", Voltage: "110-220V/50-60Hz", "Sealing Width": "15mm", "Item Weight": "30Kg", "Max. Conveyor Load": "5Kg", "Item Dimension": "85x40x31cm" } },
      { name: "Band Sealer", modelNo: "FR770", specs: { Power: "750W", "Machine Body": "MS Body", Voltage: "220V/50Hz", "Sealing Width": "6-12mm", "Item Weight": "30Kg", "Max. Conveyor Load": "3Kg", "Item Dimension": "106x47x38cm" } },
      { name: "Nitrogen Flushing Horizontal Band Sealer", modelNo: "FR900V-N2", specs: { Power: "750W", "Machine Body": "MS Body", Voltage: "220V/50Hz", "Sealing Width": "12mm", "Item Weight": "35Kg", "Max. Conveyor Load": "3Kg", "Item Dimension": "85x40x31cm" } },
      { name: "Nitrogen Flushing Vertical Band Sealer", modelNo: "FR770-N2", specs: { Power: "750W", "Machine Body": "MS Body", Voltage: "220V-240/60Hz", "Sealing Width": "6-12mm", "Item Weight": "35Kg", "Max. Conveyor Load": "5Kg", "Item Dimension": "40x25.5x24cm" } },
      { name: "SS Nitrogen Flushing Horizontal Band Sealer", modelNo: "FR600NV", specs: { Power: "750W", "Machine Body": "SS Body", Voltage: "220V/50Hz", "Sealing Width": "12mm", "Item Weight": "35Kg", "Max. Conveyor Load": "5Kg", "Item Dimension": "84x38x32cm" } },
      { name: "Band Sealer", modelNo: "QLF-1680", specs: { Power: "1500W", "Machine Body": "MS Body", Voltage: "110-220V/50-60Hz", "Sealing Width": "12mm", "Item Weight": "130Kg", "Max. Conveyor Load": "25Kg", "Item Dimension": "170x75x60cm" } },
      { name: "Band Sealer", modelNo: "FR1100V", specs: { Power: "1235W", "Machine Body": "MS Body", Voltage: "220V/50Hz", "Sealing Width": "12mm", "Item Weight": "42Kg", "Max. Conveyor Load": "10Kg", "Item Dimension": "110x51x59cm" } },
      { name: "Continuous Air Suction Band Sealer", modelNo: "LF-1080B", specs: { Power: "1405W", "Machine Body": "MS Body", Voltage: "110-220V/50-60Hz", "Sealing Width": "12mm", "Item Weight": "84Kg", "Max. Conveyor Load": "3Kg", "Item Dimension": "102.5x45x108cm" } },
      { name: "Automatic Inflating Film Sealer", modelNo: "DBF-1000", specs: { Power: "680W", "Machine Body": "MS Body", Voltage: "110-220V/50-60Hz", "Sealing Width": "12mm", "Item Weight": "39Kg", "Item Dimension": "85x40x31cm" } },
    ],
  },
  {
    slug: "automatic-pillow-packaging",
    name: "Automatic Pillow Packaging Machine",
    blurb: "High-speed flow-wrap / pillow packaging lines.",
    products: [
      { name: "Automatic Pillow Packaging Machine", modelNo: "SP-450X", specs: { Power: "3.0Kw", "Packing Speed": "30-120 bag/Min", "Packing Size": "100-200 x 80-200 x 0-45/75mm", "Film Width": "≤450mm", "Film Thickness": "±0.02mm", Weight: "580Kg", "Packaging Material": "OPP/PP, OPP/CPP, PT/PE, AL/PE etc" } },
      { name: "Automatic Pillow Packaging Machine", modelNo: "SP-350X", specs: { Power: "3.0Kw", "Packing Speed": "30-120 bag/Min", "Packing Size": "100-200 x 80-165 x 0-45/75mm", "Film Width": "≤350mm", "Film Thickness": "±0.02mm", Weight: "450Kg", "Packaging Material": "OPP/PP, OPP/CPP, PT/PE, AL/PE etc" } },
    ],
  },
  {
    slug: "vacuum-packaging-machines",
    name: "Vacuum Packaging Machine",
    blurb: "Single, external and double-chamber vacuum sealers across a range of sizes.",
    products: [
      { name: "Vacuum Pack", modelNo: "DZ-300SD", specs: { Power: "1500W", Voltage: "110-220V/50-60Hz", "Exhaust Rate": "10m³/H", "Sealing Bar Size": "300x8mm", "Item Weight": "4.5Kg", "Item Dimension": "41x32x32cm" } },
      { name: "Vacuum Pack", modelNo: "DZ-260C", specs: { Power: "260W", Voltage: "220V/50Hz", "Sealing Bar Size": "255x8mm", "Item Weight": "20Kg" } },
      { name: "Vacuum Pack", modelNo: "DZ-400", specs: { Power: "900W", Voltage: "220V/50Hz", "Sealing Bar": "2 Pieces", "Vacuum Pump": "20m³/H", "Sealing Bar Size": "400x10mm", "Item Weight": "80Kg", "Item Dimension": "55x50x95cm" } },
      { name: "Vacuum Pack", modelNo: "DZ-500", specs: { Power: "900W", Voltage: "220V/50Hz", "Sealing Bar": "2 Pieces", "Vacuum Pump": "20m³/H", "Sealing Bar Size": "500x10mm", "Item Weight": "100Kg", "Item Dimension": "52x52x100cm" } },
      { name: "Vacuum Pack", modelNo: "DZ-600", specs: { Power: "900W", Voltage: "220V/50Hz", "Sealing Bar": "2 Pieces", "Vacuum Pump": "20m³/H", "Sealing Bar Size": "600x10mm", "Item Weight": "120Kg", "Item Dimension": "75x62x100cm" } },
      { name: "External Vacuum Pack", modelNo: "DZ-600W", specs: { Power: "0.8Kw", Voltage: "220-240V/50-60Hz", "Sealing Speed": "1-4 times/Min", "Vacuum Pump": "20m³/H", "Sealing Bar Size": "600x10mm", "Item Weight": "80Kg", "Film Thickness (Single)": "±0.18mm", "Item Dimension": "75x62x100cm" } },
      { name: "Vacuum Pack Double Chamber", modelNo: "DZ-500 (Double Chamber)", specs: { Power: "1600W", Voltage: "440V/50Hz", "Sealing Bar": "4 Pieces", "Vacuum Pump": "40m³/H", "Sealing Bar Size": "500x10mm", "Item Weight": "165Kg", "Chamber Dimension": "57x55x4cm", "Item Dimension": "125x60x93cm" } },
      { name: "Vacuum Pack Double Chamber", modelNo: "DZ-600 (Double Chamber)", specs: { Power: "1600W", Voltage: "440V/50Hz", "Sealing Bar": "4 Pieces", "Vacuum Pump": "40m³/H", "Sealing Bar Size": "500x10mm", "Item Weight": "185Kg", "Chamber Dimension": "67x55x4cm", "Item Dimension": "145x60x94cm" } },
    ],
  },
  {
    slug: "sealing-cutting-machines",
    name: "Fully Automatic Sealing & Cutting Machine",
    blurb: "High-output pouch/bag sealing and cutting lines.",
    products: [
      { name: "Sealing & Cutting Machine", modelNo: "FQ450L", specs: { Voltage: "220V/50-60Hz", "Packing Speed": "15-30pcs/min", "Transport Load": "15-20Kg", "Maximum Package Size": "570x470mm", Weight: "291Kg" } },
      { name: "Sealing & Cutting Machine", modelNo: "FQ550L", specs: { Voltage: "220V/50-60Hz", "Packing Speed": "15-30pcs/min", "Transport Load": "15-20Kg", "Maximum Package Size": "670x770mm", Weight: "334Kg" } },
      { name: "Sealing & Cutting Machine", modelNo: "FQ750L", specs: { Voltage: "220V/50-60Hz", "Packing Speed": "15-30pcs/min", "Transport Load": "15-20Kg", "Maximum Package Size": "870x770mm", Weight: "440Kg" } },
    ],
  },
  {
    slug: "side-sealer-machines",
    name: "Side Sealer Machine",
    blurb: "Fully automatic sealing & cutting machine range, BF450 to BF950.",
    products: [
      { name: "Side Sealer Machine", modelNo: "BF450", specs: {} },
      { name: "Side Sealer Machine", modelNo: "BF550", specs: {} },
      { name: "Side Sealer Machine", modelNo: "BF650", specs: {} },
      { name: "Side Sealer Machine", modelNo: "BF750", specs: {} },
      { name: "Side Sealer Machine", modelNo: "BF850", specs: {} },
      { name: "Side Sealer Machine", modelNo: "BF950", specs: {} },
    ],
  },
  {
    slug: "l-sealers-shrink-chamber",
    name: "Manual L Sealer & Shrink Chamber",
    blurb: "L-bar sealers with built-in shrink chamber.",
    products: [
      { name: "Manual L Sealer", modelNo: "5045M", specs: { Power: "1500W", Voltage: "220V/50Hz", "Packaging Speed": "800-900 Pcs/h", "Max Packaging Dimension": "450x400x250mm", "Max Sealing Dimension": "500x450mm", "Item Weight": "80Kg", Finish: "Powder Coated (WS Type)" } },
      { name: "Shrink Chamber", modelNo: "540M", specs: { Voltage: "220V/50Hz", "Packaging Speed": "700-1000 Pcs/h", "Max Packaging Dimension": "450x300x250mm", "Item Weight": "140Kg", Finish: "Powder Coated (M Type)" } },
    ],
  },
  {
    slug: "shrink-tunnel-machines",
    name: "Shrink Tunnel Machine",
    blurb: "Heat-shrink tunnels in a range of tunnel sizes, plus extended and internal-circulation variants.",
    products: [
      { name: "Shrink Tunnel", modelNo: "BSB2615", specs: { Power: "1.8Kw", Voltage: "220V/50Hz", "Tunnel Size": "750x260x150mm", "Conveying Speed": "0-15m/Min", "Transport Load": "15Kg", "Applicable Film": "PVC/POF", "Item Weight": "40Kg", "Packaging Dimension": "100x43x57cm" } },
      { name: "Shrink Tunnel", modelNo: "BSB3020", specs: { Power: "5.2Kw", Voltage: "220V/50Hz", "Tunnel Size": "800x300x200mm", "Conveying Speed": "0-15m/Min", "Transport Load": "15Kg", "Applicable Film": "PVC/POF", "Item Weight": "49Kg", "Packaging Dimension": "112x62x75cm" } },
      { name: "Shrink Tunnel", modelNo: "BSB4020", specs: { Voltage: "220-380V/50-60Hz", "Tunnel Size": "800x400x200mm", "Conveying Speed": "0-15m/Min", "Transport Load": "15Kg", "Applicable Film": "PVC/POF", "Item Weight": "60Kg", "Packaging Dimension": "1120x620x750mm" } },
      { name: "Shrink Tunnel", modelNo: "BSB4525", specs: { Voltage: "220-380V/50-60Hz", "Tunnel Size": "900x460x250mm", "Conveying Speed": "0-15m/Min", "Transport Load": "15Kg", "Applicable Film": "PVC/POF/LD", "Item Weight": "92Kg", "Packaging Dimension": "112x64x88cm" } },
      { name: "Extended Shrink Wrapping Machine", modelNo: "BSB-4020L", specs: { Voltage: "220-380V/50-60Hz", "Tunnel Size": "1200x400x200mm", "Conveying Speed": "0-15m/Min", "Applicable Film": "PVC/POF", "Item Weight": "110Kg" } },
      { name: "Internal Circulation Shrink Wrapping", modelNo: "BSN-4522", specs: { Voltage: "220-380V/50-60Hz", "Tunnel Size": "1500x450x220mm", "Conveying Speed": "0-15m/Min", "Transport Load": "20Kg", "Applicable Film": "PVC/POF", "Item Weight": "200Kg", "Outer Package Size": "2000x810x1480mm" } },
    ],
  },
  {
    slug: "film-sleeving-machines",
    name: "Film Sleeving Machine",
    blurb: "Linear cuff, side-entry and semi-automatic cuff sleeve wrappers.",
    products: [
      { name: "Linear Cuff Film Sleeving Machine", modelNo: "QZD-7540A", specs: { Voltage: "220-240V/50-60Hz", "Packing Speed": "8-15Pcs/Min", "Propulsion Plate Load": "50Kg", "Maximum Package Size": "L500xW550xH350mm", "Overall Dimension": "1900x1000x1570mm", "Machine Weight": "295Kg", "Film Thickness": "0.03-0.25mm (PE)" } },
      { name: "Linear Cuff Film Sleeving Machine", modelNo: "QZD-9040A", specs: { Voltage: "220-240V/50-60Hz", "Packing Speed": "8-15Pcs/Min", "Propulsion Plate Load": "50Kg", "Maximum Package Size": "L900xW750xH350mm", "Overall Dimension": "1900x1200x1570mm", "Machine Weight": "350Kg", "Film Thickness": "0.03-0.25mm (PE)" } },
      { name: "Side Entry Film Sleeving Machine", modelNo: "QZD-7540", specs: { Voltage: "220-240V/50-60Hz", "Packing Speed": "0-6Pcs/Min", "Working Pressure": "4-6Kg/cm²", "Film Width/Thickness": "700mm / 0.03-0.25mm", "Conveyor Length": "1500mm", "Maximum Delivery Weight": "20Kg", "Maximum Package Size": "400x120x330mm", "Machine Weight": "350Kg" } },
      { name: "Semi Automatic Cuff Machine", modelNo: "QZD-7040", specs: { Voltage: "220-240V/50-60Hz", Power: "1.25KW", "Packing Speed": "2-8Pcs/Min", "Propulsion Plate Load": "20Kg", "Maximum Package Size": "500x330x350mm", "Overall Dimension": "1100x900x1560mm", "Machine Weight": "175Kg", "Film Thickness": "0.03-0.25mm (PE)" } },
      { name: "Semi Automatic Cuff Machine", modelNo: "QZD-9040", specs: { Voltage: "220-240V/50-60Hz", Power: "1.45KW", "Packing Speed": "2-8Pcs/Min", "Propulsion Plate Load": "20Kg", "Maximum Package Size": "750x330x350mm", "Overall Dimension": "1100x1100x1560mm", "Machine Weight": "245Kg", "Film Thickness": "0.03-0.25mm (PE)" } },
    ],
  },
  {
    slug: "carton-erector-machines",
    name: "Carton Erector Machine",
    blurb: "Automatic carton erecting and carton-edge sealing machines.",
    products: [
      { name: "Automatic Carton Erector", modelNo: "DQKX4540", specs: { Voltage: "220-380V/50-60Hz", "Carton Size (LxWxH)": "250-515x150-400x150-450mm", "Packaging Speed": "8-12 Box/Min", "Machine Size (LxWxH)": "2075x1270x1475-1550mm", "Machine Weight": "450Kg" } },
      { name: "Carton Edge Sealing Machine", modelNo: "DFXS-7050", specs: { Voltage: "110-220V", "Max. Packing Dimension": "700x500mm", "Min. Packing Dimension": "200x200x200mm", Speed: "18m/Min", "Width of Adhesive Tape": "48/60/76mm", "Height of Working Table": "550-750mm", "Adhesive Tape Used": "BOPP/PVC", "Machine Weight": "180Kg" } },
    ],
  },
  {
    slug: "carton-sealer-machines",
    name: "Carton Sealer Machine",
    blurb: "Automatic carton sealers, flap folders and combination sealer + strapper units.",
    products: [
      { name: "Carton Sealer Machine", modelNo: "FXJ6050", specs: { Voltage: "220V/50Hz" } },
      { name: "Carton Sealer Machine", modelNo: "FXJ5050", specs: { Voltage: "220V/50Hz" } },
      { name: "Carton Sealer Machine", modelNo: "FXJ4030", specs: { Voltage: "220V/50Hz", "Sealing Speed": "0-20 Boxes/Min", "Tape Width": "30-48mm", "Sealing Height": "90-400mm", "Sealing Width": "80-300mm", "Table Height": "560-750mm", Weight: "98Kg" } },
      { name: "Carton Flap Folding Machine", modelNo: "FXG5050F", specs: {} },
      { name: "Carton Sealer + Automatic Strapping Machine", modelNo: "FXJ5050-S", specs: { Voltage: "220V/50-60Hz", "Sealing Speed": "6-10 Boxes/Min", "Tape Width": "48-75mm", "Sealing Height": "150-500mm", "Sealing Width": "150-500mm", "Applicable Cartons": "200x150x150 to 500x500x500mm", Weight: "130Kg" } },
      { name: "Automatic Carton Sealer", modelNo: "DQFXC5050", specs: { "Power Supply": "220V/50-60Hz", "Width of Adhesive Tape": "48/60mm", "Max. Packing Dimension": "500x500mm", "Min. Packing Dimension": "130x120mm", "Air Pressure": "0.5MPa", "Loading Weight": "25Kg" } },
    ],
  },
  {
    slug: "auto-fold-carton-sealing",
    name: "Auto Fold Carton Sealing Machine",
    blurb: "Automatic fold carton sealer combined with strapping.",
    products: [
      { name: "Carton Sealer + Automatic Strapping Machine", modelNo: "DQFXZ5050B", specs: { Voltage: "220V/50-60Hz", Power: "420W", "Packing Size": "500x500x700mm" } },
    ],
  },
  {
    slug: "strapping-machines",
    name: "Strapping Machine",
    blurb: "Semi-automatic and fully automatic box strapping machines, strapping tools and dispensers.",
    products: [
      { name: "Strapping Machine", modelNo: "HB-SP101H", specs: { "Product Size": "900x870x730mm" } },
      { name: "Strapping Machine", modelNo: "HB-SP102H", specs: { Voltage: "220V/50Hz", "Strap Thickness": "0.6-1.0mm", "Tightening Force": "0-60Kg", "Product Size": "900x570x730mm", Weight: "95Kg", Colour: "White & Blue", "Top Plate Thickness": "2mm" } },
      { name: "Strapping Machine", modelNo: "HB-SP104H", specs: { Voltage: "220V/50Hz", "Strap Thickness": "0.6-1.0mm", "Tightening Force": "0-80Kg", "Product Size": "900x570x730mm", Weight: "100Kg", Colour: "Grey & White" } },
      { name: "Automatic Strapping Machine", modelNo: "MH-101A", specs: { Voltage: "380V/50-60Hz", "Strap Thickness": "0.55-1.0mm", "Minimum Packing Size": "100x80mm", "Working Table Height": "1400x628x1418mm", "Packing Speed": "±2.5 Sec/Cycle" } },
      { name: "Automatic Strapping Machine", modelNo: "MH-102A", specs: { Voltage: "380V/50-60Hz", "Strap Thickness": "0.55-1.0mm", "Minimum Packing Size": "210x100mm", "Working Table Height": "750mm (Customized)", Dimension: "1580x650x1418mm", "Packing Speed": "±2.5 Sec/Cycle" } },
      { name: "Automatic Strapping Machine", modelNo: "MH-103A", specs: { Voltage: "380V/50-60Hz", "Strap Thickness": "0.55-1.0mm", "Minimum Packing Size": "80x100mm", Dimension: "1860x628x1350mm", "Packing Speed": "±2.5 Sec/Cycle" } },
      { name: "Automatic Vertical Strapping Machine", modelNo: "MH-105B", specs: { Voltage: "380V/50-60Hz", "Strap Thickness": "0.55-1.0mm", Dimension: "1451x845x2630mm", "Packing Speed": "±15 Sec/Cycle", "PP Strap Spool": "160-180mm inner dia. 200-210mm, outer dia. 400-500mm" } },
      { name: "Automatic Strapping Machine with Squaring Machine", modelNo: "YS-305RPD", specs: { Voltage: "220V/50-60Hz", "Working Pressure": "0.4-0.6MPa", "Minimum Packing Size": "400x60mm", Dimension: "2120x1300x2100mm", "Packing Speed": "16 Sec/Cycle" } },
      { name: "Strapping Tool", modelNo: "AQD-19/25", specs: { Colour: "Metallic Grey", "Apply Strap": "PP & PET", "Seal Straps": "Friction and hot welding", "Strap Width": "13-19mm", Thickness: "0.5-1.5mm", "Using Air Pressure": "0.5-0.8MPa", "Splicing Time": "1.5s (Adjustable)", Weight: "3.4Kg" } },
      { name: "Strapping Tool", modelNo: "V2", specs: { "Apply Strap": "PP & PET", "Packing Belt Width": "13-19mm", "Packing Belt Thickness": "0.4-1.2mm", "Battery Specification": "14.4V 4.0Ah 57.6Wh", "Number of Bands": "300Pcs", "Machine Weight": "3.35Kg", Dimension: "380x130x130mm", "Splicing Time": "0.5-3.5s (Adjustable)", "Motor Type": "Brushed DC Motor" } },
      { name: "PET Strap Dispenser", modelNo: "H405", specs: { Dimension: "650x480x1100mm", Weight: "12Kg" } },
    ],
  },
  {
    slug: "mini-liquid-filler-machines",
    name: "Mini Liquid Filler Machine",
    blurb: "Single and double nozzle manual/semi-automatic liquid fillers.",
    products: [
      { name: "Mini Liquid Filler - Single Nozzle", modelNo: "LT130", specs: { Power: "200W", Voltage: "220V/50Hz", "Filling Range": "5-3500ml", "Filling Speed": "3.5Ltr/Min", "Body Material": "Stainless Steel", "Automation Grade": "Manual/Semi-Automatic", Dimension: "300x180x300mm" } },
      { name: "Mini Liquid Filler - Double Nozzle", modelNo: "LT130-D", specs: { Power: "350W", Voltage: "220V/50Hz", "Filling Range": "5-3500ml", "Filling Speed": "7Ltr/Min", Weight: "7.5Kg", "Body Material": "Stainless Steel", "Automation Grade": "Manual/Semi-Automatic" } },
    ],
  },
  {
    slug: "pneumatic-liquid-filling",
    name: "Pneumatic Liquid Filling",
    blurb: "Single/double head liquid and paste filling machines, plus automatic liquid packaging.",
    products: [
      { name: "Single-Head Liquid Filling Machine", modelNo: "G1WY", specs: { Voltage: "110-220V/50-60Hz", "Working Pressure": "0.4-0.6Mpa", "Filling Speed": "5-25 Shot/Min", "Optional Models": "10-100ml" } },
      { name: "Single-Head Paste Filling Machine", modelNo: "G1WG", specs: { Voltage: "110-220V/50-60Hz", "Working Pressure": "0.4-0.6Mpa", "Filling Speed": "10-50 Shot/Min", "Optional Models": "50-500ml" } },
      { name: "Double-Head Liquid Filling Machine", modelNo: "G2WY", specs: { Voltage: "110-220V/50-60Hz", "Working Pressure": "0.4-0.6Mpa", "Filling Speed": "5-25 Shot/Min", "Optional Models": "100-1000ml" } },
      { name: "Double-Head Paste Filling Machine", modelNo: "G2WG", specs: { Voltage: "110-220V/50-60Hz", "Working Pressure": "0.4-0.6Mpa", "Filling Speed": "10-50 Shot/Min", "Optional Models": "500-5000ml" } },
      { name: "Automatic Liquid Packaging Machine", modelNo: "SP1000", specs: { Power: "1.6Kw", Voltage: "220-380V", "Output": "1500-2200 bags/Hour", "Fill Volume": "200-500ml (Adjustable)", "Film Width": "320/240mm", Weight: "200Kg", Dimension: "970x870x1970mm" } },
    ],
  },
  {
    slug: "induction-sealing-machines",
    name: "Induction Sealing Machine",
    blurb: "Cap induction sealers across a range of throughput/coil sizes.",
    products: [
      { name: "Induction Sealer", modelNo: "DGYF200", specs: { Voltage: "220V/50Hz", "Vessel Height": "Anything", "Neck Diameter": "20-100mm" } },
      { name: "Induction Sealer", modelNo: "DGYF500A", specs: { Voltage: "220V/50Hz", "Vessel Height": "Anything", "Coil Type": "Copper Coil" } },
      { name: "Induction Sealer", modelNo: "DGYF500C", specs: { Voltage: "220V/50Hz", "Vessel Height": "Anything", "Neck Diameter": "20-130mm", "Coil Type": "Copper Coil" } },
      { name: "Induction Sealer", modelNo: "DGYF600A", specs: { Voltage: "220V/50Hz", "Vessel Height": "Anything", "Neck Diameter": "20-100mm" } },
      { name: "Induction Sealer", modelNo: "DGYF600C", specs: { Voltage: "220V/50Hz", "Vessel Height": "Anything", "Neck Diameter": "20-120mm", "Coil Type": "Copper Coil" } },
      { name: "Induction Sealer", modelNo: "LX6000", specs: { Voltage: "220V/50Hz", "Neck Diameter": "20-80mm", Weight: "50Kg", "Coil Type": "Copper Coil", Dimension: "420x470x580mm" } },
      { name: "Induction Sealer", modelNo: "LX2000", specs: { Voltage: "220V/50Hz", "Neck Diameter": "20-120mm", Weight: "60Kg", "Coil Type": "Copper Coil", Dimension: "1150x480x400mm" } },
    ],
  },
  {
    slug: "labeling-machines",
    name: "Labeling Machine",
    blurb: "Semi-automatic round bottle and flat labeling machines.",
    products: [
      { name: "Semi-Automatic Round Bottle Labeling Machine", modelNo: "MT-50", specs: { Voltage: "220V/50Hz", "Labeling Speed": "25-30pcs/min", "Bottle Diameter": "20-120mm", "Max Label Size": "150x230mm", Dimension: "850x450x450mm", "Machine Weight": "25Kg" } },
      { name: "Semi-Automatic Flat Labeling Machine", modelNo: "MT-60", specs: { Power: "200W", Voltage: "220V/50Hz", "Labeling Speed": "20-40pcs/min", "Labeling Roll Diameter": "≤300mm", "Max Label Size": "20-110 x 20-60mm", "Machine Weight": "32Kg" } },
    ],
  },
  {
    slug: "tube-sealing-machines",
    name: "Tube Sealing Machine",
    blurb: "Tube sealing machines for cosmetic/pharma/food tubes.",
    products: [
      { name: "Tube Sealing Machine", modelNo: "TSM", specs: { "Diameter Range": "≤50mm", "Power Supply": "220V/50Hz", Dimension: "480x537x880mm", Weight: "150Kg" } },
    ],
  },
  {
    slug: "conveyors",
    name: "Conveyor",
    blurb: "Belt conveyors in multiple belt widths, plus stacker conveyors.",
    products: [
      { name: "Conveyor", modelNo: "200mm", specs: { Length: "4.5Ft", "Belt Width": "200mm", Weight: "25Kg" } },
      { name: "Conveyor", modelNo: "300mm", specs: { Length: "4.5Ft", "Belt Width": "300mm (12 Inch)", Weight: "30Kg" } },
      { name: "Conveyor", modelNo: "400mm", specs: { Length: "4.5Ft", "Belt Width": "400mm (16 Inch)", Weight: "35Kg" } },
      { name: "Stacker Conveyor", modelNo: "SC-Series", specs: { Power: "200W", "Conveying Speed": "50m/Min", Dimension: "1800x460x800mm", Weight: "40Kg" } },
    ],
  },
  {
    slug: "foot-sealing-machines",
    name: "Foot Sealing Machine",
    blurb: "Foot-operated stamping sealers.",
    products: [
      { name: "Foot Stamping Sealing Machine", modelNo: "PSF-350", specs: { Power: "500W", Weight: "18Kg" } },
      { name: "Foot Stamping Sealing Machine", modelNo: "PSF-450", specs: { Power: "1000W", Weight: "20Kg" } },
      { name: "Foot Stamping Sealing Machine", modelNo: "PSF-650", specs: { Power: "1200W", Weight: "24Kg" } },
    ],
  },
  {
    slug: "capping-machines",
    name: "Capping Machine",
    blurb: "Semi-automatic, electric and manual bottle/can capping and sealing machines.",
    products: [
      { name: "Semi-Automatic Capping Machine", modelNo: "DDX-450", specs: { Voltage: "220V/50Hz", Chassis: "Iron, Aluminum chassis paint", "Production Capacity": "20-40 Times/min (adjustable)", "Applicable Bottle Height": "40-200mm", Dimension: "520x300x530mm" } },
      { name: "Cap Closing Machine (Plastic Cap)", modelNo: "SK-40", specs: { Power: "370W", Voltage: "220V/60Hz", "Cap Diameter": "25-40mm", "Applicable Bottles": "50-320mm", Capacity: "≤1200 Bottles/h", "Type of Cap": "Plastic Cap", Dimension: "650x200x920mm" } },
      { name: "Cap Closing Machine (Metal Cap)", modelNo: "SK-40M", specs: { Power: "370W", Voltage: "220V/60Hz", "Cap Diameter": "25-40mm", "Applicable Bottles": "50-320mm", Capacity: "≤1200 Bottles/h", "Type of Cap": "Metal Cap", Dimension: "350x250x650mm" } },
      { name: "Electrical Can Sealing Machine", modelNo: "TDFJ-160", specs: { "Production Capacity": "25/Min", "Height of Can": "39-200mm", "Spindle Speed": "520-620V/Min", "Weight of Equipment": "70Kg", Dimension: "600x300x890mm", "Machine Weight": "84Kg" } },
      { name: "Manual Electric Capping Machine", modelNo: "MECM", specs: { "Power Supply": "220V/50Hz", "Cable Length": "10-15mm", "Production Capacity": "30-90 Bottles/Min" } },
    ],
  },
  {
    slug: "hand-wrapper",
    name: "Hand Wrapper",
    blurb: "Handheld heat sealing/wrapping tool.",
    products: [
      { name: "Hand Wrapper", modelNo: "HW-450", specs: { Voltage: "220V/50Hz", Power: "670W", "Temperature Range": "85°C - 140°C" } },
    ],
  },
  {
    slug: "skin-packaging-machines",
    name: "Skin Packaging Machine",
    blurb: "Skin-pack machine for tight-fit product packaging.",
    products: [
      { name: "Skin Packaging Machine", modelNo: "TB-390", specs: { Voltage: "380V/50Hz", Power: "7.5KW", "Area of Packaging": "390x540mm", "Rate of Packaging": "50-60pcs/hour", "Packaging Material": "Skin packaging film", Dimension: "1020x710x1200mm" } },
    ],
  },
  {
    slug: "filling-machines",
    name: "Filling Machine (Granule)",
    blurb: "Mini and standard granule filling machines across multiple weight ranges.",
    products: [
      { name: "Mini Granule Filling Machine (10GM-99.9GM)", modelNo: "SPPGF 99.9", specs: { Voltage: "220V/50Hz", "Filling Range": "2-99.9gm", Weight: "15Kg", "Body Material": "Stainless Steel", "Body Size": "30x50x125cm", "Packaging Speed": "5-12 bag/Min" } },
      { name: "Mini Granule Filling Machine (10GM-200GM)", modelNo: "SPPGF 200", specs: {} },
      { name: "Mini Granule Filling Machine (10GM-500GM)", modelNo: "SPPGF 500-M", specs: {} },
      { name: "Granule Filling Machine (10GM-999GM)", modelNo: "SPPGF 999", specs: {} },
      { name: "Granule Filling Machine (20GM-3KG)", modelNo: "SPPGF 3000", specs: { Power: "300W", Voltage: "220V/50Hz", "Filling Range": "20-3000gm", Weight: "32Kg", "Body Material": "Stainless Steel", "Body Size": "30x60x135cm", "Packaging Speed": "5-12 bag/Min" } },
      { name: "Granule Filling Machine (20GM-5KG)", modelNo: "SPPGF 5000", specs: { Power: "300W", Voltage: "220V/50Hz", "Filling Range": "30-5000gm", Weight: "10Kg", "Body Material": "Stainless Steel", "Body Size": "40x60x135cm", "Packaging Speed": "5-12 bag/Min" } },
    ],
  },
  {
    slug: "ffs-sealing-machines",
    name: "FFS Sealing Machine",
    blurb: "Form-fill-seal machines for center-seal and side-seal sachets, plus paste/liquid pouch filling.",
    products: [
      { name: "FFS 100 Gram Center Sealing Machine", modelNo: "FFS-100C", specs: { "Working Voltage": "220V/50Hz", "Packing Range": "2-100g", "Packing Accuracy": "±0.1-0.2g", "Bag Size Range": "W-8cm, L-0-16cm" } },
      { name: "FFS 100 Gram Side Sealing Machine", modelNo: "FFS-100S", specs: { "Working Voltage": "220V/50Hz", "Packing Range": "2-100g", "Packing Accuracy": "±0.1-0.2g", "Bag Size Range": "W-10cm, L-0-16cm" } },
      { name: "FFS 10-200ML Paste Filling Machine", modelNo: "SPPF-500", specs: { "Pouch Capacity": "10ml-500ml", Voltage: "220V/50Hz", "Fill Size": "0-80mm(W), 0-160mm(L)", "Sealing Type": "3 Sides Seal", "Film Thickness": "0.5mm-0.8mm", Dimension: "540x1170x1900mm" } },
      { name: "FFS 10-200ML Liquid Filling Machine", modelNo: "SPLF-200", specs: { "Pouch Capacity": "10ml-200ml", Speed: "35-60ppm" } },
      { name: "FFS 999 Gram Double Head Center Sealing Machine", modelNo: "FFS-10000", specs: { "Center Sealing Range": "10-999 Gram", "Film Width": "21-46cm", "Machine Size (LxWxH)": "66x90x214cm", Speed: "10-20 bags/min", "Weight": "130Kg" } },
    ],
  },
  {
    slug: "coding-printing-machines",
    name: "Online TIJ / Inkjet Printer",
    blurb: "TIJ and continuous inkjet coding printers for date/batch/serial printing.",
    products: [
      { name: "Online TIJ Printer", modelNo: "UV-100", specs: { "Printing Type": "Online Printing (Without Conveyor)", "Printing Accuracy": "600DPI", "Printing Height": "4mm-12.7mm", "Ink Type": "Quick-dry environmental ink, water-based & oily ink", "Ink Colours": "Black, white, red, blue, yellow", "Ink Volume": "42ml (approx. 800,000 characters)", "Control Panel": "Touch-Screen (4.3 inches)" } },
      { name: "Online TIJ Printer", modelNo: "SP-007", specs: { Nozzle: "TIJ hot foaming nozzle", Screen: "7-Inch capacitive screen", "Printing Precision": "300DPI or 600DPI", "Count Digits": "1-15 Digits", Adapter: "100-240V AC input", "External Interface": "Power/optoelectronic, HDMI, USB", "Barcode Types": "Code128, Code39, Int25, UPCA, EAN13, QR, Data Matrix" } },
      { name: "Inkjet Printer", modelNo: "ZH-127", specs: {} },
      { name: "Inkjet Printer", modelNo: "ZH-254", specs: {} },
    ],
  },
  {
    slug: "pallet-box-wrapping-machines",
    name: "Pallet / Box Wrapping Machine",
    blurb: "Turntable stretch wrapping machines with pre-stretch and top-press options.",
    products: [
      { name: "Box Wrapping Machine", modelNo: "BW-600", specs: { "Turntable Speed": "3-20 rpm/min", "Diameter of Turn Table": "24 Inches (customize on order)", "Size of Roll": "24 inches (customize on order)", "Working Height": "750mm", "Electrical Requirement": "220V/50Hz", "Turntable Loading": "0-50kg", "Machine Weight": "80Kg" } },
      { name: "Box Wrapping Machine with Pre-Stretch Unit", modelNo: "SWM-600/900", specs: { "Turntable Speed": "3-20 rpm/min", "Diameter of Turn Table": "25 inch / 30 inch", "Size of Roll": "20 inch / 30 inch", "Electrical Requirement": "220V/50Hz", "Film Carriage": "Stretch Type", "Turntable Loading": "0-100kg", "Motor for Turn Table": "1 HP", "Motor for Pre-Stretch System": "1/2 HP" } },
      { name: "Box Wrapping Machine with Pre-Stretch & Top Press", modelNo: "SWM-P 600/900", specs: { "Turntable Speed": "3-20 rpm/min", "Diameter of Turn Table": "24/30 inch", "Size of Roll": "20/30 inches", "Electrical Requirement": "220V/50Hz", "Film Carriage": "Stretch Type", "Turntable Loading": "0-100kg", "Motor for Turn Table": "1 HP", "Motor for Pre-Stretch System": "1/2 HP" } },
      { name: "Pre-Stretch Box Wrapper with Vertical Movement", modelNo: "SWM-PLC 600", specs: { "Turntable Speed": "3-20 rpm/min", "Wrapping Efficiency": "20-40 loads/hour", "Electrical Requirement": "220V/50Hz", "Film Carriage": "Stretch Type", "Turntable Loading": "0-100kg" } },
      { name: "Pallet Stretch Wrapping Machine", modelNo: "SPSW2100", specs: { "Film Material": "LLDPE film, W≤500, out diameter as specified" } },
    ],
  },
  {
    slug: "pallet-trucks-stackers",
    name: "Pallet Truck / Stacker",
    blurb: "Manual and battery-operated pallet trucks and stackers.",
    products: [
      { name: "Pallet Truck 3.0 Tons", modelNo: "SPPT 3.0", specs: { Capacity: "3000Kg", "Fork Length": "1150mm" } },
      { name: "Pallet Truck 5.0 Tons", modelNo: "SPPT 5.0", specs: { Capacity: "5000Kg", "Fork Length": "1220mm", "Single Fork Width": "160mm", "Fork Wheel (Single)": "80x93mm", "Fork Wheel (Tandem)": "180x50mm" } },
      { name: "Pallet Truck 3.0 Tons (Heavy Duty)", modelNo: "SPPT-HL", specs: {} },
      { name: "Pallet Stacker 1.6 MT", modelNo: "SPPS20", specs: { Capacity: "2000Kg", "Max. Lifting Height": "1600mm", "Fork Length": "900/1150mm", "Adjustable Fork Width": "270-680mm", Dimension: "2060x750x1480mm" } },
      { name: "Battery Operated Stacker", modelNo: "BOS", specs: {} },
      { name: "Table Truck 500", modelNo: "TT-500", specs: {} },
    ],
  },
  {
    slug: "unmanned-packaging-lines",
    name: "Customized Unmanned Packaging Line",
    blurb: "Turnkey automated lines: case unpacking, encasement, folding & sealing, edge-angle sealing, shrink wrapping, and paper-around wrapping.",
    products: [
      { name: "Case Unpacking, Folding & Sealing Line", modelNo: "Custom", specs: { Capability: "Case unpacking, encasement, folding & sealing, edge angle sealing, shrink wrapping" } },
      { name: "Paper Around Wrapper Machine", modelNo: "Custom", specs: {} },
    ],
  },
  {
    slug: "consumable-items",
    name: "Consumable Items",
    blurb: "Packaging consumables to run alongside the machines above.",
    products: [
      { name: "PVC Shrink Film Roll", modelNo: "-", specs: {} },
      { name: "PVC Shrink Pouches", modelNo: "-", specs: {} },
      { name: "Polyolefin Shrink Film Roll", modelNo: "-", specs: {} },
      { name: "Induction Wad", modelNo: "-", specs: {} },
      { name: "PET Strapping Roll", modelNo: "-", specs: {} },
      { name: "PP Strapping Roll", modelNo: "-", specs: {} },
      { name: "Machine Grade Stretch Film", modelNo: "-", specs: {} },
      { name: "Manual Stretch Film", modelNo: "-", specs: {} },
      { name: "POF Shrink Film Pouches", modelNo: "-", specs: {} },
    ],
  },
];

// Attach slugs + image placeholder metadata + back-references
let imgCounter = 0;
categories.forEach((cat) => {
  cat.products.forEach((p, i) => {
    imgCounter += 1;
    p.categorySlug = cat.slug;
    p.slug = slugify(p.modelNo && p.modelNo !== "-" ? `${p.name}-${p.modelNo}` : `${p.name}-${i}`);
    p.image = null;
    p.imageRef = `IMG-${String(imgCounter).padStart(3, "0")}`;
  });
});

export const findCategory = (slug) => categories.find((c) => c.slug === slug);
export const findProduct = (categorySlug, productSlug) => {
  const cat = findCategory(categorySlug);
  if (!cat) return null;
  return cat.products.find((p) => p.slug === productSlug) || null;
};

export const allProductsFlat = categories.flatMap((c) => c.products);
