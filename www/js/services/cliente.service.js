SERVICES.factory('ClientesService', function() {
  var clientes = [{
    id: 0,
    name: 'Ben',
    lastText: 'akgfklg',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    getAllClientes: function() {
      return clientes;
    }
  };
});
