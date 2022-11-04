stockFile = open('companyStock.txt', 'a')
decodedFile = open('decoded.txt', 'r')

for line in decodedFile:#argument is in IDgen.py format
    stockFile.write(f'{line.strip()}\n')
    
decodedFile.close()
stockFile.close()