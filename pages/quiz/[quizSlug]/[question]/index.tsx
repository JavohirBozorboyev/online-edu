import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import {
  Text,
  Container,
  Group,
  Radio,
  Paper,
  Button,
  Grid,
} from "@mantine/core";
import useSWR from "swr";
import QuestionLayout from "@/layouts/QuestionLayout";
import Link from "next/link";

type Props = {};

type ListType = {
  question_text: string;
  answers: {}[];
};

const index = (props: Props) => {
  const router = useRouter();
  const { quizSlug, question } = router.query;
  const {
    data: quiz,
    error,
    isLoading,
  } = useSWR(
    `https://onlineedu.pythonanywhere.com/api/examp/free-category/${quizSlug}/`
  );

  if (error) {
    return (
      <>
        <Text size="xl" ta="center">
          Server Error
        </Text>
      </>
    );
  }

  if (isLoading) {
    return <>loading....</>;
  }

  let list = quiz.free_subcategories.find(
    (item: any) => item.slug === question
  );

  return (
    <main>
      {/* <QuestionLayout list={list}>index</QuestionLayout> */}

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
        <Grid>
          <Grid.Col md={6}>
            <Link href={`/quiz/${quizSlug}`}>
              <Button variant="light" color="red" fullWidth>
                Tugatish
              </Button>
            </Link>
          </Grid.Col>
          <Grid.Col md={6}>
            <Button fullWidth>Javobni Ko'rish</Button>
          </Grid.Col>
        </Grid>
      </Paper>
    </main>
  );
};

export default index;

index.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      <Container py={"xs"}>{page}</Container>
    </>
  );
};
