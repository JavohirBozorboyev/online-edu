import { useCardBg } from "@/styles/styleJs/useCardBg";
import { Badge, Button, Card, Grid, Group, Text } from "@mantine/core";
import React from "react";

type Props = {};

const data = [
  {
    title: "Javascript",
    text: " Boshlang'ich darslardan 30 ta savol. Harbir Savol uchun 2 daqiqa beriadi.",
    type: "free",
    time: " 12.02.2023",
  },
  {
    title: "Python",
    text: " Boshlang'ich darslardan 30 ta savol. Harbir Savol uchun 2 daqiqa beriadi.",
    type: "free",
    time: " 07.02.2023",
  },
  {
    title: "Java",
    text: " Boshlang'ich darslardan 30 ta savol. Harbir Savol uchun 2 daqiqa beriadi.",
    type: "free",
    time: " 14.02.2023",
  },
  {
    title: "C++",
    text: " Boshlang'ich darslardan 30 ta savol. Harbir Savol uchun 2 daqiqa beriadi.",
    type: "free",
    time: " 05.02.2023",
  },
];

const DashQuizCard = (props: Props) => {
  const { classes } = useCardBg();
  return (
    <>
      <Grid>
        {data.map((item, i) => {
          return (
            <Grid.Col key={i} sm={6} lg={4}>
              <Card
                className={classes.cardBg}
                shadow="sm"
                padding="lg"
                radius="sm"
              >
                <Group position="apart" mb="xs">
                  <Text weight={500}>{item.title}</Text>
                  <Badge variant="light" radius={"sm"}>
                    {item.type}
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

export default DashQuizCard;
