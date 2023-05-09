import { Box, Grid, Image, Paper, Text } from "@mantine/core";
import React from "react";

const DashAccountInfo = () => {
  return (
    <div>
      <Grid>
        <Grid.Col sm={6} lg={4}>
          <Paper p="md">
            <Text color="dimmed" mb={"sm"} size={"xl"} fw={"bold"}>
              Profile
            </Text>
            <Image
              maw={"100%"}
              mx="auto"
              radius="sm"
              src="https://st.peopletalk.ru/wp-content/uploads/2019/01/jacob-black2.jpg"
              alt="Random image"
            />
            <Box mt={"sm"}>
              <Text color="dimmed" size={"xs"}>
                Ism Familiya:
              </Text>
              <Text color="dimmed" size={"sm"} fw={"600"}>
                Bozorboyev Javohir
              </Text>
            </Box>
            <Box mt={"sm"}>
              <Text color="dimmed" size={"xs"}>
                Telefon Raqam:
              </Text>
              <Text color="dimmed" size={"sm"} fw={"600"}>
                +99 899 391 25 05
              </Text>
            </Box>
            <Box mt={"sm"}>
              <Text color="dimmed" size={"xs"}>
                Pochta Manzili:
              </Text>
              <Text color="dimmed" size={"sm"} fw={"600"}>
                javokhirbozorboyev@gmail.com
              </Text>
            </Box>
          </Paper>
        </Grid.Col>
        {/* <Grid.Col md={8}>2</Grid.Col> */}
      </Grid>
    </div>
  );
};

export default DashAccountInfo;
