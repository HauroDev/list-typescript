import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../src/App'

describe('<App/>', () => {
  // test('should render', () => {
  //   render(<App />)
  //   screen.debug()

  //   expect(screen.getByText('List with Typescripts')).toBeDefined()
  // })

  test('should add items and remove them', async () => {
    const user = userEvent.setup()

    render(<App />)

    // buscar el input
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    // buscar el form

    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    // buscar el boton submit

    const bSubmit = form.querySelector('button')
    expect(bSubmit).toBeDefined()

    // escribir en el input
    const text = 'Ratchet & Clank'
    await user.type(input, text)

    // presionar el submit
    await user.click(bSubmit!)

    // asegurar que el item fue añadido a la lista
    const list = screen.getByRole('list')
    expect(list).toBeDefined()

    screen.debug()
    expect(list.childNodes.length).toBe(1)

    // revisar existencia del item

    const item = screen.getByText(text)
    expect(item).toBeDefined()

    // borrar el item
    const bRemove = item.querySelector('button')
    expect(bRemove).toBeDefined()

    await user.click(bRemove!)

    screen.debug()
    const noResult = screen.getByText('No hay elementos')
    expect(noResult).toBeDefined()
  })
})
