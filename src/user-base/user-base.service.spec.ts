import { Test, TestingModule } from '@nestjs/testing';
import { UserBaseService } from './user-base.service';

describe('UserBaseService', () => {
  let service: UserBaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBaseService],
    }).compile();

    service = module.get<UserBaseService>(UserBaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
