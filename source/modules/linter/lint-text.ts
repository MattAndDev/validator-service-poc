import { ESLint } from 'eslint'

export const lintText = async (
  code: string,
  opts: ESLint.Options = {
    useEslintrc: false,
    baseConfig: {
      extends: 'eslint:recommended',
      env: {
        es6: true,
      },
    },
  }
): Promise<{
  error: boolean
}> => {
  const linter = new ESLint(opts)
  const output = await linter.lintText(code)
  return {
    error: !!output[0].fatalErrorCount,
  }
}
