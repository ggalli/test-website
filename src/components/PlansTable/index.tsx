import { WHATSAPP_CLAUDERSON, whatsappMessages } from '@/constants/whatsapp';
import { Button } from '../Button';
import { Text } from '../Text';
import { DataCell, HeaderCell, StyledCheckIcon, StyledCross2Icon } from './styles';

const services = [
  {
    name: 'Abertura da PJ grátis',
    flex: true,
    fixed1: true,
    fixed2: true,
  },
  {
    name: 'Suporte no registro CRM-PJ',
    flex: true,
    fixed1: true,
    fixed2: true,
  },
  {
    name: 'Assessoria Completa Contábil e Fiscal',
    flex: true,
    fixed1: true,
    fixed2: true,
  },
  {
    name: 'Atendimento por WhatsApp',
    flex: true,
    fixed1: true,
    fixed2: true,
  },
  {
    name: 'Suporte no Cadastro em Hospitais',
    flex: true,
    fixed1: true,
    fixed2: true,
  },
  {
    name: 'Declaração de Imposto de Renda PF',
    flex: false,
    fixed1: true,
    fixed2: true,
  },
  {
    name: 'Certificado Digital eCNPJ',
    flex: false,
    fixed1: 'Grátis 12 meses',
    fixed2: 'Grátis 12 meses',
  },
  {
    name: 'Regime Tributário',
    flex: 'Simples Nacional',
    fixed1: 'Simples Nacional',
    fixed2: 'Lucro Presumido',
  },
  {
    name: 'Limite de Faturamento mensal',
    flex: false,
    fixed1: 'até R$ 30 mil',
    fixed2: 'até R$ 50 mil',
  },
  {
    name: 'Sócios',
    flex: false,
    fixed1: 'até 2',
    fixed2: 'até 2',
  },
  {
    name: 'Folha de pagamento de funcionários',
    flex: false,
    fixed1: '+ R$150 por mês',
    fixed2: '+ R$150 por mês',
  },
  {
    name: 'Relatório de produção por médico',
    flex: false,
    fixed1: true,
    fixed2: true,
  },
];

export const PlansTable = () => {
  return (
    <table className="text-primary-500">
      <thead>
        <tr>
          <HeaderCell scope="col" className="text-left text-2xl lg:text-3xl border-0">
            Planos Mensais
          </HeaderCell>
          <HeaderCell scope="col">Flex</HeaderCell>
          <HeaderCell scope="col">Fixo I</HeaderCell>
          <HeaderCell scope="col">Fixo II</HeaderCell>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr key={service.name}>
            <DataCell className="text-left bg-blue-100 lg:text-xl">{service.name}</DataCell>
            <DataCell data-label="Flex">
              {typeof service.flex === 'string' && service.flex}
              {typeof service.flex === 'boolean' && service.flex && <StyledCheckIcon />}
              {typeof service.flex === 'boolean' && !service.flex && <StyledCross2Icon />}
            </DataCell>
            <DataCell data-label="Fixo I">
              {typeof service.fixed1 === 'string' && service.fixed1}
              {typeof service.fixed1 === 'boolean' && service.fixed1 && <StyledCheckIcon />}
              {typeof service.fixed1 === 'boolean' && !service.fixed1 && <StyledCross2Icon />}
            </DataCell>
            <DataCell data-label="Fixo II">
              {typeof service.fixed2 === 'string' && service.fixed2}
              {typeof service.fixed2 === 'boolean' && service.fixed2 && <StyledCheckIcon />}
              {typeof service.fixed2 === 'boolean' && !service.fixed2 && <StyledCross2Icon />}
            </DataCell>
          </tr>
        ))}
        <tr>
          <DataCell className="border-0"></DataCell>
          <DataCell className="align-bottom">
            <Text size={{ '@initial': 'lg', '@desktop': 'xl' }}>3.0% do faturamento</Text>
            <Text size="sm">(mín. R$ 150)</Text>
            <Button
              as="a"
              variant="secondary"
              className="mt-4 m-auto w-fit"
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_CLAUDERSON}&text=${whatsappMessages.flex}`}
              target="_blank"
            >
              Quero contratar
            </Button>
          </DataCell>
          <DataCell className="align-bottom">
            <Text size={{ '@initial': 'lg', '@desktop': 'xl' }}>R$ 399,00</Text>
            <Button
              as="a"
              variant="secondary"
              className="mt-4 m-auto w-fit"
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_CLAUDERSON}&text=${whatsappMessages.fixo1}`}
              target="_blank"
            >
              Quero contratar
            </Button>
          </DataCell>
          <DataCell className="align-bottom">
            <Text size={{ '@initial': 'lg', '@desktop': 'xl' }}>R$ 499,00</Text>
            <Button
              as="a"
              variant="secondary"
              className="mt-4 m-auto w-fit"
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_CLAUDERSON}&text=${whatsappMessages.fixo2}`}
              target="_blank"
            >
              Quero contratar
            </Button>
          </DataCell>
        </tr>
      </tbody>
    </table>
  );
};
