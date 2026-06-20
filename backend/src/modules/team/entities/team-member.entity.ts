import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('team_member')
export class TeamMember {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Rakesh Patel' })
  @Column()
  name: string;

  @ApiProperty({ example: 'CEO & Founder' })
  @Column()
  title: string;

  @ApiProperty({ example: 'RP', description: 'Initials used as the avatar fallback' })
  @Column({ default: '' })
  initials: string;

  @ApiProperty({
    example: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Rakesh%20Patel',
    description: 'Portrait/avatar image URL',
  })
  @Column({ default: '' })
  photo: string;

  @ApiProperty({ example: 'Founded Space-O in 2010 and leads its global vision.' })
  @Column({ type: 'text', default: '' })
  bio: string;

  @ApiProperty({
    example: 'Still remembers the first office of 5 people — now 250+ across 3 countries.',
    description: 'A personal memory / highlight surfaced in the profile modal',
  })
  @Column({ type: 'text', default: '' })
  memory: string;

  @ApiProperty({ example: 1 })
  @Column({ default: 0 })
  order: number;
}
