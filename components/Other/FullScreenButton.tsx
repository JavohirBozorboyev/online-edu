import { ActionIcon } from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
import { IconArrowsMaximize, IconArrowsMinimize } from "@tabler/icons-react";
import React, { memo } from "react";

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
          <IconArrowsMaximize size="1.2rem" />
        ) : (
          <IconArrowsMinimize size="1.2rem" />
        )}
      </ActionIcon>
    </div>
  );
};

export default memo(FullScreenButton);
