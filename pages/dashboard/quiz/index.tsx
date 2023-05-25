/* eslint-disable react-hooks/rules-of-hooks */
import QuizCarousel from "@/components/Carousel/QuizCarousel";
import DashQuizCard from "@/src/Page/Dashboard/DashQuiz/DashQuizCard";
import { useDashTitleStyle } from "@/styles/styleJs/useTitleStyle";
import { Box, Text } from "@mantine/core";

import React from "react";
import useSWR from "swr";

type Props = {};

const index = ({}: Props) => {
  const { classes, theme } = useDashTitleStyle();
  const {
    data: quiz,
    error: equiz,
    isLoading: lquiz,
  } = useSWR("https://onlineedu.pythonanywhere.com/api/examp/category/");
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
