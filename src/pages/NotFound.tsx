
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="container-custom py-20 text-center">
          <div className="mb-6 inline-flex items-center justify-center h-24 w-24 rounded-full bg-muted text-primary text-4xl font-bold">
            404
          </div>
          <h1 className="h2 mb-4">Page Not Found</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <Button as="a" href="/" className="inline-flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
