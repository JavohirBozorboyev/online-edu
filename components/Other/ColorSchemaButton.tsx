import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import React, { memo } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

type Props = {};

const ColorSchemaButton = (props: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <div>
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
        size={"lg"}
      >
        {colorScheme !== "dark" ? (
          <MdOutlineDarkMode size="1.2rem" />
        ) : (
          <MdOutlineLightMode size="1.2rem" />
        )}
      </ActionIcon>
    </div>
  );
};

export default memo(ColorSchemaButton);
