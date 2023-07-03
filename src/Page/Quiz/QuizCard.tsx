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

type Props = {
  data: any;
};

const QuizCard = ({ data }: Props) => {
  const { classes } = useCardBg();
  const router = useRouter();

  return (
    <div>
      <Grid>
        {data.map((item: any) => {
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

                <Link href={`/quiz/${item.slug}`}>
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

export default QuizCard;
