import React from 'react';
import Navber from '../navber/Navber';
import UseAuth from '../../hooks/UseAuth';

const UserProfile = () => {

  
  const {user}=UseAuth()

  
 
    return (
        <div>
            <Navber></Navber>

 <div className='mt-18 ml-96'>
 <div className="card card-compact w-96 bg-base-100 shadow-xl bg-blue-100 ">
              <h2 className='text-4xl text-center  font-mono'>User Details</h2>
  <figure><img  className='w-60 h-60 rounded-full' src={user?.photoURL ||  "https://i.postimg.cc/B6s9fKrb/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo.jpg"} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title bg-blue-500 p-5 rounded-xl"> Name: {user?.displayName|| 'username not found'}</h2>
    <h2 className="card-title  bg-blue-500 p-5 rounded-xl"> Email :{user&&user?.email}</h2>
   
   
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
 </div>

            
        </div>
    );
};

export default UserProfile;






 
