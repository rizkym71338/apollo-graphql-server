export const env = (key: string) => process.env[key]

export const ENV = {
  PORT: Number(env('PORT')) || 4000,
}
