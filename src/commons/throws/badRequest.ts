import ThrowError from "./throw";

class BadRequestError extends ThrowError {
  public message: string;
  public name = "badRequest";

  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

export default BadRequestError;
