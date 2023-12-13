import { useEffect, useState } from 'react'
import { loadData, saveData } from '../utils/storage'

export type ItemId = `${string}-${string}-${string}-${string}-${string}`

interface Item {
  id: ItemId
  timestamp: number
  name: string
}

export const useItems = (name = 'items') => {
  const [items, setItems] = useState<Item[]>(loadData(name) || [])

  useEffect(() => {
    console.log('Carga Completa')
    saveData(name, items)
    return () => console.log('cargando datos...')
  }, [items, name])

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
