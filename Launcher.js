require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers
    ]
});

bot.on(Events.ClientReady, c => {
    console.log(`Ready! Looged in as ${c.user.tag}`);
});

bot.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const cmd = interaction.bot.commands.get(interaction.commandName);
    if (!cmd) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await cmd.execute(interaction);
    } catch {
        onsole.error(`Error executing ${interaction.commandName}`);
		console.error(error);
    }
});

bot.login(process.env.BOT_TOKEN);
