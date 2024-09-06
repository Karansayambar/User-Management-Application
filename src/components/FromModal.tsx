import  { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userSlice";

const FromModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        [name]: value,
      },
    }));
  };

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      company: {
        ...prevUser.company,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = user;
    dispatch(addUser(newUser));
    onClose();
  };

  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Add New User
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  value={user.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  value={user.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone"
                  value={user.phone}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="street"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Street
                </label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  placeholder="Enter Street"
                  value={user.address.street}
                  onChange={handleAddressChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="suite"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Suite
                </label>
                <input
                  type="text"
                  name="suite"
                  id="suite"
                  placeholder="Enter Suite"
                  value={user.address.suite}
                  onChange={handleAddressChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter City"
                  value={user.address.city}
                  onChange={handleAddressChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="zipcode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Zipcode
                </label>
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  placeholder="Enter Zipcode"
                  value={user.address.zipcode}
                  onChange={handleAddressChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lat"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Latitude
                </label>
                <input
                  type="text"
                  name="lat"
                  id="lat"
                  placeholder="Enter Latitude"
                  value={user.address.geo.lat}
                  onChange={(e) =>
                    setUser((prevUser) => ({
                      ...prevUser,
                      address: {
                        ...prevUser.address,
                        geo: {
                          ...prevUser.address.geo,
                          lat: e.target.value,
                        },
                      },
                    }))
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="lng"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Longitude
                </label>
                <input
                  type="text"
                  name="lng"
                  id="lng"
                  placeholder="Enter Longitude"
                  value={user.address.geo.lng}
                  onChange={(e) =>
                    setUser((prevUser) => ({
                      ...prevUser,
                      address: {
                        ...prevUser.address,
                        geo: {
                          ...prevUser.address.geo,
                          lng: e.target.value,
                        },
                      },
                    }))
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="companyName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="companyName"
                  placeholder="Enter Company Name"
                  value={user.company.name}
                  onChange={handleCompanyChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="catchPhrase"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Catchphrase
                </label>
                <input
                  type="text"
                  name="catchPhrase"
                  id="catchPhrase"
                  placeholder="Enter Catchphrase"
                  value={user.company.catchPhrase}
                  onChange={handleCompanyChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="bs"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  BS
                </label>
                <input
                  type="text"
                  name="bs"
                  id="bs"
                  placeholder="Enter BS"
                  value={user.company.bs}
                  onChange={handleCompanyChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FromModal;

