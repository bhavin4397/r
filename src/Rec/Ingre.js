

const Ingre = (props) => {
    return (
        <div>
            {
                props.getDes.map((obj,idx)=>{
                    return(
                        <div className="card mb-3" style={{maxWidth:'1000px'}} key={idx}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={obj.strMealThumb} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Ingridents</h5>
                                    <ul>
                                        <li>{obj.strIngredient1}</li>
                                        <li>{obj.strIngredient2}</li>
                                        <li>{obj.strIngredient3}</li>
                                        <li>{obj.strIngredient4}</li>
                                        <li>{obj.strIngredient5}</li>
                                        <li>{obj.strIngredient6}</li>
                                        <li>{obj.strIngredient7}</li>
                                        <li>{obj.strIngredient8}</li>
                                        <li>{obj.strIngredient9}</li>
                                        <li>{obj.strIngredient10}</li>
                                        <li>{obj.strIngredient11}</li>
                                    </ul>
                                    <hr></hr>
                                    <h5 className="card-title">Instruction</h5>
                                    <p>{obj.strInstructions}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Ingre;