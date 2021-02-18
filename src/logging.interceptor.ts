import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler, Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    this.logger.log('Request Endpoint');
    this.logger.log(request.url);
    this.logger.log('Request body');
    this.logger.log(JSON.stringify(request.body));

    const now = Date.now();
    return next.handle().pipe(
      tap((response) => {
        this.logger.log('Response body');
        this.logger.log(JSON.stringify(response));
        this.logger.log(`Duration... ${Date.now() - now}ms`);
      })
    );
  }
}
