import Link from "next/link";
import { lngType } from "@/type";

interface Params {
  params: { lng: lngType };
}

const Page = async ({ params }: Params) => {
  const { lng } = await params;
  return (
    <>
      <h1>Hi there!</h1>
      <Link href={`/${lng}/second-page`}>second page</Link>
    </>
  );
};

export default Page;
