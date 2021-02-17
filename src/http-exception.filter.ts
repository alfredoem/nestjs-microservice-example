import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const data = exception.getResponse();
    response.status(status).json({
      error: true,
      code: status,
      message: this.getValidationMessage(data),
      data: data['message']
    });
  }

  private getValidationMessage(data: any) {
    if (data['error'] !== 'Bad Request' || typeof data['message'] !== 'object') {
      return data['error'];
    }

    return data['message'][0];
  }
}