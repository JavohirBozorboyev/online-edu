import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useCardBg } from "@/styles/styleJs/useCardBg";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Card,
  Badge,
  Group,
  Grid,
  Skeleton,
} from "@mantine/core";
import useSWR from "swr";
import Link from "next/link";

function HomeQuizCard() {
  const { classes } = useCardBg();

  const {
    data: quiz,
    error,
    isLoading,
  } = useSWR("https://onlineedu.pythonanywhere.com/api/examp/free-category/");

  if (error) {
    return (
      <>
        <Text size="xl" ta="center">
          Server Error
        </Text>
      </>
    );
  }

  if (isLoading) {
    return (
      <Grid>
        <Grid.Col md={6} lg={3}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
      </Grid>
    );
  }

  return (
    <>
      <Grid>
        {quiz.map((item: any) => {
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

                <Link href={`quiz/${item.slug}`}>
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
    </>
  );
}

export default HomeQuizCard;
