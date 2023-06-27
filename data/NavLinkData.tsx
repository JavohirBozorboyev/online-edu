import { IconHome, IconLayoutDashboard, IconListDetails, IconPlayerPlayFilled, IconUser } from "@tabler/icons-react";


const DashLink = [
  {
    label: "Dashboard",
    icon: IconLayoutDashboard,
    url: "/dashboard",
  },
  {
    label: "Kurslar",
    icon: IconPlayerPlayFilled,
    url: "/dashboard/course",
  },
  {
    label: "Imtxon",
    icon: IconListDetails,
    url: "/dashboard/quiz",
  },
  {
    label: "Account",
    icon: IconUser,
    url: "/dashboard/account",
  },
];

const AppLink = [
  {
    label: "Asosiy",
    icon: IconHome,
    url: "/",
  },
];

export const DashLinkData = () => {
  return DashLink;
};

export const AppLinkData = () => {
  return AppLink;
};
