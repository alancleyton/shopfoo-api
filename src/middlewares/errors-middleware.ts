/* eslint no-unused-vars: off */
/* eslint @typescript-eslint/no-unused-vars: off */
import type { Request, Response, NextFunction } from 'express';

import { AppError } from '@src/shared/errors/app-error';

export const errorsMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      code: error.code,
      message: error.message,
    });
  }

  return response.status(500).json({
    code: 'internal_error',
    message: 'Internal server error',
  });
};
