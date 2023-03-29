import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import LessonVideo from "@/components/Video/LessonVideo";
import CourseLayout from "@/layouts/CourseLayout";
import { Container } from "@mantine/core";
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
