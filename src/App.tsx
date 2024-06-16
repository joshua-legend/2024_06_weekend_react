import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import SNSLogin from "./SNSLogin";

function App() {
  return (
    <div className="App">
      <SNSLogin backgroundColor="#1877F2" snsText={{ sns: "Facebook" }} snsIcon={{ Icon: FaFacebook }} />
      <SNSLogin backgroundColor="black" snsText={{ sns: "Apple" }} snsIcon={{ Icon: FaApple }} />
      <SNSLogin backgroundColor="white" snsText={{ sns: "Google" }} snsIcon={{ Icon: FaGoogle }} />
    </div>
  );
}

export default App;
