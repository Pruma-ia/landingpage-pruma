import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CaretDown,
  Checks,
  Circuitry,
  FlowArrow,
  GearSix,
  HandCoins,
  LockKey,
  Path,
  Rows,
  Sparkle,
  UsersThree,
  X,
  List,
  Briefcase,
} from "@phosphor-icons/react";

type NavItem = {
  label: string;
  href: string;
};

type Benefit = {
  title: string;
  description: string;
  icon: ReactNode;
};

type UseCase = {
  title: string;
  bullets: string[];
  icon: ReactNode;
};

type Step = {
  title: string;
  description: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

const navItems: NavItem[] = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Casos de uso", href: "#casos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Confiança", href: "#confianca" },
];

const benefits: Benefit[] = [
  {
    title: "Menos retrabalho",
    description: "Fluxos mais consistentes e menos tarefas repetidas no dia a dia.",
    icon: <Rows size={20} weight="duotone" />,
  },
  {
    title: "Mais escala com controle",
    description: "A operação cresce com regras claras, histórico e checkpoints.",
    icon: <FlowArrow size={20} weight="duotone" />,
  },
  {
    title: "Integração com a operação atual",
    description: "Sem exigir troca de ERP, CRM ou sistemas já consolidados.",
    icon: <Circuitry size={20} weight="duotone" />,
  },
];

const useCases: UseCase[] = [
  {
    title: "Financeiro e administrativo",
    bullets: [
      "Conciliação e conferência entre sistemas",
      "Cobrança e follow-up com histórico",
      "Organização de documentos e cadastros",
      "Aprovações com validação humana",
    ],
    icon: <HandCoins size={22} weight="duotone" />,
  },
  {
    title: "Comercial",
    bullets: [
      "Triagem inicial de leads",
      "Atualização de CRM sem digitação manual",
      "Apoio à preparação de propostas",
      "Follow-up por etapa e responsável",
    ],
    icon: <Briefcase size={22} weight="duotone" />,
  },
  {
    title: "Atendimento e operações",
    bullets: [
      "Roteamento de demandas por prioridade",
      "Padronização de handoffs entre áreas",
      "Abertura e atualização de fluxos internos",
      "Retenção de conhecimento operacional",
    ],
    icon: <UsersThree size={22} weight="duotone" />,
  },
];

const steps: Step[] = [
  {
    title: "Diagnóstico",
    description: "Mapeamos gargalos, sistemas e pontos de esforço manual.",
  },
  {
    title: "Priorização",
    description: "Definimos os fluxos com melhor impacto e viabilidade.",
  },
  {
    title: "Implementação",
    description: "Automatizamos sem exigir troca do ambiente atual.",
  },
  {
    title: "Validação e evolução",
    description: "Ajustamos o fluxo com controle humano quando necessário.",
  },
];

const trustItems = [
  "Sem trocar ERP ou CRM",
  "Validação humana em etapas críticas",
  "Implementação orientada por processo",
  "Estrutura pensada com segurança e LGPD",
];

