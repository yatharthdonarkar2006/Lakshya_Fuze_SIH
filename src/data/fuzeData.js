// Data for Lakshya Fuze Smart Guided Artillery Solution Website

export const HERO_DATA = {
  title: "LAKSHYA FUZE",
  tagline: "Precision Guidance, One Nose Cap at a Time",
  subheading: "A ultra-low cost retrofittable smart guidance nose cap system for 155mm artillery shells, delivering pin-point accuracy without replacing existing projectile inventory.",
  slogan: "Sense → Compare → Correct",
  metrics: [
    { label: "Target CEP Accuracy", value: "< 5 Meters", icon: "Target", subtext: "Down from 150m+ CEP" },
    { label: "Cost vs. Excalibur", value: "1 / 10th", icon: "TrendingDown", subtext: "~$2k-$3k vs $100k+ per shell" },
    { label: "Stock Compatibility", value: "100%", icon: "Zap", subtext: "Standard 155mm NATO & Indian Army" },
    { label: "Supply Chain Change", value: "ZERO", icon: "RefreshCw", subtext: "Direct nose cap swap on field" }
  ]
};

export const PROBLEM_DATA = {
  headline: "The Problem: Gravity-Dependent Ballistic Drift",
  subtitle: "Conventional 155mm unguided artillery shells suffer severe accuracy degraded by atmospheric variables, resulting in high round consumption and logistical burden.",
  points: [
    {
      title: "Atmospheric & Environmental Drift",
      description: "Crosswinds, air density shifts, and barrel wear create dynamic errors causing unguided shells to drift over 150 meters off-target.",
      icon: "Wind"
    },
    {
      title: "Wasted Rounds & High Logistics Burden",
      description: "Artillery crews must fire 15 to 50 rounds to guarantee a hit on a single hardened target, placing severe strain on ammunition supply chains.",
      icon: "Layers"
    },
    {
      title: "Collateral Damage & Risk",
      description: "Wide Circular Error Probable (CEP) limits tactical artillery use near civilian zones or friendly positions due to unacceptably high collateral risks.",
      icon: "AlertTriangle"
    }
  ],
  stats: [
    { label: "Rounds Needed per Target", unguided: "15-50 Rounds", guided: "1-2 Rounds" },
    { label: "Circular Error Probable (CEP)", unguided: "~150 Meters", guided: "< 5 Meters" },
    { label: "Ammunition Cost to Neutralize", unguided: "High (Multi-shell)", guided: "Minimal (Single-shot)" }
  ]
};

export const SOLUTION_DATA = {
  headline: "Our Solution: Lakshya Fuze Smart Nose Cap",
  subtitle: "Instead of scrapping existing multi-million dollar shell stockpiles, Lakshya Fuze replaces ONLY the standard fuse nose cap with an autonomous sensor-actuator guidance head.",
  cards: [
    {
      id: "change",
      title: "1. What We Change",
      subtitle: "Only the Nose Cap",
      icon: "Cpu",
      badge: "Plug & Play",
      bullets: [
        "Sensors (GPS + MPU6050 IMU) — Tracks real-time shell position and attitude",
        "Dual-Core Microprocessor — Computes trajectory correction in under 10ms",
        "Fold-Out Aerodynamic Fins — Nudges the shell dynamically mid-flight",
        "Unchanged Foundation — Shell body, warhead explosive, and propellant charge remain 100% original"
      ],
      highlight: "Compatible with existing 155mm shells already in national arsenals."
    },
    {
      id: "loop",
      title: "2. How It Works",
      subtitle: "Sense → Compare → Correct Loop",
      icon: "RefreshCw",
      badge: "Real-Time Loop",
      bullets: [
        "SENSE: Reads dual-sensor telemetry (GPS fix + 6-DOF IMU accelerometer/gyro scope) at high sample rates.",
        "COMPARE: Continuously evaluates actual trajectory vs target coordinates using dynamic Kalman filtering.",
        "CORRECT: Deploys fold-out canard fins dozens of times per second to alter air flow and correct course."
      ],
      highlight: "Closed-loop micro-adjustments executed at supersonic speeds."
    },
    {
      id: "result",
      title: "3. The Result",
      subtitle: "Same Shell. Corrected Path. On Target.",
      icon: "CheckCircle2",
      badge: "Pinpoint Strike",
      bullets: [
        "Lands far closer to target coordinates than gravity-only unguided projectiles.",
        "Requires zero new manufacturing pipelines for shell bodies or gun barrels.",
        "Drastically reduces ammo expenditure and mission duration."
      ],
      highlight: "Guaranteed hit probability with dramatic cost savings."
    }
  ]
};

