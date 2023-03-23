import {
  Card,
  Group,
  Badge,
  Button,
  Image,
  Text,
  Grid,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { TbChartBar, TbPlayerPlayFilled } from "react-icons/tb";
import DashCourseCardStats from "./DashCourseCardStats";
import Link from "next/link";

type Props = {};

const Data = [
  {
    label: "Tugallandi",
    count: "17",
    part: 60,
    color: "blue",
  },
  {
    label: "Tugallanmadi",
    count: "7",
    part: 40,
    color: "yellow",
  },
];

const DashCourseCard = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Grid>
        <Grid.Col md={6}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={200}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Javascript</Text>
              <Badge color="blue" variant="light">
                Free
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Grid mt={"md"}>
              <Grid.Col span={"auto"}>
                <Button
                  leftIcon={<TbChartBar size={"1.2rem"} />}
                  onClick={open}
                  color="teal"
                  radius="sm"
                  fullWidth
                >
                  Kurs Statistikasi
                </Button>
              </Grid.Col>
              <Grid.Col span={"auto"}>
                <Button
                  leftIcon={<TbPlayerPlayFilled size={"1.2rem"} />}
                  fullWidth
                  color="blue"
                  radius="sm"
                >
                  Kursni Boshlash
                </Button>
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>
        <Grid.Col md={6}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={200}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Javascript</Text>
              <Badge color="blue" variant="light">
                Free
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Grid mt={"md"}>
              <Grid.Col span={"auto"}>
                <Button
                  leftIcon={<TbChartBar size={"1.2rem"} />}
                  onClick={open}
                  color="teal"
                  radius="sm"
                  fullWidth
                >
                  Kurs Statistikasi
                </Button>
              </Grid.Col>
              <Grid.Col span={"auto"}>
                <Link href={"/dashboard/course/js"}>
                  <Button
                    leftIcon={<TbPlayerPlayFilled size={"1.2rem"} />}
                    fullWidth
                    color="blue"
                    radius="sm"
                  >
                    Kursni Boshlash
                  </Button>
                </Link>
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>
      </Grid>

      <Modal size={"lg"} opened={opened} onClose={close} title="Statistika">
        <DashCourseCardStats total={"Javascript"} diff={0} data={Data} />
      </Modal>
    </>
  );
};

export default DashCourseCard;
