// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import '../styles/components/Layout.css';

// function Layout({ children }) {
//   return (
//     <div className="Main">
//       <Header />
//       {children}
//       <Footer />
//     </div>
//   );
// }

// export default Layout;

import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/components/Layout.css';

function Layout({ children }) {
  return (
    <div className='Main'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout