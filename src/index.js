import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { getMovieData } from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<App/>}></Route>
      {/* <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>

      <Route path="*" element={<p>Path not resolved</p>} /> */}
      {/* <App/> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
