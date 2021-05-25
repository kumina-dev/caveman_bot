const DC = require('discord.js')
const cave = new DC.Client()

const config = require('./config.json')

cave.on('ready', () => {
    console.log('Caveman is ready!')
})

cave.login(config.token)