import './App.css'
import Item from './components/Item'
import { ItemId, useItems } from './hooks/useItems'
import { useSEO } from './hooks/useSEO'

// const INITIAL_ITEMS: Item[] = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     name: 'Rocket League'
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     name: 'Rocket Racing'
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     name: 'Rocket Jump'
//   }
// ]

function App() {
  const { items, addItem, removeItem } = useItems()
  useSEO({
    title: `List with Typescripts - ${items.length} items`,
    description: 'Elimina elementos de la lista'
  })
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget

    const input = elements.namedItem('item')

    const isInput = input instanceof HTMLInputElement

    if (!isInput || input === null || input.value === '') return

    addItem(input.value)

    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemId) => {
    return () => {
      removeItem(id)
    }
  }

  return (
    <main>
      <aside>
        <h1>List with Typescripts</h1>
        {/* Agregar aria label para saber  */}
        <form onSubmit={handleSubmit} aria-label='Añadir elementos a la lista'>
          <label>
            Agregar un elemento:
            <input name='item' placeholder='add an item' />
          </label>
          <button type='submit'>Añadir</button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>
        {items.length === 0 ? (
          <p>
            <strong>No hay elementos</strong>
          </p>
        ) : (
          <ul>
            {items.map((item) => (
              <Item
                {...item}
                key={item.id}
                handleClick={createHandleRemoveItem(item.id)}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
