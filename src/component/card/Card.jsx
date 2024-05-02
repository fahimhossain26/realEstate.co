import { RiShape2Line } from "react-icons/ri";
import { Link } from "react-router-dom";


import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Card = ({card}) => {

    const {id,type, description ,price,photo,shape}=card;

    useEffect(()=>{
      Aos.init({duration:3000});
  })
    return (
        <div>
           <div className="card card-compact  bg-base-100 shadow-xl"  data-aos="flip-down">
  <figure><img  className="h-72" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{type}</h2>
    <p>{description}</p>
    <p className="flex items-center gap-2 text-xl">  <span><RiShape2Line /></span> shape :{shape} sqr.ft </p>
    <div className="flex justify-between mt-3">
    <div className="card-actions justify-start">
    <Link to={`/cardDetails/${id}`}>   <button className="btn btn-primary ">View Details</button></Link>
    </div>
    <div> <p className="font-bold text-xl"> Price : {price}</p> </div>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Card;