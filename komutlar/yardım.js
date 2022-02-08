const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Vice City Bot Yardım.`, client.user.avatarURL())
  .setColor("green")
  .setThumbnail(client.user.avatarURL())
  .setDescription("Vice Bot")
  .addField(" • Kategoriler:", `> • !kullanıcı: **Kullanıcı yardım menüsünü gösterir.**\n > • !moderasyon: **Moderasyon yardım menüsünü gösterir.**\n > • !kayıtsistemi: ** Kayıt sistemi yardım menüsünü gösterir.**\n > • !korumasistemi** Koruma sistemi yardım menüsünü gösterir.**\n > • !logosistemi: ** Logo sistemi yardım menüsünü gösterir.**\n > • !çekilişsistemi: ** Çekiliş sistemi yardım menüsünü gösterir.**\n > • !özelodasistemi: ** Özel Oda sistemi yardım menüsünü gösterir.** \n > • !profilsiistemi: **Profila sistemi yardım menüsünü gösterir.** \n > • !ekonomisistemi: ** Ekonomi sistemi yardım menüsünü gösterir.**  \n > • !radyo: ** Radyo sistemi yardım menüsünü gösterir.**`)
  .addField("" ,"Vice Bot")
  .setImage("")
.setFooter("Vice City", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "yardım"
    usage: "yardım"
}