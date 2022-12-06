import React from 'react'

const NavigationDots = ({ active }) => (
  <div className="navigation">
    {['home', 'about', 'skills', 'work', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="navigation-dot"
        style={active === item ? { backgroundColor: '#B7184D' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;