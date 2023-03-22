var myArray = 
		[
			{
				"id": 1,
				"name": "test product1",
				"price": 12.50,
				"tags": ["TRADE A", "ice"],
				"vendor":"Vendor 5",
				"discount" : 0
			},
			{
				"id": 2,
				"name": "test product2",
				"price": 42.50,
				"tags": ["TRADE B", "ice2"],
				"vendor":"Vendor 4",
				"discount" : 0
			},
			{
				"id": 3,
				"name": "test product3",
				"price": 200.00,
				"tags": ["TRADE C", "test"],
				"vendor":"Vendor 3",
				"discount" : 3
			},
			{
				"id": 4,
				"name": "test product4",
				"price": 52.50,
				"tags": ["TRADE C", "test"],
				"vendor":"Vendor 2",
				"discount" : 0
			},
			{
				"id": 5,
				"name": "test product5",
				"price": 712.50,
				"tags": ["TRADE D", "test"],
				"vendor":"Vendor 1",
				"discount" : 0
			},
			{
				"id": 6,
				"name": "test product6",
				"price": 17.00,
				"tags": ["TRADE A", "test"],
				"vendor":"Vendor 3",
				"discount" : 12
			},
			{
				"id": 7,
				"name": "test product7",
				"price": 55.00,
				"tags": ["TRADE A", "test"],
				"vendor":"Vendor 3",
				"discount" : 12
			},
			{
				"id": 8,
				"name": "test product11",
				"price": 37.00,
				"tags": ["TRADE D", "test"],
				"vendor":"Vendor 4",
				"discount" : 12
			},
			{
				"id": 9,
				"name": "test product9",
				"price": 82.00,
				"tags": ["TRADE C", "test"],
				"vendor":"Vendor 4",
				"discount" : 34
			},
			{
				"id": 10,
				"name": "test product10",
				"price": 52.00,
				"tags": ["TRADE B", "test"],
				"vendor":"Vendor 2",
				"discount" : 25
			},
			{
				"id": 11,
				"name": "test product22",
				"price": 102.00,
				"tags": ["TRADE B", "test"],
				"vendor":"Vendor 1",
				"discount" : 25
				
			},
			{
				"id": 12,
				"name": "test product457",
				"price": 172.50,
				"tags": ["TRADE B", "test"],
				"vendor":"Vendor 4",
				"discount" : 0
			},
			{
				"id": 13,
				"name": "test product15",
				"price": 100.00,
				"tags": ["TRADE D", "test"],
				"vendor":"Vendor 5",
				"discount" : 12
			},
			{
				"id": 14,
				"name": "test product33",
				"price": 99.50,
				"tags": ["TRADE D", "test"],
				"vendor":"Vendor 5",
				"discount" : 12
			},
			{
				"id": 15,
				"name": "test product85",
				"price": 87.50,
				"tags": ["TRADE A", "test"],
				"vendor":"Vendor 5",
				"discount" : 0
			},
			{
				"id": 16,
				"name": "test product63",
				"price": 57.00,
				"tags": ["TRADE A", "test"],
				"vendor":"Vendor 1",
				"discount" : 29
			},
			{
				"id": 17,
				"name": "test product74",
				"price": 10.00,
				"tags": ["TRADE C", "test"],
				"vendor":"Vendor 2",
				"discount" : 0
			},
			{
				"id": 18,
				"name": "test product102",
				"price": 412.50,
				"tags": ["TRADE D", "test"],
				"vendor":"Vendor 3",
				"discount" : 56
			},
			{
				"id": 19,
				"name": "test product358",
				"price": 112.50,
				"tags": ["TRADE B", "test"],
				"vendor":"Vendor 4",
				"discount" : 0
			},
			{
				"id": 20,
				"name": "test product568",
				"price": 102.00,
				"tags": ["TRADE B", "test"],
				"vendor":"Vendor 5",
				"discount" : 15
			},
			{
				"id": 21,
				"name": "test product475",
				"price": 52.00,
				"tags": ["TRADE A", "test"],
				"vendor":"Vendor 3",
				"discount" : 12
			},
			{
				"id": 22,
				"name": "test product28",
				"price": 32.00,
				"tags": ["TRADE C", "test"],
				"vendor":"Vendor 2",
				"discount" : 0
			},
			{
				"id": 23,
				"name": "test product1405",
				"price": 12.00,
				"tags": ["TRADE B", "test"],
				"vendor":"Vendor 4",
				"discount" : 0
			},
			{
				"id": 24,
				"name": "test product389",
				"price": 584.50,
				"tags": ["TRADE D", "test"],
				"vendor":"Vendor 1",
				"discount" : 0
			},
			{
				"id": 25,
				"name": "test product555",
				"price": 67.00,
				"tags": ["TRADE D", "test"],
				"vendor":"Vendor 5",
				"discount" : 0
			},
			{
				"id": 26,
				"name": "test product444",
				"price": 132.50,
				"tags": ["TRADE A", "test"],
				"vendor":"Vendor 5",
				"discount" : 0
			},
			{
				"id": 27,
				"name": "test product333",
				"price": 42.50,
				"tags": ["TRADE B", "test"],
				"vendor":"Vendor 2",
				"discount" : 0
			}
		
		
		
	]

buildTable(myArray);


	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].id}</td>
							<td>${data[i].name}</td>
							<td >${data[i].price}</td>
							<td>${data[i].tags}</td>
							<td>${data[i].vendor}</td>
							<td>${data[i].discount}</td>
                            <td><a class="btn btn-primary">add item</a>
					  </tr>`
			table.innerHTML += row

		}
	}
	
let addButtons=document.getElementsByClassName('btn-primary');
 let mainbox=document.getElementsByClassName('tabledata')[0];
 let removebutton=document.getElementsByClassName('btn-danger');
for(let i=0;i<addButtons.length;i++){
	addButtons[i].addEventListener('click',addCarts)
}
 function addCarts(event){
	 let btn=event.target;
	 let btn_parent=btn.parentElement.parentElement;
	let idNumber=btn_parent.children[0].innerText;
	let name=btn_parent.children[1].innerText;
	let price=btn_parent.children[2].innerText;
	let tags= btn_parent.children[3].innerText;
	let vendor= btn_parent.children[4].innerText;
	let discount= btn_parent.children[5].innerText;
    let discountedprice=(price-(price*discount/100));

	let itembox=document.createElement('tr')
	itembox.innerHTML=`
	<th scope="row">${idNumber}</th>
	<td>${price}</td>
	<td>${discount}</td>
	<td class="disconted">${discountedprice}</td>
	<td>${vendor}</td>
	<td><button class="btn btn-danger">remove</button></td>`
	mainbox.append(itembox);
	for(i=0;i<removebutton.length;i++){
		removebutton[i].addEventListener('click',removedata)
	}
	getTotal()

 } 

function getTotal(){
	let total=0;
	let ftotal=document.getElementsByTagName('footer')[0]
	let grandtotal=document.getElementsByClassName('disconted');
	for(i=0;i<grandtotal.length;i++){
		let all_price=Number(grandtotal[i].innerText.replace('$',''));
		total+=all_price;
	}
	ftotal.innerText="TOTAL AMOUNT RS: "+total;
	ftotal.style.fontWeight='600'
	ftotal.style.fontSize='60px'
}
function removedata(event){
	let btn=event.target;
	let btn_parent=btn.parentElement.parentElement;
	let del=btn_parent.remove();
	getTotal();

}