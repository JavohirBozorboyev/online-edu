import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Skeleton,
  Grid,
} from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import useSWR from "swr";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
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

interface CardProps {
  image: string;
  teacher: string;
  name: string;
}

function Card({ image, teacher, name }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{
        background: `linear-gradient(45deg, #000000b8, #000000bf) ,url(${image})`,
        backgroundSize: "cover",
      }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {teacher} Teacher Ism Familiyasi
        </Text>
        <Title order={3} className={classes.title}>
          {name}
        </Title>
      </div>
      <Button rightIcon={<IconArrowNarrowRight />}>
        Kurs haqida malumotlar
      </Button>
    </Paper>
  );
}

function HomeCourse() {
  const theme = useMantineTheme();
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/course/course/`,
    { refreshInterval: 1000 * 60 * 60 }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <>
        <Skeleton height={200} />
      </>
    );

  console.log(data);

  return (
    <>
      <Grid>
        {data.map((item: any) => {
          return (
            <Grid.Col md={6} key={item.id}>
              <Card
                image={"http://kurs-sp.ru/assets/images/news/1662129323.jpg"}
                teacher={item.teacher}
                name={item.name}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
}

export default HomeCourse;
