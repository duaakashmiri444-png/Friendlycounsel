import React, { useState } from 'react';
import { MessageCircle, CheckCheck, Play, Pause, Sparkles, Send, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { SiteConfig } from '../types';
import { buildWhatsAppUrl } from '../utils/config';

interface HowItWorksProps {
  config: SiteConfig;
}

interface ChatScenario {
  id: string;
  tabTitle: string;
  emoji: string;
  clientTime: string;
  clientMessage: string;
  counsellorTime: string;
  counsellorMessage: string;
  hasVoiceNote?: boolean;
  voiceNoteDuration?: string;
  clientReplyTime: string;
  clientReply: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ config }) => {
  const [activeScenarioId, setActiveScenarioId] = useState('heartbreak');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const scenarios: ChatScenario[] = [
    {
      id: 'heartbreak',
      tabTitle: 'Heartbreak & Grief',
      emoji: '💔',
      clientTime: '11:42 PM',
      clientMessage:
        "I can’t stop crying tonight. Everyone keeps telling me to 'just move on', but it hurts so much and I feel like an idiot for missing them after everything...",
      counsellorTime: '11:43 PM',
      counsellorMessage:
        "Please don’t ever call yourself an idiot for having a tender heart. Heartbreak is real grief, and it doesn't vanish on anyone else’s timeline. 🌿 You don't have to 'just move on' tonight. I am right here with you. What hurts the most right now?",
      hasVoiceNote: true,
      voiceNoteDuration: '0:42',
      clientReplyTime: '11:45 PM',
      clientReply:
        "Thank you so much for not lecturing me... Hearing your voice and knowing someone isn't judging me made me take a full deep breath for the first time all day.",
    },
    {
      id: 'overthinking',
      tabTitle: 'Overthinking & Stress',
      emoji: '💭',
      clientTime: '2:15 AM',
      clientMessage:
        "It's 2am and my brain won't shut down. Family pressure, career worries, fear of failure... I feel like I'm falling behind everyone in life.",
      counsellorTime: '2:16 AM',
      counsellorMessage:
        "When late-night thoughts spiral, everything looks twice as terrifying as it actually is. You are not behind in life; you're just emotionally overwhelmed right now. Let's slow down. Pick just one worry to tell me about first, and we will untangle it together step by step.",
      hasVoiceNote: false,
      clientReplyTime: '2:18 AM',
      clientReply:
        "Breaking it down like that already makes it feel less scary. Here is what happened with family today...",
    },
    {
      id: 'lonely',
      tabTitle: 'Feeling Lonely & Unheard',
      emoji: '🫂',
      clientTime: '6:30 PM',
      clientMessage:
        "I am surrounded by people every day at university/work, but no one actually knows me. Nobody asks how I am doing. I just feel invisible.",
      counsellorTime: '6:31 PM',
      counsellorMessage:
        "I hear you, and that quiet, invisible loneliness in a crowded room is one of the heaviest things to carry. But you reached out today, and that took genuine courage. You are seen here, and your feelings matter. Let me be your friend. How was your day, honestly?",
      hasVoiceNote: true,
      voiceNoteDuration: '0:35',
      clientReplyTime: '6:34 PM',
      clientReply:
        "That honestly made me tear up in relief. It feels so good to have someone who actually wants to know.",
    },
    {
      id: 'advice',
      tabTitle: 'Need Honest Advice',
      emoji: '💡',
      clientTime: '4:10 PM',
      clientMessage:
        "I need to make a tough decision about a personal relationship, but everyone I ask gives me biased opinions or gossip. Can I get your honest outside view?",
      counsellorTime: '4:12 PM',
      counsellorMessage:
        "Absolutely. You will get zero gossip, zero family bias, and zero judgment from me. Lay out the full situation exactly as you see it—the good, the bad, and what your gut is telling you. Let's examine it with a calm, clear lens.",
      hasVoiceNote: false,
      clientReplyTime: '4:13 PM',
      clientReply:
        "That's exactly what I needed. Here is the full story from the beginning...",
    },
  ];

  const currentScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const waStartUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.creatorName}! (Let me be your friend). I saw your chat preview demonstration on your website and would love to start our friendly conversation.`
  );

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-y border-[#E8EDE9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#E8F0EA] border border-[#CCDCD0] rounded-full text-xs font-semibold text-[#29422F] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#527357]" />
            <span>Real Conversation Experience</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A1E] tracking-tight mb-2 text-balance">
            See How Our Conversations Work
          </h2>
          <p className="text-sm sm:text-base text-[#4E6352] max-w-md mx-auto">
            Wondering what it feels like to talk with me? Here is how a real client conversation looks in our safe, private space:
          </p>

          {/* Scenario Selector Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#F4EFEA] rounded-2xl border border-[#DFD6CB] max-w-xl mx-auto shadow-2xs">
            {scenarios.map((scen) => (
              <button
                key={scen.id}
                type="button"
                onClick={() => {
                  setActiveScenarioId(scen.id);
                  setIsPlayingAudio(false);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeScenarioId === scen.id
                    ? 'bg-[#2D4532] text-white shadow-xs'
                    : 'text-[#4A3B2E] hover:text-[#1F2F23] hover:bg-white/60'
                }`}
              >
                <span>{scen.emoji}</span>
                <span>{scen.tabTitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Realistic Chat Interface Mockup */}
        <div className="max-w-2xl mx-auto bg-[#F6F3EE] rounded-3xl border border-[#D5E1D7] shadow-xl overflow-hidden">
          
          {/* Chat Window Top Header */}
          <div className="bg-[#2D4532] text-white px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/src/assets/images/counsellor_portrait_1793978423116.jpg"
                  alt={config.creatorName}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#96C49E]"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#4EDB6A] border-2 border-[#2D4532] rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-tight leading-tight flex items-center gap-1.5">
                  <span>{config.creatorName}</span>
                  <span className="text-[10px] bg-[#3B5B41] text-[#A6DDB0] px-1.5 py-0.2 rounded font-normal">
                    Your Friend
                  </span>
                </h3>
                <p className="text-[11px] text-[#A7D1AF]">Online · Ready to listen</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-[#A7D1AF] bg-[#223625] px-2.5 py-1 rounded-full border border-[#39563E]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9FE2AB]" />
              <span>End-to-End Encrypted</span>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 sm:p-6 space-y-4 min-h-[360px] bg-[#F8F5F0] overflow-y-auto">
            <div className="text-center">
              <span className="text-[10px] text-[#7C9180] bg-[#ECE6DC] px-3 py-0.5 rounded-full font-medium">
                🔒 Private 1-to-1 Conversation · {currentScenario.tabTitle}
              </span>
            </div>

            {/* 1. Client Message (Right-aligned, soft dark green tint) */}
            <div className="flex justify-end">
              <div className="max-w-[85%] sm:max-w-[80%] bg-[#2D4532] text-white rounded-2xl rounded-tr-xs p-3.5 sm:p-4 shadow-xs text-xs sm:text-[13px] leading-relaxed">
                <p className="text-[#A7D1AF] text-[10px] font-semibold mb-1">You (Client)</p>
                <p className="text-white">{currentScenario.clientMessage}</p>
                <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#91C39A]">
                  <span>{currentScenario.clientTime}</span>
                  <CheckCheck className="w-3.5 h-3.5 text-[#9FE2AB]" />
                </div>
              </div>
            </div>

            {/* 2. Counsellor Reply (Left-aligned, white card) */}
            <div className="flex justify-start">
              <div className="max-w-[88%] sm:max-w-[82%] bg-white rounded-2xl rounded-tl-xs p-3.5 sm:p-4 border border-[#DFE8E1] shadow-xs text-xs sm:text-[13px] leading-relaxed">
                <p className="text-[#3F6144] text-[10px] font-bold mb-1 flex items-center gap-1">
                  <span>{config.creatorName} (Friendly Counsellor)</span>
                  <span className="text-[#55785B]">🌿</span>
                </p>
                <p className="text-[#26372A]">{currentScenario.counsellorMessage}</p>
                <div className="mt-1 flex items-center justify-end text-[10px] text-[#869E8A]">
                  <span>{currentScenario.counsellorTime}</span>
                </div>
              </div>
            </div>

            {/* Optional Voice Note Bubble if applicable */}
            {currentScenario.hasVoiceNote && (
              <div className="flex justify-start">
                <div className="max-w-[85%] sm:max-w-[75%] bg-white rounded-2xl rounded-tl-xs p-3 border border-[#D5E5D8] shadow-xs">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-9 h-9 rounded-full bg-[#2D4532] text-white flex items-center justify-center shrink-0 hover:bg-[#1E3023] transition-colors cursor-pointer"
                      aria-label="Play sample voice note"
                    >
                      {isPlayingAudio ? (
                        <Pause className="w-4 h-4 text-[#9FE2AB]" />
                      ) : (
                        <Play className="w-4 h-4 text-[#9FE2AB] ml-0.5" />
                      )}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 h-4">
                        <span className="w-1 h-3 bg-[#47704C] rounded-full animate-pulse"></span>
                        <span className="w-1 h-4 bg-[#47704C] rounded-full"></span>
                        <span className="w-1 h-2 bg-[#89B38F] rounded-full"></span>
                        <span className="w-1 h-4 bg-[#47704C] rounded-full"></span>
                        <span className="w-1 h-3 bg-[#89B38F] rounded-full"></span>
                        <span className="w-1 h-4 bg-[#47704C] rounded-full"></span>
                        <span className="w-1 h-2 bg-[#89B38F] rounded-full"></span>
                        <span className="w-1 h-3 bg-[#47704C] rounded-full"></span>
                      </div>
                      <p className="text-[10px] text-[#556F5A] mt-1 font-medium">
                        🎙️ Voice message from {config.creatorName} ({currentScenario.voiceNoteDuration})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Client Reply back (Relief) */}
            <div className="flex justify-end">
              <div className="max-w-[85%] sm:max-w-[80%] bg-[#2D4532] text-white rounded-2xl rounded-tr-xs p-3.5 sm:p-4 shadow-xs text-xs sm:text-[13px] leading-relaxed">
                <p className="text-[#A7D1AF] text-[10px] font-semibold mb-1">You (Client)</p>
                <p className="text-white">{currentScenario.clientReply}</p>
                <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#91C39A]">
                  <span>{currentScenario.clientReplyTime}</span>
                  <CheckCheck className="w-3.5 h-3.5 text-[#9FE2AB]" />
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Chat Prompt Footer */}
          <div className="p-3.5 bg-white border-t border-[#DFE8E1] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#526D57]">
              <Heart className="w-4 h-4 text-[#48734E]" />
              <span>Ready for your own private conversation?</span>
            </div>

            <a
              href={waStartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2D4532] hover:bg-[#1E3023] rounded-xl transition-all shadow-xs active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-[#9FE2AB]" />
              <span>Start Your Chat on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
