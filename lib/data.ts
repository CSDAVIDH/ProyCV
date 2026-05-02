import {
  FiServer,
  FiShield,
  FiBarChart2,
  FiWifi,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiCalendar,
  FiStar,
} from "react-icons/fi";

import type {
  NavLink,
  Particle,
  SocialLink,
  HeroStat,
  Highlight,
  Experience,
  SkillCategory,
  Language,
  Certification,
  AcademicStat,
  ContactInfo,
} from "@/types";

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const PARTICLES: Particle[] = [
  { w: 6, h: 6, top: "15%", left: "10%", delay: 0, color: "#3b82f6" },
  { w: 4, h: 4, top: "25%", left: "85%", delay: 1.5, color: "#10b981" },
  { w: 8, h: 8, top: "70%", left: "5%", delay: 3, color: "#8b5cf6" },
  { w: 5, h: 5, top: "80%", left: "90%", delay: 2, color: "#3b82f6" },
  { w: 3, h: 3, top: "45%", left: "95%", delay: 0.5, color: "#10b981" },
  { w: 7, h: 7, top: "60%", left: "75%", delay: 2.5, color: "#f59e0b" },
];

export const TECH_STACK: string[] = [
  "Next.js",
  "Ruby on Rails",
  "Node.js",
  "TypeScript",
  "Python",
  "SQL",
];

export const HERO_STATS: HeroStat[] = [
  { label: "Anos exp.", value: "7+" },
  { label: "Idiomas", value: "3" },
  { label: "Certs.", value: "11+" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/david-condori-3412a8264",
    label: "LinkedIn",
    color: "#0077b5",
  },
  {
    icon: FiMail,
    href: "mailto:david.condori.9190@gmail.com",
    label: "Email",
    color: "#ea4335",
  },
];

// ─── About ────────────────────────────────────────────────────────────────────

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: FiServer,
    title: "Backend Development",
    desc: "Ruby on Rails, Node.js, APIs RESTful e arquitetura de sistemas escaláveis.",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
  },
  {
    icon: FiShield,
    title: "Forense Digital",
    desc: "Análise e investigação de sistemas, grande interesse em segurança da informação.",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
  },
  {
    icon: FiBarChart2,
    title: "Análise de Dados",
    desc: "Power BI, Python para análise e visualização, tomada de decisões data-driven.",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    icon: FiWifi,
    title: "Infraestrutura & Redes",
    desc: "TCP/IP, fibra óptica, GPON, VPN, Active Directory, Windows & Linux.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
  },
];

