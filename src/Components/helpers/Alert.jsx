import { useState, useEffect } from "react";
import "./Alert.css";
function Alert() {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 10000); // Close the message after 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="alert"
    >
      {showWelcomeMessage && (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <p>
            Welcome to My Website! Thank you for visiting.
            You can also interact with the Banner  &#123; hint: "3d 😜" &#125;
          </p>
        </div>
      )}
    </div>
  );
}
export default Alert;
