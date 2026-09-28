import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 border-t border-white/10 text-white relative pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="group inline-block">
              <Image
                src="/images/logo.png"
                alt="Grandeur Multicuisine Restaurant Logo"
                width={280}
                height={90}
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              An extraordinary culinary destination bringing together authentic global flavors, refined gastronomy, and unforgettable dining experiences.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-amber-400 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300 font-light">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold text-amber-400 mb-6">
              Hours of Service
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300 font-light">
              <li className="flex justify-between">
                <span>Mon – Thu:</span>
                <span className="text-white font-medium">12:00 PM – 10:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri – Sat:</span>
                <span className="text-white font-medium">12:00 PM – 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white font-medium">11:30 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold text-amber-400 mb-6">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm text-neutral-300 font-light">
              <p className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>104 Grand Avenue, Culinary District, Metropolitan City</span>
              </p>
              <p className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 890-4321</span>
              </p>
              <p className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>concierge@grandeur-restaurant.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Grandeur Multicuisine Restaurant. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