export const QUALITIES: string[] = [
  "Trabalho em equipe colaborativo",
  "Capacidade analítica apurada",
  "Postura sinérgica e resiliente",
  "Boa comunicação interpessoal",
  "Pro-atividade profissional",
  "Aprendizado contínuo",
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const EXPERIENCES: Experience[] = [
  {
    role: "Técnico de Suporte Bilíngue",
    company: "Foundever",
    location: "Brasil",
    period: "Mai. 2025 — Presente",
    current: true,
    color: "#3b82f6",
    tags: ["Suporte Técnico", "Dell", "Bilíngue", "Chat", "Telefone"],
    bullets: [
      "Suporte técnico bilíngue para equipamentos de informática Dell",
      "Atendimento a usuários via chat e chamadas telefônicas em português e inglês",
      "Diagnóstico e resolução de problemas de hardware e software",
    ],
  },
  {
    role: "Técnico de Scanner (Freelancer)",
    company: "Instituto Nacional de Estatística",
    location: "Bolívia",
    period: "Abr. 2024 — Out. 2024",
    current: false,
    color: "#10b981",
    tags: ["Hardware", "Scanner", "Impressoras", "Manutenção"],
    bullets: [
      "Suporte para equipamentos como impressoras e scanners de alta capacidade",
      "Suporte ao usuário final e treinamento de operação",
      "Configuração, manutenção preventiva e corretiva de dispositivos",
    ],
  },
  {
    role: "Técnico de Suporte Help-desk Remoto (Freelancer)",
    company: "Allianz / Porto Seguro — HexaIT",
    location: "São Paulo, SP",
    period: "Set. 2023 — Presente",
    current: true,
    color: "#8b5cf6",
    tags: ["Help-desk", "AnyDesk", "TeamViewer", "MS Teams", "Windows"],
    bullets: [
      "Serviços de suporte Help-desk e manutenção preventiva/corretiva Home Office",
      "Atendimento remoto a usuários Porto Seguro e Allianz Brasil",
      "Utilização de AnyDesk, MS Teams e TeamViewer para resolução de incidentes",
      "Gestão de tickets e documentação de soluções aplicadas",
    ],
  },
  {
    role: "Suporte Técnico (PJ)",
    company: "Ingeetronic Srl",
    location: "Bolívia",
    period: "Jan. 2018 — Dez. 2021",
    current: false,
    color: "#f59e0b",
    tags: ["Fibra Óptica", "CFTV", "Redes", "UTP", "Telecom"],
    bullets: [
      "Técnico de instalação em estações de rádio para operadoras telefônicas nacionais",
      "Instalação de sistemas de vigilância CFTV e equipamentos eletrônicos",
      "Coordenação na implantação de redes com fibra óptica e cabeamento UTP",
      "Suporte a sistemas informáticos e manutenção de infraestruturas tecnológicas",
    ],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Desenvolvimento",
    color: "#3b82f6",
    icon: "💻",
    skills: [
      { name: "Ruby on Rails", level: 55, note: "Em aprendizado ativo" },
      { name: "Node.js / JavaScript", level: 65, note: "Base sólida" },
      { name: "TypeScript", level: 60, note: "Projetos acadêmicos" },
      { name: "Next.js", level: 60, note: "Projetos pessoais" },
      { name: "HTML / CSS / Tailwind", level: 75, note: "Proficiente" },
      { name: "Python", level: 60, note: "Scripts & análise" },
    ],
  },
  {
    title: "Qualidade & Testes",
    color: "#10b981",
    icon: "🧪",
    skills: [
      { name: "Testes Manuais", level: 80, note: "Experiente" },
      { name: "Selenium (Automação)", level: 65, note: "Prática acadêmica" },
      { name: "TestLink", level: 70, note: "Documentação de testes" },
      { name: "Jira / Trello", level: 75, note: "Gestão ágil" },
      { name: "Scrum / Agile", level: 72, note: "Certificado CertiProf" },
    ],
  },
  {
    title: "Infraestrutura & Suporte",
    color: "#8b5cf6",
    icon: "🔧",
    skills: [
      { name: "Redes TCP/IP", level: 80, note: "Experiente" },
      { name: "Active Directory / VPN", level: 75, note: "Configuração & suporte" },
      { name: "Windows Server / Linux", level: 72, note: "Administração" },
      { name: "Fibra Óptica / GPON", level: 78, note: "Instalação & manutenção" },
      { name: "AnyDesk / TeamViewer", level: 90, note: "Suporte remoto diário" },
    ],
  },
  {
    title: "Dados & Análise",
    color: "#f59e0b",
    icon: "📊",
    skills: [
      { name: "Power BI", level: 68, note: "Certificação ITEC 2025" },
      { name: "SQL", level: 65, note: "Consultas e modelagem" },
      { name: "Python para Dados", level: 60, note: "Pandas, visualização" },
      { name: "Excel Avançado", level: 80, note: "Análise & relatórios" },
    ],
  },
];

export const TOOL_BADGES: string[] = [
  "Git", "VS Code", "Linux", "Windows", "Postman", "Monday",
  "MS Teams", "AnyDesk", "TeamViewer", "Figma", "Slack", "Docker (básico)",
];

export const LANGUAGES: Language[] = [
  { lang: "Inglês", level: "Nativo", flag: "🇺🇸", pct: 98, color: "#3b82f6" },
  { lang: "Português", level: "Nativo", flag: "🇧🇷", pct: 98, color: "#10b981" },
  { lang: "Espanhol", level: "Fluente", flag: "🇪🇸", pct: 92, color: "#8b5cf6" },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const ACADEMIC_STATS: AcademicStat[] = [
  { label: "Conclusão", value: "Nov. 2024", icon: FiCalendar },
  { label: "Desempenho", value: "96/100", icon: FiStar },
];

export const ACADEMIC_COURSES: string[] = [
  "Algoritmos & Estruturas de Dados",
  "Redes e Telecomunicações",
  "Banco de Dados & SQL",
  "Engenharia de Software",
  "Segurança da Informação",
  "Sistemas Operacionais",
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Análise e Visualização de Dados com Power BI", issuer: "ITEC", year: "2025", category: "Dados", color: "#f59e0b", icon: "📊" },
  { name: "Programação FullStack (NextJS, Tailwind, TypeScript)", issuer: "Inova Code", year: "2023", category: "Dev", color: "#3b82f6", icon: "💻" },
  { name: "Ciências Sociais com Python", issuer: "UGRAM", year: "2024", category: "Python", color: "#10b981", icon: "🐍" },
  { name: "Scrum Foundation", issuer: "CertiProf", year: "2021", category: "Ágil", color: "#8b5cf6", icon: "⚡" },
  { name: "Automação de Testes com Selenium", issuer: "Prática Acadêmica", year: "—", category: "QA", color: "#ef4444", icon: "🤖" },
  { name: "Gestão de Testes com TestLink", issuer: "Prática Acadêmica", year: "—", category: "QA", color: "#ef4444", icon: "📋" },
  { name: "Redes GPON e Fibra Óptica", issuer: "RedesTel", year: "2022", category: "Redes", color: "#06b6d4", icon: "🌐" },
  { name: "Design de Rede Corporativa", issuer: "Chiked", year: "2021", category: "Redes", color: "#06b6d4", icon: "🔌" },
  { name: "Programação Painel Honeywell Vista", issuer: "Unid", year: "2020", category: "Segurança", color: "#f97316", icon: "🔒" },
  { name: "Ofimática Avançada", issuer: "Quimeras", year: "2020", category: "Office", color: "#64748b", icon: "📝" },
  { name: "Português sem Complicações", issuer: "Fundação Bradesco", year: "2025", category: "Idioma", color: "#10b981", icon: "🇧🇷" },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: FiMail,
    label: "Email",
    value: "david.condori.9190@gmail.com",
    href: "mailto:david.condori.9190@gmail.com",
    color: "#ea4335",
  },
  {
    icon: FiPhone,
    label: "WhatsApp / Telefone",
    value: "+55 11 98409-2911",
    href: "https://wa.me/5511984092911",
    color: "#25d366",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "david-condori-3412a8264",
    href: "https://www.linkedin.com/in/david-condori-3412a8264",
    color: "#0077b5",
  },
  {
    icon: FiMapPin,
    label: "Localização",
    value: "Uberlândia, MG — Brasil",
    href: null,
    color: "#f59e0b",
  },
];
