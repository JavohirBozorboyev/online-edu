import QuizCard from "@/src/Page/Quiz/QuizCard";
import React from "react";

type Props = {
  quiz: any;
};

const index = ({ quiz }: Props) => {
  return (
    <div>
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
