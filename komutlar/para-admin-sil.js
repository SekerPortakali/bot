const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

 

  let user = message.mentions.users.first();

  if (!user) return message.reply('Kimden para çekeceğimi etiketlemen lazım!');
  if (user.bot === true) return message.reply('Botların parası yok ki?!?!');
  
  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply('Çekeceğim miktarı yazman gerek!');

  if (isNaN(args[1])) return message.channel.send("Bir yazımı çekeceksin? Lütfen bir miktar gir!.")
    

  let elmas = await db.fetch(`elmascıklar_${user.id}`);
  let altın = await db.fetch(`altıncıklar_${user.id}`);
  let para = await db.fetch(`paracık_${message.author.id}`);


  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;


const embed = new Discord.RichEmbed()
.setColor(client.ayarlar.renk)
.setDescription(`${client.emojis.get(client.emojiler.paraGitti)} Başarıyla ${user} adlı kullanıcıdan para çekildi \n Çekilen miktar: ${mesaj}`)
message.channel.send(embed)
db.add(`paracık_${user.id}`, -mesaj)




}

  


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['admin-para-çek', 'adminparaçek'],
  permLevel: 5,
  kategori: "yapımcı"
};

exports.help = {
  name: 'admin-para-çek',
  description: 'İstediğiniz kişiden para çekebilirsiniz.',
  usage: 'admin-para-çek elmas/altın/para <@üye> <miktar>'
};