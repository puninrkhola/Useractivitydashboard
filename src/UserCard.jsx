import React, { useState } from 'react';
const UserCard = ({ name, isOnline }) => {
  const [hovered, setHovered] = useState(false); // 👈 add this line

  const cardStyle = {
    width: "220px",
    textAlign: "center",
    padding: "1.5rem",
    borderRadius: "15px",
    backgroundColor: isOnline ? "#d1f7c4" : "#fbdede",
    color: isOnline ? "#256029" : "#7f1d1d",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    transform: hovered ? "scale(1.05)" : "scale(1)", // 👈 animation
  };

  return (
    <div
      className="user-card"
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}   // 👈 when mouse enters
      onMouseLeave={() => setHovered(false)}  // 👈 when mouse leaves
    >
      <h3>{name}</h3>
      <h2>{isOnline ? "🟢 Online" : "🔴 Offline"}</h2>
    </div>
  );
};

export default UserCard;
