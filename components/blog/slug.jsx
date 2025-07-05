{/*// pages/blog/[slug].jsx
"use client";
import { useRouter } from "next/router";
import blogs from "@/data/blogs"; // adjust path if needed
import BlogDetails1 from "@/components/BlogDetails1";

export default function BlogPage() {
  const router = useRouter();
  const { slug } = router.query;

  const blogItem = blogs.find((blog) => blog.slug === slug);

  if (!blogItem) return <p>Blog not found</p>;

  return <BlogDetails1 blogItem={blogItem} />;
}*/}
