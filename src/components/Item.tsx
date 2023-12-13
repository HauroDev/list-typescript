const Item = ({
  name,
  handleClick
}: {
  name: string
  handleClick: () => void
}) => {
  return (
    <li>
      {name}
      <button onClick={handleClick}>Eliminar elemento</button>
    </li>
  )
}

export default Item
