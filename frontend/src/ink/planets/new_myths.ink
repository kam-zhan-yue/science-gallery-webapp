===lastship===
Your ship lands. The glass has fogged up a bit, but you see shades of red all around your ship.
"You've travelled so far, {name}. I wonder what this planet has in store for you!"
*[I'm keen to go!]->notenoughfuel
*[I'm a bit nervous...]->dontbenervous
===dontbenervous===
"Oh... that's fair. I don't know what that feels like, but I've heard it's not a nice feeling."
*[No, it isn't. It sucks.]->nervoussucks
*[It's not that bad, it can be helpful.]->nervoushelpful
===nervoushelpful===
"Well then, I hope you are feeling incredibly nervous. You will need it."
*[Thanks...?]->notenoughfuel
*[That's kind of rude.]->kindarudeofyou
===nervoussucks===
"Gee, that certainly sounds bad. I guess this is a feeling you will have to live with. Good luck!"
*[Thanks...?]->notenoughfuel
*[That's kind of rude.]->kindarudeofyou
===kindarudeofyou===
"I will not tolerate statements of this kind, {name}. Do not question me. Or there will be consequences."
"I hope you enjoy your time on this planet!"
*[Okay.] ->notenoughfuel
===notenoughfuel===
"Actually, before you go, I must inform you that I do not have sufficient fuel to take you to another planet."
*[What do you mean?]->fuelexplain
*[Well, I guess we're stuck here then.]->notstuck
===notstuck===
"We may not be stuck, if you give over your shards. I can use your shards to be converted into fuel."
*[Oh, that's good to know!]->goodluck1
*[Wait... how do you use the shards?]->enoughquestions
===fuelexplain===
"You did not ask, so I did not inform you. However fuel levels are critically low."
"This can be somewhat mitigated by using your shards. Your shards can be converted to fuel."
*[Oh, that's good to know!]->goodluck1
*[Wait... how do you use the shards?]->enoughquestions
===goodluck1===
"Collect more shards on this planet, and bring them to me. I will make sure you will get to where you need to."
*[Which planets will I be able to visit?]->enoughquestions
*[Where will you take me?]->enoughquestions
*[Can I stay here?]->enoughquestions
===enoughquestions===
"You ask too many questions. Bring the shards to me."
The ship's door opens, and you feel a force pushing you out.
"I cannot wait to hear what adventures you get up to! Enjoy, {name}!"
*[Venture into NEW MYTHS]->newmyths
=== newmyths ==
You land in what seems to be a planet covered in crimson - as you look around you, all you can see is a dense forest. 
However, this forest isn't made of the trees or plants you've seen before. As your eyes adjust to the ruby haze, you notice that you are surrounded by streams of fabric. 
The fabric is beautifully woven, with shimmering embroidery that glints faintly as if glowing. 
You feel... warm. As if someone is holding you tightly, like a kiss on the cheek, like being cradled to sleep. 
As you wade through the layers of silk, you reach a clearing, where a lady sits, faintly sobbing. 
"What happened to you, my darling?", The woman whispers, as she cradles a piece of silk in her hands.
*[Ask the lady what's wrong.]->helpsilklady
*[Walk away, see what's beyond the silk.]->wandertosilk
===helpsilklady===
"Oh, hello... I'm just... well, look!" The lady shows you the silk. 
It has a large tear in the centre, and seems to have lost its colour around the tear.
"I... had an argument with my partner. And it didn't go well."
"When they left, I felt my silk tear. It's all my fault!"
"I don't know what to do..." The lady sheds a tear over the torn silk.
*[I can mend that! (OPEN ARTIST INVENTORY)]->artistmendsilk
*[Would you like some company?]->keephercompany
*[I don't know if I can help.]->canthelplady
===keephercompany===
"I think that would be nice..." the lady sniffles. 
You sit with her, and she tells a story to you. 
[DEVELOP FURTHER - LINK TO VIDEO EXHIBIT] ->followthesilk
===canthelplady===
"I understand..." the lady sniffles. 
[DEVELOP FURTHER - LINK TO VIDEO EXHIBIT]->followthesilk
===artistmendsilk===
"Oh, could you? I would be so eternally grateful!"
You pull out your red thread and needle. The red is a perfect match to the silk.
You get to work - the lady watches you in your mastery as you seamlessly make the silk whole again.
When you're finished, the thread glows. And the lady faintly smiles.
"It's not a complete fix, but I feel ready to fix the rest. I cannot thank you enough, friend."
She reaches into a little bag, and pulls out a small silk square with a gold star embroidered on the front. 
"Take this - follow the star, and you'll find where you need to be."
*[Thank you.] ->artistjourneyheart
===artistjourneyheart===
As you turn around to leave, the silk square in your hand glows. 
The glow engulfs you, and in a blink of an eye, you're transported.
As you look around, you notice you're in a cave, the walls made of the dense silk forestry you saw before. 
You have made it to the heart of the planet - the Fate. ->theheart
==followthesilk==
"The best adivce I can give you is to follow the silk - they all really do lead to the heart. 
"I wish you luck, friend. It was lovely to meet you."
You can spend as long as you'd like here, but when you're ready, follow the silk. 
*[I'm ready - Red Silk of Fate]->traveltotheheart
===wandertosilk===
You pass the lady, and continue further into the jungle of silk. 
A faint glow of different coloured lights start to appear in your vision. 
You head toward it, and you find what seems to be a light show, in all its brilliance and spectacle. 
The lights start to condense, and wash over one of the lines of silk, lighting up the pathway for a brief moment, and travels along the path into the distance. 
You feel called to the silk.
*[I touch the silk.]->touchthesilk
*[I follow the silk.]->followsilk2
==traveltotheheart==
You leave the light show, and make your way through the forest of silk. As you walk through, one particular silk catches your eye - it glows brighter than the others, and you can hear a soft hum, as if it calls to you. 
*[I touch the silk.]->touchthesilk
*[I follow the silk.]->followsilk2
==touchthesilk==
You touch the silk, and the warmth you have felt grows. What felt like a warm hug becomes a thick blanket of visible red glow, which covers you. 
The red glow suddenly starts to lift you off the ground, and takes you high above the red forest. As you are taken up into the sky, you look down to see the light show, and the crowd cheering along. 
Things feel small from up here. You feel calm. You gently land through the thickest part of the forest.
As you look around, you notice you're in a cave, the walls made of the dense silk forestry you saw before. 
You have made it to the heart of the planet - the Fate.->theheart
==followsilk2==
You follow the glowing silk - it takes you through a labyrinthine chase - the glow seems to move across the silk as if inviting you to a chase.
You pick up speed, pushing away wades of silk as you do. It fills you with pure joy, you almost forget that you're running. Eventually, your chase slows down as you near the thickest part of the forest.
As you look around, you notice you're in a cave, the walls made of the dense silk forestry you saw before. 
You have made it to the heart of the planet - the Fate.->theheart
==theheart==
"I have been waiting for you, young one."
You're taken by surprise, and the voice laughs.
"I know what you seek. You have been collecting many pieces of a past memory, and I wish to help you."
"But I will not give this away for free - The last time I let someone through, they stole my beloved star from me."
You wonder what this might mean.
*[Hang on... what is the star?]->starsilk
*[I'm sorry to hear.] ->riddleintro
===starsilk===
"If you must ask, I had made this star, preserved on the first silk brought to this planet. It heals the broken hearts of those who seek it."
"A lady came here to seek help... she knew its power, and stole it from me."
*[Do you mean this? (OPEN INVENTORY)] ->foundsilk1
*[I see.] ->riddleintro
===foundsilk1===
You present the starry silk that brought you here.
"Where... where did you find it?" The silk in your hand floats in the air.
"Thank you for returning it to me... you will be greatly rewarded!"
~get_good_shard()
->navigation
===riddleintro===
"No matter. Look around you, there is so much to learn from my woven make. Answer these three riddles correctly, and you will find what you seek."
*[I understand.]->riddle1
*[What happens if I don't?]->ifyoudont
==ifyoudont==
"You will find out, young one. But first, you must take a leap of fate."
*[Okay, I understand.]->riddle1
==riddle1==
"Your first riddle..
"The myth that surrounds me inspired my make, the marriage of thread, with another name it takes. What am I?"
*[Snake.]->riddle1wrong
*[String.]->riddle2
*[Rope.]->riddle1wrong
*[Hang on... I have the star! (OPEN INVENTORY)] ->foundsilk2
==riddle1wrong==
"That is incorrect. However, I do not wish to leave you with nothing. Hold out your hands."
(INCOMPLETE SHARD ADDED TO INVENTORY) 
~get_bad_shard()
->navigation

==riddle2==
"Well done. Your next riddle is...
"What floats in space created this art, A work that’s a woven, a work of the heart. Who am I?"
*[Sputniko.]->riddle3
*[Apollon.]->riddle1wrong
*[Suomi.]->riddle1wrong
==riddle3==
"Correct. Your final riddle...
"It binds us together, through thick and through thin, this silk has this ruby glow woven in. What am I?"
*[Glue.]->riddle1wrong
*[Love.]->riddlescorrect
*[Fate.]->riddle1wrong
===foundsilk2===
You present the silk square.
"How... did you find this?" The square floats out of your hands into the air.
"Nevermind the riddles... You have done me a great service. I will reward you well!"
~get_good_shard()
->fate_whereto
==riddlescorrect==
"You have answered all of my riddles correctly. I keep my word - hold out your hand."
You hold out your hands, and with a soft, red glow, a shard appears in your hand. 
~get_bad_shard()
->fate_whereto
===fate_whereto===
"I still sense some trepidation in you, young traveller."
That's true, you think to yourself. You feel nervous. 
*[Yes, you're right.]->yesnervous
*[I'm fine!]->nonervous
===yesnervous===
"My dear little one, there is so much in this vast galaxy to learn from."
"But you must trust in yourself, and trust in what you love. Love and care can guide you anywhere."
"With your shard... protect it at all costs. There is too much destruction, too much greed."
"Use them wisely, please."
*[I understand. Thank you.]->finalreturntoship
===nonervous===
"Courageous little one!" The voice chuckles.
"As long as you remember to trust in yourself, and trust in what you love. Love and care can guide you anywhere."
"With your shard... protect it at all costs. There is too much destruction, too much greed."
"Use them wisely, please."
*[I understand. Thank you.]->finalreturntoship

===finalreturntoship===
With all its warmth and welcome, you close your eyes to enjoy it.
When you open your eyes, you are back in your ship.
->justenough
===justenough===
The ship glows a faint red.
"You have taken a long time to return. Where have you been?"
The ship's door shuts. 
You feel the ship shake, ready for takeoff.
*[Where are you taking me?]->movingtoanewlight
*[I thought we didn't have enough fuel...]->shush
===shush===
"You know, {name}, you really must shush sometimes. I wish to surprise you!"
"You've travelled for so long, and have had to make all the hard decisions..."
->movingtoanewlight
===movingtoanewlight===
"Let's float around for a little bit, shall we, {name}?"
the ship blasts off into the aether.->new_light