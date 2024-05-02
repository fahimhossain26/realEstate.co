import {useLoaderData,useParams}  from "react-router-dom";
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiShape2Line } from "react-icons/ri";
import Navber from "../navber/Navber";
import Footer from "../footer/Footer";

const CardDetails = () => {
    const cards= useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const card=cards.find(card=>card.id==idInt)
    // console.log(card,id);
    const {type, description ,price,photo,shape,facilities,location,status}=card;
    return (
       
        <div>
             <Navber></Navber>

            <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
  <figure><img src={photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl mb-5 uppercase ">{type}</h2>
    <p>{description}</p>
    <p className="font-bold">
        {
            facilities.map(faci=><li>{faci}</li>)
        }
    </p>
    <p className="flex items-center gap-2 text-xl"> <span><FaMapLocationDot /></span>{location}</p>
 

    <p className="flex items-center gap-2 text-xl">  <span><RiShape2Line /></span> shape :{shape} sqr.ft </p>
     <p className="flex items-center gap-2 text-xl"> <span><MdOutlineTypeSpecimen />  </span> status:  {status}</p>

    <div > <p className="font-bold text-xl"> Price : {price}</p> </div>
    {/* <div className="card-actions justify-end">
        
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>

<Footer></Footer>
        </div>
        
    );
};


export default CardDetails;