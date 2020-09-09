const Discord = require('discord.js');
const client = new Discord.Client();
var voice, player;

//regex
var regexRadio = /(radio|gta radio)/;
let regexStations = [/(NONE)/, /(rap)/, /(rock)/, /(pop)/];
let DJ;
let voiceChannel;
let channel;


function parseMessage(msg)
{
  var outStation = 0;
  ////////////////////////////////
  regexStations.forEach
  (function (value, index) 
    {
      if(value.test(msg) === true)
      {
        outStation = index;
      }
    }
  );
  ////////////////////////////////
  return outStation;
}

function getCommands(msg) 
{
  if (/(-pause)/.test(msg) === true) 
  {
    DJ.pause();
  }
  if (/(-play)/.test(msg) === true) 
  {
    DJ.resume();
  }
  if (/(-stop)/.test(msg) === true) 
  {
    return false;
  }
  
  return true;
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);

client.on('message', async message => 
{
  
	// Join the same voice channel of the author of the message
	if (message.member.voice.channel) 
  {
    try{
      
    channel = message.member.voice.channel;
    if(getCommands(message.content) === false)
    {
      await channel.leave();
    }
    if (`Test message.content:`+regexRadio.test(message.content)) 
    {
      switch(parseMessage(message.content))
      {
      case 1:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FWest%20Coast%20Classics.mp3");
        break;
      case 2:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FLos%20Santos%20Rock%20Radio.mp3");
        break;
      case 3:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FNon-Stop-Pop%20FM.mp3");
        break;
      }
    }
  }
  catch(e)
    {}
  }
});