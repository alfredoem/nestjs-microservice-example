import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cats' })
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: '120' })
  name: string;

  @Column('varchar', { nullable: true, length: '120' })
  age: string;

  @Column('varchar', { nullable: true, length: '120' })
  breed: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
