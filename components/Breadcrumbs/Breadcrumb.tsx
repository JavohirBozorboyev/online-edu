import { Breadcrumbs, Anchor, List } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useCallback, memo } from "react";

const Breadcrumb = () => {
  const router = useRouter();
  const Links = router.route.split("/").slice(1);

  const PushFun = useCallback(
    (Links: any, e: number) => {
      let s = 0;
      if (e === 0) {
        router.push(`/${Links[e]}`);
      } else {
        for (let i = 0; i < e + 1; i++) {
          s += Links[i].length;
        }
        const url = router.route.slice(0, s + e + 1);
        router.push(url);
      }
    },
    [router]
  );
  return (
    <List
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        borderRadius: "4px",
      })}
      p={"md"}
    >
      <Breadcrumbs>
        {Links.map((link: string, i: number) => {
          return (
            <Anchor
              key={i}
              sx={{ textTransform: "capitalize" }}
              onClick={(e) =>
                Links.length === i + 1 ? e.preventDefault : PushFun(Links, i)
              }
            >
              {link.slice(0, 15)}
            </Anchor>
          );
        })}
      </Breadcrumbs>
    </List>
  );
};

export default memo(Breadcrumb);
