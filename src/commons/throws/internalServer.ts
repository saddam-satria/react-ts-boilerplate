class InternalServerError extends Error {
  public message: string;
  public name = "internalServer";

  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

export default InternalServerError;
