/* eslint-disable react-hooks/rules-of-hooks */
import DashAccountInfo from "@/src/Page/Dashboard/DashAccount/DashAccountInfo";
import { useSession } from "next-auth/react";

import React from "react";
import useSWR from "swr";

const index = () => {
  const { data: session } = useSession();

  // const { data, error, isLoading } = useSWR(
  //   `${process.env.NEXT_PUBLIC_URL_BACE}/student/profile/${session?.user?.name}/`
  // );

  // if (error) return <div>ошибка загрузки</div>;
  // if (isLoading) return <div>загрузка...</div>;

  // console.log(data);

  return (
    <div>
      <DashAccountInfo />
    </div>
  );
};

export default index;
