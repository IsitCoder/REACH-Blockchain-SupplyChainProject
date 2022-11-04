import random

databaseFile = open('companyDatabase.txt', 'a')
stockFile = open('companyStock.txt', 'r')
productFile = open('companyProduct.txt', 'r')
stock = []

for item in stockFile:
    stock.append(item.strip().split('|').pop(0))
    
stockItemLen = len(stock)

#read file and write loop
index = 1
for item in productFile:
    for serving in range(random.randint(5,12)):
        stockClone = stock.copy()
        databaseFile.write(f'{item.strip().split("|").pop(0)}')
        for material in range(random.randint(2,round(stockItemLen/2))):
            databaseFile.write(f"|{stockClone.pop(random.randint(0,len(stockClone)-1))}")
        databaseFile.write("\n")
databaseFile.close()
stockFile.close()
productFile.close()