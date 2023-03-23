import CourseLayout from "@/layouts/CourseLayout";
import React, { ReactElement } from "react";

type Props = {};

const index = (props: Props) => {
  return <div>index</div>;
};

export default index;

index.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      <CourseLayout>{page}</CourseLayout>
    </>
  );
};
