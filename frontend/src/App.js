import "./App.css";
import Navigation from "./Components/Navigation.js";
import AdminNavigation from "./admin/AdminNavigation.js";

function App() {
  return (
    <div className="App">
      {/* <h1>CanteenManagementSystem</h1> */}
      {/* <Navigation></Navigation> */}
      <AdminNavigation></AdminNavigation>
    </div>
  );
}

export default App;
