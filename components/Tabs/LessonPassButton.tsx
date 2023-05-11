import { Grid, Button, Text } from "@mantine/core";
import React from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

const LessonPassButton = () => {
  return (
    <div>
      <Grid my="md">
        <Grid.Col md={6}>
          <Button
            size="xl"
            variant="light"
            fullWidth
            leftIcon={<TbChevronLeft size={"1.5rem"} />}
          >
            <Text fw={"600"} fz="md" tt={"uppercase"}>
              Ortga qaytish
            </Text>
          </Button>
        </Grid.Col>
        <Grid.Col md={6}>
          <Button
            size="xl"
            variant="light"
            fullWidth
            rightIcon={<TbChevronRight size={"1.2rem"} />}
          >
            <Text fw={"600"} fz="md" tt={"uppercase"}>
              Oldinga yurish
            </Text>
          </Button>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default LessonPassButton;
