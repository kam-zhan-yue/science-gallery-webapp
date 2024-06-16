==prologue===
Black.
A cave.
A pulsating light. 
You're rocking back and forth. 
A fight. 
A hard decision. 
A long lost memory...
*[Wake up.] ->Shangrila_intro

===Shangrila_intro===
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
...
You turn to your right. 
You see a cave. 
...
You're certain you've never seen a cave entrance on this walk before. 
...
You surely would have seen it by now...
...
Hang on... didn't you see this before somewhere?
...
*[Walk into the cave]->walk_into_the_cave

===walk_into_the_cave===
You move towards the cave.
11111.
22222.
You walk through its entrance. 
Unlike the wonderful gentle warmth of the daylight, it's cold. 
It's also damp. 
The light slowly dims as you head into this cave. 
But as it gets darker and darker...
...
A faint glow shines in the distance. 
*[Move towards the light.]->faintlight
*[Leave the cave. I don't like it here.] ->sheeplink
===faintlight===
You move towards the light. 
As you move closer and closer, you notice that it is emanating from the ground. 
As you near the glowing light, its shape becomes clearer. A small shard of... something. You're unsure of what it is, but you feel an overwhelming need to pick it up.
*[Pick up the shard.] ->introshard
*[Leave the shard and turn back.] ->sheeplink

===introshard===
You pick up the shard. 
It glows softly in your hand. As you look into the shard, you feel a foreign life flash before your eyes. It hits you like a tonne of bricks, and fills you with a pervasive memory. 
A memory that calls to you.
You look into the shard, and you see...
~ game_state = character_selection
*[An artist.]
    -> chosen(Artist)
    ->artist
*[A doctor.]
    -> chosen(Doctor)
    ->doctor
*[A mechanic.]
    -> chosen(Mechanic)
    ->mechanic
*[A journalist.]
    -> chosen(Journalist)
    ->journalist

===artist===
Two memories flood your mind: The first hits you with a splash of colour - colours you feel like you've never seen in your life. In your hand, a tool, splattered in these same colours. You can see in front of you brilliant shapes that you recognise in an odd way.
The second memory melds these colours into terrifying reds, greys and a jet black that invades your senses with dryness and ash. You see the tool in your hand is gone, and you feel there is something to blame for the flames you see in front of you. Four people stand beside you, with concerned eyes, wishing only comfort for you.
*[I understand now.] ->artistname
===artistname===
You dig back through your first memory, trying to relive the moment as clearly as possible. On the bottom of the array of colours, you see a name you resonate with. Your name.
*[The player inserts their name here.]->artistconfirmname
===artistconfirmname===
You see your name written boldly in black. It warms you to see it. Funny, you thought having names only existed in ancient history. At least, that's what you were taught in school.->cavedoor
===doctor===
Two memories flood your mind: The first is of what looks like a graduation. You have donned a funny looking headress, black with some tassle obscuring your view. You're surrounded by four people you don't entirely recognise, but they cheer for you, and embrace you. One even gives you a peck on the cheek. In your hands, a scroll. You clutch it tightly and you feel a grin so wide it hurts your cheeks. 
The second memory is painted crimson red. You look at your hands, and the scroll is gone. It has been replaced by a bloodied tool, which you can't quite remember what it was called. In front of you, an unrecogniseable person is clutching their arm, thanking you for trying. You can hear someone run up to you, and as you turn around, all you can recognise is the suit.
*[I understand now.]->doctorname

===doctorname===
You look at your white coat. You've loved this coat for as long as you remember. You suddenly feel something in your coat's breastpocket. It feels like something has somehow manifested there, as if it had always been there, but only now you can feel its bulk. You reach into your breastpocket and pull out a nametag. On the nametag reads...
*[The player inserts their name here.]->doctorconfirmname
===doctorconfirmname===
The nametag clearly states your name, which makes you feel warm hearing it read in your mind. You recognise this name, and hear someone's voice calling out for it, one you haven't heard in a long time. Funny, you thought having names only existed in ancient history. At least, that's what you were taught in school.->cavedoor
===mechanic===
Two memories flood your mind: The first memory adds weight to your right hand. You look down and see a heavy instrument, but you can't quite remember what it's called. A winch? A wrangle? You look up to see a beautiful machine, which moves, clanks and steams in perfect harmony. It's like a mechanic orchestra, sounding sweetly in your ears. 
The second memory sees this machine move. It moves... fast. It moves fast towards four people you seem to recognise somehow, and they run with the sound of fear in their panting breaths. You can't quite make out what is happening, other than hearing them call out to you to stop the machine. Behind you stands a suited figure.
*[I understand now.]->mechanicname
===mechanicname===
You look down at your blue clothing. You have always worn blue, and today you wanted to wear your lucky blue boilersuit. As you look to your chest, a faint cloud of red seems to manifest, as if made of moving thread and fabric. You swear you haven't ever seen your boilersuit embroidered. As it becomes clearer, you see a name appear, sewn in a flaming firetruck red.
*[The player inserts their name here.]->mechanicconfirmname
===mechanicconfirmname===
You recognise this name. It's yours. You look down proudly, yet befuddled as to who gave it to you. Funny, you thought having names only existed in ancient history. At least, that's what you were taught in school.->cavedoor
===academic===
Two memories flood your mind: The first memory takes you to a comfy couch. You look around you, and you are surrounded by infinite knowledge. However, this knowledge isn't documented in holographic glass that you've seen at your local library. This knowledge is noted down in cumbersome blocks that fill the walls around you. You even have one of these blocks in your hand - the texture feels familiar to you, its smell transports you somewhere, but you don't know where. At the front of it reads some sort of title, which you're still trying to make out.
The second memory takes you to a podium. You stand in front of a microphone, in front of a crowd of what seems to be thousands. Nobody in the crowd seems to be pleased with you. You feel yourself sweating. At the front, four particular people catch your eye, all of whom look concerned, and uncomfortable. You feel like you've been responsible for something... bad.
*[I understand now.]->academicname
===academicname===
You think back to your first memory. Those blocks... they look similar to that little pagebook that you have carried for so long. It was a gift, somebody gave it to you, but you were too young to remember who, you think. You look through your satchel to see if you still have it on your person, and you produce the pagebook - with its little black blanket that encases it. When you open it, a new piece of text appears, which you were certain wasn't there before. It reads... a name.
*[The player inserts their name here.]->academicconfirmname
===academicconfirmname===
Your name appears. Your name... hang on. You don't even remember having a name. You read it letter by letter, and you feel a warmth in your chest, like a long hug. Funny, you thought having names only existed in ancient history. At least, that's what you were taught in school.->cavedoor
===journalist===
Two memories flood your mind:  the first, a corkboard, filled with images you can't quite recognise, and scrawled notes on scrap pieces of paper, torn and pinned up around the board. You see red thread that seems to interweave each image and scrawling together in an intricate web. 
The second memory makes your chest sting. You remember four people, all with their backs turned to you, walking away. One briefly looks back to you, but seeing their face feels as harsh as a knife to your chest. 
*[I understand now.] ->journalistname
===journalistname===
You look down at your left arm. Suddenly, what you thought was a vague birthmark starts to shift and warp, seemingly spelling out words. You make it out to say "DON'T FORGET YOUR NAME:"
*[The player inserts their name here.]-> journalistconfirmname
===journalistconfirmname===
A name is written clearly on your skin. Your name. You hear a faint call of this name as if read off a teleprompter. Funny, you thought having names only existed in ancient history. At least, that's what you were taught in school.->cavedoor
===cavedoor===
In your confusion, you see more shifting of your surroundings. You look up from where you picked up the shard. 
A door appears. The shard glows in your hand with pulsating light. You feel it calls you to the door.
*[Try to open the door.]->opendoor
*[Turn around and leave. This is too dangerous.]->sheeplink
===sheeplink===
You walk out of the cave. As you turn around to see the light outside. You see a silhouette. A suited figure. 
"I'm sorry you had to see this, you aren't allowed here." The suited figure speaks as it echoes through the cave. 
You go to sleep. ->DONE
===opendoor===
You open the door and walk through.
...
...
...
...
...
...
It's dark in here. 
*[Please let there be light.] ->lightswitch
===lightswitch===
You feel your way around the walls on either side, and hear the familiar sound of a lightswitch. 
As the light turns on, you see a small shuttle ship. It looks a little rusted, as if it hasn't been touched in years. You have seen this ship before - there are old pictures of it in the central museum, in "print" form. 
*[Can I turn it on?]->shuttleon
===shuttleon===
You look around, and you find a latch to open the shuttle. As you go in, the shuttle automatically turns on. 
As the shuttle lights up, the door shuts behind you. 
In front of you, you see the shuttle's energy gauge, just like your zipcraft at home. It looks like it isn't full. 
You look at the shard again, which now pulsates again. It urges you to choose. 
*[What do you mean, choose?]->chooseplanet

===chooseplanet===
Good question, you say to yourself. Next to the energy gauge is a keypad. A keypad for launch codes. 
You think back... you remember there were two pieces of text written either side of the cave's entrance...
->universe_story

NOTE: YOU WILL FIND TWO CODES SOMEWHERE IN SHANGRILA AROUND YOU. LOOK AROUND THE ARTWORK TO FIND THEM.
*[Player inputs code 1]->liftoff1
*[Player inputs code 2]->liftoff1

===liftoff1===
Your shuttle shakes.
It whirrs.
It clanks.
Your shard's light is growing and pulsing.
You feel your heart beating in your throat. 
The sounds rise, and rise, and rise...
The shuttle shakes and starts to move. 
Where will it go?
What lies in store for you?
Only one way to find out...
...
and...
...
...
LIFTOFF!
->DONE