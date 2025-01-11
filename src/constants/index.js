import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
import { links } from "../config";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#features",
  },
  {
    id: "1",
    title: "Technology",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "FAQs",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Launch Now",
    url: links.sourceCode,
    onlyMobile: true,
    external: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Phase 1: Live Smart Wallet (Base Chain)",
    text: "Launch sending, receiving, swapping functionality. Basic AI-driven insights (price indicators, security checks). Beta testing with community feedback loops.",
    date: "Phase-1",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
    className: "left-side",
  },
  {
    id: "1",
    title: "Phase 2: Omnichain Integration & AI Expansion",
    text: "Implement bridging solutions for Ethereum, BNB Chain, Polygon, etc. Enhanced ML modules for sentiment analysis, anomaly detection, and advanced risk profiling.",
    date: "Phase-2",
    status: "progress",
    imageUrl: roadmap2,
    className: "right-side",
  },
  {
    id: "2",
    title: "Phase 3: DeFi Ecosystem & Developer Tools",
    text: "Built-in yield farming and staking aggregator. Release SDK and plugin framework for dApp builders. Ongoing partnerships with institutional players and major DeFi projects.",
    date: "Phase-3",
    status: "progres",
    imageUrl: roadmap3,
    className: "left-side",

  },
  {
    id: "3",
    title: "Phase 4: Decentralized Governance & Full Autonomy",
    text: "Launch governance token for protocol decisions (upgrades, fees, expansions). Mature AI agents orchestrate complex strategies (e.g., multi-leg trades, flash loans) with minimal user input. Integration of zero-knowledge proofs for privacy and identity solutions.",
    date: "Phase-4",
    status: "progress",
    imageUrl: roadmap4,
    className: "right-side",
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    premium: false,
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
    premium: true,
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    premium: false,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Real Time AI Insights",
    text: "Data Ingestion Pipelines Predictive Modeling & Machine Learning Adaptive Strategies",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Omnichain Roadmap & Cross-Chain Bridges",
    text: "Multi-Chain Compatibility Liquidity Optimization Secure Cross-Chain Transfers",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Automated  Trading & Portfolio Management",
    text: " AI-Powered Trading Algorithms Portfolio Risk Assessment Dynamic Asset Allocation",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Advanced Security & Governance",
    text: " Behavioral Profiling Zero-Knowledge Proots (ZKPs) Decentlklized Governance",
    backgroundUrl: "/src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Developer  Enablement",
    text: "SDK & API Layers Plugin Architecture Developer Support Programs",
    backgroundUrl: "/src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
];
