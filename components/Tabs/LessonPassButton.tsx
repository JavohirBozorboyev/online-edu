import { Grid, Button, Text } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React from "react";

const LessonPassButton = () => {
  return (
    <div>
      <Grid my="md">
        <Grid.Col md={6}>
          <Button
            size="lg"
            variant="light"
            fullWidth
            leftIcon={<IconChevronLeft size={"1.5rem"} />}
          >
            <Text fw={"600"} fz="md" tt={"uppercase"}>
              Ortga qaytish
            </Text>
          </Button>
        </Grid.Col>
        <Grid.Col md={6}>
          <Button
            size="lg"
            variant="light"
            fullWidth
            rightIcon={<IconChevronRight size={"1.2rem"} />}
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
