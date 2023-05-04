import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import DashCourseCard from "@/src/Page/Dashboard/DashCourse/DashCourseCard";
import { Box, Container } from "@mantine/core";
import { getServerSession } from "next-auth";
import React from "react";
import useSWR from "swr";

type Props = {};

const index = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/posts"
  // );

  // console.log(data);

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
