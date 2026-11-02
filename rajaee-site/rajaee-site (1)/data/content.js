/* Your content. Edit this file to add or change projects and Now items.
   Nothing here runs the site; app.js reads it. See README.md for how to add things. */
window.SITE = (function () {
  "use strict";

  var EMAIL = "mundle.rajaee@gmail.com";
  var RESUME_PDF = "Rajaee_Mundle_Resume.pdf";

  var PROJECTS = [
    {
      id: "p-fixtures", title: "Manufacturing Fixtures at SAF-HOLLAND", cat: "Manufacturing", when: "Jan to Aug 2024", where: "Woodstock, ON", status: "Internship",
      blurb: "More than a dozen custom fixtures taken from concept to production on a trailer-component plant floor.",
      did: [
        "Designed and executed 12+ custom manufacturing fixtures from concept to production, including a spacer weld fixture that used a fixed-point datum to align axles by part number.",
        "Developed and modelled 3 landing gear weld fixtures and a specialized trailer foot fixture to streamline plant assembly.",
        "Worked with a team of 6 millwrights on hands-on fabrication, installation and real-time troubleshooting of the newly designed fixtures.",
        "Ran cycle-time optimization studies on manual loading stations and introduced design updates to reduce structural rework on defective axles."
      ],
      spec: [["Fixtures delivered", "12+"], ["Landing gear weld fixtures", "3"], ["Millwrights on the build", "6"], ["Role", "Manufacturing Engineer Intern"]],
      tools: ["SolidWorks", "AutoCAD", "GD&T", "DFM", "Fixture design"]
    },
    {
      id: "p-weld-cell", title: "Robotic Weld Cell: Table and Layout", cat: "Manufacturing", when: "2024", where: "SAF-HOLLAND, Woodstock, ON", status: "Internship",
      blurb: "A modular weld table with interchangeable fixtures, plus a floor layout for a 16 ft by 16 ft cell.",
      did: [
        "Engineered a multipurpose, modular weld table for a Panasonic robotic weld cell, with 3 interchangeable fixtures that handle several plant components and their geometric variations.",
        "Laid out a 16 ft by 16 ft weld cell in AutoCAD, placing the new welding gear, protective curtains and a separation barrier for the sandblaster to use the floor space efficiently."
      ],
      spec: [["Cell footprint", "16 ft x 16 ft"], ["Interchangeable fixtures", "3"], ["Robot", "Panasonic"], ["Layout tool", "AutoCAD"]],
      tools: ["SolidWorks", "AutoCAD", "Robotic welding", "Modular tooling"]
    },
    {
      id: "p-presses", title: "Hydraulic Press Overhaul", cat: "Manufacturing", when: "2024", where: "SAF-HOLLAND, Woodstock, ON", status: "Internship",
      blurb: "Legacy hydraulic presses rebuilt with modern safety features and heavier structure.",
      did: [
        "Led the physical overhaul of legacy hydraulic presses.",
        "Integrated modern safety features and structural enhancements so the presses could run as high-capacity, heavy-duty machines."
      ],
      spec: [["Scope", "Safety and structure"], ["Equipment", "Legacy hydraulic presses"], ["Setting", "Production plant"]],
      tools: ["Mechanical design", "Safety systems", "Structural reinforcement"]
    },
    {
      id: "p-welding-fixture", title: "Landing Gear Foot Welding Fixture", cat: "Design", when: "Design and manufacturing project", where: "University of Guelph", status: "Academic project",
      blurb: "A reverse-engineered production fixture with repeatable locating and clamping.",
      did: [
        "Reverse-engineered a heavy-duty production welding fixture for trailer landing gear feet.",
        "Designed locating features and repeatable clamping mechanisms in SolidWorks to hold tight machining tolerances, with the aim of removing manual setup variation and alignment deviation."
      ],
      spec: [["Tolerance target", "±0.075 in"], ["Part", "Landing gear foot"], ["Modelled in", "SolidWorks"]],
      tools: ["SolidWorks", "Tooling & fixtures", "Automated weld cells", "GD&T"]
    },
    {
      id: "p-compactor", title: "Scale-Model Compactor Bin", cat: "Mechatronics", when: "Lab project", where: "University of Guelph", status: "Academic project",
      blurb: "A touchless, sensor-activated waste compactor, from CAD and FEA through wiring to a load test.",
      did: [
        "Engineered an automated, sensor-activated household waste compaction prototype around an Arduino Uno R3, an HC-SR04 ultrasonic sensor and two Miuzei MG90S servo motors, for fully touchless operation.",
        "Modelled a 3-part enclosure (base, head housing, inner can) in SolidWorks and managed the dynamic clearances so the compression plate does not bind.",
        "Ran a static structural FEA study with a 900 N distributed load to find peak von Mises stress and check the PLA structure.",
        "Built a 12 V DC power system with an 18 AWG safety fuse, a BTS7960 high-current H-bridge motor driver and a 12 V to 5 V buck converter for signal regulation.",
        "3D printed every custom structural part and tested the prototype under load, where it crushed aluminum cans."
      ],
      spec: [["FEA load case", "900 N distributed"], ["Peak local stress", "304.2 MPa (von Mises)"], ["Supply", "12 V DC, 18 AWG fuse"], ["Motor driver", "BTS7960 H-bridge"], ["Controller", "Arduino Uno R3"], ["Material", "PLA (3D printed)"]],
      tools: ["SolidWorks", "FEA", "Arduino IDE", "3D printing", "Electronics"]
    },
    {
      id: "p-gryphon", title: "Gryphon Racing Aerodynamics", cat: "Racing", when: "Sept 2021 to Jun 2026", where: "Guelph Gryphon Formula SAE", status: "Team role",
      blurb: "Nearly five years on the Formula SAE team, leading aerodynamics and building carbon fibre parts by hand.",
      did: [
        "Co-led the aerodynamics group of 40+ members, coordinating off-site development meetings and timelines to deliver 3 aerodynamic kit designs.",
        "Led hands-on composite manufacturing: the tooling, layup and structural assembly of carbon fibre nosecones, sidepods and wings.",
        "Owned the geometry of the vehicle sidepods and radiator shrouds, integrating them with powertrain cooling requirements and passing all formal technical inspections.",
        "Supported vehicle manufacturing and assembly, including structural mounts, and learned vehicle integration and design workflow from senior team members."
      ],
      spec: [["Team size led", "40+"], ["Aero kit designs", "3"], ["Time on team", "Sept 2021 to Jun 2026"], ["Parts", "Nosecone, sidepods, wings"]],
      tools: ["Composites", "Carbon fibre layup", "Mould preparation", "Vehicle integration"]
    },
    {
      id: "p-turbofan", title: "Turbofan Engine Model", cat: "Simulation", when: "Started Oct 2026", where: "Personal project", status: "In progress",
      blurb: "A model-and-simulation-only turbofan, built one component at a time, starting from a commercial engine.",
      did: [
        "Building a fully model-based engine in SolidWorks, one component at a time, with Ansys CFD for the flow.",
        "The first engine follows the layout of a CFM56-7B commercial turbofan, with fan blade design as the first piece of blade work.",
        "Planned second engine: a military low-bypass fighter engine, with the fan designed from the ground up.",
        "The CAD also doubles as a 3D-printable scale model, so parts have proper fastening and mating features."
      ],
      spec: [["Engine 1", "Commercial turbofan"], ["Engine 2", "Low-bypass fighter engine"], ["CAD", "SolidWorks"], ["Flow analysis", "Ansys CFD"], ["Status", "In progress"]],
      tools: ["SolidWorks", "Ansys", "CFD", "Cycle analysis", "3D printing"]
    }
  ];
  var CATS = ["All", "Manufacturing", "Design", "Mechatronics", "Racing", "Simulation"];

  /* What is happening right now. start = YYYY-MM-DD. Add or remove entries freely. */
  var NOW = [
    {
      title: "Turbofan Engine Model", start: "2026-10-08", link: "p-turbofan", tag: "In progress",
      text: [
        "A full engine, built only in software. I am modelling a commercial turbofan in SolidWorks one component at a time and running the flow through each part in Ansys.",
        "Fan blade design comes first. After the commercial engine, I want to design a low-bypass fighter engine fan from the ground up."
      ]
    },
    {
      title: "This website", start: "2026-11-02", link: "", tag: "Just launched",
      text: [
        "A home for my projects, my resume and the things I am learning. It is built with a vibe coding workflow, and I am using it to learn how a real site fits together."
      ]
    }
  ];

  return { EMAIL: EMAIL, RESUME_PDF: RESUME_PDF, PROJECTS: PROJECTS, CATS: CATS, NOW: NOW };
})();
