#! /bin/bash

python3 manage.py makemigrations

python3 manage.py migrate

python3 manage.py collectstatic << EOF
yes
EOF

python3 manage.py runserver 8081
