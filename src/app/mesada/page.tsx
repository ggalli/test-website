'use client';

import {
  Button,
  MainHeader,
  Heading,
  Text,
  Container,
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
    name: 'Cywka Landy Barbosa Santos',
    college: 'UPE - Universidade de Pernambuco',
    photoSrc: '/assets/images/testimonials/cywka-landy-barbosa-santos.jpg',
    text: 'Gostaria de agradecer profundamente a Alume por terem acreditado em mim nessa reta final. A crise financeira por pouco não me impediu de concluir a faculdade, e vocês me salvaram. Jamais vou esquecer o apoio que me deram, muito obrigada e desejo que Deus os abençoe sempre, e que a Alume cresça cada vez mais.',
  },
  {
    name: 'Kaisa Silva Nascimento',
    college: 'UFS - Universidade Federal de Sergipe',
    photoSrc: '/assets/images/testimonials/kaisa-silva-nascimento.jpg',
    text: 'Conheci a Alume pesquisando por empresas de financiamento estudantil com a menor taxa de juros. Quando entrei em contato, tiraram todas as minhas dúvidas prontamente e me orientaram da melhor forma. O processo para conseguir a aprovação do financiamento foi rápido e fácil. Todo mês eu recebo o financiamento na minha conta sem atrasos. Essa iniciativa da Alume ajudando os alunos é muito oportuna e nos da a oportunidade de continuar estudando sem maiores preocupações até a nossa formação.',
  },
  {
    name: 'Ian Dondoni Pinto De Oliveira',
    college: 'UFES - Universidade Federal do Espírito Santo',
    photoSrc: '/assets/images/testimonials/ian-dondoni-pinto-de-oliveira.jpg',
    text: 'Isso tem me ajudado muito, não tive mais que me preocupar com questões financeiras e pude focar muito mais na minha faculdade, na minha formação.',
  },
];

export default function Mesada() {
  return (
    <>
      <MainHeader />

      <main>
        <section className="pt-16 bg-[#d9faf6] lg:h-[600px]">
          <Container>
            <div className="flex flex-col gap-12 md:flex-row lg:gap-20">
              <div className="flex flex-col h-full min-w-[50%]">
                <Heading as="h1" className="mb-4">
                  Alume Mesada
                </Heading>
                <Text size={{ '@desktop': 'xl' }}>
                  Para estudantes de medicina a partir do 7º semestre.
                </Text>
                <Text size={{ '@desktop': 'xl' }} className="mb-8">
                  Até R$ 1.600 todo mês na sua conta até a formatura, com juros a partir de 2,99% ao
                  mês.
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
                src="/assets/images/mesada/mesada-hero.jpg"
                alt="Médica de roupa azul sorrindo"
                width={450}
                height={560}
              />
            </div>
          </Container>
        </section>

        <section className="lg:mt-24 text-center">
          <Container>
            <Heading as="h2" weight="light" className="mb-6">
              Por que escolher a Alume?
            </Heading>
            <Text size={{ '@desktop': 'xl' }} className="max-w-4xl m-auto">
              Somos especialistas em crédito para estudantes de medicina e entendemos a realidade
              dos estudantes. Aqui você tem as melhores condições para pagamento e as menores taxas
              de juros. Além de contar com o suporte de uma equipe totalmente comprometida em te
              atender com excelência.
            </Text>
          </Container>
        </section>

        <section>
          <Container>
            <Heading as="h2" weight="light" className="text-center mb-16">
              Benefícios do Alume Mesada
            </Heading>

            <div className="flex justify-center flex-wrap gap-y-12">
              <Service
                img="/assets/images/graphic.svg"
                title="Auxílio no custo de vida"
                className="px-8 md:w-1/2 lg:w-1/4"
              >
                Até R$ 1.600,00 por mês para auxiliar com o custo de vida
              </Service>
              <Service
                img="/assets/images/money-time.svg"
                title="Planeje seu futuro"
                className="px-8 md:w-1/2 lg:w-1/4"
              >
                Até 3 anos para pagar após a formatura
              </Service>
              <Service
                img="/assets/images/easy-fast.svg"
                title="Rápido e fácil"
                className="px-8 md:w-1/2 lg:w-1/4"
              >
                Tudo online, sem papelada e sem comprovação de renda
              </Service>
              <Service
                img="/assets/images/brasil.svg"
                title="Todo o Brasil"
                className="px-8 md:w-1/2 lg:w-1/4"
              >
                Atendemos estudantes de todas as faculdades do Brasil
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
                  src="/assets/images/mesada/estudante-aula-sorrindo.jpg"
                  alt="Estudante de medicina na sala de aula sorrindo"
                  width={600}
                  height={600}
                />
              </div>
              <div className="md:w-1/2 self-center">
                <Heading as="h2" weight="light" className="mb-6">
                  O que eu preciso para solicitar?
                </Heading>
                <Text size={{ '@desktop': 'xl' }}>
                  A Alume Mesada pode ser solicitada por estudantes de medicina a partir do 7º
                  semestre. Não é necessário avalista, nem comprovante de renda. A mesada cai direto
                  na conta do estudante.
                </Text>
                <Button
                  as="a"
                  href="https://alume.com/alume-mesada/"
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
                <Steps.Icon className="text-[#01c0d3] text-2xl">1</Steps.Icon>
                <Steps.Content>
                  <Heading as="h4" weight="bold">
                    Solicitação
                  </Heading>
                  <Text size={{ '@tablet': 'lg' }} className="mt-4">
                    Crie sua conta Alume, simule e solicite sua mesada
                  </Text>
                </Steps.Content>
              </Steps.Item>

              <Steps.Item className="before:bg-[#01c0d3]">
                <Steps.Icon className="text-[#01c0d3] text-2xl">2</Steps.Icon>
                <Steps.Content>
                  <Heading as="h4" weight="bold">
                    Análise
                  </Heading>
                  <Text size={{ '@tablet': 'lg' }} className="mt-4">
                    Seu cadastro será analisado pelo nosso time
                  </Text>
                </Steps.Content>
              </Steps.Item>

              <Steps.Item className="before:bg-[#01c0d3]">
                <Steps.Icon className="text-[#01c0d3] text-2xl">3</Steps.Icon>
                <Steps.Content>
                  <Heading as="h4" weight="bold">
                    Liberação dos recursos
                  </Heading>
                  <Text size={{ '@tablet': 'lg' }} className="mt-4">
                    Assine o contrato e receba os recursos mensalmente em sua conta corrente
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
                      A Alume é uma fintech que oferece financiamento estudantil e empréstimos
                      exclusivamente para estudantes de medicina. Nossa missão é garantir que a
                      situação financeira não seja um impeditivo para que bons estudantes se tornem
                      médicos no Brasil.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item2" className="border-b">
                    <AccordionTrigger className="text-xl">
                      O que é o Alume Mesada?
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      É um empréstimo para estudantes de medicina, a partir do 7º semestre. Sem
                      garantia e sem comprovação de renda. Você receberá em sua conta mensalmente, e
                      só começa a pagar após terminar sua graduação.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item3" className="border-b">
                    <AccordionTrigger className="text-xl">
                      Como eu vou receber o dinheiro?
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      Será depositado em sua conta bancária, mensalmente.
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
