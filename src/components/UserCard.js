function UserCard({ user, onEdit, onDelete }) {
    return (
      <div className="user-card">
        <img src={user.avatar} alt={user.first_name} />
        <h3>{user.first_name} {user.last_name}</h3>
        <p>{user.email}</p>
        <button onClick={() => onEdit(user)}>Edit</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    );
  }
  
  export default UserCard;
  