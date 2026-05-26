import { Clock, Shield, Star, Users, Wrench } from "lucide-react";
import Link from "next/link";
import ImageGallery, { GalleryImage } from "./components/ImageGallery";

// Sample gallery images - replace these with your actual project photos
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    alt: "Modern kitchen remodel",
    category: "kitchen",
    title: "Modern Kitchen Remodel",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    alt: "Bathroom renovation",
    category: "bathroom",
    title: "Luxury Bathroom Renovation",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Deck construction",
    category: "outdoor",
    title: "Custom Deck Construction",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Basement finishing",
    category: "remodeling",
    title: "Basement Finishing Project",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Home repair",
    category: "maintenance",
    title: "Drywall Repair & Paint",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=800&q=80",
    alt: "Kitchen cabinet installation",
    category: "kitchen",
    title: "Kitchen Cabinet Installation",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    alt: "Fence repair",
    category: "outdoor",
    title: "Fence Repair & Staining",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    alt: "Bathroom tile work",
    category: "bathroom",
    title: "Bathroom Tile Installation",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    alt: "Flooring installation",
    category: "remodeling",
    title: "Hardwood Flooring Installation",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-blue-600 text-white shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Wrench className="h-8 w-8" />
            <span className="text-2xl font-bold">Hire a Hubby MN</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-blue-200 transition">
              About
            </Link>
            <Link href="#services" className="hover:text-blue-200 transition">
              Services
            </Link>
            <Link href="#gallery" className="hover:text-blue-200 transition">
              Gallery
            </Link>
            <Link href="#why-us" className="hover:text-blue-200 transition">
              Why Us
            </Link>
            <Link href="#contact" className="hover:text-blue-200 transition">
              Contact
            </Link>
          </div>
          <a
            href="https://fb.com/book/hireahubbymn/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Book Now
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hire a Hubby MN
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light italic">
            When your hubby just ain&apos;t handy enough
          </p>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Professional home maintenance and remodeling services in metro and
            central Minnesota
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fb.com/book/hireahubbymn/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-xl"
            >
              Schedule Service
            </a>
            <a
              href="https://www.facebook.com/hireahubbymn/photos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition shadow-xl border-2 border-white"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Let&apos;s Be Honest...
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl mb-6">
                Over the years our lifestyles have evolved into{" "}
                <strong>digital chaos</strong>. Some of us weren&apos;t taught
                the <em>&quot;handy&quot;</em> skills of keeping up or changing
                a home... and some of us just don&apos;t have the <em>time</em>{" "}
                to complete home maintenance needs.
              </p>
              <h3 className="text-3xl font-bold text-blue-600 mb-6">
                That&apos;s where we come in!
              </h3>
              <p className="text-xl">
                Hire a Hubby is here to help you with your home maintenance and
                remodeling needs in the metro and central areas of Minnesota.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Why Choose Hire a Hubby?
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            How are we different than your neighborhood handyman?
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Super Speedy
              </h3>
              <p className="text-gray-700">
                We are efficient with timeline - we respect your time and get
                the job done quickly without sacrificing quality.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Great Relationships
              </h3>
              <p className="text-gray-700">
                We build great relationships (sometimes even friendships) with
                our customers. Bonus points if we can get a laugh from our
                jokes.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <Star className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Attention to Detail
              </h3>
              <p className="text-gray-700">
                We pay attention to detail - no cutting corners here. Every job
                is done right the first time.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Honest Opinion
              </h3>
              <p className="text-gray-700">
                We will give our honest professional opinion (when it&apos;s
                asked for) - no upselling or unnecessary work.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Reasonable Rates
              </h3>
              <p className="text-gray-700">
                We aren&apos;t going to rip you off. Fair pricing for quality
                work - that&apos;s our promise.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Full Service
              </h3>
              <p className="text-gray-700">
                From small repairs to full remodels, we handle all your home
                maintenance needs with expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Our Work
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Check out some of our completed projects
          </p>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600">
                  Home Maintenance
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ General repairs</li>
                  <li>✓ Plumbing fixes</li>
                  <li>✓ Electrical work</li>
                  <li>✓ Drywall repair</li>
                  <li>✓ Painting</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600">
                  Remodeling
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Kitchen updates</li>
                  <li>✓ Bathroom renovations</li>
                  <li>✓ Basement finishing</li>
                  <li>✓ Deck construction</li>
                  <li>✓ Custom projects</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600">
                  Installations
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Flooring</li>
                  <li>✓ Fixtures</li>
                  <li>✓ Cabinets</li>
                  <li>✓ Doors & windows</li>
                  <li>✓ Shelving</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600">
                  Outdoor Work
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Fence repair</li>
                  <li>✓ Deck maintenance</li>
                  <li>✓ Gutter cleaning</li>
                  <li>✓ Pressure washing</li>
                  <li>✓ Landscaping help</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tell us about your needs and timeline. Check out what we&apos;ve
            done so far, then let&apos;s discuss your project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fb.com/book/hireahubbymn/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-xl inline-flex items-center justify-center gap-2"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Book on Facebook
            </a>
            <a
              href="https://www.facebook.com/hireahubbymn/photos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition shadow-xl border-2 border-white"
            >
              View Our Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Wrench className="h-6 w-6" />
              <span className="text-xl font-bold">Hire a Hubby MN</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                Serving metro and central Minnesota
              </p>
              <p className="text-sm text-gray-500 mt-2">
                © {new Date().getFullYear()} Hire a Hubby MN. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
