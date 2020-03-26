import { Test, TestingModule } from '@nestjs/testing';
import { SentController } from './sent.controller';

describe('Sent Controller', () => {
  let controller: SentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SentController],
    }).compile();

    controller = module.get<SentController>(SentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
