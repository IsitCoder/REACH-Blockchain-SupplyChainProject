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
- input(argument.txt) output(decoded.txt)<br/>
- companyImport ([product ID],None) <br/>
- companyOperation (extra, business operation will deal with this part)<br/>
- purchasing (TBA) ([product bit], productID)<br/>
- IDgen ([prodcutID argument with '|' delim], productID) - symmetric encoding<br/>
- IDread ([productID], productID argument with '|' delim) - symmetric decoding<br/>
<br/>
Database file naming<br/>
- companyDatabase.txt [productID|materialID|...|materialID] (all currently stock with materialID)<br/>
- companyStock.txt [productID|amount] (fast access for company stock)<br/>
- companyProduct.txt [productID|name|price] (frontend) (front end need to access this to get all product sold in company, front end need to able to edit this)<br/>
- argument.txt [no format] (front end output to system input)<br/>
- decoded.txt [no format] (system output to front end input)<br/>
- transaction.txt [product ID] (extra) (currenly have no function) (need to be deleted)<br/>
- transactionDatabase.txt [product ID|blockchainID](frontend) (record all seling transaction with product ID and blockchain id)<br/>
<br/>
Frontend<br/>
- Build a complete website for user to purchase item.<br/>
- Once the user purchase an item is purchased, it will run the reach api the return product id and transaction id<br/>
- Frontend also have a search function to decode or encode the product id by running IDgen.py or IDread.py<br/>
<br/>
Product ID decoder<br/>
- database to store product id,<br/>
- currently need decode country code, sector code and time<br/>
- manufacturer ID and product bit need to add individually, (note for presentation we can release an api for a company to automatic add their own product)<br/>
<br/>
Country Code - 3 bit Country Code<br/>
Sector - 7 bit https://en.wikipedia.org/wiki/Global_Industry_Classification_Standard OCT -> HEX converstion<br/>
Manufacturer ID - 7 bit<br/>
Product bit  - 8 bit<br/>
Time  - 7 bit MMDDYY_NN M=month D=day Y=year _=Y/M/D N=number (shelf life or warraty period) DEC -> HEX<br/>
<br/>
Country Code<br/>
1 North American Numbering Plan<br/>
2 Mostly Africa<br/>
3-4 Europe<br/>
5 Americas outside the NANP<br/>
6 Southeast Asia and Oceania<br/>
7 Russia and neighboring countries<br/>
8 East Asia and special services<br/>
9 Mostly Middle East and parts of southern Asia<br/>
