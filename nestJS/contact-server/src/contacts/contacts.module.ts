import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { Contact } from './entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])], //contact entity ์ db ๋งคํ
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
