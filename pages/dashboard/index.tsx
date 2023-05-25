import React from "react";

import Chart from "@/src/Page/Dashboard/DashHome/Chart";
import DashHomeInfoCard from "@/src/Page/Dashboard/DashHome/DashHomeStatsCard";
import { useRouter } from "next/router";


const Dashboard = () => {
  const router = useRouter();

  return (
    <>
      <DashHomeInfoCard />
      <Chart />
    </>
  );
};

export default Dashboard;
