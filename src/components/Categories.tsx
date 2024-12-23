const Categories = () => {
  const categories = [
    { name: "Documentation", count: 12 },
    { name: "Housing", count: 8 },
    { name: "Lifestyle", count: 15 },
    { name: "Healthcare", count: 6 },
    { name: "Language", count: 10 },
  ];

  return (
    <div className="bg-secondary/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="font-medium text-gray-800 mb-1">{category.name}</h3>
              <span className="text-sm text-gray-500">{category.count} posts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;