import React, { useEffect } from 'react';
import { useState } from 'react';
import Favourites from '../Favourites/Favourites';
import Header from '../Header/Header';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [foods, setFoods] = useState([]);
    const [filterFoods, setFilterFoods] = useState([]);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        fetch('./mealsdb.json')
            .then(res => res.json())
            .then(data => {
                setFoods(data)
                setFilterFoods(data)
            })
    }, [])

    
    
  
    
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = foods.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setFilterFoods(matchedProducts);

    }

    const handleFavourites = (food) => {
       let newFav = [...favourites, food];
        setFavourites(newFav);
    }

    return (
        <div>
            <Header handleSearch={handleSearch} ></Header>
            <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4">
            {
                favourites.map(favourite=><Favourites favourite = {favourite}></Favourites>)
            }
            </div>

            <div className="container row row-cols-1 row-cols-md-5 g-4 mx-auto">
            {
                filterFoods.map(meal => <Meal key = {meal.idMeal} meal= {meal} handleFavourites = {handleFavourites}></Meal>)
            }
            </div>

        </div>
    );
};

export default Meals;