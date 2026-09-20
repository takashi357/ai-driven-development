"""Build the self-contained workbench from the same source as the hosted page."""
from pathlib import Path
import re
import base64

root = Path(__file__).resolve().parent / 'dist'
page = (root / 'reuse.html').read_text()
# Embed the same font subsets so the HTML has no companion-file dependencies.
fonts = (root / 'fonts/fonts.css').read_text()
fonts = re.sub(r'url\(\./([^\)]+)\)', lambda m: 'url(data:font/woff2;base64,' + base64.b64encode((root / 'fonts' / m[1]).read_bytes()).decode() + ')', fonts)
page = page.replace('<link rel="stylesheet" href="./fonts/fonts.css">', '<style>\n' + fonts + '\n</style>')
for name in ('style.css', 'reuse.css'):
    css = (root / name).read_text().replace('@charset "UTF-8";', '')
    page = page.replace(f'<link rel="stylesheet" href="./{name}">', f'<style>\n{css}\n</style>')
js = (root / 'reuse.js').read_text()
assert '</script' not in js.lower()
page = page.replace('  <script src="./reuse.js" defer></script>\n', '')
page = page.replace('</body>', f'<script>\n{js}\n</script>\n</body>')
page = page.replace('<body class="reuse-page">', '<body class="reuse-page" data-offline="true">')
page = re.sub(r'<a\b[^>]*class="[^"]*online-only[^"]*"[^>]*>.*?</a>', '', page, flags=re.S)
page = page.replace('href="./index.html"', 'href="#reuse-title"')
page = page.replace('<title>', '<title>【オフライン版】')
page = page.replace('<meta name="robots"', '<meta http-equiv="Content-Security-Policy" content="default-src \'none\'; script-src \'unsafe-inline\'; style-src \'unsafe-inline\'; img-src data:; font-src data:; connect-src \'none\'; object-src \'none\'; base-uri \'none\'; form-action \'none\'">\n  <meta name="robots"')
page = page.replace('</html>', '<!-- Bundled font license:\n' + (root / 'fonts/LICENSE.txt').read_text() + '\n-->\n</html>')
assert not re.search(r'(src|href)="\./', page)
(root / 'pc-reuse-offline.html').write_text(page)
print('Built dist/pc-reuse-offline.html (self-contained, no runtime dependencies)')
