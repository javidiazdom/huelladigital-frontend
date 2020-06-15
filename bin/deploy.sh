#!/bin/bash

env=$1

echo """
set -eu
set -o pipefail
cd huelladigital-platform
docker-compose pull
docker-compose restart frontend
exit 0
""" | ssh -t -t -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no master@${env}.huelladigital.ayudadigital.org bash -
