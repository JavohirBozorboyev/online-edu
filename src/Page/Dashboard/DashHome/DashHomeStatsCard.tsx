import {
  createStyles,
  Group,
  Paper,
  SimpleGrid,
  Text,
  rem,
} from "@mantine/core";
import {
  TbUserPlus,
  TbDiscount2,
  TbReceipt2,
  TbCoin,
  TbArrowUpRight,
  TbArrowDownRight,
} from "react-icons/tb";

const useStyles = createStyles((theme) => ({
  value: {
    fontSize: rem(24),
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

const icons = {
  user: TbUserPlus,
  discount: TbDiscount2,
  receipt: TbReceipt2,
  coin: TbCoin,
};

interface StatsGridProps {
  data: {
    title: string;
    icon: keyof typeof icons;
    value: string;
    diff: number;
  }[];
}

const data = [
  {
    title: "Revenue",
    icon: TbCoin,
    value: "13,456",
    diff: 34,
  },
  {
    title: "Revenue",
    icon: TbCoin,
    value: "13,456",
    diff: 34,
  },
  {
    title: "Revenue",
    icon: TbCoin,
    value: "13,456",
    diff: 34,
  },
  {
    title: "Revenue",
    icon: TbCoin,
    value: "13,456",
    diff: 34,
  },
  
];

export default function DashHomeStatsCard() {
  const { classes } = useStyles();
  const stats = data.map((stat, i) => {
    const DiffIcon = stat.diff > 0 ? TbArrowUpRight : TbArrowDownRight;

    return (
      <Paper  p="md" key={i}>
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <stat.icon className={classes.icon} size="1.4rem" />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
          <Text
            color={stat.diff > 0 ? "teal" : "red"}
            fz="sm"
            fw={500}
            className={classes.diff}
          >
            <span>{stat.diff}%</span>
            <DiffIcon size="1rem" />
          </Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          Compared to previous month
        </Text>
      </Paper>
    );
  });
  return (
    <>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
      >
        {stats}
      </SimpleGrid>
    </>
  );
}