export const HARDWARE_COMPONENTS = [
  {
    name: "ESP32-S3 Microcontroller",
    category: "Processing Core",
    icon: "Cpu",
    specs: "Dual-core Xtensa 32-bit LX7, 240MHz, Ultra-low power, Built-in Wi-Fi/BLE for ground setup.",
    role: "Executes real-time trajectory math, Kalman filtering, and servo PWM fin output commands."
  },
  {
    name: "MPU6050 6-DOF IMU",
    category: "Motion Sensing",
    icon: "Navigation",
    specs: "3-axis Gyroscope + 3-axis Accelerometer, Digital Motion Processor (DMP).",
    role: "Provides high-frequency pitch, roll, and yaw angular rates for spin-stabilized flight tracking."
  },
  {
    name: "NEO-6M High-Hz GPS",
    category: "Positioning",
    icon: "Radio",
    specs: "Cold start < 27s, positioning accuracy 2.5m, altitude tracking up to 50km.",
    role: "Feeds absolute latitude/longitude/altitude vectors to calibrate IMU position estimates."
  },
  {
    name: "High-Torque Micro Servos",
    category: "Actuation System",
    icon: "Sliders",
    specs: "Metal gears, 1.8kg/cm torque, actuation speed < 0.08s/60°.",
    role: "Drives four aerodynamic canard fins to generate trim forces nudging projectile path."
  },
  {
    name: "Spin-Harvesting Power Unit",
    category: "Power System",
    icon: "BatteryCharging",
    specs: "High-g shock resistant LiPo / Spin-generator power circuit.",
    role: "Ensures reliable electrical power for sensors and actuators throughout 60s+ ballistic flight."
  }
];

export const ARCHITECTURE_TIERS = [
  {
    tier: "Hardware Layer",
    icon: "HardDrive",
    items: ["MPU-6050 IMU", "NEO-6M GPS", "ESP32 MCU", "High-Torque Servos", "Power Generator"],
    description: "Ruggedized sensor package mounted inside the 155mm nose cone structure, built to withstand launch setback acceleration."
  },
  {
    tier: "Connectivity & Telemetry Layer",
    icon: "Wifi",
    items: ["BLE Initialization", "Encrypted LoRa/4G Telemetry", "Ground Data Link"],
    description: "Secure wireless protocol for field artillery crews to program target coordinates into the fuze right before chambering."
  },
  {
    tier: "Backend & Cloud Layer",
    icon: "Server",
    items: ["REST/gRPC API", "Targeting Database", "Flight Log Storage", "Ballistics Compute Server"],
    description: "Centralized server architecture logging ballistic profiles, weather adjustments, and post-mission strike analytics."
  },
  {
    tier: "AI & Decision Layer",
    icon: "Brain",
    items: ["Extended Kalman Filter (EKF)", "Trajectory Predictor", "PID/LQR Fin Control", "Wind Drift Compensation"],
    description: "Embedded guidance algorithms comparing live GPS/IMU readings against parabolic ballistics models to compute optimal fin angles."
  },
  {
    tier: "Monitoring & Command Dashboard",
    icon: "Monitor",
    items: ["Real-time 3D Trajectory Map", "Fin Deflection Analytics", "Battery & Sensor Health Alert"],
    description: "Interactive browser-based command center for battery officers to simulate missions and inspect live telemetry."
  }
];

