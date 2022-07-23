import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Landing from './scenes/landing/Landing';

const RootRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  </BrowserRouter>
);

export default RootRoutes;
