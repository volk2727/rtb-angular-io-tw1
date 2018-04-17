export class DefaultEmailValidator {

  private static regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public validate(email: string): boolean {
    if (!email.length) {
      return true;
    }
    return email.search(DefaultEmailValidator.regexp) > -1;
  }
}
