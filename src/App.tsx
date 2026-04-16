/* 
Conceito visual: landing page premium B2B com base navy profunda, tipografia forte,
cartões refinados e motion sutil para comunicar credibilidade operacional, tecnologia
aplicada e prontidão para empresas que querem automatizar sem trocar toda a stack.
*/

import { useState, type ElementType, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Buildings,
  CaretDown,
  Checks,
  Circuitry,
  Database,
  FileMagnifyingGlass,
  Fingerprint,
  FlowArrow,
  GearSix,
  HandCoins,
  List,
  LockKey,
  Rows,
  ShieldCheck,
  Sparkle,
  UsersThree,
  X,
} from "@phosphor-icons/react";

type IconType = ElementType;

type NavItem = {
  label: string;
  href: string;
};

type ProblemItem = {
  title: string;
  description: string;
  icon: IconType;
};

type UseCase = {
  title: string;
  area: string;
  description: string;
  icon: IconType;
  items: string[];
  className?: string;
};

type Step = {
  title: string;
  description: string;
};

type TrustItem = {
  title: string;
  description: string;
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const navigation: NavItem[] = [
  { label: "Solução", href: "#solucao" },
  { label: "Casos de uso", href: "#casos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Confiança", href: "#confianca" },
  { label: "FAQ", href: "#faq" },
];

const painPoints: ProblemItem[] = [
  {
    title: "Retrabalho que cresce junto com o volume",
    description:
      "Planilhas paralelas, validações repetidas e tarefas manuais consomem tempo de gente boa que deveria estar operando com foco.",
    icon: Rows,
  },
  {
    title: "Dependência de pessoas específicas",
    description:
      "Quando o processo vive na cabeça de poucos colaboradores, qualquer ausência gera atraso, erro e perda de contexto.",
    icon: UsersThree,
  },
  {
    title: "Sistemas fragmentados e pouca visibilidade",
    description:
      "ERP, CRM, e-mail, planilhas e portais desconectados criam ruído operacional e atrasam decisões simples.",
    icon: Database,
  },
  {
    title: "Custo operacional sobe sem padronização",
    description:
      "Sem fluxo claro, cada novo cliente, pedido ou demanda aumenta a carga operacional de forma desproporcional.",
    icon: HandCoins,
  },
];

const useCases: UseCase[] = [
  {
    area: "Financeiro e administrativo",
    title: "Fluxos críticos com menos conferência manual e mais consistência",
    description:
      "A automação entra nos pontos em que o time perde horas com conferência, cobrança, consolidação e atualização de informação.",
    icon: HandCoins,
    items: [
      "Conciliação e conferência de dados entre sistemas",
      "Cobrança, follow-up e alertas automáticos com histórico",
      "Organização documental e atualização de cadastros",
      "Padronização de aprovações com validação humana quando necessário",
    ],
    className: "lg:col-span-5",
  },
  {
    area: "Comercial",
    title: "Mais velocidade comercial sem perder contexto do processo",
    description:
      "Apoio à operação comercial para reduzir tarefas repetitivas, manter CRM íntegro e melhorar o ritmo do pipeline.",
    icon: Buildings,
    items: [
      "Triagem e qualificação inicial de leads",
      "Atualização de CRM sem depender de digitação manual",
      "Apoio à montagem de propostas e checklists comerciais",
      "Follow-up estruturado com regras por etapa e responsável",
    ],
    className: "lg:col-span-7",
  },
  {
    area: "Atendimento e operações",
    title: "Demandas roteadas, registradas e padronizadas com mais controle",
    description:
      "A operação ganha fluidez quando a entrada, a priorização e o handoff entre áreas passam a seguir regras claras.",
    icon: FlowArrow,
    items: [
      "Triagem e roteamento de solicitações por tipo, urgência e responsável",
      "Abertura e atualização de processos internos sem retrabalho",
      "Padronização de respostas, checkpoints e repasses entre times",
      "Retenção de conhecimento operacional em fluxos documentados",
    ],
    className: "lg:col-span-12",
  },
];

const steps: Step[] = [
  {
    title: "Diagnóstico",
    description:
      "Mapeamos o fluxo atual, os gargalos, os sistemas envolvidos e onde existe dependência excessiva de trabalho manual.",
  },
  {
    title: "Priorização",
    description:
      "Definimos os casos com melhor relação entre impacto operacional, esforço de implementação e segurança do processo.",
  },
  {
    title: "Implementação",
    description:
      "Construímos automações integradas à operação atual, sem forçar troca de ERP, CRM ou ferramentas já consolidadas.",
  },
  {
    title: "Validação e evolução",
    description:
      "Colocamos validação humana em etapas críticas, acompanhamos desempenho e evoluímos o fluxo com base em uso real.",
  },
];

const trustItems: TrustItem[] = [
  {
    title: "Mapeamento real do processo antes da automação",
    description:
      "A implementação parte do entendimento do fluxo, dos riscos e das exceções. Não é automação genérica aplicada no escuro.",
    icon: FileMagnifyingGlass,
  },
  {
    title: "Validação humana nos pontos críticos",
    description:
      "Em aprovações, exceções e etapas sensíveis, o processo pode exigir confirmação humana antes de seguir adiante.",
    icon: Checks,
  },
  {
    title: "Integração com a stack atual",
    description:
      "A proposta é ampliar a operação existente. ERP, CRM, planilhas, portais e e-mails continuam fazendo parte do fluxo.",
    icon: Circuitry,
  },
  {
    title: "Segurança, privacidade e desenho consciente de LGPD",
    description:
      "A arquitetura considera acesso, rastreabilidade e tratamento responsável de dados desde o início da implementação.",
    icon: ShieldCheck,
  },
  {
    title: "Foco em resultado operacional, não em hype",
    description:
      "A Pruma IA trabalha para reduzir retrabalho, manter conhecimento e dar mais previsibilidade à operação do negócio.",
    icon: Sparkle,
  },
  {
    title: "Governança e histórico para crescer com controle",
    description:
      "Padronização, logs, regras claras e responsáveis definidos ajudam a escalar sem perder visibilidade do que está acontecendo.",
    icon: Fingerprint,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Isso substitui meu time?",
    answer:
      "Não. A proposta é reduzir trabalho operacional repetitivo e liberar o time para decisões, atendimento, análise e gestão. Em muitos fluxos, a IA apoia a execução, mas a equipe continua responsável pelo processo e pelos pontos críticos.",
  },
  {
    question: "Preciso trocar meu ERP ou CRM?",
    answer:
      "Não. A Pruma IA foi posicionada justamente para operar sobre a stack existente sempre que isso fizer sentido. O objetivo é integrar e automatizar sem exigir uma troca completa de sistemas.",
  },
  {
    question: "A automação roda sozinha?",
    answer:
      "Depende do fluxo. Existem casos que podem operar de ponta a ponta, mas etapas críticas podem exigir validação humana. O desenho da automação considera risco, impacto e governança.",
  },
  {
    question: "Serve para empresas pequenas?",
    answer:
      "Sim, especialmente para PMEs que já sentem custo de retrabalho, dependência de pessoas-chave ou dificuldade para crescer sem aumentar demais a estrutura operacional.",
  },
  {
    question: "Em quanto tempo começo a ver valor?",
    answer:
      "Isso varia conforme a complexidade do processo priorizado. Em geral, o valor aparece primeiro na redução de tempo manual, na padronização e na queda de reprocessos logo após os primeiros fluxos implantados.",
  },
];

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="relative overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(77,137,255,0.14),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(143,197,255,0.08),transparent_18%)]"
      />

      <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[rgba(8,16,29,0.72)] backdrop-blur-2xl">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#topo" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-brand-accent">
              <Sparkle size={18} weight="fill" />
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight text-white">Pruma IA</p>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Automação operacional</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CTAButton href="#cta-form" variant="primary">
              Solicitar diagnóstico gratuito
            </CTAButton>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-100 transition-transform duration-300 active:scale-[0.98] lg:hidden"
            aria-label="Abrir navegação"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/[0.08] lg:hidden"
            >
              <div className="section-shell flex flex-col gap-4 py-5">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-slate-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <CTAButton href="#cta-form" variant="primary" className="justify-center">
                  Solicitar diagnóstico gratuito
                </CTAButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="topo">
        <section className="min-h-[100dvh] bg-hero">
          <div className="section-shell flex min-h-[calc(100dvh-5rem)] items-center py-16 sm:py-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <Reveal>
                <div className="max-w-3xl">
                  <span className="eyebrow">
                    <GearSix size={14} />
                    IA aplicada à operação de PMEs
                  </span>
                  <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.75rem]">
                    Automatize processos críticos da sua operação com IA, sem trocar o que já funciona.
                  </h1>
                  <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                    A Pruma IA ajuda PMEs brasileiras a mapear fluxos internos, integrar sistemas e
                    implementar automações inteligentes para reduzir trabalho manual, diminuir retrabalho,
                    preservar conhecimento e ganhar escala com mais controle.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <CTAButton href="#cta-form" variant="primary">
                      Solicitar diagnóstico gratuito
                    </CTAButton>
                    <CTAButton href="#como-funciona" variant="secondary">
                      Ver como funciona
                    </CTAButton>
                  </div>

                  <p className="mt-5 text-sm text-slate-400">
                    Diagnóstico inicial sem custo. Retorno em até 1 dia útil.
                  </p>

                  <div className="mt-12 grid gap-4 sm:grid-cols-3">
                    <MiniStat
                      title="Mais controle"
                      text="Fluxos com regras, histórico e responsáveis definidos."
                    />
                    <MiniStat
                      title="Menos retrabalho"
                      text="Dados atualizados uma vez, nos lugares certos."
                    />
                    <MiniStat
                      title="Escala real"
                      text="Crescimento operacional sem inflar tarefas manuais."
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <HeroPanel />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="problemas" className="section-divider section-spacing">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              <Reveal>
                <div className="max-w-xl">
                  <p className="kicker">Onde a operação pesa</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                    Crescer com processo manual cobra caro em tempo, margem e previsibilidade.
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-slate-300">
                    Quando o negócio começa a ganhar volume, o que antes parecia contornável vira
                    fila, dependência de pessoas específicas e dificuldade para manter padrão entre
                    áreas, sistemas e etapas do processo.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2">
                {painPoints.map((item, index) => (
                  <Reveal key={item.title} delay={0.08 * index}>
                    <InfoCard title={item.title} description={item.description} icon={item.icon} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solucao" className="section-divider section-spacing">
          <div className="section-shell">
            <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
              <Reveal>
                <div className="max-w-xl">
                  <p className="kicker">O que a Pruma IA faz na prática</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                    Identificamos fluxos repetitivos e críticos e os transformamos em automações
                    inteligentes integradas à operação atual.
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="surface p-6 sm:p-8">
                  <div className="grid gap-5">
                    <SolutionRow
                      number="01"
                      title="Mapeamento do processo real"
                      description="Analisamos o fluxo atual, exceções, dependências e sistemas envolvidos antes de propor qualquer automação."
                    />
                    <SolutionRow
                      number="02"
                      title="Integração com sistemas que já fazem parte da rotina"
                      description="ERP, CRM, planilhas, e-mail, ferramentas internas e portais podem continuar no centro da operação."
                    />
                    <SolutionRow
                      number="03"
                      title="Automação com regras, contexto e rastreabilidade"
                      description="A IA executa tarefas, movimenta informações e aciona pessoas conforme regras claras de operação."
                    />
                    <SolutionRow
                      number="04"
                      title="Validação humana em etapas sensíveis"
                      description="Quando existe risco, exceção ou decisão crítica, o processo pode solicitar revisão antes de seguir."
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="casos" className="section-divider section-spacing">
          <div className="section-shell">
            <Reveal>
              <div className="max-w-2xl">
                <p className="kicker">Casos de uso por área</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Automação aplicada onde o gargalo operacional costuma aparecer primeiro.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-12">
              {useCases.map((useCase, index) => (
                <Reveal key={useCase.title} delay={0.08 * index} className={useCase.className}>
                  <UseCaseCard useCase={useCase} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section-divider section-spacing">
          <div className="section-shell">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <Reveal>
                <div className="max-w-2xl">
                  <p className="kicker">Como funciona</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                    Um processo enxuto para sair do diagnóstico e chegar em operação com segurança.
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="max-w-xl text-base leading-relaxed text-slate-300">
                  A implantação é estruturada para priorizar impacto prático, integração viável e
                  governança do fluxo desde os primeiros casos escolhidos.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={0.08 * index}>
                  <StepCard index={index + 1} step={step} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="confianca" className="section-divider section-spacing">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <Reveal>
                <div className="max-w-xl">
                  <p className="kicker">Diferenciais e confiança</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                    IA aplicada com contexto de processo, controle operacional e desenho consciente.
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-slate-300">
                    A Pruma IA não vende uma camada genérica de automação. O trabalho é orientado
                    por processo, integração, segurança e valor de negócio mensurável na rotina da
                    empresa.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2">
                {trustItems.map((item, index) => (
                  <Reveal key={item.title} delay={0.06 * index}>
                    <InfoCard title={item.title} description={item.description} icon={item.icon} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="provas" className="section-divider section-spacing">
          <div className="section-shell">
            <Reveal>
              <div className="max-w-3xl">
                <p className="kicker">Resultados e prova</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Estrutura pronta para comprovar valor real sem inventar promessas.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-300">
                  Enquanto métricas e cases reais ainda não foram adicionados, a landing já deixa
                  espaço para apresentar evolução operacional, contexto do projeto e credibilidade
                  comercial de forma sólida.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <div className="surface h-full p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-brand-accentSoft">
                      Estrutura de prova
                    </span>
                    <span className="text-sm text-slate-400">Exemplo de layout para indicadores reais</span>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="surface-soft p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Antes</p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                        Processos dispersos, dependentes de conferência manual e pouca rastreabilidade.
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate-300">
                        Campo preparado para inserir dores, gargalos e cenário operacional de partida
                        com dados reais do cliente.
                      </p>
                    </div>
                    <div className="surface-soft p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Depois</p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                        Fluxo padronizado, integrações conectadas e acompanhamento estruturado.
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate-300">
                        Espaço pronto para indicadores reais como tempo poupado, queda de reprocesso
                        e melhoria de SLA.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-5 lg:col-span-5">
                <Reveal delay={0.08}>
                  <div className="surface p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-brand-accentSoft/80">
                      Estudo de caso exemplo
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                      Bloco pronto para contar o contexto, o fluxo automatizado e a decisão tomada.
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      Aqui entram problema inicial, desenho da automação, integração utilizada e os
                      aprendizados da implantação quando houver material real autorizado.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.14}>
                  <div className="surface p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-brand-accentSoft/80">
                      Logos e depoimentos
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                      Área reservada para prova social futura sem recorrer a clientes inventados.
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      A página já comporta logos, aspas de clientes e referências setoriais assim que
                      houver aprovação para publicação.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-divider section-spacing">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <Reveal>
                <div className="max-w-xl">
                  <p className="kicker">FAQ</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                    Perguntas que normalmente surgem antes da primeira automação entrar em operação.
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Reveal key={faq.question} delay={0.05 * index}>
                    <FAQCard
                      item={faq}
                      open={openFaq === index}
                      onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="section-divider section-spacing">
          <div className="section-shell">
            <div className="surface overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative p-6 sm:p-8 lg:p-10">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <p className="kicker">Diagnóstico gratuito</p>
                  <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                    Descubra onde sua operação está perdendo tempo e o que pode ser automatizado com segurança.
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                    A proposta do diagnóstico é sair do discurso genérico e olhar processo de verdade:
                    gargalos, exceções, dependências, integrações e oportunidades práticas de ganho.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <ChecklistItem text="Mapeamento inicial dos fluxos com mais atrito operacional" />
                    <ChecklistItem text="Leitura do cenário atual sem exigir troca de sistemas" />
                    <ChecklistItem text="Indicação de prioridades por impacto e viabilidade" />
                    <ChecklistItem text="Direcionamento com foco em controle, escala e segurança" />
                  </div>
                </div>

                <div className="border-t border-white/[0.08] bg-white/[0.03] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                  <form id="cta-form" className="space-y-5" onSubmit={(event) => event.preventDefault()}>
                    <div className="space-y-2">
                      <label htmlFor="nome" className="text-sm font-medium text-slate-200">
                        Nome
                      </label>
                      <input
                        id="nome"
                        type="text"
                        placeholder="Seu nome"
                        className="w-full rounded-2xl border border-white/10 bg-brand-panel/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-brand-accent/60 focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="empresa" className="text-sm font-medium text-slate-200">
                        Empresa
                      </label>
                      <input
                        id="empresa"
                        type="text"
                        placeholder="Nome da empresa"
                        className="w-full rounded-2xl border border-white/10 bg-brand-panel/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-brand-accent/60 focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-200">
                        E-mail corporativo
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="voce@empresa.com.br"
                        className="w-full rounded-2xl border border-white/10 bg-brand-panel/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-brand-accent/60 focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="processo" className="text-sm font-medium text-slate-200">
                        Qual processo hoje mais gera retrabalho?
                      </label>
                      <textarea
                        id="processo"
                        rows={4}
                        placeholder="Ex.: conciliação, cobrança, CRM desatualizado, roteamento de demandas..."
                        className="w-full rounded-2xl border border-white/10 bg-brand-panel/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-brand-accent/60 focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                      />
                    </div>

                    <CTAButton href="#cta-form" variant="primary" className="w-full justify-center">
                      Solicitar diagnóstico gratuito
                    </CTAButton>

                    <p className="text-sm leading-relaxed text-slate-400">
                      Estrutura pronta para conectar este formulário ao CRM, à agenda comercial ou
                      ao canal de contato da operação.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-divider py-10">
        <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-lg">
            <p className="text-xl font-semibold tracking-tight text-white">Pruma IA</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Implementação séria de IA para automação operacional em PMEs brasileiras, com foco em
              integração, produtividade, conhecimento e escala com controle.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-300">
            <a href="#privacidade" className="transition-colors duration-300 hover:text-white">
              Privacidade
            </a>
            <a href="#lgpd" className="transition-colors duration-300 hover:text-white">
              LGPD
            </a>
            <a href="#cta" className="transition-colors duration-300 hover:text-white">
              Contato
            </a>
          </div>
        </div>

        <div className="section-shell mt-8 grid gap-4 border-t border-white/[0.08] pt-6 text-sm leading-relaxed text-slate-500 lg:grid-cols-2">
          <p id="privacidade">
            Espaço preparado para política de privacidade com diretrizes de coleta, uso e retenção
            de dados do site.
          </p>
          <p id="lgpd">
            Espaço preparado para política LGPD com bases legais, direitos do titular e canal de
            atendimento responsável.
          </p>
        </div>
      </footer>

      {/* 
      Evoluções futuras recomendadas:
      - Substituir a seção de prova por cases reais com autorização, métricas verificadas e logos oficiais.
      - Inserir depoimentos reais de clientes e parceiros quando houver material aprovado.
      - Adicionar lista real de integrações suportadas por stack, segmento ou área operacional.
      - Conectar o formulário final ao CRM, agenda comercial, WhatsApp ou automação de captação.
      */}
    </div>
  );
}

function CTAButton({
  href,
  children,
  variant,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 active:translate-y-px active:scale-[0.98]";
  const variants = {
    primary:
      "bg-brand-accent text-white shadow-[0_16px_50px_-24px_rgba(77,137,255,0.95)] hover:-translate-y-0.5 hover:bg-[#5b95ff]",
    secondary:
      "border border-white/[0.12] bg-white/[0.04] text-slate-100 hover:-translate-y-0.5 hover:bg-white/[0.08]",
  };

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </motion.a>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...revealTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MiniStat({ title, text }: { title: string; text: string }) {
  return (
    <div className="surface-soft p-4">
      <p className="text-sm font-medium text-white">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
    </div>
  );
}

function HeroPanel() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-brand-accent/[0.18] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-4 bottom-2 h-44 w-44 rounded-full bg-sky-300/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="surface relative overflow-hidden p-5 sm:p-6"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.03] px-4 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Fluxo prioritário</p>
            <p className="mt-2 text-lg font-medium text-white">Financeiro, comercial e operação</p>
          </div>
          <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
            Em desenho
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <ProcessPanel
            title="Entrada e leitura do contexto"
            text="E-mails, planilhas, CRM, ERP e formulários alimentam o fluxo com regra e prioridade."
          />
          <ProcessPanel
            title="Execução com integração e regra de negócio"
            text="A IA organiza, atualiza, dispara alertas e aciona etapas sem duplicar trabalho manual."
          />
          <ProcessPanel
            title="Validação humana quando importa"
            text="Aprovações e exceções seguem para quem decide, com histórico e contexto preservados."
          />
        </div>

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mt-5 grid gap-4 sm:grid-cols-[1.25fr_0.75fr]"
        >
          <div className="surface-soft p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Controles do fluxo</p>
            <div className="mt-4 space-y-3">
              <PipelineItem label="Roteamento por prioridade" active />
              <PipelineItem label="Atualização automática em sistemas" active />
              <PipelineItem label="Checkpoint humano em etapa crítica" active />
            </div>
          </div>
          <div className="surface-soft p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Princípios</p>
            <div className="mt-4 space-y-3">
              <TagLine text="Sem trocar ERP ou CRM" />
              <TagLine text="LGPD-conscious" />
              <TagLine text="Escala com controle" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ProcessPanel({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 210, damping: 20 }}
      className="surface-soft p-5"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-base font-medium text-white">{title}</p>
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-brand-accent">
          <FlowArrow size={18} />
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>
    </motion.div>
  );
}

function PipelineItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5">
      <span
        className={`h-2.5 w-2.5 rounded-full ${active ? "bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.3)]" : "bg-slate-500"}`}
      />
      <span className="text-sm text-slate-200">{label}</span>
    </div>
  );
}

function TagLine({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] px-3 py-2 text-sm text-slate-200">
      {text}
    </div>
  );
}

function InfoCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: IconType;
}) {
  const Icon = icon;

  return (
    <div className="surface h-full p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-brand-accent">
        <Icon size={20} weight="duotone" />
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{description}</p>
    </div>
  );
}

