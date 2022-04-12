import ItemCount from '../ItemCount/ItemCount';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ id, band, album, price, cover, stock }) => {

    const handleOnAdd = (quantity) => {
        alert(`Se agregaron ${quantity} productos`)
    }

    return (
        <article>
            <section>
                <picture>
                    <img src={cover} alt={album} />
                </picture>
                <p className='band'>{band}</p>
                <p className='album'>{album}</p>
                <p className='price'>$ {price}</p>
                <p className='stock'>Stock disponible <span>{stock}</span> unidades</p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='detalles'>Ver detalle</Link>
                <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
            </footer>
        </article>
    )
}

export default Item