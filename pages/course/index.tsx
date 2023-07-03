/* eslint-disable react-hooks/rules-of-hooks */
import CourseCard from "@/src/Page/course/CourseCard";
import { useCardBg } from "@/styles/styleJs/useCardBg";
import { Paper, ScrollArea, Tabs } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import React from "react";

type Props = {
  course: any;
};

const index = ({ course }: Props) => {
  const { classes } = useCardBg();

  return (
    <main>
      <Paper
        className={classes.cardBg}
        radius={"xs"}
        mb={"sm"}
        // withBorder
      >
        <Tabs defaultValue="0">
          <ScrollArea
            type="never"
            sx={{ display: "flex", flexDirection: "row" }}
            w={"100%"}
          >
            <Tabs.List sx={{ display: "flex", flexWrap: "nowrap" }}>
              <Tabs.Tab py={"md"} fw={"bold"} value="0">
                Barcha Kurslar
              </Tabs.Tab>
              <Tabs.Tab py={"md"} fw={"bold"} value="1">
                Chet Tillari
              </Tabs.Tab>
              <Tabs.Tab py={"md"} fw={"bold"} value="2">
                IT
              </Tabs.Tab>
              <Tabs.Tab py={"md"} fw={"bold"} value="3">
                Biznes
              </Tabs.Tab>
              <Tabs.Tab py={"md"} fw={"bold"} value="4">
                Fanlar
              </Tabs.Tab>
            </Tabs.List>{" "}
          </ScrollArea>
        </Tabs>
      </Paper>
      <CourseCard Course={course} />
    </main>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/course/course/`);
  const course = await res.json();

  return {
    props: {
      course,
    },

    revalidate: 10,
  };
}
