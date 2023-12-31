export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        let caption = `Dadah *${this.user.name}* Masa SewaBot mu sudah habis, Bot akan keluar`
    await this.reply(caption)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}

/*
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, 'Bye🖐 bot akan left!!')
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
*/