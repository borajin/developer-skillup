import { Injectable, NotFoundException } from '@nestjs/common';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateCotnactDto } from './dto/update-contact-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>, //contact entity = repository
  ) {}

  getAll(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  getOne(id: number): Promise<Contact> {
    const result = this.contactRepository.findOne(id);

    if (!result) {
      throw new NotFoundException(`Contact with id ${id} not found.`);
    }

    return result;
  }

  async deleteOne(id: number): Promise<void> {
    this.getOne(id); //유효성 검사 위해
    await this.contactRepository.delete(id);
  }

  create(contactData: CreateContactDto) {
    return this.contactRepository.save({
      ...contactData,
    });
  }

  async update(id: number, updateData: UpdateCotnactDto) {
    return await this.contactRepository.save({
      id: id,
      ...updateData,
    });
  }
}
