// import { useState } from 'react'

import { lazy, useState, useEffect } from "react";

import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('../../pages/TeachersPage/TeachersPage'));
const FavoritesPage = lazy(() => import('../../pages/FavoritesPage/FavoritesPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

import './App.css'
import { RegistrationForm } from "../RegistrationForm/RegistrationForm.js";

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  const closeModal = () => {
    setIsRegisterOpen(false);
  };

  useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal(); 
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []); 

  return (
    <>
      <Layout onOpenRegister={openRegisterModal}>
        <Routes>
          <Route path="/" element={<HomePage onRegisterClick={openRegisterModal} />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
        {isRegisterOpen && <RegistrationForm onClose={closeModal}/>}
      </Layout>
    </>
  )
}

export default App
