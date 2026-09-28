import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const categories: Category[] = [
  {
    id: "flavoured-al-faham",
    title: "Flavoured Al Faham",
    subtitle: "Charcoal Grilled Specialties",
    image: "/images/menu-tandoor.jpg",
  },
  {
    id: "biriyani",
    title: "Biriyani",
    subtitle: "Aromatic & Authentic",
    image: "/images/menu-biriyani.jpg",
  },
  {
    id: "arabic",
    title: "Arabic",
    subtitle: "Middle Eastern Delights",
    image: "/images/menu-arabic.jpg",
  },
  {
    id: "breads",
    title: "Breads",
    subtitle: "Fresh Naans & Rotis",
    image: "/images/menu-breads.jpg",
  },
  {
    id: "flavoured-rice",
    title: "Flavoured Rice",
    subtitle: "Infused & Seasoned",
    image: "/images/culinary-experience-img.png",
  },
  {
    id: "egg",
    title: "Egg Specialties",
    subtitle: "Rich & Savory",
    image: "/images/culinary-experience-img.png",
  },
  {
    id: "meals",
    title: "Traditional Meals",
    subtitle: "Hearty Thalis & Platters",
    image: "/images/culinary-experience-img.png",
  },
  {
    id: "fish-on-plate",
    title: "Fish on Plate",
    subtitle: "Grilled & Fried Catch",
    image: "/images/sushi-selection.jpg",
  },
  {
    id: "tandoor",
    title: "Tandoor",
    subtitle: "Clay Oven Grill",
    image: "/images/menu-tandoor.jpg",
  },
  {
    id: "from-sea",
    title: "From Sea",
    subtitle: "Ocean Fresh Delicacies",
    image: "/images/sushi-selection.jpg",
  },
  {
    id: "appetizers",
    title: "Appetizers",
    subtitle: "Starters & Small Bites",
    image: "/images/truffle-pasta.jpg",
  },
  {
    id: "from-the-great-wall",
    title: "From the Great Wall",
    subtitle: "Authentic Asian Starters",
    image: "/images/culinary-experience-img.png",
  },
  {
    id: "salads",
    title: "Salads",
    subtitle: "Fresh & Crisp Greens",
    image: "/images/culinary-experience-img.png",
  },
  {
    id: "chinese-rice-and-noodles",
    title: "Chinese Rice & Noodles",
    subtitle: "Wok Tossed Classics",
    image: "/images/menu-chinese-noodles.jpg",
  },
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "Handcrafted & Wood-Fired",
    image: "/images/truffle-pasta.jpg",
  },
  {
    id: "thai-cuisine",
    title: "Thai Cuisine",
    subtitle: "Aromatic Herbs & Spices",
    image: "/images/culinary-experience-img.png",
  },
  {
    id: "north-indian-veg-tastes",
    title: "North Indian Veg Tastes",
    subtitle: "Rich Curries & Gravies",
    image: "/images/menu-veg-curry.jpg",
  },
  {
    id: "indian-non-veg-dishes",
    title: "Indian Non Veg Dishes",
    subtitle: "Spiced Meat & Poultry",
    image: "/images/wagyu-steak.jpg",
  },
];

export default function CuisineCategories() {
  return (
    <section className="bg-[#FAF7F2] pb-24 pt-8 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center justify-center space-x-4 mb-3">
            <span className="h-[1px] w-10 sm:w-16 bg-[#CDB58E]/60 inline-block" />
            <span className="text-[#A88B52] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em]">
              EXPLORE OUR CATEGORIES
            </span>
            <span className="h-[1px] w-10 sm:w-16 bg-[#CDB58E]/60 inline-block" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal tracking-tight leading-tight mb-3">
            Multicuisine{" "}
            <span className="font-serif italic text-[#B38F4E]">
              Offerings
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Explore our extensive selection of 18 handcrafted culinary categories.
          </p>
        </div>

        {/* 18 Category Cards Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href="/menu"
              className="group bg-[#F4EFE7] hover:bg-[#EFE9DF] rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-between border border-[#E8DEC9]/60 hover:border-[#D9CBAE] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer transform hover:-translate-y-1"
            >
              {/* Dish Image Container */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3 flex items-center justify-center overflow-hidden rounded-full">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={110}
                  height={110}
                  className="object-cover w-full h-full rounded-full group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col items-center">
                <h3 className="font-serif text-sm sm:text-base font-semibold text-stone-900 mb-0.5 group-hover:text-[#B38F4E] transition-colors leading-tight">
                  {cat.title}
                </h3>
                <span className="text-stone-500 text-[10px] font-light tracking-wide">
                  {cat.subtitle}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
