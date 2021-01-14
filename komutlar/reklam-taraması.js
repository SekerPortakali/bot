const Discord = require('discord.js')
//const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  
  //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);

  const db = require('quick.db');
  

  
	const members = message.guild.members.filter(member => member.user.presence.game && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
	const memberss = message.guild.members.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
	const embed = new Discord.RichEmbed()
		.addField("Oynuyor Mesajı Reklam İçeren Kullanıcılar", members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "Kimsenin Oynuyor Mesajı Reklam İçermiyor")
		.addField("Kullanıcı Adı Reklam İçeren Kullanıcılar", memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin kullanıcı adı reklam içermiyor.")
		.setColor(client.ayarlar.renk)
	message.channel.send({embed})
        message.react(client.emojiler.evet)
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['reklam-ara', 'reklamara', 'reklamtaraması'],
	permLevel: 2,
    kategori: "moderasyon",
}

exports.help = {
	name: 'reklam-taraması',
	description: 'Kullanıcıların oynuyor mesajlarındaki ve kullanıcı adlarındaki reklamları tarar.',
	usage: 'reklam-taraması',
 
}
