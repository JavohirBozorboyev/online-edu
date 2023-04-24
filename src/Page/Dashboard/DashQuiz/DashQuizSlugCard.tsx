import { useCardBg } from "@/styles/styleJs/useCardBg";
import { Badge, Button, Card, Grid, Group, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

type Props = {};

const data = [
  {
    title: "Unit-1",
    text: " Boshlang'ich darslardan 30 ta savol. Harbir Savol uchun 2 daqiqa beriadi.",
    type: "free",
    time: " 12.02.2023",
    len: 30,
  },
  {
    title: "Unit-2",
    text: " Boshlang'ich darslardan 30 ta savol. Harbir Savol uchun 2 daqiqa beriadi.",
    type: "free",
    time: " 07.02.2023",
    len: 10,
  },
  {
    title: "Unit-3",
    text: " Boshlang'ich darslardan 30 ta savol. Harbir Savol uchun 2 daqiqa beriadi.",
    type: "free",
    time: " 14.02.2023",
    len: 20,
  },
  {
    title: "Unit-4",
    text: " Boshlang'ich darslardan 30 ta savol. Harbir Savol uchun 2 daqiqa beriadi.",
    type: "free",
    time: " 05.02.2023",
    len: 25,
  },
];

const DashQuizSlugCard = (props: Props) => {
  const { classes } = useCardBg();
  return (
    <>
      <Grid>
        {data.map((item, i) => {
          return (
            <Grid.Col key={i} sm={6} lg={4} xl={3}>
              <Card
                className={classes.cardBg}
                shadow="sm"
                padding="lg"
                radius="sm"
              >
                <Group position="apart" mb="xs">
                  <Text weight={500}>{item.title}</Text>
                  <Badge variant="light" radius={"sm"}>
                    {item.len} - ta savol
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  {item.text.slice(0, 80)}...
                </Text>
                <Text size="sm" color="blue" mt={"sm"}>
                  {item.time}
                </Text>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="sm"
                >
                  Boshlash
                </Button>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default DashQuizSlugCard;
