import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Eduarda",
        lastName: "Ramalho",
        email: "eduarda@gmail.com",
        password: "123",
      },
    ];
  }
}
