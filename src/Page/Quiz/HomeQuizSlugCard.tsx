import { useCardBg } from "@/styles/styleJs/useCardBg";
import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Skeleton,
  Text,
} from "@mantine/core";
import React, { useCallback } from "react";

type Props = {
  quiz: any;
  openModal: any;
  setQuziId: any;
};

const HomeQuizSlugCard = ({
  quiz,

  openModal,
  setQuziId,
}: Props) => {
  const { classes } = useCardBg();

  const Startquiz = (e: number) => {
    setQuziId(e);
    openModal();
  };
  return (
    <div>
      <Grid>
        {quiz.free_subcategories.map((item: any) => {
          return (
            <Grid.Col sm={6} lg={4} key={item.id}>
              <Card
                className={classes.cardBg}
                shadow="sm"
                padding="lg"
                radius="sm"
              >
                <Group position="apart" mb="xs">
                  <Text weight={500}>{item.name}</Text>
                  <Badge variant="light" radius={"sm"}>
                    {"free"}
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus ducimus accusamus dolore sint perferendis
                  praesentium optio quasi labore esse eius!
                </Text>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="sm"
                  onClick={() => Startquiz(item.id)}
                >
                  {"Barchasini Ko'rish"}
                </Button>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default HomeQuizSlugCard;
