import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Container } from "@mantine/core";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <main>
        <Container size={"xl"} p={0}>
          <Breadcrumb />
        </Container>
      </main>
    </>
  );
};

export default index;
