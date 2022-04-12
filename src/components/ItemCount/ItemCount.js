import './ItemCount.css'
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const decrement = () => (count > 0) ? setCount(count - 1) : (null)
    const increment = () => (count < stock) ? setCount(count + 1) : alert(`No contamos con más de ${stock} productos`)

    return (
        <div className='base'>
            <div className='count'>
                <a onClick={decrement}>-</a>
                {<p>{count}</p>}
                <a onClick={increment}>+</a>
            </div>
            <a onClick={() => onAdd(count)} className='agregar'>Agregar al carrito</a>
        </div>
    )
}

export default ItemCount