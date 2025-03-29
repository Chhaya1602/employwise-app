import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ first_name: "", last_name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then(response => {
        if (response.status === 200) {  // ✅ Fixed: Used === for strict comparison
          setFormData(response.data.data);
        }
      })
      .catch(() => setError("Failed to fetch user data"));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.put(`https://reqres.in/api/users/${id}`, formData)
      .then((response) => {
        if (response.status === 200) {  // ✅ Fixed: Used === for strict comparison
          alert("User updated successfully");
          navigate("/users");
        }
      })
      .catch(() => setError("Failed to update user"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="edit-user">
      <h2>Edit User</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="first_name" value={formData.first_name} onChange={handleChange} required />
        <input name="last_name" value={formData.last_name} onChange={handleChange} required />
        <input name="email" value={formData.email} onChange={handleChange} required />
        <button type="submit" disabled={loading}>{loading ? "Updating..." : "Save"}</button>
      </form>
    </div>
  );
}

export default EditUser;
