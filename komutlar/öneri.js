const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    var ac = client.emojis.get(client.emojiler.açıkA);
  var ka = client.emojis.get(client.emojiler.kapalıA);
    if (type.length < 1) return message.channel.send("Lütfen önerinizi yazın. Örnek kullanım: ``w!öneri TheWolfs Yardım Komutu Değiştirilmeli.`` \n**Not: Öneriniz destek sunucumuza gönderilecektir**");
message.reply('Öneri gönderilsin mi? Gönderilmesini istiyorsan `evet` yazman yeterlidir.\n**Not: Öneriniz destek sunucumuza gönderilecektir**')
.then(() => {
message.channel.awaitMessages(response =>response.content ==='evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
message.reply('Tavsiyeniz İçin Teşekkürler :heart_eyes:! ')
const embed2 = new Discord.RichEmbed()
.setColor(client.ayarlar.renk)
.addField(`Kullanıcı ID`,message.author.id,true)
.addField(`Kullanıcı Adı`,message.author.username,true)
.addField(`Kullanıcı Tagı`,message.author.discriminator,true)
.addField(`Sunucu`,message.guild.name,true)
.addField("Öneri", type)
.setTimestamp()
.setFooter('Öneriyi gönderdiği saat ')
.setThumbnail(message.author.avatarURL)
client.channels.get('796471446922067987').send(embed2).then(m => m.react(ac,
m.react(ka)))
 
 
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
    kategori: 'eğlence',
  permLevel: 0 
};

exports.help = {
  name: 'öneri',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'tavsiye <tavsiyeniz>'
};