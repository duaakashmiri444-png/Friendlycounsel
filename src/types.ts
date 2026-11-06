export interface SiteConfig {
  brandName: string;
  creatorName: string;
  whatsappNumber: string; // e.g. "923001234567" or "[Your WhatsApp Number]"
  instagramUsername: string; // e.g. "your_handle"
  email: string; // e.g. "support@yourdomain.com"
  sevenDayPrice: string; // e.g. "PKR 4,500" or "PKR [Your Price]"
  thirtyDayPrice: string; // e.g. "PKR 14,000" or "PKR [Your 30-Day Price]"
  sessionDuration: string; // e.g. "45–60 Minutes" or "[Your Session Duration]"
  qualifications: string; // e.g. "Certified Emotional Wellness Mentor & Active Listener"
  heroHeadline: string;
  heroSubheadline: string;
  bioHeadline: string;
  bioStory: string;
}

export interface SupportCardItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  whatsappPreFill: string;
}
