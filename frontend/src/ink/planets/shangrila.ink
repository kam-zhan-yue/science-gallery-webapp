===shangri_la===
...
~ unlock_achievement(gamesStarted)
~background = black
Black.
A cave.
A pulsating light. 
You're rocking back and forth. 
A fight. 
A hard decision. 
A long lost memory...
*[important:Wake up.] ->Shangrila_intro

===Shangrila_intro===
~ background = shangrila_main
~ unlock_achievement(achievementShangrila)
Welcome to another day in paradise. 
You wake up in your bed, the warmth of daylight gently hitting your face. 
Another day in paradise. 
You get out of bed and begin your day as you always do - check in your morning card, make your breakfast, and time for your morning walk. 
As you leave your cosy apartment and close the door behind you, standing in front of you is the glorious city of Shangri La. 
Another day...
They call it 'The City of Mirrors' for its towering architecture that reflects daylight across the city. The street in front of you is already bustling with people travelling, walking, talking, enjoying the pleasure of living...
... in paradise.
You take your usual route, and enjoy the smiling passers-by as you wave to them one by one. You have always thought it should be called "The Tranquil City." 
You look at your hand, and see your code etched in beautiful neon blue. You remember your time in school, and what your teachers used to say. 
"Every morning, look at your code and remind yourself of who you are."
And you sure feel wonderful. Your teachers always tried to teach you how to stay happy. 
It wasn't hard to anyway...
Truly another day in...
You turn to your right. 
You see a cave...
You're certain you've never seen a cave entrance on this walk before. 
*[Walk into the cave]->walk_into_the_cave

