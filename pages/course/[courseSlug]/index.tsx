/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import DashCourseRoodmap from "@/src/Page/Dashboard/DashCourse/DashCourseRoodmap";
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
  Grid,
  Box,
  Rating,
  Image,
  Skeleton,
} from "@mantine/core";

import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color:
      theme.colorScheme == "dark" ? theme.colors.dark[0] : theme.colors.dark[6],
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

const index = () => {
  const router = useRouter();
  const { classes, theme } = useStyles();
  const { courseSlug } = router.query;
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/course/course/${courseSlug}/`,
    { refreshInterval: 1000 * 60 * 60 }
  );

  if (isLoading) {
    return (
      <>
        <Skeleton height={"400px"} />
        <Skeleton height={"400px"} mt={30} />
      </>
    );
  }

  return (
    <>
      <Container
        size="xl"
        px={"xl"}
        style={{
          background: `${
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white
          }`,
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <Grid justify="space-between" align="center">
          <Grid.Col md={6}>
            <div className={classes.inner}>
              <div className={classes.content}>
                <Title className={classes.title}>
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: "blue.4", to: "blue.7" }}
                  >
                    {data.name}
                  </Text>{" "}
                </Title>

                <Box sx={{ display: "flex", alignItems: "center" }} mt="xl">
                  <Text fz={"lg"} color="dimmed">
                    {"O'qtuvchi:"}
                  </Text>
                  <Text fz={"lg"} c="blue.3" ml="sm">
                    {data.teacher_name}
                  </Text>
                </Box>

                <Text color="dimmed" mt={30}>
                  Build fully functional accessible web applications with ease –
                  Mantine includes more than 100 customizable components and
                  hooks to cover you in any situation
                </Text>
                <Rating defaultValue={2} size="xs" mt="md" />
                <Button
                  variant="gradient"
                  gradient={{ from: "blue.4", to: "blue.7" }}
                  size="xl"
                  className={classes.control}
                  mt={40}
                >
                  Kursni Saqlash
                </Button>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col md={6}>
            <div className={classes.content}>
              <Image
                width={"100%"}
                radius="md"
                src={data.photo}
                alt={data.name}
                sx={{
                  height: "400px",
                  overflow: "hidden",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
      <Container size={"xl"} p={0} mt={30}>
        <Text color="dimmed" tt={"uppercase"} fw={"bolder"} fz={"xl"} mb={30}>
          {"Darslar Ro'yxati"}
        </Text>
        <DashCourseRoodmap />
      </Container>
    </>
  );
};

export default index;
