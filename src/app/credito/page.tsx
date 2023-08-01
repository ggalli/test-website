'use client';

import {
  Button,
  MainHeader,
  Heading,
  Text,
  Container,
  Youtube,
  Testimonials,
  Footer,
} from '@/components';
import { HiOutlineCheckCircle } from 'react-icons/hi';

const TESTIMONIALS = [
  {
    name: 'Marcus Tadeu',
    college: 'UNIARA - Universidade de Araraquara',
    photoSrc: '/assets/images/testimonials/marcus-tadeu.jpg',
    text: 'A Alume está nos ajudando a realizar o maior sonho de nossas vidas. Nossa maior conquista que é formar nossa filha em medicina. Sem vocês não conseguiríamos.',
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

export default function Credito() {
  return (
    <>
      <MainHeader />

      <main>
        <section className="pt-16 bg-[#d9faf6] lg:h-[650px]">
          <Container>
            <div className="flex flex-col gap-12 md:flex-row lg:gap-20">
              <div className="flex flex-col h-full min-w-[50%]">
                <Heading as="h1" className="mb-4">
                  Financiamento estudantil para medicina
                </Heading>
                <Text size={{ '@desktop': 'xl' }} className="mb-8">
                  Soluções exclusivas para estudantes de medicina financiarem suas mensalidades ou
                  custo de vida.
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
                src="/assets/images/credito/pai-filha-abracados-celebrando-formatura.jpg"
                alt="Filha abraçando o pai celebrando formatura"
                width={450}
                height={560}
              />
            </div>
          </Container>
        </section>

        <section className="lg:mt-24">
          <Container>
            <div className="flex flex-wrap md:justify-center gap-12">
              <div className="flex flex-col">
                <Heading as="h4" weight="bold" className="mb-4">
                  Alume Internato
                </Heading>

                <ul className="flex flex-col gap-4">
                  <li>
                    <Text size={{ '@desktop': 'xl' }} className="flex items-center gap-2">
                      <HiOutlineCheckCircle size={24} />
                      Financiamento estudantil
                    </Text>
                  </li>
                  <li>
                    <Text size={{ '@desktop': 'xl' }} className="flex items-center gap-2">
                      <HiOutlineCheckCircle size={24} />A partir do 9º semestre
                    </Text>
                  </li>
                  <li>
                    <Text size={{ '@desktop': 'xl' }} className="flex items-center gap-2">
                      <HiOutlineCheckCircle size={24} />
                      Juros a partir de 1,99% ao mês
                    </Text>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <Heading as="h4" weight="bold" className="mb-4">
                  Alume Mesada
                </Heading>

                <ul className="flex flex-col gap-4">
                  <li>
                    <Text size={{ '@desktop': 'xl' }} className="flex items-center gap-2">
                      <HiOutlineCheckCircle size={24} />
                      Empréstimos de até R$ 1.600/mês
                    </Text>
                  </li>
                  <li>
                    <Text size={{ '@desktop': 'xl' }} className="flex items-center gap-2">
                      <HiOutlineCheckCircle size={24} />A partir do 7º semestre
                    </Text>
                  </li>
                  <li>
                    <Text size={{ '@desktop': 'xl' }} className="flex items-center gap-2">
                      <HiOutlineCheckCircle size={24} />
                      Juros a partir de 2,99% ao mês
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className="flex flex-col gap-8 lg:flex-row">
              <Youtube videoId="g0aI8zbhdlY" width="600px" height="350px" />
              <div>
                <Heading as="h2" weight="light" className="mb-6">
                  Sobre a Alume?
                </Heading>
                <Text size={{ '@desktop': 'xl' }}>
                  Fundada em 2019, a Alume é uma empresa que tem como missão dar oportunidade para
                  que bons estudantes realizem o sonho de se formarem médicos, independentemente de
                  sua situação financeira.
                </Text>
                <Text size={{ '@desktop': 'xl' }}>
                  Somos focados em soluções financeiras exclusivas e mais acessíveis à comunidade
                  médica.
                </Text>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
              <div className="md:w-1/2">
                <img
                  className="rounded-3xl"
                  src="/assets/images/credito/financiamento-estudantil-medicina.jpg"
                  alt="Estudante sentado na escadaria mexendo no seu celular"
                  width={600}
                  height={600}
                />
              </div>
              <div className="md:w-1/2 self-center">
                <Heading as="h2" weight="light" className="mb-6">
                  Financiamento Estudantil para Medicina
                </Heading>
                <Text size={{ '@desktop': 'xl' }}>
                  Integramos engenharia financeira, tecnologia e modelos preditivos de crédito para
                  criar soluções que caibam no bolso dos nossos clientes e suas famílias, de forma
                  descomplicada e transparente.
                </Text>
                <Text size={{ '@desktop': 'xl' }}>
                  Cada financiamento é adequado para a realidade de cada família.
                </Text>
              </div>
            </div>
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
