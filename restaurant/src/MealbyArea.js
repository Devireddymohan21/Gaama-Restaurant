import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./Dashboard.css"

function MealbyArea() {
    const [meals, setMeals] = useState([]);
    const [selectedarea, setSelectedarea] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchmeals = async () => {
        try {
            const response = await axios.get(`http://localhost:8005/aremeal?area=${selectedarea}`);
            return response;
        } catch (error) {
            console.error("Error fetching meals:", error);
        }
    };

    useEffect(() => {
        const getMeals = async () => {
            if (selectedarea) {
                setLoading(true);
                const response = await fetchmeals();
                if (response) {
                    setMeals(response.data.meals);
                }
            }
            else{
                setLoading(false);
            }  

        };
        getMeals();
    }, [selectedarea]);

    return (
        <div>
            <div >
                {meals && loading && (
                    <div>
                    <p><strong>Available meals in: </strong>{selectedarea}</p>
                    <div className="meal-container">
                        
                        {meals.map((meal) => (
                            <div className="meal-card" key={meal.idMeal}>
                                <p>{meal.strMeal}</p>
                                <img src={meal.strMealThumb} width="350px" height="350px" alt="Mealitem"/>
                            </div>
                        ))}
                    </div>
                    </div>
                )}
            </div>
            <footer>
                <div>
                    <h2>Browse by countries</h2>
                    <img src="https://countryflagsapi.netlify.app/flag/us.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('American')} alt="American"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/gb.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('British')} alt="British"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/ca.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Canadian')} alt="Canadian"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/cn.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Chinese')} alt="Chinese"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/hr.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Croatian')} alt="Croatian"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/nl.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Dutch')} alt="Dutch"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/eg.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Egyptian')} alt="Egyptian"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/ph.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Filipino')} alt="Filipino"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/fr.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('French')} alt="French"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/gr.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Greek')} alt="Greek"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/in.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Indian')} alt="Indian"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/ie.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Irish')} alt="Irish"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/it.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Italian')} alt="Italian"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/jm.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Jamaican')} alt="Jamaican"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/jp.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Japanese')} alt="Japanese"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/pt.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Portuguese')} alt="Portuguese"/> <> </>
                    <img src="https://countryflagsapi.netlify.app/flag/ru.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Russian')} alt="Russian"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/tr.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Turkish')} alt="Turkish"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/ua.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Ukrainian')} alt="Ukrainian"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/vn.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Vietnamese')} alt="Vietnamese"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/tn.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Tunisian')} alt="Tunisian"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/es.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Spanish')} alt="Spanish"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/pl.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Polish')} alt="Polish"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/ma.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Moroccan')} alt="Moroccan"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/mx.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Mexican')} alt="Mexican"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/my.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Malaysian')} alt="Malaysian"/><> </>
                    <img src="https://countryflagsapi.netlify.app/flag/ke.svg" width="100px" height="70px" target="_blank" onClick={() => setSelectedarea('Kenyan')} alt="Kenyan"/><> </>
                </div>
            </footer>
        </div>
    );
}

export default MealbyArea;
