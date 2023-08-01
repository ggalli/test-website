import { Container, SocialNetworkIcon, Text } from '@/components';
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-primary-500">
      <Container>
        {/* <Image
            src="/assets/images/logo-alume.svg"
            alt="Logo Alume"
            width={100}
            height={30}
            className="mb-12"
          /> */}
        <img
          src="/assets/images/logo-alume.svg"
          alt="Logo Alume"
          width={100}
          height={30}
          className="mb-12"
        />

        <div className="flex flex-col gap-8 justify-between mb-8 md:flex-row">
          <nav className="flex flex-col gap-8 md:flex-row">
            <div className="flex flex-col gap-4">
              {/* <Heading size="md" weight="bold" className="text-primary-500">
                  Para estudantes
                </Heading> */}

              <Link href="/linha-de-credito-com-imovel-em-garantia">
                Linha de crédito com imóvel em garantia
              </Link>
              <Link href="/internato">Alume Internato</Link>
              <Link href="/mesada">Alume Mesada</Link>
              <Link href="/contabilidade">Contabilidade para médicos</Link>
            </div>

            <div className="flex flex-col gap-4">
              {/* <Heading size="md" weight="bold" className="text-primary-500">
                  Para médicos
                </Heading> */}

              <Link href="https://app.alume.com/login">Acessar a Alume</Link>
              <Link href="https://app.alume.com/signin">Cadastre-se na Alume</Link>
              <Link href="https://ajuda.alume.com/">Perguntas frequentes</Link>
              <Link href="https://alume.com/blog">Blog</Link>
              <Link href="/contato">Contato</Link>
            </div>
          </nav>

          <div className="flex flex-col gap-4">
            <div>
              <Text size="sm" className="text-gray-400 mb-2">
                Startup Incubada (2020 e 2021)
              </Text>

              {/* <Image
                  src="/assets/images/eretz-einstein.png"
                  alt="Logo das Incubadoras"
                  width={360}
                  height={60}
                /> */}
              <Link href="https://eretz.bio/" target="_blank">
                <img
                  src="/assets/images/eretz-einstein.png"
                  alt="Logo das Incubadoras"
                  width={360}
                  height={60}
                />
              </Link>
            </div>

            <div>
              <Text size="sm" className="text-gray-400 mb-2">
                Vencedora do 38th INSEAD Venture Competition
              </Text>

              <Link
                href="https://www.insead.edu/insead-centre-entrepreneurship/past-insead-venture-competitions"
                target="_blank"
              >
                {/* <Image src="/assets/images/insead.png" alt="Logo Insead" width={140} height={64} /> */}
                <img src="/assets/images/insead.png" alt="Logo Insead" width={140} height={64} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex gap-4">
            <SocialNetworkIcon href="https://www.instagram.com/alume" target="_blank">
              <FaInstagram size={20} />
            </SocialNetworkIcon>
            <SocialNetworkIcon href="https://www.linkedin.com/company/fintechalume" target="_blank">
              <FaLinkedinIn size={20} />
            </SocialNetworkIcon>
            <SocialNetworkIcon href="https://www.youtube.com/@Alume" target="_blank">
              <FaYoutube size={20} />
            </SocialNetworkIcon>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <Link href="https://app.alume.com/use-terms" target="_blank">
            Termos de uso
          </Link>
          <Link href="https://app.alume.com/privacy-policy" target="_blank">
            Aviso de privacidade
          </Link>
        </div>

        <div>
          <Text size="sm" className="text-gray-400">
            A Alume Tecnologia e Serviços Financeiros Ltda (CNPJ: 35.486.431/0001-94) é uma
            plataforma que oferece financiamento estudantil. A Alume atua como correspondente
            bancário, conforme as diretrizes da Resolução nº 3.954 do Banco Central do Brasil, das
            seguintes instituições: Bari Companhia Hipotecária CNPJ 14.511.781/0001-93, Banco Bari
            Financiamento e Investimentos S/A CNPJ 00.556.603/0001-74 e Money Plus SCMEPP LTDA CNPJ:
            11.581.339/0001-45.
          </Text>
          <Text size="sm" className="text-gray-400">
            A Alume Contabilidade Ltda (CNPJ: 42.114.614/0001-44) é um escritório de contabilidade
            registrado no Conselho Regional de Contabilidade sob o número 2SP044661/O-2. Responsável
            Técnico Luis Fernando Conduta, CRC 1SP310979/O-5.
          </Text>
          <Text size="sm" className="text-gray-400">
            © 2021 Alume Tecnologia e Serviços Financeiros Ltda - Todos os direitos reservados.
            Endereço: Av. Brg. Faria Lima, 2229, cj 41 - Jardim Paulistano - São Paulo - Brasil -
            01452-906
          </Text>
        </div>
      </Container>
    </footer>
  );
};
