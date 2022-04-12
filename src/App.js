import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {

    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/list' element={<ItemListContainer />} />
                        <Route path='/category/:categoryId' element={<ItemListContainer />} />
                        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
