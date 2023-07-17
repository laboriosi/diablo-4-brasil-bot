import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export default new ActionRowBuilder<ButtonBuilder>().addComponents(
  new ButtonBuilder()
    .setCustomId("dungeon")
    .setLabel("Dungeon")
    .setStyle(ButtonStyle.Secondary)
    .setEmoji("<:dungeon:1130464625964625941>"),
  new ButtonBuilder()
    .setCustomId("nightmare_dungeon")
    .setLabel("Nightmare Dungeon")
    .setStyle(ButtonStyle.Secondary)
    .setEmoji("<:nightmare_dungeon:1130464562743869480>"),
  new ButtonBuilder()
    .setCustomId("world_boss")
    .setLabel("World Boss")
    .setStyle(ButtonStyle.Secondary)
    .setEmoji("<:world_boss:1130464300939624458>")
);
