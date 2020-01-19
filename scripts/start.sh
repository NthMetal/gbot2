cp /home/ubuntu/auth/auth.json /home/ubuntu/gbot/dist/config/auth.json
npm install /home/ubuntu/gbot/
pm2 start /home/ubuntu/gbot/dist/bot.js