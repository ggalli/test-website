'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  MainHeader,
  Heading,
  Service,
  Testimonials,
  Text,
  Container,
  PlansTable,
  Card,
  Footer,
} from '@/components';
import { FiChevronDown } from 'react-icons/fi';
import { WHATSAPP_CLAUDERSON, whatsappMessages } from '@/constants/whatsapp';

const TESTIMONIALS = [
  {
    name: 'Dr. Bruno Medeiros',
    college: 'Brasília/DF',
    photoSrc: '/assets/images/testimonials/dr-bruno-medeiros.png',
    text: 'Serviço eficaz, confiável e sempre com muita agilidade! Atendeu minhas expectativas integralmente! Recomendo aos colegas de profissão que necessitam de auxílio contábil com suas finanças na correria do cotidiano que faz parte da profissão.',
  },
  {
    name: 'Dr. Alexandre Portela',
    college: 'Marília/SP',
    photoSrc: '/assets/images/testimonials/dr-alexandre-portela.png',
    text: 'Tive toda a assessoria necessária para abertura da minha pessoa jurídica e emissão de notas fiscais. Toda parte burocrática resolvida de forma dinâmica. Me auxiliaram em todas as etapas necessárias. Tudo on- line e sem enrolação. Estou extremamente satisfeito e recomendo. Eu tenho pouco tempo disponível e a Alume foi a solução.',
  },
  {
    name: 'Dra. Flavia Mancilha',
    college: 'Caxambu/MG',
    photoSrc: '/assets/images/testimonials/dra-flavia-mancilha.png',
    text: 'A Alume foi fundamental para abrir minha empresa. Tive todo o suporte e orientação necessária para a contabilidade médica. E tudo no conforto de casa, sem ter que correr atrás da parte burocrática. Foi uma ótima escolha!',
  },
];

