import { AuthProvider } from "./authentication/AuthProvider";
import { Router } from "./Router";
import "./styles/App.css";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
