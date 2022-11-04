"""
32bit hex code
Country Code        3 bit Country Code
Sector              7 bit https://en.wikipedia.org/wiki/Global_Industry_Classification_Standard OCT -> HEX converstion
Manufacturer ID     7 bit
Product bit         8 bit
Time                7 bit MMDDYY_NN M=month D=day Y=year _=Y/M/D N=number (shelf life or warraty period) DEC -> HEX
"""
#fileopen
argumentFile = open("argument.txt","r")
decodedFile = open("decoded.txt","w")

#read and write loop
firstCycle = True
for line in argumentFile:
    #format line
    if firstCycle:
        firstCycle = False
    else:
        decodedFile.write("\n")
        
    #decoder
    countryID = int(line[0:3], base=16)
    sectorID = int(line[3:10], base=16)
    manufacturerID = int(line[10:17], base=16)
    productID = int(line[17:25], base=16)
    timeID = int(line[25:32], base=16)
    
    #write decoded file back
    decodedFile.write(f'{countryID}|{sectorID}|{manufacturerID}|{productID}|{timeID}')
argumentFile.close()
decodedFile.close()
