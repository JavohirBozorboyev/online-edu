/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import LessonTabs from "@/components/Tabs/LessonTabs";

import LessonVideo from "@/components/Video/LessonVideo";
import CourseLayout from "@/layouts/CourseLayout";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useCardBg } from "@/styles/styleJs/useCardBg";
import { Container, Box, Tabs, Paper } from "@mantine/core";
import { getServerSession } from "next-auth";

import React, { ReactElement, useState } from "react";
import { TbListDetails, TbMessageCircle } from "react-icons/tb";

type Props = {};

const index = (props: Props) => {
  const { classes } = useCardBg();
  const [activeTab, setActiveTab] = useState<string | null>("3");
  return (
    <>
      <Box m={"-md"} mb={"md"}>
        <LessonTabs />
      </Box>
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
