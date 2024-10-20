import "./App.css";
import Navigation from "./Components/Navigation.js";
import PaymentForm from "./Components/PaymentForm.js";
import PaymentPage from "./Components/PaymentPage.js";
import AdminNavigation from "./admin/AdminNavigation.js";

function App() {
  return (
    <div className="App">
      {/* <Navigation></Navigation> */}
      <AdminNavigation></AdminNavigation>
    </div>
  );
}

export default App;
