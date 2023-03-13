import { useState } from "react";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  rem,
} from "@mantine/core";
import { TbHome2, TbGauge, TbLogout } from "react-icons/tb";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(45),
    height: rem(45),
    borderRadius: theme.radius.sm,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  url: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, url, active }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Link href={`${url}`}>
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton
          className={cx(classes.link, { [classes.active]: active })}
        >
          <Icon size="1.6rem" />
        </UnstyledButton>
      </Tooltip>
    </Link>
  );
}

const mockdata = [
  { icon: TbHome2, label: "Home", url: "/dashboard" },
  { icon: TbGauge, label: "Dashboard", url: "/dashboard/about" },
];

export default function DashboardNav() {
  const [active, setActive] = useState(2);
  const router = useRouter();

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={link.url === router.asPath}
    />
  ));

  return (
    <Navbar width={{ base: 65 }} p="xs" sx={{ position: "fixed" }}>
      <Navbar.Section grow>
        <Stack justify="center" spacing={6}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={TbLogout} label="Logout" url={""} />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
