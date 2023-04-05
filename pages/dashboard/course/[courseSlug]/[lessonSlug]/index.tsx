import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import LessonVideo from "@/components/Video/LessonVideo";
import CourseLayout from "@/layouts/CourseLayout";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Container } from "@mantine/core";
import { getServerSession } from "next-auth";
import React, { ReactElement } from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <LessonVideo />
    </>
  );
};

export default index;

index.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      <CourseLayout>{page}</CourseLayout>
    </>
  );
};



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