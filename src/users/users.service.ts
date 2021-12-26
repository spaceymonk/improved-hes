import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Pagination, PaginationOptionsInterface } from '../common/paginate';
import * as sha256 from 'crypto-js/sha256';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = sha256(createUserDto.password).toString();
    return await this.usersRepository.save(this.usersRepository.create(createUserDto));
  }

  async findAll(options: PaginationOptionsInterface): Promise<Pagination<User>> {
    const [results, total] = await this.usersRepository.findAndCount({
      take: options.limit,
      skip: options.page,
    });

    return new Pagination<User>({
      results,
      total,
    });
  }

  async findOne(id: string) {
    return await this.usersRepository.findOneOrFail(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    updateUserDto.password = sha256(updateUserDto.password).toString();
    return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.usersRepository.softDelete(id);
  }

  async restore(id: string) {
    return await this.usersRepository.restore(id);
  }
}
