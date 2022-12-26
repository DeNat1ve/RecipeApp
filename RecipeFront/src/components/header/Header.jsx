import React from 'react';
import { Link } from 'react-router-dom';
import cl from './header.module.css'

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.logo}>
                <span>RecipesApp</span>
            </div>
            <div className={cl.btnContainer}>
                <Link to="/recipes" className={cl.btn}>
                    <span>All recipes</span>
                </Link>
                <Link to="/addrecipe" className={cl.btn}>
                    <span>Add new recipe</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;