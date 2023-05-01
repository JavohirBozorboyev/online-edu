import { Container } from "@mantine/core";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Chart from "@/src/Page/Dashboard/DashHome/Chart";
import DashHomeInfoCard from "@/src/Page/Dashboard/DashHome/DashHomeStatsCard";

const Dashboard = () => {
  return (
    <>
      <Container p={0} size={"xl"}>
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
