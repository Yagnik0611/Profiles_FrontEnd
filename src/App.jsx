import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { RequireAuth } from 'react-auth-kit'
import EditHome from "./pages/dashboards/client/EditParkPages/EditHome";
import ClientEventList from "./pages/dashboards/client/EditParkPages/ClientEventList";
import ClientFacilityList from "./pages/dashboards/client/EditParkPages/ClientFacilityList";
function App() {
  return (

    <Routes>

      <Route path="/auth/*" element={<Auth />} />
        
          <Route path="/Client/EditHome" element={<EditHome />} />
          <Route path="/Client/EditFacilityList" element={<ClientFacilityList />}/>
          <Route path="/Client/ClientEventList" element={<ClientEventList />}/>
          {/* } />
          <Route path="/ClientEventList" element={<ClientEventList />} />
          <Route path="/ClientMap" element={<ClientMap />} /> */}
     <Route path="/user/*" 
     element={
      <RequireAuth loginPath={'/auth/sign-in'}>
            <Dashboard />
          </RequireAuth>
     }
      />
       <Route path="/admin/*"  element={
      <RequireAuth loginPath={'/auth/sign-in'}>
            <Dashboard />
          </RequireAuth>
     } /> 
      <Route path="/client/*" element={
      <RequireAuth loginPath={'/auth/sign-in'}>
            <Dashboard />
          </RequireAuth>
     } /> 
      
      
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
}

export default App;