function SolutionRow({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-4 rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-5 sm:grid-cols-[88px_1fr] sm:items-start sm:gap-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-medium tracking-[0.24em] text-brand-accentSoft">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
      </div>
    </div>
  );
}

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  const Icon = useCase.icon;

  return (
    <div className="surface h-full p-6 sm:p-7">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-brand-accentSoft/80">{useCase.area}</p>
          <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
            {useCase.title}
          </h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-brand-accent">
          <Icon size={20} weight="duotone" />
        </div>
      </div>

      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300">{useCase.description}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {useCase.items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-slate-200"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function StepCard({ index, step }: { index: number; step: Step }) {
  return (
    <div className="surface h-full p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-base font-medium text-brand-accentSoft">
          0{index}
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-white">{step.title}</h3>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-slate-300">{step.description}</p>
    </div>
  );
}

function FAQCard({
  item,
  open,
  onToggle,
}: {
  item: FAQItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="surface overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <CaretDown size={18} className="text-slate-300" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="border-t border-white/[0.08] px-5 py-5 text-sm leading-relaxed text-slate-300 sm:px-6">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-4">
      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent/[0.15] text-brand-accentSoft">
        <LockKey size={14} weight="fill" />
      </div>
      <p className="text-sm leading-relaxed text-slate-200">{text}</p>
    </div>
  );
}

export default App;
