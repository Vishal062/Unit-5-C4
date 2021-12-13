import "./styles.css";
import { SignIn } from "./Component/SignIn";
import CustomHook from "./Component/customHook";
export default function App() {
  return (
    <div className="App">
      <CustomHook />
      <SignIn />
    </div>
  );
}
