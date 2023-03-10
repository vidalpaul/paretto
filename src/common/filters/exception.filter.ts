import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

interface IError {
  message: string;
  code: string;
}

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request: any = ctx.getRequest();

    const code =
      exception instanceof HttpException
        ? (exception.getResponse() as IError).code
        : 'INTERNAL_SERVER_ERROR';
    const message =
      exception instanceof HttpException
        ? (exception.getResponse() as IError).message
        : exception.message;

    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    const responseData = {
      ...{
        message,
        code,
        timestamp: new Date().toISOString(),
        path: request.url,
      },
    };

    this.logMessage(request, message, code, exception);

    response.status(status).json(responseData);
  }

  private logMessage(req: any, msg: string, code: string, exception: any) {
    console.error(
      `End Request for ${req.path}`,
      `method=${req.method} code=${code} message=${msg}`,
      exception,
    );
  }
}
