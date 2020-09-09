const Discord = require('discord.js');
const client = new Discord.Client();
var voice, player;

//regex
var regexRadio = /(radio|gta radio)/;
let regexStations = [/(NONE)/, /(rap|classic)/, /(rock)/, /(pop)/, /(soulwax|soul|wax)/, /(worldwide|world|wide)/, /(flylo|fly)/, /(blue|ark)/, /(lowdown|low|down)/, /(space)/, /(lab)/, /(rebel)/, /(blaine)/, /(channel x|x)/, /(blonded)/, /(east los|los)/, /(lsur|underground)/, /(\bls\b|santos)/, /(mirror|park)/, /(vinewood|blvd)/, /(talk)/];
let DJ;
let voiceChannel;
var channel = 0;
var channelSet = false;


function parseMessage(msg)
{
  var outStation = 0;
  regexStations.forEach
  (function (value, index) 
    {
      if(value.test(msg) === true)
      {
        outStation = index;
      }
    }
  );
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
	if (message.member.voice.channel | channelSet === true) 
  {
    try
    {
      if(channelSet === false)
        {
          channel = message.member.voice.channel;
          channelSet = true;
        }
    if(getCommands(message.content) === false)
    {
      await channel.leave();
      channelSet = false;
    }
    else if (regexRadio.test(message.content) === true) 
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
      case 4:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FSoulwax%20FM.mp3");
        break;
      case 5:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FWorldWide%20FM.mp3");
        break;
      case 6:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FFlyLo%20FM.mp3");
        break;
      case 7:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FBlue%20Ark.mp3");
        break;
      case 8:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FThe%20Lowdown%2091.1.mp3");
        break;
      case 9:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FSpace%20103.2.mp3");
        break;
      case 10:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FThe%20Lab.mp3");
        break;
      case 11:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FRebel%20Radio.mp3");
        break;
      case 12:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FRebel%20Radio.mp3");
        break;
      case 13:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FChannel%20X.mp3");
        break;
      case 14:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FBlonded%20Radio.mp3");
        break;
      case 15:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FEast%20Los%20FM.mp3");
        break;
      case 16:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FLos%20Santos%20Underground%20Radio.mp3");
        break;
      case 17:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FRadio%20Los%20Santos.mp3");
        break;
      case 18:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FRadio%20Mirror%20Park.mp3");
        break;
      case 19:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FVinewood%20Boulevard%20Radio.mp3");
        break;
      case 20:
        voiceChannel = await message.member.voice.channel.join();
        DJ = voiceChannel.play("http://two66.com/mirrors/index.php?file=GTA-Radio-Stations%2FGTA-V%2FWest%20Coast%20Talk%20Radio.mp3");
        break;
      }
    }
  }
  catch(e)
    {}
  }
});