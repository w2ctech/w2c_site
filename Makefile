.PHONY: help dev build start lint typecheck clean format deploy ci all prod

help:
	@echo "w2ctech Next.js - Available Commands"
	@echo "===================================="
	@echo "  make dev        Development server with hot reload"
	@echo "  make prod       Clean build + start production server"
	@echo "  make build      Production build only"
	@echo "  make start      Start production server"
	@echo "  make lint       Run ESLint"
	@echo "  make typecheck  Run TypeScript compiler check"
	@echo "  make format     Format code with Prettier"
	@echo "  make clean      Remove build artifacts"
	@echo "  make ci         Run lint + typecheck + build"
	@echo "  make deploy     Deploy to Vercel production"
	@echo "  make all        Clean install + full CI"
	@echo ""

dev:
	npm run dev

prod: clean build
	npm run start

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

typecheck:
	npx tsc --noEmit

format:
	npx prettier --write "src/**/*.{ts,tsx,css}" 2>/dev/null || echo "Prettier not installed, skipping"

clean:
	rm -rf .next .vercel

ci: lint typecheck build
	@echo "✓ CI checks passed"

deploy:
	@echo "Deploying to Vercel production..."
	npx vercel --prod

deploy-preview:
	@echo "Deploying preview to Vercel..."
	npx vercel

all: clean
	npm install
	$(MAKE) ci
