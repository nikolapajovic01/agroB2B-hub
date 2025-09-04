import * as dotenv from 'dotenv'
dotenv.config()

export enum ApplicationEnv {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  TEST = 'test',
}

const {
  NODE_PORT = '3000',
  NODE_HOST = 'localhost',
  RPC_URL,
  NODE_ENV = 'development',
  PRIVATE_KEY_FOR_TOKEN_APPROVAL,
  POSTER_SMART_CONTRACT_ADDRESS,
  PRIVATE_KEY_POSTER_EXECUTOR,
  FRONTEND_URL = 'http://localhost:5173',
  RESEND_API_KEY,
  RESEND_FROM_EMAIL,
  // ADMIN_EMAIL = 'sales@mmnfruit.com',
  ADMIN_EMAIL = 'info@agrob2bhub.com',
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  AWS_BUCKET_NAME,
} = process.env

const ENV: ApplicationEnv = NODE_ENV as ApplicationEnv

// Do not crash app if email credentials are missing; disable email features instead
if (!RESEND_API_KEY || !RESEND_FROM_EMAIL) {
  // eslint-disable-next-line no-console
  console.warn('Email service credentials are missing; email features will be disabled')
}

export const CONFIG = {
  NODE_PORT,
  NODE_HOST,
  NODE_ENV: ENV,
  RPC_URL,
  PRIVATE_KEY_FOR_TOKEN_APPROVAL,
  POSTER_SMART_CONTRACT_ADDRESS,
  PRIVATE_KEY_POSTER_EXECUTOR,
  FRONTEND_URL,
  RESEND_API_KEY,
  RESEND_FROM_EMAIL,
  ADMIN_EMAIL,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  AWS_BUCKET_NAME,
  JWT_SECRET: process.env.JWT_SECRET || 'your-default-secret-key',

} as const
