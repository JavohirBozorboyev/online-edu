import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import DashCourseCard from "@/src/Page/Dashboard/DashCourse/DashCourseCard";
import { Box, Container } from "@mantine/core";
import { getServerSession } from "next-auth";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      {/* <Box mb={'xl'}>
        <Breadcrumb />
      </Box> */}
      <main>
        <Container size={"xl"} p={0}>
          <DashCourseCard />
        </Container>
      </main>
    </>
  );
};

export default index;


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