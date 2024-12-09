import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  
  return (
    <div className="container">
      <div>"Everything is open source if you can reverse engineer"</div>
      <div className="container">Static Analysis</div>
    </div>
  );
}

export default App;
