import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Container } from "@mantine/core";

import React, { ReactElement } from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { useSession } from "next-auth/react";

import { getServerSession } from "next-auth/next";
import Chart from "@/src/Page/Dashboard/DashHome/Chart";
import DashHomeInfoCard from "@/src/Page/Dashboard/DashHome/DashHomeStatsCard";

const Dashboard = () => {
  // const { data: session } = useSession();
  // console.log(session);
  return (
    <>
      <Container p={0} size={"xl"}>
        {/* <Breadcrumb /> */}
        <DashHomeInfoCard />
        <Chart />
      </Container>
    </>
  );
};

export default Dashboard;

// Dashboard.getLayout = function PageLayout(page: ReactElement) {
//   return (
//     <>
//       <DashboardLayout>{page}</DashboardLayout>
//     </>
//   );
// };

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
