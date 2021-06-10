import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn() //기본키, 자동으로 생성
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true }) //기본적으로 not null. nullable:true 로 하면 null 도 가능해짐
  img?: string;

  @Column({ nullable: true })
  birth?: string;

  @Column({ nullable: true })
  etc?: string;
}
