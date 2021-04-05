import { createContext, useMemo, useState } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

export const FormContext = createContext({
  valid: false,
  setValid: () => {},
});

function App() {
  const [valid, setValid] = useState(false);
  /**
   * When using Contexts it's important to ensure that we pass the same `value` to the Provider
   * In JS `{} !== {}` so even if `valid` or `setValid` have not changed your code would always
   * trigger a re-render of the Provider's children.
   */
  const value = useMemo(() => ({
    valid,
    setValue
  });
  return (
    <>
      <FormContext.Provider
        value={value}
      >
        {/* self-closing JSX is nicer on the eyes */}
        <Form />
        <Message />
      </FormContext.Provider>
    </>
  );
}

export default App;
