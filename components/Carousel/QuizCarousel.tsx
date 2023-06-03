import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
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

const useStyles = createStyles((theme) => ({
  bg: {
    background:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

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

function QuizCarousel() {
  const { classes, theme } = useStyles();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

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

  const sk = () => {
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
  };

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card className={classes.bg} shadow="sm" padding="lg" radius="sm">
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

        <Button variant="light" color="blue" fullWidth mt="md" radius="sm">
          Boshlash
        </Button>
      </Card>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={"30%"}
      breakpoints={[
        { maxWidth: "xs", slideSize: "100%", slideGap: 5 },
        { maxWidth: "sm", slideSize: "50%", slideGap: 5 },
        { maxWidth: "md", slideSize: "33.3333%", slideGap: 5 },
      ]}
      slideGap="md"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      loop
    >
      {slides}
    </Carousel>
  );
}

export default QuizCarousel;
