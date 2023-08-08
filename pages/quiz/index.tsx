import QuizCard from "@/src/Page/Quiz/QuizCard";
import { useCardBg } from "@/styles/styleJs/useCardBg";
import { Paper, Tabs, ScrollArea } from "@mantine/core";
import React from "react";

type Props = {
  quiz: any;
};

const index = ({ quiz }: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { classes } = useCardBg();
  return (
    <div>
      <Paper
        className={classes.cardBg}
        radius={"xs"}
        mb={"sm"}
        m={"-sm"}
        // withBorder

        sx={{ overflow: "hidden" }}
      >
        <Tabs defaultValue="0">
          <ScrollArea
            type="never"
            sx={{ display: "flex", flexDirection: "row" }}
            w={"100%"}
          >
            <Tabs.List sx={{ display: "flex", flexWrap: "nowrap" }}>
              <Tabs.Tab py={"sm"} value="0">
                Barchasi
              </Tabs.Tab>
              <Tabs.Tab py={"sm"} value="1">
                Chet Tillari
              </Tabs.Tab>
              <Tabs.Tab py={"sm"} value="2">
                IT
              </Tabs.Tab>
              <Tabs.Tab py={"sm"} value="3">
                Kimyo
              </Tabs.Tab>
              <Tabs.Tab py={"sm"} value="4">
                Geometrya
              </Tabs.Tab>
            </Tabs.List>{" "}
          </ScrollArea>
        </Tabs>
      </Paper>
      <QuizCard data={quiz} />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/examp/free-category/`
  );
  const quiz = await res.json();

  return {
    props: {
      quiz,
    },

    revalidate: 10,
  };
}
