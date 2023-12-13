import styled from './Item.module.css'

const Item = ({
  name,
  handleClick
}: {
  name: string
  handleClick: () => void
}) => {
  return (
    <li className={styled.item}>
      {name}
      <button onClick={handleClick}>Eliminar</button>
    </li>
  )
}

export default Item
