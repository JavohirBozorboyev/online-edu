/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, memo, useCallback, useEffect } from "react";
import { Menu, Avatar, Button, Skeleton } from "@mantine/core";
import { useRouter } from "next/router";
import { deleteCookie, hasCookie } from "cookies-next";
import {
  IconLayoutDashboard,
  IconLogout,
  IconLogin,
} from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";

const UserAvatarMenu = () => {
  const router = useRouter();
  const cook = hasCookie("_token") || "Loading";

  const { data: session, status } = useSession();

  const SignOut = useCallback(() => {
    signOut();
  }, []);

  return (
    <div>
      {status == "loading" ? (
        <>
          <Skeleton height={40} width={40} />
        </>
      ) : status == "authenticated" ? (
        <Menu
          shadow="md"
          width={200}
          transitionProps={{
            duration: 350,
          }}
          withArrow
        >
          <Menu.Target>
            <Avatar size={"md"} variant="light" color="blue" />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Account</Menu.Label>
            <Menu.Item
              onClick={() => {
                router.push("/dashboard");
              }}
              icon={<IconLayoutDashboard size={"1rem"} />}
            >
              Dashbaord
            </Menu.Item>
            <Menu.Item
              onClick={SignOut}
              color="blue"
              icon={<IconLogout size={"1rem"} />}
            >
              Chiqish
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <Button
          onClick={() => {
            router.push("/login/signin");
          }}
        >
          Kirish
        </Button>
      )}
    </div>
  );
};

export default memo(UserAvatarMenu);
