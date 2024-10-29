import { useRouter } from "next/router";

const userpage = () => {
  const router = useRouter();
  console.log(router);

  const { query } = useRouter();
  

  return (
    <div>
      <h1>Hello {query.username} This is a Dynamic Page.</h1>
    </div>
  );
};

export default userpage;
