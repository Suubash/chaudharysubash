import { useState, useEffect } from "react";
import hljs from "highlight.js";

function CodeHighlighter({ codeString }) {
  useEffect(() => {
    hljs.initHighlightingOnLoad();
  });
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(codeString)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="rounded-md w-full flex flex-col items-end">
      <button className="px-4 py-2 bg-primary" onClick={handleCopyClick}>
        {isCopied ? "Copied!!" : "Copy"}
      </button>
      <pre className="w-full">
        <code className="jsx">{codeString}</code>
      </pre>
    </div>
  );
}

export default CodeHighlighter;
