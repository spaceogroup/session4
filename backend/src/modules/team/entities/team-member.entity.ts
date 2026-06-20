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

  @ApiProperty({ example: 'RP', description: 'Initials used for the avatar' })
  @Column({ default: '' })
  initials: string;

  @ApiProperty({ example: 1 })
  @Column({ default: 0 })
  order: number;
}