const faqs: FAQItem[] = [
  {
    question: "Isso substitui meu time?",
    answer:
      "Não. A proposta é reduzir esforço operacional repetitivo e liberar o time para análise, atendimento, gestão e decisão.",
  },
  {
    question: "A automação roda sozinha?",
    answer:
      "Depende do fluxo. Em etapas críticas, a operação pode manter validação humana antes de seguir.",
  },
  {
    question: "Serve para PMEs?",
    answer:
      "Sim. O foco da Pruma IA é justamente ajudar PMEs a ganhar escala sem inflar o trabalho manual.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-brand-base text-brand-ink">
      <header className="sticky top-0 z-30 border-b border-brand-line/80 bg-brand-base/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#topo" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-panel text-white shadow-[0_18px_35px_-22px_rgba(36,31,55,0.8)]">
              <Sparkle size={18} weight="fill" />
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight">Pruma IA</p>
              <p className="text-[11px] uppercase tracking-[0.26em] text-brand-muted">
                Automação operacional
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-brand-copy transition-colors duration-300 hover:text-brand-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <PrimaryButton href="#cta">Solicitar diagnóstico gratuito</PrimaryButton>
          </div>

          <button
            type="button"
            aria-label="Abrir navegação"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-line bg-white text-brand-ink lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-brand-line bg-brand-base lg:hidden"
            >
              <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-5 sm:px-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-brand-copy"
                  >
                    {item.label}
                  </a>
                ))}
                <PrimaryButton href="#cta">Solicitar diagnóstico gratuito</PrimaryButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="topo">
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(118,92,255,0.12),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(78,58,150,0.12),transparent_18%)]"
          />
          <div className="mx-auto grid min-h-[calc(100dvh-5rem)] w-full max-w-7xl items-center gap-16 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
            <motion.div {...reveal} className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-brand-muted">
                <GearSix size={14} />
                IA para operações de PMEs
              </span>

              <h1 className="mt-8 text-5xl font-semibold tracking-[-0.06em] text-brand-ink sm:text-6xl lg:text-[4.9rem] lg:leading-[0.92]">
                Menos trabalho manual.
                <br />
                Mais operação fluida.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-copy sm:text-xl">
                A Pruma IA mapeia processos e implementa automações inteligentes para PMEs operarem
                com menos retrabalho, mais integração e mais controle.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="#cta">Solicitar diagnóstico gratuito</PrimaryButton>
                <SecondaryButton href="#como-funciona">Como funciona</SecondaryButton>
              </div>

              <p className="mt-5 text-sm text-brand-muted">
                Diagnóstico inicial sem custo. Retorno em até 1 dia útil.
              </p>
            </motion.div>

            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.06 }} className="relative z-10">
              <HeroVisual />
            </motion.div>
          </div>
        </section>

        <section id="beneficios" className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-3">
              {benefits.map((item) => (
                <motion.article
                  key={item.title}
                  {...reveal}
                  className="rounded-[28px] border border-brand-line bg-white px-6 py-6 shadow-[0_26px_80px_-68px_rgba(41,31,71,0.4)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-panel">
                    {item.icon}
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-brand-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-copy">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="casos" className="py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-brand-muted">
                Casos de uso
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-brand-ink sm:text-5xl">
                Aplicações práticas onde a operação mais sente atrito.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-copy">
                Casos enxutos, com integração à rotina atual e foco em ganho operacional real.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {useCases.map((item) => (
                <motion.article
                  key={item.title}
                  {...reveal}
                  className="rounded-[30px] border border-brand-line bg-white p-6 shadow-[0_28px_90px_-72px_rgba(41,31,71,0.42)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-panel">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-brand-ink">{item.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-brand-copy">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-brand-muted">
                Como funciona
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-brand-ink sm:text-5xl">
                Um processo simples para automatizar com clareza.
              </h2>
            </motion.div>

            <motion.div
              {...reveal}
              className="mt-12 rounded-[34px] border border-brand-line bg-white p-6 shadow-[0_28px_100px_-76px_rgba(41,31,71,0.42)] sm:p-8"
            >
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {steps.map((step, index) => (
                  <div key={step.title} className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-sm font-semibold text-brand-panel">
                      0{index + 1}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-brand-ink">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-copy">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="confianca" className="py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 rounded-[36px] bg-brand-panel px-6 py-8 text-white shadow-[0_36px_120px_-74px_rgba(36,31,55,0.8)] sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
              <motion.div {...reveal} className="max-w-xl">
                <p className="text-sm font-medium uppercase tracking-[0.26em] text-white/50">Confiança</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  Implementação séria, pensada para a operação real.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/72">
                  A proposta da Pruma IA é automatizar com processo, segurança e critério de negócio.
                </p>
              </motion.div>

              <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.06 }} className="grid gap-3">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/88"
                  >
                    <Checks size={18} className="text-brand-glow" weight="duotone" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-4xl px-5 sm:px-6 lg:px-8">
            <motion.div {...reveal} className="space-y-4">
              {faqs.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={item.question}
                    className="overflow-hidden rounded-[24px] border border-brand-line bg-white shadow-[0_24px_80px_-72px_rgba(41,31,71,0.42)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-base font-medium text-brand-ink">{item.question}</span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <CaretDown size={18} className="text-brand-muted" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="border-t border-brand-line px-5 py-5 text-sm leading-relaxed text-brand-copy sm:px-6">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="cta" className="py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
            <motion.div
              {...reveal}
              className="rounded-[38px] border border-brand-line bg-white px-6 py-10 text-center shadow-[0_34px_120px_-80px_rgba(41,31,71,0.42)] sm:px-8 lg:px-12"
            >
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-brand-muted">
                Diagnóstico gratuito
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-brand-ink sm:text-5xl">
                Descubra onde sua operação pode ganhar eficiência com automação bem aplicada.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-copy">
                Uma leitura inicial do processo para encontrar oportunidades reais de ganho, sem
                promessas genéricas.
              </p>
              <div className="mt-8 flex justify-center">
                <PrimaryButton href="mailto:contato@prumaia.com.br">Solicitar diagnóstico gratuito</PrimaryButton>
              </div>
              <p className="mt-5 text-sm text-brand-muted">
                Diagnóstico inicial sem custo. Retorno em até 1 dia útil.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-line/80 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
          <div className="max-w-lg">
            <p className="text-xl font-semibold tracking-tight text-brand-ink">Pruma IA</p>
            <p className="mt-3 text-sm leading-relaxed text-brand-copy">
              Automação operacional com inteligência aplicada para PMEs brasileiras.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-brand-copy">
            <a href="#privacidade" className="transition-colors duration-300 hover:text-brand-ink">
              Privacidade
            </a>
            <a href="#lgpd" className="transition-colors duration-300 hover:text-brand-ink">
              LGPD
            </a>
            <a href="mailto:contato@prumaia.com.br" className="transition-colors duration-300 hover:text-brand-ink">
              Contato
            </a>
          </div>
        </div>
        <div className="mx-auto mt-8 grid w-full max-w-7xl gap-4 border-t border-brand-line/80 px-5 pt-6 text-sm leading-relaxed text-brand-muted sm:px-6 lg:grid-cols-2 lg:px-8">
          <p id="privacidade">Espaço preparado para a política de privacidade.</p>
          <p id="lgpd">Espaço preparado para a política LGPD e atendimento ao titular.</p>
        </div>
      </footer>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div
        aria-hidden="true"
        className="absolute -left-6 top-8 h-44 w-44 rounded-full bg-brand-glow/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-52 w-52 rounded-full bg-brand-accent/10 blur-3xl"
      />

      <div className="relative rounded-[34px] bg-brand-panel p-4 shadow-[0_40px_120px_-70px_rgba(36,31,55,0.85)] sm:p-5">
        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Fluxo operacional</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Automação com
                <br />
                mais controle
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-white">
              <Path size={22} weight="duotone" />
            </div>
          </div>

          <div className="mt-10">
            <div className="rounded-[26px] bg-white/6 p-5 backdrop-blur">
              <div className="grid gap-6">
                <WorkflowRow
                  title="Entrada organizada"
                  text="Dados, demandas e rotinas entram no fluxo certo."
                />
                <WorkflowDivider />
                <WorkflowRow
                  title="Execução conectada"
                  text="A operação avança integrada aos sistemas atuais."
                />
                <WorkflowDivider />
                <WorkflowRow
                  title="Validação crítica"
                  text="Etapas sensíveis podem manter aprovação humana."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowRow({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-brand-panel">
        <LockKey size={18} weight="duotone" />
      </div>
      <div>
        <p className="text-base font-medium text-white">{title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-white/65">{text}</p>
      </div>
    </div>
  );
}

function WorkflowDivider() {
  return <div className="h-px w-full bg-white/10" />;
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.18 }}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-panel px-6 py-3.5 text-sm font-medium text-white shadow-[0_20px_40px_-24px_rgba(36,31,55,0.75)]"
    >
      {children}
      <ArrowRight size={16} />
    </motion.a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.18 }}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-line bg-white px-6 py-3.5 text-sm font-medium text-brand-ink"
    >
      {children}
    </motion.a>
  );
}

export default App;
