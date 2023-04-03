import { ActionIcon } from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
import React, { memo } from "react";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";

type Props = {};

const FullScreenButton = (props: Props) => {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <div>
      <ActionIcon
        variant="light"
        onClick={toggle}
        sx={(theme) => ({
          color: theme.colors.blue[6],
        })}
        size={"lg"}
      >
        {!fullscreen ? (
          <BiFullscreen size="1.2rem" />
        ) : (
          <BiExitFullscreen size="1.2rem" />
        )}
      </ActionIcon>
    </div>
  );
};

export default memo(FullScreenButton);
