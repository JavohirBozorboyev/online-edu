import React from "react";
import { Box, NavLink, createStyles } from "@mantine/core";
import { TbCheck, TbPlayerSkipForward } from "react-icons/tb";
import Link from "next/link";

const useStyle = createStyles((theme) => ({
  link: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[3]
        : theme.colors.gray[8],
  },
  secondLink: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[5]
        : theme.colors.gray[6],
  },
}));

const data = [
  {
    label: "Javascriptga kirish",
    url: "/dashboard/course/js",
    active: true,
    darslar: [
      {
        name: "Malumot turlari",
        url: "/dashboard/course/js/1dars",
        lessonActive: true,
      },
      {
        name: "If shart operatori",
        url: "/dashboard/course/js/2dars",
        lessonActive: true,
      },
      {
        name: "While takrorlanish operatori",
        url: "/dashboard/course/js/3dars",
        lessonActive: false,
      },
    ],
  },

  {
    label: "OOP ga kirish",
    url: "/dashboard/course/js",
    active: false,
    darslar: [
      {
        name: "Query selectorlar",
        url: "/dashboard/course/js/4dars",
        lessonActive: false,
      },
      {
        name: "Classlist",
        url: "/dashboard/course/js/5dars",
        lessonActive: false,
      },
      {
        name: "addeventlistener",
        url: "/dashboard/course/js/6dars",
        lessonActive: false,
      },
    ],
  },
];

const DashCourseAside = ({ toggleAsideBar }: any) => {
  const { classes } = useStyle();
  return (
    <>
      <Box>
        {data.map((item, i) => {
          return (
            <NavLink
              key={i}
              label={`${item.label}`}
              childrenOffset={10}
              defaultOpened={item.active}
              py={"sm"}
              className={classes.link}
            >
              {item.darslar.map((list, i) => {
                return (
                  <Link href={list.url} key={i} onClick={toggleAsideBar}>
                    <NavLink
                      className={classes.secondLink}
                      icon={
                        list.lessonActive ? (
                          <TbCheck />
                        ) : (
                          <TbPlayerSkipForward />
                        )
                      }
                      label={`${list.name}`}
                      active={list.lessonActive}
                      variant="subtle"
                    />
                  </Link>
                );
              })}
            </NavLink>
          );
        })}
      </Box>
    </>
  );
};

export default DashCourseAside;
