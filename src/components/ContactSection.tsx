import React, { useState } from 'react';
import { MessageCircle, Instagram, Mail, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { SiteConfig } from '../types';
import { buildWhatsAppUrl, buildInstagramUrl, buildMailtoUrl } from '../utils/config';

interface ContactSectionProps {
  config: SiteConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  // Contact form state
  const [name, setName] = useState('');
  const [contactMethod, setContactMethod] = useState(''); // WhatsApp or Email
  const [serviceInterest, setServiceInterest] = useState('7-Day Friendly Support');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Pre-filled WhatsApp message for primary card
  const standardWhatsAppText = `Hi! I visited your website and I’m interested in your personal emotional support services. Could you please share details about your sessions and 7-day support package?`;
  const whatsappUrl = buildWhatsAppUrl(config.whatsappNumber, standardWhatsAppText);
  const instagramUrl = buildInstagramUrl(config.instagramUsername);
  const emailUrl = buildMailtoUrl(
    config.email,
    'Personal Emotional Support Enquiry',
    standardWhatsAppText
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!contactMethod.trim()) {
      setFormError('Please enter your WhatsApp number or email address so I can reply.');
      return;
    }

    setFormError('');
    setFormSubmitted(true);
  };

  const handleSendViaWhatsAppFromForm = () => {
    const text = `Hi ${config.creatorName}! My name is ${name}. I am contacting you regarding: ${serviceInterest}.\n\nMy Contact: ${contactMethod}${message ? `\n\nNote: ${message}` : ''}`;
    window.open(buildWhatsAppUrl(config.whatsappNumber, text), '_blank');
  };

  const handleResetForm = () => {
    setName('');
    setContactMethod('');
    setMessage('');
    setFormSubmitted(false);
    setFormError('');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8F1EA] rounded-full text-xs font-semibold text-[#324C36] mb-3">
            <span>Direct & Personal Connection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2F23] tracking-tight mb-4">
            Let’s Talk 💚
          </h2>
          <p className="text-sm sm:text-base text-[#4C6150] leading-relaxed">
            Have something on your mind? Interested in personal guidance or 7-day support? Feel free
            to reach out. Choose the way you’re most comfortable contacting me.
          </p>
        </div>

        {/* 3 Large Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: WhatsApp (Primary) */}
          <div className="relative bg-gradient-to-br from-[#EAF4EC] to-[#DEEEE1] rounded-2xl p-7 border-2 border-[#A8CCA7] shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
            <div className="absolute top-4 right-4">
              <span className="px-2 py-0.5 bg-[#2D4532] text-white text-[10px] font-bold uppercase rounded-md tracking-wider">
                Primary
              </span>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#2D4532] text-white flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6 text-[#9FE2AB]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3322] mb-1">1-to-1 Private WhatsApp</h3>
              <p className="text-xs text-[#526D57] font-medium mb-3">{config.whatsappNumber}</p>
              <p className="text-xs sm:text-sm text-[#465E4B] leading-relaxed mb-6">
                Fastest and most confidential way to connect. Send me a private message and we will
                talk 1-on-1.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#2D4532] hover:bg-[#1E3023] rounded-xl transition-all shadow-xs"
            >
              <span>Send Private Message</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Instagram */}
          <div className="bg-white rounded-2xl p-7 border border-[#E2ECE3] shadow-xs flex flex-col justify-between hover:border-[#CCDCD0] hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F7F2EC] text-[#594431] flex items-center justify-center mb-5">
                <Instagram className="w-6 h-6 text-[#785E46]" />
              </div>
              <h3 className="text-xl font-bold text-[#233527] mb-1">Message on Instagram</h3>
              <p className="text-xs text-[#6B5A47] font-medium mb-3">@{config.instagramUsername.replace(/^@/, '')}</p>
              <p className="text-xs sm:text-sm text-[#506352] leading-relaxed mb-6">
                Prefer social media? Send me a direct message on my Instagram profile.
              </p>
            </div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#483B2E] bg-[#F7F3ED] hover:bg-[#EFE7DC] border border-[#DDD4C5] rounded-xl transition-colors"
            >
              <span>Visit Instagram Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-2xl p-7 border border-[#E2ECE3] shadow-xs flex flex-col justify-between hover:border-[#CCDCD0] hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EEF4F0] text-[#3D5B42] flex items-center justify-center mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#233527] mb-1">Send an Email</h3>
              <p className="text-xs text-[#526D57] font-medium mb-3">{config.email}</p>
              <p className="text-xs sm:text-sm text-[#506352] leading-relaxed mb-6">
                Prefer writing an email? Send your message and I’ll get back to you thoughtfully.
              </p>
            </div>
            <a
              href={emailUrl}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#2D4532] bg-[#EBF2EC] hover:bg-[#DEECE0] border border-[#CCE0D1] rounded-xl transition-colors"
            >
              <span>Compose Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Contact Enquiry Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E0ECE2] shadow-xs">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#203223] mb-1">
              Leave a Message or Quick Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#536B58]">
              Fill out this quick form. You can also forward your filled message straight to WhatsApp
              with one click!
            </p>
          </div>

          {/* Sensitive medical notice requirement */}
          <div className="mb-6 p-3.5 bg-[#FAF7F0] border border-[#E5DECD] rounded-xl flex items-start gap-2.5 text-xs text-[#63553E]">
            <AlertCircle className="w-4 h-4 text-[#8C7449] shrink-0 mt-0.5" />
            <span>
              <strong>Safe Boundary Note:</strong> Please do not share detailed medical histories,
              prescriptions, or crisis situations in this form. This website offers personal emotional
              guidance and empathetic companionship, not psychiatric crisis intervention.
            </span>
          </div>

          {formSubmitted ? (
            <div className="text-center py-6 px-4 bg-[#F2F7F3] rounded-2xl border border-[#CCE0D1]">
              <div className="w-12 h-12 rounded-full bg-[#324D37] text-white flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 text-[#9FE2AB]" />
              </div>
              <h4 className="text-lg font-bold text-[#203223] mb-2">
                Thank You, {name}!
              </h4>
              <p className="text-sm text-[#4E6753] max-w-md mx-auto mb-6">
                Your enquiry details have been prepared. For the quickest response, you can forward
                this directly to my WhatsApp, or I will review your contact info shortly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleSendViaWhatsAppFromForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2D4532] hover:bg-[#1E3023] text-white text-sm font-semibold rounded-xl shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#9FE2AB]" />
                  <span>Send to WhatsApp Now</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs text-[#526D57] hover:underline"
                >
                  Submit Another Message
                </button>
              </div>

              <p className="text-[11px] text-[#78937E] mt-4">
                Note: In this client-side preview, the WhatsApp forward delivers your enquiry directly
                to {config.creatorName}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {formError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#304533] uppercase mb-1.5">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ayesha Khan"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5E2D7] bg-[#FAF8F5] text-sm text-[#253929] focus:outline-none focus:ring-2 focus:ring-[#527357] focus:bg-white transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#304533] uppercase mb-1.5">
                  Your WhatsApp Number or Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                  placeholder="e.g. 0300 1234567 or email@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5E2D7] bg-[#FAF8F5] text-sm text-[#253929] focus:outline-none focus:ring-2 focus:ring-[#527357] focus:bg-white transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#304533] uppercase mb-1.5">
                  I Am Interested In
                </label>
                <select
                  value={serviceInterest}
                  onChange={(e) => setServiceInterest(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5E2D7] bg-[#FAF8F5] text-sm text-[#253929] focus:outline-none focus:ring-2 focus:ring-[#527357] focus:bg-white transition-all"
                >
                  <option value="Plan 1: Friendly Text Chat">Plan 1: Friendly Text Chat (1-to-1 Chat)</option>
                  <option value="Plan 2: Chat + Voice Messages">Plan 2: Chat + Voice Messages</option>
                  <option value="Plan 3: Full Care & Voice Calls">Plan 3: Full Care (Chats, Voice Notes & Calls)</option>
                  <option value="General Friendly Conversation">General Friendly Conversation</option>
                  <option value="Discuss Personal Problems">Discuss Personal Problems</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#304533] uppercase mb-1.5">
                  Brief Note (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a brief line about what is on your mind..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5E2D7] bg-[#FAF8F5] text-sm text-[#253929] focus:outline-none focus:ring-2 focus:ring-[#527357] focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-6 bg-[#2D4532] hover:bg-[#1E3023] text-white text-sm font-semibold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </div>

              <p className="text-[11px] text-[#718A76] text-center pt-2">
                This client form operates directly in your browser. Upon clicking, you can also forward
                straight to WhatsApp without waiting for email servers.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
