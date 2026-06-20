import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Testimonial } from './entities/testimonial.entity';
import { TestimonialsService } from './testimonials.service';

@ApiTags('testimonials')
@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Get()
  @ApiOkResponse({ type: [Testimonial], description: 'Employee Speaks testimonials' })
  findAll(): Promise<Testimonial[]> {
    return this.testimonialsService.findAll();
  }
}
