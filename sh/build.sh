#! /bin/bash
echo '拉取代码'
git pull
echo '安装依赖'
npm install
echo '重启服务'
/opt/node/vin/pm2 stop webhook.js
/opt/node/vin/pm2 start webhook.js
