import React from 'react';
import cl from './recipe.module.css'
import imgnf from "../../resourses/images/imgnf.png"

const Recipe = (props) => {
    return (
        <div className={cl.contentContainer}>
            <div className={cl.content}>
                {
                    props.recipe.imagePath === null ?
                        <img alt="about recipe" src={imgnf} className={cl.image} />
                        :
                        <img alt="about recipe" src={props.recipe.imagePath} className={cl.image} />
                }

            </div>
            <div className={cl.content}>
                <span>{props.recipe.name}</span>
            </div>
            <div className={cl.content}>
                {
                    props.recipe.description === null ?
                        <span className={cl.noDesc}>
                            No description
                        </span>
                        :
                        <span>
                            {props.recipe.description}
                        </span>
                }
            </div>
            <div className={cl.content}>
                <span>{props.recipe.instruction}</span>
            </div>
            <div className={cl.content}>
                <span>{props.recipe.type}</span>
            </div>
        </div>
    );
};

export default Recipe;