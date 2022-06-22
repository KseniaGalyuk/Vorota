ymaps.ready(map);

function map() {

	var myMap = new ymaps.Map('work-map', {
		center: [57.146296, 65.55604],
		zoom: 13,
		controls: []
	});

	myMap.geoObjects
		.add(new ymaps.Placemark([57.146296, 65.55604], {}, {
			preset: 'islands#icon',
			iconColor: '#0b5ab9'
		}))
}