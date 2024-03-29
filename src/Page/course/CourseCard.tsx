import { useCardBg } from "@/styles/styleJs/useCardBg";
import {
  Badge,
  Box,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Paper,
  Text,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconAlertSquareRoundedFilled,
  IconArrowNarrowRight,
  IconPlayerPlay,
} from "@tabler/icons-react";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import React, { useCallback } from "react";

type Props = {
  Course: any;
};

const CourseCard = ({ Course }: Props) => {
  const { classes, theme } = useCardBg();

  const AddCourse = useCallback((id: any, name: string) => {
    let config = {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    };
    try {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_URL_BACE}/course/my-course/`,
          {
            course: id,
          },
          config
        )
        .then((res) => {
          console.log(res);

          if (res.status == 200 && res.data.message) {
            notifications.show({
              title: name,
              message: res.data.message,
            });
          }
          if (res.data.error) {
            notifications.show({
              title: name,
              message: res.data.error,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Grid gutter="xs">
        {Course.length == 0 && (
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
                fz={"xl"}
                fw={"bolder"}
                mt={"sm"}
              >
                Kurslar Topilmadi
              </Text>
            </Paper>
          </Grid.Col>
        )}
        {Course.map((item: any) => {
          return (
            <Grid.Col md={6} key={item.id}>
              <Card
                shadow="sm"
                padding="xs"
                radius="sm"
                // withBorder
                className={classes.cardBg}
              >
                <Card.Section p={"xs"}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL_BACE}/${item.photo}`}
                    height={260}
                    alt="Norway"
                    radius={"xs"}
                  />
                </Card.Section>

                <Group position="apart" mt="xs" mb="xs">
                  <Text weight={500}>{item.name}</Text>
                  <Badge variant="light">
                    {item.cost} {"So'm"}
                  </Badge>
                </Group>

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Text size="sm" color="dimmed">
                    {"O'qtuvchi:"}
                  </Text>
                  <Text size="sm" color="blue">
                    {item.teacher_name}
                  </Text>
                </Box>

                <Grid>
                  <Grid.Col span={"auto"}>
                    <Button
                      leftIcon={<IconPlayerPlay />}
                      // variant="light"
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="sm"
                      onClick={() => AddCourse(item.id, item.name)}
                    >
                      Kursni Saqlash
                    </Button>
                  </Grid.Col>
                  <Grid.Col span={"auto"}>
                    <Link href={`/course/${item.slug}`}>
                      <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        mt="md"
                        radius="sm"
                        rightIcon={<IconArrowNarrowRight />}
                      >
                        Malumotlar
                      </Button>
                    </Link>
                  </Grid.Col>
                </Grid>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default CourseCard;
