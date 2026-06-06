.PHONY: help dev build start lint typecheck clean format

help:
	@echo "w2ctech Next.js - Available Commands"
	@echo "===================================="
	@echo "  make dev        Start development server (http://localhost:3000)"
	@echo "  make build      Production build"
	@echo "  make start      Start production server"
	@echo "  make lint       Run ESLint"
	@echo "  make typecheck  Run TypeScript compiler check"
	@echo "  make format     Format code with Prettier"
	@echo "  make clean      Remove build artifacts and node_modules"
	@echo "  make all        Clean, install, build, and typecheck"
	@echo ""

dev:
	npm run dev

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
	rm -rf .next node_modules

all: clean
	npm install
	npm run build
	npx tsc --noEmit
