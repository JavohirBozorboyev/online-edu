/* eslint-disable react-hooks/rules-of-hooks */
import CourseCard from "@/src/Page/course/CourseCard";
import { useCardBg } from "@/styles/styleJs/useCardBg";
import { Paper, ScrollArea, Tabs } from "@mantine/core";

import React, { useState } from "react";

type Props = {
  course: any;
  category: any;
};

const index = ({ course, category }: Props) => {
  const { classes } = useCardBg();
  const [activeTab, setActiveTab] = useState<string | null>("all");

  const CourseFind = course.filter(
    (item: { category_slug: string }) => item.category_slug === activeTab
  );

  return (
    <main>
      <Paper
        className={classes.cardBg}
        radius={"xs"}
        mb={"sm"}
        // withBorder
        sx={{ overflow: "hidden" }}
      >
        <Tabs value={activeTab} onTabChange={setActiveTab}>
          <ScrollArea
            type="never"
            sx={{ display: "flex", flexDirection: "row" }}
            w={"100%"}
          >
            <Tabs.List sx={{ display: "flex", flexWrap: "nowrap" }}>
              <Tabs.Tab py={"sm"} value={"all"}>
                Hammasi
              </Tabs.Tab>
              {category.map(
                (item: { id: number; name: string; slug: string }) => {
                  return (
                    <Tabs.Tab py={"sm"} value={item.slug} key={item.id}>
                      {item.name}
                    </Tabs.Tab>
                  );
                }
              )}
            </Tabs.List>{" "}
          </ScrollArea>
        </Tabs>
      </Paper>
      <CourseCard Course={activeTab === "all" ? course : CourseFind} />
    </main>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACE}/course/course/`);
  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACE}/course/category/`
  );
  const course = await res.json();
  const category = await res2.json();

  return {
    props: {
      course,
      category,
    },

    revalidate: 10,
  };
}