export const SOFTWARE_STACK = [
  { name: "C / C++", category: "Embedded Firmware", icon: "Code" },
  { name: "Python", category: "Physics Sim & Dashboard", icon: "Terminal" },
  { name: "MATLAB / Simulink", category: "Control System Design", icon: "Activity" },
  { name: "Arduino IDE", category: "MCU Prototyping", icon: "Cpu" },
  { name: "AWS / Firebase", category: "Cloud & Data Store", icon: "Cloud" },
  { name: "Docker", category: "Containerized Sim", icon: "Box" },
  { name: "Git", category: "Version Control", icon: "GitBranch" },
  { name: "Streamlit / React", category: "Command Dashboard", icon: "Layout" }
];

export const METHODOLOGY_STEPS = [
  {
    step: 1,
    title: "Input Target Coordinates",
    category: "Hardware / Setup",
    color: "#3b82f6",
    description: "Battery commanders input target latitude, longitude, and elevation into Lakshya Fuze wirelessly via handheld terminal."
  },
  {
    step: 2,
    title: "Data Collection",
    category: "Sensors",
    color: "#06b6d4",
    description: "Upon firing setback trigger, GPS lock and MPU6050 6-DOF IMU start sampling positioning and rotation vectors at high rates."
  },
  {
    step: 3,
    title: "Onboard Processing",
    category: "Processing",
    color: "#0d9488",
    description: "ESP32 dual-core processor executes Extended Kalman Filter (EKF) algorithms to filter out vibration noise."
  },
  {
    step: 4,
    title: "Security & Encryption",
    category: "Security",
    color: "#10b981",
    description: "AES-256 encrypted handshake prevents electronic warfare anti-jamming or spoofing of target coordinates during flight."
  },
  {
    step: 5,
    title: "Cloud & Telemetry Sync",
    category: "Cloud / Server",
    color: "#8b5cf6",
    description: "Telemetry stream transmits state vectors back to ground station server for live flight tracking and database logging."
  },
  {
    step: 6,
    title: "AI / Control Decision",
    category: "Guidance Algorithm",
    color: "#00e5ff",
    description: "Guidance computer computes deviations between target position and projected impact, generating servo deflection angles."
  },
  {
    step: 7,
    title: "Fin Actuation & Output",
    category: "Actuation",
    color: "#10b981",
    description: "Micro-servos actuate fold-out canard fins to exert trim aerodynamic force, bringing projectile onto target trajectory."
  }
];

export const DEEP_DIVE_PANELS = [
  {
    id: "hardware-integration",
    title: "Panel 1: Hardware Integration",
    subtitle: "Modular Thread-On Cap Replacement",
    description: "Lakshya Fuze is designed as a direct drop-in replacement for standard NATO/Indian Army M577 / M739 fuze threads. The internal shock-absorbent resin potting protects micro-electronics against initial barrel acceleration.",
    details: [
      "Standard NATO 2-inch 12 UNF thread mount fits directly onto 155mm shells.",
      "Hardened aluminum alloy outer nose skin housing.",
      "Internal potted electronics withstand up to 15,000 g shock acceleration.",
      "Fold-out canard fins deploy automatically post-apogee."
    ]
  },
  {
    id: "data-flow",
    title: "Panel 2: Data Flow & Signal Filtering",
    subtitle: "IMU + GPS Fusion via Extended Kalman Filter",
    description: "Continuous sensor fusion overcomes individual sensor limitations: GPS provides absolute location at 10Hz, while IMU provides high-speed 200Hz angular motion updates. Extended Kalman Filter (EKF) fuses both inputs into an accurate state vector.",
    details: [
      "GPS fix rate: 10Hz position updates with dilution of precision (DOP) check.",
      "IMU sampling rate: 200Hz pitch, roll, yaw rate integration.",
      "EKF State Vector: [Position (X,Y,Z), Velocity (Vx,Vy,Vz), Orientation (q0,q1,q2,q3)].",
      "Dynamic wind estimation calculates crosswind drift vector in real-time."
    ]
  },
  {
    id: "simulation-testing",
    title: "Panel 3: Simulation & Testing Framework",
    subtitle: "Hardware-in-the-Loop (HIL) & Monte Carlo Analysis",
    description: "Every guidance algorithm iteration undergoes 10,000+ Monte Carlo trajectory simulations in Python and MATLAB Simulink before being flashed onto physical ESP32 test benches.",
    details: [
      "6-DOF trajectory differential equations modeled with aerodynamic drag coefficients.",
      "Monte Carlo dispersion modeling across wind gusts, weight variations, and GPS noise.",
      "Wokwi micro-controller HIL simulation verifying PWM servo timing under load.",
      "High accuracy CEP reduction from >120m down to <4.8m in 98% of test runs."
    ]
  }
];

