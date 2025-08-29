import { createServer } from 'vite'
import { describe, expect, it } from 'vitest'

import plugin from '../src'

describe('plugin', () => {
  it('should inject dark mode script in index.html', async () => {
    const server = await createServer({ plugins: [plugin()] })
    const html = await server.transformIndexHtml('index.html', '<html><head></head><body></body></html>')

    expect(html).toMatchSnapshot()
  })
})
