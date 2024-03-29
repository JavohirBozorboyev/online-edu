import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import React, { memo } from "react";

type Props = {};

const ColorSchemaButton = (props: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <div>
      <Group position="center" my="xl">
        <ActionIcon
          onClick={() => toggleColorScheme()}
          size="lg"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[0],
            color:
              theme.colorScheme === "dark"
                ? theme.colors.yellow[4]
                : theme.colors.blue[6],
          })}
        >
          {colorScheme === "dark" ? (
            <IconSun size="1.2rem" />
          ) : (
            <IconMoonStars size="1.2rem" />
          )}
        </ActionIcon>
      </Group>
    </div>
  );
};

export default memo(ColorSchemaButton);
