=== nature ===
~ background = new_nature_main
You step out of your spacecraft and into a beautiful forest glade with a winding path, leading away.

You encounter what looks to be an ancient town, buildings overgrown by vines and trees. It seems nature has reclaimed this planet.

The forest path ends to reveal a shining city with buildings made of a glass-like substance. The glass towers hold hydroponic farms and gardens, like huge terrariums. There is a large, pearlescent-white snake statue in the town’s centre 

One of the townsfolk approaches.

Fysi: Hello!  My name is Fysi, welcome to our beautiful town. I wish we had met under happier circumstances, but our town is under some amount of strife at the minute.

+[speech:Ask what happened]
    ->fysi


=== fysi === 
Fysi: We have a problem that we seem to be struggling to solve ourselves. I hate to ask, but, as an impartial third party, would you be able to help us?

*[speech:Yes, what can I do for you?]
->fysi_interested
*[speech:Sorry, I'm not interested]
->fysi_uninterested


=== fysi_interested ===
Fysi: We have a problem that we seem to be struggling to solve ourselves. I hate to ask, but, as an impartial third party, would you be able to help us?
->fysi_backstory


=== fysi_uninterested ===
Fysi: Oh, that’s alright. Thank you anyway, enjoy your time in Trutina.” Fysi smiles at you, and walks to a market stall near you
*[Continue walking around town]
->fysi_walk_around_town


=== fysi_walk_around_town ===
Fysi: Oh, that’s alright. Thank you anyway, enjoy your time in Trutina.
Fysi smiles at you, and walks to a market stall near you
    ->fysi_walk_away


=== fysi_walk_away ===
The townspeople seem to be going about their days. However, there is a palpable tension in the air. Laughter is too loud and smiles seem forced.
+[Approach Fysi and ask what's going on]
    ->fysi_approach

=== fysi_approach ===
Fysi: Oh, hello! Have you changed your mind?
*[speech:Yes, what's going on?]
    ->fysi_backstory
*[speech:No, never mind]
    ->fysi_walk_away


=== fysi_backstory ===
Fysi: We have two town factions, the Guards and the Gardeners. They both improve our town: the Gardeners feed us, and the Guards protect us. However, both factions are struggling to complete their tasks at the moment.
->fysi_backstory_choices

=== fysi_backstory_choices ===
*[speech:What's happening with the Gardeners?]
->fysi_backstory_gardeners
*[speech:What's happening with the Guards?]
->fysi_backstory_guards
*[important:I'm busy, what did you want?]
->fysi_backstory_end

->fysi_backstory_end

=== fysi_backstory_gardeners ===
Fysi: Our crops are failing. We’ve only had small, wizened produce, the plants are dying, and we’re not sure why. We have enough food stored for a short while, but if we don’t fix it soon, the town will starve.
->fysi_backstory_choices

=== fysi_backstory_guards ===
Fysi: Every night, we send scouts out to protect the town. Each morning for the past week, the scouts have been found unconscious outside the town. They’re in deep comas, we can’t wake them.
Fysi: We don’t know what’s doing this, but we’re afraid to send more out. We don’t have enough Guards to risk more losses, but we need those scouts to protect the town.
->fysi_backstory_choices

=== fysi_backstory_end ===
Fysi: I was walking through the forest looking for mushrooms, and I came across a strange pool. It was filled with what looked like bioluminescent algae, with a glass shard lying at the bottom.
Fysi: The shard was glowing a bright green-blue, the same colour as the algae. I picked it up and it kept glowing, even outside of the water. It intrigued me, so I took it back to the town.
Fysi: When I brought the shard back to town, both factions immediately found a use for it.
Fysi: The guards could use it to protect themselves at night. Whatever was attacking them didn’t approach when they had the shard. The one night that the scout held the shard was the one night that they came back, well- conscious.
Fysi: The Gardeners brought the shard to their crops. When the shard was in a greenhouse, the plants grew to twice their normal size! Something about the light that the shard emits greatly improves crop yield.
+[speech:So... what do you need from me?]
->fysi_shard

=== fysi_shard ===
Fysi: Well... The thing is, we have two very severe problems, and only one solution. No one in the town is unbiased – The Guards have families, and everyone needs to eat, so we can’t decide who gets the shard by vote.
+[speech:Be clearer - what do you need from me?]
->fysi_shard_explain
+[Stay silent and let Fysi talk]
->fysi_shard_explain

=== fysi_shard_explain ===
Fysi: Sorry, I’m rambling.  Now that I’ve explained our situation, we need you to decide. You’re an unbiased third party, you can see this problem from an objective perspective. Who would you give the shard to?
{ class == Doctor:
    ->options_doctor
-else: 
    ->options_normal
}
    
=== options_normal ===
*[important:Give the shard to the Gardeners]
    ->shard_gardeners
*[important:Give the shard to the Guards]
    ->shard_guards
*[inventory:Give your ship's torch to the Guards.]
    You:I have a torch on my ship, I can give it to the Guards and the Gardeners can have the shard.
    ->torch_appease
*[important:Trade your ship's torch for the shard.]
    You:I have a torch on my ship, I can give it to you, in return for the shard
    ->torch_swap
*[speech:Take me to see the shard]
    ->see_shard
+[speech:I wasn't listening. Give me the run down again]
    ->fysi_backstory_end
    
=== options_doctor ===
*[important:Give the shard to the Gardeners]
    ->shard_gardeners
*[important:Give the shard to the Guards]
    ->shard_guards
*[inventory:Give your ship's torch to the Guards.]
    You:I have a torch on my ship, I can give it to the Guards and the Gardeners can have the shard.
    ->torch_appease
*[inventory:Trade your ship's torch for the shard.]
    You:I have a torch on my ship, I can give it to you, in return for the shard
    ->torch_swap
*[speech:Take me to see the shard]
    ->see_shard
*[speech:I can heal your scouts.]
    ->heal
+[speech:I wasn't listening. Give me the run down again]
    ->fysi_backstory_end

// GARDENER PATH
=== shard_gardeners ===
Fysi: Alright, we shall respect your decision. The shard will go to the Gardeners. The faction’s leader will want to thank you for this.
->shard_gardeners_1

=== shard_gardeners_1 ===
Lyanne: Hello! My name is Lyanne, I am the head of the Gardener faction. I would like to thank you, on behalf of the town, for giving the shard to the Gardeners.
+[speech:You're very welcome]
->shard_gardeners_2

=== shard_gardeners_2 ===
Lyanne: I would like to show you something, as a reward for your kindness. Please, come with me.
Lyanne walks away.
+[important:Follow Lyanne]
->shard_gardeners_3

=== shard_gardeners_3 ===
Lyanne leads you to a small building. It is made of stone, the first opaque building you have seen in this town. She unlocks the door, and motions you inside. 
+[important:Enter the building]
->shard_gardeners_4

=== shard_gardeners_4 ===
You walk inside, and see a strange hanging structure, organic and swaying gently. You can’t tell what it is made of, but it is a white-silver colour, and shines dully.  
The structure looks like hanging flowers, with spiralling wire hanging down from the ceiling. 
+[Ask Lyanne what the structure is]
->shard_gardeners_5

=== shard_gardeners_5 ===
Lyanne: This is the Gardeners’ most prized possession. This plant is what keeps morale up when times are tough. It is our proverbial shining beacon of hope. You have given us another hope. I thank you.
Lyanne takes a flower from the structure, and gives it to you with an air of reverence. It warms your hands, and you feel a sense of calm purpose flow through you. 

*[speech:Oh, thank you so much!]
->shard_gardeners_flower_accept
*[speech:Oh, I couldn't possibly take such an important item from you!]
->shard_gardeners_flower_decline

=== shard_gardeners_flower_accept ===
~get(flower)
Lyanne: Feel free to stay in the town for as long as you want. 
Lyanne smiles at you, and walks away.
+[Walk out of the building]
->nature_end


=== shard_gardeners_flower_decline ===
Lyanne: No please. You have given us a gift, and I want to repay the favour.
+[speech:Thank you so much, I appreciate your gratitude.]
->shard_gardeners_flower_accept

//GUARD PATH
=== shard_guards ===
Fysi: Alright, we shall respect your decision. The shard will go to the Guards. The faction’s leader will want to thank you for this.
->shard_guards_1

=== shard_guards_1 ===
Bellator: Hello! My name is Bellator, I am the head of the Guard faction. I would like to thank you, on behalf of the town, for giving the shard to the Guards.
+[speech:You're very welcome]
->shard_guards_2

=== shard_guards_2 ===
Bellator: I would like to show you something, as a reward for your kindness. Please, come with me.
Bellator walks away.
+[important:Follow Bellator]
->shard_guards_3

=== shard_guards_3 ===
Bellator leads you to the guard barracks, and walks through a set of corridors. You reach an archway, and he motions you through.   
+[important:Enter the building]
->shard_guards_4

=== shard_guards_4 ===
You walk inside and see a room with strange green objects, spinning in the middle of the room. The walls are adorned with images of unfamiliar figures. 
Bellator: This is where my guards come to train. The room gives them confidence to continue, even when the going gets tough.
Bellator: It is the boost to morale that the hardworking guards need in these trying times, especially now that doing their job involves them risking themselves.
Bellator walks to a weapons rack, and picks up an ornate spear. He hands it to you, smiling. It feels powerful in your hands. 
+[speech:Oh, thank you so much!]
->spear_accept
+[speech:Oh, I couldn’t possibly take such an important item from you!]
->spear_decline

=== spear_accept ===
~get(spear)
Bellator: Feel free to stay in the town for as long as you want.
Bellator smiles at you, and walks away.
+[Walk out of the building.]
->nature_good_end

=== spear_decline ===
Bellator: No please. You have given us a gift, and I want to repay the favour.
+[speech:Thank you so much, I appreciate your gratitude.]
->spear_accept

// TORCH TO GUARDS, SHARD TO GARDENERS
=== torch_appease ===
~take("torch")
Fysi: Really? Thank you so much, you’re incredibly generous!  The leaders of both factions will want to thank you for this.
Lyanne, leader of the Farmers, and Bellator, leader of the Guards approach you.
Lyanne: Thank you for entrusting us with your light, and the shard. You have helped our village greatly.
Bellator: We would like to give you a reward for your troubles. We can’t describe how much you have helped both factions. Please follow us.
They walk away
->torch_appease_1

=== torch_appease_1 ===
Lyanne and Bellator lead you to a small glass cottage, where they introduce you to Anna, the town’s herbalist.
Anna gives you a pendant made of multicoloured glass, red and white, green and yellow. You put it on, and feel that the universe smiles on you. 

~get(pendant)
Congratulations! You helped both factions, and have gained a pendant that gives you +1 Knack!
//TODO: ADD KNACK HERE!!!
Bellator and Lyanne lead you outside. 
Lyanne: Thank you again. Feel free to stay in the town for as long as you want.
They smile at you, and walk away.
->nature_good_end


//TORCH SWAP ROUTE
===torch_swap ===
Fysi: Alright, that seems fair. I’ll let the leaders know, and they can decide who the torch benefits most.
->torch_swap_1

=== torch_swap_1 ===
Lyanne, leader of the Farmers, and Bellator, leader of the Guards approach you.
Lyanne: Thank you for giving us the torch. We will decide how to use it to its fullest extent.
+[speech:You're very welcome]
->torch_swap_2

=== torch_swap_2 ===
Bellator: We will take you to the shard. Please follow us.
They walk away.
+[important:Follow Lyanne and Bellator]
->torch_swap_3

=== torch_swap_3 ===
Lyanne and Bellator lead you to a locked glass building. They unlock it and motion you inside.
+[important:Enter the buliding]
->torch_swap_4


=== torch_swap_4 ===
The leaders move towards a chest in the room’s centre, and unlock it. Bellator reaches inside, and takes out a glowing glass shard. He motions you forward, and places it in your hands. 
//TODO EXCHANGE ITEMS HERE
~get_good_shard()
+[speech:Thank you. Here's the torch.]
    ~take("torch")
    ->torch_swap_5

=== torch_swap_5 ===
Bellator and Lyanne lead you outside. 
Lyanne: Thank you again. Feel free to stay in the town for as long as you want.
They smile at you, and walk away.
->nature_good_end

/// SEE SHARD ROUTE
=== see_shard ===
Fysi leads you to a locked glass building. He unlocks it and motions you inside.
Fysi moves towards a chest in the room’s centre, and unlocks it. He reaches inside, and takes out a glowing glass shard.
+[Inspect the shard.]
->inspect_shard
+[important:Grab the shard and run.]
->steal_shard

=== inspect_shard ===
You inspect the shard, and recognise it as similar to the previous shards you have encountered. 
Fysi looks at you. “What would you have us do?
->fysi_shard_explain

=== steal_shard ===
You grab the sprite and run. Fysi shouts, and tries to grab at you. 
//TODO Combat here?
+[In Progress - Combat win]
->steal_shard_win
+[In Progress - Combat lose]
->steal_shard_lose


=== steal_shard_win ===
//TODO GET SHARD HERE
~get_bad_shard()
Fysi shouts after you as you sprint towards your ship, shard clutched to your chest.
Fysi: Come back!  Please, you’ve left us with nothing!
You feel the shard cool in your hands.
You run to your ship, a sense of shame and failure washing over you. You look at the shard, and see it glows red. You are no longer welcome on this planet. You have gained a shard, but at what cost?
->nature_end


=== steal_shard_lose ===
Fysi looks at you, breathing heavily, the shard clutched to his chest. He shouts, voice heavy with betrayal
Fysi: Leave now, and never return!  You are not welcome here.
->steal_shard_lose_1

=== steal_shard_lose_1 ===
~background = ship_navigation
You return to your ship, a sense of shame and failure washing over you. You are no longer welcome on this planet, and for what?  You have left with nothing, and shown your true character. 
->nature_end

=== heal ===
Fysi:Really? Are you a healer of some sort? Thank you so much, I’ll take you to the scouts immediately!
- Fysi leads you to the healer’s building, where you see seven guards, lying on beds. They have various injuries, which look to have been tended to. They look to be deep in sleep. 
    +[important:Heal the scouts with your Doctor’s training.]
- You spend the night in the healer’s building. After a long and difficult night, you are able to wake one of the scouts.
    +[Ask the scout what happened to them]
- Scout: “It- it was horrible. A monster that I could barely see in the darkness, seemed to be made entirely of vines! It released a spore that exhausted me. I tried to fight it off, but I fell unconscious.” 
    +[Turn to Fysi]
- Fysi: This sounds like a creature that I’ve heard of, but didn’t think really existed. An Ampelos, a creature of myth. Now that we know what it is, given enough time, we could devise a countertoxin for its spores!
    +[important:Offer to help devise a countertoxin.]
- After another night of research and development, you and Fysi develop a powder that will nullify the Ampelos’ sleep spores. You give it to Bellatos, the leader of the Guards, and explain its purpose. 
Bellatos: This is incredibly impressive! It’s a vital step in preventing any more attacks!  We shall prepare for its use, and put it to the test tonight! Thank you both for your efforts.
You spend the rest of the day sleeping, finally getting some rest after two long days of work. 
You are woken by Fysi, jostling your shoulder.  
- Fysi:Bellatos and the Guards are about to fight the Ampelos!
    +[Get up and follow Fysi.]
- The sounds of fighting, clanging swords and swishing vines emanate from outside the town walls. The townspeople gather behind the gates, trying to gain a glance at the combat.  
After what feels like forever, Bellatos enters through the gate. He has a large cut on his forehead, but looks happy. 
Bellatos:The Ampelos is dead!
The townspeople cheer, and celebrations start.
During the celebrations, you find Lyanne, the leader of the Gardeners, and approach her. 
You hand her the torch.
~take("torch")
She smiles at you, and takes the torch. 
Fysi:Thank you for all that you have done.
She reaches into her robes and retrieves the shard, putting it into your hands. 
Fysi:You have done us a great service.
+[important:Accept the shard.]
    ~get_good_shard()
Lyanne gestures to the surrounding celebrations. 
Fysi:Feel free to stay in the town for as long as you want. You are always welcome here
She smiles at you and walk away.
->nature_good_end


=== nature_good_end ===
->nature_good_end_1


=== nature_good_end_1 ===
After staying in the city for as long as you want, resting and generally enjoying the ambience, you return to your ship. 
->nature_good_end_2


=== nature_good_end_2 ===
~background = ship_navigation
You return to your ship, a sense of purpose and happiness washing over you. You did some good on this planet. 
->nature_end

=== nature_end ===
->navigation