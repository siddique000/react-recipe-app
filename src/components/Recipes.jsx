import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

const Recipes = ({ tittle, calories, image, healthLabels, ingredients }) => {

   const [show, setShow] = useState(false)

   const handleButton = () => {
      setShow(true)
   }


   return (
      <div className="card" style={{ width: "18rem", marginBottom: "2rem" }}>
         <img src={image} className="card-img-top" alt={tittle} />
         <div className="card-header text-center" style={{ fontWeight: "bold" }}>
            {tittle.length < 25 ? tittle : `${tittle.substring(0,30)}...`}
         </div>
         <div className="card-body">
            <p class="card-text"><small style={{ fontWeight: 'bold', fontSize: '16px' }}>Health Labels:</small> {`${healthLabels.join(',')}`}</p>
            <p>Calories: {Math.floor(calories)}</p>
            <a class="btn btn-outline-warning d-block" onClick={handleButton}>ingredients</a>
            {
               show &&
               <ol>
                  {ingredients.map(ingredient => (
                     <li>{ingredient.text}</li>
                  ))}
               </ol>
            }
         </div>
      </div>
   )
}

export default Recipes
