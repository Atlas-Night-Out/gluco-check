import 'reflect-metadata';
import {Container} from 'inversify';
import GlucoCheckCore from '../../src/main';
import ConversationDecoder from '../../src/main/ConversationDecoder';
import UserQueryResolver from '../../src/main/UserQueryResolver';

describe('GlucoCheck Core', () => {
  const mocks = {
    conversationDecoder: {decode: jest.fn()},
    userQueryResolver: {resolve: jest.fn().mockReturnValue({SSML: 'foo'})},
    conversation: {add: jest.fn()},
  };

  beforeAll(() => {
    const testContainer = getTestContainer(mocks);
    const glucoCheckCore = testContainer.get(GlucoCheckCore);
    glucoCheckCore.handler(mocks.conversation as any);
  });

  it('attempts to decode a conversation object', () => {
    expect(mocks.conversationDecoder.decode).toHaveBeenCalled();
  });

  it('tries to resolve a userQuery', () => {
    expect(mocks.userQueryResolver.resolve).toHaveBeenCalled();
  });

  it('adds a response to the conversation', () => {
    expect(mocks.conversation.add).toHaveBeenCalledWith('foo');
  });
});

/**
 * Creates a test container that will inject mocks
 * instead of their 'real' counterparts
 */
const getTestContainer = (mocks: any) => {
  const c = new Container();

  c.bind(GlucoCheckCore).toSelf();
  c.bind(ConversationDecoder).toConstantValue(mocks.conversationDecoder);
  c.bind(UserQueryResolver).toConstantValue(mocks.userQueryResolver);

  return c;
};
