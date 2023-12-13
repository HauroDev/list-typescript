export function saveData<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value))
}
export function loadData<T>(key: string): T | null {
  const data = localStorage.getItem(key)

  if (!data) return null

  return JSON.parse(data)
}
export function removeData(key: string) {
  localStorage.removeItem(key)
}
