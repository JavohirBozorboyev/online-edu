import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CourseLayout from "@/layouts/CourseLayout";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import React, { ReactElement } from "react";

type Props = {};

const index = (props: Props) => {
  return <div>
  </div>;
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
