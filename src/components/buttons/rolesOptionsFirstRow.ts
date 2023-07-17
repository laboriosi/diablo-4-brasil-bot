import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export default new ActionRowBuilder<ButtonBuilder>().addComponents(
  new ButtonBuilder()
    .setCustomId("leveling")
    .setLabel("Leveling")
    .setStyle(ButtonStyle.Secondary)
    .setEmoji("<:experience:1130464677143519332>"),
  new ButtonBuilder()
    .setCustomId("pvp")
    .setLabel("PvP")
    .setStyle(ButtonStyle.Secondary)
    .setEmoji("<:pvp:1130464983864582164>"),
  new ButtonBuilder()
    .setCustomId("helltide")
    .setLabel("Helltide")
    .setStyle(ButtonStyle.Secondary)
    .setEmoji("<:helltide:1130464900825759864>"),
  new ButtonBuilder()
    .setCustomId("hardcore")
    .setLabel("Hardcore")
    .setStyle(ButtonStyle.Secondary)
    .setEmoji("<:hardcore:1130464853899886692>")
);
