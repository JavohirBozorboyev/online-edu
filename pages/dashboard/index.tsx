import React, { useTransition } from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Chart from "@/src/Page/Dashboard/DashHome/Chart";
import DashHomeInfoCard from "@/src/Page/Dashboard/DashHome/DashHomeStatsCard";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/login/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

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
