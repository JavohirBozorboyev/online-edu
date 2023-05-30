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
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

type Props = {};

const HomeQuizSlugCard = (props: Props) => {
  const { classes } = useCardBg();
  const router = useRouter();

  const { quizSlug } = router.query;

  const {
    data: quiz,
    error,
    isLoading,
  } = useSWR(
    `https://onlineedu.pythonanywhere.com/api/examp/free-category/${quizSlug}/`
  );

  if (error) {
    return (
      <>
        <Text size="xl" ta="center">
          Server Error
        </Text>
      </>
    );
  }
  console.log(quiz);

  if (isLoading) {
    return (
      <Grid>
        <Grid.Col md={6} lg={4}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
      </Grid>
    );
  }
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

                <Link href={`/quiz/${quizSlug}/${item.slug}`}>
                  <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="sm"
                  >
                    {"Barchasini Ko'rish"}
                  </Button>
                </Link>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default HomeQuizSlugCard;
