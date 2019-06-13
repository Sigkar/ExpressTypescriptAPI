echo ""
echo Creating a new database for headlinerr.

db-migrate create $migrationName --config ../config/database.json -e $dbj
