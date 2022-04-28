import { transformSync } from '@babel/core'

export const transpileText = (
  code: string
): {
  error: boolean
  code?: string | null
} => {
  try {
    const transformed = transformSync(code, {
      browserslistEnv: 'defaults, not dead',
      presets: ['@babel/preset-env'],
      compact: true,
    })
    return {
      code: transformed?.code,
      error: false,
    }
  } catch {
    return { error: true }
  }
}
