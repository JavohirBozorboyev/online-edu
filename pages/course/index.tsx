import CourseCard from "@/src/Page/course/CourseCard";
import React from "react";

type Props = {
  course: any;
};

const index = ({ course }: Props) => {
  console.log(course);

  return (
    <div>
      <CourseCard Course={course} />
    </div>
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
