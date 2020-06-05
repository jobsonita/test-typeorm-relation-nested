import { getRepository, Repository } from 'typeorm';

import Post from '../models/Post';

import IPostsRepository, { ICreatePostDTO } from './IPostsRepository';

class PostsRepository implements IPostsRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  async create({ user_id, title, content }: ICreatePostDTO): Promise<Post> {
    const post = this.ormRepository.create({ user_id, title, content });
    await this.ormRepository.save(post);
    return post;
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  async findAll(): Promise<Post[]> {
    return this.ormRepository
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.user', 'u')
      .leftJoinAndSelect('u.user_profile', 'up')
      .select(['p.id', 'p.title', 'p.content'])
      .addSelect(['u.id', 'u.email'])
      .addSelect(['up.id', 'up.name', 'up.contact_email'])
      .getMany();
  }

  async findById(id: string): Promise<Post | undefined> {
    return this.ormRepository.findOne(id);
  }
}

export default PostsRepository;
