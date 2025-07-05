// app/blogs/blog-details/[id]/page.jsx (renamed from app/blogs/blog-details/page.jsx)

import Header2 from "@/components/headers/Header2";
import Newsletter from "@/components/blog/Newsletter";
import Footer2 from "@/components/footers/Footer2";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import { allBlogs } from "@/data/blogs"; // Make sure allBlogs is correctly imported

export const metadata = {
  title: "IIoT Technologies",
  description: "IIoT Technologies",
};
export default async function BlogDetailsPage1(props) {
  const params = await props.params;
  const id = params.id; // This 'id' comes from the dynamic route segment [id]

  // Find the correct blog item by id
  // The 'allBlogs[0]' fallback is okay for development, but consider a 404 page for production
  const blogItem = allBlogs.filter((elm) => elm.id === id)[0] || allBlogs[0];

  // Optional: Handle case where blogItem is not found (e.g., return a 404 page or a message)
  if (!blogItem) {
    // You could render a Not Found page or redirect
    return <div>Blog post not found.</div>;
  }
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <BlogDetails1 blogItem={blogItem} /> {/* blogItem now has fullContent */}
          <Newsletter />
        </div>
        <Footer2 />
      </div>
    </>
  );
}