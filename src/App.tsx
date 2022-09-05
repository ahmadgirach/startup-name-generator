import React, { useState } from "react";
import { Footer } from "./components/Footer";
import { KeywordInput } from "./components/KeywordInput";
import { Results } from "./components/Results";

const name = require("@rstacruz/startup-name-generator");

function App() {
  const [keyword, setKeyword] = useState("");
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setKeyword(userInput);
    setSuggestedNames(userInput ? name(userInput) : []);
  };

  return (
    <main className="flex flex-col items-center gap-6 font-primary min-h-screen pt-20 px-20 text-light-gray bg-dark-blue">
      <section className="flex-1 flex flex-col items-center gap-6 w-full">
        <KeywordInput keyword={keyword} handleInputChange={handleInputChange} />
        <Results suggestedNames={suggestedNames} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
