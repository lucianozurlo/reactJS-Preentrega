import './CartWidget.css'

const CartWidget = (props) => {
    return (
        <>
            <div className='Cart'>
                <img src={'./img/cart.svg'} />
                <div className='Counter'>{props.counter}</div>
            </div>
        </>
    )
}

export default CartWidget