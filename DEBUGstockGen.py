import random

argumentFile = open("argument.txt", "w")
DEBUGproduct = open("DEBUGstoreProduct.txt", "r")
index = 1
#read file and write loop
firstCycle = True

for line in DEBUGproduct:
    #format line
    if firstCycle:
        firstCycle = False
    else:
        argumentFile.write("\n")
    
    #assignement of code
    #60|30101020|27|29|110422210
    argumentFile.write(f'60|30101020|27|{index}|111{random.randint(0,9)}22{random.randint(1,2)}{random.randint(10,24)}')
    index += 1