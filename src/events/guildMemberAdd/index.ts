import { GuildMember } from "~types";

export default async (member: GuildMember) => {
  try {
    const { MEMBER_ROLE_ID: memberRoleId, GUILD_ID: guildId } = process.env;
    if (member.guild.id === guildId) member.roles.add(memberRoleId);
  } catch (error) {
    console.log(error);
  }
};
