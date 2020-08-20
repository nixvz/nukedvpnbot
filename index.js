const Discord = require('discord.js');

const client = new Discord.Client();

const ytdl = require('ytdl-core');

const queue = new Map();

const token = 'NzQ1NDMzNDQ2MDY2ODE1MDQ3.Xzxs_w.16sJiYetySGd_tt90O0fjVs8qTY';

const prefix = 'n!';

const { OpusEncoder } = require('opusscript');

const snekfetch = require('snekfetch');

const fs = require('fs');

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);


}

client.once('ready', () => {
    console.log('NukedVPNbot is online!');
    client.user.setActivity('n!help', { type: 'PLAYING' })


});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ n!/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'prices'){
        client.commands.get('prices1').execute(message, args);
    } else if(command === 'nuke'){
        client.commands.get('nuke').execute(message, args);
    } else if(command === 'owner1'){
        client.commands.get('owner1').execute(message, args);
    } else if(command === 'help1'){
        client.commands.get('help1').execute(message, args);
    } else if(command === 'spam'){
        client.commands.get('spam').execute(message, args);
    } else if(command === 'help'){
        const helpEmbed = new Discord.MessageEmbed()
            .setColor(0x00FFFF)
            .setTitle('Help')
            .addField('n!rules', 'Shows the server rules.')
            .addField('n!prices', 'Shows NukedVPN prices.')
            .addField('n!ping','Checks if the bot is online.')
            .addField('n!spam','Spams the chat.')
            .addField('n!owner', 'Shows the owner of NukedVPN and creator of this bot.')
            .addField('n!nuke','lol.')
            .addField('x!play <youtube url>','yes its x!play not n!play, enter youtube url and it plays music.')
            .addField('n!geo', 'n!geo <ip>, GeoIP lookup')
            .addField('there are some secret commands', ';)')
            .addField('n!help','Shows this page.')
            .setThumbnail('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
            .setTimestamp()
            message.channel.send(helpEmbed);

            } 
            if(command === 'prices') {
                    const pricesEmbed = new Discord.MessageEmbed()
                    .setColor(0x00FFFF)
                 .setTitle('Prices')
                 .addField('$10 monthly', 'Pay $10 a month for our services.')
                 .addField('$20 per 3 months','Pay $20 per 3 months for our services.')
                 .addField('$40 yearly','Pay $40 a year for our services.')
                 .addField('$80 lifetime','Pay a one time fee of $80 for our services.')
                 .addField('DM kylie#2870 if you plan to buy.', 'Prices might lower if we go on sale,')
                    .setThumbnail('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
                    .setTimestamp()
                     message.channel.send(pricesEmbed);

            } else if(command === 'owner'){
                          const ownerEmbed = new Discord.MessageEmbed()
                          .setColor(0x00FFFF)
                          .setTitle('Owner of NukedVPN and Creator of this bot')
                          .addField('kylie#2870', 'Co-Owner 𝔻𝕒𝕕𝕕𝕪#0001')
                          .setThumbnail('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
                          .setTimestamp()
                          message.channel.send(ownerEmbed);
                          } else if(command === 'hi'){
                            message.channel.send("hi")
                          } else if(command === 'rules'){
                            const rulesEmbed = new Discord.MessageEmbed()
                            .setColor(0x00FFFF)
                            .setTitle('Server rules')
                            .addField('- DDOSING ANOTHER MEMBER AND THEM COME TO US WITH PROOF WILL RESULT IN A PERMANENT SUSPENSION OF PANEL AND IMMEDIATE BAN', 'Rule 1')
                            .addField('- ABSOLUTELY NO SELF ADVERTISING UNLESS YOU ARE PERMITTED TO', 'Rule 2')
                            .addField('- IF YOU HAVE A PROBLEM SPEAK TO HIGHER STAFF (Administrator, Owner)', 'Rule 3')
                            .addField('- NO SHARING LOGINS, IF CAUGHT DOING SO WILL RESULT IN IMMEDIATE SUSPENSION FROM PANEL', 'Rule 4')
                            .addField('- DO NOT SPAM ADMINS, PING THEM ONCE AND THEY WILL TRY TO GET BACK TO YOU ASAP', 'Rule 5')
                            .addField(' DO NOT HIT GOVERNMENT WEBSITES WITH THE PANEL, DOING SO WILL RESULT IN PERMANENT SUSPENSION FROM PANEL AND IMMEDIATE BAN FROM SERVER', 'Rule 6')
                            .addField('- DO NOT HARASS STAFF MEMBERS, THEY CAN AND WILL BAN YOU', 'Rule 7')
                            .addField('- ONCE YOU HAVE ACCESS TO THE PANEL YOU ARE CONSIDERED A TRUSTED MEMBER, BREAKING THE TRUST WILL RESULT IN TEMPORARY SUSPENSION FROM PANEL', 'Rule 8')
                            .addField('- IF YOU THINK ONE OF OUR STAFF MEMBERS ARE ABUSING THEIR POWER CONTACT @kylie🤍 OR @𝕊𝕥𝕣𝕒𝕡', 'Rule 9')
                            .addField('- IF YOU ARE MUTED, CONSIDER THAT AS YOUR FIRST WARNING. WARNING 2 RESULTS IN A KICK AND WARNING 3 RESULTS IN A BAN FROM THE SERVER', 'Rule 10')
                            .addField('- ONCE YOUR PERMANENTLY SUSPENDED FROM ACCESS TO THE PANEL, THERE ARE NO SECOND CHANCES', 'Rule 11')
                            .addField('- TRY YOUR BEST TO FOLLOW THESE GUIDELINES', 'Rule 12')
                            .addField('- ABSOLUTELY NO TOLERATION TO DOX THREATS. YOU WILL BE BANNED IMMEDIATELY WITHOUT A WARNING', 'Rule 13')
                            .addField('- TOKEN GRABBERS ARE NOT PERMITTED HERE AND YOU WILL BE BANNED IMMEDIATELY IF YOU SEND ONE, NO WARNINGS', 'Rule 14')
                            .addField('- LEAKING PERSONAL INFORMATION (PHONE NUMBER, EMAIL, ADDRESS, IP, ETC) IS NOT PERMITTED.  YOU WILL RECIEVE AN IMMEDIATE AND PERMANENT BAN. THERE ARE NO EXCEPTIONS', 'Rule 15')
                            .addField('- do not be annoying ffs', 'Rule 16')
                            .addField('- these rules will change in the future as we gain popularity', 'expect updates.')
                            .setThumbnail('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
                            .setTimestamp()
                            message.channel.send(rulesEmbed);

                            
                            
                          
                          
                          }
                          if(command === 'geo'){
                            snekfetch.get(`http://ip-api.com/json/${args}`).then(r => {
                              const Geo = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setThumbnail('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
                                .setDescription(`**NukedVPN GeoIP**
                            **IP**: ${args}
                            **ISP** ${r.body.isp}
                            **Organization**: ${r.body.org}
                            **ASN**: ${r.body.as}
                            **City**: ${r.body.city}
                            **State**: ${r.body.regionName}
                            **ZIP Code**: ${r.body.zip}
                            **Country**: ${r.body.country}
                            **Latitude**: ${r.body.lat}
                            **Longitude**: ${r.body.lon}
                            **Time Zone**: ${r.body.timezone}
                            **Status**: ${r.body.status}`)
                                .setFooter(`Resolved By: ${message.author.tag}`);
                                message.channel.send(Geo);
                              })
                            }  
                            if(command ==='whosabitch'){
                              message.channel.send("x.#6969 is a little bitch <3")
                            };

                            
                          

                            
                            



  if (message.content.startsWith('n!kick')) {
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member
          .kick('gtfo')
          .then(() => {
            message.reply(`get the fuck out ${user.tag}`);
          })
          .catch(err => {
            message.reply('it didnt work lol');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("nigga aint in this server lol");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("who nigga");
    }
  }
  
                    
              
});
                client.login(token)
            