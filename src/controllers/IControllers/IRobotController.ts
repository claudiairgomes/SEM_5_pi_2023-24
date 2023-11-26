import { Request, Response, NextFunction } from 'express';

export default interface IRobotController  {

  createRobot(req: Request, res: Response, next: NextFunction);

  getAllRobots(req: Request, res: Response, next: NextFunction);
  getRobotById(req: Request, res: Response, next: NextFunction);

  updateRobot(req: Request, res: Response, next: NextFunction);
}

