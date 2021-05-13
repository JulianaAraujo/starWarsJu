class HttpError extends Error {
    constructor(mensagem, ErrorCode){
      super(mensagem)
      this.code = ErrorCode
    }
  }
  
  module.exports = HttpError;