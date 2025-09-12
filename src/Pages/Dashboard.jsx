import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
const[username,setUsername]=useState("");

//   useEffect(()=>{
//     const token=localStorage.getItem("token");
//     if(!token){
//         navigate("/");
//         return;
//     }
//     try{
//         const decoded=jwtDecode(token)
//setUsername(decoded.username)
//     }catch(err){
//}

//   })

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="font-bold">Dashboard</h1>
        <div className="flex gap-4 items-center">
          <p className="font-semibold">Hi</p>
          <button className="border border-red-500 cursor-pointer px-4 py-1 rounded-lg">
            LogOut
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Dashboard;
