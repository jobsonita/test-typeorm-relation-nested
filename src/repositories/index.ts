import UsersRepository from './UsersRepository';
import UserProfilesRepository from './UserProfilesRepository';

class Container {
  private usersRepository: UsersRepository;

  private userProfilesRepository: UserProfilesRepository;

  getUsersRepository() {
    if (!this.usersRepository) {
      this.usersRepository = new UsersRepository();
    }
    return this.usersRepository;
  }

  getUserProfilesRepository() {
    if (!this.userProfilesRepository) {
      this.userProfilesRepository = new UserProfilesRepository();
    }
    return this.userProfilesRepository;
  }
}

export default new Container();
