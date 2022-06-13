import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;
    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });
      return response.json(user).status(200);
    } catch (error) {
      return response.json(error).status(400);
    }
  }
}

export { TurnUserAdminController };
