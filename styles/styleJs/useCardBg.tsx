import { createStyles } from "@mantine/core";

export const useCardBg = createStyles((theme) => ({
  cardBg: {
    background:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
  lessonBg: {
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
  },
}));
