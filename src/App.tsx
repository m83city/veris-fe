import "./App.css";
import RegistrationForm from "./authorization/registration/RegistrationForm";
import i18n from "./tools/i18next/i18";
import { useTranslation, Trans } from "react-i18next";

function App() {
  interface ILanguage {
    [key: string]: {
      nativeName: string;
    };
  }
  const lngs: ILanguage = {
    en: { nativeName: "English" },
    uk: { nativeName: "Українська" },
  };

  const { t } = useTranslation();
  return (
    <div className="App" style={{ margin: "10px" }}>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>

      <RegistrationForm></RegistrationForm>
    </div>
  );
}

export default App;
