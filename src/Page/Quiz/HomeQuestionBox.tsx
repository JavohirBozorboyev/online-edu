/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Group, Radio, Paper, Button, Grid } from "@mantine/core";

type Props = {
  list: any;
  close: any;
};

type ListType = {
  question_text: string;
  answers: {}[];
};

const HomeQuestionBox = ({ list, close }: Props) => {
  return (
    <>
      {list.questions.map((item: ListType, i: number) => {
        return (
          <Paper mb={"xs"} shadow="xs" p="sm" withBorder key={i}>
            <Radio.Group label={`${i + 1}.   ${item.question_text} `}>
              <Group
                mt="xs"
                ml={"xs"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {item.answers.map((ans: any) => {
                  return (
                    <Radio
                      key={ans.id}
                      value={`${ans.id}`}
                      label={ans.answer_text}
                      sx={{
                        width: "100%",
                        padding: "2px 0",
                      }}
                    />
                  );
                })}
              </Group>
            </Radio.Group>
          </Paper>
        );
      })}
      <Paper>
        <Grid grow gutter="xs">
          <Grid.Col span={6} xs={6}>
            <Button onClick={close} color="red" fullWidth>
              Tugatish
            </Button>
          </Grid.Col>
          <Grid.Col span={6} xs={6}>
            <Button fullWidth>{"Javobni Ko'rish"}</Button>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  );
};

export default HomeQuestionBox;
