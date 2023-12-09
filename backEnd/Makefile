all: db-start

back-start:
	npm run dev

db-start:
	docker-compose up -d database

db-logs:
	docker-compose logs -f database

node-logs:
	docker-compose logs -f node

up:
	docker-compose up -d node

down:
	docker-compose down

clear:
	rm -rf ./database/data