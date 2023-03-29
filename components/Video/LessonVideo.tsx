import { Box, Container, Tabs } from "@mantine/core";
import React from "react";
import { TbPhoto, TbMessageCircle, TbSettings } from "react-icons/tb";

type Props = {};

const LessonVideo = (props: Props) => {
  return (
    <Box mt={"xl"}>
      <video
        src=""
        controls
        width={"100%"}
        style={{ borderRadius: "4px" }}
        controlsList="nodownload"
      ></video>
      <Tabs defaultValue="gallery" mt={"xl"}>
        <Tabs.List>
          <Tabs.Tab color="green" value="gallery" icon={<TbPhoto size="1.8rem" />}>
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="messages" icon={<TbMessageCircle size="1.8rem" />}>
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings" icon={<TbSettings size="1.8rem" />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs">
          Gallery tab content
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          Settings tab content
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

export default LessonVideo;
