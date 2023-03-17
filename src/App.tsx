import React from 'react';
import { lazy, Suspense } from 'react';
import {  Routes, Route } from "react-router-dom";


const NotFound = lazy(() => import('./pages/NotFound'));

const CharacterListPage = lazy(() => import('./pages/CharacterListPage'));
const CharacterDetail = lazy(() => import('./pages/CharacterDetail'));

export const App =() => {
  return (
    <>
      <Suspense>
        <div className="App">
          <Routes>
            <Route path="/" element={<CharacterListPage />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}



