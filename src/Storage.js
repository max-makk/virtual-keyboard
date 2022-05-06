export default class Storage {
  static saveKeyboardLanguage(language) {
    localStorage.setItem('keyboard-language', language);
  }

  static getKeyboardLanguage() {
    let keyboardLanguage = localStorage.getItem('keyboard-language');
    if (keyboardLanguage) {
      keyboardLanguage = JSON.parse(keyboardLanguage);
    }
    return keyboardLanguage;
  }
}
