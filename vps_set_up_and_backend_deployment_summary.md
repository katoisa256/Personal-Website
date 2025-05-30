
# ✅ Complete Deployment Summary for `photosecurityapp.info`

---

## 1. 🧠 Choosing and Purchasing the Server

- Chose a **Contabo Cloud VPS 10 SSD**:
  - Ubuntu 24.04 LTS
  - Great value for price (RAM, storage, bandwidth)
  - Suitable for Node.js + PostgreSQL workloads
- Purchased via [contabo.com](https://contabo.com)

---

## 2. 🖥️ Initial Server Setup

### 🔐 a. Connected via SSH:
```bash
ssh root@YOUR_SERVER_IP
```

### 🧱 b. Updated the Server
```bash
sudo apt update && sudo apt upgrade -y
```

### ⚙️ c. Installed Essentials
```bash
sudo apt install curl ufw git build-essential -y
```

---

## 3. 📦 Installed Node.js (via nvm)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
node -v
npm -v
```

---

## 4. 🚀 Cloned and Ran Your Node.js App

```bash
git clone https://github.com/your-repo.git
cd your-repo
npm install
```

### 📁 Created `.env` file:
```env
PORT=3000
DB_HOST=localhost
DB_USER=...
DB_PASS=...
```

### ▶️ Ran your app:
```bash
npm run start
# or with PM2
npx pm2 start index.js --name photoapp
```

---

## 5. 🌐 Set Up a Domain Name

- Purchased `photosecurityapp.info` from [Namecheap](https://namecheap.com)
- Configured **A record** to point to your server's public IPv4 (e.g. `167.86.89.205`)
- Removed the old `CNAME` pointing to `vercel-dns.com`

---

## 6. 🛡️ Set Up Nginx as a Reverse Proxy

### 📦 Installed Nginx:
```bash
sudo apt install nginx -y
```

### 📁 Created config in `/etc/nginx/sites-available/photosecurityapp.info`

```nginx
server {
    listen 80;
    server_name photosecurityapp.info www.photosecurityapp.info;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 🔗 Linked it:
```bash
sudo ln -s /etc/nginx/sites-available/photosecurityapp.info /etc/nginx/sites-enabled/
```

### ✅ Tested and restarted Nginx:
```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

## 7. 🔒 Secured Site with SSL via Let’s Encrypt (Certbot)

### 📦 Installed Certbot:
```bash
sudo apt install certbot python3-certbot-nginx -y
```

### ✅ Requested certificate:
```bash
sudo certbot --nginx -d photosecurityapp.info -d www.photosecurityapp.info
```

---

## 8. 🗄️ PostgreSQL Setup on the Server

### 📦 Installed PostgreSQL:
```bash
sudo apt install postgresql postgresql-contrib -y
```

### 👤 Created user & DB:
```bash
sudo -i -u postgres
createuser --interactive     # e.g., 'kato'
createdb photosecuritydb
psql
ALTER USER kato WITH PASSWORD 'your_password';
\q
exit
```

### Optional: Enabled external access:
- `/etc/postgresql/15/main/postgresql.conf` → `listen_addresses = '*'`
- `/etc/postgresql/15/main/pg_hba.conf`:
  ```
  host    all             all             0.0.0.0/0               md5
  ```

```bash
sudo systemctl restart postgresql
```

---

## 9. 🧪 Testing the Setup

- App ran at `localhost:3000/health` and returned status JSON ✅
- Domain `https://photosecurityapp.info` now routes to your app.
- SSL is working with valid HTTPS padlock.
- PostgreSQL is running and app can connect to it.

---

## 💡 Optional Tools Used

- `curl ifconfig.me` – check public IP
- `dig +short domain.com` – verify DNS propagation
- `pm2` – for production process management
- `ufw` – firewall (you can use `sudo ufw allow 'Nginx Full'`)

---

## 🎉 Deployment Complete

Your app is now:

✅ Live on a domain  
✅ Running via Node.js on port `3000`  
✅ Reverse proxied via Nginx  
✅ Encrypted with HTTPS  
✅ Connected to PostgreSQL  
✅ Hosted on a secure Ubuntu VPS
