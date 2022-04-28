import { rollup } from 'rollup'
import virtual from '@rollup/plugin-virtual'

export const bundleText = async (code: string) => {
  let bundle
  let buildFailed = false
  try {
    // create a bundle
    bundle = await rollup({
      input: 'entry',
      plugins: [
        virtual({
          entry: `
import batman from 'batcave';
console.log(batman);
`,
        }),
      ],
    })

    // an array of file names this bundle depends on
    console.log(bundle.watchFiles)

    await generateOutputs(bundle)
  } catch (error) {
    buildFailed = true
    // do some error reporting
    console.error(error)
  }
  if (bundle) {
    // closes the bundle
    await bundle.close()
  }
  process.exit(buildFailed ? 1 : 0)
}
