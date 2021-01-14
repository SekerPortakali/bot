const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(client.ayarlar.renk)
    .setDescription(`${mesaj}`)
    return message.channel.sendEmbed(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
    kategori: 'moderasyon',
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'duyuruyap',
  usage: 'duyuru'
};