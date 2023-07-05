import {
  promises,
  readFileSync
} from "fs"
import {
  join
} from "path"
import {
  xpRange
} from "../lib/levelling.js"
import moment from "moment-timezone"
import os from "os"
import fs from "fs"
import fetch from "node-fetch"

let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`
   let tags = {
   'main': '*MAIN MENU*', 
   'game': '*GAME*',
   'rpg': '*RPG GAMES*',
   'xp': '*EXP & LIMIT*',
   'sticker': '*STICKER*',
   'kerang': '*KERANG AJAIB*',
   'quotes': '*QUOTES*',
   'fun': '*FUN*',
   'asupan': '*ASUPAN*',
   'cerpen': '*CERPEN*',
   'anime': '*ANIME*',
   'group': '*GROUP*',
   'vote': '*VOTING*',
   'premium': '*PREMIUM*',
   'asupan': '*ASUPAN*',
   'anonymous': '*ANONYMOUS CHAT*',
   'menbalas': '*MENFESS*',
   'internet': '*INTERNET*',
   'news': '*NEWS*',
   'image': '*IMAGE*',
   'randomfoto': '*RANDOM FOTO*',
   'stalker': '*STALKER*',
   'downloader': '*DOWNLOADER*',
   'tools': '*TOOLS*',
   'nulis': '*MAGERNULIS*',
   'audio': '*AUDIO*',
   'sound': '*SOUND*',
   'openai': '*OPENAI*',
   'maker': '*TEXTPRO*',
   'ephoto': '*EPHOTO 360*',
   'database': '*DATABASE*',
   'quran': '*AL QUR\'AN*',
   'owner': '*OWNER*',
   'ownerstore': '*OWNER STORE*',
   'jadian': '*JADIAN*',
   'advanced': '*ADVANCED*',
   'info': '*INFO*',
   'nocategory': '*NO CATEGORY*',
}   
const defaultMenu = {
before: ` `.trimStart(),
header: '╭─「 %category 」',
body: `│ • %cmd %islimit %isPremium`,
footer: '╰──── \n',
after: `*SteveWabot | 1.1.0\n*Customizable WhatsApp Bot*`,
}

let handler = async (m, {
  conn,
  usedPrefix: _p,
  __dirname,
  args,
  command,
  usedPrefix
}) => {
try {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//  let name = await conn.getName(who)
  let names = await conn.getName(who)
  let imgr = flaaa.getRandom()
  //await conn.sendMessage(m.chat, {
   //   react: {
    //      text: "⏳",
      //    key: m.key,
    //  }
  //
//  let tags
 //  let teks = `${args[0]}`.toLowerCase()

      // DEFAULT MENU
      let dash = global.dashmenu
      let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2

      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua

      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split("@")[0]}`

      /* Gobal */
      let glb = global.db.data.users
      let usrs = glb[m.sender]
      let wib = moment.tz("Asia/Jakarta").format("HH:mm:ss")
      let wibh = moment.tz("Asia/Makassar").format("HH")
      let wibm = moment.tz("Asia/Makassar").format("mm")
      let wibs = moment.tz("Asia/Makassar").format("ss")
      let wita = moment.tz("Asia/Makassar").format("HH:mm:ss")
      let waktuwita = `${wibh} H ${wibm} M ${wibs} S`

      /* Info Menu */
      let mode = global.opts["self"] ? "Private" : "Publik"
      let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))) || {}
      let {
          age,
          exp,
          limit,
          level,
          role,
          registered,
          money
      } = glb[m.sender]
      let {
          min,
          xp,
          max
      } = xpRange(level, global.multiplier)
      let name = await conn.getName(m.sender)
      let premium = glb[m.sender].premiumTime
      let prems = `${premium > 0 ? "Premium": "Free"}`
      let platform = os.platform()

      //-----------TIME---------
      let ucpn = `${ucapan()}`
      let d = new Date(new Date + 3600000)
      let locale = "id"
      // d.getTimeZoneOffset()
      // Offset -420 is 18.00
      // Offset    0 is  0.00
      // Offset  420 is  7.00
      let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(d / 84600000) % 5]
      let week = d.toLocaleDateString(locale, {
          weekday: "long"
      })
      let date = d.toLocaleDateString(locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
      })
      let dateIslamic = Intl.DateTimeFormat(locale + "-TN-u-ca-islamic", {
          day: "numeric",
          month: "long",
          year: "numeric"
      }).format(d)
      let time = d.toLocaleTimeString(locale, {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
      })
      let _uptime = process.uptime() * 1000
      let _muptime
      if (process.send) {
          process.send("uptime")
          _muptime = await new Promise(resolve => {
              process.once("message", resolve)
              setTimeout(resolve, 1000)
          }) * 1000
      }
      let muptime = clockString(_muptime)
      let uptime = clockString(_uptime)
      let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
      let totalreg = Object.keys(glb).length
      let rtotalreg = Object.values(glb).filter(user => user.registered == true).length
      let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
          return {
              help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
              tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
              prefix: "customPrefix" in plugin,
              limit: plugin.limit,
              premium: plugin.premium,
              enabled: !plugin.disabled,
          }
      })
      let groups = {}
      for (let tag in tags) {
          groups[tag] = []
          for (let plugin of help)
              if (plugin.tags && plugin.tags.includes(tag))
                  if (plugin.help) groups[tag].push(plugin)
      }
      conn.menu = conn.menu ? conn.menu : {}
      let before = conn.menu.before || defaultMenu.before
      let header = conn.menu.header || defaultMenu.header
      let body = conn.menu.body || defaultMenu.body
      let footer = conn.menu.footer || defaultMenu.footer
      let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? "" : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
      let _text = [
          before,
          ...Object.keys(tags).map(tag => {
              return header.replace(/%category/g, tags[tag]) + "\n" + [
                  ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
                      return menu.help.map(help => {
                          return body.replace(/%cmd/g, menu.prefix ? help : "%_p" + help)
                              .replace(/%islimit/g, menu.limit ? "Ⓛ" : "")
                              .replace(/%isPremium/g, menu.premium ? "🅟" : "")
                              .trim()
                      }).join("\n")
                  }),
                  footer
              ].join("\n")
          }),
          after
      ].join("\n")
      let text = typeof conn.menu == "string" ? conn.menu : typeof conn.menu == "object" ? _text : ""
      let md = fs.readFileSync('./thumbnail.jpg')
      let replace = {
          "%": "%",
          p: _p,
          uptime,
          muptime,
          me: conn.getName(conn.user.jid),
          npmname: _package.name,
          npmdesc: _package.description,
          version: _package.version,
          exp: exp - min,
          maxexp: xp,
          totalexp: exp,
          xp4levelup: max - exp,
          github: _package.homepage ? _package.homepage.url || _package.homepage : "[unknown github url]",
          tag,
          dash,
          m1,
          m2,
          m3,
          m4,
          cc,
          c1,
          c2,
          c3,
          c4,
          lprem,
          llim,
          ucpn,
          platform,
          wib,
          wita,
          mode,
          _p,
          money,
          age,
          tag,
          prems,
          level,
          limit,
          name,
          names,
          weton,
          week,
          date,
          dateIslamic,
          time,
          totalreg,
          totalfeatures,
          rtotalreg,
          role,
          readmore: readMore
      }
      text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name])
      const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => "./src/avatar_contact.png")
      //FAKE TROLI

  const ftrol = {

      key : {
  
      remoteJid: 'status@broadcast',
  
      participant : '0@s.whatsapp.net'
  
      },
  
      message: {
  
      orderMessage: {
  
      itemCount : 2022,
  
      status: 1,
  
      surface : 1,
  
      message: `Hai Kak ${name}!`, 
  
      orderTitle: `▮Menu ▸`,
  
      thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye
  
      sellerJid: '0@s.whatsapp.net' 
  
      }
  
      }
  
      }


      //------------------< MENU All>----------------
