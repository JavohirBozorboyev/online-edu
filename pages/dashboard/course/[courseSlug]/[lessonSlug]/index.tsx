/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */

import LessonPassButton from "@/components/Tabs/LessonPassButton";

import LessonVideo from "@/components/Video/LessonVideo";
import CourseLayout from "@/layouts/CourseLayout";
import { useCardBg } from "@/styles/styleJs/useCardBg";
import { Box } from "@mantine/core";

import React, { ReactElement, useState } from "react";

type Props = {};

const index = (props: Props) => {
  const { classes } = useCardBg();
  const [activeTab, setActiveTab] = useState<string | null>("3");
  return (
    <>
      <Box m={"-md"} mb={"md"}></Box>
      <LessonVideo />
      <LessonPassButton />
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


