import React from 'react'
const Profile = () => {
  const email = "usuario@ejemplo.com";

  const handleLogout = () => {
    alert("Sesión cerrada");
  };

  return (
    <>
     <div className="container mt-5">
      <h2>Perfil de Usuario</h2>
      <p><strong>Email:</strong> {email}</p>
      <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
    </div>
    </>
  )
}

export default Profile