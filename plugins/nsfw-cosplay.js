import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
        if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.reply(m.chat, `❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ\nketik *.on nsfw*`)
	let url = cosplay[Math.floor(Math.random() * cosplay.length)]
	let tekk = `\`\`\`➩ Nih! \`\`\` `
conn.sendFile(m.chat, url, null, tekk.trim(), m)	
}
handler.tags = ['nsfw']
handler.help = ['18csply']
handler.command = /^(18csply)$/i
handler.premium = true
export default handler

global.cosplay = [
			"https://cdn.nekobot.xyz/e/9/6/ffc914822489a51b2946e5d2f150b.jpg",
            "https://cdn.nekobot.xyz/b/9/a/114079157c091a632f839c93bf546.jpg",
            "https://i0.nekobot.xyz/4/0/0/a26b285804a922d7a155523b23f32.jpg",
            "https://i0.nekobot.xyz/4/9/0/4fb8a1caeac76e0460874b55dd24b.jpg",
            "https://cdn.nekobot.xyz/d/2/4/fc06e03e644b809f8a326915e11e1.jpg",
            "https://cdn.nekobot.xyz/e/3/8/2dd83e6cb351625c91d6be01d4294.jpg",
            "https://i0.nekobot.xyz/6/6/3/f020e750c8b284218f85fdecbb576.jpg",
            "https://cdn.nekobot.xyz/b/6/b/37deea40362f1816bdd212c0b6d59.jpg",
            "https://i0.nekobot.xyz/2/3/d/cc380af646f2e95b68845c9587f9e.jpg",
            "https://i0.nekobot.xyz/3/9/f/6b32934d825333444a46e0109f396.jpg",
            "https://cdn.nekobot.xyz/a/b/1/a83112e57f55180bfc2f5a4549775.jpg",
            "https://cdn.nekobot.xyz/e/2/c/ff576d535e7c87377c24e24d2bdb6.jpg",
            "https://i0.nekobot.xyz/6/d/0/00989a5aab58b3ddd884ff15bdea3.gif",
            "https://i0.nekobot.xyz/7/d/8/df337eb2aee6fb3fef37564ef0e4e.jpg",
            "https://i0.nekobot.xyz/7/f/1/6287d2fbbf89b48f5e86f258d2ac6.jpg",
            "https://i0.nekobot.xyz/7/0/4/a8208770466ba0951f97d61d5c170.jpg",
            "https://i0.nekobot.xyz/7/b/0/f7da7635f3f6c34a664ffdd4cd24b.jpg",
            "https://cdn.nekobot.xyz/a/2/5/1e4efb710f4a7ca22d109ac07e8cc.jpg",
            "https://cdn.nekobot.xyz/b/d/a/87a13044fd418d8ebb869ccbc9477.jpg",
            "https://cdn.nekobot.xyz/f/0/d/44b2d88fc52c9f3f2dfd9c7201f5d.jpg",
            "https://cdn.nekobot.xyz/e/9/2/3e0f3bd320243c20718f6f5f0538b.jpg",
            "https://i0.nekobot.xyz/6/f/1/f8a585487112ba9e23219c4b9c7e4.jpg",
            "https://i0.nekobot.xyz/2/8/5/70b379c84d0391ab4e685afdccd6f.jpg",
            "https://cdn.nekobot.xyz/d/7/6/d459a30cd3c3337522a86d6eaceeb.jpg",
            "https://i0.nekobot.xyz/7/7/9/dd0950bfb9e74f9379a3d5a8abf8e.jpg",
            "https://cdn.nekobot.xyz/a/9/9/c00c7bf15a7e30cc7df22051d77ce.jpg",
            "https://cdn.nekobot.xyz/f/9/d/a3af76465ade7618d158a24bb78cb.jpg",
            "https://i0.nekobot.xyz/7/8/6/22aa2a3f038caf996340b5a7743b1.jpg",
            "https://cdn.nekobot.xyz/e/7/4/086fcdaa0851ebedc005b259093f4.jpg",
            "https://i0.nekobot.xyz/5/8/f/8698738e8418f3b9f69de488b1abf.jpg",
            "https://i0.nekobot.xyz/3/2/1/217008cd5a2a13c559d94cbcb6a8a.jpg",
            "https://i0.nekobot.xyz/6/1/9/a38ee5c9e81b1fbf105e9d072aaee.jpg",
            "https://cdn.nekobot.xyz/e/c/f/06f51474fcafa8f9c23c5462c8b22.jpg",
            "https://i0.nekobot.xyz/6/b/6/f4508098d6268827ca66bf74a1fb4.jpg",
            "https://i0.nekobot.xyz/2/a/1/64dde238e5216b9745fcf5a82aa47.jpg",
            "https://i0.nekobot.xyz/6/0/9/34acdcd0ba1f31eb1bf531ce8271b.jpg",
            "https://cdn.nekobot.xyz/a/a/0/843b46e84d2351633da2f2bf529ca.jpg",
            "https://i0.nekobot.xyz/1/1/6/546fb6b6681de8d29081f2972abaa7061dee1.jpg",
            "https://i0.nekobot.xyz/4/8/a/04a844de6f0af84b1a5e540bd05b1.jpg",
            "https://cdn.nekobot.xyz/d/8/6/5e2770754df2d15ed501a0b9808e4.jpg",
            "https://i0.nekobot.xyz/3/7/0/53bb8a0b03f59fd16fabb123760fa.jpg",
            "https://i0.nekobot.xyz/5/a/2/126c89a323de9ba7e02c45c952261.jpg",
            "https://cdn.nekobot.xyz/d/d/1/fd741e67a592ec02b925c5121855b.jpg",
            "https://i0.nekobot.xyz/1/b/8/222990d810d5fae5dfb8d15d56a51.jpg",
            "https://i0.nekobot.xyz/6/e/9/ba83ab0b45944ee9edf1a1ca1dcef.jpg",
            "https://cdn.nekobot.xyz/f/9/c/83df5bfcfcfb877c23da9140609ac.jpg",
            "https://i0.nekobot.xyz/2/b/a/03d91913fb6395a9ed47452e51ee2.jpg",
            "https://cdn.nekobot.xyz/9/e/3/8b6138a79c91f1c3bc974f3c9999a.jpg",
            "https://cdn.nekobot.xyz/f/3/6/e9ebea57374ed4f5aefd3d30867c0.jpg",
            "https://cdn.nekobot.xyz/b/7/5/070d4c695cf0158292a69f4771fd3.jpg",
            "https://i0.nekobot.xyz/6/b/5/147b038ffe5b81003e1ecf9cf1561d109987e.jpg",
            "https://i0.nekobot.xyz/8/c/9/502c9804a1a153ca24e4d270b2f4a.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352241099608114/20220530_014953.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352262100500622/20220530_015118.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352355490877530/20220530_015248.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352355838984313/20220531_003114.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352356208099358/Screenshot_20220820-203954_Gallery.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352356489101342/Screenshot_20220429-235311_Facebook.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352356812075128/Screenshot_20220429-234533_Facebook.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352357080506540/Screenshot_20220429-235010_Facebook.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352357407666297/Screenshot_20220429-234857_Facebook.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352144362188800/20220306_045313.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352144907436203/20220311_135858.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352145247191152/20220429_165704.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352145700167700/20220306_045104.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352145935044658/20220429_165748.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352237517684818/20220429_165746.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352237870010519/20220306_045346.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352238385905674/20220531_003105.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352238759202817/20220616_022459.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352240243986502/20220705_072420.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352240529190962/20220429_165538.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352240793419836/20220530_015130.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352241099608114/20220530_014953.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352262100500622/20220530_015118.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352355490877530/20220530_015248.jpg",
            "https://media.discordapp.net/attachments/1017089820369100872/1020352355838984313/20220531_003114.jpg"
]