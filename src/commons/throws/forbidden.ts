class ForbiddenError extends Error {
  public message: string;
  public name = "forbidden";

  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

export default ForbiddenError;
