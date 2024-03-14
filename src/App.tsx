import "./App.css";
import RegistrationForm from "./authorization/registration/RegistrationForm";
import Profile from "./profile/Profile";
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
    <div className="App">
      <div>
        {Object.keys(lngs).map(
          (
            lng //TODO new issue (move to component with dropdown list)
          ) => (
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
          )
        )}
      </div>
    </div>
  );
}

export default App;
