$(document).ready(function () {
  var data = {
    Shirt: [{
      text: 'Red',
      value: 'Red'
    }, {
      text: 'Orange',
      value: 'Orange'
    }],
    Jeans: [{
      text: 'Blue',
      value: 'Blue'
    }, {
      text: 'Gray',
      value: 'Gray'
    }]
  };
  var product = '',
    color = '',
    emptySelect = '<option value="n/a">n/a</option>';
  product += emptySelect;
  for (i in data) {
    product += '<option value="' + i + '">' + i + '</option>';
  }
  $('#product').append(product);

  color += emptySelect;
  $('#color').append(color);
  $('#product').on("change", addColors);

  function addColors() {
    var pickedValue = $("#product").val();
    if (data.hasOwnProperty(pickedValue)) {
      $('#color').empty();
      color = '';
      color += emptySelect;
      for (i in data[pickedValue]) {
        var pickedColor = data[pickedValue][i];
        color += '<option value="' + pickedColor['value'] + '">' + pickedColor['text'] + '</option>';
      }
      $('#color').append(color);
      color = "";
      console.log(pickedValue);
    };
  }
  $('#color').on('change', addImage);



  function addImage() {
    var pickedColor = $("#color").val();
    var src = '';
    if (pickedColor !== 'n/a') {
      var src = '../JQUERY-master/img/' + $('#product').val() + '_' + $('#color').val() + '.jpg';
    } else {
      var src = '';
    }
    $('#img_wrap').empty();

    if (src !== '') {
      $('#img_wrap').empty();
      var element = '<img alt ="photo" src="' + src + '"/>';
      $('#img_wrap').append(element);
    }
  }
  $('#add').on('click', addToCart);

  function addToCart() {
    var clone = $('#img_wrap').clone();
    clone.appendTo('#cart');
  }
});