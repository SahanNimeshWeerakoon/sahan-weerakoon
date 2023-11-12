#!/bin/bash
cd /home/ec2-user/sahan-weerakoon 
git pull origin main
npm install &&
npm run build &&
pm2 restart sahan-weerakoon 