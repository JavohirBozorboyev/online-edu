import { Box } from "@mantine/core";
import React from "react";

type Props = {};

const LessonVideo = (props: Props) => {
  return (
    <Box >
      <video
        src=""
        controls
        width={"100%"}
        style={{ borderRadius: "4px" }}
        controlsList="nodownload"
      ></video>
    </Box>
  );
};

export default LessonVideo;
