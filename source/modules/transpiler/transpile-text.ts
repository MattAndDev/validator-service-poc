import { transformSync } from '@babel/core'

export const transpileText = (
  code: string
): {
  error: boolean
  code?: string | null
} => {
  try {
    // @TODO
    // this babel setup won't replace built ins (f.ex. array.flat)
    // those methods will go unchecked and break in older browsers
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
