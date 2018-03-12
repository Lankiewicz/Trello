$(function() {
    // here we will put the code of our application
})
// 1. Instrukcja, która sprawi, że kod naszej aplikacji zacznie się wykonywać dopiero po załadowaniu całego drzewa DOM.
function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
/*2. Funkcja "randomString" generuje id, które składa się z ciągu 10 losowo wybranych znaków.
Podsumowując: funkcja losuje 10 elementów z tablicy znaków chars i składa je w jeden string. 
O prawdopodobieństwo wystąpienia duplikatu w identyfikatorze nie musimy się martwić :)
*/
function Column(name) {
    var self = this; // useful for nested functions

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();
    //Metoda dla klasy Column
Column.prototype = {
    addCard: function(card) {
      this.$element.children('ul').append(card.$element);/*wskazuje na div.column. Tak więc za pomocą this.$element.children('ul') 
      dostaliśmy się do właściwej listy. Teraz możemy podpiąć do niej kartę za pomocą append(card.$element).*/
    },
    removeColumn: function() { // metoda za pomocą której będzie można usuwać kolumnę 
      this.$element.remove();// za pomocą this.$element.remove() usuwamy naszą kolumnę w momencie w któym przyciśniemy przycisk "X"
    }
};
    function createColumn() {
    var $column = $('<div>').addClass('column');
	var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
	var $columnCardList = $('<ul>').addClass('column-card-list');
	var $columnDelete = $('<button>').addClass('btn-delete').text('x');
	var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');
	// Dodanie eventu:
	$columnDelete.click(function() {
        self.removeColumn();
});
    $columnAddCard.click(function() {
        self.addCard(new Card(prompt("Enter the name of the card"))); // zastosowanie "self" funkcja, która jest przekazana jako parametr metody click
});
	//Konstrukcja elementów kolumn:    
    $column.append($columnTitle) //Łączenie wszystkich węzłów w odpowiedniej kolejności (36-40)
        .append($columnDelete)
        .append($columnAddCard)
        .append($columnCardList);
    //Return stworzonych kolumn    
	return $column;
};
}	
    }
  }
  /* 3. Tworzymy klasę Column:
  standardowe elementy: name, $element
  Przy tworzeniu nowej instancji klasy Column tworzony jest też element jQuery. Dzieje się to po wywołaniu funkcji createColumn().
  Elementy funkcji createColumn:
  1. $element.$column - element będzie divem - dodajemy do niej klasę o takiej samej nazwie 
  2. $columnTitle = $('<h2>').addClass('column-title').text(self.name); - klasa column-title oraz wypełniamy tekstem za pomocą metody "text",
  3. $columnCardList = $('<ul>').addClass('column-card-list'); - tworzymy element listy
  4. $columnDelete = $('<button>').addClass('btn-delete').text('x');
	 $columnAddCard = $('<button>').addClass('add-card').text('Add a card'); - możliwość dodawania nowej karty i usuwania listy.
   */
   /* 4. Podpinienie zdarzeń:
   1. Kasowanie kolumny po klienknięciu w przycisk (LINIA 30-35)
   */
    function Card(description) {
		var self = this;

	    this.id = randomString();
	    this.description = description;
	    this.$element = createCard();
	    //Tworzenie prototypu
	    Card.prototype = {
		removeCard: function() {
		this.$element.remove();
}
}

    function createCard() {
	    var $card = $('<li>').addClass('card');
	    var $cardDescription = $('<p>').addClass('card-description').text(self.description);
	    var $cardDelete = $('<button>').addClass('btn-delete').text('x');
	    	//Dodanie eventu:
	    	$cardDelete.click(function(){
        		self.removeCard();
});
	    	$card.append($cardDelete)
				.append($cardDescription);

			return $card;
    }
}
var board = {
    name: 'Kanban Board',
    addColumn: function(column) {
      this.$element.append(column.$element);
      initSortable();
    },
    $element: $('#board .column-container')
};

//Kontunuuj obiekt tablicy.

