class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "DatabaseError";
    this.statusCode = statusCode || 400;
  }
}

export default CustomError;
