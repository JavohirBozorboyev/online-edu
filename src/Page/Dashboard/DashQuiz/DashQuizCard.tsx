import { useCardBg } from "@/styles/styleJs/useCardBg";
import { Badge, Button, Card, Grid, Group, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import DashQuizCardSkeleton from "./DashQuizCardSkeleton";

type Props = {
  data: {
    body: string;
    id: number;
    parent: number | null;
    slug: string;
    name: string;
  }[];
  error: any;
  loading: boolean;
};

const DashQuizCard = ({ data, error, loading }: Props) => {
  const { classes } = useCardBg();
  if (loading) {
    return <DashQuizCardSkeleton />;
  }
  return (
    <>
      <Grid>
        {data
          .filter((fil) => fil.parent === null)
          .map((item, i) => {
            return (
              <Grid.Col key={i} sm={6} lg={4}>
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
                    {item.body.slice(0, 80)}...
                  </Text>
                  <Text size="sm" color="blue" mt={"sm"}>
                    {item.slug}
                  </Text>

                  <Link href={`quiz/${item.slug}`}>
                    <Button
                      variant="light"
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="sm"
                    >
                      Boshlash
                    </Button>
                  </Link>
                </Card>
              </Grid.Col>
            );
          })}
      </Grid>
    </>
  );
};

export default DashQuizCard;
