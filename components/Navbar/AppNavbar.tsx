/* eslint-disable react/jsx-key */
import {
  Button,
  Divider,
  Navbar,
  ScrollArea,
  Skeleton,
  Text,
} from "@mantine/core";
import React, { useMemo } from "react";

import { DashLinkData } from "@/data/NavLinkData";

import { IconCalendarStats } from "@tabler/icons-react";
import NavLinksGroup from "./NavLinksGroup";
import { SideBarData, UserData } from "@/data/SideBarData";
import { useSession } from "next-auth/react";

const mockdata = {
  label: "Releases",
  icon: IconCalendarStats,
  url: "/",
  initiallyOpened: true,
  links: [
    { label: "Upcoming releases", link: "/" },
    { label: "Previous releases", link: "/" },
    { label: "Releases schedule", link: "/" },
  ],
};

type Props = {
  opened: boolean;
  setOpened: any;
};

const AppNavbar = ({ opened, setOpened }: Props) => {
  const DashLink = DashLinkData();
  const { status } = useSession();

  return (
    <div>
      <Navbar
        p="0"
        hiddenBreakpoint="sm"
        hidden={!opened}
        withBorder={false}
        width={{ sm: 250 }}
        height={"100%"}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
      >
        {/* <NavbarLinksGroup links={DashLink} setOpened={setOpened} /> */}

        <ScrollArea pb={"50px"}>
          {SideBarData.map((item) => {
            return <NavLinksGroup {...item} key={item.label} />;
          })}

          {status == "loading" ? (
            <>
              {" "}
              <Skeleton height={200} radius="xs" mx={"md"} my={"sm"} />
            </>
          ) : null}
          {status == "authenticated" ? (
            <>
              <Divider
                label="User"
                sx={(theme) => ({
                  marginLeft: theme.spacing.md,
                  fontWeight: 700,
                  color: theme.colors.gray[6],
                })}
                labelPosition="left"
              />
              {UserData.map((item) => {
                return <NavLinksGroup {...item} key={item.label} />;
              })}
            </>
          ) : null}
        </ScrollArea>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
