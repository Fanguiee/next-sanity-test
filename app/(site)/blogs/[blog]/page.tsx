import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"

type Props = {
  params: { blog: string }
}

export default async function Blog({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return <div>
    <header className="flex items-center justify-between">
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{blog.title}</h1>
      
    </header>
    <h3 className="text-sm text-gray-500 mt-5">{blog._createdAt.toString()}</h3>
    <div className="text-lg text-gray-700 mt-5">
      <PortableText value={blog.content} />
    </div>
    {blog.image && 
    <Image src={blog.image} alt={blog.title} width={1920}height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />}
  </div> 
} 