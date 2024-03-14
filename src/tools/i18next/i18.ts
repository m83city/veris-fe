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
                selectorLanguage:{
                  label: "Language"
                },
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
                        name:"Name/Surname cannot contain numbers or special characters",
                        min: "Too Short",
                        max: "Too Long",
                        required: "Required",
                        email : "Invalid e-mail",
                        confirmPassword: "Password didn't match",
                        phoneNumber:"Phone number is not valid",
                        password:"Password can publish only Latin letters, numbers and symbols: -_.!@#$%^&*(){}+=?",
                        passwordMatch:"Passwords do not match"
                    },
                }
            }
          },
          uk: {
            translation: {
              selectorLanguage:{
                label: "Мова"
              },
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
                        name:"Імʼя/Прізвище не може містити цифри чи спецсимволи",
                        min: "Занадто коротке",
                        max: "Занадто довге",
                        required: "Вимагається",
                        email : "Не вірний формат електронної адреси",
                        confirmPassword: "Паролі не співпадають",
                        phoneNumber:"Номер телефону не відповідний",
                        password:"Пароль може містити тільки латинські літери цифри та символи: -_.!@#$%^&*(){}+=?",
                        passwordMatch:"Паролі не збігаються"
                    },
                }
            }
          },
    }
  });

export default i18n;