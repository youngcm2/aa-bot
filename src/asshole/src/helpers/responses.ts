import {Response} from './response';

export class BotResponses {
  responses: Response[] = [
    {
      regex: /donations/i,
      response: "Donations\nGold: 180,000\nLoyalty: 14,500\nBattle Chips: 44,000"
    },{
      regex: /hello/i,
      response: "hello, how are you?"
    },{
      regex: /list/i,
      response: "donations\nhello\nlist"
    }]
}

