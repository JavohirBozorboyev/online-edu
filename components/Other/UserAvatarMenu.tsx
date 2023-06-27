import React, { useState, memo, useCallback } from "react";
import { Menu, Avatar, Button } from "@mantine/core";
import { useRouter } from "next/router";
import { deleteCookie, hasCookie } from "cookies-next";
import { IconLayoutDashboard, IconLogout, IconLogin } from "@tabler/icons-react";

const UserAvatarMenu = () => {
  const router = useRouter();
  const cook = hasCookie("_token");

  const SignOut = useCallback(() => {
    deleteCookie("_token");
    deleteCookie("_refresh_token");
    router.reload();
  }, [router]);
  return (
    <>
      {true ? (
        <Menu
          shadow="md"
          width={200}
          transitionProps={{
            duration: 350,
          }}
          withArrow
        >
          <Menu.Target>
            <Avatar size={"32px"} variant="light" color="blue" />
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
            router.push("/dashboard");
          }}
          leftIcon={<IconLogin size="1rem" />}
        >
          Kirish
        </Button>
      )}
    </>
  );
};

export default memo(UserAvatarMenu);
