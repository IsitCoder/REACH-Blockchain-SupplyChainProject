import random
"""
32bit hex code
Country Code        3 bit Country Code
Sector              5 bit https://en.wikipedia.org/wiki/Global_Industry_Classification_Standard OCT -> HEX converstion
Manufacturer ID     8 bit
Product bit         9 bit
Time                7 bit MMDDYY_NN M=month D=day Y=year _=Y/M/D N=number (shelf life or warraty period) DEC -> HEX
"""
"""
Country Code
1 North American Numbering Plan
2 Mostly Africa
3-4 Europe
5 Americas outside the NANP
6 Southeast Asia and Oceania
7 Russia and neighboring countries
8 East Asia and special services
9 Mostly Middle East and parts of southern Asia
"""
'''
# contryCodeDict = {
#     1 : "Canada and United States",
#     1340 : "United States Virgin Islands",
#     1670 : "Northern Mariana Islands",
#     1671 : "Guam",
#     1684 : "American Samoa",
#     1787 : "Puerto Rico",
#     1939 : "Puerto Rico",
#     1242 : "Bahamas",
#     1246 : "Barbados",
#     1264 : "Anguilla",
#     1268 : "Antigua and Barbuda",
#     1284 : "British Virgin Islands",
#     1345 : "Cayman Islands",
#     1441 : "Bermuda",
#     1473 : "Grenada",
#     1649 : "Turks and Caicos Islands",
#     1658 : "Jamaica",
#     1876 : "Jamaica",
#     1664 : "Montserrat",
#     1721 : "Sint Maarten",
#     1758 : "Saint Lucia",
#     1767 : "Dominica",
#     1784 : "Saint Vincent and the Grenadines",
#     1809 : "Dominican Republic",
#     1829 : "Dominican Republic",
#     1849 : "Dominican Republic",
#     1868 : "Trinidad and Tobago",
#     1869 : "Saint Kitts and Nevis",
#     20 : "Egypt",
#     211 : "South Sudan",
#     212 : "Morocco (including Western Sahara)",
#     213 : "Algeria",
#     216 : "Tunisia",
#     218 : "Libya",
#     220 : "Gambia",
#     221 : "Senegal",
#     222 : "Mauritania",
#     223 : "Mali",
#     224 : "Guinea",
#     225 : "Ivory Coast",
#     226 : "Burkina Faso",
#     227 : "Niger",
#     228 : "Togo",
#     229 : "Benin",
#     230 : "Mauritius",
#     231 : "Liberia",
#     232 : "Sierra Leone",
#     233 : "Ghana",
#     234 : "Nigeria",
#     235 : "Chad",
#     236 : "Central African Republic",
#     237 : "Cameroon",
#     238 : "Cape Verde",
#     239 : "São Tomé and Príncipe",
#     240 : "Equatorial Guinea",
#     241 : "Gabon",
#     242 : "Republic of the Congo",
#     243 : "Democratic Republic of the Congo",
#     244 : "Angola",
#     245 : "Guinea-Bissau",
#     246 : "British Indian Ocean Territory",
#     247 : "Ascension Island",
#     248 : "Seychelles",
#     249 : "Sudan",
#     250 : "Rwanda",
#     251 : "Ethiopia",
#     252 : "Somalia",
#     253 : "Djibouti",
#     254 : "Kenya",
#     255 : "Tanzania",
#     256 : "Uganda",
#     257 : "Burundi",
#     258 : "Mozambique", 
#     260 : "Zambia",
#     261 : "Madagascar",
#     262 : "Réunion",
#     263 : "Zimbabwe",
#     264 : "Namibia",
#     265 : "Malawi",
#     266 : "Lesotho",
#     267 : "Botswana",
#     268 : "Eswatini",
#     269 : "Comoros",
#     27 : "South Africa",
#     290 : "Saint Helena",
#     291 : "Eritrea",
#     297 : "Aruba",
#     298 : "Faroe Islands",
#     299 : "Greenland",
# }
'''

transactionFile = open("transaction.txt", "w")
for row in range(random.randint(3,10)):
    for column in range(random.randint(2,5)):
        if column != 0:
            transactionFile.write("|")
        transactionFile.write(f"{hex(random.randint(1,999))}"[2:].zfill(3)+f"{hex(random.randint(101010,601020))}"[2:].zfill(5)+f"{hex(random.randint(1,4294967295))}"[2:].zfill(8)+f"{hex(random.randint(1,68719476735))}"[2:].zfill(9)+f"{hex(random.randint(0,123199399))}"[2:].zfill(7))
    transactionFile.write("\n")
transactionFile.close()