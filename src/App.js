import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageMain from './pages/PageMain';
import { path } from './until/const';

function App() {
  return (
    <Routes>
      <Route path={path.MAIN} element={<PageMain />} />
      <Route path={path.CARD+'/:id'} element={<PageMain />} />
    </Routes>
  );
}

export default App;
