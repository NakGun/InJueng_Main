
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'aircon' | 'building' | 'office';
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  date: string;
  imageUrl: string;
  description: string;
}

export interface SiteConfig {
  companyName: string;
  slogan: string;
  heroImage: string;
  contactEmail: string;
  phone: string;
  address: string;
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
