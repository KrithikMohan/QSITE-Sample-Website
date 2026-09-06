import { SiteConfig, ScheduleDay } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Q-SITE",
  fullName: "Quantum Science, Information Technology and Engineering Conference",
  edition: "2026",
  tagline: "Canada's Premier Student-Centric Quantum Conference",
  description:
    "Bridging academia, student innovation, and industry across quantum computation, cryptographic protocols, sensing devices, and quantum engineering systems.",
  dates: {
    display: "Dates Announced Soon",
    note: "Schedule & timeline TBA",
  },
  location: {
    city: "Toronto, Ontario",
    venue: "University of Toronto & Hybrid Virtual",
    hybridNote: "In-person keynote & poster sessions with worldwide streaming",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Schedule", href: "/schedule" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Support", href: "/support" },
    { label: "Register [Preview]", href: "/#registration-preview", isCta: true },
  ],
  metrics: [
    { value: "350+", label: "Student & Academic Attendees", sublabel: "Across undergraduate, graduate & PhD cohorts" },
    { value: "25+", label: "Distinguished Speakers", sublabel: "Pioneering industry leaders & research faculty" },
    { value: "18+", label: "Partner Universities", sublabel: "Representing nationwide quantum research hubs" },
    { value: "100%", label: "Open & Student-Driven", sublabel: "Organized by and for the quantum community" },
  ],
  topics: [
    "Quantum Algorithms & Complexity",
    "Hardware & Superconducting Qubits",
    "Quantum Cryptography & QKD",
    "Quantum Sensing & Metrology",
    "Neutral Atom & Photonic Architectures",
    "Quantum Information Theory",
  ],
  ticketTiers: [
    {
      name: "Student Pass [Preview]",
      badge: "In-Site Preview",
      status: "Registration Opening Soon",
      description: "Full access for undergraduate, graduate, and doctoral students from any recognized institution.",
      perks: [
        "Access to all keynote addresses & research tracks",
        "Eligible for poster submission & awards showcase",
        "Networking reception with industry quantum leaders",
        "Conference kit & student hackathon entry",
      ],
    },
    {
      name: "Academic & Researcher Pass [Preview]",
      badge: "In-Site Preview",
      status: "Registration Opening Soon",
      description: "Designed for faculty, postdocs, laboratory directors, and university quantum group delegates.",
      perks: [
        "Priority seating at keynote panels & technical sessions",
        "Access to poster judging & symposium breakout rooms",
        "Faculty roundtable networking breakfast",
        "Digital access to conference proceedings & recordings",
      ],
    },
    {
      name: "Industry Delegate Pass [Preview]",
      badge: "In-Site Preview",
      status: "Registration Opening Soon",
      description: "For corporate scientists, quantum venture partners, engineering recruiters, and startup founders.",
      perks: [
        "Admission to all executive panels & exhibitor floor",
        "Access to curated student resume & poster directory",
        "Dedicated corporate recruiting lounge pass",
        "Recognition in printed & digital conference catalog",
      ],
    },
  ],
  posterSubmission: {
    statusBadge: "Call For Posters — Preview Mode",
    guidelines: [
      "Open to original student research, ongoing thesis projects, and undergraduate capstones.",
      "Posters accepted across Quantum Hardware, Algorithms, Cryptography, and Applied Sensing.",
      "Accepted presenters will be assigned a dedicated poster exhibition time slot and easel board.",
      "Eligible for Best Theoretical Poster and Best Experimental Demo awards evaluated by faculty judges.",
    ],
    tracks: [
      "Track A: Quantum Computation & Software",
      "Track B: Quantum Communications & Security",
      "Track C: Quantum Materials & Devices",
      "Track D: Quantum Education & Open Science",
    ],
  },
  sponsorTiers: [
    {
      tierName: "Platinum Partner [Preview]",
      badge: "Top Tier Showcase",
      isFeatured: true,
      perks: [
        "Keynote introduction remarks & dedicated breakout workshop slot",
        "Prime double-wide exhibition booth in central hall foyer",
        "Exclusive access to full attendee opt-in resume database",
        "Prominent logo placement on website shell, badges & program banner",
        "Title sponsor of the Poster Session & Hackathon Grand Prize",
      ],
    },
    {
      tierName: "Gold Partner [Preview]",
      badge: "Featured Partner",
      perks: [
        "Dedicated standard exhibition booth in sponsor networking gallery",
        "Access to student resume book & designated recruiter table",
        "Logo spotlight on conference web shell & physical signage",
        "Sponsorship acknowledgement during morning plenary address",
        "Up to 5 complimentary full-access industry delegate passes",
      ],
    },
    {
      tierName: "Silver Partner [Preview]",
      badge: "Supporting Partner",
      perks: [
        "Branded exhibitor table in quantum demonstration pavilion",
        "Logo included on official conference website and schedule guide",
        "Recognition during afternoon breakout sessions",
        "Up to 2 complimentary industry delegate passes",
        "Opportunity to include collateral inside attendee welcome bags",
      ],
    },
  ],
  sponsorLogos: [
    { id: "sp-1", tier: "Platinum", name: "Platinum Sponsor Slot 1" },
    { id: "sp-2", tier: "Platinum", name: "Platinum Sponsor Slot 2" },
    { id: "sp-3", tier: "Gold", name: "Gold Sponsor Slot 1" },
    { id: "sp-4", tier: "Gold", name: "Gold Sponsor Slot 2" },
    { id: "sp-5", tier: "Gold", name: "Gold Sponsor Slot 3" },
    { id: "sp-6", tier: "Silver", name: "Silver Sponsor Slot 1" },
    { id: "sp-7", tier: "Silver", name: "Silver Sponsor Slot 2" },
    { id: "sp-8", tier: "Silver", name: "Silver Sponsor Slot 3" },
  ],
  prospectusPreview: {
    title: "Sponsorship Package Overview [Preview]",
    summary:
      "Connect your organization with Canada's top emerging quantum talent, university researchers, and faculty delegates.",
    highlights: [
      "Direct recruiting pipeline to leading undergraduate, masters & PhD candidates",
      "Brand elevation in Canada's foremost student-driven quantum research community",
      "Interactive booth spaces for live SDK, cloud quantum, or hardware demonstrations",
      "Opportunities to deliver technical breakout workshops and keynote remarks",
    ],
  },
  faq: [
    {
      category: "Logistics",
      question: "What is the venue and format for Q-SITE 2026?",
      answer:
        "Q-SITE takes place at the University of Toronto campus with synchronized virtual streaming for global participants. Specific hall and room allocations will be announced closer to the event.",
    },
    {
      category: "Registration",
      question: "When does attendee registration open?",
      answer:
        "Registration will open officially once keynote tracks and venue logistics are finalized. This skeleton site previews the pass tiers and structural layout in advance.",
    },
    {
      category: "Poster Exhibition",
      question: "Who is eligible to submit a research poster?",
      answer:
        "Any enrolled student (undergraduate, masters, or PhD) or early-stage researcher conducting work in quantum science, quantum computing, cryptography, materials, or related engineering is eligible to submit an abstract.",
    },
    {
      category: "Logistics",
      question: "Are travel grants or student subsidies available?",
      answer:
        "Q-SITE strives to ensure equitable access. Details on student travel stipends and conference fee waivers will be outlined when registration goes live.",
    },
    {
      category: "General",
      question: "How can my student club or university chapter partner with Q-SITE?",
      answer:
        "We welcome student societies across Canadian and international universities to affiliate as community partners. Reach out via our organizer contact channels below.",
    },
  ],
  contact: {
    email: "organizers@qsiteconf.ca [Placeholder]",
    discord: "discord.gg/qsite [Placeholder]",
    linkedin: "linkedin.com/company/qsite-conference [Placeholder]",
    location: "Toronto, Ontario, Canada",
  },
};

