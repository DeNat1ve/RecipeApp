import React from 'react';
import cl from './recipeView.module.css'

const RecipeView = ({ children }) => {
    return (
        <div className={cl.container}>
            <div className={cl.header}>
                <div className={cl.headerTitle}>
                    <span>Image</span>
                </div>
                <div className={cl.headerTitle}>
                    <span>Name</span>
                </div>
                <div className={cl.headerTitle}>
                    <span>Description</span>
                </div>
                <div className={cl.headerTitle}>
                    <span>Instruction</span>
                </div>
                <div className={cl.headerTitle}>
                    <span>Difficulty</span>
                </div>
            </div>
            {children}
        </div>
    );
};

export default RecipeView;