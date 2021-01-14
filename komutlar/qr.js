const qrcode = require("qrcode");
const tempy = require("tempy");
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    const qrOutput = tempy.file({ extension: "png" });
    message.channel.startTyping();
    if (args.length > 0) {
        qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
            if (error) throw new Error(error);
            message.channel.stopTyping();
            message.channel.send({
                files: [{
                    attachment: qrOutput,
                    name: "qr.png"
                }]
            });
      
        });
    }else{
        message.channel.stopTyping();
        message.reply("Bir QR kodu oluşturmak için bir argüman girmeniz gerekir!");
            
    }
  } 
 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["qrkod","qr"],
    kategori: 'eğlence',
    permLevel: 0
};

exports.help = {
    name : "qr", 
    usage: "qrkod <yazı>",
    description: "qrkod"
};