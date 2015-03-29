var parseWordList = function (wordList){

  var lines = wordList.split('\n');
  var preTree = Tree(null);

	for(var i = 0; i < lines.length; i++)
  {
    parseLine(lines[i], preTree);
  }

  return preTree;
}

var parseLine = function (line, preTree){

    var child = preTree;

    for(var i = 0; i < line.length; i++)
    {
      if(!(child.getChild(line[i])))
      {
        child = child.addChild(line[i]);
      }
      else
      {
        child = child.getChild(line[i]);
      }
    }
    child.addChild(null);
}

var scrabbleMatch = function (letters, preTree){
  var words = [];

  var inner = function(node, letters, accumulator)
  {
    console.log(accumulator);
    var copyLetters = Array.prototype.slice.call(letters);
    for(var i = 0; i < copyLetters.length; i++)
    {
      if(node.getChild(null))
      {
        words.push(accumulator);
      }
      var child = node.getChild(letters[i]);
      if(child)
      {
        accumulator += child.value;
        
        copyLetters.splice(i,1);
        inner(child, copyLetters, accumulator);
      }
    }
  }
  inner(preTree, letters, "");
  return words;
}