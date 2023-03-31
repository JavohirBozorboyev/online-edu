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
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,
    borderRadius: "4px",
    transition: "all 0.4s ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
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
    // color:
    //   theme.colorScheme === "dark"
    //     ? theme.colors.dark[0]
    //     : theme.colors.gray[7],
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    transition: "all 0.4s ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color:
        theme.colorScheme === "dark" ? theme.white : theme.colors.yellow[5],
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
  setOpenedNav?: any;
}

export function LinksGroup({
  icon: Icon,
  label,
  url,
  initiallyOpened,
  links,
  setOpenedNav,
}: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? TbChevronRight : TbChevronLeft;
  const router = useRouter();
  const items = (hasLinks ? links : []).map((link) => (
    <Link href={link.link} key={link.label} onClick={() => setOpenedNav(false)}>
      <Text
        color={`${
          router.route === link.link
            ? theme.colorScheme === "dark"
              ? theme.colors.yellow[2]
              : theme.colors.yellow[5]
            : theme.colorScheme === "dark"
            ? theme.colors.blue[2]
            : theme.colors.blue[5]
        }`}
        className={classes.link}
      >
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
        {url ? (
          <Link href={`${url}`} onClick={() => setOpenedNav(false)}>
            <Group position="apart" spacing={0}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ThemeIcon
                  variant="light"
                  color={`${router.route === url ? "yellow" : "blue"}`}
                  size={30}
                >
                  <Icon size="1.1rem" />
                </ThemeIcon>
                <Text
                  ml="md"
                  color={`${
                    router.route === url
                      ? theme.colorScheme === "dark"
                        ? theme.colors.yellow[2]
                        : theme.colors.yellow[5]
                      : theme.colorScheme === "dark"
                      ? theme.colors.blue[2]
                      : theme.colors.blue[5]
                  }`}
                >
                  {label}
                </Text>
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
              <ThemeIcon variant="light" size={30}>
                <Icon size="1.1rem" />
              </ThemeIcon>
              <Text
                ml="md"
                color={`${
                  theme.colorScheme === "dark"
                    ? theme.colors.blue[2]
                    : theme.colors.blue[5]
                } `}
              >
                {label}
              </Text>
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

interface NavType {
  links: any;
  setOpened?: any;
}

export default function NavbarLinksGroup({ links, setOpened }: NavType) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        borderRadius: "4px",
      })}
    >
      {links?.map(
        (item: JSX.IntrinsicAttributes & LinksGroupProps, i: number) => {
          return <LinksGroup key={i} {...item} setOpenedNav={setOpened} />;
        }
      )}
    </Box>
  );
}
