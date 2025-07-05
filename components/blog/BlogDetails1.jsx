"use client"; // Make sure this is at the very top if it's a client component
import Link from "next/link";
import RelatedBlogs from "./RelatedBlogs"; // Assuming you have this component
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

// Helper component to render the main content, handling different tag types
function BlogDetailContent({ content }) {
  if (!content || !Array.isArray(content) || content.length === 0) {
    return null; // Or a message indicating no content
  }
  return (
    <>
      {content.map((block, index) => {
        if (
          block.startsWith('<h1') || // Check for the start of the h1 tag
          block.startsWith('<h2>') ||
          block.startsWith('<h3>') ||
          block.startsWith('<h4>') ||
          block.startsWith('<h5>') ||
          block.startsWith('<ul>') ||
          block.startsWith('<li>') ||
          block.startsWith('<strong>') ||
          block.startsWith('<figure') ||
          block.startsWith('<table') || // ADD THIS LINE TO RECOGNIZE TABLES
          block.endsWith('</ul>')
        ) {
          let className = '';
           if (block.startsWith('<h1>')) className = "text-5xl lg:text-6xl font-bold mt-6 mb-3 xl:mb-4";
          else if (block.startsWith('<h2>')) className = "text-5xl lg:text-6xl font-bold mt-6 mb-3 xl:mb-4";
          else if (block.startsWith('<h3>')) className = "text-4xl lg:text-5xl font-bold mt-4 mb-2 xl:mb-3";
          else if (block.startsWith('<h4>')) className = "text-2xl lg:text-3xl font-bold mt-4 mb-2 xl:mb-3";
          else if (block.startsWith('<h5>')) className = "text-xl lg:text-2xl font-semibold mt-4 mb-2 xl:mb-3 flex items-center gap-2";
          else if (block.startsWith('<strong>')) className = "mt-3 font-semibold text-lg md:text-xl";
          else if (block.startsWith('<ul>') || block.startsWith('<li>')) className = "list-disc pl-5";
          else if (block.startsWith('<table')) className = "mt-4 mb-4 overflow-x-auto"; // Add a class for tables, e.g., for responsiveness

          return (
            <div key={index} className={className} dangerouslySetInnerHTML={{ __html: block }} />
          );
        }
        // If it's just a plain paragraph or any other text not explicitly formatted as HTML tags
        return (
          <p key={index} className={index > 0 ? "mt-3 text-base md:text-lg" : "text-base md:text-lg"}>
            {block}
          </p>
        );
      })}
    </>
  );
}

export default function BlogDetails1({ blogItem }) {
  const contentToRender = blogItem?.fullContent || [];

  return (
    <>
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-md mx-auto gap-2 md:gap-3">
                <h1>{blogItem.title}</h1>
                <ul className="post-share-icons nav-x gap-1 dark:text-white">
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-linkedin icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-facebook icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-instagram icon-1" />
                    </a>
                  </li>
                </ul>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt={blogItem.imgAlt}
                    src={blogItem.imgSrc}
                    width="1280"
                    height="853"
                  />
                </figure>
              </figure>
            </div>
          </div>
          <div className="panel mt-4 lg:mt-6 xl:mt-9">
            <div className="container max-w-lg">
              <Gallery>
                <div
                  className="post-content panel fs-6 md:fs-5"
                  data-uc-lightbox="animation: scale"
                >
                  {/* Render the full content dynamically */}
                  <BlogDetailContent content={contentToRender} />

                  {/* Removed the conditional image for real-time-dashboards */}
                </div>
              </Gallery>
              <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
                <ul className="nav-x gap-narrow text-primary">
                  <li>
                    <span className="text-black dark:text-white me-narrow">
                      Tags:
                    </span>
                  </li>
                  {blogItem.tags && blogItem.tags.map((tag, index) => (
                    <li key={index}>
                      <a href="#" className="gap-0">
                        {tag}
                        {index < blogItem.tags.length - 1 && <span className="text-black dark:text-white">,</span>}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="post-share-icons nav-x gap-narrow">
                  <li className="me-1">
                    <span className="text-black dark:text-white">Share:</span>
                  </li>
                  <li>
                    <a
                      className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-linkedin icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-facebook icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-instagram icon-1" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="post-navigation panel vstack sm:hstack justify-between gap-2 mt-5 xl:mt-7 fdr-min-600">
                {blogItem.prevArticle && (
                  <div className="new-post panel hstack w-100 sm:w-1/2">
                    <div className="panel hstack justify-center w-100px h-100px">
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                        <Image
                          className="media-cover image uc-transition-scale-up uc-transition-opaque"
                          alt={blogItem.prevArticle.title}
                          src={blogItem.prevArticle.imgSrc}
                          width="1280"
                          height="853"
                        />
                        <Link
                          href={`/blog-details/${blogItem.prevArticle.id}`}
                          className="position-cover"
                          data-caption={blogItem.prevArticle.title}
                        ></Link>
                      </figure>
                    </div>
                    <div className="panel vstack justify-center px-2 gap-1 w-1/3">
                      <span className="fs-7 opacity-60">Prev Article</span>
                      <h6 className="h6 lg:h5 m-0">
                        {blogItem.prevArticle.title}
                      </h6>
                    </div>
                    <Link
                      href={`/blog-details/${blogItem.prevArticle.id}`}
                      className="position-cover"
                    ></Link>
                  </div>
                )}
                {blogItem.nextArticle && (
                  <div className="new-post panel hstack w-100 sm:w-1/2">
                    <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
                      <span className="fs-7 opacity-60">Next Article</span>
                      <h6 className="h6 lg:h5 m-0">
                        {blogItem.nextArticle.title}
                      </h6>
                    </div>
                    <div className="panel hstack justify-center w-100px h-100px">
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                        <Image
                          className="media-cover image uc-transition-scale-up uc-transition-opaque"
                          alt={blogItem.nextArticle.title}
                          src={blogItem.nextArticle.imgSrc}
                          width="1280"
                          height="853"
                        />
                        <Link
                          href={`/blog-details/${blogItem.nextArticle.id}`}
                          className="position-cover"
                          data-caption={blogItem.nextArticle.title}
                        ></Link>
                      </figure>
                    </div>
                    <Link
                      href={`/blog-details/${blogItem.nextArticle.id}`}
                      className="position-cover"
                    ></Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}