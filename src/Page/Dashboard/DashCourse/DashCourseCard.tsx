import {
  Card,
  Group,
  Badge,
  Button,
  Image,
  Text,
  Grid,
  Modal,
  createStyles,
  Skeleton,
  Box,
  Paper,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import DashCourseCardStats from "./DashCourseCardStats";
import Link from "next/link";
import useSWR from "swr";
import { getCookie } from "cookies-next";
import axios from "axios";
import {
  IconAlertSquareRoundedFilled,
  IconChartBar,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useSession } from "next-auth/react";

type Props = {};

const useStyles = createStyles((theme) => ({
  cardBg: {
    background:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
}));

const Data = [
  {
    label: "Tugallandi",
    count: "17",
    part: 60,
    color: "blue",
  },
  {
    label: "Tugallanmadi",
    count: "7",
    part: 40,
    color: "yellow",
  },
];

const DashCourseCard = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const fetcher = (url: string) =>
    axios
      .get(url, { headers: { Authorization: "Bearer " + getCookie("token") } })
      .then((res) => res.data);

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_URL_BACE}/course/my-course/`,
    fetcher,
    { refreshInterval: 100 }
  );

  if (error)
    return (
      <>
        <Text>Error</Text>
      </>
    );
  if (isLoading)
    return (
      <>
        <Grid>
          <Grid.Col md={6}>
            <Skeleton height={300} />
          </Grid.Col>
          <Grid.Col md={6}>
            <Skeleton height={300} />
          </Grid.Col>
          <Grid.Col md={6}>
            <Skeleton height={300} />
          </Grid.Col>
          <Grid.Col md={6}>
            <Skeleton height={300} />
          </Grid.Col>
        </Grid>
      </>
    );

  return (
    <>
      <Grid>
        {data.length == 0 ? (
          <>
            <Grid.Col>
              <Paper
                className={classes.cardBg}
                radius={"sm"}
                p={"md"}
                sx={{
                  minHeight: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <IconAlertSquareRoundedFilled
                  style={{
                    color:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[3]
                        : theme.colors.gray[6],
                  }}
                  size={"6rem"}
                />
                <Text
                  sx={{
                    color:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[3]
                        : theme.colors.gray[6],
                  }}
                  tt={"uppercase"}
                  fz={"lg"}
                  fw={"bolder"}
                  mt={"sm"}
                >
                  Saqlangan Kurslar mavjud emas !
                </Text>
                <Link href={"/course"}>
                  <Button mt="xl" size="md" px={"xl"}>
                    {" Kurslar Qo'shish"}
                  </Button>
                </Link>
              </Paper>
            </Grid.Col>
          </>
        ) : (
          data.map((item: any) => {
            return (
              <Grid.Col md={6} key={item.id}>
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="sm"
                  className={classes.cardBg}
                >
                  <Card.Section>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL_BACE}/${item.course_photo}`}
                      height={200}
                      alt="Norway"
                    />
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{item.course_name}</Text>
                    <Badge variant="light">Active</Badge>
                  </Group>

                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Text size="sm" color="dimmed">
                      {"O'qtuvchi:"}
                    </Text>
                    <Text size="sm" color="blue">
                      {item.course_teacher_name}
                    </Text>
                  </Box>

                  <Text size={"sm"} c="blue.3" mt={"md"}>
                    {item.teacher_name}
                  </Text>

                  <Grid mt={"md"}>
                    <Grid.Col span={"auto"}>
                      <Button
                        leftIcon={<IconChartBar size={"1.2rem"} />}
                        onClick={open}
                        color="teal"
                        radius="sm"
                        variant="light"
                        fullWidth
                      >
                        Kurs Statistikasi
                      </Button>
                    </Grid.Col>
                    <Grid.Col span={"auto"}>
                      <Link href={`/dashboard/course/${item.course_slug}`}>
                        <Button
                          leftIcon={<IconPlayerPlayFilled size={"1.2rem"} />}
                          fullWidth
                          color="blue"
                          radius="sm"
                          variant="light"
                        >
                          Kursni Boshlash
                        </Button>
                      </Link>
                    </Grid.Col>
                  </Grid>
                </Card>
              </Grid.Col>
            );
          })
        )}
      </Grid>

      <Modal size={"lg"} opened={opened} onClose={close} title="Statistika">
        <DashCourseCardStats total={"Javascript"} diff={0} data={Data} />
      </Modal>
    </>
  );
};

export default DashCourseCard;
