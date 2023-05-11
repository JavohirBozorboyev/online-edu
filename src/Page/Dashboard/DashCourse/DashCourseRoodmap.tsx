import DashCourseAside from "@/components/Navbar/Dashboard/DashCourseAside";
import React from "react";
import { Box, Paper } from "@mantine/core";
import { useCardBg } from "@/styles/styleJs/useCardBg";

const DashCourseRoodmap = () => {
  const { classes } = useCardBg();
  return (
    <div>
      <Paper p={'sm'} radius={"sm"} className={classes.cardBg} sx={{overflow: 'hidden'}}>
        <DashCourseAside />
      </Paper>
    </div>
  );
};

export default DashCourseRoodmap;
