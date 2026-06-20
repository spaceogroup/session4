import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('office')
export class Office {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'India' })
  @Column()
  country: string;

  @ApiProperty({ example: 'Ahmedabad, Gujarat' })
  @Column()
  city: string;

  @ApiProperty({ example: 'Headquarters & delivery centre' })
  @Column({ type: 'text', default: '' })
  address: string;

  @ApiProperty({ example: 'Headquarters' })
  @Column({ default: '' })
  role: string;

  @ApiProperty({ example: 1 })
  @Column({ default: 0 })
  order: number;
}