const _0x278755 = _0x2b19;
(function (_0x121e8d, _0x434059) {
    const _0x3396b7 = _0x2b19, _0x4302c6 = _0x121e8d();
    while (!![]) {
        try {
            const _0x35abb4 = -parseInt(_0x3396b7(0x1d2)) / (-0x8fd + -0x113c + 0x1a3a) + -parseInt(_0x3396b7(0x1b6)) / (-0x1 * 0x1f3b + -0x1be + 0x20fb * 0x1) * (parseInt(_0x3396b7(0x1b8)) / (-0x61b * 0x2 + -0x2 * 0x3c2 + -0x13bd * -0x1)) + -parseInt(_0x3396b7(0x1c9)) / (0x26b0 + 0x13 * 0xdb + -0x36ed * 0x1) + -parseInt(_0x3396b7(0x1c1)) / (-0x1500 + 0x1a * -0x1c + -0x1 * -0x17dd) * (parseInt(_0x3396b7(0x1cd)) / (-0x1dd2 + -0x1d * -0x149 + -0x1 * 0x76d)) + -parseInt(_0x3396b7(0x1bc)) / (0x2 * -0x9e4 + -0xe3a * 0x1 + 0x2209) * (-parseInt(_0x3396b7(0x1df)) / (0xb * -0xe8 + 0x1 * 0x323 + 0x6dd)) + -parseInt(_0x3396b7(0x1b7)) / (0x1 * 0x1249 + 0x28 * -0x20 + -0xd40) + parseInt(_0x3396b7(0x1c6)) / (0x1 * -0x2421 + -0x1 * 0x236b + 0x4796) * (parseInt(_0x3396b7(0x1ca)) / (-0xb * -0x18e + -0x687 + -0x2a2 * 0x4));
            if (_0x35abb4 === _0x434059)
                break;
            else
                _0x4302c6['push'](_0x4302c6['shift']());
        } catch (_0x2f92d3) {
            _0x4302c6['push'](_0x4302c6['shift']());
        }
    }
}(_0x2c0b, 0x67f6e + 0xf8b7 + -0x3a1ca));
let all = _0x278755(0x1c8) + _0x278755(0x1cc) + _0x278755(0x1dc) + name + (_0x278755(0x1da) + _0x278755(0x1be)) + limit + (_0x278755(0x1d3) + _0x278755(0x1d1)) + role + (_0x278755(0x1bf) + _0x278755(0x1ce)) + level + (_0x278755(0x1c5) + _0x278755(0x1d4) + _0x278755(0x1d8)) + exp + (_0x278755(0x1b4) + _0x278755(0x1ba)) + week + ',\x20' + date + (_0x278755(0x1db) + _0x278755(0x1c0)) + time + (_0x278755(0x1d0) + _0x278755(0x1bb)) + uptime + (_0x278755(0x1bd) + _0x278755(0x1cf)) + rtotalreg + _0x278755(0x1dd) + totalreg + (_0x278755(0x1b5) + _0x278755(0x1cb) + _0x278755(0x1b9) + _0x278755(0x1c4) + _0x278755(0x1de) + _0x278755(0x1d6) + _0x278755(0x1d5) + _0x278755(0x1c2));
function _0x2c0b() {
    const _0x55dbd5 = [
        'Wabot\x20🤖」\x0a│',
        '27042rrqeQS',
        'l\x20:\x20*',
        'ase:\x20',
        '*\x0a│\x0a│\x20📈\x20Up',
        '🦸🏼‍♂️\x20Role\x20:\x20*',
        '233725XxdIue',
        '\x20Limit*\x0a│\x20',
        '💫\x20Total\x20XP',
        '1225179060',
        'tan:\x0a│\x20*08',
        '©\x20SteveWab',
        '\x20:\x20',
        'chat',
        '\x0a│\x0a│\x20🧱\x20Lim',
        '*\x0a│\x20🕰️\x20Wakt',
        '\x20👋🏻\x20Hai,\x20',
        '\x20of\x20',
        'y*\x0a│\x20👑\x20Bua',
        '2427272YHjhKf',
        '\x20✨\x0a│\x20\x0a│\x20📅\x20',
        '\x0a│\x0a│\x20🤖\x20Scr',
        '15866UeLLPg',
        '12942NZOuvg',
        '3FGxZyo',
        'ttps://bit',
        'Tanggal:\x20*',
        'time:\x20',
        '7TSsfAt',
        '\x0a│\x20📊\x20Datab',
        'it\x20:\x20*',
        '*\x0a│\x20🔼\x20Leve',
        'u:\x20*',
        '170hJlOOc',
        '*\x0a│\x0a╰────\x0a',
        'sendMessag',
        '.ly/3XCH4t',
        '\x20Level*\x0a│\x20',
        '200joQFoJ',
        'ot\x20Games',
        '\x0a╭─「\x20Steve',
        '1640848HQYDWM',
        '415041eKvUHm',
        'ipt:\x20\x0a│\x20*h'
    ];
    _0x2c0b = function () {
        return _0x55dbd5;
    };
    return _0x2c0b();
}
function _0x2b19(_0x1f9c94, _0x26bb06) {
    const _0x80efbe = _0x2c0b();
    return _0x2b19 = function (_0x552faa, _0x509e22) {
        _0x552faa = _0x552faa - (0xba7 + -0x13cf + 0x9dc);
        let _0x100f47 = _0x80efbe[_0x552faa];
        return _0x100f47;
    }, _0x2b19(_0x1f9c94, _0x26bb06);
}
conn[_0x278755(0x1c3) + 'e'](m[_0x278755(0x1d9)], {
    'text': all + readMore + '\x0a\x0a' + text,
    'contextInfo': {
        'externalAdReply': {
            'title': _0x278755(0x1d7) + _0x278755(0x1c7),
            'thumbnailUrl': menu,
            'sourceUrl': sgc,
            'mediaType': 0x1,
            'renderLargerThumbnail': !![]
        }
    }
}, { 'quoted': m });
   
    //  await conn.sendMessage(m.chat, {
      //  react: {
       //     text: "⚡",
       //     key: m.key,
     //   }
   // })
  } catch (e) {
      conn.reply(m.chat, "Maaf, menu sedang error", m)
      throw e
  }
}
handler.help = ['menu', '?']
handler.command = /^(menu|menuall|allmenut|\?)$/i

handler.exp = 3

export default handler
//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
  return [h, " H ", m, " M ", s, " S "].map(v => v.toString().padStart(2, 0)).join("")
}

function clockStringP(ms) {
  let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
  return [ye, " *Years 🗓️*\n", mo, " *Month 🌙*\n", d, " *Days ☀️*\n", h, " *Hours 🕐*\n", m, " *Minute ⏰*\n", s, " *Second ⏱️*"].map(v => v.toString().padStart(2, 0)).join("")
}

function ucapan() {
  const time = moment.tz("Asia/Makassar").format("HH")
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
      res = "Good Morning 🌄"
  }
  if (time >= 10) {
      res = "Good Afternoon ☀️"
  }
  if (time >= 15) {
      res = "Good Afternoon 🌇"
  }
  if (time >= 18) {
      res = "Good Night 🌙"
  }
  return res
}