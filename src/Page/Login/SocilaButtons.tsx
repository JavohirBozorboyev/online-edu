import { Button, rem } from "@mantine/core";
import { IconBrandGoogle, IconBrandApple } from "@tabler/icons-react";
import React, { memo } from "react";

type Props = {};

export const GoogleButton = (props: Props) => {
  return (
    <>
      <Button
        w={"100%"}
        leftIcon={<IconBrandGoogle size={"1.4rem"} />}
        radius={"xl"}
        variant="light"
      >
        Google
      </Button>
    </>
  );
};

export const AppleButton = (props: Props) => {
  return (
    <>
      <Button
        w={"100%"}
        leftIcon={<IconBrandApple size={"1.4rem"} />}
        radius={"xl"}
        variant="light"
      >
        Apple
      </Button>
    </>
  );
};
