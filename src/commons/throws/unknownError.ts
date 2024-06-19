class UnknownError extends Error {
    public message: string;
    public name = "unknown";
  
    constructor(message: string) {
      super(message);
      this.message = message;
    }
  }
  
  export default UnknownError;
  