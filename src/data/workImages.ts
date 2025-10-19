import { getAssetPath } from '../utils/assetPath';

interface WorkImageData {
  url: string;
  id: string;
  category: string;
}

const workImages: WorkImageData[] = [
  {
    url: getAssetPath("/images/work/reframe.png"),
    id: "Reframe",
    category: "Design Code"
  },
  {
    url: getAssetPath("/images/work/datavis.png"),
    id: "Info-vis",
    category: "Code Design"
  },
  {
    url: getAssetPath("/images/work/olympal.png"),
    id: "Olympal",
    category: "Research Design",
  },
  {
    url: getAssetPath("/images/work/anu.png"),
    id: "Anu",
    category: "Code Design",
  },
  {
    url: getAssetPath("/images/work/litbox.png"),
    id: "Lit-box",
    category: "Research Design",
  },
  {
    url: getAssetPath("/images/work/sapasa.png"),
    id: "Sapasa",
    category: "Research Design",
  },
  {
    url: getAssetPath("/images/work/kolam.png"),
    id: "Kolam",
    category: "Code",
  },
  {
    url: getAssetPath("/images/work/misc.png"),
    id: "Misc.",
    category: "Design",
  },
];

export default workImages;
