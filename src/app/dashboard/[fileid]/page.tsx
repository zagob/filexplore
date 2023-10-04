import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

interface PageProps {
  params: {
    fileid: string;
  };
}

const Page = ({ params }: PageProps) => {
  // retrieve the file id
  const { fileid } = params;
  // make database call

  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`);

  return <div>{fileid}</div>;
};

export default Page;
