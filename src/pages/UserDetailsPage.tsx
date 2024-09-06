import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../redux/slices/userSlice";
import Navbar from "../components/Navbar";
import { RotatingLines } from "react-loader-spinner";

const UserDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userDetails, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (id) {
      dispatch(fetchUserById(id));  // Fetch user by ID when component mounts
      console.log(userDetails)
    }
  }, [dispatch, id]);

  return (
    <div>
      <Navbar />
      <div className=" w-[100%] flex items-center justify-center">
        {loading ? (
          <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
        ) : error ? (
          <p>{error}</p>
        ) : userDetails ? (
          <div key={userDetails.id} className="md:w-[80%] border bg-gray-100 m-5 p-5 overflow-hidden">
            <table className="w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-[#78B7D0] text-white">
                <tr>
                  <td colSpan={2} className="p-2 text-lg font-bold">
                    User Details
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="text-left">
                  <td className="p-2 font-semibold">Name</td>
                  <td className="p-2">{userDetails.name}</td>
                </tr>
                <tr className="text-left">
                  <td className="p-2 font-semibold">Email</td>
                  <td className="p-2">{userDetails.email}</td>
                </tr>
                <tr className="text-left">
                  <td className="p-2 font-semibold">Username</td>
                  <td className="p-2">{userDetails.username}</td>
                </tr>
                <tr className="text-left">
                  <td className="p-2 font-semibold">Phone</td>
                  <td className="p-2">{userDetails.phone}</td>
                </tr>
                <tr className="text-left">
                  <td className="p-2 font-semibold">Website</td>
                  <td className="p-2">
                    <a
                      href={`http://${userDetails.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {userDetails.website}
                    </a>
                  </td>
                </tr>
                <tr className="bg-[#78B7D0] text-white">
                    <td colSpan={2} className="p-2 text-lg font-bold border-b">Address Details</td>
                </tr>
                <tr>
                    <td className="p-2 font-semibold">City</td>
                    <td className="p-2">{userDetails.address.city}</td>
                </tr>
                <tr>
                    <td className="p-2 font-semibold">Street</td>
                    <td className="p-2">{userDetails.address.street}</td>
                </tr>
                <tr>
                    <td className="p-2 font-semibold">Suite</td>
                    <td className="p-2">{userDetails.address.suite}</td>
                </tr>
                <tr>
                    <td className="p-2 font-semibold">Zipcode</td>
                    <td className="p-2">{userDetails.address.zipcode}</td>
                </tr>
                <tr>
                    <td className="p-2 font-semibold">Geo Location</td>
                    <td className="p-2">
                        <span>Longitute {userDetails.address.geo.lat}</span><br/>
                        <span>Latitute {userDetails.address.geo.lng}</span>
                    </td>
                </tr>
                <tr className="bg-[#78B7D0] text-white">
                    <td colSpan={2} className="p-2 text-lg font-bold border-b">Company Details</td>
                </tr>
                <tr>
                    <td className="p-2 font-semibold">Name</td>
                    <td className="p-2">{userDetails.company.name}</td>
                </tr>
                <tr>
                    <td className="p-2 font-semibold">BS</td>
                    <td className="p-2">{userDetails.company.bs}</td>
                </tr>
                <tr>
                    <td className="p-2 font-semibold">CatchPhrase</td>
                    <td className="p-2">{userDetails.company.catchPhrase}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p>No user found</p>
        )}
      </div>
    </div>
  );
};

export default UserDetailsPage;
