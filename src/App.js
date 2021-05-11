import "./styles.css";
import ClassifyPersons from "./ClassifyPersons/ClassifyPersons";
import { useSelector } from "react-redux";

export default function App() {
  const reduxState = useSelector((state) => state);

  console.log("reduxState : ", reduxState);

  return (
    <div className="App">
      <ClassifyPersons />
    </div>
  );
}
