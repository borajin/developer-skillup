import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  //모든 data 조회
  @Get('contacts')
  getAll(): Promise<Contact[]> {
    return this.contactsService.getAll();
  }

  //조건에 맞는 데이터 조회
  @Get('search')
  search(@Query('name') searchingName: string) {
    return `search name`;
  }

  //특정 id값 데이터 조회
  @Get(':id')
  getOne(@Param('id') contactId: number): Promise<Contact> {
    return this.contactsService.getOne(contactId);
  }

  //데이터 추가
  @Post()
  async create(@Body() contactData: CreateContactDto): Promise<Contact> {
    return this.contactsService.create(contactData);
  }

  //특정 id값 데이터 삭게
  @Delete(':id')
  async remove(@Param('id') contactId: number) {
    return this.contactsService.deleteOne(contactId);
  }

  //특정 id값 데이터 수정
  @Patch(':id')
  async patch(@Param('id') contactId: number, @Body() updateData) {
    return this.contactsService.update(contactId, updateData);
  }
}
