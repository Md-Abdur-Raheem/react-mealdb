import React from 'react';
const Favourites = (props) => {
    const { strMeal, strMealThumb } = props.favourite;
    return (
        
         <div className="container mx-auto m-5">
                <div style = {{height:"300px", width:"300px"}} className="col m-5">
                    <div className="card">
                        <img src={strMealThumb} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{strMeal}</h5>
                        </div>
                    </div>
                </div> 
            
         </div>
    );
};

export default Favourites;<h1>This is my favourites food</h1>