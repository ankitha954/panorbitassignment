import "./App.css";
import ContextProvider from "./UserContext/ContextProvider";
import DataRoutes from "./DataRoutes/DataRoutes";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <DataRoutes />
      </ContextProvider>
    </div>
  );
}

export default App;
