import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import { useState } from "react";

const Users = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);

  const handleAddUser = (newUser: UserData) => {
    const newUserWithId = { ...newUser, id: users.length + 1 };
    setUsers([...users, newUserWithId]);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">User Management</h1>
      </header>
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold">Users</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-gray-100 p-4 rounded shadow">
              <h3 className="font-bold">{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export default Users;
