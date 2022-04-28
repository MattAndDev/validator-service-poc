import { transpileText } from './transpile-text'

describe('transpileText', () => {
  // it('Transpiles to ES 5', () => {
  //   expect(transpileText('() => { console.log(`hello`) }')).toEqual({
  //     code: '"use strict";(function(){console.log("hello");});',
  //     error: false,
  //   })
  // })

  it('Transpiles to ES 5', () => {
    expect(transpileText('new Promise((resolve,reject) => {})')).toEqual({
      code: '"use strict";(function(){console.log("hello");});',
      error: false,
    })
  })
  // it('Errors with syntax error', () => {
  //   expect(transpileText('()aa => { console.log(`hello`) }')).toEqual({
  //     error: true,
  //   })
  // })
})
