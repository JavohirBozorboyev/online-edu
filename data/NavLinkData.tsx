import React, { useMemo } from "react";
import {
  TbLayoutDashboard,
  TbPlayerPlayFilled,
  TbListDetails,
  TbUser,
  TbHome,
} from "react-icons/tb";

const DashLink = [
  {
    label: "Dashboard",
    icon: TbLayoutDashboard,
    url: "/dashboard",
  },
  {
    label: "Kurslar",
    icon: TbPlayerPlayFilled,
    url: "/dashboard/course",
  },
  {
    label: "Imtxon",
    icon: TbListDetails,
    url: "/dashboard/quiz",
  },
  {
    label: "Account",
    icon: TbUser,
    url: "/dashboard/account",
  },
];

const AppLink = [
  {
    label: "Asosiy",
    icon: TbHome,
    url: "/",
  },
];

export const DashLinkData = () => {
  return DashLink;
};

export const AppLinkData = () => {
  return AppLink;
};
