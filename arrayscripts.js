function print(html) {
  document.write(html);
}

var playlist = [
	['Billie Jean', 'Michael Jackson'],
	['Smooth Criminal', 'Michael Jackson'],
	['Little Red Corvette', 'Prince'],
	['Purple Rain', 'Prince'],
	['Space Oddity', 'David Bowie'],
	['Under Pressure', 'David Bowie']
]

function printSongs( songs ) {
  var songsHTML = '<ol>';
  for (var i = 0; i < songs.length; i += 1) {
    songsHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  songsHTML += '</ol>';
  print(songsHTML);
}

















printSongs(playlist);










// ARRAY EXAMPLES
// var shoppingList = ['bacon', 'coffee', 'eggs'];
// shoppingList.push('pineapple', 'fruity pebbles');
// shoppingList.unshift('milk', 'honey');
