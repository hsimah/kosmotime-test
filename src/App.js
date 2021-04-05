import { createContext, useState } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

export const FormContext = createContext({
  valid: false,
  setValid: () => {},
});

function App() {
  const [valid, setValid] = useState(false);
  return (
    <div>
      <FormContext.Provider
        value={{
          valid,
          setValid,
        }}
      >
        <Form></Form>
        <Message></Message>
      </FormContext.Provider>
    </div>
  );
}

export default App;
