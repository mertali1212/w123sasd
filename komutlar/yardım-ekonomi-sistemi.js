const ViceDiscord = require('discord.js');
const ViceClient = new ViceDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const ViceEmbed = new ViceDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Ekonomi Sistemi Yardım Menüsü`)
 .setDescription(`
 **${Prefix}bilgiler** \n-> Hesap Bilgisini Gösterir
 **${Prefix}bakiye** \n-> Bakiyeyi Gösterir
 **${Prefix}günlükpara** \n->  Günlük Para Ödülü Alırsın
 **${Prefix}hesap-oluştur** \n->  Hesap Oluşturursun
 **${Prefix}hesap-sil** \n->  Hesap Silersin
 **${Prefix}kasa-aç** \n->  Kasa Açarsın
  **${Prefix}kasa-bilgi** \n->  Kasalar Hakkında Bilgi Alırsın
 **${Prefix}transfer** \n->  Belirtilen Kişiye Belirtilen Miktarda Para Gönderirsin


`)
 .setFooter(`Vice Deneme`)
 .setTimestamp()
 message.channel.send(ViceEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'ekonomisistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};