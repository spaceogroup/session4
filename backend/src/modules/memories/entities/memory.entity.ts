import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('memory')
export class Memory {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Diwali 2024' })
  @Column()
  title: string;

  @ApiProperty({ example: 'Festival', description: 'Category used for the gallery filter' })
  @Column({ default: 'Moments' })
  category: string;

  @ApiProperty({ example: 'The whole office lit up for our annual Diwali celebration.' })
  @Column({ type: 'text', default: '' })
  caption: string;

  @ApiProperty({ example: '🪔' })
  @Column({ default: '' })
  emoji: string;

  @ApiProperty({
    example: 'https://picsum.photos/seed/spaceo-diwali/800/600',
    description: 'Photo URL for the gallery tile / lightbox',
  })
  @Column({ default: '' })
  image: string;

  @ApiProperty({
    example: ['Rakesh Patel', 'Nehal Jani'],
    description: 'People linked to this memory',
    type: [String],
  })
  @Column({ type: 'simple-array', default: '' })
  people: string[];

  @ApiProperty({ example: 1 })
  @Column({ default: 0 })
  order: number;
}
