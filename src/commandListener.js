const { commandReplier } = require("./commandReplier");
const listenAndReply = async (message, database) => {
  //this if to make the bot not reply to bots including itself.
  //only listen to a channel with the name "bot" like #bot-spam-channel
  //WARNING!!
  //need to change this to command interaction in the future to avaid suspicion of data logging
  const prefix = "~";
  //guards
  if (
    message.author.bot ||
    !message.channel.name.toString().includes("bot") ||
    !message.content[0] == prefix
  )
    return;

  //split command sentence into word parts. remove prefix from first word.
  let commandWords = message.content.split(" ");
  commandWords[0] = commandWords[0].split(prefix)[1];
  console.log(commandWords);
  //detects keywords relating to database query.
  message.reply(commandReplier(commandWords, prefix, database));
};

exports.listenAndReply = listenAndReply;
