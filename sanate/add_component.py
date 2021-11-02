from sys import argv

def usage(name):
	print("Usage:")
	print(f"python {name} component_name")

def main():
	if len(argv)<2:
		usage(argv[0])
		return

	text = "const _NAME_ = () => {\n	return (\n		<div>\n\n		</div>\n	)\n}\n\nexport default _NAME_".replace("_NAME_", argv[1])
	with open("src\\components\\"+argv[1]+".js", "w") as f:
		f.write(text)

main()