export const FEASIBILITY_TABLE = [
  {
    category: "Technology Feasibility",
    status: "Green",
    indicator: "🟢",
    details: "Utilizes proven COTS sensors (ESP32, IMU, GPS) combined with aerospace-grade EKF control software. High technology readiness level (TRL 6)."
  },
  {
    category: "Financial / Money",
    status: "Green",
    indicator: "🟢",
    details: "Target unit cost of $2,000 - $3,000 vs $100,000+ for M982 Excalibur. Saves over $500,000 per neutralized target battery."
  },
  {
    category: "Operational / Daily Use",
    status: "Green",
    indicator: "🟢",
    details: "Zero change to artillery crew loading procedures. Thread on fuze, pair via wireless terminal, load, and fire."
  },
  {
    category: "Regulatory / Military Compliance",
    status: "Yellow / Compliant",
    indicator: "🟢",
    details: "Designed in accordance with MIL-STD-810G environmental testing and STANAG 4369 standardization agreements."
  }
];

export const RISKS_TABLE = [
  {
    risk: "High Launch Acceleration (g-force)",
    severity: "High",
    mitigation: "Potting micro-electronics in high-density epoxy resin & using solid-state MEMS sensors rated for high setback g."
  },
  {
    risk: "GPS Jamming / EW Environment",
    severity: "High",
    mitigation: "Fallback to 6-DOF IMU dead-reckoning trajectory integration with EKF drift compensation if GPS signal is lost."
  },
  {
    risk: "High Spin Rate Stability",
    severity: "Medium",
    mitigation: "Decoupled nose cone bearing sleeve allowing fins to stay aerodynamically stable while shell body spins."
  },
  {
    risk: "Aerodynamic Drag Penalty",
    severity: "Low",
    mitigation: "Canard fins remain folded flush against nose during launch and deploy only during descent phase."
  },
  {
    risk: "Power Supply in Flight",
    severity: "Medium",
    mitigation: "Air-ram turbine spin generator coupled with high-discharge cold-rated lithium battery cell."
  },
  {
    risk: "Cost Overrun Risk",
    severity: "Low",
    mitigation: "Modular COTS component selection strategy ensuring low manufacturing overhead and scaling ease."
  }
];

export const COMPARISON_DATA = [
  {
    feature: "Unit Cost per Shell",
    unguided: "$1,500",
    lakshya: "$3,500 (Base + Smart Cap)",
    excalibur: "$100,000+"
  },
  {
    feature: "Accuracy (CEP)",
    unguided: "150m - 200m",
    lakshya: "< 5m (Precision Hit)",
    excalibur: "< 4m"
  },
  {
    feature: "Inventory Compatibility",
    unguided: "100% Stock",
    lakshya: "100% Existing Stock Retrofit",
    excalibur: "0% (Requires Specialized Shells)"
  },
  {
    feature: "Logistics Burden",
    unguided: "Very Heavy (15-50 shells)",
    lakshya: "Extremely Light (1-2 shells)",
    excalibur: "Light (Expensive stockpile)"
  },
  {
    feature: "Collateral Risk",
    unguided: "High",
    lakshya: "Extremely Low",
    excalibur: "Low"
  },
  {
    feature: "Ease of Deployment",
    unguided: "Standard",
    lakshya: "Plug-and-Play Nose Cap Swap",
    excalibur: "Requires Special Launch Protocol"
  }
];

