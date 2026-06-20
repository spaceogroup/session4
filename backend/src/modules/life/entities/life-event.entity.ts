import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('life_event')
export class LifeEvent {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Diwali Celebrations' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Multi-day festivities with games, awards and team dinners.' })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({ example: '🪔', description: 'Emoji shown on the card' })
  @Column({ default: '' })
  emoji: string;

  @ApiProperty({ example: 1 })
  @Column({ default: 0 })
  order: number;
}
