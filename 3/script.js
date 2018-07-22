$('#calc').on('click', function () {
    var sumProd = 0.00;
    var sumHouse = 0.00;
    $('.item').each(function (i) {
        var name = $(this).find('.name').val();
        var type = $(this).find('.type').val();
        var price = $(this).find('.price').val();
        var quantity = $(this).find('.quantity').val();
        if (price.length !== 0 && quantity.length !== 0) {
            if (type === 'house') {
                sumHouse = sumHouse + parseFloat(price) * parseFloat(quantity);
            }
            if (type === 'product') {
                sumProd = sumProd + parseFloat(price) * parseFloat(quantity);
            }
        }
    });


    $('#prodSum').text(sumProd);
    $('#houseSum').text(sumHouse);
});







// $('#add').on('click', function(){
//     var $item = $('.item').last();
//     var $clone = $item.clone();
//     $item.after($clone);
//     $item.after('<br>');
//     calcSum();
// });
// calcSum();