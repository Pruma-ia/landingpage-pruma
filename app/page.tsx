"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ─── Animation hook ──────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// FadeIn wrapper — animate Y:20→0 + opacity:0→1 on enter
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "400ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconCheck({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function IconExclamation() {
  return (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}

function IconMessage() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1E4A]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        <a href="#" aria-label="Pruma IA — página inicial" className="shrink-0">
          <Image
            src={`${bp}/logo-branco.png`}
            alt="Pruma IA"
            width={160}
            height={40}
            className="h-8 sm:h-9 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {[
            ["Problema", "#problema"],
            ["Solução", "#solucao"],
            ["Como funciona", "#como-funciona"],
            ["O time", "#time"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 min-h-[44px] inline-flex items-center"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20conhecer%20a%20Pruma%20IA."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#00B4E6] hover:bg-[#0099C4] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 min-h-[44px]"
        >
          <IconWhatsApp />
          Falar com especialista
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {/* Mobile menu — slide down */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-[#0B1E4A] border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {[
            ["Problema", "#problema"],
            ["Solução", "#solucao"],
            ["Como funciona", "#como-funciona"],
            ["O time", "#time"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-white/80 hover:text-white font-medium py-3 border-b border-white/5 last:border-0 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20conhecer%20a%20Pruma%20IA."
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="inline-flex items-center justify-center gap-2 bg-[#00B4E6] text-white font-semibold px-5 py-3.5 rounded-lg mt-3"
          >
            <IconWhatsApp />
            Falar com especialista
          </a>
        </div>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

// WhatsApp-style animated chat
const CHAT_MESSAGES = [
  { from: "client", text: "Olá, vocês têm agenda para amanhã?" },
  { from: "bot",    text: "Olá! Temos horários disponíveis às 10h, 14h e 16h. Qual prefere? 🙂" },
  { from: "client", text: "14h por favor" },
  { from: "bot",    text: "✅ Confirmado! Agendamento às 14h de amanhã. Vou enviar o lembrete!" },
] as const;


function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3 py-2.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-white/40"
          style={{
            animation: "typingBounce 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function HeroVisual() {
  // visibleCount: how many messages are shown; typing: bot is "typing"
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function runSequence() {
      while (!cancelled) {
        // Reset
        setVisibleCount(0);
        setTyping(false);
        await delay(600);

        for (let i = 0; i < CHAT_MESSAGES.length; i++) {
          if (cancelled) return;
          const msg = CHAT_MESSAGES[i];

          if (msg.from === "bot") {
            setTyping(true);
            await delay(1000);
            if (cancelled) return;
            setTyping(false);
          } else {
            await delay(400);
          }

          if (cancelled) return;
          setVisibleCount((c) => c + 1);
          await delay(i === CHAT_MESSAGES.length - 1 ? 3000 : 900);
        }
      }
    }

    function delay(ms: number) {
      return new Promise<void>((res) => setTimeout(res, ms));
    }

    runSequence();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="hidden lg:flex flex-col gap-3 w-[320px] xl:w-[360px] shrink-0">
      {/* WhatsApp chat card */}
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {/* Header — WhatsApp green */}
        <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-none">Agente Pruma IA</p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" aria-hidden="true" />
              <p className="text-white/70 text-xs">Online agora</p>
            </div>
          </div>
        </div>

        {/* Chat body */}
        <div
          className="bg-[#0d2137] px-3 py-4 flex flex-col gap-2 min-h-[200px]"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0,180,230,0.04) 0%, transparent 70%)",
          }}
          aria-live="polite"
          aria-label="Simulação de conversa com o agente Pruma IA"
        >
          {CHAT_MESSAGES.slice(0, visibleCount).map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
              style={{
                animation: "msgIn 250ms cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              <span
                className={`text-[13px] px-3.5 py-2 max-w-[82%] leading-relaxed shadow-sm ${
                  msg.from === "bot"
                    ? "bg-[#1f3a52] text-white/90 rounded-2xl rounded-tl-sm"
                    : "bg-[#005C4B] text-white rounded-2xl rounded-tr-sm"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div
              className="flex justify-start"
              style={{ animation: "msgIn 200ms ease both" }}
            >
              <div className="bg-[#1f3a52] rounded-2xl rounded-tl-sm">
                <TypingDots />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats mini-cards */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { value: "24/7", label: "Atendimento" },
          { value: "< 1s", label: "Resposta" },
          { value: "100%", label: "Automatizado" },
          { value: "∞", label: "Escalável" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center"
          >
            <p className="text-[#00B4E6] text-xl font-bold">{s.value}</p>
            <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay so hero animates in after paint
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const visible = mounted;
  const base = "transition-all ease-[cubic-bezier(0.16,1,0.3,1)]";

  return (
    <section className="relative bg-[#0B1E4A] min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 20% 60%, #00B4E6, transparent), radial-gradient(ellipse 40% 40% at 80% 20%, #00B4E6, transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-28 lg:py-0 flex items-center gap-16 xl:gap-24">
        {/* Left — copy */}
        <div className="flex-1 min-w-0">
          <div
            className={`inline-flex items-center gap-2 bg-[#00B4E6]/10 border border-[#00B4E6]/30 rounded-full px-4 py-1.5 mb-8 ${base} duration-500`}
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#00B4E6] animate-pulse" aria-hidden="true" />
            <span className="text-[#00B4E6] text-sm font-medium">Automação com IA para sua empresa crescer</span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] mb-6 ${base} duration-500 delay-75`}
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
          >
            Precisão em{" "}
            <span className="text-[#00B4E6]">cada processo.</span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-white/65 leading-relaxed mb-10 max-w-xl ${base} duration-500 delay-100`}
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
          >
            Enquanto você perde vendas por demora no atendimento e desperdiça horas em tarefas repetitivas, seus concorrentes já automatizaram. A Pruma IA coloca a sua empresa no mesmo nível — sem contratar mais ninguém.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${base} duration-500 delay-150`}
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
          >
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20conhecer%20a%20Pruma%20IA."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#00B4E6] hover:bg-[#0099C4] active:scale-[0.97] text-white font-semibold px-7 py-4 rounded-xl text-base transition-all duration-200 min-h-[52px]"
            >
              <IconWhatsApp />
              Quero automatizar meu negócio
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 active:scale-[0.97] text-white font-medium px-7 py-4 rounded-xl text-base transition-all duration-200 min-h-[52px]"
            >
              Ver como funciona
              <IconArrowRight />
            </a>
          </div>

          <div
            className={`mt-12 flex flex-wrap gap-x-6 gap-y-3 ${base} duration-500 delay-200`}
            style={{ opacity: visible ? 1 : 0 }}
          >
            {[
              "Atendimento 24/7 no WhatsApp",
              "Retorno visível no 1º mês",
              "Diagnóstico gratuito, sem compromisso",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/55 text-sm">
                <span className="text-[#00B4E6]">
                  <IconCheck />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right — decorative visual */}
        <div
          className={`${base} duration-700 delay-300`}
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

// ─── Section Header helper ────────────────────────────────────────────────────

function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
}: {
  label: string;
  title: React.ReactNode;
  subtitle: string;
  light?: boolean;
}) {
  return (
    <FadeIn className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
      <p className="text-[#00B4E6] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-4">
        {label}
      </p>
      <h2 className={`text-3xl sm:text-4xl font-bold mb-5 text-balance ${light ? "text-white" : "text-[#0B1E4A]"}`}>
        {title}
      </h2>
      <p className={`text-lg leading-relaxed ${light ? "text-white/60" : "text-slate-500"}`}>
        {subtitle}
      </p>
    </FadeIn>
  );
}

// ─── Integrations Marquee ─────────────────────────────────────────────────────

function IntegrationsMarquee() {
  const logos = [
    { name: "WhatsApp", icon: BrandIcons.whatsapp },
    { name: "Instagram", icon: BrandIcons.instagram },
    { name: "Facebook", icon: BrandIcons.facebook },
    { name: "Telegram", icon: BrandIcons.telegram },
    { name: "Google Meet", icon: BrandIcons.googlemeet },
    { name: "Conta Azul", icon: BrandIcons.contaazul },
    { name: "Omie", icon: BrandIcons.omie },
    { name: "Bling", icon: BrandIcons.bling },
    { name: "TOTVS", icon: BrandIcons.totvs },
    { name: "Google Sheets", icon: BrandIcons.sheets },
    { name: "RD Station", icon: BrandIcons.rdstation },
    { name: "HubSpot", icon: BrandIcons.hubspot },
    { name: "Pipedrive", icon: BrandIcons.pipedrive },
    { name: "Asaas", icon: BrandIcons.asaas },
    { name: "Mercado Pago", icon: BrandIcons.mercadopago },
    { name: "Notion", icon: BrandIcons.notion },
  ];
  const repeated = [...logos, ...logos];

  return (
    <section className="bg-white border-y border-slate-100 py-6">
      <p className="text-center text-slate-400 text-xs font-semibold uppercase tracking-widest mb-5">
        Integramos com as ferramentas que você já usa
      </p>
      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div
          className="flex items-center"
          style={{ animation: "marquee 28s linear infinite", width: "max-content" }}
        >
          {repeated.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 mx-8 shrink-0 opacity-40 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
            >
              <span className="shrink-0">{logo.icon}</span>
              <span className="text-slate-600 text-sm font-semibold whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Problem ──────────────────────────────────────────────────────────────────

function Problem() {
  const stats = [
    {
      icon: <IconClock />,
      value: "21h",
      label: "por semana",
      description:
        "Responder mensagem, lançar pedido, atualizar planilha, cobrar cliente. Tudo isso pode ser feito por um agente de IA enquanto você foca no que realmente importa.",
      source: "Conta Simples / Visa",
    },
    {
      icon: <IconExclamation />,
      value: "40%",
      label: "das PMEs",
      description:
        "Planilha que ninguém atualiza, processo que depende de uma pessoa só, informação que some. Enquanto isso, o cliente espera — e muitas vezes vai embora.",
      source: "Sebrae 2025",
    },
    {
      icon: <IconChart />,
      value: "30%",
      label: "da receita",
      description:
        "Venda que não foi feita por demora na resposta. Retrabalho por processo manual. Cliente que foi embora por falta de acompanhamento. Tudo isso some com a automação certa.",
      source: "McKinsey",
    },
  ];

  return (
    <section id="problema" className="bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          label="O problema"
          title="Reconhece alguma dessas situações?"
          subtitle="Se você respondeu sim para pelo menos uma, a automação já está pagando por si mesma antes mesmo de começar."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.value} delay={i * 80}>
              <div className="bg-white border border-slate-100 rounded-2xl p-7 sm:p-8 flex flex-col gap-4 h-full">
                <div className="text-[#00B4E6]">{stat.icon}</div>
                <div>
                  <span className="text-5xl font-bold text-[#0B1E4A]">{stat.value}</span>
                  <span className="text-slate-500 text-lg ml-2">{stat.label}</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm flex-1">{stat.description}</p>
                <p className="text-slate-400 text-xs">Fonte: {stat.source}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Integration Badge ────────────────────────────────────────────────────────

function IntegrationBadge({ name, color, icon }: { name: string; color: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 bg-white rounded-xl px-3.5 py-2.5 shadow-sm border border-slate-100">
      <div className="shrink-0" style={{ color }}>{icon}</div>
      <span className="text-slate-700 text-xs font-semibold whitespace-nowrap">{name}</span>
    </div>
  );
}

// Simple brand SVG icons
const BrandIcons = {
  whatsapp: (
    <svg width="18" height="18" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#F58529"/><stop offset="50%" stopColor="#DD2A7B"/><stop offset="100%" stopColor="#8134AF"/></linearGradient></defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig)"/>
      <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none"/>
      <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#1877F2"/><path d="M15.5 8H13V6.5C13 5.7 13.5 5.5 14 5.5H15.5V3H13C10.8 3 10 4.3 10 6V8H8V11H10V21H13V11H15L15.5 8Z" fill="white"/></svg>
  ),
  telegram: (
    <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#26A5E4"/><path d="M5.5 11.5l12-5-3 13-4-4-2 2V14l8-7-9 4.5-.5-1z" fill="white" stroke="white" strokeWidth="0.5"/></svg>
  ),
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#EA4335"/><path d="M4 8l8 5 8-5V6H4v2zm0 2.5V18h16v-7.5L12 15 4 10.5z" fill="white"/></svg>
  ),
  googlemeet: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#00832D"/><path d="M15 8H9a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 00-1-1z" fill="white"/><path d="M17 10l3-2v8l-3-2v-4z" fill="white"/></svg>
  ),
  contaazul: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#0087C3"/><text x="5" y="17" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="white">CA</text></svg>
  ),
  omie: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#FF6B00"/><text x="6" y="17" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="white">O</text></svg>
  ),
  bling: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#0055A5"/><text x="5.5" y="17" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="white">B</text></svg>
  ),
  totvs: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#C5003E"/><text x="2.5" y="17" fontFamily="Arial" fontWeight="bold" fontSize="10" fill="white">TOTVS</text></svg>
  ),
  sheets: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#0F9D58"/><rect x="5" y="7" width="14" height="2" rx="1" fill="white" opacity=".9"/><rect x="5" y="11" width="14" height="2" rx="1" fill="white" opacity=".9"/><rect x="5" y="15" width="9" height="2" rx="1" fill="white" opacity=".9"/></svg>
  ),
  rdstation: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#F04E23"/><text x="4.5" y="17" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="white">RD</text></svg>
  ),
  hubspot: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#FF7A59"/><circle cx="12" cy="9" r="3" fill="white"/><path d="M6 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
  ),
  pipedrive: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#1A1A1A"/><circle cx="12" cy="10" r="4" fill="#25D366"/><rect x="10" y="14" width="4" height="6" rx="2" fill="#25D366"/></svg>
  ),
  asaas: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#0078D7"/><text x="5" y="17" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="white">As</text></svg>
  ),
  mercadopago: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#00B1EA"/><text x="5.5" y="17" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="white">MP</text></svg>
  ),
  notion: (
    <svg width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#1a1a1a"/><text x="6" y="17" fontFamily="serif" fontWeight="bold" fontSize="14" fill="white">N</text></svg>
  ),
};

// ─── Solution 1 — Atendimento ─────────────────────────────────────────────────

function SolutionAtendimento() {
  const channels = [
    { name: "WhatsApp Business", color: "#25D366", icon: BrandIcons.whatsapp },
    { name: "Instagram", color: "#DD2A7B", icon: BrandIcons.instagram },
    { name: "Facebook", color: "#1877F2", icon: BrandIcons.facebook },
    { name: "Telegram", color: "#26A5E4", icon: BrandIcons.telegram },
    { name: "E-mail", color: "#EA4335", icon: BrandIcons.email },
    { name: "Google Meet", color: "#00832D", icon: BrandIcons.googlemeet },
  ];

  return (
    <section id="solucao" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E4A] mb-5 text-balance">
              Automação de <span className="text-[#00B4E6]">Atendimento</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Seu negócio respondendo clientes em segundos — 24 horas por dia, 7 dias por semana. Um agente de IA treinado com o contexto do seu negócio que atende, qualifica e converte, sem precisar de ninguém da equipe.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                { title: "Atendimento 24/7 sem custo extra", desc: "Nenhuma venda perdida por demora ou fora do horário comercial." },
                { title: "Qualificação automática de leads", desc: "O agente identifica quem tem perfil e encaminha para a equipe no momento certo." },
                { title: "Agendamentos sem intervenção humana", desc: "O cliente escolhe o horário, confirma e recebe o lembrete — tudo automático." },
                { title: "FAQ inteligente com contexto real", desc: "Responde dúvidas específicas do seu negócio, não respostas genéricas." },
                { title: "Transferência humanizada para a equipe", desc: "Quando precisa de um humano, a transição é suave e com histórico completo." },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[#00B4E6]/10 flex items-center justify-center text-[#00B4E6]">
                    <IconCheck className="w-3 h-3" />
                  </span>
                  <div>
                    <span className="text-[#0B1E4A] font-semibold text-sm">{item.title} </span>
                    <span className="text-slate-500 text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-[#00B4E6]/8 border border-[#00B4E6]/20 rounded-xl">
              <p className="text-[#0B1E4A] text-sm font-semibold">Resultado esperado: mais vendas fechadas, menos tempo perdido respondendo sempre as mesmas perguntas.</p>
            </div>
          </FadeIn>

          {/* Right — integrations */}
          <FadeIn delay={120}>
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-6">Canais que integramos</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {channels.map((c) => (
                  <IntegrationBadge key={c.name} name={c.name} color={c.color} icon={c.icon} />
                ))}
              </div>
              <div className="border-t border-slate-200 pt-6">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">Como funciona na prática</p>
                <div className="space-y-3">
                  {[
                    { step: "1", text: "Cliente manda mensagem no WhatsApp às 22h" },
                    { step: "2", text: "Agente responde em segundos, entende a necessidade" },
                    { step: "3", text: "Qualifica, agenda ou encaminha — sem ninguém acordado" },
                    { step: "4", text: "Você acorda com o negócio feito" },
                  ].map((s) => (
                    <div key={s.step} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#00B4E6] text-white text-xs font-bold flex items-center justify-center shrink-0">{s.step}</span>
                      <span className="text-slate-600 text-sm">{s.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Solution 2 — Processos ───────────────────────────────────────────────────

function SolutionProcessos() {
  const platforms = [
    { name: "Conta Azul", color: "#0087C3", icon: BrandIcons.contaazul },
    { name: "Omie", color: "#FF6B00", icon: BrandIcons.omie },
    { name: "Bling", color: "#0055A5", icon: BrandIcons.bling },
    { name: "TOTVS", color: "#C5003E", icon: BrandIcons.totvs },
    { name: "Google Sheets", color: "#0F9D58", icon: BrandIcons.sheets },
    { name: "RD Station", color: "#F04E23", icon: BrandIcons.rdstation },
    { name: "HubSpot", color: "#FF7A59", icon: BrandIcons.hubspot },
    { name: "Pipedrive", color: "#25D366", icon: BrandIcons.pipedrive },
    { name: "Asaas", color: "#0078D7", icon: BrandIcons.asaas },
    { name: "Mercado Pago", color: "#00B1EA", icon: BrandIcons.mercadopago },
    { name: "Notion", color: "#1a1a1a", icon: BrandIcons.notion },
  ];

  return (
    <section className="bg-[#0B1E4A] py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — integrations */}
          <FadeIn>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 order-2 lg:order-1">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-6">ERPs, CRMs e plataformas que integramos</p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {platforms.map((p) => (
                  <IntegrationBadge key={p.name} name={p.name} color={p.color} icon={p.icon} />
                ))}
                <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3.5 py-2.5 border border-white/10">
                  <span className="text-white/50 text-xs font-semibold">+ outros sob demanda</span>
                </div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Exemplos de automação</p>
                <div className="space-y-2.5">
                  {[
                    "Novo cliente → cria conta no Conta Azul + envia contrato + agenda onboarding",
                    "Boleto vencido → dispara cobrança automática no WhatsApp",
                    "Pedido aprovado no Bling → atualiza planilha + notifica equipe",
                    "Lead no RD Station → qualifica + agenda reunião automaticamente",
                  ].map((ex, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-[#00B4E6] mt-0.5 shrink-0 text-xs">→</span>
                      <span className="text-white/55 text-xs leading-relaxed">{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — copy */}
          <FadeIn delay={120} className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 text-balance">
              Automação de <span className="text-[#00B4E6]">Processos</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Conectamos os sistemas que você já usa e fazemos eles trabalharem juntos, sozinhos. Sem retrabalho, sem dado perdido, sem processo que depende de uma única pessoa.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                { title: "Onboarding digital de clientes", desc: "Do cadastro ao contrato assinado, tudo fluindo automaticamente." },
                { title: "Emissão e gestão de documentos", desc: "Notas fiscais, contratos e cobranças gerados sem intervenção manual." },
                { title: "Integrações entre ERP, CRM e planilhas", desc: "Os dados aparecem onde precisam estar, no momento certo." },
                { title: "Relatórios e dashboards automáticos", desc: "Você acessa os números sem precisar montar nada." },
                { title: "Alertas e aprovações inteligentes", desc: "A equipe é notificada só quando realmente precisa agir." },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[#00B4E6]/20 flex items-center justify-center text-[#00B4E6]">
                    <IconCheck className="w-3 h-3" />
                  </span>
                  <div>
                    <span className="text-white font-semibold text-sm">{item.title} </span>
                    <span className="text-white/50 text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-white/70 text-sm font-semibold">Resultado esperado: menos retrabalho, operação que escala sem contratar mais, e você tomando decisão com dados atualizados.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Integration Diagram ─────────────────────────────────────────────────────

function IntegrationDiagram() {
  const channels = [
    { name: "WhatsApp Business", icon: BrandIcons.whatsapp },
    { name: "Instagram", icon: BrandIcons.instagram },
    { name: "Telegram", icon: BrandIcons.telegram },
    { name: "E-mail", icon: BrandIcons.email },
    { name: "Facebook", icon: BrandIcons.facebook },
    { name: "Google Meet", icon: BrandIcons.googlemeet },
  ];

  const systems = [
    { name: "Conta Azul", icon: BrandIcons.contaazul },
    { name: "Omie", icon: BrandIcons.omie },
    { name: "HubSpot", icon: BrandIcons.hubspot },
    { name: "Google Sheets", icon: BrandIcons.sheets },
    { name: "RD Station", icon: BrandIcons.rdstation },
    { name: "+ 50 integrações", icon: null },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          label="Arquitetura"
          title={<>Conectado com tudo que <span className="text-[#00B4E6]">você já usa</span></>}
          subtitle="A Pruma IA fica no centro da sua operação — integrando canais de atendimento com seus sistemas de negócio em tempo real."
        />

        <FadeIn>
          <div className="flex flex-col lg:flex-row items-stretch rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Left — channels */}
            <div className="flex-1 p-7 lg:p-8">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-5">
                Canais do cliente
              </p>
              <div className="flex flex-col gap-2.5">
                {channels.map((c) => (
                  <div key={c.name} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                    <span className="shrink-0">{c.icon}</span>
                    <span className="text-slate-700 text-sm font-medium">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center — Pruma IA hub */}
            <div className="flex flex-col items-center justify-center px-8 py-10 bg-[#0B1E4A] lg:w-52 shrink-0 border-y lg:border-y-0 lg:border-x border-slate-700/40">
              <Image
                src={`${bp}/logo-branco.png`}
                alt="Pruma IA"
                width={120}
                height={30}
                className="h-7 w-auto mb-5"
              />
              <div className="flex flex-col items-center gap-3">
                <span className="text-white/50 text-xs text-center leading-relaxed">
                  Agente IA treinado<br />com seu negócio
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#00B4E6]/15 border border-[#00B4E6]/30 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B4E6] animate-pulse" aria-hidden="true" />
                  <span className="text-[#00B4E6] text-xs font-semibold">Online 24/7</span>
                </span>
              </div>
            </div>

            {/* Right — systems */}
            <div className="flex-1 p-7 lg:p-8">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-5">
                Sistemas conectados
              </p>
              <div className="flex flex-col gap-2.5">
                {systems.map((s) => (
                  <div key={s.name} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                    {s.icon ? (
                      <>
                        <span className="shrink-0">{s.icon}</span>
                        <span className="text-slate-700 text-sm font-medium">{s.name}</span>
                      </>
                    ) : (
                      <span className="text-slate-400 text-sm font-medium">{s.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const HOW_STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Mapeamos os gargalos da sua operação em uma conversa direta. Identificamos onde a automação gera mais retorno e definimos o escopo com clareza.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Construção",
    description:
      "Desenvolvemos as automações sob medida para o seu negócio — integrações, fluxos e agentes de IA configurados com a sua realidade.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        <line x1="12" y1="3" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Validação",
    description:
      "Você testa tudo antes de ir ao ar. Ajustamos cada detalhe junto com o seu time até que o resultado esteja exatamente como esperado.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Operação Fluida",
    description:
      "Com a manutenção mensal, garantimos que tudo continue funcionando, evoluindo e se integrando ao crescimento do seu negócio.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          label="Como funciona"
          title="Do diagnóstico à operação em semanas"
          subtitle="Quatro etapas claras, sem burocracia — para que você veja resultado o quanto antes."
        />

        {/* Desktop — horizontal grid with arrow connectors */}
        <div className="hidden md:grid md:grid-cols-4 gap-0">
          {HOW_STEPS.map((step, i) => (
            <div key={step.number} className="flex items-start">
              <FadeIn delay={i * 100} className="flex-1 flex flex-col items-center text-center px-6">
                <span className="text-[#00B4E6] text-xs font-bold uppercase tracking-widest mb-5">
                  {step.number}
                </span>
                <div className="w-20 h-20 rounded-2xl bg-[#00B4E6]/10 border border-[#00B4E6]/20 flex items-center justify-center text-[#00B4E6] mb-6">
                  {step.icon}
                </div>
                <h3 className="text-[#0B1E4A] font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </FadeIn>

              {i < HOW_STEPS.length - 1 && (
                <div className="shrink-0 mt-[4.5rem] text-slate-300" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile — 2×2 grid */}
        <div className="md:hidden grid grid-cols-2 gap-8">
          {HOW_STEPS.map((step, i) => (
            <FadeIn key={step.number} delay={i * 80} className="flex flex-col items-center text-center">
              <span className="text-[#00B4E6] text-xs font-bold uppercase tracking-widest mb-4">
                {step.number}
              </span>
              <div className="w-16 h-16 rounded-2xl bg-[#00B4E6]/10 border border-[#00B4E6]/20 flex items-center justify-center text-[#00B4E6] mb-4">
                {step.icon}
              </div>
              <h3 className="text-[#0B1E4A] font-bold text-base mb-2">{step.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Differentials ────────────────────────────────────────────────────────────

function Differentials() {
  const items = [
    {
      icon: <IconTrophy />,
      title: "Experiência real de empresa",
      description:
        "Nosso time tem mais de 18 anos de dev e gestão em empresas de R$20M+, com projetos reais de ERP, CRM e e-commerce de alta complexidade — não somos uma agência de automação que aprendeu ontem.",
    },
    {
      icon: <IconShield />,
      title: "Resultado que você consegue medir",
      description:
        "Cada entrega tem indicadores definidos. Você sabe exatamente o que esperar — e acompanhamos junto com você se o retorno chegou. Sem promessas vagas de \"transformação digital\".",
    },
    {
      icon: <IconLock />,
      title: "Você não fica preso a nenhuma plataforma",
      description:
        "Usamos as melhores ferramentas do mercado para cada situação. Se um dia quiser trocar, migrar ou expandir — você tem total liberdade. Sem dependência de nenhum fornecedor.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          label="Por que a Pruma IA"
          title="Entregamos resultado, não só tecnologia"
          subtitle="A diferença está na experiência do time. Conhecemos a dor de quem opera uma empresa de verdade."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div className="flex flex-col gap-5 p-7 sm:p-8 rounded-2xl border border-slate-100 hover:border-[#00B4E6]/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="text-[#00B4E6]">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1E4A] mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Results ──────────────────────────────────────────────────────────────────

function Results() {
  const team = [
    {
      photo: "/foto-kelly.png",
      name: "Kelly Lima",
      role: "Operações & Produto",
      quote: "Entendo sua operação de dentro pra fora.",
      bio: "Garante que o que a gente constrói realmente encaixa na rotina do seu negócio — e não vira mais uma ferramenta que ninguém usa.",
    },
    {
      photo: "/foto-marcelo.png",
      name: "Marcelo Mattioli",
      role: "Tecnologia",
      quote: "18 anos construindo sistemas que não quebram.",
      bio: "Já viu tudo o que pode dar errado em produção. Sabe exatamente como evitar desde o início — sem atalho, sem surpresa no final.",
    },
    {
      photo: "/foto-diogo.png",
      name: "Diogo Arado",
      role: "Estratégia & Negócios",
      quote: "Já fui cliente de agência. Sei a diferença.",
      bio: "Entre um projeto que impressiona na apresentação e um que gera resultado de verdade — eu escolho o segundo. Sempre.",
    },
  ];

  return (
    <section id="time" className="bg-[#0B1E4A] py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader
          label="Quem cuida do seu projeto"
          title="Você fala direto com quem faz"
          subtitle="Nada de conta-corrente com gerente de projetos. Os três sócios trabalham pessoalmente em cada cliente — do primeiro diagnóstico até a operação rodando."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 100}>
              <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00B4E6]/30 transition-colors duration-300 h-full">
                {/* Photo */}
                <div className="relative w-full aspect-square overflow-hidden bg-white/5">
                  <Image
                    src={`${bp}${member.photo}`}
                    alt={`Foto de ${member.name}`}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E4A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-lg leading-tight">{member.name}</p>
                    <p className="text-[#00B4E6] text-xs font-semibold mt-0.5">{member.role}</p>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <p className="text-white font-semibold text-sm leading-snug">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

// Mid-page CTA strip
function MidCTA() {
  return (
    <section className="bg-[#00B4E6] py-14 sm:py-16">
      <FadeIn className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <p className="text-white font-bold text-xl sm:text-2xl leading-snug">
            Quanto tempo você ainda vai gastar<br className="hidden sm:block" /> fazendo o que uma IA pode fazer por você?
          </p>
          <p className="text-white/80 text-sm mt-2">
            Diagnóstico gratuito — sem compromisso, sem pitch de vendas.
          </p>
        </div>
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20um%20diagn%C3%B3stico%20gratuito%20com%20a%20Pruma%20IA."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 active:scale-[0.97] text-[#0B1E4A] font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 shrink-0 min-h-[52px]"
        >
          <IconWhatsApp />
          <span className="text-[#0B1E4A]">Quero meu diagnóstico grátis</span>
        </a>
      </FadeIn>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1E4A] mb-6 text-balance">
            A primeira conversa é gratuita.{" "}
            <span className="text-[#00B4E6]">E já traz clareza.</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Em 30 minutos de conversa com um dos sócios da Pruma IA, você vai saber exatamente quais processos da sua empresa podem ser automatizados, o que isso representa em tempo e dinheiro — e como fazer isso acontecer.
          </p>
          <p className="text-slate-400 text-base mb-10">
            Sem apresentação de slides. Sem proposta genérica. Uma conversa real de negócio.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20com%20a%20Pruma%20IA."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe59] active:scale-[0.97] text-white font-bold px-9 sm:px-10 py-5 rounded-xl text-lg transition-all duration-200 min-h-[60px]"
          >
            <IconWhatsApp />
            Agendar diagnóstico gratuito
          </a>
          <p className="mt-5 text-slate-400 text-sm">
            Resposta em até 1 hora · Sem compromisso · 100% gratuito
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#071330] border-t border-white/5 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <Image
            src={`${bp}/logo-branco.png`}
            alt="Pruma IA"
            width={140}
            height={35}
            className="h-8 w-auto"
          />
          <p className="text-white/30 text-sm text-center">
            © {new Date().getFullYear()} Pruma IA · São Paulo, SP ·{" "}
            <a
              href="mailto:contato@prumaia.com.br"
              className="hover:text-white/60 transition-colors"
            >
              contato@prumaia.com.br
            </a>
          </p>
          <p className="text-white/20 text-xs">Precisão em cada processo.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <IntegrationsMarquee />
      <Problem />

      <SolutionAtendimento />
      <SolutionProcessos />
      <IntegrationDiagram />
      <HowItWorks />
      <MidCTA />
      <Differentials />
      <Results />
      <FinalCTA />
      <Footer />
    </main>
  );
}
