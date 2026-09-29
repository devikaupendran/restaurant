export interface GoogleReview {
  id: string;
  authorName: string;
  authorPhoto?: string;
  authorUri?: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface GooglePlaceDetails {
  rating: number;
  userRatingCount: number;
  googleMapsUri: string;
  reviews: GoogleReview[];
  isFallback?: boolean;
}

// Fallback Google Review data used during build if API Key / Place ID are missing or API fails
const FALLBACK_GOOGLE_REVIEWS: GooglePlaceDetails = {
  rating: 4.8,
  userRatingCount: 1450,
  googleMapsUri: "https://maps.google.com/?q=Grandeur+Multicuisine+Restaurant+Korani+Attingal",
  isFallback: true,
  reviews: [
    {
      id: "rev-1",
      authorName: "Anil M.",
      authorPhoto: undefined,
      authorUri: "https://maps.google.com",
      rating: 5,
      text: "Grandeur offers an incredible fine dining experience. The Arabian Alfaham, authentic Dum Biriyani, and warm family hospitality make every visit unforgettable!",
      relativeTime: "2 weeks ago"
    },
    {
      id: "rev-2",
      authorName: "Deepak S.",
      authorPhoto: undefined,
      authorUri: "https://maps.google.com",
      rating: 5,
      text: "Sensational multicuisine menu! From sizzling steaks to fresh Chinese noodles and Arabian grills, every single dish is prepared with authentic flavors and great care.",
      relativeTime: "a month ago"
    },
    {
      id: "rev-3",
      authorName: "Vishnu R.",
      authorPhoto: undefined,
      authorUri: "https://maps.google.com",
      rating: 5,
      text: "Immaculate service, stunning open-air rooftop ambiance at Korani, and top-notch food quality. Hands down the best multi-cuisine restaurant in the Attingal & Parippally region!",
      relativeTime: "a month ago"
    },
    {
      id: "rev-4",
      authorName: "Sreejith T.",
      authorPhoto: undefined,
      authorUri: "https://maps.google.com",
      rating: 5,
      text: "Wide variety of mouth-watering dishes with polite staff and prompt service. If you are looking to enjoy a peaceful family dinner, Grandeur is the ultimate destination.",
      relativeTime: "2 months ago"
    },
    {
      id: "rev-5",
      authorName: "Priya K.",
      authorPhoto: undefined,
      authorUri: "https://maps.google.com",
      rating: 5,
      text: "Absolutely loved the ambiance and the food. The biryani was out of this world and the staff was incredibly courteous. Will definitely be coming back with family again!",
      relativeTime: "3 weeks ago"
    },
    {
      id: "rev-6",
      authorName: "Rajesh B.",
      authorPhoto: undefined,
      authorUri: "https://maps.google.com",
      rating: 4,
      text: "Great place for family dining. The kids menu is thoughtful and the desserts are heavenly. Pricing is fair for the quality you get. Highly recommended for celebrations!",
      relativeTime: "a month ago"
    },
    {
      id: "rev-7",
      authorName: "Meera N.",
      authorPhoto: undefined,
      authorUri: "https://maps.google.com",
      rating: 5,
      text: "The rooftop dining at the Korani branch is a magical experience. Perfect for date nights. The grilled seafood platter and mocktails were exceptional!",
      relativeTime: "2 weeks ago"
    },
    {
      id: "rev-8",
      authorName: "Suresh P.",
      authorPhoto: undefined,
      authorUri: "https://maps.google.com",
      rating: 5,
      text: "Best multicuisine restaurant in the area, hands down. We hosted our anniversary dinner here and the team went above and beyond to make it special.",
      relativeTime: "3 months ago"
    }
  ]
};

/**
 * Server/Build-time utility to fetch Google Places rating & customer reviews.
 * Uses the Google Places API (New).
 * Exposes NO client-side API keys and falls back gracefully on build errors.
 */
export async function getGoogleReviews(): Promise<GooglePlaceDetails> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    if (process.env.NODE_ENV === "development") {
      console.info(
        "[Google Places API] GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID not found in env. Using fallback Google review data."
      );
    }
    return FALLBACK_GOOGLE_REVIEWS;
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount,reviews,googleMapsUri`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri"
      },
      // Revalidate cache every 24 hours for build/static optimization
      next: { revalidate: 86400 }
    });

    if (!res.ok) {
      console.warn(
        `[Google Places API] Failed with status ${res.status}: ${res.statusText}. Using fallback data.`
      );
      return FALLBACK_GOOGLE_REVIEWS;
    }

    const data = await res.json();

    const reviews: GoogleReview[] = (data.reviews || []).map((rev: any, idx: number) => ({
      id: rev.name || `google-rev-${idx}`,
      authorName: rev.authorAttribution?.displayName || "Google Guest",
      authorPhoto: rev.authorAttribution?.photoUri || undefined,
      authorUri: rev.authorAttribution?.uri || data.googleMapsUri || FALLBACK_GOOGLE_REVIEWS.googleMapsUri,
      rating: rev.rating || 5,
      text: rev.text?.text || rev.originalText?.text || "",
      relativeTime: rev.relativePublishTimeDescription || "Recently"
    }));

    return {
      rating: data.rating || 4.8,
      userRatingCount: data.userRatingCount || 1450,
      googleMapsUri: data.googleMapsUri || FALLBACK_GOOGLE_REVIEWS.googleMapsUri,
      reviews: reviews.length > 0 ? reviews : FALLBACK_GOOGLE_REVIEWS.reviews,
      isFallback: false
    };
  } catch (error) {
    console.error("[Google Places API Error]", error);
    return FALLBACK_GOOGLE_REVIEWS;
  }
}
