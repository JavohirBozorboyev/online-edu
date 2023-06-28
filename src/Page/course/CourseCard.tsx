import { useCardBg } from "@/styles/styleJs/useCardBg";
import { Badge, Button, Card, Grid, Group, Image, Text } from "@mantine/core";
import React from "react";

type Props = {
  Course: any;
};

const CourseCard = ({ Course }: Props) => {
  const { classes } = useCardBg();
  return (
    <>
      <Grid>
        {Course.map((item: any) => {
          return (
            <Grid.Col md={6} key={item.id}>
              <Card
                shadow="sm"
                padding="lg"
                radius="sm"
                withBorder
                className={classes.cardBg}
              >
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={260}
                    alt="Norway"
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  With Fjord Tours you can explore more of the magical fjord
                  landscapes with tours and activities on and around the fjords
                  of Norway
                </Text>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="sm"
                >
                  Book classic tour now
                </Button>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default CourseCard;
