import { Inject, Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';

@Injectable()
export class UrlService {
  conn: any;
  url: any;

  constructor(@Inject('CONNECTION') private readonly connection: any) {
    this.conn = this.connection;
    this.url = this.conn.collection('url');
  }

  async create(createUrlDto: CreateUrlDto) {
    try {
      return await this.url.insertOne(createUrlDto);
    } catch (error) {
      return { error: error, completed: false };
    }
  }

  async findAll() {
    try {
      return await this.url.find().toArray();
    } catch (error) {
      return { error: error, completed: false };
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} url`;
  }

  update(id: number, updateUrlDto: UpdateUrlDto) {
    return `This action updates a #${id} url`;
  }

  remove(id: number) {
    return `This action removes a #${id} url`;
  }
}
