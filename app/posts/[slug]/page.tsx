import { getPostSlugs } from "@/lib/posts";

export default function BlogPost() {
  return <div>test</div>;
}

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}
