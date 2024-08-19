import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";

//Pages
import Home from "./components/Home";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import Payments from "./components/Payments";
import NotificationSettings from "./components/NotificationSettings";
import EditContact from "./components/profilecomp/EditContact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Notifications" element={<Notifications />} />
        <Route path="Payment History" element={<Payments />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Edit Contact" element={<EditContact />} />

        <Route
          path="Notification Settings"
          element={<NotificationSettings />}
        />
      </Routes>
    </>
  );
}
export default App;