export default function Contabilidade() {
  return (
    <>
      <MainHeader hideMenu />

      <main>
        <section className="pt-32 pb-12 h-[760px] bg-contabilidade-hero-mobile bg-no-repeat bg-cover bg-[80%] md:bg-contabilidade-hero-desktop md:bg-[65%]">
          <div className="container flex flex-col h-full">
            <Heading as="h1" className="mb-12 md:w-1/2">
              Contabilidade especializada para médicos
            </Heading>
            <div className="w-44 grow md:w-1/2 lg:grow-0">
              <Text weight="bold" size={{ '@desktop': 'xl' }}>
                Otimize seu dinheiro e seu tempo.
              </Text>
              <Text size={{ '@desktop': 'xl' }} className="mt-2">
                Contabilidade rápida, flexível, e segura. Cuidamos de tudo para você.
              </Text>
            </div>
            <Button
              id="receba-um-orcamento-imediato"
              as="a"
              variant="secondary"
              size="lg"
              className="self-center md:mt-8 lg:self-start text-center"
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_CLAUDERSON}&text=${whatsappMessages.orcamento}`}
              target="_blank"
            >
              Receba um orçamento imediato, sem custo
            </Button>
          </div>
        </section>

        <section>
          <Container>
            <Heading as="h2" weight="light" className="text-center mb-16">
              100% online com atendimento humanizado
            </Heading>

            <div className="flex justify-center flex-wrap gap-y-12">
              <Service
                img="/assets/images/pj.png"
                title="Abertura de PJ grátis"
                className="px-8 md:w-1/2 lg:w-1/3"
              >
                Não cobramos pelo serviço de abertura da sua PJ
              </Service>
              <Service
                img="/assets/images/whatsapp.png"
                title="Atendimento por WhatsApp"
                className="px-8 md:w-1/2 lg:w-1/3"
              >
                Disponível das 9h às 18h
              </Service>
              <Service
                img="/assets/images/economia.png"
                title="Economia com qualidade"
                className="px-8 md:w-1/2 lg:w-1/3"
              >
                Contabilidade completa a partir de R$150
              </Service>
              <Service
                img="/assets/images/brasil.png"
                title="Para médicos de todo o Brasil"
                className="px-8 md:w-1/2 lg:w-1/3"
              >
                Atendemos em todos os estados
              </Service>
              <Service
                img="/assets/images/contabilidade.png"
                title="Assessoria Contábil Completa"
                className="px-8 md:w-1/2 lg:w-1/3"
              >
                Cuidamos de tudo para sua PJ, em todas fases de sua carreira
              </Service>
              <Service
                img="/assets/images/imposto.png"
                title="Economize nos impostos"
                className="px-8 md:w-1/2 lg:w-1/3"
              >
                Redução da carga tributária de forma legal e segura
              </Service>
            </div>

            <Button
              id="quero-um-orcamento"
              as="a"
              variant="secondary"
              size={{ '@tablet': 'lg' }}
              className="mt-16 m-auto w-fit"
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_CLAUDERSON}&text=${whatsappMessages.orcamento}`}
              target="_blank"
            >
              Quero um orçamento
            </Button>
          </Container>
        </section>

        <section className="bg-vida bg-no-repeat bg-cover bg-[12%]">
          <Container>
            <div className="text-center lg:w-2/5 lg:text-left lg:m-0 lg:ml-auto">
              <Heading as="h2" weight="light" className="mb-10 text-white">
                Foque no que realmente importa!
              </Heading>

              <div className="md:w-3/4 m-auto lg:w-auto">
                <Text size={{ '@desktop': 'xl' }} className="text-white">
                  Com a Alume, você investe seu tempo no que importa: seus{' '}
                  <strong>pacientes</strong>, sua <strong>carreira</strong>, sua{' '}
                  <strong>vida</strong>!
                </Text>
                <Text size={{ '@desktop': 'xl' }} className="text-white">
                  A burocracia fica com a gente! Vamos ajudar você a pagar menos impostos de forma
                  legal, cumprir as obrigações fiscais, trabalhistas e previdenciárias, evitando
                  multas e processos.
                </Text>
              </div>

              <Button
                id="quero-saber-mais-sobre-o-servico"
                as="a"
                size={{ '@tablet': 'lg' }}
                className="w-fit bg-white text-primary-500 mt-40 m-auto lg:mt-8 lg:m-0 hover:bg-blue-200"
                href="#plans"
              >
                Quero saber mais sobre o serviço
              </Button>
            </div>
          </Container>
        </section>

        <section id="plans" className="text-center">
          <Container>
            <Heading as="h2" weight="light" className="mb-10">
              Conheça nossos planos
            </Heading>

            <Text size={{ '@desktop': 'xl' }}>
              Oferecemos um serviço completo de assessoria, desde o momento da abertura da PJ até o
              planejamento e gestão das obrigações fiscais e contábeis. Conheça nossos planos!
            </Text>

            <div className="flex flex-col mt-16 overflow-x-auto">
              <PlansTable />
            </div>

            <Card className="mt-12 m-auto max-w-2xl flex flex-col items-center">
              <Text size={{ '@initial': 'lg', '@desktop': 'xl' }} weight="bold">
                Não encontrou o plano ideal?
              </Text>
              <Text size={{ '@desktop': 'lg' }} className="mt-2 mb-4">
                Fale por Whatsapp com nossos especialistas e tire todas as suas dúvidas.
              </Text>
              <Button
                id="fale-conosco"
                as="a"
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP_CLAUDERSON}&text=${whatsappMessages.custom}`}
                target="_blank"
              >
                Fale conosco
              </Button>
            </Card>
          </Container>
        </section>

        <section className="bg-blue-200 text-center">
          <Container>
            <Heading as="h2" weight="light" className="mb-6">
              A Alume é para você
            </Heading>

            <Text size={{ '@desktop': 'xl' }}>
              Escolha seu perfil para falar com nossa equipe especializada
            </Text>

            <div className="flex flex-col items-center justify-center gap-6 mt-8 lg:flex-row">
              <Button
                id="medico-recem-formado"
                as="a"
                variant="secondary"
                size="lg"
                className="w-72 h-20 hover:shadow-xl hover:-translate-y-1 hover:bg-secondary-200"
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP_CLAUDERSON}&text=${whatsappMessages.medico}`}
                target="_blank"
              >
                Médico
                <br />
                Recém-Formado
              </Button>

              <Button
                id="plantonista"
                as="a"
                variant="secondary"
                size="lg"
                className="w-72 h-20 hover:shadow-xl hover:-translate-y-1 hover:bg-secondary-200"
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP_CLAUDERSON}&text=${whatsappMessages.plantonista}`}
                target="_blank"
              >
                Plantonista
              </Button>

              <Button
                id="consultorios-clinicas"
                as="a"
                variant="secondary"
                size="lg"
                className="w-72 h-20 hover:shadow-xl hover:-translate-y-1 hover:bg-secondary-200"
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP_CLAUDERSON}&text=${whatsappMessages.proprietario}`}
                target="_blank"
              >
                Proprietários de
                <br />
                Consultórios e Clínicas
              </Button>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className="text-center lg:max-w-3xl m-auto">
              <Heading as="h2" weight="light" className="mb-6">
                Outros serviços
              </Heading>

              <Text size={{ '@desktop': 'xl' }}>
                Com a Alume contabilidade, você descomplica sua vida financeira e não se preocupa
                com a burocracia contábil
              </Text>

              <div className="mt-10 text-left">
                <Accordion type="single" className="text-primary-700">
                  <AccordionItem value="item1" className="mb-4">
                    <AccordionTrigger className="bg-blue-200 text-xl">
                      Livro-Caixa
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      Se você é um médico autônomo e não tem uma PJ, precisa de um livro-caixa para
                      registro de receitas e despesas.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item2" className="mb-4">
                    <AccordionTrigger className="bg-blue-200 text-xl">
                      Certificado Digital eCNPJ
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      O certificado digital é necessário para emissão de notas fiscais. Com a Alume,
                      seu certificado digital é grátis por 12 meses.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item3" className="mb-4">
                    <AccordionTrigger className="bg-blue-200 text-xl">
                      Regularização de consultórios e clínicas
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      Oferecemos suporte completo para obtenção das licenças, conformidade e
                      cadastros necessários junto aos órgãos reguladores. Apenas para São Paulo/SP.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item4" className="mb-4">
                    <AccordionTrigger className="bg-blue-200 text-xl">
                      Declaração de Imposto de Renda e PF
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      Cuidamos da sua Declaração de Imposto de Renda Pessoa Física para que você
                      esteja em conformidade com a Receita.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <Button
                id="quero-contratar"
                as="a"
                variant="secondary"
                size={{ '@tablet': 'lg' }}
                className="mt-16 m-auto w-fit"
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP_CLAUDERSON}&text=${whatsappMessages.contratar}`}
                target="_blank"
              >
                Quero contratar
              </Button>
            </div>
          </Container>
        </section>

        <section className="bg-blue-200">
          <Container>
            <Heading as="h2" weight="light" className="mb-6 text-center">
              Depoimentos
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
                      Quem são os assessores?
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      Nosso time de assessores é formado por profissionais com ampla experiência na
                      área de Finanças e Contabilidade para médicos.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item2" className="border-b">
                    <AccordionTrigger className="text-xl">
                      Quais são os documentos necessários para abrir a PJ?
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      Os documentos necessários são: RG, CPF, CRM e comprovante de residência.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item3" className="border-b">
                    <AccordionTrigger className="text-xl">
                      Como a Alume vai cuidar da minha empresa?
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      Nosso primeiro contato será para um diagnóstico gratuito. Nosso especialista
                      vai avaliar seus objetivos profissionais e financeiros para te recomendar o
                      melhor caminho. Nosso trabalho é totalmente customizado, visando maximizar
                      seus rendimentos, seja abrindo uma empresa (PJ), trabalhando como autônomo ou
                      como CLT. Caso deseje abrir uma empresa, daremos todo o suporte contábil,
                      fiscal e financeiro na abertura e em todas suas rotinas mensais, incluindo a
                      emissão de notas fiscais e cálculo dos impostos a serem pagos.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item4" className="border-b">
                    <AccordionTrigger className="text-xl">
                      Por que preciso de um contador especialista em médicos?
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      Profissionais especializados entendem as peculiaridades contábeis da área
                      médica e conhecem a dinâmica de trabalho dos médicos. Tudo isso contribui para
                      que você tenha um atendimento mais efetivo e pague menos impostos.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item5" className="border-b">
                    <AccordionTrigger className="text-xl">
                      Como faço para trocar de Contador?
                      <FiChevronDown size={24} />
                    </AccordionTrigger>
                    <AccordionContent>
                      Sabemos que migrar de contabilidade pode ser desafiador, mas com a Alume é
                      diferente. Basta comunicar à antiga contabilidade o desejo de migrar os
                      serviços para uma contabilidade especializada na área médica e o restante fica
                      por nossa conta. Entraremos em contato com o escritório e resolveremos tudo
                      para você. Simples assim.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-blue-200 text-center">
          <Container>
            <Heading as="h2" weight="light" className="mb-6">
              E aí, quer se livrar da burocracia?
            </Heading>

            <Text size={{ '@desktop': 'xl' }} weight="light">
              100% online com atendimento humanizado.
            </Text>

            <Button
              id="fale-com-nossa-equipe"
              as="a"
              variant="secondary"
              size={{ '@tablet': 'lg' }}
              className="mt-12 m-auto w-fit"
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_CLAUDERSON}&text=${whatsappMessages.default}`}
              target="_blank"
            >
              Fale com nossa equipe
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
