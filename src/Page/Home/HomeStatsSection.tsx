import { createStyles, Text, rem, Container } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    borderRadius: theme.radius.sm,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
    margin: "60px 0",
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[7],
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
  },

  count: {
    color: theme.colors.blue[6],
    fontSize: rem(32),
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    marginTop: rem(5),
  },

  stat: {
    flex: 1,

    "& + &": {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan("sm")]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}));

interface StatsGroupProps {
  data: { title: string; stats: string; description: string }[];
}

const data = [
  {
    stats: "245",
    title: "Users",
    description: "Bizning Platformada 245 dan ortiq foydalanuvchilar mavjud.",
  },
  {
    stats: "4",
    title: "Courses",
    description: "Bizning Platformada 245 dan ortiq foydalanuvchilar mavjud.",
  },
  {
    stats: "17",
    title: "Teachers",
    description: "Bizning Platformada 245 dan ortiq foydalanuvchilar mavjud.",
  },
];
export default function HomeStatsSection() {
  const { classes } = useStyles();
  const stats = data?.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return (
    <>
      <Container size={"xl"} p={"0"}>
        <div className={classes.root}>{stats}</div>
      </Container>
    </>
  );
}
