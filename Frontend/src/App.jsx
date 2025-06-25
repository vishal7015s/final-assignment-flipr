import React, { useState } from 'react';
import ProjectManagement from './components/ProjectManagement';
import ClientManagement from './components/ClientManagement';
import ContactDetails from './components/ContactDetails';
import SubscribedEmails from './components/SubscribedEmails';
import ConsultationPage from './Pages/Home';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleAdminAction = (action) => {
    setIsDropdownOpen(false);
    switch (action) {
      case 'projects':
        setActiveComponent('ProjectManagement');
        break;
      case 'clients':
        setActiveComponent('ClientManagement');
        break;
      case 'contact':
        setActiveComponent('ContactDetails');
        break;
      case 'newsletter':
        setActiveComponent('SubscribedEmails');
        break;
      default:
        setActiveComponent(null);
    }
  };

  return (
    <div className=''>
      {/* Header with Admin Button */}

      <header className="flex items-center  bg-blue-50 justify-between px-8 py-4 shadow-md">
        <div className="text-2xl font-bold text-blue-700">
          <span className="inline-block mr-2">
            <a href='/'>
              <img src='https://res.cloudinary.com/dhoqrms16/image/upload/v1750841875/logo_lceh2x.svg' width={150}></img>
            </a>
          </span>

        </div>
        <nav className="hidden md:flex gap-8 text-gray-700 text-lg">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
          <a href="#aboutus" className="hover:text-blue-600">
            About us
          </a>
          <a href="#ourprojects" className="hover:text-blue-600">
            Our Projects
          </a>
          <a href="#happyclients" className="hover:text-blue-600">
            Reviwes
          </a>
        </nav>
        <div className="relative z-30">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
          >
            Admin
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleAdminAction('projects'); }}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Add Project
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleAdminAction('clients'); }}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Add Client
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleAdminAction('contact'); }}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Contact Form Details
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleAdminAction('newsletter'); }}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Subscribed Emails
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {activeComponent === 'ProjectManagement' && <ProjectManagement />}
        {activeComponent === 'ClientManagement' && <ClientManagement />}
        {activeComponent === 'ContactDetails' && <ContactDetails />}
        {activeComponent === 'SubscribedEmails' && <SubscribedEmails />}
        {!activeComponent && (
          <>
            <ConsultationPage />
          </>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default App;
