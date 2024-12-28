const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_28_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI5LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAxLFxuICAgICAgICA5LFxuICAgICAgICAxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODksXG4gICAgICAgIDI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgODAsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAwLFxuICAgICAgICAzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc1LFxuICAgICAgICA3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYzQ1OWhTWDlQam1DUkpBNCtxZlQwQ2gxMXNyekZGR0VrNWlaRWJrTTVlND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRThZcTVvRXpRczZrRzM0WUwzUC13UVwiLFxuICBcInBob25lSWRcIjogXCJhYzM5NzQ1NC0yMDJjLTRlNjgtODI1Mi05ZWY0ZmY1NmY3MTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMjMxLFxuICAgICAgMzgsXG4gICAgICAxLFxuICAgICAgMTYzLFxuICAgICAgMTYwLFxuICAgICAgMjM1LFxuICAgICAgMjEsXG4gICAgICAxOTYsXG4gICAgICAxOTIsXG4gICAgICAxNjcsXG4gICAgICA2MixcbiAgICAgIDQsXG4gICAgICA1MCxcbiAgICAgIDE2LFxuICAgICAgMTM0LFxuICAgICAgMjE1LFxuICAgICAgOTksXG4gICAgICAxNjAsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMTc1LFxuICAgICAgMTA0LFxuICAgICAgMjA5LFxuICAgICAgNzUsXG4gICAgICAxNjEsXG4gICAgICAxNDEsXG4gICAgICA3MCxcbiAgICAgIDQ5LFxuICAgICAgNjksXG4gICAgICAxOTksXG4gICAgICAxMTMsXG4gICAgICAxNTMsXG4gICAgICAxOTcsXG4gICAgICAxODcsXG4gICAgICAxMDQsXG4gICAgICAxNDMsXG4gICAgICAyNTUsXG4gICAgICA1MyxcbiAgICAgIDI1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFUFBFWFpDOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDQwNjk2Mjc6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ+UFxcbsmqXFxu4bShXFxuyapcXG7htJtcXG7KnFxcbuG0nFxcbsqAXFxu4bScX1wiLFxuICAgIFwibGlkXCI6IFwiNDAzNzc0OTA5MDMxODU6NDhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0tQdHE0RUVLR0p2N3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVTWxSeWowb25iNDlmWkk0emsvTkZWbjhYZ1VuNlBpUzdNWkVROTBKcFFNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRRSmF4cWlEZFVYUGxLRVNVNDVPM2VNd2VMYks3RnVXVnBXbTB2WEJ5di9wc3dZWGVjb1Z5WFRDajRwRWQ4RVRONDU2dWZBMVM3VXhHd2VvMkF2NUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkV4V0VrV21rZzdmNXkrcDN5cXZ1VTRaOUhNbE5rVWtjZkZ5dENaUXJsZGNCVWgxc1A0M1J4U1RPR3RXWUJ4T21pMlZ6KzBzV2tOa0hzb3A4RERPd2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzA0MDY5NjI3OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUzNzgwODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFITEJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhMQi5qc29uIjogIntcImtleURhdGFcIjpcIkhoTzh2WDBDUHV6N0RhZUNKTlV3L3pJWHczSmFUbFJlMzNqSE9MWklUWnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE3MTA5NzUwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1Mzc4MDkyMjY2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
