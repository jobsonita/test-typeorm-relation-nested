import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Exclude } from 'class-transformer';

import UserProfile from './UserProfile';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @OneToOne(() => UserProfile, (user_profile) => user_profile.user)
  user_profile: UserProfile;
}

export default User;
