import { useState } from 'react'

export type ItemId = `${string}-${string}-${string}-${string}-${string}`

interface Item {
  id: ItemId
  timestamp: number
  name: string
}

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (name: string) => {
    const newItem = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      name
    }

    setItems((prev) => [...prev, newItem])
  }

  const removeItem = (id: ItemId) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return {
    items,
    addItem,
    removeItem
  }
}
