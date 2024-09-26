import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectsPage from './components/projectsPage';
import ServicePage from './components/servicePage';
import Context from './context/context';
import { Helmet } from 'react-helmet';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Alex Diyan</title>
                <meta name="description" content="Web Developer's portfolio website" />
      </Helmet>
    <Context>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/projects' element={<ProjectsPage/>}/>
            <Route path="/services" element={<ServicePage/>}/>
          </Routes>
      </BrowserRouter>
    </Context>
  </React.StrictMode>
);
