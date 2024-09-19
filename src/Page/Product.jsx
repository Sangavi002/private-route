import { useEffect, useState } from "react"
import './Product.css'

const Product = () => {
    const [data,setdata] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((e) => e.json())
        .then((e) => setdata(e))
        .catch((err) => console.log(err))
    },[])
    return(
        <>
        <div className="box">
            {data.map((ele) => (
                <div key={ele.id} className="card">
                    <div className="card-img">
                        <img src={ele.image} alt={ele.category} />
                    </div>
                    <h4>{ele.title}</h4>
                    <h5>₹ {ele.price}</h5>
                </div>
            ))}
        </div>
        </>
    )
}

export default Product