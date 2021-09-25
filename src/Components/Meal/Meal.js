import React from 'react';

const Meal = (props) => {
    // console.log(props);
    const {strMealThumb, strMeal, strCategory, strArea, strTags} = props.meal;
    return (
        <div>
                <div style = {{height:"200px", width:"200px"}} className="col h-100">
                    <div className="card h-100 text-center w-100">
                    <img  src={strMealThumb} className="card-img-top float" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{strMeal}</h5>
                        <p className="card-text"><b>Type:</b> {strTags}</p>
                        <p className="card-text"><b>Category:</b> {strCategory}</p>
                        <p className="card-text"><b>Speical:</b> {strArea}</p>
                        <button onClick = {()=>props.handleFavourites(props.meal)} className = 'btn btn-success'>Add to favourites</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Meal;