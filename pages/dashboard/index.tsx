import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Container } from "@mantine/core";

import React, { ReactElement } from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { useSession } from "next-auth/react";

import { getServerSession } from "next-auth/next";
import Chart from "@/src/Page/Dashboard/Home/Chart";

const Dashboard = () => {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <>
      <Container p={0} size={"xl"}>
        <Breadcrumb />
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
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
