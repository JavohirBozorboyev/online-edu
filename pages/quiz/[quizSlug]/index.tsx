import useSWR from "swr";
import { useRouter } from "next/router";
import { Grid, Modal, Skeleton, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import QuizSlugCard from "@/src/Page/Quiz/QuizSlugCard";
import QuestionBox from "@/src/Page/Quiz/QuestionBox";

const QuizSlugPage = () => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const [quizId, setQuizId] = useState(null);
  const { quizSlug } = router.query;
  const {
    data: quiz,
    error,
    isLoading: loading,
  } = useSWR(
    `https://onlineedu.pythonanywhere.com/api/examp/free-category/${quizSlug}/`
  );

  if (loading) {
    return (
      <Grid>
        <Grid.Col md={6} lg={4}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Skeleton height={200} radius="sm" />
        </Grid.Col>
      </Grid>
    );
  }
  if (error) {
    return (
      <>
        <Text size="xl" ta="center">
          Server Error
        </Text>
      </>
    );
  }

  let testList = quiz.free_subcategories.find(
    (fil: { id: null }) => fil.id == quizId
  );

  return (
    <>
      <QuizSlugCard quiz={quiz} openModal={open} setQuziId={setQuizId} />
      <Modal
        opened={opened}
        onClose={close}
        yOffset={"0"}
        withCloseButton={false}
        fullScreen
      >
        <QuestionBox list={testList} close={close} />
      </Modal>
    </>
  );
};

export default QuizSlugPage;
