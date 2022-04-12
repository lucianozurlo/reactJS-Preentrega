import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategories } from '../../asyncmock';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then(categories => {
                setCategories(categories)
            })
    }, [])

    return (
        <>
            <nav className="NavBar">
                <Link to='/'>
                    <img className='Logo' src={'./img/logo.png'} />
                </Link>
                <div className='Categories'>
                    {categories.map(cat =>
                        <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
                            isActive
                                ? 'ActiveOption'
                                : 'Option'
                        }>
                            {cat.description}
                        </NavLink>
                    )}
                </div>
                <CartWidget counter={0} />
            </nav>
        </>
    )
}

export default NavBar