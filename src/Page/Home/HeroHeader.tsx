import {
  createStyles,
  Title,
  Text,
  Container,
  rem,
  Box,
  Paper,
} from "@mantine/core";

import { memo } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    background:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    minHeight: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(40),
      paddingBottom: rem(40),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(60),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(40),
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
    },
  },
}));

const HeroHeader = () => {
  const { classes } = useStyles();

  return (
    <>
      <Paper className={classes.wrapper} withBorder radius={"0"}>
        <div className={classes.inner}>
          <Title className={classes.title}>
            <Text component="span" className={classes.highlight} inherit>
              Online Edu
            </Text>{" "}
            Academiya
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className={classes.description}>
              {` Sifatli ta'lim, natijaviylik, mas'uliyatlilik. Avval tarbiya,
              keyin ta'lim!`}
            </Text>
          </Container>
        </div>
      </Paper>
    </>
  );
};

export default memo(HeroHeader);
