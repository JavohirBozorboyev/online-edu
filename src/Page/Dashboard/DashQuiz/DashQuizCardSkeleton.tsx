import { Grid, Skeleton } from "@mantine/core";
import React from "react";

const DashQuizCardSkeleton = () => {
  return (
    <>
      <Grid>
        {Array.from(Array(6)).map((_, index) => (
          <Grid.Col sm={6} lg={4} key={index}>
            <Skeleton height={200} radius="sm" />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default DashQuizCardSkeleton;
