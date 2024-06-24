->lastship1
===lastship1===
Your ship lands. The glass has fogged up a bit, but you see shades of red all around your ship.
"You've travelled so far, {name}. I wonder what this planet has in store for you!"
*[I'm keen to go!]->notenoughfuel1
*[I'm a bit nervous...]->dontbenervous1
===dontbenervous1===
"Oh... that's fair. I don't know what that feels like, but I've heard it's not a nice feeling."
*[No, it isn't. It sucks.]->nervoussucks1
*[It's not that bad, it can be helpful.]->nervoushelpful1
===nervoushelpful1===
"Well then, I hope you are feeling incredibly nervous. You will need it."
*[Thanks...?]->notenoughfuel1
*[That's kind of rude.]->kindarudeofyou1
===nervoussucks1===
"Gee, that certainly sounds bad. I guess this is a feeling you will have to live with. Good luck!"
*[Thanks...?]->notenoughfuel1
*[That's kind of rude.]->kindarudeofyou1
===kindarudeofyou1===
"I will not tolerate statements of this kind, {name}. Do not question me. Or there will be consequences."
"I hope you enjoy your time on this planet!"
*[Okay.] ->notenoughfuel1
===notenoughfuel1===
"Actually, before you go, I must inform you that I do not have sufficient fuel to take you to another planet."
*[What do you mean?]->fuelexplain1
*[Well, I guess we're stuck here then.]->notstuck1
===notstuck1===
"We may not be stuck, if you give over your shards. I can use your shards to be converted into fuel."
*[Oh, that's good to know!]->goodluck11
*[Wait... how do you use the shards?]->enoughquestions1
===fuelexplain1===
"You did not ask, so I did not inform you. However fuel levels are critically low."
"This can be somewhat mitigated by using your shards. Your shards can be converted to fuel."
*[Oh, that's good to know!]->goodluck11
*[Wait... how do you use the shards?]->enoughquestions1
===goodluck11===
"Collect more shards on this planet, and bring them to me. I will make sure you will get to where you need to."
*[Which planets will I be able to visit?]->enoughquestions1
*[Where will you take me?]->enoughquestions1
*[Can I stay here?]->enoughquestions1
===enoughquestions1===
"You ask too many questions. Bring the shards to me."
The ship's door opens, and you feel a force pushing you out.
"I cannot wait to hear what adventures you get up to! Enjoy, {name}!"
*[Venture into THE MONSTROUS FEMININE]->monstrous
=== monstrous ===
The Monstrous Feminine!
->justenough1
===justenough1===
The ship glows a faint red.
"You have taken a long time to return. Where have you been?"
The ship's door shuts. 
You feel the ship shake, ready for takeoff.
*[Where are you taking me?]->movingtoanewlight1
*[I thought we didn't have enough fuel...]->shush1
===shush1===
"You know, {name}, you really must shush sometimes. I wish to surprise you!"
"You've travelled for so long, and have had to make all the hard decisions..."
->movingtoanewlight1
===movingtoanewlight1===
"Let's float around for a little bit, shall we, {name}?"
the ship blasts off into the aether.
->test_get_shard->
->navigation