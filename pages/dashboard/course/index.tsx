import DashCourseCard from "@/src/Page/Dashboard/DashCourse/DashCourseCard";

import React from "react";

type Props = {};

const index = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { data, error, isLoading } = useSWR(
  //   "https://splatform.pythonanywhere.com/platform/course/"
  // );

  

  return (
    <>
      {/* <Box mb={'xl'}>
        <Breadcrumb />
      </Box> */}
      <main>
        <DashCourseCard />
      </main>
    </>
  );
};

export default index;
