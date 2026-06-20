import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('company_stat')
export class CompanyStat {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Clients served', description: 'Human-readable label' })
  @Column()
  label: string;

  @ApiProperty({ example: '1200', description: 'The numeric/text value' })
  @Column()
  value: string;

  @ApiProperty({ example: '+', description: 'Suffix rendered after the value' })
  @Column({ default: '' })
  suffix: string;

  @ApiProperty({ example: 1, description: 'Display order' })
  @Column({ default: 0 })
  order: number;
}
