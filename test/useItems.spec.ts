import { describe, test, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useItems } from '../src/hooks/useItems'

describe('useItems hook', () => {
  test('should add and remove items', () => {
    const { result } = renderHook(() => useItems())
    expect(result.current.items.length).toBe(0)

    act(() => {
      result.current.addItem('Ratchet & Clank')
      result.current.addItem('Rocket League')
    })

    expect(result.current.items.length).toBe(2)

    act(() => {
      result.current.removeItem(result.current.items[0].id)
      result.current.removeItem(result.current.items[1].id)
    })

    expect(result.current.items.length).toBe(0)
  })
})
