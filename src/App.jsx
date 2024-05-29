import { useState } from "react";

export default function App() {
  let variable = 0;
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const showValue = () => {
    alert(`
    Variável: ${variable}
    Ref: ${ref.current}
    State: ${state}
    `);
  };
  return (
    <div>
      <h2>Conhecendo o useRef</h2>
    </div>
  );
}
