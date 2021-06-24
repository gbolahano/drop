import { useState, useEffect, useRef } from "react";
import Task from "./task";
export default function App() {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(0);
  useEffect(() => {
    const listener = (e) => {
      if (ref.current && e.target && ref.current.contains(e.target)) {
        return;
      }
      setIsActive(0);
    };
    document.addEventListener("click", listener, { capture: true });
    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, [isActive, ref]);

  return (
    <div className="App">
      {/* {isActive.id} */}
      <table>
        <tbody>
          <Task
            index={1}
            refd={ref}
            s={isActive}
            isActive={isActive === 1}
            setIsActive={setIsActive}
          />
          <Task
            index={2}
            refd={ref}
            isActive={isActive === 2}
            setIsActive={setIsActive}
          />
          <Task
            index={3}
            refd={ref}
            isActive={isActive === 3}
            setIsActive={setIsActive}
          />
        </tbody>
      </table>
    </div>
  );
}
