class UnauthorizedError extends Error {
  public message: string;
  public name = "unauthorized";

  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

export default UnauthorizedError;
