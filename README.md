# REACH-Blockchain-SupplyChainProject<br/>
The project is build by REACH blockchain which can enhancing traceability of material and  in supply chain <br/>
<br/>
This project requires:<br/>
1. backend<br/>
2. frontend for backend - make use of algo explorer api<br/> 
3. Product ID decoder<br/>
4. search function for previous blockchain<br/>
<br/>
Backend<br/>
- deal only with transaction and product id<br/>
- will need to include product id related to blockchain<br/>
<br/>
Frontend<br/>
<br/>
Product ID decoder<br/>
- database to store product id,<br/>
- currently need decode country code, sector code and time<br/>
- manufacturer ID and product bit need to add individually, (note for presentation we can release an api for a company to automatic add their own product)<br/>
<br/>
Product ID - 32bit hex code<br/>
Country Code        2 bit 196 country<br/>
Sector              6 bit https://en.wikipedia.org/wiki/Global_Industry_Classification_Standard OCT -> HEX converstion <br/>
Manufacturer ID     8 bit<br/>
Product bit         9 bit<br/>
Time                7 bit MMDDYY_NN M=month D=day Y=year _=Y/M/D N=number (shelf life or warraty period) DEC -> HEX<br/>
