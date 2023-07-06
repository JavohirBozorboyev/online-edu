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
import {
  IconAlertSquare,
  IconAlertSquareRounded,
  IconAlertSquareRoundedFilled,
  IconArrowNarrowRight,
  IconBasket,
  IconShoppingBag,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

type Props = {
  Course: any;
};

const CourseCard = ({ Course }: Props) => {
  const { classes, theme } = useCardBg();

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
                    src={item.photo}
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
                      leftIcon={<IconBasket  />}
                      // variant="light"
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="sm"
                    >
                      Sotib Olish
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
