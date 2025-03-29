import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loadUsers = useCallback(() => {
    setLoading(true);
    axios.get(`https://reqres.in/api/users?page=${page}`)
      .then(response => setUsers(response.data.data))
      .catch(() => setError("Failed to load users"))
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  // ✅ Define the onEdit function correctly
  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);  // Navigate to edit page
  };

  return (
    <div className="users-page">
      <h2>User List</h2>
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserList users={users} onEdit={handleEdit} page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default Users;
