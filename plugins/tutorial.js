let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
wa.me/917356145338
😋😋😋😋😋😋😋😋😋
follow me
😆😆😆😆😆😆😆😆😆
https://instagram.com/_._wr0ng.__.m4k3r_._?igshid=lj8eey4t08gz
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

