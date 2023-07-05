import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {

let str = `
© Script ini buatan Fahrii
Silahkan Download di https://github.com/STEVEBOTZ

owner contact
wa.me/6281225179060\n`
conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: '© SteveWabot Games',
thumbnailUrl: zykomd,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
