import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { LuLogIn } from "react-icons/lu";
import { HiOutlineLogin } from "react-icons/hi";



const Navber = () => {


  const { logout, user } = UseAuth();

  const links = <>
    <li ><NavLink to={'/'}>Home </NavLink></li>
    <li><NavLink to={'/about'}>About</NavLink></li>
    {/* <li><NavLink to={'/login'}>Login</NavLink></li> */}
    <li><NavLink to={'/contact'}>Contact</NavLink></li>
    <li><NavLink to={'/register'}>register</NavLink></li>
   
    
   {
    user &&   <li><NavLink to={'/userProfile'}>User profile</NavLink></li>
   }




  </>
  return (
    <div>

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                links
              }
            </ul>
          </div>
          <a ><span className="text-yellow-300 text-6xl font-mono gap-5">R</span><span className="text-3xl font-bold">Estate.co</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              links
            }

          </ul>
        </div>
        <div className="navbar-end">

        {
                        user?.email ?  <div className="dropdown dropdown-end ">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src= {user?.photoURL ||  "https://i.postimg.cc/B6s9fKrb/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo.jpg" }  />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName|| 'username not found'}</button>

                                </li>

                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user&&user?.email}</button>

                                </li>


                                <li>
                                    <button  
                                        onClick={logout}
                                        className="btn btn-sm  btn-ghost"> <HiOutlineLogin />Logout</button>

                                </li>
                        </ul>

                       
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost text-xl bg-blue-300 m-2 px-4"> <LuLogIn />Login</button>
                            </Link>

                        
                    }

        </div>
        







      </div>
    </div>
  );
};

export default Navber;