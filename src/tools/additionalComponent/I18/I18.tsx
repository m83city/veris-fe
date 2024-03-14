import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next/i18";
import { useState } from "react";
import "./I18.scss";

function I18() {
  interface ILanguage {
    [key: string]: {
      nativeName: string;
    };
  }
  const languages: ILanguage = {
    en: { nativeName: "English" },
    uk: { nativeName: "Українська" },
  };
  const { t } = useTranslation();
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <div className="languageWrapper">
      {focus ? (
        <FormControl>
          <InputLabel id="selectorLanguage">
            {t("selectorLanguage.label")}
          </InputLabel>

          <Select
            onMouseLeave={() => setFocus(false)}
            onBlur={() => setFocus(false)}
            labelId="selectorLanguage"
            value={i18n.language}
            label={t("selectorLanguage.label")}
            autoWidth
          >
            {Object.keys(languages).map((language) => (
              <MenuItem
                value={language}
                key={language}
                onClick={() => i18n.changeLanguage(language)}
              >
                {languages[language].nativeName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <p className="" onMouseEnter={() => setFocus(true)}>
          {i18n.language}
        </p>
      )}
    </div>
  );
}
export default I18;
