const AdminLogin = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="p-10 card bg-white shadow-xl rounded-lg">
          <h2 className="text-2xl font-bold mb-5 text-gray-800">Admin Login</h2>
          <form className="space-y-5">
            <input type="email" placeholder="Email" className="input w-full max-w-xs" required />
            <input type="password" placeholder="Password" className="input w-full max-w-xs" required />
            <button type="submit" className="btn w-full max-w-xs bg-blue-500 hover:bg-blue-700 text-white">Login</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default AdminLogin;
  
  