/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import DashCourseRoodmap from "@/src/Page/Dashboard/DashCourse/DashCourseRoodmap";
import { useCardBg } from "@/styles/styleJs/useCardBg";
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
  Paper,
  Group,
  NavLink,
} from "@mantine/core";
import { IconGauge } from "@tabler/icons-react";

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

const index = (data: any) => {
  const router = useRouter();
  const { classes: Bg, theme } = useCardBg();

  console.log(data);

  return (
    <>
      <Container size="xl" px={0}>
        <Grid justify="space-between">
          <Grid.Col md={6}>
            <Paper p={"xs"} className={Bg.cardBg}>
              <video
                src=""
                controls
                width={"100%"}
                style={{ borderRadius: "4px" }}
              ></video>
            </Paper>
          </Grid.Col>
          <Grid.Col md={6}>
            <Paper p={"sm"}>
              <Text fz={"40px"} tt={"uppercase"} color="blue.4">
                {data?.name}
              </Text>
              <Group>
                <Text fz={"md"} color="" mt={"sm"}>
                  Teacher :
                </Text>
                <Text fz={"md"} color="blue.5" mt={"sm"}>
                  {data?.teacher_name}
                </Text>
              </Group>
              <Text color="dimmed" mt={"md"}>
                {data?.about}
              </Text>
              <Button mt={"md"} size="lg">
                Kursni Saqlash
              </Button>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
      <Container size={"xl"} p={0} mt={30}>
        <Text color="dimmed" tt={"uppercase"} fw={"bolder"} fz={"xl"} mb={'xl'}>
          {"Darslar Ro'yxati"}
        </Text>
        <Paper p={"md"} className={Bg.cardBg}>
          {data?.units.map((item: any) => {
            return (
              <NavLink
                label={item.name}
                childrenOffset={28}
                key={item.id}
                sx={{ overflow: "hidden", borderRadius: "4px" }}
              >
                {item.lessons.map((unit: any) => {
                  return (
                    <NavLink
                      label={unit.name}
                      key={unit.id}
                      sx={{ overflow: "hidden", borderRadius: "4px" }}
                    />
                  );
                })}
              </NavLink>
            );
          })}
        </Paper>
      </Container>
    </>
  );
};

export default index;

export async function getServerSideProps({ params }: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACE}/course/course/${params.courseSlug}/`
  );
  const data = await res.json();

  return { props: data };
}

//  <Image
//    width={"100%"}
//    radius="md"
//    src={`${process.env.NEXT_PUBLIC_URL_BACE}/${data?.photo}`}
//    alt={data?.name}
//    sx={{
//      height: "400px",
//      overflow: "hidden",
//      objectFit: "cover",
//      borderRadius: "8px",
//    }}
//  />;
