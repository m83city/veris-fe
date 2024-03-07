import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                registrationForm:{
                  info:{
                    emailHelperText: "We'll never share your email"
                  },
                    label:{
                      name:"Name",
                      secondName:"Second Name",
                      lastName: "Last Name",
                      nickName: "Nick Name",
                      email:"Email address",
                      password:"Password",
                      confirmPassword: "Confirm password",
                      submit: "Submit",
                      birth:"Date birth",
                      reset:"Reset form"
                    },
                    error:{
                        min: "Too Short",
                        max: "Too Long",
                        required: "Required",
                        email : "Invalid e-mail",
                        confirmPassword: "Password didn't match"
                    },
                }

            }
          },
          uk: {
            translation: {
                registrationForm:{
                  info:{
                    emailHelperText: "Ми не поширюємо вашу електронну адресу"
                  },
                    label:{
                      name:"Імʼя",
                      secondName:"Прізвище",
                      lastName: "По-батькові",
                      nickName: "Нік",
                      email:"Електронна адреса",
                      password:"Пароль",
                      confirmPassword:"Підтвердіть пароль",
                      submit: "Підтвердити",
                      birth:"Дата народження",
                      reset:"Скинути форму"
                    },
                    error:{
                        min: "Занадто коротке",
                        max: "Занадто довге",
                        required: "Вимагається",
                        email : "Не вірний формат електронної адреси",
                        confirmPassword: "Паролі не співпадають"
                    },
                }

            }
          },
    }
  });

export default i18n;