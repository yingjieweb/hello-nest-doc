import { Test, TestingModule } from '@nestjs/testing';
import { UserBaseController } from './user-base.controller';

describe('UserBaseController', () => {
  let controller: UserBaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserBaseController],
    }).compile();

    controller = module.get<UserBaseController>(UserBaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
