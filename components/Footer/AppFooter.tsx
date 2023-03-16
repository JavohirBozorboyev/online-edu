import { createStyles, Container, Group, ActionIcon, rem } from "@mantine/core";
import {
  TbBrandTwitter,
  TbBrandYoutube,
  TbBrandInstagram,
} from "react-icons/tb";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `${rem(1)} solid ${
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

export default function AppFooter() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner} size={'xl'}>
        {/* <MantineLogo size={28} /> */}
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <TbBrandTwitter size="1.05rem" />
          </ActionIcon>
          <ActionIcon size="lg">
            <TbBrandYoutube size="1.05rem" />
          </ActionIcon>
          <ActionIcon size="lg">
            <TbBrandInstagram size="1.05rem" />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
