import os
import json
import shutil

# Chrome 收藏夹路径（MacOS）
chrome_bookmarks_path = os.path.expanduser('~/Library/Application Support/Google/Chrome/Default/Bookmarks')
output_path = os.path.join(os.path.dirname(__file__), 'bookmarks.json')

def extract_bookmarks(node, category=""):
    items = []
    if node.get("type") == "folder":
        for child in node.get("children", []):
            items.extend(extract_bookmarks(child, node.get("name", "")))
    elif node.get("type") == "url":
        items.append({
            "name": node.get("name"),
            "url": node.get("url"),
            "category": category
        })
    return items

with open(chrome_bookmarks_path, 'r') as f:
    data = json.load(f)

roots = data.get("roots", {})
all_bookmarks = []
for root in roots.values():
    all_bookmarks.extend(extract_bookmarks(root))

with open(output_path, 'w') as f:
    json.dump(all_bookmarks, f, ensure_ascii=False, indent=2)

print(f"导出成功，共 {len(all_bookmarks)} 条收藏，已保存到 {output_path}")