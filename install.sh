#! /bin/bash

dbname="xmeme"
username="hp"

pip3 install -r requirements.txt -q
sudo apt-get install -y postgresql postgresql-contrib

sudo apt-get install -y libpq-dev python3-dev

sudo -u postgres psql -q <<EOF
CREATE DATABASE	$dbname;
CREATE USER $username WITH ENCRYPTED PASSWORD 'regulus';
ALTER ROLE $username SET client_encoding TO 'utf8';
ALTER ROLE $username SET default_transaction_isolation TO 'read committed';
ALTER ROLE $username SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE $dbname TO $username;
EOF
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs


cd ./frontend/
npm install
cd ../
