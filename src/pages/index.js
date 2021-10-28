import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
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
    <div className="test">
      <h1>Translator </h1>
<div className="items">
      <TextField
        id="standard-basic"
        label="Type text to translate"
        variant="standard"
        onChange={(e) => setIncomingText(e.target.value)}
      />
</div><div className="items">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Select language"
        onChange={languageKey}
      >
        {supportedLanguage.map((language, index) => {
          return (
            <MenuItem key={index} value={language.code}>
              {language.name}
            </MenuItem>
          );
        })}
      </Select>
      </div><div className="items">
      {translatedText}
      </div><div className="items">
      <Button variant="contained" onClick={translateText}>
        Translate
      </Button></div>
    </div>
  );
}
