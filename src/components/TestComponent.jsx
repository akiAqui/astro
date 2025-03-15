
import { useEffect } from "react";

export default function TestComponent() {
  useEffect(() => {
    const handleClick = () => console.log("Event listener triggered!");
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return <div>Click anywhere</div>;
}

