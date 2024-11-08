const products_arr = [];

function taskFunction() {

  const myDate = document.getElementById('myDate').value;
  const myProduct = document.getElementById('myProduct').value;
  const unitPrice = document.getElementById('unitPrice').value;
  const qty = document.getElementById('qty').value;

  let product_object = {
    product_date: myDate,
    product_name: myProduct,
    product_unit_price: unitPrice,
    product_quantity: qty
  }

  products_arr.push(product_object);
  refresh_products();
};



function refresh_products() {

  const table_data = document.getElementById('table_data');

  
  const delete_btn = ` <i class="fa fa-remove " onclick="deleteRow(this)"></i>`;

  table_data.innerHTML = '';

  for (item in products_arr) {

    let arr_item = products_arr[item];

    table_data.innerHTML = table_data.innerHTML + `<tr id = 'product_${item}'>
                                                    <td><input id = 'date_${item}' type='date' disabled value='${arr_item.product_date}' class='text-center'/></td>
                                                    <td><input id = 'name_${item}' disabled value='${arr_item.product_name}' class='text-center'/></td>
                                                    <td><input id = 'unit_${item}' disabled value='${arr_item.product_unit_price}'class='text-center' /></td>
                                                    <td><input id = 'qty_${item}' disabled value='${arr_item.product_quantity}'class='text-center' /></td>
                                                    <td>${arr_item.product_unit_price * arr_item.product_quantity}</td>
                                                    <td id='edit_${item}'><i class="fas fa-edit" onclick='editRow(${item})'></i></td>
                                                    <td>${delete_btn}</td>
                                                  </tr>`;
  }

};


//  javaScirpt deleteRow

function deleteRow(row) {
  var d = row.parentNode.parentNode.rowIndex;
  document.getElementById('first_Table').deleteRow(d);
}

// javascript for the search bar 

$(document).ready(function () {
  $("#firstInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table_data tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// javascript for the edit function 
//my first  edit the row


function editRow(tr_id){

  let editId = 'edit_'+tr_id;

  $('#'+editId).html(`<i class='fas fa-check-circle' onclick='updateRow(${tr_id})'></i>`)

  let selectedRow = $('#product_'+tr_id+' input');
  
  selectedRow.prop('disabled', false);

}

function updateRow(product_id){
  let editId = 'edit_'+product_id;
  let myDate = $('#date_'+product_id).val();
  let myProduct = $('#name_'+product_id).val();
  let unitPrice = $('#unit_'+product_id).val();
  let qty = $('#qty_'+product_id).val();

  let selectedRow = $('#product_'+product_id+' input');


  products_arr[product_id] = {
    product_date: myDate,
    product_name: myProduct,
    product_unit_price: unitPrice,
    product_quantity: qty
  }

  $('#'+editId).html(`<i class='fas fa-edit' onclick='editRow(${product_id})'></i>`);
  selectedRow.prop('disabled', true);
  refresh_products();

}