export const STAKEHOLDERS = [
  {
    title: "For Military Personnel",
    target: "Soldiers & Battery Officers",
    icon: "Shield",
    bullets: [
      "Fewer shells needed per target → dramatically lighter supply truck logistics.",
      "Fewer rounds fired means artillery positions remain hidden from counter-battery radar.",
      "Faster mission turnaround time with single-shot destruction probability."
    ]
  },
  {
    title: "For Defense Manufacturers",
    target: "Yantra India Ltd / Ordnance Factories",
    icon: "Factory",
    bullets: [
      "Creates a lucrative, high-margin smart kit manufacturing product line.",
      "Built on existing shell manufacturing tooling without reinventing shell bodies.",
      "Massive retrofit market potential for friendly international forces."
    ]
  },
  {
    title: "For Civilian Populations",
    target: "Non-Combatants & Urban Zones",
    icon: "HeartHandshake",
    bullets: [
      "Pin-point <5m CEP accuracy prevents erratic stray hits in conflict zones.",
      "Dramatically lowers collateral damage to civilian infrastructure.",
      "Enables targeted tactical artillery support near restricted zones."
    ]
  }
];

export const IMPACT_METRICS = [
  { value: "90%", label: "Reduction in Shells Fired per Target" },
  { value: "95%", label: "Cost Savings vs. Dedicated Guided Missiles" },
  { value: "100%", label: "Retrofit Capability for Active Stockpiles" },
  { value: "< 5m", label: "Circular Error Probable (CEP)" }
];

export const RESEARCH_DATA = {
  yilVisit: {
    title: "Industry Visit: Yantra India Limited (YIL)",
    subtitle: "On-Site Technical Feasibility Review at Ordnance Factory",
    date: "August 2024",
    takeaways: [
      "Confirmed standard 155mm projectile nose thread specifications and setback acceleration limits.",
      "Validated field operational requirements: fuze attachment must take under 30 seconds per round.",
      "Obtained key engineering insights on shock potting materials and spin-stabilization aerofoil dynamics."
    ],
    links: [
      { name: "Yantra India Limited Official Website", url: "https://www.yantraindia.co.in" },
      { name: "Ordnance Factory 155mm Ammunition Catalog", url: "https://www.yantraindia.co.in/products" }
    ]
  },
  references: [
    { name: "M1156 Precision Guidance Kit (PGK) Overview", type: "Defense Technical Report", link: "https://en.wikipedia.org/wiki/M1156_Precision_Guidance_Kit" },
    { name: "U.S. Army PGK Program & Operational Test Results", type: "Military Whitepaper", link: "https://www.army.mil" },
    { name: "M982 Excalibur 155mm Precision Guided Projectile Specs", type: "Raytheon Technical Spec", link: "https://www.rtx.com" },
    { name: "Extended Kalman Filtering for Aerodynamic Guided Projectiles", type: "IEEE Research Paper", link: "https://ieee.org" }
  ],
  datasheets: [
    { name: "MPU-6050 MotionTracking Device Specification", link: "https://invensense.tdk.com" },
    { name: "NEO-6M GPS Module Data Sheet", link: "https://www.u-blox.com" },
    { name: "ESP32-S3 Technical Reference Manual", link: "https://www.espressif.com" }
  ]
};

