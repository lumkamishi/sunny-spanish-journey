interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

const BlogCard = ({ title, excerpt, image, category, date }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-primary font-medium">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="font-serif text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a
          href="#"
          className="inline-block text-secondary hover:text-secondary/80 font-medium transition-colors"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;