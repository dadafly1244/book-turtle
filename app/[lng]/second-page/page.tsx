import { lngType } from "@/type";
import Link from "next/link";

interface Params {
  params: { lng: lngType };
}
const Page = async ({ params }: Params) => {
  const { lng } = await params;

  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lng}`}>back</Link>
    </>
  );
};

export default Page;
