// // import React from 'react';
// // import ProjectSection from './components/ProjectSection';
// // import ClientSection from './components/ClientSection';
// // import ContactForm from './components/ContactForm';
// // import NewsletterSection from './components/NewsletterSection';


// // const App = () => {
// //   return (
// //     <div>
// //       <ProjectSection />
// //       <ClientSection />
// //       <ContactForm />
// //       <NewsletterSection />
// //     </div>
// //   );
// // };

// // export default App;


// import React, { useState } from 'react';
// import ProjectSection from './components/ProjectSection';
// import ClientSection from './components/ClientSection';
// import ContactForm from './components/ContactForm';
// import NewsletterSection from './components/NewsletterSection';
// import ProjectManagement from "./components/ProjectManagement"
// import ClientManagement from "./components/ClientManagement"
// import ContactDetails from "./components/ContactDetails"
// import SubscribedEmails from "./components/SubscribedEmails"

// const App = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <div>
//       {/* Header with Admin Button */}
//       <header className="bg-gray-800 text-white p-4">
//         <div className="container mx-auto flex justify-end">
//           <div className="relative">
//             <button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
//             >
//               Admin
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
//                 <a
//                   href="#"
//                   onClick={(e) => { e.preventDefault(); alert('Navigate to POST /api/projects'); }}
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   POST /api/projects
//                 </a>
//                 <a
//                   href="#"
//                   onClick={(e) => { e.preventDefault(); alert('Navigate to POST /api/clients'); }}
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   POST /api/clients
//                 </a>
//                 <a
//                   href="#"
//                   onClick={(e) => { e.preventDefault(); alert('Navigate to GET /api/contact'); }}
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   GET /api/contact
//                 </a>
//                 <a
//                   href="#"
//                   onClick={(e) => { e.preventDefault(); alert('Navigate to GET /api/newsletter'); }}
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   GET /api/newsletter
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div>

//         <ProjectSection />
//         <ClientSection />
//         <ContactForm />
//         <NewsletterSection />
//         <ProjectManagement/>
//         <ClientManagement/>
//         <ContactDetails/>
//         <SubscribedEmails/>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import ProjectSection from './components/ProjectSection';
import ClientSection from './components/ClientSection';
import ContactForm from './components/ContactForm';
import NewsletterSection from './components/NewsletterSection';
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
    setIsDropdownOpen(false); // Close dropdown after selection
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
            <img src='https://res.cloudinary.com/dhoqrms16/image/upload/v1750841875/logo_lceh2x.svg' width={150}></img>
          </span>
          <a href='/'>
            {/* Real <span className="text-gray-800">Trust</span> */}
          </a>
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

      {/* <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-end">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
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
        </div>
      </header> */}



      {/* Main Content */}
      <div className="container mx-auto p-6">
        {activeComponent === 'ProjectManagement' && <ProjectManagement />}
        {activeComponent === 'ClientManagement' && <ClientManagement />}
        {activeComponent === 'ContactDetails' && <ContactDetails />}
        {activeComponent === 'SubscribedEmails' && <SubscribedEmails />}
        {!activeComponent && (
          // <>
          //   <ProjectSection />
          //   <ClientSection />
          //   <ContactForm />
          //   <NewsletterSection />
          // </>
          <>
            <ConsultationPage/>
          </>
        )}
      </div>
      <Toaster/>
    </div>
  );
};

export default App;
