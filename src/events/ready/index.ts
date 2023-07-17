import { ChannelType, Client } from "~types";
import { rules, rolesDescription, shareGroupDescription } from "~embeds";
import { ruleOptions, rolesOptionsFirstRow, rolesOptionsSecondRow, roleSelect, shareGroup } from "~components";

export default async (client: Client) => {
  try {
    const {
      RULES_TEXT_CHANNEL_ID: rulesTextChannelId,
      ROLES_TEXT_CHANNEL_ID: rolesTextChannelId,
      SHARE_GROUP_TEXT_CHANNEL_ID: shareGroupTextChannelId,
    } = process.env;

    const rulesTextChannel = await client.channels.fetch(rulesTextChannelId);
    const shareGroupTextChannel = await client.channels.fetch(shareGroupTextChannelId);

    if (shareGroupTextChannel.type === ChannelType.GuildText) {
      const messages = await shareGroupTextChannel.messages.fetch();
      const lastMessage = messages.last();

      if (lastMessage) {
        await lastMessage.fetch();
      } else {
        await shareGroupTextChannel.send({ embeds: [shareGroupDescription], components: [roleSelect, shareGroup] });
      }
    }

    if (rulesTextChannel.type === ChannelType.GuildText) {
      const messages = await rulesTextChannel.messages.fetch();
      const lastMessage = messages.last();

      if (lastMessage) {
        await lastMessage.fetch();
      } else {
        await rulesTextChannel.send({ embeds: [rules] });
      }
    }

    const rolesTextChannel = await client.channels.fetch(rolesTextChannelId);

    if (rolesTextChannel.type === ChannelType.GuildText) {
      const messages = await rolesTextChannel.messages.fetch();
      const [firstMessage, lastMessage] = messages.map((message) => message);

      if (lastMessage) {
        await firstMessage.fetch();
        await lastMessage.fetch();
      } else {
        await rolesTextChannel.send({ embeds: [rolesDescription], components: [rolesOptionsFirstRow] });
        await rolesTextChannel.send({ components: [rolesOptionsSecondRow] });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
