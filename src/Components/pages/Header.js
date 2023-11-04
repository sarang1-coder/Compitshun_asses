import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#639f60',
    padding: '10px'
  };

  return (
    <div style={headerStyle} className='container'>
      <h3>ToDoList App</h3>
    </div>
  );
};

export default Header;
