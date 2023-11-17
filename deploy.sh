#!/bin/bash
cd /home/ubuntu/sahan-weerakoon 
git pull origin main
npm install &&
npm run build &&
sudo pm2 list &&
pm2 restart 0