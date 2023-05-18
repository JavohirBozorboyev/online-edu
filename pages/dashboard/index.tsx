import React, { useEffect, useTransition } from "react";

import Chart from "@/src/Page/Dashboard/DashHome/Chart";
import DashHomeInfoCard from "@/src/Page/Dashboard/DashHome/DashHomeStatsCard";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <>
      <DashHomeInfoCard />
      <Chart />
    </>
  );
};

export default Dashboard;
