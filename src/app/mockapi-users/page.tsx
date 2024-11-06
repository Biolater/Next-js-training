"use client";
import { useEffect, useState } from "react";
import { addUser } from "../actions";

const MockApiUsers = () => {
  const [users, setUsers] = useState<{ name: string; id: string }[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(
        "https://672b26af976a834dd025d37e.mockapi.io/users"
      );
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <form action={addUser} className="flex items-center gap-1">
        <input name="name" type="text" placeholder="new user" />
        <button type="submit">Add</button>
      </form>
      {users.map((user: { name: string; id: string }) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default MockApiUsers;
