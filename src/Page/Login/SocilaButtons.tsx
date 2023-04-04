import { Button, rem } from "@mantine/core";
import React, { memo } from "react";
import { TbBrandApple, TbBrandGoogle, TbBrandTwitter } from "react-icons/tb";

type Props = {};

export const GoogleButton = (props: Props) => {
  return (
    <>
      <Button
        w={"100%"}
        leftIcon={<TbBrandGoogle size={"1.4rem"} />}
        
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
        leftIcon={<TbBrandApple size={"1.4rem"} />}
        radius={"xl"}
        variant="light"
      >
        Apple
      </Button>
    </>
  );
};
