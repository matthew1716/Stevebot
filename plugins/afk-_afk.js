export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
  During ${(new Date - user.afk).toTimeString()}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
  Jangan Tag dia
  Dia Sedang Afk ${reason ? 'with reason ' + reason : 'no reason'}
  Selama ${(new Date - afkTime).toTimeString()}
  `.trim())
    }
    return true
}
