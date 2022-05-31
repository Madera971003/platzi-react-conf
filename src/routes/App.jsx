// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from '../containers/Home';
// import Checkout from '../containers/Checkout';
// import Information from '../containers/Information';
// import Payment from '../containers/Payment';
// import Success from '../containers/Success';
// import NotFound from '../containers/NotFound';
// import Layout from '../components/Layout';

// function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route exact path="/home" component={Home} />
//           <Route exact path="/checkout" component={Checkout} />
//           <Route exact path="/checkout/information" component={Information} />
//           <Route exact path="/checkout/payment" component={Payment} />
//           <Route exact path="/checkout/success" component={Success} />
//           <Route component={NotFound} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/information' element={<Information />} />
          <Route path='/checkout/payment' element={<Payment />} />
          <Route path='/checkout/success' element={<Success />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App