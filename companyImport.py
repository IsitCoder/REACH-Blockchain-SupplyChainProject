stockFile = open('companyStock.txt', 'a')
argumentFile = open('argument.txt', 'r')

for line in argumentFile:#argument is in IDgen.py format
    stockFile.write(f'{line.strip()}\n')
    
argumentFile.close()
stockFile.close()