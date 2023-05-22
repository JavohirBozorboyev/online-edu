/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";
import { Box, Text } from "@mantine/core";
import { useDashTitleStyle } from "@/styles/styleJs/useTitleStyle";
import DashQuizSlugCard from "@/src/Page/Dashboard/DashQuiz/DashQuizSlugCard";

import useSWR from "swr";

type Props = {};

const index = () => {
  const { classes } = useDashTitleStyle();
  const router = useRouter();

  const { slug } = router?.query;
  const {
    data: quizSlug,
    error: errSlug,
    isLoading: loadSlug,
  } = useSWR(
    `https://onlineedu.pythonanywhere.com/api/examp/category/${slug}/`,
    { refreshInterval: 1000 * 60 * 60 }
  );

  const titleSlug = quizSlug?.name || "Loading...";

  return (
    <div>
      <Box mb={"xl"}>
        <Text className={classes.title} mb={"sm"}>
          {titleSlug}
        </Text>
        <DashQuizSlugCard quiz={quizSlug} error={errSlug} loading={loadSlug} />
      </Box>
    </div>
  );
};

export default index;
