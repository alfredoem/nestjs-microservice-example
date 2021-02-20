install:
	npm install
up:
	docker-compose up -d
	npm run start:dev

down:
	docker-compose down

test-e2e:
	npm run test:e2e

migration-run:
	npm run typeorm migration:run

migration-revert:
	npm run typeorm migration:revert
