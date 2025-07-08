#!/bin/sh

for file in *.vue; do
  # Get the content of the SVG file inside the <template> tags
  content=$(sed -n '/<template>/,/<\/template>/p' "$file" | sed '1d;$d')

  # Extract the base name without the extension
  base=$(basename "$file" .vue)

  # Rename the file to .ts
  mv "$file" "$base.ts"

  # Replace <template>...</template> with export default '...';
  echo "export default \`$content\`;" > "$base.ts"
done
