function songDecoder(song){
  var getWub = "WUB";
  var newSong = '';
  var sections = song.split(getWub);
  console.log(sections);
  for (i=0; i<sections.length; i++) {
    if (sections[i] !== '') {
      newSong = newSong + ' ' + sections[i];
    }
  };
  newSong=newSong.trim()
  return newSong;
}
