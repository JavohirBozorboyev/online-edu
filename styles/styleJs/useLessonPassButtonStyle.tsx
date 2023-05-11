import { createStyles } from "@mantine/core";

export const useLessonPassButtonStyle = createStyles((theme) => ({
  bg: {
    background:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : "",
      transform: theme.colorScheme === "dark" ? "" : `scale(1.1)`,
    },
  },
  pos: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: theme.colorScheme === "dark" ? "" : `scale(0.99)`,
    },
  },
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[6],
  },
}));
