let poemWordsEnglish = [
    "Fleas", "dream", "of buying themselves", "a dog", 
    "and the nobodies", "dream", "of escaping", "poverty,", 
    "that one", "magical day", "good luck", "will suddenly", "rain down on them,", 
    "that good luck", "will pour down", "in buckets.", 
    "but", "good luck", "doesn't rain down", "yesterday,", "today,", "tomorrow,", "or ever,", 
    "Good luck,", "doesn't even fall", "in a fine drizzle,", 
    "no matter", "how hard", "the nobodies", "summon it,", 
    "even if", "their left hand", "is tickling,", 
    "or if", "they begin", "the new day", "with their right foot,", 
    "or start", "the new year", "with a change", "of brooms.", 
    "The nobodies:", "nobody's children,", "owners", "of nothing.", 
    "The nobodies:", "the no-ones,", "the nobodied,", "running", "like rabbits,", "dying", "through life,",
    "screwed", "and fucked.", 
    "Who are not,", "but could be.", 
    "Who don't", "speak languages,", "but dialects.", 
    "Who don't", "have", "religions,", "but superstitions.", 
    "Who don't", "create art,", "but handicrafts.", 
    "Who don't", "have culture,", "but folklore.", 
    "Who are not", "human beings,", "but human resources.", 
    "Who do not", "have faces,", "but arms.", 
    "Who do not", "have names,", "but numbers.", 
    "Who do not", "appear in", "the history", "of the world,", 
    "but in the", "police blotter", "of the", "local paper.", 
    "The nobodies,", "who are", "not worth", "the bullet", "that kills them."
]

function shuffledUniqueNumbers( max ) {
    let numbers = Array.from({ length: max }, (_, i) => i );
    
    // Algoritmo de Fisher-Yates para barajar el array
    for (let i = numbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}

function translateRandomWord() {
    const totalWords = poemWordsEnglish.length;
    let contador = 0;
    let index_arr = shuffledUniqueNumbers( totalWords )
    return function(){
        if( contador >= totalWords ) 
            return;
        const randomIndex = index_arr[contador];
        contador++;
        const wordElement = document.getElementById(`word${randomIndex}`);
        wordElement.style.transition = "filter 0.5s";
        wordElement.style.filter = "blur(4px)";
        wordElement.style.color = "white"

        setTimeout(() => {
            wordElement.innerHTML = poemWordsEnglish[randomIndex];
            wordElement.style.filter = "blur(0px)"; 
        }, 200);
    }
  }
  
  setInterval(translateRandomWord(), 700);
  