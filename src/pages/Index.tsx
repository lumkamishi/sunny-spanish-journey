import Navigation from "@/components/Navigation";
import FeaturedPosts from "@/components/FeaturedPosts";
import Categories from "@/components/Categories";
import NewsletterSignup from "@/components/NewsletterSignup";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')"
      }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4">
              Your Journey to Living in Spain Starts Here
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Practical guides, local insights, and everything you need to know about
              moving to Spain.
            </p>
          </div>
        </div>
      </div>

      <FeaturedPosts />
      <Categories />
      <NewsletterSignup />
    </div>
  );
};

export default Index;