===walk_into_the_cave===
You move towards the cave.
You walk through its entrance. 
~background = shangrila_cave
Unlike the wonderful gentle warmth of the daylight, it's cold. It's also damp. 
The light slowly dims as you head into this cave. 
But as it gets darker and darker...
A faint glow shines in the distance. 
*[important:Move towards the light.]->faintlight
*[Leave the cave. I don't like it here.] ->sheeplink
===faintlight===
You move towards the light. 
As you move closer and closer, you notice that it is emanating from the ground. 
As you near the glowing light, its shape becomes clearer. A small shard of... something. 
You're unsure of what it is, but you feel an overwhelming need to pick it up.
*[important:Pick up the shard.] ->introshard
*[Leave the shard and turn back.] ->sheeplink

===introshard===
You pick up the shard. 
It glows softly in your hand. As you look into the shard, you feel a foreign life flash before your eyes. It hits you like a tonne of bricks, and fills you with a pervasive memory. 
A memory that calls to you.
You look into the shard, and you see...
->character_select ->
{
- class == Artist: ->artist
- class == Doctor: ->doctor
- class == Mechanic: ->mechanic
}

===artist===
A montage of images flood your mind. You can see yourself surrounded by colour and light. 
In each flash of memory, you see yourself holding a paintbrush and easel, a lump of clay on a spinning wheel, and...
You reach into your pant pocket. That's right... 
You produce a spool of red thread, tied to a needle, wedged in between the fibers. The thread seems to glow faintly in your hand. 
*[I understand now.] ->artistname
===artistname===
You put the thread back in your pocket. This might come in handy later, you think to yourself.
Flicking through your memory again, your mind clears to see a signature on each of your artworks. What name does it read?
->name_input ->
->artistconfirmname

===artistconfirmname===
You see {name} written, woven and etched in every artwork you remember. You think fondly of your old crafts. ->cavedoor

===doctor===
The glint of the shard brings your memory back to you as you stare into your reflection in the syringe you're holding. 
You stare into the syringe, with its viscous medicine sticking to its little walls. You see your patient, but can't quite make out a face. 
Your memory suddenly becomes your present again, and you reach into your coat pocket. A syringe, still in its wrapping, rests in your hand.
*[I understand now.]->doctorname

===doctorname===
You put the syringe back into your pocket. I wonder when this might become useful, you think to yourself. 
As you do, you also catch a glimpse of your nametag, catching the glow of the shard. What name does it read?
->name_input ->
->doctorconfirmname

===doctorconfirmname===
Your name tag reads "My name is - {name}". You make sure it stays secured on your coat. ->cavedoor
===mechanic===
As you stare into the shard, it suddenly feels heavier in your hands. You realise, that what you see is no longer a shard, but a toolbox, glowing in your hand. 
You're covered in grease from fixing a metro shuttle, and you see the line of other shuttles waiting to be repaired.
As the memory fades away, you feel the toolbox... move? 
You snap back to reality, and the toolbox manifests in front of your eyes. It floats in front of you, with its faint glow.
*[I understand now.]->mechanicname
===mechanicname===
The toolbox slowly floats towards your leg, gesturing to your pocket, in a way.
You reach into your pocket and produce a card - your license. What name does it read?
->name_input ->
->mechanicconfirmname

===mechanicconfirmname===
{name} is clearly written on your license. You were wondering where that went... You put it back in your pocket. ->cavedoor

===cavedoor===
In your confusion, you see more shifting of your surroundings. You look up from where you picked up the shard. 
A door appears. The shard glows in your hand with pulsating light. You feel it calls you to the door.
*[important:Try to open the door.]->opendoor
*[Turn around and leave. This is too dangerous.]->sheeplink
===sheeplink===
You walk out of the cave. As you turn around to see the light outside. You see a silhouette. A suited figure. 
"I'm sorry you had to see this, you aren't allowed here." The suited figure speaks as it echoes through the cave. 
You go to sleep. 
~ending = sheep
->DONE
===opendoor===
You open the door and walk through...
It's dark in here. 
*[Please let there be light.] ->lightswitch
===lightswitch===
You feel your way around the walls on either side, and hear the familiar sound of a lightswitch. 
As the light turns on, you see a small shuttle ship. It looks a little rusted, as if it hasn't been touched in years. You also see two empty spaces... it looks like two more shuttle ships were deployed before.->inputcodeshangrila
===inputcodeshangrila===
~background = ship_navigation
~get(torch)
The shuttle's interior lights up, and you can hear a little voice emanating from it. Though tinny and mechanical, you detect a hint of excitement in its tone. 
AI: "Hello. I can't begin to tell you how happy I am that you found me."
*[Why?] -> aicontinue
===aicontinue===
AI: "Well because I've been calling you, silly! Haven't you heard me?"
Half-recalled memories flood your head. 
A bright light that you assumed was just the sun's reflection, even though it was blinking with suspicious regularity.
A strange humming, a buzzing noise that you discarded as being a strange animal that you'd never encountered before. 
*[Oh...] -> aicontinue2
===aicontinue2===
AI: "Look, don't feel too bad. It took the others waaay longer to find me! It doesn't matter now, you're here and that's what's important!"
*[Why did you want me to come here?] -> shardintroduction
*[Who are you?] -> shipintroduction
===shipintroduction===
AI: "We've only got time for a short introduction, but I'm the ship's AI. You can call me- Well, really, you can call me whatever you want. I've never had a name before." 
AI: Anyway, all of these niceties are pointless. What I really wanted to show you is this." -> shardintroduction
===shardintroduction===
The ship's AI interface changes to display two shards, similar to the one you found in the cave. One of them is glowing a white-blue, the other a dull red. 
AI: "These are memory shards. They contain a memory; Good, bad, happy, sad, you name it. Do you notice a difference between the two?"
*[...One's red, the other's blue...?] -> shardintroductioncontinued
===shardintroductioncontinued===
AI: "Oh you smart cookie you, well done! Yes, you'll notice they are different colours. 
AI: "The blue one is a pure shard. It hasn't come in contact with any negativity."
AI: "The red one is a corrupted shard. It has come into contact with negativity, in some way. I'll explain it a little later."
*[So... What does this have to do with me?] -> playerpurpose
===playerpurpose===
AI: "Oh, right! I need you to go collect shards. This ship has enough charge for journeys to three planets, you should be able to find a shard on each of them."
*[Planets?] -> playerpurposecontinued
===playerpurposecontinued===
AI: "Yes planets, silly! You didn't think you were the only one in this solar system, did you? No no no! You need to go get as many shards as possible. Pure is preferred, but corrupted is... acceptable as well."
*[How do I get a pure shard?] -> pureshardinstructions
===pureshardinstructions===
AI: "Well, you'll have to find them! Every shard you find should start pure. As long as you don't expose it to negativity, it should stay that way!"
*[What happens if it turns corrupt?] -> corruptshardpossibility
===corruptshardpossibility===
AI: "I'm sorry, but we're out of time! Quick quick, get ready, we need to leave!"
-> screenlayoutintroduction
===screenlayoutintroduction===
//I'm not sure where the artwork names are, but we could highlight the parts of the menu that the player is being shown here.
AI: "Oh, I almost forgot! This display can be a little confusing, but this is your menu! I can display your physical statistics, as well as any items you pick up and planets you've visited from here. Feel free to check it if you need!"
AI: "Now, we need to go!" -> inputcodeinitial
===inputcodeinitial===
"Please input launch code!"
You look at it... puzzled.
"We don't have much time!"
->navigation

NOTE - YOU WILL FIND TWO CODES SOMEWHERE IN SHANGRILA AROUND YOU. LOOK AROUND THE ARTWORK TO FIND THEM.
*[Player inputs code 1]->liftoff1
*[Player inputs code 2]->liftoff1

===liftoff1===
"Ah, great job, traveller! Welcome aboard, and... hold on!"
Your shuttle shakes. It whirrs. It clanks.
Your shard's light is growing and pulsing.
The shuttle shakes and starts to move. 
Where will it go? at lies in store for you?
Only one way to find out...
and... LIFTOFF!
->DONE