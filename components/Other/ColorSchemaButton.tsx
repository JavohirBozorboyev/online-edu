import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconBrightnessDown, IconMoon } from "@tabler/icons-react";
import React, { memo } from "react";

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
          <IconMoon size="1.1rem" />
        ) : (
          <IconBrightnessDown size="1.2rem" />
        )}
      </ActionIcon>
    </div>
  );
};

export default memo(ColorSchemaButton);
