//VARIAVEL COM OS DADOS
var tableData = []

function myFunction() { //TESTE
 document.getElementById("demo").innerHTML = "Paragraph changed.";
}

//FUNÇÃO QUE CRIA TABELA A PARTIR DE ARRAY 2D
function createTable(tableData) {  
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

//USER INPUT DOS DADOS E ALTERA O ARRAY 2D
function createArray(){
	var address = window.prompt("Enter your wallet addres: ");
	var previousMeasure = window.prompt("Last month metering in kWh: ");
	var actualMeasure = window.prompt("Actual month metering in kWh ");
	var differenceMeasure = actualMeasure - previousMeasure;
	var arrayMeasure = [address, previousMeasure, actualMeasure, differenceMeasure]
	tableData.push(arrayMeasure)
	return alert("Value added")

}

//WIP: MOSTRA OS DADOS DO VETOR 2D
function showArray(){
	/*var items = [
		[1, 2],
		[3, 4],
		[5, 6]
		];*/
	return alert(items[0][1])
	
	}

