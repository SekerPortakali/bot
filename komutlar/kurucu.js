const Discord = require('discord.js');

exports.run = function(client, message) {

 message.channel.send('``'+message.guild.name +'`` adlı sunucunun kurucusu; ``'+ message.guild.owner.user.tag +'`` adlı kullanıcıdır.');
  
message.react('617413726768988160')
   } 




exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['owner','kurucukim'],
    kategori: 'kullanıcı',
  permLevel: 0 
};

exports.help = {
  name: 'kurucu', 
  description: 'Kurucunun kim olduğunu söyler.',
  usage: 'kurucu'
};