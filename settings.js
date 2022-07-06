//                     zimbot.inc.pressents 
//                     2022 production
//                     Thanks to dikArdnt
// 👋 SOME BUG ARE FIXING AND ADD NEW PARTS by MR NIMA 
                                                                                        //drips


const fs = require('fs')
const chalk = require('chalk')

//global api
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94762352974'] 
global.pemilik = ['94770267442'] //pemilik nomor
global.premium = ['94770267442'] //premium number
global.pengguna = '☘Anusha☘' //pengguna
global.botnma = '☘Anusha☘' //botnama,botname
global.ownernma = '☘Anuchamath☘' //ownernama,ownername
global.packname = '© ☘Anusha☘' // packname
global.author = '☘Anusha☘' //authorname
global.sessionName = '☘Anusha☘'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage 
global.alive =`Hello 
-------------------------------------------------------

☘A░N░U░S░H░A░ B░O░T░☘

  * 𝓬𝓸𝓶𝓪𝓷𝓭 *

ᶠᵒʳ ᵐᵒʳᵉ ⁱᵐᶠᵒʳᵐᵃᵗⁱᵒⁿ ˢᵉⁿᵈ *.menu*

. song [ yt link ]

. video [ yt link ]

.song [ song name ]

.sticker [ photo or video ]

https://chat.whatsapp.com/BR6TrmmlCinB2BkfcwwWpb

*⛔⛓Discipline No. 01🤝*

*⛔Do not inappropriate chat🗒️*

*⛔No Link / Inbox Forbidden📥*

*⛔Inactive members will be removed🗑️*

*⛔Do not disturb other members🕯️*

*⛔Respect everyone🥰*

*⛔No SEX or Porn🔞*

*⛔Do not give many commands for one long⚠️*

Github link☘ https://github.com/Anuchamath

Download song type .yt 
Thanks fro using...`
// Welcome massage  
global.welcome = `
🌀 -------------------------------------------------------

☘A░N░U░S░H░A░ B░O░T░☘

  * 𝓬𝓸𝓶𝓪𝓷𝓭 *

ᶠᵒʳ ᵐᵒʳᵉ ⁱᵐᶠᵒʳᵐᵃᵗⁱᵒⁿ ˢᵉⁿᵈ *.menu*

. song [ yt link ]

. video [ yt link ]

.song [ song name ]

.sticker [ photo or video ]

https://chat.whatsapp.com/BR6TrmmlCinB2BkfcwwWpb

*⛔⛓Discipline No. 01🤝*

*⛔Do not inappropriate chat🗒️*

*⛔No Link / Inbox Forbidden📥*

*⛔Inactive members will be removed🗑️*

*⛔Do not disturb other members🕯️*

*⛔Respect everyone🥰*

*⛔No SEX or Porn🔞*

*⛔Do not give many commands for one long⚠️*

Github link☘ https://github.com/Anuchamath
☘🖤
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `-------------------------------------------------------

☘A░N░U░S░H░A░ B░O░T░☘

  * 𝓬𝓸𝓶𝓪𝓷𝓭 *

ᶠᵒʳ ᵐᵒʳᵉ ⁱᵐᶠᵒʳᵐᵃᵗⁱᵒⁿ ˢᵉⁿᵈ *.menu*

. song [ yt link ]

. video [ yt link ]

.song [ song name ]

.sticker [ photo or video ]

https://chat.whatsapp.com/BR6TrmmlCinB2BkfcwwWpb

*⛔⛓Discipline No. 01🤝*

*⛔Do not inappropriate chat🗒️*

*⛔No Link / Inbox Forbidden📥*

*⛔Inactive members will be removed🗑️*

*⛔Do not disturb other members🕯️*

*⛔Respect everyone🥰*

*⛔No SEX or Porn🔞*

*⛔Do not give many commands for one long⚠️*

Github link☘ https://github.com/Anuchamath`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`

global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'zim bot must be admin neh!',
    owner: 'This cmd is for zim bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'wait zim bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/drips.jpg')
global.imgalive = fs.readFileSync('./image/drips.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
