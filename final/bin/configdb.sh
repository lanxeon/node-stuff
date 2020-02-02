#!/bin/bash

export PGPASSWORD='password'

db="monstersdb"
echo "configuring db for $db"

dropdb -U node_user monstersdb
createdb -U node_user monstersdb

psql -U node_user monstersdb < ./bin/sql/stuff.sql

echo "configured db for $db"
