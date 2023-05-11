/* eslint-disable react-hooks/rules-of-hooks */
import QuizCarousel from "@/components/Carousel/QuizCarousel";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import DashQuizCard from "@/src/Page/Dashboard/DashQuiz/DashQuizCard";
import { useDashTitleStyle } from "@/styles/styleJs/useTitleStyle";
import { Box, Text } from "@mantine/core";
import { getServerSession } from "next-auth";
import React from "react";
import useSWR from "swr";

type Props = {};

const index = ({}: Props) => {
  const { classes, theme } = useDashTitleStyle();
  const {
    data: quiz,
    error: equiz,
    isLoading: lquiz,
  } = useSWR("https://backend.tibbiypsixologiya.uz/api/category/");

  return (
    <>
      <Box mb={"xl"}>
        <Text className={classes.title} mb={"sm"}>
          Mashhur Imtixonlar
        </Text>
        <QuizCarousel />
      </Box>
      <Box mb={"xl"}>
        <Text className={classes.title} mb={"sm"}>
          Ommabop Imtixonlar
        </Text>
        <DashQuizCard data={quiz} error={equiz} loading={lquiz} />
      </Box>
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
