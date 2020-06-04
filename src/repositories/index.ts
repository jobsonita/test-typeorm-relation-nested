import UsersRepository from './UsersRepository';

class Container {
  private usersRepository: UsersRepository;

  getUsersRepository() {
    if (!this.usersRepository) {
      this.usersRepository = new UsersRepository();
    }
    return this.usersRepository;
  }
}

export default new Container();
