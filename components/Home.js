import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Navbar from "./Navbar";
const Home = () => {
  const [tokenDetails, setTokenDetails] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const decodeToken = jwt_decode(storedToken);
      setTokenDetails(decodeToken);
      console.log(decodeToken);
    }
  }, []);
  return (
    <>
      <div>
        {/* <h1>User details</h1> */}
        {/* <p>id: {tokenDetails.user.id}</p>
        <p>Name: {tokenDetails.user.username}</p>
        <p>Email: {tokenDetails.user.email}</p> */}
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-3 lg:px-4">
          <div className="max-w-4xl w-full space-y-8 p-6 rounded-xl shadow-lg">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
