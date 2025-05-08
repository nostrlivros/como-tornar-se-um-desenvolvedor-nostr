#!/bin/bash

echo "Watching for changes in .adoc files..."
while inotifywait -e close_write -r . --include '\.adoc$'; do
  echo "Change detected. Regenerating PDF..."
  asciidoctor-pdf -a pdf-theme=theme.yml index.adoc
done
