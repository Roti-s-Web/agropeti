import { Category } from "../types/types";
import {
  FaDog,
  FaHorse,
  FaCog,
  FaTools,
  FaTractor,
  FaPuzzlePiece,
} from "react-icons/fa";
import { LuFence, LuPackage, LuWheat, LuToyBrick } from "react-icons/lu";
import { FaSheetPlastic } from "react-icons/fa6";
import { MdOutlinePets, MdOutlinePestControl } from "react-icons/md";
import {
  GiSheep,
  GiWaterDrop,
  GiFactory,
  GiRoundStrawBale,
  GiCartwheel,
  GiPotato,
  GiPig,
  GiScrew,
} from "react-icons/gi";

export const categories: Category[] = [
  {
    id: "ambalare",
    name: "Ambalare",
    icon: LuPackage,
    subcategories: [
      { id: "folie-balotat", name: "Folie de balotat", icon: FaSheetPlastic },
      { id: "folie-siloz", name: "Folie Siloz", icon: FaSheetPlastic },
      { id: "plasa-balotat", name: "Plasă de balotat", icon: GiRoundStrawBale },
    ],
  },
  {
    id: "zootehnie",
    name: "Zootehnie",
    icon: MdOutlinePets,
    subcategories: [
      { id: "animale-companie", name: "Animale de companie", icon: FaDog },
      { id: "cai", name: "Cai", icon: FaHorse },
      {
        id: "combaterea-daunatorilor",
        name: "Combaterea dăunătorilor",
        icon: MdOutlinePestControl,
      },
      { id: "garduri-electrice", name: "Garduri electrice", icon: LuFence },
      { id: "oi-capre", name: "Oi și capre", icon: GiSheep },
      { id: "porci", name: "Porci", icon: GiPig },
    ],
  },
  {
    id: "jucarii",
    name: "Jucării",
    icon: LuToyBrick,
    subcategories: [
      { id: "bruder", name: "Bruder", icon: FaTractor },
      { id: "rolly-toys", name: "Rolly Toys", icon: FaPuzzlePiece },
    ],
  },
  {
    id: "piese-agricole",
    name: "Piese Agricole",
    icon: FaTools,
    subcategories: [
      { id: "anvelope", name: "Anvelope", icon: GiCartwheel },
      {
        id: "industrie-atelier",
        name: "Industrie și atelier",
        icon: GiFactory,
      },
      {
        id: "incarcatoare-frontale",
        name: "Încărcătoare frontale",
        icon: FaTractor,
      },
      { id: "irigare", name: "Irigare", icon: GiWaterDrop },
      { id: "recoltare-cartofi", name: "Recoltare cartofi", icon: GiPotato },
      { id: "recoltare-furaje", name: "Recoltare furaje", icon: LuWheat },
    ],
  },
  {
    id: "piese-plug",
    name: "Piese pentru plug",
    icon: FaCog,
    subcategories: [
      { id: "piese-uzura", name: "Piese de uzură", icon: FaTools },
      { id: "piese-cadru", name: "Piese la cadru", icon: GiScrew },
    ],
  },
];
