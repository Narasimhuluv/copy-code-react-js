import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
function App() {
 let [state, setState] = useState(
  "Hello World, Welcome to the new world Vasam Narasimhulu!-1-2"
 );
 const [copied, setCopied] = useState(false);

 const otherCopy = () => setCopied(true);

 state.toString();
 return (
  <div className="App">
   <h2>{state} </h2>

   <CopyToClipboard onCopy={otherCopy} text={state}>
    <button>{copied ? "Copied" : "Copy to clipboard with button"}</button>
   </CopyToClipboard>
  </div>
 );
}

export default App;
