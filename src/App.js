import "./App.css";
import ContextProvider from "./useContext/ContextProvider";
import DataRoutes from "./DFataRoutes/DataRoutes";

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
