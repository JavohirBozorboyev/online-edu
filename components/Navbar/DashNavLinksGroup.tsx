import { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,
    transition: "all 0.5s ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    paddingLeft: rem(31),
    marginLeft: rem(30),
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    transition: "all 0.5s ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}));

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  url?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({
  icon: Icon,
  label,
  url,
  initiallyOpened,
  links,
}: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? TbChevronRight : TbChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    <Link href={link.link} key={link.label}>
      <Text<"div"> component="div" className={classes.link}>
        {link.label}
      </Text>
    </Link>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        {!hasLinks ? (
          <Link href={`${url}`}>
            <Group position="apart" spacing={0}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ThemeIcon
                  variant="light"
                  size={30}
                  sx={(theme) => ({
                    color:
                      theme.colorScheme === "dark"
                        ? theme.colors.yellow[4]
                        : theme.colors.blue[6],
                  })}
                >
                  <Icon size="1.1rem" />
                </ThemeIcon>
                <Box ml="md">{label}</Box>
              </Box>
              {hasLinks && (
                <ChevronIcon
                  className={classes.chevron}
                  size="1rem"
                  style={{
                    transform: opened
                      ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                      : "none",
                  }}
                />
              )}
            </Group>
          </Link>
        ) : (
          <Group position="apart" spacing={0}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon
                variant="light"
                size={30}
                sx={(theme) => ({
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.yellow[4]
                      : theme.colors.blue[6],
                })}
              >
                <Icon size="1.1rem" />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
            {hasLinks && (
              <ChevronIcon
                className={classes.chevron}
                size="1rem"
                style={{
                  transform: opened
                    ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                    : "none",
                }}
              />
            )}
          </Group>
        )}
      </UnstyledButton>
      {hasLinks ? (
        <Collapse transitionDuration={500} in={opened}>
          {items}
        </Collapse>
      ) : null}
    </>
  );
}

interface DashNavLinkType {
  icon?: React.FC<any>;
  label?: string;
  url?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}
export default function DashNavLinksGroup({ links }: any) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
        borderRadius: "4px",
        overflowX: "hidden",
      })}
    >
      {links.map((item: any, i: number) => {
        return <LinksGroup key={i} {...item} />;
      })}
    </Box>
  );
}
