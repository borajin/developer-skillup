import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';

//partialtype : 모든 필드를 옵션으로 만들어줌.
export class UpdateCotnactDto extends PartialType(CreateContactDto) {}
