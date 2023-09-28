import { getBlogs, getProjects } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react";
import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const projects = await getProjects();
  const blogs = await getBlogs();
  return (
    <div>
      <div>
        <UserButton afterSignOutUrl="/"/>
      </div>
      <h1 className="text-7xl font-extrabold">Hello I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> Yajie!</span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">Aloha everyone! Check out my projects and my blogs!</p>

      {/*start of projects */}
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 h-96 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="h-80 object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
      ))}
      </div>
      {/*end of projects */}

      {/*start of blogs */}
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Blogs</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{blogs.map((blog) => (
        <Link href={`/blogs/${blog.slug}`} key={blog._id} className="border-2 h-96 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.title}
              width={750}
              height={300}
              className="h-80 object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {blog.title}
          </div>
        </Link>
      ))}
      </div>
      {/*end of projects */}
    </div>
  )

}
