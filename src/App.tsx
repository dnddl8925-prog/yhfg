/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Car, 
  ChevronRight, 
  CheckCircle2,
  Zap,
  ThumbsUp,
  ArrowRight,
  History
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';


const SAFETY_FEATURES = [
  {
    title: "드라이버 검증",
    content: "무사고 경력 3년 이상, 범죄기록 조회 필수. 까다로운 선발 과정을 통과한 드라이버만 운행합니다.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "실시간 관제",
    content: "모든 차량은 24시간 관제 센터와 연결됩니다. 긴급 상황 시 즉시 대응하여 안전을 보호합니다.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "종합 보험 가입",
    content: "최대 10억원 보장 종합 보험 가입. 만일의 사고에도 완벽한 보상을 약속드립니다.",
    icon: <ThumbsUp className="w-6 h-6" />
  },
  {
    title: "최신형 차량 & 점검",
    content: "전 차량 최신형 모델 도입 및 월 1회 필수 점검. 항상 최상의 컨디션을 유지하는 차량으로 편안한 이동을 보장합니다.",
    icon: <Car className="w-6 h-6" />
  }
];

export default function App() {
  const PHONE_NUMBER = "010-6441-2902";

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white antialiased selection:bg-sky-500/30 selection:text-sky-200">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 via-black to-black" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-600/5 blur-[120px] rounded-full translate-x-1/4" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-red-500/20 text-red-500 border border-red-500/40 px-5 py-2 rounded-full text-base font-black tracking-tight shadow-[0_0_20px_rgba(239,68,68,0.2)]">안전운행</span>
              <span className="bg-neon-green/20 text-neon-green border border-neon-green/40 px-5 py-2 rounded-full text-base font-black tracking-tight shadow-[0_0_20px_rgba(57,255,20,0.2)]">젊은 기사 배차</span>
              <span className="bg-yellow-400/20 text-yellow-400 border border-yellow-400/40 px-5 py-2 rounded-full text-base font-black tracking-tight shadow-[0_0_20px_rgba(250,204,21,0.2)]">착한 요금</span>
              <span className="bg-sky-500/20 text-sky-400 border border-sky-500/40 px-5 py-2 rounded-full text-base font-black tracking-tight shadow-[0_0_20px_rgba(14,165,233,0.2)]">최신형 차량</span>
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-tight mb-10 tracking-tighter">
              <span className="animate-multi-color-flash">장거리 전문</span><br />
              콜택시
            </h1>
            <p className="text-xl md:text-2xl text-sky-100/70 mb-14 font-medium leading-relaxed max-w-xl tracking-tight">
              젊은 기사님의 쾌적한 운행과 최신형 차량, 가성비 장거리 택시.<br className="hidden sm:block" />
              가장 <span className="text-red-500 font-black text-glow-red">안전</span>하고 편안한 이동 경험을 선사합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={handleCall}
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-5 rounded-2xl text-xl font-black flex items-center justify-center gap-3 transition-all shadow-2xl shadow-yellow-400/30 active:scale-95 group"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                예약 문의
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {SAFETY_FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-stone-900/30 border border-white/5 hover:border-sky-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-sky-100/60 text-base leading-relaxed font-medium">{feature.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-600/10 blur-[120px] rounded-full translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-yellow-600/5 blur-[100px] rounded-full -translate-x-1/3" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[1.1] animate-pulse-glow">
            <span className="text-red-500 text-glow-red">안전운행</span><br />
            <span className="animate-multi-color-flash">장거리 전문</span><br />
            <span className="text-yellow-400">대구 장거리 콜택시</span>
          </h2>
          <p className="text-sky-100/70 text-xl md:text-2xl mb-14 font-medium tracking-tight">
            합리적인 요금과 빠른 배차, 지금 바로 경험하세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={handleCall}
              className="bg-yellow-400 text-black px-12 py-6 rounded-3xl text-2xl font-black flex items-center justify-center gap-4 hover:bg-yellow-300 transition-all active:scale-95 shadow-2xl shadow-yellow-400/40"
            >
              <Phone className="w-8 h-8" />
              전화 예약하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-stone-500 py-24 border-t border-white/5 relative overflow-hidden">
        {/* Background Logo - Samsung Lions */}
        <div className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none translate-x-1/4 translate-y-1/4 z-0 rotate-[-15deg]">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Samsung_Lions_logo.svg/1200px-Samsung_Lions_logo.svg.png" 
            alt="Samsung Lions Logo" 
            className="w-[900px] h-auto grayscale invert"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
            <div className="max-w-md">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-sky-600 p-1 rounded-lg">
                  <Car className="text-white w-5 h-5" />
                </div>
                <span className="text-white text-2xl font-black tracking-tighter">대구 장거리 콜택시</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h4 className="text-white font-black mb-6 text-sm uppercase tracking-widest">Menu</h4>
                <ul className="space-y-4 text-sm font-bold">
                </ul>
              </div>
              <div>
                <h4 className="text-white font-black mb-6 text-sm uppercase tracking-widest">Contact</h4>
                <ul className="space-y-4 text-sm font-bold">
                  <li className="flex items-center gap-2 text-sky-100/80">
                    <Phone size={16} className="text-sky-400" />
                    {PHONE_NUMBER}
                  </li>
                  <li className="flex items-center gap-2 text-sky-100/80">
                    <MapPin size={16} className="text-sky-400" />
                    대구 전지역
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold">
            <p></p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">개인정보 처리방침</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button for Mobile */}
      <div className="fixed bottom-8 right-8 z-50 md:hidden">
        <button 
          onClick={handleCall}
          className="bg-yellow-400 text-black w-20 h-20 rounded-full shadow-[0_20px_50px_rgba(250,204,21,0.4)] flex items-center justify-center active:scale-90 transition-transform"
        >
          <Phone className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
}
