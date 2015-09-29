/**
 * Created by session2 on 9/28/15.
 */
function ggb17() {
    var attack = prompt("would you like to battle christopher chu?").toLowerCase();
    //changed the texxt
    if (attack === 'yes') {
        var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
        var youHit = Math.floor(Math.random() * 1.6);
        var damageThisRound = Math.floor(Math.random() * 5 + 1);
        var totalDamage = 0;
        //made the game harder to win

        while (slaying) {
            if (youHit) {
                console.log("You hit christopher chu and did " + damageThisRound + " damage!");
                totalDamage += damageThisRound;
                //changed text again

                if (totalDamage >= 4) {
                    console.log("You did it! You slew the chu!");
                    slaying = false;
                } else {
                    youHit = Math.floor(Math.random() * 29);
                }
            } else {
                console.log("The chu burninates you! You're toast.");
                slaying = false;
            }
            //changed text
            ggb17();
        }
    }

    else {
        console.log("good choice it is very hard to defeat christopher")
        //change text
    }

}
ggb17();


