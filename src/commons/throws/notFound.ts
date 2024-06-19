class NotFoundError extends Error {
  public message: string;
  public name = "notFound";

  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

export default NotFoundError;
