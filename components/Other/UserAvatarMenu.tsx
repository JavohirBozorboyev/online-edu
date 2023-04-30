import React, { memo } from "react";

import { Menu, Avatar, Button } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";
import router from "next/router";
import { MdLogin } from "react-icons/md";
import { TbLayoutDashboard, TbLogout } from "react-icons/tb";

const UserAvatarMenu = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
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
              icon={<TbLayoutDashboard size={"1rem"} />}
            >
              Dashbaord
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                signOut();
              }}
              color="blue"
              icon={<TbLogout size={"1rem"} />}
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
          leftIcon={<MdLogin size="1rem" />}
        >
          Kirish
        </Button>
      )}
    </div>
  );
};

export default memo(UserAvatarMenu);
