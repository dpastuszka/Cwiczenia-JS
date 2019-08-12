(function ziemniaczek() {

var hotel = {
    name : 'Hotel',
    roomPrice: 500,
    discount: 30,
    offerPrice: function () {
        var offerRate = this.roomPrice * ((100 - this.discount) / 100);
        return offerRate;
    }
}

var hotelName, roomPrice, specialPrice;

hotelName = getElementById('hotelName');
roomPrice = getElementById('roomPrice');
specialPrice = getElementById('specialPrice');

hotelName.textContent = hotel.name;
roomPrice.textContent = hotel.roomPrice.toFixed(2) + ' zł';

specialPrice.textContent = hotel.offerPrice() + ' zł';

});
