import {IRobotDTO} from "../../dto/IRobotDTO";
import {Result} from "../../core/logic/Result";


export default interface IRobotService{
  createRobot(robotDTO: IRobotDTO): Promise<Result<IRobotDTO>>;

  updateRobot(robotDTO: IRobotDTO): Promise<Result<IRobotDTO>>;

}
