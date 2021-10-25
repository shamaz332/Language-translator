import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Home() {
  const [incomingText, setIncomingText] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");

  const [supportedLanguage, setSupportedLanguage] = useState([]);
  const [selectedLanguageKey, setLanguageKey] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const detectLanguage = () => {
    axios
      .post("https://libretranslate.de/detect", {
        q: incomingText,
      })
      .then((response) => {
        console.log(response.data[0].language);
        setDetectedLanguage(response.data[0].language);
      });
  };

  useEffect(() => {
    axios.get(`https://libretranslate.de/languages`).then((response) => {
      setSupportedLanguage(response.data);
    });
  }, []);
  const languageKey = (selectedLanguage) => {
    console.log(selectedLanguage.target.value);
    setLanguageKey(selectedLanguage.target.value);
  };
  const translateText = () => {
    detectLanguage();

    let data = {
      q: incomingText,
      source: detectedLanguage,
      target: selectedLanguageKey,
    };
    axios.post(`https://libretranslate.de/translate`, data).then((response) => {
      console.log(response.data);
      setTranslatedText(response.data.translatedText);
    });
  };

  return (
    <div>
      <label>
        <h1>Translator </h1>
        <input
          type="text"
          placeholder="Type text to translate"
          onChange={(e) => setIncomingText(e.target.value)}
        />
      </label>
      <br />
      <br />
      <br />
      <select onChange={languageKey}>
        <option>Please Select Language..</option>
        {supportedLanguage.map((language, index) => {
          return (
            <option key={index} value={language.code}>
              {language.name}
            </option>
          );
        })}
      </select>
      <br />
      <br />
      <br />
      {translatedText}
      <br />
      <br />
      <br />
      <button onClick={translateText}>Translate</button>
    </div>
  );
}
