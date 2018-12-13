const freshDeck = createDeck();
let theDeck = freshDeck.slice();
// blackjack deal function
$('.deal-button').click(()=>{
    // console.log("User clicked on the deal button")
    // we need a deck!
    // we have a deck. we need to shuffle it!
    shuffleDeck(theDeck);
})

function createDeck(){
    // I am a local variable. No one knows about this var, but me!
    let newDeck = [];
    // Card = suit letter + value
    const suits = ['h','s','d','c'];
    // Outer loop is for each suit
    // a foreach loop takes 1 arg: function
    // that function gets 2 args:
    // 1. what to call this element in loop
    // 2. index loop is on
    suits.forEach((s,index)=>{
        // inner loop for card value
        for(let c = 1; c <= 13; c++){
            newDeck.push(`${c}${s}`)
        }
    })
    // console.log(newDeck)
    return newDeck;
}

function shuffleDeck(aDeckToBeShuffled){
    // Loop. A lot. Like those machines in casinos that make 
    // funny noises.
    // When the loop (lots of times) is document, the array 
    // (deck) will be shuffled
    for(let i = 0; i < 100000; i++){
        let rand1 = Math.floor(Math.random() * 52);
        let rand2 = Math.floor(Math.random() * 52);
        // we need to switch aDeckToBeShuffled[rand1] with
        // aDeckToBeShuffled[rand2].
        // BUT, we have to save the value of one of them so
        // we can keep it for later
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2]
        aDeckToBeShuffled[rand2] = card1Defender;
    }
    console.log(aDeckToBeShuffled)
}