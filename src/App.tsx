import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProjectSection } from './components/ProjectSection';
import { ProjectDetail } from './components/ProjectDetail';
import { Header } from './components/Header';
import { projects } from './data/projects';
import './i18n';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
              <main className="container mx-auto">
                <Header />
                <ProjectSection projects={projects} />
              </main>
            </div>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;