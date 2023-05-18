/* eslint-disable react-hooks/rules-of-hooks */

import CourseLayout from "@/layouts/CourseLayout";

import DashCourseRoodmap from "@/src/Page/Dashboard/DashCourse/DashCourseRoodmap";
import { useDashTitleStyle } from "@/styles/styleJs/useTitleStyle";
import { Box, Text } from "@mantine/core";

import React, { ReactElement } from "react";

type Props = {};

const index = (props: Props) => {
  const { classes, theme } = useDashTitleStyle();
  return (
    <div>
      <Box mb={"xl"}>
        <Text className={classes.title} mb={"sm"}>
          Kursdagi Roodmap
        </Text>
      </Box>
      <DashCourseRoodmap />
    </div>
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
