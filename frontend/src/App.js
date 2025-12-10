import './App.css';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import IsecDashboard from './Isecurion-components/Pages/IsecDashboard';
import AddProject from './Isecurion-components/Pages/AddProject';
import UpdatePassword from './Isecurion-components/Pages/UpdatePassword';
import Status from './Isecurion-components/Pages/Status';
import AddVulnerability from './Isecurion-components/Pages/AddVulnerability';
import Messenger from './Isecurion-components/Pages/Messenger';
import ClientDashboard from './Client-components/Pages/ClientDashboard';
import ClientStatus from './Client-components/Pages/ClientStatus';
import ViewAction from './Client-components/Pages/ViewAction';
import Client_PasswordUpdate from './Client-components/Pages/Client_PasswordUpdate';
import Client_Messenger from './Client-components/Pages/Client_Messenger'
import ProtectedRoute from './Context/ProtectedRoute';
import ClientProtected from './Context/ClientProtected';
import Error from './ErrorPage/Error';
import GenerateReport from './Isecurion-components/Pages/GenerateReport';
import ResetPassword from './HomePage/ResetPassword';
import { useEffect, useState } from 'react';
import { UserAuthProvider, useAuth } from './Context/UserContext';
import SessionTimeout from './SessionTimeout/SessionTimeout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const { projectId } = useParams();


  return (

    <div className="App">

      <UserAuthProvider>
        <Routes>
          <Route
            exact path='/'
            element={<HomePage />}>
          </Route>

          <Route
            exact path='/isecurion_dash'
            element={<ProtectedRoute><IsecDashboard /></ProtectedRoute>}>
          </Route>

          <Route
            exact path='/isecurion_dash/status/:projectid'
            element={<ProtectedRoute><Status project={projectId} /></ProtectedRoute>}>
          </Route>

          <Route
            exact path='/isecurion_dash/addproject'
            element={<ProtectedRoute><AddProject /></ProtectedRoute>}>
          </Route>

          <Route
            exact path='/isecurion_dash/status/:projectid/addvuln'
            element={<ProtectedRoute><AddVulnerability /></ProtectedRoute>}>
          </Route>

          <Route
            exact path='/isecurion_dash/update_pass'
            element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>}>
          </Route>

          <Route
            exact path='/isecurion_dash/messenger'
            element={<ProtectedRoute><Messenger /></ProtectedRoute>}>
          </Route>

          <Route exact path='/isecurion_dash/generatereport'
            element={<ProtectedRoute><GenerateReport /></ProtectedRoute>}>
          </Route>

          <Route
            exact path='/client_dash'
            element={<ClientProtected><ClientDashboard /></ClientProtected>}>
          </Route>

          <Route
            exact path='/client_dash/status/:projectName'
            element={<ClientProtected><ClientStatus projectid={projectId} /></ClientProtected>}>
          </Route>

          <Route
            exact path='/client_dash/status/:projectName/view/:documentId'
            element={<ClientProtected><ViewAction projectId={projectId} /></ClientProtected>}>
          </Route>

          <Route
            exact path='/client_dash/client_password'
            element={<ClientProtected><Client_PasswordUpdate /></ClientProtected>}>
          </Route>

          <Route
            exact path='/client_dash/messenger'
            element={<ClientProtected><Client_Messenger /></ClientProtected>}>
          </Route>

          <Route
            exact path='*'
            element={<Error />}>
          </Route>

          <Route
            exact path='/resetpassword/:resetToken'
            element={<ResetPassword />}
          ></Route>

        </Routes>
        <SessionTimeout />
        <ToastContainer />
      </UserAuthProvider>
    </div>

  );
}

export default App;
