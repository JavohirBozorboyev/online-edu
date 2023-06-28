import {
  IconLayoutGrid,
  IconListDetails,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { IconHome } from "@tabler/icons-react";

export const SideBarData = [
  {
    label: "Home",
    icon: IconHome,
    url: "/",
  },
  {
    label: "Kurslar",
    icon: IconPlayerPlay,
    url: "/course",
  },
  {
    label: "Imtixonlar",
    icon: IconListDetails,
    url: "/quiz",
  },
];

export const UserData = [
  {
    label: "Boshqaruv",
    icon: IconLayoutGrid,
    url: "/dashboard",
    initiallyOpened: true,
    links: [
      { label: "Statistika", link: "/dashboard" },
      { label: "My Course", link: "/dashboard/course" },
      { label: "Account", link: "/dashboard/account" },
    ],
  },
];
