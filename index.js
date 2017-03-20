const viberBot = require('viber-bot')

//***********************************
// Set config for your environment
//***********************************
const config = {
	authToken: 'AUTH_TOKEN',
	name: 'NAME',
	avatar: 'AVATAR',
	viberUserId: 'VIBER_USER_ID'
}

const message = new viberBot.Message.Text('test', {
    "Type": "keyboard",
    "Buttons": [{
        "Columns": 10000, // <<<<<<<<<<<<<<<<<<<<<<<<<<< Here is supposed to cause error
        "Rows": 2,
        "Text": "<font color=\"#494E67\">Smoking</font><br><br>",
        "TextSize": "medium",
        "TextHAlign": "center",
        "TextVAlign": "bottom",
        "ActionType": "reply",
        "ActionBody": "Smoking",
        "BgColor": "#f7bb3f"
    }]
})

const bot = new viberBot.Bot({ authToken: config.authToken, name: config.name, avatar: config.avatar})
const userProfile = new viberBot.UserProfile(config.viberUserId, null, null, null, null)

bot.sendMessage(userProfile, message).then((res) => {
	console.log('============This is in then============')
	console.log(res)
}).catch(e => {
	console.log('============This is in catch============')
	console.error(e)
})

bot.onError(e => {
	console.log('============This is in onError============')
	console.error(e)
})

process.on('unhandledRejection', e => {
	console.log('============This is in unhandledRejection============')
	console.error(e)
})
