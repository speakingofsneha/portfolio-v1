interface WorkListItem {
  title: string;
  description: string;
  blurb: string;
  year: string;
  category: string;
  url: string;
  wip: boolean;
  external?: boolean; // optional
}

export const works: WorkListItem[] = [
  {
    title: "Info-vis",
    description: "Equitable indoor environments",
    blurb: "info vis",
    year: "2025",
    category: "Research Design Code",
    url: "/case-studies/datavis",
    wip: false,
  },
  {
    title: "Olympal",
    description: "Shared sporting experiences for AR",
    blurb: "interaction desn",
    year: "2024",
    category: "Research Design",
    url: "https://www.behance.net/gallery/223473325/Olympal-Shared-sporting-experience-in-AR",
    wip: false,
    external: true,
  },
  {
    title: "Anu",
    description: "Back-to-basics task management",
    blurb: "adv web des",
    year: "2024-",
    category: "Code Design",
    url: "https://speakingofsneha.github.io/anu/#/",
    wip: false,
  },
  {
    title: "Lit-box",
    description: "Addressing the literacy crisis",
    blurb: "ux design",
    year: "2023–",
    category: "Research Design",
    url: "/case-studies/litbox",
    wip: true,
  },
  {
    title: "Kolam",
    description: "Translating kolams into code in p5js",
    blurb: "creative coding",
    year: "2023",
    category: "Code",
    url: "https://www.behance.net/gallery/223935267/Mornings-in-Chidam-Creative-Coding-in-p5js",
    wip: false,
    external: false,
  },
  {
    title: "Sapasa",
    description: "Democratising indian classical music",
    blurb: "interface desn",
    year: "2023",
    category: "Research Design",
    url: "https://www.figma.com/proto/yfEMxnncnoibR83KhucQjp/sapasa?node-id=424-647&node-type=canvas&t=ALDmbUS532bnPMbz-0&scaling=scale-down&content-scaling=fixed&page-id=414:616",
    wip: true,
    external: true,
  },
  {
    title: "Misc.",
    description: "Miscellaneous design / art pieces",
    blurb: "misc. design / art",
    year: "2018–",
    category: "Design",
    url: "https://mail-attachment.googleusercontent.com/...",
    wip: false,
    external: true,
  },
];