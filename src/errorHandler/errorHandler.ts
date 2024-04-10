import { NextFunction, Request, Response } from "express";

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json(
    {
      error: err.message
    }
  );
}

export default errorHandler;