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
import Link from "next/link";
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
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "capitalize",
  },
}));

interface CardProps {
  image: string;
  teacher: string;
  name: string;
  url: string;
}

function Card({ image, teacher, name, url }: CardProps) {
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
        <Text className={classes.category} c="blue.2" size="xs">
          {teacher}
        </Text>
        <Title order={3} className={classes.title}>
          {name}
        </Title>
      </div>
      <Link href={`/course/${url}`}>
        <Button
          rightIcon={<IconArrowNarrowRight />}
          variant="outline"
          color="gray.0"
        >
          Kurs haqida malumotlar
        </Button>
      </Link>
    </Paper>
  );
}

function HomeCourse() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/course/course/`,
    { refreshInterval: 1000 * 60 * 60 }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <>
        <Grid>
          <Grid.Col md={6}>
            <Skeleton height={300} />
          </Grid.Col>
          <Grid.Col md={6}>
            <Skeleton height={300} />
          </Grid.Col>
        </Grid>
      </>
    );

  return (
    <>
      <Grid>
        {data.map((item: any) => {
          return (
            <Grid.Col md={6} key={item.id}>
              <Card
                image={item.photo}
                teacher={item.teacher_name}
                name={item.name}
                url={item.slug}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
}

export default HomeCourse;
