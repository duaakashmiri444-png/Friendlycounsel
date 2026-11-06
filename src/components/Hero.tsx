import React, { useState } from 'react';
import { MessageCircle, ShieldCheck, Heart, Sparkles, ArrowRight, Lock, Check } from 'lucide-react';
import { SiteConfig } from '../types';
import { buildWhatsAppUrl } from '../utils/config';

interface HeroProps {
  config: SiteConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const [selectedTopic, setSelectedTopic] = useState('🫂 Need someone to talk to');

  // Clear point-by-point list requested by user
  const supportPoints = [
    {
      id: 'heartbroken',
      emoji: '💔',
      title: 'For someone heartbroken',
      desc: 'Going through breakup, rejection, or missing someone',
      prefill: 'Hi! I am going through heartbreak and really need someone friendly to talk to.',
    },
    {
      id: 'need-to-talk',
      emoji: '🫂',
      title: 'Need someone to talk to',
      desc: 'Feeling lonely, unheard, or isolated today',
      prefill: 'Hi! I feel alone and just need a friendly person to talk to right now.',
    },
    {
      id: 'life-problems',
      emoji: '🌧️',
      title: 'Want to discuss life problems',
      desc: 'Everyday stress, family issues, or career pressure',
      prefill: 'Hi! I want to discuss some personal life problems with you.',
    },
    {
      id: 'friendly-advice',
      emoji: '💡',
      title: 'Need friendly advice',
      desc: 'Stuck in a situation and need an outside view',
      prefill: 'Hi! I am stuck with a decision and need your friendly advice and perspective.',
    },
    {
      id: 'honest-review',
      emoji: '🪞',
      title: 'Need an honest review about yourself',
      desc: 'Unbiased thoughts on your situation & feelings',
      prefill: 'Hi! I want an honest, non-judgmental review about my situation and myself.',
    },
    {
      id: 'friendly-chat',
      emoji: '☕',
      title: 'Just need a friendly daily chat',
      desc: 'Casual, caring conversation with zero pressure',
      prefill: 'Hi! I just want a friendly daily chat and someone who listens.',
    },
  ];

  const primaryFriendUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.creatorName}! (Let me be your friend). I saw your website and would love to start friendly chatting and emotional support.`
  );

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-18 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5F1E9] to-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Centered Header & Adjusted Short Subheading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          {/* Badge: Your Friendly Counsellor */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E8F0EA] border border-[#CCDCD0] rounded-full text-xs font-semibold text-[#29422F] mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#48734E]"></span>
            <span>Your Friendly Counsellor</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2A1E] tracking-tight leading-[1.18] mb-3 text-balance">
            All You Need Is a Friend, Not a Therapist.
          </h1>

          {/* Adjusted Short Subheading */}
          <p className="text-base sm:text-lg font-medium text-[#4A644E] mb-6">
            Connect with me for personal emotional support and guidance.
          </p>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={primaryFriendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#2D4532] hover:bg-[#1E3023] rounded-xl transition-all duration-150 shadow-md hover:shadow-lg active:scale-98"
            >
              <MessageCircle className="w-5 h-5 text-[#9FE2AB]" />
              <span>(Let Me Be Your Friend) Send Message</span>
            </a>

            <a
              href="#plans"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-[#2E4333] bg-[#EAF1EB] hover:bg-[#DFEBE1] border border-[#CCDCD0] rounded-xl transition-colors"
            >
              <span>View Plans & Pricing</span>
            </a>
          </div>

          {/* Clean trust reassurance */}
          <div className="flex items-center justify-center gap-3 text-xs text-[#526956] mt-5">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#476B4C]" />
              100% Private
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-[#476B4C]" />
              Friendly & Non-judgmental
            </span>
            <span>·</span>
            <span>Daily Chats & Voice Calls</span>
          </div>
        </div>

        {/* Clear Point-by-Point Menu: Highly Optimized for Mobile & Desktop */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-5 sm:p-8 border border-[#DFE8E1] shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F0F5F1]">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#1F2F23]">
                Tap What You Need Right Now:
              </h2>
              <p className="text-xs text-[#5D7362]">
                Choose from the menu below to start a direct, friendly 1-on-1 chat on WhatsApp.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-[#3E5F44] bg-[#EAF2EC] px-3 py-1 rounded-full">
              <Lock className="w-3 h-3 text-[#4A7250]" />
              <span>Direct WhatsApp</span>
            </div>
          </div>

          {/* List in points and clear manner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {supportPoints.map((point) => {
              const pointUrl = buildWhatsAppUrl(config.whatsappNumber, point.prefill);
              const isSelected = selectedTopic === point.title;

              return (
                <a
                  key={point.id}
                  href={pointUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedTopic(point.title)}
                  className={`group p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 text-left active:scale-98 ${
                    isSelected
                      ? 'bg-[#F2F7F3] border-[#3E6144] shadow-xs'
                      : 'bg-[#FAF8F5] hover:bg-[#F2F7F3] border-[#E5EFE7] hover:border-[#CCDCD0]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl shrink-0 p-2 bg-white rounded-xl border border-[#E7EFE9] shadow-2xs group-hover:scale-105 transition-transform">
                      {point.emoji}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#233527] group-hover:text-[#37543C] truncate">
                        {point.title}
                      </h3>
                      <p className="text-xs text-[#5C7260] line-clamp-1 mt-0.5">
                        {point.desc}
                      </p>
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#2D4532] text-[#2D4532] group-hover:text-white flex items-center justify-center shrink-0 border border-[#D5E2D7] transition-colors shadow-2xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Quick Mobile Tip */}
          <div className="mt-4 pt-3 border-t border-[#F2F6F3] flex items-center justify-between text-[11px] text-[#69806D]">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#48734E]" />
              No clinical forms required
            </span>
            <span className="text-right">
              Just click any point to chat freely
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
