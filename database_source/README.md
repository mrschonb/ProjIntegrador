# What are the contents of this directory? 

This directory includes the following:

* csvs - a folder with CSV files containing dummy data
* db - a folder with the JSON files to use when creating the database
* structure - JSON files to use as a simple structure guideline
* csv_to_json.py - a script to convert CSV files into (pretty) JSON files

### How does the python script work?

Here is the usage:

> python csv_to_json.py path_to_CSV

The script outputs to STDOUT, so it works best when redirecting the output to a file. Example:

> python csv_to_json.py csvs/warehouses.csv > warehouses.json

**IMPORTANT: The csv file has certain requirements. The first line must be a header. The second line must be the data type of the column (currently accepted types are int, float, string, and array). See the existing files for an example.**

