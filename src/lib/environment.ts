const NEXT_PUBLIC_ENV = process.env.NEXT_PUBLIC_ENV;

type Environment = 'production' | 'stage' | 'development' | 'local';

const environmentUrl: Record<Environment, string> = {
  production: 'https://website-cms.alume.io',
  stage: '',
  development: '/',
  local: 'http://localhost:1337',
};

export const BASE_URL = environmentUrl[NEXT_PUBLIC_ENV as Environment];
