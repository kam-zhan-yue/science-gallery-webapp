===lastship===
~background = ship_navigation
->newmyths
===newmyths===
Your ship lands. The glass has fogged up a bit, but you see shades of red all around your ship.
Ship: You've travelled so far, {name}. I wonder what this planet has in store for you!
*[speech:I'm keen to go!]->notenoughfuel
*[speech:I'm a bit nervous...]->dontbenervous
===dontbenervous===
Ship: Oh... that's fair. I don't know what that feels like, but I've heard it's not a nice feeling.
*[speech:No, it isn't. It sucks.]->nervoussucks
*[speech:It's not that bad, it can be helpful.]->nervoushelpful
===nervoushelpful===
Ship: Well then, I hope you are feeling incredibly nervous. You will need it.
*[speech:Thanks...?]->notenoughfuel
*[speech:That's kind of rude.]->kindarudeofyou
===nervoussucks===
Ship:Gee, that certainly sounds bad. I guess this is a feeling you will have to live with. Good luck!
*[speech:Thanks...?]->notenoughfuel
*[speech:That's kind of rude.]->kindarudeofyou
===kindarudeofyou===
Ship:I will not tolerate statements of this kind, {name}. Do not question me. Or there will be consequences.
Ship:I hope you enjoy your time on this planet!
*[speech:Okay.] ->notenoughfuel
===notenoughfuel===
Ship:Actually, before you go, I must inform you that I do not have sufficient fuel to take you to another planet.
*[speech:What do you mean?]->fuelexplain
*[speech:Well, I guess we're stuck here then.]->notstuck
===notstuck===
Ship:We may not be stuck, if you give over your shards. I can use your shards to be converted into fuel.
*[speech:Oh, that's good to know!]->goodluck1
*[speech:Wait... how do you use the shards?]->enoughquestions
===fuelexplain===
Ship:You did not ask, so I did not inform you. However fuel levels are critically low.
Ship:This can be somewhat mitigated by using your shards. Your shards can be converted to fuel.
*[speech:Oh, that's good to know!]->goodluck1
*[speech:Wait... how do you use the shards?]->enoughquestions
===goodluck1===
Ship:Collect more shards on this planet, and bring them to me. I will make sure you will get to where you need to.
*[speech:Which planets will I be able to visit?]->enoughquestions
*[speech:Where will you take me?]->enoughquestions
*[speech:Can I stay here?]->enoughquestions
===enoughquestions===
Ship:You ask too many questions. Bring the shards to me.
The ship's door opens, and you feel a force pushing you out.
Ship: I cannot wait to hear what adventures you get up to! Enjoy, {name}!
*[Venture into NEW MYTHS]->newmythsbegin
=== newmythsbegin ==
~background = new_myths_main
~ music = bgm_band_3
You land in what seems to be a planet covered in crimson - as you look around you, all you can see is a dense forest. 
However, this forest isn't made of the trees or plants you've seen before. As your eyes adjust to the ruby haze, you notice that you are surrounded by streams of fabric. 
The fabric is beautifully woven, with shimmering embroidery that glints faintly as if glowing. 
You feel... warm. As if someone is holding you tightly, like a kiss on the cheek, like being cradled to sleep. 
As you wade through the layers of silk, you reach a clearing, where a lady sits, faintly sobbing. 
Lady:What happened to you, my darling?
The woman whispers, as she cradles a piece of silk in her hands.
{ class == Artist:
    ->artistladyoption
-else: 
    ->notartistladyoption
}
===artistladyoption===
*[speech:Ask the lady what's wrong.]->helpsilklady
===notartistladyoption===
*[speech:Ask the lady what's wrong.]->helpsilklady
*[Walk away, see what's beyond the silk.]->wandertosilk
===helpsilklady===
Lady:Oh, hello... I'm just... well, look!
The lady shows you the silk. 
It has a large tear in the centre, and seems to have lost its colour around the tear.
Lady:I... had an argument with my partner. And it didn't go well.
Lady:When they left, I felt my silk tear. It's all my fault!
Lady:I don't know what to do...
The lady sheds a tear over the torn silk.
{ class == Artist:
    ->artistoption
-else: 
    ->notartistoption
}
===artistoption===
*[inventory:I can mend that!]->artistmendsilk
===notartistoption===
*[speech:Would you like some company?]->keephercompany
*[speech:I don't know if I can help.]->canthelplady
===keephercompany===
Lady: I think that would be nice... the lady sniffles. 
You sit with her, in silence. She takes a moment to breathe. 
Lady: Sometimes, all you need is the comfort of someone simply being there with you.
Lady: I know it will take time to mend this tear, but that's okay.
Lady: Thank you kind stranger. I hope you can find the silk path you need.
*[speech:What's the silk path?]->storyofsilk
*[speech:Where can I find the silk path?] ->followthesilk
===storyofsilk===
Lady: Each silk that hangs above you was made from a connection between two people.
Lady: It may be two souls finding love, it may be a new friendship, it may be finding your family...
Lady: ... but every silk is forged by love and learning.
Lady: Let me show you my journey.
She waves her hand to the sky.
->heartbreakandkindness

===canthelplady===
The lady sniffles. 
Lady: I understand. I don't know what I can do either.
Lady: This place teaches us so many things, and sometimes the lesson is to feel our fears and be uncomfortable.
She invites you to sit with her, and she waves her hand to the sky. 
->heartbreakandkindness
===heartbreakandkindness===
Suddenly, the world around you shifts, a soft, hazy veil covers your surroundings, showing you memories. 
The lady tells you a story - the story of her memories, her world, and the lessons she has learnt.
Lady: This planet holds heartbreak, and it holds kindness. My mother used to say that the planet was once purely love...
Lady:... but someone tried to steal something from the planet spirit, and that's when heartbreak was created.
Lady: Come, I want to show you something. 
She takes you by the hand and walks you through canopies with lights that dance around them.
As your eyes adjust, you see images form... refabricated realities interwoven into the silk, moving across and telling many stories. 
YOU ARE INVITED TO VIEW "REFABRICATED REALITIES". YOU MAY STAY HERE AS LONG AS YOU WISH.
*[speech:Where do I go from here?] ->followthesilk
===artistmendsilk===
Lady: Oh, could you? I would be so eternally grateful!
~game_state = take_item
*[{artist_item}]
    ~game_state = exploring
    -> artist_mend_silk_2
*[other]
    ~game_state = exploring
    -> artist_mend_silk_2
    
=== artist_mend_silk_2 ===
You pull out your red thread and needle. The red is a perfect match to the silk.
You get to work - the lady watches you in your mastery as you seamlessly make the silk whole again.
When you're finished, the thread glows. And the lady faintly smiles.
Lady: It's not a complete fix, but I feel ready to fix the rest. I cannot thank you enough, friend.
She reaches into a little bag, and pulls out a small silk square with a gold star embroidered on the front. 
Lady: Take this - follow the star, and you'll find where you need to be.
    ~get(star)
    ->receivestar
===receivestar===
You place the starry silk in your pocket.
*[speech:What are all these silks for?]->storyofsilk
*[speech:Where do I go from here?] ->followthesilk
===artistjourneyheart===
As you turn around to leave, the silk square in your hand glows. 
The glow engulfs you, and in a blink of an eye, you're transported.
As you look around, you notice you're in a cave, the walls made of the dense silk forestry you saw before. 
You have made it to the heart of the planet - the Fate. ->theheart
==followthesilk==
Lady: The best adivce I can give you is to follow the silk - they all really do lead to the heart.
Lady: We call her The Fate - she will challenge you, but she is kind.
Lady: I wish you luck, friend. It was lovely to meet you. 
*[important:I'm ready - Red Silk of Fate]->traveltotheheart
===wandertosilk===
You pass the lady, and continue further into the jungle of silk. 
A faint glow of different coloured lights start to appear in your vision. 
You head toward it, and you find what seems to be a light show, in all its brilliance and spectacle. 
The lights start to condense, and wash over one of the lines of silk, lighting up the pathway for a brief moment, and travels along the path into the distance. 
You feel called to the silk.
*[Touch the silk.]->touchthesilk
*[Follow the silk.]->followsilk2
==traveltotheheart==
You leave the light show, and make your way through the forest of silk. As you walk through, one particular silk catches your eye - it glows brighter than the others, and you can hear a soft hum, as if it calls to you. 
*[Touch the silk.]->touchthesilk
*[Follow the silk.]->followsilk2
==touchthesilk==
~background = new_myths_silk
You touch the silk, and the warmth you have felt grows. What felt like a warm hug becomes a thick blanket of visible red glow, which covers you. 
The red glow suddenly starts to lift you off the ground, and takes you high above the red forest. As you are taken up into the sky, you look down to see the light show, and the crowd cheering along. 
Things feel small from up here. You feel calm. You gently land through the thickest part of the forest.
As you look around, you notice you're in a cave, the walls made of the dense silk forestry you saw before. 
You have made it to the heart of the planet - the Fate.
->theheart
==followsilk2==
You follow the glowing silk - it takes you through a labyrinthine chase - the glow seems to move across the silk as if inviting you to a chase.
You pick up speed, pushing away wades of silk as you do. It fills you with pure joy, you almost forget that you're running. Eventually, your chase slows down as you near the thickest part of the forest.
As you look around, you notice you're in a cave, the walls made of the dense silk forestry you saw before. 
You have made it to the heart of the planet - the Fate.
->theheart
==theheart==
~background = new_myths_silk_voice
The Fate: I have been waiting for you, young one.
You're taken by surprise, and the voice laughs.
The Fate: I know what you seek. You have been collecting many pieces of a past memory, and I wish to help you. Memories, stories, histories... 
*[speech:Yes, may I have some of those memories?]->notsoeasy
*[speech:I want to know about the memories of this place.]->silkplanetstory
===silkplanetstory===
The Fate: I see you are a curious one! Look around you.
The voice beckons you towards the draping silk around you. 
As you near the silk, you see images flash before you:
A thick, red fog, slowly morphing, compacting. You see fibres begin to weave themselves among each other. 
And you witness the birth of a small square piece of silk. It glows from its centre, embellishing the silk with a golden star. 
Suddenly, the image changes - now the dense forest of silk you're familiar with. 
You see a person, teary-eyed, running towards the starry silk, and with force, ripping it from the fabric of the planet. 
You hear a cry, and you feel the planet rumble under your feet ever so slightly. 
*[speech:Hang on... what was that star?]->starsilk
*[speech:Hang on... who was that person?]->thief
===notsoeasy===
The Fate: You may, but only if you answer three questions that prove you are kind of heart. 
The Fate: I grieve enough for my lost star... I cannot endure more. 
*[speech:Hang on... what is the star?]->starsilk
*[speech:I'm sorry to hear.] ->riddleintro
===starsilk===
The Fate: The birth of this planet. The first act of love. 
The Fate: I began with nothing, and so I took a part of my being to create her. 
The Fate: She was what brought this planet to life. These silks around you are here because of her. 
The Fate: In an act of heartbreak, my star was stolen from me.
*[speech:Who would do this?] ->thief
===thief===
The Fate: A person with a heart filled up with grief. The first person to have their silk broken. They came to me for help.
The Fate: I could not help them, but they did not know how to resolve their sadness. 
The Fate: They took my star and wished for their love back. 
The Fate: In turn, my star cursed the planet for their actions, and since then I have not seen her. 
The Fate: I see more heartbreak, I see it in myself. Neither of them deserved this. So now I try to do what I can to help my citizens.
{ class == Artist:
    ->artistfateoption
-else: 
    ->notartistfateoption
}
===artistfateoption===
*[inventory:I have found her!] ->foundsilk1
===notartistfateoption===
*[speech:Have you tried to look for your star?] ->lookforstar
*[speech:Sometimes all we can do is move forward.]->movingforward
===lookforstar===
The Fate: I am bound to this space, I have had to accept that I may never find her again. 
The Fate: I don't know if I may ever lose my grief. 
*[speech:Sometimes all we can do is move forward.]->movingforward
===movingforward===
The Fate: You are wise, young one. And you are right. I may never see her again, but I do what I can. 
The Fate: We may never rid of grief and heartbreak, but we can learn and grow from it. 
The Fate: Thank you for your kind words, young one. But... do you live true to your heart?->riddleintro
===foundsilk1===
You reach into your pocket and produce the glowing silk.
~game_state = take_item
*[{star}]
    ~game_state = exploring 
    -> foundsilk2
*[other]
    ~game_state = exploring
    -> foundsilk2
===foundsilk2===
You present the starry silk.
The Fate: My love... you have returned her to me!
The room glows brightly, and the star floats out in front of you. 
You cannot quite understand how, but you feel The Fate embrace the star and you. 
The Fate: My darling... you're home! You're home at last! 
The Fate: My dear {name}, you have shown that you are kind of heart. You have done this planet a great service. 
The Fate: There is so much to be done, but now I feel whole again! Thank you!
The Fate: I am a spirit of my word - hold out your hand. 
~get_good_shard()
->fate_whereto
===riddleintro===
The Fate: Look around you, there is so much to learn from my woven make. 
The Fate: Answer these three riddles correctly, and you will find what you seek.
*[speech:I understand.]->riddle1
*[speech:What happens if I don't?]->ifyoudont
==ifyoudont==
The Fate: You will find out, young one. But first, you must take a leap of fate.
*[important:Okay, I understand.]->riddle1
==riddle1==
Your first riddle...
The Fate: The myth that surrounds me inspired my make, the marriage of thread, with another name it takes. What am I?
*[Snake.]->riddle1wrong
*[String.]->riddle2
*[Rope.]->riddle1wrong
==riddle1wrong==
The Fate: That is incorrect. However, I do not wish to leave you with nothing. Hold out your hand.
~get_bad_shard()
->fate_whereto

==riddle2==
Well done. Your next riddle...
The Fate: A flower blooming in the night, upon my silk brings glowing light. What am I?
*[Cereus.]->riddle3
*[Rose.]->riddle1wrong
*[Heliotrope.]->riddle1wrong
==riddle3==
Correct. Your final riddle...
The Fate: It binds us together, through thick and through thin, this silk has this ruby glow woven in. What am I?
*[Glue.]->riddle1wrong
*[Love.]->riddlescorrect
*[Fate.]->riddle1wrong
->fate_whereto
==riddlescorrect==
The Fate: You have answered all of my riddles correctly. You have proven you are kind of heart.
The Fate: I keep my word - hold out your hand.
~get_good_shard()
->fate_whereto
===fate_whereto===
The Fate: I still sense some trepidation in you, young traveller.
That's true, you think to yourself. You feel nervous. 
*[speech:Yes, you're right.]->yesnervous
*[speech:I'm fine!]->nonervous
===yesnervous===
The Fate: My dear little one, there is so much in this vast galaxy to learn from.
The Fate: But you must trust in yourself, and trust in what you love. Love and care can guide you anywhere.
The Fate: With your shard... protect it at all costs. There is too much destruction, too much greed.
The Fate: Use them wisely, please.
*[speech:I understand. Thank you.]->finalreturntoship
===nonervous===
The Fate: Courageous little one!
You hear a soft chuckle.
The Fate: As long as you remember to trust in yourself, and trust in what you love. Love and care can guide you anywhere.
The Fate: With your shard... protect it at all costs. There is too much destruction, too much greed.
The Fate: Use them wisely, please.
*[speech:I understand. Thank you.]->finalreturntoship
===finalreturntoship===
With all its warmth and welcome, you close your eyes to enjoy it.
When you open your eyes, you are back in your ship.
->justenough
===justenough===
The ship glows a faint red.
Ship: You have taken a long time to return. Where have you been?
The ship's door shuts. 
You feel the ship shake, ready for takeoff.
*[speech:Where are you taking me?]->movingtoanewlight
*[speech:I thought we didn't have enough fuel...]->shush
===shush===
Ship: You know, {name}, you really must shush sometimes. I wish to surprise you!
Ship: You've travelled for so long, and have had to make all the hard decisions...
->movingtoanewlight
===movingtoanewlight===
Ship: Let's float around for a little bit, shall we, {name}?
the ship blasts off into the aether.->new_light