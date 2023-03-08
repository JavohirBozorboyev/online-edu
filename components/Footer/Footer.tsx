import {
  createStyles,
  Container,
  Group,
  Anchor,
  rem,
  Text,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(40),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

const links = [
  { label: "Home", link: "/" },
  { label: "Dashboard", link: "/dashboard" },
  { label: "Galarey", link: "/" },
  { label: "Link", link: "/" },
];
export default function Footer() {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Link key={link.label} href={link.link}>
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner} size={"xl"}>
        <Text>Edu-uz</Text>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
