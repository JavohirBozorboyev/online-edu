/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from "react";
import {
  createStyles,
  Navbar,
  UnstyledButton,
  Tooltip,
  Title,
  rem,
  Box,
  Tabs,
  ThemeIcon,
  ActionIcon,
  ScrollArea,
} from "@mantine/core";
import {
  TbHome2,
  TbGauge,
  TbDeviceDesktopAnalytics,
  TbFingerprint,
  TbCalendarStats,
  TbUser,
  TbSettings,
  TbBrandMantine,
  TbMessageCircle,
  TbPhoto,
  TbLayoutDashboard,
  TbPlayerPlayFilled,
  TbShoppingBag,
} from "react-icons/tb";
import DashVideoLinksGroup from "@/src/Page/Dashboard/Other/DashVideoLinksGroup";
import { useRouter } from "next/router";
import Link from "next/link";
// import { MantineLogo } from "@mantine/ds";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100%",
  },

  aside: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  main: {
    // flex: 1,
    width: "100%",

    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.white,
  },

  mainLink: {
    width: rem(44),
    height: rem(44),
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[8],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  title: {
    boxSizing: "border-box",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: rem(18),
    height: rem(60),
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: rem(60),
    paddingTop: theme.spacing.md,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: "border-box",
    display: "block",
    textDecoration: "none",
    // borderTopRightRadius: theme.radius.md,
    // borderBottomRightRadius: theme.radius.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}`,
    fontSize: theme.fontSizes.sm,
    // marginRight: theme.spacing.md,
    fontWeight: 500,
    height: rem(44),
    lineHeight: rem(44),

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  linkActive: {
    "&, &:hover": {
      borderLeftColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[0],
      color: theme.colors.blue[6],
    },
  },
}));

const mainLinksMockdata = [
  { icon: TbHome2, label: "Home", url: "/dashboard" },
  { icon: TbGauge, label: "Dashboard", url: "/dashboard/course" },
];

const linksMockdata = [
  "Security",
  "Settings",
  "Dashboard",
  "Releases",
  "Account",
  "Orders",
  "Clients",
  "Databases",
  "Pull Requests",
  "Open Issues",
  "Wiki pages",
];

const Links = [
  {
    label: "Kirish",
    icon: TbShoppingBag,
    url: "/dashboard/course/js",
  },
  {
    label: "1-dars",
    icon: TbPlayerPlayFilled,
    initiallyOpened: true,
    links: [
      { label: "Dars", link: "/dashboard/course/js/1dars" },
      { label: "Topshiriqlar", link: "" },
      { label: "Imtixon", link: "" },
    ],
  },
  {
    label: "2-dars",
    icon: TbPlayerPlayFilled,
    // initiallyOpened: true,
    links: [
      { label: "Dars", link: "" },
      { label: "Topshiriqlar", link: "" },
      { label: "Imtixon", link: "" },
    ],
  },
  {
    label: "3-dars",
    icon: TbPlayerPlayFilled,
    // initiallyOpened: true,
    links: [
      { label: "Dars", link: "" },
      { label: "Topshiriqlar", link: "" },
      { label: "Imtixon", link: "" },
    ],
  },
  {
    label: "4-dars",
    icon: TbPlayerPlayFilled,
    // initiallyOpened: true,
    links: [
      { label: "Dars", link: "" },
      { label: "Topshiriqlar", link: "" },
      { label: "Imtixon", link: "" },
    ],
  },
];

export default function DashCourseTabNavbar({ setOpened }: any) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Releases");
  const [activeLink, setActiveLink] = useState("Settings");
  const router = useRouter();

  const mainLinks = mainLinksMockdata.map((link, i) => (
    <Tabs.Tab key={i} p={"md"} value={link.url}>
      <ActionIcon component="div" variant={"light"} size={40} color={"blue"}>
        <link.icon size="1.4rem" />
      </ActionIcon>
    </Tabs.Tab>
  ));

  const links = linksMockdata.map((link) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: activeLink === link,
      })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </Link>
  ));

  return (
    <>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          {/* <div className={classes.logo}>
            <TbBrandMantine type="mark" size={30} />
          </div> */}
          <Tabs
            orientation="vertical"
            sx={{
              height: "100%",
            }}
            color="blue"
            onTabChange={(value) => router.push(`${value}`)}
            radius={"0"}
          >
            <Tabs.List>{mainLinks}</Tabs.List>
          </Tabs>
        </div>
        <div className={classes.main}>
          {/* <Title order={4} className={classes.title}>
            {active}
          </Title> */}

          {/* {links} */}
          <ScrollArea h={"100%"}>
            <DashVideoLinksGroup setOpened={setOpened} links={Links} />
          </ScrollArea>
        </div>
      </Navbar.Section>
    </>
  );
}
