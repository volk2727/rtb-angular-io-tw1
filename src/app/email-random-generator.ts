export class EmailRandomGenerator {

  static alfabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  static alfabetLength = EmailRandomGenerator.alfabet.length;

  getMail() {
    const name = this.getRandomString();
    const domain = this.getRandomString();

    return `${name}@${domain}.com`;
  }

  private getRandomString(): string {
    let str = '';
    const len = this.getRandomLength();
    for (let i = 0; i < len; i++) {
      str = str + this.getRandomChar();
    }
    return str;
  }


  private getRandomChar() {
    return EmailRandomGenerator.alfabet.charAt(this.getRandomInt(0, EmailRandomGenerator.alfabetLength - 1));
  }

  private getRandomLength() {
    return this.getRandomInt(3, 10);
  }

  private getRandomInt(min: number, max: number) {
    if ((max - min) < 0) {
      throw new Error('max must be greater than min');
    }

    return Math.floor(Math.random() * Math.floor(max - min)) + min;
  }
}
