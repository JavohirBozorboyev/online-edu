import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DashCourseCard from "@/src/Page/Dashboard/Course/DashCourseCard";
import { Box, Container } from "@mantine/core";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Box mb={'xl'}>
        <Breadcrumb />
      </Box>
      <main>
        <Container size={"xl"} p={0}>
          <DashCourseCard />
        </Container>
      </main>
    </>
  );
};

export default index;
