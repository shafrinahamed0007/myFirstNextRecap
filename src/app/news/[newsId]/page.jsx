const NewsDetailPage = async ({ params }) => {
  const { newsId } = await params;
  console.log("News Id: ", newsId);
  const newses = [
    {
      id: 5,
      title: "Complete Guide to Node.js",
      description:
        "Learn how Node.js works and how to build scalable backend applications using JavaScript.",
      author: "David Wilson",
      category: "Backend Development",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      date: "2026-11-09",
      readTime: "8 min read",
      tags: ["Node.js", "Backend", "JavaScript"],
    },
    {
      id: 6,
      title: "Understanding MongoDB for Beginners",
      description:
        "Explore MongoDB fundamentals, database collections, documents, and CRUD operations.",
      author: "Emma Watson",
      category: "Database",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
      date: "2026-11-10",
      readTime: "6 min read",
      tags: ["MongoDB", "Database", "Backend"],
    },
    {
      id: 7,
      title: "10 Essential Git Commands",
      description:
        "Discover the most useful Git commands every developer should know to manage projects efficiently.",
      author: "James Miller",
      category: "Programming",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
      date: "2026-11-11",
      readTime: "5 min read",
      tags: ["Git", "GitHub", "Development"],
    },
    {
      id: 8,
      title: "Responsive Web Design Principles",
      description:
        "Learn how to create responsive websites that look beautiful on mobile, tablet, and desktop devices.",
      author: "Sophia Brown",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      date: "2026-11-12",
      readTime: "7 min read",
      tags: ["Responsive", "CSS", "Web Design"],
    },
    {
      id: 9,
      title: "Introduction to TypeScript",
      description:
        "Understand TypeScript basics, types, interfaces, generics, and how it improves JavaScript development.",
      author: "Daniel Smith",
      category: "Programming",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      date: "2026-11-13",
      readTime: "9 min read",
      tags: ["TypeScript", "JavaScript", "Coding"],
    },
    {
      id: 10,
      title: "How to Improve Website Performance",
      description:
        "Explore practical techniques to optimize website loading speed and deliver a better user experience.",
      author: "Olivia Johnson",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      date: "2026-11-14",
      readTime: "6 min read",
      tags: ["Performance", "SEO", "Optimization"],
    },
    {
      id: 11,
      title: "Getting Started with Express.js",
      description:
        "Build powerful REST APIs using Express.js and learn routing, middleware, and request handling.",
      author: "William Davis",
      category: "Backend Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      date: "2026-11-15",
      readTime: "8 min read",
      tags: ["Express.js", "Node.js", "API"],
    },
    {
      id: 12,
      title: "UI/UX Design Trends for Modern Websites",
      description:
        "Explore modern UI/UX design trends and learn how to create user-friendly digital experiences.",
      author: "Isabella Taylor",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f",
      date: "2026-11-16",
      readTime: "5 min read",
      tags: ["UI", "UX", "Design"],
    },
    {
      id: 13,
      title: "Understanding REST API Development",
      description:
        "Learn REST API architecture, HTTP methods, status codes, and how frontend applications communicate with servers.",
      author: "Henry Wilson",
      category: "Backend Development",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      date: "2026-11-17",
      readTime: "7 min read",
      tags: ["REST API", "Backend", "HTTP"],
    },
    {
      id: 14,
      title: "Mastering React Hooks",
      description:
        "Learn how to use useState, useEffect, useContext, useMemo, and custom hooks in modern React applications.",
      author: "Charlotte Martin",
      category: "Frontend Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      date: "2026-11-18",
      readTime: "10 min read",
      tags: ["React", "Hooks", "JavaScript"],
    },
  ];

  const newsDetils = newses.find((n) => n.id == parseInt(newsId));
  return (
    <div>
      <h2 className="text-3xl">News Details Page</h2>
      <div>
        <h2 className="text-4xl text-blue-600">
          {newsDetils?.title || "News Title Not Found!"}
        </h2>
      </div>
    </div>
  );
};

export default NewsDetailPage;
