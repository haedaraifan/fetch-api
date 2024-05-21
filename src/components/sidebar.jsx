const SideBar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-6">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2">
          <a href="/login" className="block p-2 hover:bg-gray-700 rounded">
            Login
          </a>
        </li>
        <li className="mb-2">
          <a href="/register" className="block p-2 hover:bg-gray-700 rounded">
            Register
          </a>
        </li>
        <li className="mb-2">
          <a href="/" className="block p-2 hover:bg-gray-700 rounded">
            Home
          </a>
        </li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
}

export default SideBar