function deleteItem(e){
  console.log("delete");
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}



function getTotalPrice() { 
  sum = 0
  for(i = 0; i = 1; i++){
  var precioElemento = document.getElementsByClassName('price')[0]
  var cantidadElemento = document.getElementsByClassName("quantity")[0].value
  sum = precioElemento * cantidadElemento
  document.getElementsByClassName("totalPrice")[0].innerHTML = sum
  }
  
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

};
