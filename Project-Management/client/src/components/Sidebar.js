import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkStyle = {
    display: 'block',
    padding: '10px 15px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 500,
    marginBottom: '10px',
    transition: 'background-color 0.2s, color 0.2s',
  };

  const activeStyle = {
    backgroundColor: '#2563EB',
    color: '#fff',
  };

  return (
    <aside
      style={{
        width: '220px',
        background: '#F2F2F2',
        height: '100vh',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.05)',
      }}
    >
      <h3 style={{ marginBottom: '20px', color: 'black', textAlign:'center',borderBottom: '2px solid black',paddingBottom: '6px',marginTop: '10px',fontWeight: '700'}}> ☰ Menu</h3>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          🏠 Dashboard
        </NavLink>
        <NavLink
          to="/create-project"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          ➕ Create Project
        </NavLink>
        <NavLink
          to="/register"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          🧾 Register
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
