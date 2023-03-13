import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Container,
  Accordion,
  ActionIcon,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

import { MdOutlineLightMode, MdOutlineDarkMode, MdLogin } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import { HiOutlineCode } from "react-icons/hi";
import { TbBrandMantine } from "react-icons/tb";
import { useMantineColorScheme } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.xs}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: HiOutlineCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
    url: "",
  },
];

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <Header height={60} sx={{ position: "fixed" }} px={'sm'}>
        <>
          <Group position="apart" sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <ActionIcon
                onClick={toggleDrawer}
                variant="light"
                className={classes.hiddenDesktop}
              >
                <HiMenuAlt4 size="1.2rem" />
              </ActionIcon>
              <Link
                href={"/"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <TbBrandMantine size={42} color={theme.fn.primaryColor()} />
              </Link>
            </Box>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",

                justifyContent: "center",
              }}
              className={classes.hiddenMobile}
            >
              <Link href={"/"} className={classes.link}>
                Home
              </Link>
              <Link href={"/"} className={classes.link}>
                Kurslar
              </Link>
              <Link href={"/dashboard"} className={classes.link}>
                Kabinet
              </Link>
            </Box>

            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <ActionIcon
                variant="light"
                onClick={() => toggleColorScheme()}
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.yellow[4]
                      : theme.colors.blue[6],
                })}
              >
                {colorScheme !== "dark" ? (
                  <MdOutlineDarkMode size="1.2rem" />
                ) : (
                  <MdOutlineLightMode size="1.2rem" />
                )}
              </ActionIcon>

              <Group className={classes.hiddenMobile}>
                <Button leftIcon={<MdLogin size="1rem" />}>Kirish</Button>
              </Group>
            </Box>
          </Group>
        </>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="75%"
        padding="md"
        title=" "
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(70)})`} mx="-md">
          {/* <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          /> */}

          <Group position="center" grow pb="xl" px="md">
            <Button size="lg" leftIcon={<MdLogin size="1rem" />}>
              Kirish
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
