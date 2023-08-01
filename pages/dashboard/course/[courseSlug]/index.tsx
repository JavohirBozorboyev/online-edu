/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */

import CourseLayout from "@/layouts/CourseLayout";

import DashCourseRoodmap from "@/src/Page/Dashboard/DashCourse/DashCourseRoodmap";
import { useDashTitleStyle } from "@/styles/styleJs/useTitleStyle";
import { Box, Text, Grid, Skeleton, Image, Paper, Rating } from "@mantine/core";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import useSWR from "swr";

type Props = {};

const index = (props: Props) => {
  const { classes, theme } = useDashTitleStyle();
  const router = useRouter();
  const { courseSlug } = router.query;
  const { data: session } = useSession();

  const fetcher = (url: string) =>
    axios
      .get(url, {
        headers: { Authorization: "Bearer " + session?.user?.name },
      })
      .then((res) => res.data);

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_URL_BACE}/course/my-course/${courseSlug}/`,
    fetcher,
    { refreshInterval: 100 }
  );

  if (error)
    return (
      <>
        <Grid>
          <Grid.Col md={6}>
            <Skeleton height={70} />
          </Grid.Col>
        </Grid>
        <Grid mt="md" gutter="xs">
          <Grid.Col md={6}>
            <Skeleton height={380} />
          </Grid.Col>
          <Grid.Col md={6}>
            <Skeleton height={380} />
          </Grid.Col>
          <Grid.Col>
            <Skeleton height={300} />
          </Grid.Col>
        </Grid>
      </>
    );
  if (isLoading)
    return (
      <>
        <Grid>
          <Grid.Col md={6}>
            <Skeleton height={70} />
          </Grid.Col>
        </Grid>
        <Grid mt="md" gutter="xs">
          <Grid.Col md={6}>
            <Skeleton height={380} />
          </Grid.Col>
          <Grid.Col md={6}>
            <Skeleton height={380} />
          </Grid.Col>
          <Grid.Col>
            <Skeleton height={300} />
          </Grid.Col>
        </Grid>
      </>
    );
  return (
    <>
      <Box mb={"xs"}>
        <Text className={classes.title}>Kursdagi Roodmap</Text>
      </Box>

      <Box>
        <Grid gutter="xs">
          <Grid.Col md={6}>
            <Paper p={"xs"}>
              <Image radius="sm" src={data.photo} />
            </Paper>
          </Grid.Col>
          <Grid.Col md={6}>
            <Paper p="sm">
              <Text size="xl">{data.name}</Text>
              <Text size="sm" mt="md" color="dimmed">
                From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that
                has blue-green skin with darker patches. It has red eyes with
                white pupils, pointed, ear-like structures on top of its head,
                and a short, blunt snout
              </Text>
              <Box sx={{ display: "flex", alignItems: "center" }} mt="xl">
                <Text size="sm" color="dimmed">
                  {"O'qtuvchi:"}
                </Text>
                <Text size="sm" c="blue.3" ml="sm">
                  {data.teacher_name}
                </Text>
              </Box>
              <Rating defaultValue={2} size="xs" mt="md" />
            </Paper>
          </Grid.Col>
          <Grid.Col>
            <DashCourseRoodmap />
          </Grid.Col>
        </Grid>
      </Box>
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
