const models = {
    hotelModel: require('./hotel/hotels.model'), 
    hotelPoiModel: require('./hotel/hotels_poi.model'),
    poiHotelModel: require('./hotel/pois_hotel.model'),
    amenityRoomModel: require('./hotel/amenities_room.model'),
    roomHotelDateModel: require('./hotel/rooms_hotel_date.model'),
    guestModel: require('./guest/guest.model'),
    reservationConfirmationModel: require('./guest/revervation_confirmation.model'),
    reservationGuestModel: require('./guest/revervation_guest.model'),
    reservationHotelModel: require('./guest/revervation_hotel.model')
}

module.exports = models;