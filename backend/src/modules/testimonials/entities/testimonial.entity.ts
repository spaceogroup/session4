import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('testimonial')
export class Testimonial {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Raj Prajapati' })
  @Column()
  name: string;

  @ApiProperty({ example: 'AI-ML Engineer' })
  @Column()
  role: string;

  @ApiProperty({ example: '4+ Years' })
  @Column({ default: '' })
  tenure: string;

  @ApiProperty({ example: 'The environment here has helped me grow as a developer.' })
  @Column({ type: 'text' })
  quote: string;

  @ApiProperty({
    example: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Raj%20Prajapati',
    description: 'Avatar image URL',
  })
  @Column({ default: '' })
  photo: string;

  @ApiProperty({ example: 'RP', description: 'Initials avatar fallback' })
  @Column({ default: '' })
  initials: string;

  @ApiProperty({ example: 1 })
  @Column({ default: 0 })
  order: number;
}
