import BlogCard from "./BlogCard";

const FeaturedPosts = () => {
  const posts = [
    {
      title: "Getting Your NIE in Spain: A Complete Guide",
      excerpt: "Everything you need to know about obtaining your NIE number, including required documents and where to apply.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      category: "Documentation",
      date: "March 15, 2024",
    },
    {
      title: "Best Cities to Live in Spain for Expats",
      excerpt: "Discover the most expat-friendly cities in Spain, from coastal paradises to urban centers.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      category: "Lifestyle",
      date: "March 12, 2024",
    },
    {
      title: "Spanish Healthcare System Explained",
      excerpt: "Navigate the Spanish healthcare system with confidence with this comprehensive guide.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      category: "Healthcare",
      date: "March 10, 2024",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="font-serif text-3xl font-bold mb-8">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;