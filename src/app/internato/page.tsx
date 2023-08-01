'use client';

import {
  Button,
  MainHeader,
  Heading,
  Text,
  Container,
  Youtube,
  Service,
  Steps,
  Testimonials,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Footer,
} from '@/components';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

const TESTIMONIALS = [
  {
    name: 'Laiane Cardoso Lopes',
    college: 'UNINOVAFAPI',
    photoSrc: '/assets/images/testimonials/laiane-lopes.jpg',
    text: 'Encontrei a Alume por um colega de sala e no momento que mais precisava. Uma empresa de prático acesso e rápida resolutividade. Tenho certeza que irá ajudar milhares de estudantes que, assim como eu, estavam precisando.',
  },
  {
    name: 'Aline Nogueira',
    college: 'UNIFAA - Centro Universitário de Valença',
    photoSrc: '/assets/images/testimonials/aline-nogueira.jpg',
    text: 'A Alume foi um anjo que caiu na minha vida! Sem ela eu não conseguiria me formar na faculdade de medicina. Fui muito bem atendida, indico pra todos!',
  },
  {
    name: 'Fernanda Claudino',
    college: 'UNIFAN - Centro Universitário Alfredo Nasser',
    photoSrc: '/assets/images/testimonials/fernanda-claudino.jpg',
    text: 'Alume para mim, foi como uma mão amiga, estendida no momento em que eu mais precisava, para concluir meu tão sonhado curso de medicina, com maestria e tranquilidade. Gratidão!',
  },
];

