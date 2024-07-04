export const env = (key: string) => process.env[key] || ''

export const ENV = {
  PORT: Number(env('PORT')) || 4000,
  DATABASE_URL: env('DATABASE_URL'),
  SECRET_TOKEN: env('SECRET_TOKEN'),
}
