import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Container } from "@mantine/core";
import React, { ReactElement } from "react";

const Dashboard = () => {
  return (
    <>
      <Container p={0} size={"xl"}>
        <Breadcrumb />
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
