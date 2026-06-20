import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('service')
export class Service {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'AI & Generative AI Development' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Custom AI agents, copilots and LLM apps shipped to production.' })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({ example: 'sparkles', description: 'Icon key the frontend maps to an SVG/emoji' })
  @Column({ default: '' })
  icon: string;

  @ApiProperty({ example: 1 })
  @Column({ default: 0 })
  order: number;
}
