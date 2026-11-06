import { SiteConfig } from '../types';

export const DEFAULT_CONFIG: SiteConfig = {
  brandName: '[Your Brand Name]',
  creatorName: '[Your Name]',
  whatsappNumber: '+92 300 1234567', // Standard Pakistani format placeholder
  instagramUsername: '[Your Instagram Username]',
  email: 'contact@[YourBrand].com',
  sevenDayPrice: 'PKR [Your Price]',
  thirtyDayPrice: 'PKR [Your 30-Day Price]',
  sessionDuration: '[Your Session Duration] (Daily Voice Call + Texting)',
  qualifications: 'Your Friendly Counsellor · Daily Chats & Voice Calls',
  heroHeadline: 'All You Need Is a Friend, Not a Therapist.',
  heroSubheadline: 'Connect with me for your emotional support and guidance.',
  bioHeadline: 'Let me be your friend who listens, cares, and guides you daily.',
  bioStory: 'I offer friendly emotional support because no one should feel alone with their everyday problems. Think of me as your personal friend who you can text anytime or talk to over daily voice calls. We discuss whatever is on your mind—family issues, heartbreak, lonely nights, or stress—and take small, calming steps forward together.'
};

/**
 * Normalizes phone numbers for WhatsApp wa.me links.
 * Pakistani numbers often look like 0300 1234567 or +92 300 1234567.
 */
export function getCleanWhatsAppNumber(rawNumber: string): string {
  // Strip non-digit characters
  const digits = rawNumber.replace(/\D/g, '');
  if (!digits) return '923001234567'; // Fallback sample number

  // If local Pakistani 03XX... number, convert to international 923XX...
  if (digits.startsWith('03') && digits.length === 11) {
    return '92' + digits.slice(1);
  }
  return digits;
}

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanNumber = getCleanWhatsAppNumber(phoneNumber);
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export function buildInstagramUrl(username: string): string {
  const cleanHandle = username.replace(/^@/, '').trim();
  if (!cleanHandle || cleanHandle === '[Your Instagram Username]') {
    return 'https://instagram.com';
  }
  return `https://instagram.com/${cleanHandle}`;
}

export function buildMailtoUrl(email: string, subject: string, body?: string): string {
  const cleanEmail = email.trim();
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  const query = params.length > 0 ? `?${params.join('&')}` : '';
  return `mailto:${cleanEmail}${query}`;
}
