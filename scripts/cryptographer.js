class cryptographer {
  /**
   * Create a new instance of a Caesar Cipher
   *
   * @param {string} first The rotation.
   * @param {string} second The direction of shift.
   */
  constructor(rotation = 5, shiftLeft = true) {
    this.rotation = rotation;
    this.shiftLeft = shiftLeft;

    /**
     * Shifts the letter to the left using the rotation as number of times.
     *
     * @param {string} any The letter to be shifted
     * @returns {string} The shifted letter.
     */
    const skipLeft = chara => {
      let charaASCII = chara.charCodeAt(0);
      charaASCII -= this.rotation;

      //Reasign the character ascii if it strays from the alphabets.
      if (/[A-Z]/.test(chara) && charaASCII < 65) {
        const diff = 65 - charaASCII;
        charaASCII = 91 - diff;
      } else if (/[a-z]/.test(chara) && charaASCII < 97) {
        const diff = 97 - charaASCII;
        charaASCII = 123 - diff;
      }

      return String.fromCharCode(charaASCII);
    };

    /**
     * Shifts the letter to the right using the rotation as number of times.
     *
     * @param {string} any The letter to be shifted
     * @returns {string} The shifted letter.
     */
    const skipRight = chara => {
      let charaASCII = chara.charCodeAt(0);
      charaASCII += this.rotation;

      //Reasign the character ascii if it strays from the alphabets.
      if (/[A-Z]/.test(chara) && charaASCII > 90) {
        const diff = charaASCII - 90;
        charaASCII = 64 + diff;
      } else if (/[a-z]/.test(chara) && charaASCII > 122) {
        const diff = charaASCII - 122;
        charaASCII = 96 + diff;
      }

      return String.fromCharCode(charaASCII);
    };

    /**
     * Encrypts data using parameters defined
     *
     * @param {string} any The text to be ecrypted.
     * @returns {string} The encripted text.
     */
    this.encryptText = function(text) {
      let encryptedText = "";

      for (let cha of text) {
        if (/[a-zA-Z]/.test(cha)) {
          //Shift character only of it is a letter.
          if (this.shiftLeft) {
            //shift to the left
            encryptedText += skipLeft(cha);
          } else {
            //shift to the right
            encryptedText += skipRight(cha);
          }
        } else {
          //If not a letter, don't shift
          encryptedText += cha;
        }
      }

      return encryptedText;
    };

    /**
     * Decrypts data based on the parameters defined.
     *
     * @param {string} any The text to be decrypted.
     * @returns {string} The plain text.
     */
    this.decryptText = function(text) {
      let planeText = "";

      for (let cha of text) {
        if (/[a-zA-Z]/.test(cha)) {
          //Shift character only if it is a letter
          if (this.shiftLeft) {
            //shift character to the right
            planeText += skipRight(cha);
          } else {
            //Shift character to the left
            planeText += skipLeft(cha);
          }
        } else {
          //If not a letter, don't shift
          planeText += cha;
        }
      }

      return planeText;
    };
  }
}
