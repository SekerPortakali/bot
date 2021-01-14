var Jimp = require('jimp');
const Discord = require('discord.js');
exports.run = function(client, message, args) {
  
  
  let user = message.mentions.users.first() || message.author
  
      Jimp.read(user.avatarURL, function (err, image){
          image.resize(295, 295)
          if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
          image.invert().write('./x/zıt-renk.png');
          setTimeout(() => {
            message.channel.send({file: './x/zıt-renk.png'});
            message.react('617413726768988160')
          }, 500);
      });

    } 



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invert",'zıt','zıtrenk'],
  permLevel: 0,

  kategori: "efekt"
};

exports.help = {
  name: 'zıt-renk',
  description: 'Avatarınızın rengini tersine çevirir.',
  usage: 'zıt-renk veya zıt-renk <@kullanıcı>'
};