const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**

كل الاكواد الي تبيها و عندنا مانع نشر و مانع جحفله 
الي يخطر ببالك 
افضل سيرفر برمجه عربي . 
 تعال وصير مبرمج   :kissing_heart:, !
و آتحدآك مآ يعجبك :wink:, !
رآبط آلسيرفر:arrow_down_small::arrow_down_small::arrow_down_small:
( Codes Official :revolving_hearts: )
[ https://discord.gg/6MedSh3 ] [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login(process.env.BOT_TOKEN);
