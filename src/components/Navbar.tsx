

interface NavbarProps {
  onAddEmployeeClick: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ onAddEmployeeClick }) => {
  return (
    <div className="flex w-full p-4 bg-[#FFDC7F] shadow-md">
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl font-extrabold text-gray-800">USER MANAGER</p>
        <button
          className="bg-[#78B7D0] p-3 text-white px-6 rounded-lg font-semibold hover:bg-[#6aa4b8] transition duration-300 ease-in-out"
          onClick={onAddEmployeeClick}
        >
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default Navbar;

