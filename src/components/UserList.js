import React from "react";

function UserList({ users, onEdit, onDelete, page, setPage }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <h3>{user.first_name} {user.last_name}</h3>
          <p>{user.email}</p>
          <button onClick={() => onEdit(user.id)}>Edit</button> {/* ✅ Fixed */}
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      ))}

      <div className="pagination">
        {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default UserList;
