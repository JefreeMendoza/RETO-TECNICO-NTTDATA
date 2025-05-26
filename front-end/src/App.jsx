import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));

  }
    , []);

  return (
    <div className="container">
      <h1 className="title">Lista de Usuarios Aleatorios</h1>
      <div className="grid">
        {users.map((user, index) => (
          <div className="card" key={index}>
            <img className="avatar" src={user.picture.large} alt={user.name.first} />
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            <p><strong>Género:</strong> {user.gender}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Ubicación:</strong> {`${user.location.city}, ${user.location.country}`}</p>
            <p><strong>Nacimiento:</strong> {new Date(user.dob.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
}

export default App