export default function Internato() {
  return (
    <>
      <MainHeader />

      <main>
        <section className="pt-16 bg-[#ccf2f6] lg:h-[600px]">
          <Container>
            <div className="flex flex-col gap-12 md:flex-row lg:gap-20">
              <div className="flex flex-col h-full min-w-[50%]">
                <Heading as="h1" className="mb-4">
                  Alume Internato
                </Heading>
                <Text size={{ '@desktop': 'xl' }} className="mb-8">
                  Financiamento estudantil para internos. A tranquilidade para focar nos estudos na
                  reta final da faculdade, com juros a partir de 1,99% ao mês.
                </Text>
                <Button
                  as="a"
                  href="https://app.alume.com/signin"
                  target="_blank"
                  size="lg"
                  className="self-start"
                >
                  Simule
                </Button>
              </div>

              <img
                className="rounded-3xl m-auto"
                src="/assets/images/internato/internato-hero.jpg"
                alt="Médica de roupa azul sorrindo"
                width={450}
                height={560}
              />
            </div>
          </Container>
        </section>

        <section className="lg:mt-24">
          <Container>
            <div className="flex flex-col gap-8 lg:flex-row">
              <Youtube videoId="wOJFnUqM8-E" width="600px" height="350px" />
              <div>
                <Heading as="h2" weight="light" className="mb-6">
                  Por que escolher a Alume?
                </Heading>
                <Text size={{ '@desktop': 'xl' }}>
                  Além de contar com as melhores taxas de juros do Brasil, você terá mais
                  flexibilidade para o pagamento. Tudo isso, com uma equipe totalmente comprometida
                  em te atender com excelência. Com a gente, seu financiamento dá certo.
                </Text>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <Heading as="h2" weight="light" className="text-center mb-16">
              Benefícios do Alume Internato
            </Heading>

            <div className="flex justify-center flex-wrap gap-y-12">
              <Service
                img="/assets/images/graphic.svg"
                title="Redução da mensalidade"
                className="px-8 md:w-1/2 lg:w-1/4"
              >
                Reduza suas mensalidades em até 80%
              </Service>
              <Service
                img="/assets/images/money-time.svg"
                title="Planeje seu futuro"
                className="px-8 md:w-1/2 lg:w-1/4"
              >
                Até 5 anos para pagar após a formatura
              </Service>
              <Service
                img="/assets/images/easy-fast.svg"
                title="Rápido e fácil"
                className="px-8 md:w-1/2 lg:w-1/4"
              >
                Tudo online, sem papelada e pode solicitar o ano todo
              </Service>
              <Service
                img="/assets/images/brasil.svg"
                title="Todo o Brasil"
                className="px-8 md:w-1/2 lg:w-1/4"
              >
                Atendemos todas as faculdades particulares do Brasil
              </Service>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
              <div className="md:w-1/2">
                <img
                  className="rounded-3xl"
                  src="/assets/images/internato/estudante-sentado-escadaria.jpg"
                  alt="Estudante sentado na escadaria mexendo no seu celular"
                  width={600}
                  height={600}
                />
              </div>
              <div className="md:w-1/2 self-center">
                <Heading as="h2" weight="light" className="mb-6">
                  O que eu preciso para solicitar?
                </Heading>
                <Text size={{ '@desktop': 'xl' }}>
                  O financiamento pode ser iniciado em qualquer momento do ano, para estudantes que
                  já estejam cursando pelo menos o 9º período. Será necessário um avalista com renda
                  comprovada. Fique tranquilo, nossa política é flexível. Faremos de tudo para
                  conseguir te atender.
                </Text>
                <Button
                  as="a"
                  href="https://alume.com/como-funciona-o-alume-internato/"
                  size={{ '@tablet': 'lg' }}
                  className="mt-10 w-fit"
                >
                  Saiba mais
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <Heading as="h2" weight="light" className="text-center mb-16">
              Etapas para contratação
            </Heading>

            <Steps className="max-w-5xl m-auto">
              <Steps.Item className="before:bg-[#01c0d3]">
                <Steps.Icon className="text-[#01c0d3] text-3xl">1</Steps.Icon>
                <Steps.Content>
                  <Heading as="h4" weight="bold">
                    Solicitação
                  </Heading>
                  <Text size={{ '@tablet': 'lg' }} className="mt-4">
                    Crie sua conta Alume, simule e solicite seu financiamento
                  </Text>
                </Steps.Content>
              </Steps.Item>

              <Steps.Item className="before:bg-[#01c0d3]">
                <Steps.Icon className="text-[#01c0d3] text-3xl">2</Steps.Icon>
                <Steps.Content>
                  <Heading as="h4" weight="bold">
                    Análise
                  </Heading>
                  <Text size={{ '@tablet': 'lg' }} className="mt-4">
                    Nosso especialista entrará em contato com você
                  </Text>
                </Steps.Content>
              </Steps.Item>

              <Steps.Item className="before:bg-[#01c0d3]">
                <Steps.Icon className="text-[#01c0d3] text-3xl">3</Steps.Icon>
                <Steps.Content>
                  <Heading as="h4" weight="bold">
                    Liberação dos recursos
                  </Heading>
                  <Text size={{ '@tablet': 'lg' }} className="mt-4">
                    Os recursos serão liberados diretamente para a faculdade
                  </Text>
                </Steps.Content>
              </Steps.Item>
            </Steps>
          </Container>
        </section>

        <section className="bg-blue-200">
          <Container>
            <Heading as="h2" weight="light" className="mb-6 text-center">
              Opinião de quem é Alume
            </Heading>

            <Testimonials data={TESTIMONIALS} />
          </Container>
        </section>

        <section>
          <Container>
            <div className="lg:max-w-3xl m-auto">
              <Heading as="h2" weight="light" className="mb-6 text-center">
                Dúvidas frequentes
              </Heading>

              <div className="mt-10">
                <Accordion type="single" className="text-primary-700">
                  <AccordionItem value="item1" className="border-b">
                    <AccordionTrigger className="text-xl">
                      O que é a Alume?
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      A Alume é uma fintech que oferece financiamento estudantil exclusivamente para
                      estudantes de medicina. Oferece também recursos como: mentorias de carreira,
                      workshops e eventos para ajudá-los a se planejar melhor financeiramente e
                      acelerar a jornada até a carreira médica.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item2" className="border-b">
                    <AccordionTrigger className="text-xl">
                      O que é o financiamento estudantil?
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      O financiamento estudantil, também chamado empréstimo educativo ou
                      financiamento educacional, é uma alternativa para ajudar quem não dispõe dos
                      recursos necessários para pagar um curso de graduação. O financiamento Alume
                      paga até 80% do valor da mensalidade. O cliente deve pagar o valor financiado
                      com juros, no prazo determinado pelo contrato. É uma excelente alternativa
                      para ganhar mais tempo para pagar.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item3" className="border-b">
                    <AccordionTrigger className="text-xl">
                      Como eu vou receber o dinheiro?
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      O dinheiro será liberado diretamente para a instituição de ensino ou em uma
                      conta corrente indicada pelo estudante, dependendo da modalidade do
                      financiamento contratada.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <a href="https://ajuda.alume.com/">
                <Text weight="bold" className="mt-5 flex gap-1 items-center">
                  Ver todas
                  <FiChevronRight className="stroke-[3]" />
                </Text>
              </a>
            </div>
          </Container>
        </section>

        <section className="bg-primary-700">
          <Container>
            <Heading as="h2" weight="light" className="mb-6 text-center text-white">
              Faça parte da Alume
            </Heading>

            <Button
              as="a"
              href="https://app.alume.com/signin"
              variant="secondary"
              size={{ '@tablet': 'lg' }}
              className="m-auto mt-10 w-fit"
            >
              Cadastre-se
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