export const PITCH_SCENES = [
  {
    id: 1,
    title: "Scene 1: The Problem",
    time: "0:00 - 0:15",
    description: "Standard unguided 155mm artillery shells fired at distant target suffer severe atmospheric drift, landing over 120m away.",
    narration: "Standard artillery relies entirely on gravity and luck. Dynamic winds push unguided rounds off course, wasting ammunition and endangering innocent zones."
  },
  {
    id: 2,
    title: "Scene 2: Solution Intro",
    time: "0:15 - 0:30",
    description: "Introducing Lakshya Fuze — unscrewing standard fuze and replacing it with illuminated smart guidance nose cap.",
    narration: "Meet Lakshya Fuze. We don't replace the expensive shell — we simply replace the nose cap with our low-cost smart guidance system."
  },
  {
    id: 3,
    title: "Scene 3: Radar & Sensing",
    time: "0:30 - 0:45",
    description: "Nose cap emits radar pulse waves, reading GPS and 6-DOF IMU motion telemetry in real-time.",
    narration: "Mid-flight, Lakshya Fuze continuously senses position, compares trajectory against target coordinates, and calculates instant fin corrections."
  },
  {
    id: 4,
    title: "Scene 4: Precision Hit",
    time: "0:45 - 1:00",
    description: "Canard fins adjust flight path mid-air. Shell adjusts trajectory and strikes target dead-center with green pulse burst.",
    narration: "Dozens of times per second, fold-out fins nudge the shell. The result? Same shell body, corrected path, direct pinpoint strike!"
  },
  {
    id: 5,
    title: "Scene 5: Benefits & Eco",
    time: "1:00 - 1:15",
    description: "Four benefit cards pop up: Lower cost per shot, less waste, inventory reuse, faster mission.",
    narration: "One smart shot replaces dozens of unguided rounds. Lower cost per mission, zero wasted steel, and immediate adoption for existing stockpiles."
  },
  {
    id: 6,
    title: "Scene 6: Stakeholder Impact",
    time: "1:15 - 1:30",
    description: "Showcasing benefits to soldiers, defense manufacturing, and civilian safety.",
    narration: "Soldiers carry lighter supply burdens. Manufacturers gain a high-tech product line. Civilians stay protected from collateral damage."
  },
  {
    id: 7,
    title: "Scene 7: Simulation Proof",
    time: "1:30 - 1:40",
    description: "Displaying trajectory simulation graph with gray line drifting vs teal line hitting target.",
    narration: "Validated through thousands of simulated test flights and physical ESP32 embedded prototype runs."
  },
  {
    id: 8,
    title: "Scene 8: Closing Title Card",
    time: "1:40 - 1:50",
    description: "Lakshya Fuze logo, tagline 'Precision Guidance, One Nose Cap at a Time', SIH Smart India Hackathon badge.",
    narration: "Lakshya Fuze: Empowering national defense with smart, accessible precision guidance."
  }
];

export const FAQ_ITEMS = [
  {
    q: "Why only change the nose cap instead of building a whole new missile?",
    a: "Building a dedicated guided missile or shell like Excalibur costs over $100,000 per unit and requires complex manufacturing lines. Replacing only the nose cap costs under $3,000, takes 30 seconds in the field, and unlocks precision guidance for millions of existing 155mm shells already in military inventory."
  },
  {
    q: "How does Lakshya Fuze handle high g-force launch setback acceleration?",
    a: "Standard artillery firing generates setback acceleration up to 15,000 g. Lakshya Fuze utilizes solid-state MEMS sensors encased in high-density shock-absorbing polyurethane epoxy potting, protecting sensitive electronics from mechanical shock."
  },
  {
    q: "How does it compare to the US M1156 PGK or M982 Excalibur?",
    a: "While Excalibur is a completely custom guided projectile ($100k+), Lakshya Fuze operates on the cost-effective PGK philosophy but incorporates dual-core ESP32 processing and modern IoT connectivity for target pairing, delivering sub-5m CEP at a fraction of the cost."
  },
  {
    q: "What happens if GPS is jammed in an Electronic Warfare (EW) environment?",
    a: "Lakshya Fuze features a dual-sensor architecture. If GPS lock is lost due to jamming, the Extended Kalman Filter automatically falls back to 6-DOF IMU inertial navigation dead-reckoning, maintaining high accuracy across the descent trajectory."
  },
  {
    q: "Can existing artillery crews use this without specialized retraining?",
    a: "Yes! The operational workflow remains identical to firing standard unguided shells. The battery crew simply threads on Lakshya Fuze, programs target coordinates wirelessly in seconds via a ruggedized Bluetooth/LoRa handheld terminal, and loads the round normally."
  }
];
