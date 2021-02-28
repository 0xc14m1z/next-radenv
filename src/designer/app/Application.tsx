import React, { useState } from "react";

export const Application: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Designer</h1>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </p>
    </div>
  );
};
