import { ActionRowBuilder, StringSelectMenuBuilder } from "discord.js";

export default new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
  new StringSelectMenuBuilder()
    .setCustomId("role")
    .setPlaceholder("Selecione o cargo que você quer notificar")
    .addOptions(
      {
        label: "Leveling",
        value: "1130462390610305064",
        emoji: "<:experience:1130464677143519332>",
      },
      {
        label: "PvP",
        value: "1130462625004793916",
        emoji: "<:pvp:1130464983864582164>",
      },
      {
        label: "Helltide",
        value: "1130462442472865854",
        emoji: "<:helltide:1130464900825759864>",
      },
      {
        label: "Dungeon",
        value: "1130463075347202099",
        emoji: "<:dungeon:1130464625964625941>",
      },
      {
        label: "Nightmare Dungeon",
        value: "1130463029650259988",
        emoji: "<:nightmare_dungeon:1130464562743869480>",
      },

      {
        label: "World Boss",
        value: "1130463429405179924",
        emoji: "<:world_boss:1130464300939624458>",
      },
      {
        label: "Hardcore",
        value: "1130462885278134333",
        emoji: "<:hardcore:1130464853899886692>",
      }
    )
);
