.PHONY: build run all watch

all: build run

build:
	lein cljsbuild once

run:
	open index.html

watch:
	lein cljsbuild auto
