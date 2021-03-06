import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>
  ) { }

  /**
   * 上传文件
   * @param file
   */
  async uploadFile(file: any): Promise<any> {
    const { originalname, mimetype, size, buffer, filename } = file;
    const url = 'http://www.superstarprogram.xyz:8082/' + filename;
    // const newFile = await this.fileRepository.create({
    //   originalname,
    //   filename,
    //   type: mimetype,
    //   url,
    //   size,
    // });
    // await this.fileRepository.save(newFile);
    // return newFile;
  }

  /**
   * 获取所有文件
   */
  async findAll(queryParams: any = {}): Promise<[File[], number]> {
    const query = this.fileRepository
      .createQueryBuilder('file')
      .orderBy('file.createAt', 'DESC');

    const { page = 1, pageSize = 12, pass, ...otherParams } = queryParams;

    query.skip((+page - 1) * +pageSize);
    query.take(+pageSize);

    if (otherParams) {
      Object.keys(otherParams).forEach(key => {
        query
          .andWhere(`file.${key} LIKE :${key}`)
          .setParameter(`${key}`, `%${otherParams[key]}%`);
      });
    }

    return query.getManyAndCount();
  }

  /**
   * 获取指定文件
   * @param id
   */
  async findById(id): Promise<File> {
    return this.fileRepository.findOne(id);
  }

  async findByIds(ids): Promise<Array<File>> {
    return this.fileRepository.findByIds(ids);
  }

  /**
   * 删除文件
   * @param id
   */
  async deleteById(id) {
    const tag = await this.fileRepository.findOne(id);
    // const {
    //   ossRegion,
    //   ossAccessKeyId,
    //   ossBucket,
    //   ossAccessKeySecret,
    //   ossHttps,
    // } = await this.settingService.findAll(true);
    // if (!ossRegion || !ossAccessKeyId || !ossBucket || !ossAccessKeySecret) {
    //   throw new HttpException('请完善 OSS 配置', HttpStatus.BAD_REQUEST);
    // }
    // let client = new OSS({
    //   region: ossRegion,
    //   accessKeyId: ossAccessKeyId,
    //   accessKeySecret: ossAccessKeySecret,
    //   bucket: ossBucket,
    //   secure: ossHttps,
    // });
    // await client.delete(tag.filename);
    // return this.fileRepository.remove(tag);
  }
}
