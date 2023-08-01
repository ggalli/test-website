'use client';

import {
  Button,
  MainHeader,
  Heading,
  Text,
  Container,
  Service,
  Steps,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Footer,
} from '@/components';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

export default function LinhaDeCreditoComImovelEmGarantia() {
  return (
    <>
      <MainHeader />

      <main>
        <section className="pt-16 bg-[#fed0d6] xl:h-[600px]">
          <Container>
            <div className="flex flex-col gap-12 md:flex-row lg:gap-20">
              <div className="flex flex-col h-full min-w-[50%]">
                <Heading as="h1" className="mb-4">
                  Linha de Crédito com Imóvel em Garantia
                </Heading>
                <Text size={{ '@desktop': 'xl' }} className="mb-8">
                  Linha de crédito com imóvel em garantia, com mais flexibilidade e juros a partir
                  de 1,09% ao mês + IPCA.
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
                src="/assets/images/linha-de-credito/linha-de-credito-hero.jpg"
                alt="Jovem estudante com mochila sorrindo"
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
              Além de contar com as melhores taxas de juros do Brasil, você terá mais flexibilidade
              para o pagamento. Tudo isso, com uma equipe totalmente comprometida em te atender com
              excelência. Aqui, sua linha de crédito dá certo.
            </Text>
          </Container>
        </section>

        <section>
          <Container>
            <Heading as="h2" weight="light" className="text-center mb-16">
              Benefícios da linha de crédito com imóvel em garantia
            </Heading>

            <div className="flex justify-center flex-wrap gap-y-12">
              <Service
                img="/assets/images/linha-de-credito/money-time.svg"
                title="Mais conforto para pagar"
                className="px-8 md:w-1/2 lg:w-1/4"
              >
                Até 240 meses para pagar
              </Service>
              <Service
                img="/assets/images/graduation-cap.svg"
                title="Não precisa renovar"
                className="px-8 md:w-1/2 lg:w-1/4"
              >
                Limite de crédito aprovado para utilização em até 5 anos
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
                  src="/assets/images/linha-de-credito/mae-filha-sorrindo.jpg"
                  alt="Jovem sorrindo abraçando sua mãe em frente ao computador"
                  width={600}
                  height={600}
                />
              </div>
              <div className="md:w-1/2 self-center">
                <Heading as="h2" weight="light" className="mb-6">
                  Linha de crédito com imóvel em garantia
                </Heading>
                <Text size={{ '@desktop': 'xl' }}>
                  Utilizar um imóvel como garantia é uma maneira de conseguir taxas menores e mais
                  conforto para pagar. Os recursos serão liberados na sua conta.
                </Text>
                <Text size={{ '@desktop': 'xl' }}>
                  Podem ser utilizados como garantia casas ou apartamentos, localizados em cidades
                  com mais de 50 mil habitantes, nas regiões Sul, Sudeste ou Centro-Oeste. O imóvel
                  deve estar averbado.
                </Text>
                <Button
                  as="a"
                  href="https://alume.com/financiamento-estudantil-com-imovel-em-garantia/"
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
              <Steps.Item className="before:bg-[#feb0ba]">
                <Steps.Icon className="text-[#feb0ba] text-2xl">1</Steps.Icon>
                <Steps.Content>
                  <Heading as="h4" weight="bold">
                    Solicitação
                  </Heading>
                  <Text size={{ '@tablet': 'lg' }} className="mt-4">
                    Crie sua conta Alume, simule e solicite sua linha de crédito
                  </Text>
                </Steps.Content>
              </Steps.Item>

              <Steps.Item className="before:bg-[#feb0ba]">
                <Steps.Icon className="text-[#feb0ba] text-2xl">2</Steps.Icon>
                <Steps.Content>
                  <Heading as="h4" weight="bold">
                    Análise
                  </Heading>
                  <Text size={{ '@tablet': 'lg' }} className="mt-4">
                    Nosso especialista entrará em contato com você
                  </Text>
                </Steps.Content>
              </Steps.Item>

              <Steps.Item className="before:bg-[#feb0ba]">
                <Steps.Icon className="text-[#feb0ba] text-2xl">3</Steps.Icon>
                <Steps.Content>
                  <Heading as="h4" weight="bold">
                    Liberação dos recursos
                  </Heading>
                  <Text size={{ '@tablet': 'lg' }} className="mt-4">
                    Os recursos serão liberados em sua conta corrente, para que você utilize da
                    forma que quiser
                  </Text>
                </Steps.Content>
              </Steps.Item>
            </Steps>
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

                  <AccordionItem value="item3" className="border-b">
                    <AccordionTrigger className="text-xl">
                      Como eu vou receber o dinheiro?
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      Os recursos serão depositados em sua conta corrente.
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
