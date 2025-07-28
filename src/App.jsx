import React, { useState } from 'react';
import './App.css';
import UserCard from './UserCard';

function App() {
  const users = [
    { name: "Puni", isOnline: true },
    { name: "Jay", isOnline: true },
    { name: "Ravi", isOnline: false},
    { name: "Sita", isOnline: true },
    { name: "Gita", isOnline: false },
    { name: "Kiran", isOnline: true },
    { name: "Amit", isOnline: false },
    { name: "Nina", isOnline: true },
    { name: "Raj", isOnline: false },
    { name: "Maya", isOnline: true }
  ];

  const [groupedView, setGroupedView] = useState(true);

  const onlineUsers = users.filter(user => user.isOnline);
  const offlineUsers = users.filter(user => !user.isOnline);

  return (
    <>
      <h1>User Activity Dashboard</h1>
      
<div className="toggle-container">
  <span className="toggle-label">View:</span>
  <label className="switch">
    <input
      type="checkbox"
      checked={groupedView}
      onChange={() => setGroupedView(!groupedView)}
    />
    <span className="slider"></span>
  </label>
  <span className="toggle-mode">{groupedView ? 'Grouped' : 'Mixed'}</span>
</div>


      {groupedView ? (
        <div className="grouped-container">
          <div>
            <h2>🟢 Online</h2>
            <div className="user-list">
              {onlineUsers.map((user, index) => (
                <UserCard key={index} name={user.name} isOnline={user.isOnline} />
              ))}
            </div>
          </div>
          <div>
            <h2>🔴 Offline</h2>
            <div className="user-list">
              {offlineUsers.map((user, index) => (
                <UserCard key={index} name={user.name} isOnline={user.isOnline} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="user-list">
          {users.map((user, index) => (
            <UserCard key={index} name={user.name} isOnline={user.isOnline} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
