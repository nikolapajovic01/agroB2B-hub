import json

file_path = 'transakcijeRolend_2025.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# data je lista!
for tr in data:
    tr['type'] = 'Rolend'

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('Sva polja su ažurirana sa type: "Rolend"')