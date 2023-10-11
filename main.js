const cards = document.querySelectorAll(".hidden");
const resetBtn = document.getElementById("resetBtn");
const score = document.getElementById("score");

let card1 = null;
let card2 = null;
let clickCount = 0;

for(i=0; i<cards.length; i++)
{
    // e.target.className = "revealed";
        //card1
        // if(card1 === null)
        // {
        //     e.target.className = "revealed";
        //     card1 = e.target;
        //     console.log(card1);
        //     clickCount++;
        // }
        // else if(card2 === null)
        // {
        //     e.target.className = "revealed";
        //     card2 = e.target;
        //     clickCount++;
        //     setTimeout("checkMatch();", 300);
        // }
    temp = cards[i];
    temp.addEventListener("click", (e)=>{ //e references temp(the card)
        card1 === null
        ? ((e.target.className = "revealed"), (card1 = e.target), clickCount++, displayScore())
        : card2 === null? ((e.target.className = "revealed"),(card2 = e.target),
        clickCount++, displayScore(),
        setTimeout(checkMatch, 300))
        : null;
    });
}

function checkMatch()
{
    if(card1.src === card2.src)
    {
        //resets the cards
        card1 = null;
        card2 = null;
    }
    else
    {
        //flips the cards over
        card1.className = "hidden";
        card2.className = "hidden";

        //resets the cards
        card1 = null;
        card2 = null;
    }
}

resetBtn.addEventListener("click",()=>{
    for(i=0; i < cards.length; i++)
    {
        cards[i].className = "hidden";
    }
    clickCount = 0;
    displayScore();
});

function displayScore()
{
    score.innerHTML = `Score: ${clickCount}`;
}





