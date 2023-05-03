import { useLessonPassButtonStyle } from "@/styles/styleJs/useLessonPassButtonStyle";
import { Box, Grid, Button, Paper, Text, createStyles } from "@mantine/core";
import React from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

const LessonPassButton = () => {
  const { classes } = useLessonPassButtonStyle();
  return (
    <div>
      <Grid my="md">
        <Grid.Col md={6}>
          <Paper
            variant="default"
            color="gray"
            withBorder
            py={"xl"}
            px={"xl"}
            className={`${classes.bg} ${classes.pos}`}
          >
            <TbChevronLeft size={"1.5rem"} className={classes.icon} />
            <Text fz="md" fw={"00"} tt={"capitalize"}>
              Ortga qaytish
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col md={6}>
          <Paper
            variant="default"
            color="gray"
            withBorder
            py={"xl"}
            px={"xl"}
            className={`${classes.bg} ${classes.pos}`}
          >
            <Text fw={"00"} fz="md" tt={"capitalize"}>
              Oldinga yurish
            </Text>
            <TbChevronRight size={"1.5rem"} className={classes.icon} />
          </Paper>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default LessonPassButton;
