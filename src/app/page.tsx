'use client';

import { Button, Container, Footer, Heading, Text } from '@/components';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Container className="container py-12 xl:py-20 h-full">
            <Link href="/" className="block">
              <img src="/assets/images/logo-alume.svg" alt="Logo Alume" width={100} height={34} />
            </Link>

            <Heading as="h1" weight="light" className="text-center my-12 xl:my-20">
              Soluções financeiras para cada fase da sua jornada, de estudante a médico
            </Heading>

            <div className="hidden flex-col md:flex-row justify-center gap-10 md:flex">
              <Link
                href="/credito"
                className="flex flex-col w-full rounded-3xl overflow-hidden shadow-xl "
              >
                <div className="h-[220px] xl:h-[280px] bg-home-financiamento bg-[center_top]" />
                <div className="flex justify-center items-center flex-1 p-4">
                  <Heading as="h3" className="text-center">
                    Financiamento e empréstimo
                  </Heading>
                </div>
              </Link>

              <Link
                href="/contabilidade"
                className="flex flex-col w-full rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="h-[220px] xl:h-[280px] bg-home-contabilidade bg-[center_top]" />
                <div className="flex justify-center items-center flex-1 p-4">
                  <Heading as="h3" className="text-center">
                    Contabilidade para médicos
                  </Heading>
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-8 md:hidden">
              <Link href="/credito">
                <Button variant="secondary" size="lg">
                  Financiamento e empréstimo
                </Button>
              </Link>

              <Link href="/contabilidade">
                <Button variant="secondary" size="lg">
                  Contabilidade para médicos
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className="flex flex-col items-center max-w-2xl m-auto md:flex-row md:gap-8">
              <span className="text-secondary-200 text-5xl font-bold">+2500</span>
              <Text className="text-2xl text-center md:text-left md:text-3xl">
                Médicos e estudantes apoiados em{' '}
                <span className="text-secondary-200">todo o Brasil</span>
              </Text>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <Heading as="h2" weight="light" className="text-center mb-16">
              Alume na mídia
            </Heading>

            <div className="flex flex-col items-center justify-center gap-12 lg:gap-28 md:flex-row">
              <img
                src="/assets/images/uol-logo.jpg"
                alt="Logo da UOL"
                width={200}
                height={68}
                className=""
              />
              <img
                src="/assets/images/brazil-journal-logo.jpg"
                alt="Logo da Brazil Journal"
                width={200}
                height={68}
              />
              <img
                src="/assets/images/valor-logo.jpg"
                alt="Logo da Valor Econômico"
                width={200}
                height={68}
              />
            </div>
          </Container>
        </section>

        <section className="lg:my-20">
          <Container>
            <div className="flex flex-col justify-center items-center gap-8 text-center lg:flex-row lg:gap-20 lg:text-left">
              <div className="lg:w-2/5 self-center">
                <Heading as="h2" weight="light" className="mb-6">
                  Financiamento e empréstimo
                </Heading>
                <Text size={{ '@initial': 'md', '@desktop': 'xl' }}>
                  Incentivamos o financiamento responsável, compatível com o seu potencial
                  financeiro futuro.
                </Text>
              </div>
              <img
                className="rounded-3xl bg-gray-300"
                src="/assets/images/credito/financiamento-estudantil-medicina.jpg"
                alt="Grupo de estudantes fazendo reunião com prancheta nas mãos"
                width={500}
                height={500}
              />
            </div>
          </Container>
        </section>

        <section className="lg:my-20">
          <Container>
            <div className="flex flex-col justify-center items-center gap-8 text-center lg:flex-row lg:gap-20 lg:text-left">
              <div className="lg:w-2/5 self-center lg:order-1">
                <Heading as="h2" weight="light" className="mb-6">
                  Contabilidade para médicos
                </Heading>
                <Text size={{ '@initial': 'md', '@desktop': 'xl' }}>
                  Com a Alume, você investe seu tempo no que importa: seus pacientes, sua carreira,
                  sua vida.
                </Text>
              </div>
              <img
                className="rounded-3xl bg-gray-300"
                src="/assets/images/contabilidade/reuniao-medicos.jpg"
                alt="Grupo de médicos fazendo reunião"
                width={500}
                height={500}
              />
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
