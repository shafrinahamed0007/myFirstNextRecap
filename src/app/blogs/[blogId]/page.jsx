const BlogDegtailPage = async ({ params }) => {
  const { blogId } = await params;
  //   console.log("Show me params: ", blogId)

  const blogs = [
    {
      id: 1,
      title: "Getting Started with React.js",
      description:
        "Learn the fundamentals of React.js and build your first interactive web application with reusable components.",
      author: "John Doe",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      date: "2026-11-01",
      readTime: "5 min read",
      tags: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      description:
        "Discover how Tailwind CSS helps you create beautiful, responsive user interfaces faster using utility-first classes.",
      author: "Sarah Smith",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
      date: "2026-11-03",
      readTime: "7 min read",
      tags: ["Tailwind", "CSS", "Design"],
    },
    {
      id: 3,
      title: "JavaScript ES6 Features You Should Know",
      description:
        "Explore modern JavaScript features including arrow functions, destructuring, promises, and template literals.",
      author: "Alex Brown",
      category: "JavaScript",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
      date: "2026-11-05",
      readTime: "6 min read",
      tags: ["JavaScript", "ES6", "Programming"],
    },
    {
      id: 4,
      title: "Building Modern Websites with Next.js",
      description:
        "Learn how to build fast, SEO-friendly, and scalable web applications using Next.js and modern development practices.",
      author: "Michael Lee",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "2026-11-08",
      readTime: "8 min read",
      tags: ["Next.js", "React", "Web Development"],
    },
  ];

  const blog = blogs.find((blog) => blog.id == parseInt(blogId));
  console.log("Selected Blog: ", blog);

  return (
    <div>
      <h4 className="text-3xl">Blog Detail coming soon</h4>
      {blog && <div>{blog?.title}</div>}
    </div>
  );
};

export default BlogDegtailPage;