export const scheduleData: ScheduleDay[] = [
  {
    day: "Day 1",
    theme: "Quantum Theory, Cryptography & Algorithms",
    sessions: [
      {
        id: "d1-s1",
        timeSlot: "Morning Plenary (Time TBA)",
        title: "Opening Remarks & Presidential Keynote Address",
        track: "Keynote Track",
        type: "Keynote",
        description: "Welcome address mapping the Canadian quantum ecosystem and university research roadmap.",
        speakerPlaceholder: "Keynote Speaker [To Be Announced]",
      },
      {
        id: "d1-s2",
        timeSlot: "Mid-Morning Technical (Time TBA)",
        title: "Breakout Panel: Post-Quantum Cryptography & Practical QKD Networks",
        track: "Quantum Security",
        type: "Panel",
        description: "Evaluating NIST post-quantum standards, quantum key distribution infrastructure, and network challenges.",
        speakerPlaceholder: "Panel of 4 Research Specialists",
      },
      {
        id: "d1-s3",
        timeSlot: "Early Afternoon (Time TBA)",
        title: "Poster Exhibition Session A: Algorithms & Simulation",
        track: "Poster Track",
        type: "Poster",
        description: "Interactive poster showcase with student presenters detailing algorithmic advances and hybrid VQE methods.",
        speakerPlaceholder: "Student Researchers & Faculty Evaluators",
      },
      {
        id: "d1-s4",
        timeSlot: "Late Afternoon (Time TBA)",
        title: "Industry & Academic Networking Reception",
        track: "Networking",
        type: "Networking",
        description: "Informal networking in the main glass atrium connecting students with lab leaders and industry delegates.",
        speakerPlaceholder: "All Attendees & Sponsors",
      },
    ],
  },
  {
    day: "Day 2",
    theme: "Quantum Hardware, Sensing & Engineering",
    sessions: [
      {
        id: "d2-s1",
        timeSlot: "Morning Keynote (Time TBA)",
        title: "Architectures of Quantum Coherence: Superconducting vs. Neutral Atoms",
        track: "Hardware Track",
        type: "Keynote",
        description: "An in-depth survey of competing quantum computing modalities, error mitigation, and scaling roadmaps.",
        speakerPlaceholder: "Hardware Pioneer [To Be Announced]",
      },
      {
        id: "d2-s2",
        timeSlot: "Mid-Morning Panel (Time TBA)",
        title: "Breakout Panel: Quantum Sensing in Extreme Environments",
        track: "Quantum Sensing",
        type: "Panel",
        description: "From NV-center magnetometry to cold-atom gravimeters: bridging experimental physics into commercial sensors.",
        speakerPlaceholder: "Panel of Industry & Lab Researchers",
      },
      {
        id: "d2-s3",
        timeSlot: "Early Afternoon (Time TBA)",
        title: "Poster Exhibition Session B: Hardware & Physical Devices",
        track: "Poster Track",
        type: "Poster",
        description: "Student demonstrations, fabrication poster displays, cryogenic engineering, and photonics setups.",
        speakerPlaceholder: "Student Researchers & Experimental Teams",
      },
      {
        id: "d2-s4",
        timeSlot: "Late Afternoon (Time TBA)",
        title: "Closing Ceremony & Poster Award Presentations",
        track: "Plenary Track",
        type: "Keynote",
        description: "Presentation of Best Poster awards, Hackathon highlights, and Q-SITE concluding statements.",
        speakerPlaceholder: "Organizing Committee & Awards Committee",
      },
    ],
  },
];
