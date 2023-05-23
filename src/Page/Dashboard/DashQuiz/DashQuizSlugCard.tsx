import { useCardBg } from "@/styles/styleJs/useCardBg";
import { Badge, Button, Card, Grid, Group, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import DashQuizCardSkeleton from "./DashQuizCardSkeleton";

type Props = {
  quiz: {
    subcategories: any;
    name: string;
    id: number;
  };
  error: any;
  loading: any;
};

const DashQuizSlugCard = ({ quiz, loading, error }: Props) => {
  const { classes } = useCardBg();

  if (loading) {
    return <DashQuizCardSkeleton />;
  }
  if (error) {
    return (
      <>
        <Text size="xl" ta="center" my="xl">
          Server Bilan Xatolik Yuzaga Keldi{" "}
        </Text>
      </>
    );
  }
  

  return (
    <>
      <Grid>
        {quiz?.subcategories?.map((item: Props["quiz"]) => {
          return (
            <Grid.Col key={item.id} sm={6} lg={4} xl={3}>
              <Card
                className={classes.cardBg}
                shadow="sm"
                padding="lg"
                radius="sm"
              >
                <Group position="apart" mb="xs">
                  <Text weight={500}>{item.name}</Text>
                  <Badge variant="light" radius={"sm"}>
                    {"2"} - ta savol
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, vero. ...
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
