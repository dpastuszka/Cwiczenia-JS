(function () {

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

var expiryMsg;
var today;
var elEnds;

function offerExpires(today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    weekFromToday = newDate(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    dayNames = ['niedzielę', 'poniedziałek', 'wtorek', 'środę', 'czwartek', 'piątek', 'sobotę'];
    monthNames = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];

    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    expiryMsg = 'Oferta wygasa w: ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
}

today = newDate();

elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);

}());
