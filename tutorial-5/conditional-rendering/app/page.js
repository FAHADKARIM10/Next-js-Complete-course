import LoginStatus from "./Components/Login";
import NameForm from "./Components/FormAndInputHandLing";

export default function Home(){
  return(
    <div style={{ padding: '50px' }}>
      <LoginStatus /> 
      <NameForm />
    </div>
  )
} 