"""
32bit hex code
Country Code        3 bit Country Code
Sector              5 bit https://en.wikipedia.org/wiki/Global_Industry_Classification_Standard OCT -> HEX converstion
Manufacturer ID     8 bit
Product bit         9 bit
Time                7 bit MMDDYY_NN M=month D=day Y=year _=Y/M/D N=number (shelf life or warraty period) DEC -> HEX
"""

productCode = []
countryID = []
sectorID = []
manufacturerID = []
productID = []
timeID = []

transactionFile = open("transaction.txt","r")
for line in transactionFile:
    #split product and material ID
    line = line.strip().split("|")
    product = line.pop(0)
    
    tempCountryID = []
    tempSectorID = []
    tempManufacturerID = []
    tempProductID = []
    tempTimeID = []
    
    #get product id
    for l in line:
        tempCountryID.append(int(l[0:3], base=16))
        tempSectorID.append(int(l[3:8], base=16))
        tempManufacturerID.append(int(l[8:16], base=16))
        tempProductID.append(int(l[16:25], base=16))
        tempTimeID.append(int(l[25:32], base=16))
        
    productCode.append([product,line])
    countryID.append([int(product[:3], base=16), tempCountryID])
    sectorID.append([int(product[3:8], base=16), tempSectorID])
    manufacturerID.append([int(product[8:16], base=16), tempManufacturerID])
    productID.append([int(product[16:25], base=16), tempProductID])
    timeID.append([int(product[25:], base=16), tempTimeID])
        
transactionFile.close()

print(productCode)
print("\n\n")
print(countryID)
print(sectorID)
print(manufacturerID)
print(productID)
print(timeID)