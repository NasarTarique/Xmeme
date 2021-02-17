#! /bin/bash

dbname="xmeme"
username="hp"

sudo apt install -y curl

curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo apt install -y python3-pip
pip3 install -r requirements.txt

sudo apt-get install -y postgresql postgresql-contrib

sudo apt-get install -y libpq-dev python3-dev

sudo -u postgres psql <<EOF
CREATE DATABASE	$dbname;
CREATE USER $username WITH ENCRYPTED PASSWORD 'regulus';
ALTER ROLE $username SET client_encoding TO 'utf8';
ALTER ROLE $username SET default_transaction_isolation TO 'read committed';
ALTER ROLE $username SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE $dbname TO $username;
EOF

cd ./frontend/
echo "$(pwd)"
npm install
cd ../
echo "$(pwd)"
