const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h',"yardım","y"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('Altyapı ve bot işlemleri için <@947210627162722375>\nKendi müzik dünyanı yaratmaya ne dersin?');
        embed.addField(`Kullanılabilir - ${commands.size} komut bulunuyor.`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Vega Music Komutları - Developed by Famel ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};
