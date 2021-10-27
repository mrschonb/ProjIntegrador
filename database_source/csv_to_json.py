import csv
import json
from sys import argv
from random import randint

"""
Python 3.6
This script is not particularly robust, but there's not much point in making it perfect.
It reads the csv file received as an argument, then outputs its contents in JSON format to STDOUT.
CSV files must have the following structure:
	header1,header2,header3
	data_type1,data_type2,data_type3
	data1A,data1B,data1C
	data2A,data2B,data2C
	...
This is to convert strings as needed

build_obj is in charge of converting data to the type specified
If it finds data of type "array", it ignores what's in the csv
	and generates random stock counts as defined in randomStock

Potential improvement: change "array" for "stock" and create an actual function
	to parse arrays from the csv's field. This would be exculsively useful for the "orders" DB

Usage:
	python csv_to_json.py csv_file.csv

Recommended usage:
	python csv_to_json.py csv_file.csv > output.json

"""

def build_obj(data, headers, dtypes):
	obj = {}
	for i in range(len(data)):
		if dtypes[i] == "int":
			obj[headers[i]] = int(data[i])
		elif dtypes[i] == "float":
			obj[headers[i]] = float(data[i])
		elif dtypes[i] == "array": #exclusively for the products file
			#10 pharmacies
			#3 warehouses
			obj[headers[i]] = {"pharmacies": randomStock("p"), "warehouses": randomStock("w")}
		else:
			obj[headers[i]] = data[i]
	return obj
			
def randomStock(stock_for):
	obj = {}
	if stock_for == "p":
		for i in range(10):
			obj[str(i+1)] = randint(1,60)
	else:
		for i in range(3):
			obj[str(i+1)] = randint(100,1000)
	return obj		

with open(argv[1], 'r') as f:
	reader = csv.reader(f)
	data = [row for row in reader]

headers = ['id']+data[0][1:] #Stupid hack because I don't want to deal with excel's encoding bullshit
dtypes = data[1]
data = data[2:]


arr = []
for row in data:
	arr.append(build_obj(row, headers, dtypes))

print(json.dumps(arr, indent=2))