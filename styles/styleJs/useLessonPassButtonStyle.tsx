import { createStyles } from "@mantine/core";

export const useLessonPassButtonStyle = createStyles((theme) => ({
  bg: {
    background:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : "",
      boxShadow: theme.colorScheme === "dark" ? "" : `0px 0px 10px ${theme.colors.gray[5]}`,
    },
  },
  pos: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[6],
  },
}));
