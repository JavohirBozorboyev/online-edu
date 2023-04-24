/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";
import DashQuizCard from "@/src/Page/Dashboard/DashQuiz/DashQuizCard";
import { Box, Text } from "@mantine/core";
import { useDashTitleStyle } from "@/styles/styleJs/useTitleStyle";
import DashQuizSlugCard from "@/src/Page/Dashboard/DashQuiz/DashQuizSlugCard";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

type Props = {};

const index = (props: Props) => {
  const { classes } = useDashTitleStyle();
  const router = useRouter();
  const titleSlug = router.query.slug || "Loading...";

  return (
    <div>
      <Box mb={"xl"}>
        <Text className={classes.title} mb={"sm"}>
          {titleSlug}
        </Text>
        <DashQuizSlugCard />
      </Box>
    </div>
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
