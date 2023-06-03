import useSWR from "swr";
import { useRouter } from "next/router";
import { Grid, Modal, Skeleton, Text } from "@mantine/core";
import HomeQuizSlugCard from "@/src/Page/Quiz/HomeQuizSlugCard";
import { useDisclosure } from "@mantine/hooks";
import HomeQuestionBox from "@/src/Page/Quiz/HomeQuestionBox";
import { useState } from "react";

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
      <HomeQuizSlugCard quiz={quiz} openModal={open} setQuziId={setQuizId} />
      <Modal
        opened={opened}
        onClose={close}
        yOffset={"0"}
        withCloseButton={false}
        fullScreen
      >
        <HomeQuestionBox list={testList} close={close} />
      </Modal>
    </>
  );
};

export default QuizSlugPage;
