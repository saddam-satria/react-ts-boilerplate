import ThrowError from "./throw";

class BadGatewayError extends ThrowError {
  public message: string;
  public name = "badGateway";

  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

export default BadGatewayError;
