echo ""
echo Creating a new migration
echo Please input a name for the migration
read migrationName
echo Please input a database.json type
read dbj

db-migrate create $migrationName --config ../config/database.json -e $dbj
