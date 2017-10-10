import {BotResponses} from '../helpers/responses';

class asshole {

  constructor(private responses: BotResponses) {

  }

  registerListener = (robot: any) => {

    for (let item of this.responses.responses) {
      console.info(item);
      robot.respond(item.regex, (msg: any) => {
        msg.reply('\n' + item.response);
      });
    }

    robot.hear(/(hey|hi|yo)*\s*,*\s*asshole/i, (msg: any) => {
      msg.send("How can I help you? (@asshole list)");
    });

    robot.error((err: any, res: any) =>{
        robot.logger.error("DOES NOT COMPUTE!")

        if(!res){
          robot.reply("DOES NOT COMPUTE!")
        }
    });
  }
}

var fn = new asshole(new BotResponses()).registerListener
export = fn
