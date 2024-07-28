===monstrous_feminine_start===
~background=ship_navigation
~ music = bgm_band_3
Your ship lands. The glass has fogged up a bit, but you see shades of red all around your ship. #Ship navigation
AI: You've travelled so far, {name}. I wonder what this planet has in store for you!
*[speech:I'm keen to go!]->notenoughfuel1
*[speech:I'm a bit nervous...]->dontbenervous1

===dontbenervous1===
AI: Oh... that's fair. I don't know what that feels like, but my records show it's not a nice feeling.
*[speech:No, it isn't. It sucks.]->nervoussucks1
*[speech:It's not that bad, it can be helpful.]->nervoushelpful1
===nervoushelpful1===
AI: Well then, I hope you are feeling incredibly nervous. You will need it.
*[speech:Thanks...?]->notenoughfuel1
*[speech:That's kind of rude.]->kindarudeofyou1
===nervoussucks1===
AI: Gee, that certainly sounds bad. I guess this is a feeling you will have to live with. Good luck!
*[speech:Thanks...?]->notenoughfuel1
*[speech:That's kind of rude.]->kindarudeofyou1
===kindarudeofyou1===
AI: Oh, I'm sorry. I thought we were good enough friends by this point that I could poke a bit of harmless fun. Ah well, maybe next time.
*[speech:Okay.] 
You move to step out of the ship.
->notenoughfuel1
===notenoughfuel1===
AI: Actually, before you go, I should tell you that our fuel tanks are almost empty.  I don't have sufficient fuel to take you to another planet.
*[speech: And you thought you'd wait until now to tell me?]->fuelexplain1
*[speech: You mean to tell me that we're stuck here?]->notstuck1
===notstuck1===
AI: We may not be stuck, if you give over your shards. I can use your shards to be converted into fuel.
*[speech:Oh, that's good to know!]->goodluck11
*[speech:Wait... how do you use the shards?]->enoughquestions1
===fuelexplain1===
AI: You didn't ask, so I thought you knew. However fuel levels are critically low.
AI: This can be somewhat mitigated by using your shards. Your shards can be converted to fuel.
*[speech:Oh, that's good to know!]->goodluck11
*[speech:Wait... how do you use the shards?]->enoughquestions1
===goodluck11===
AI: Collect more shards on this planet, and bring them to me. I will make sure you will get to where you need to.
*[speech:Which planets will I be able to visit?]->enoughquestions1
*[speech:Where will you take me?]->enoughquestions1
*[speech:Can I stay here?]->enoughquestions1
===enoughquestions1===
AI: No time, no time!  Have a good journey, bring back those shards!
The ship's door opens, and you feel a force pushing you out.
AI: I can't wait to hear what adventures you get up to! Enjoy, {name}!
*[important:Venture into THE MONSTROUS FEMININE]->monstrous

=== monstrous ===
{class == Doctor: -> doctor_class_monstrous_feminine}

{class == Mechanic: -> mechanic_class_monstrous_feminine}

{class == Artist: -> artist_class_monstrous_feminine}

Doctor: Balud/Manananggal
Mechanic: Huma
===doctor_class_monstrous_feminine===
You step outside, into a world bristling with forest. A gleaming city rises from the dense maroon vegetation. #Planet overview
You disembark into a cold clearing. The foliage seeths as the wind whips around you. #A forest of trees with eyes everywhere - birch trees?
The hairs on the back of your neck stand on end as a realisation washes over you: The entire forest is watching, and audience of countless unseen eyes. 
No... Seen eyes. 
Panic overtakes you and you break into a sprint towards the city, as you try to wipe the memory of those haunting eyes from your mind. 
Finding the outer wall, you make your way around its perimeter until you come upon an open gate, cold and metallic. 
As you pass through the gate, a beam scans you. A metal detector. #City streets (inspired by modern-day Japan)
It chimes twice, satisfied that you carry nothing dangerous, and you are allowed to enter the city.
You walk inside, wondering at the sheer number of people. The hustle and bustle of the city astounds you, despite your upbringing in a large city.
Your head turns quickly as you hear a faint, distant scream.
Worry, or perhaps simple intrigue, guides your feet towards the agonized noise.
You approach a building, tall and glistening silver-iron. You see people in surgical uniforms, similar to those you are so comfortable in. A sense of familiarity fills you.
A hospital.
You hear another scream, less distant now. Still dulled by the metallic walls, but clearly audible amongst the bustle of the street. 
*[Enter the hospital. Maybe you can help.] ->enter_hospital
*[Stay outside. It's none of your business.] ->stay_outside 
===stay_outside===
You pull back. It's really not your concern, you're sure another perfectly capable health practitioner has this under control. 
Really, you're not even sure the people on this planet have the same biology as you. You might not be able to help anyway.
You don't have your medical equipment on you, not all of it.
You couldn't- Another scream breaks through your thoughts.
You hesitate. Every inch of your body is screaming at you, telling you it isn't your business. 
Every inch of your mind is running over the oath you took when you became a doctor. To let no one come to harm, or stay in it if you could avoid it.
Your mind wins. You turn back, and enter the hospital. ->enter_hospital
===enter_hospital=== 
You take a deep breath, and enter the hospital. #Art: Hospital
You are greeted with a hurried efficiency that immediately makes you feel at ease. This is where you function best.
You look around, and see doctors and nurses, reception staff and patients. You feel almost like you're in your own practice. Almost
All except the figure above the door. A symbol, unfamiliar and strange. A woman, or rather, half a woman. You see a small metal statue of the torso of a woman, directly above the stark words 'Birthing care' inscribed upon the wall. #search better name 
You hear the scream again, even louder now that you're inside. Coming from the ward that this strange half-woman plaque seems to be watching over.

-> justenoughdoctor
===mechanic_class_monstrous_feminine===
You step outside, into a world bristling with forest. A gleaming city rises from the dense maroon vegetation. #Planet overview
You disembark into a cold clearing. The foliage seeths as the wind whips around you. #A forest of trees with eyes everywhere - birch trees?
The hairs on the back of your neck stand on end as a realisation washes over you: The entire forest is watching, and audience of countless unseen eyes.
No... Seen eyes. You can see the eyes.
Panic overtakes you and you break into a sprint towards the city, as you try to wipe the memory of those haunting eyes from your mind.
Finding the outer wall, you make your way around its perimeter until you come upon an open gate, cold and metallic.
As you pass through the gate, a beam scans you. A metal detector. #City streets (inspired by modern-day Japan) 
It chimes twice, satisfied that you carry nothing dangerous, and you are allowed to enter the city. 
-> justenoughmechanic
===artist_class_monstrous_feminine===
You step outside, into a world bristling with forest. A gleaming city rises from the dense maroon vegetation. #Planet overview
You disembark into a cold clearing. The foliage seeths as the wind whips around you. #A forest of trees with eyes everywhere - birch trees?
The hairs on the back of your neck stand on end as a realisation washes over you: The entire forest is watching, and audience of countless unseen eyes. 
No... Seen eyes. 
Panic overtakes you and you break into a sprint towards the city, as you try to wipe the memory of those haunting eyes from your mind.
Finding the outer wall, you make your way around its perimeter until you come upon an open gate, cold and metallic. 
As you pass through the gate, a beam scans you. A metal detector. #City streets (inspired by modern-day Japan) 
It keeps scanning, hovering over where you realise the needle is, in your left pocket. A blaring siren emits from the scanner. #City streets
UNAUTHORISED EQUIPMENT DETECTED. UNAUTHORISED EQUIPMENT DETECTED. PLEASE STAND TO THE SIDE FOR FURTHER EXAMINATION. #City streets
Two guards emerge from a building attached to the city's walls. They are wearing immaculately pressed uniforms of metallic grey and maroon, matching the plant life outside. 
One brings out a hand-held scanner, and runs it over you. It emits a beep when it encounters the needle, still in your pocket. 
The other guard turns to you. 
Guard: I'm sorry, but we're going to have to take you in for further examination.
*[Run. Better to be a fugitive in a new city than to be a prisoner of it.] -> run_from_guards
*[Go with them. You aren't doing anything wrong, they'll probably just let you go soon] -> go_with_guards
===run_from_guards===
You make to run away from the guards. Jumping over the scanner which is now near your legs, you start sprinting further into the city.
You look back for a split second as they shout after you. Just long enough to miss the hovering scanner that originally detected the needle. 
You slam into it face-first. Falling to the ground, you groan as the guards haul you up, and take you with them. ->enter_barracks
===go_with_guards===
Alright, I'll go with you. -> enter_barracks 
===enter_barracks===
You walk with the guards on either side of you, into the building they came from. 
They open a series of doors and gesture you through, ending up in an industrial-looking room with a singular chair and table. A questioning room. #Questioning room - grey cube room, one table one chair, one security camera.
The guards gesture you to sit. -> interview
===interview===
You sit, and the two guards leave. A minute later, another unfamiliar guard enters. She is wearing the same uniform as the other guards, but with a small triangular insignia on her collar. Her right eye is marred by a jagged horizontal scar, and looks to be disfunctional. #Optional NPC art - Lieutenant Cofio
My name is Lieutenant Cofio. I'm sorry to have to bring you here, but our scanners have detected an unnaceptable item in your possession. Would you be so kind as to remove it from your pocket?
You reach into your pocket, and give her the needle. She takes it, and as her head moves slightly to reach, a glint of shining glass catches your eye. 
Lieutenant Cofio starts talking. Rambling legalities that you should probably listen to. But your attention is taken by the glint. A security camera, but the glass covering the lens is reflecting something that- isn't there. 
The Lieutenant asks if you understand. Shaking out of your reverie, you hurriedly nod. 
I understand completely, thank you for walking me through the process.
She nods and leaves the room, taking your needle with you. You have no idea what you just assured her you understood.
You look back at the security camera, and the image is still there. The glass of the camera is reflecting a memory shard, the same shape as all of the others that you have found. You hastily look around the room, seeing no glass shard to reflect. It's just in the security camera. 
After a few minutes, Lieutenant Cofio returns, carrying your needle. Over her right eye is what looks like a prosthetic, but it has various wires that connnect to a small, handheld device. 
Lieutenant Cofio: What do you intend to do while in this city?
*[I need to get a memory shard. In fact, I can see it right now.] -> cofio_shard
*[I just want a peaceful holiday.] -> cofio_holiday
*[That's none of your business, I don't have to tell you.] -> cofio_refusal

===cofio_shard===
Lieutenant Cofio: Memory shard? I've not heard of such a thing before. And what do you mean you can see it right now?
+[I really can't explain much about the memory shards, I don't know much myself. But I know I need the one on this planet.]-> cant_explain_much
+[There's a shard reflected in your security camera, just behind your head.] -> cofio_shard2
===cant_explain_much===
Lieutenant Cofio looks at you for a long moment. The prosthetic over her eye spins and whirs as she considers you.
Lieutenant Cofio: Well, you're telling the truth. And you don't pose a threat to the city, from what I can tell.
Lieutenant Cofio: I can't see any reason for you to not have this back either.
She gives you back your needle.
Citizens are allowed to carry any object they want, but we must caution outsiders to be careful about what they bring into our city.
*[I'll be careful. Thank you] -> leave_guard_barracks
===cofio_shard2===
Lieutenant Cofio turns her back to you, and looks at the security camera. She stares for a full minute, and you can hear her prosthetic eye spinning.
She turns back to you.
Lieutenant Cofio: I can't see anything in the camera's reflection. Are you sure you see anything?
You look back, and see the shard reflected, just as you did before.
*[I can, it's right there. Can't you see it?] -> cant_you_see_it
*[No, I can't see it now. It's gone] -> i_cant_see_it
===cant_you_see_it===
She turns again, and looks into the camera. 
Lieutenant Cofio: I can't. But I believe that you can.
She looks at you for a long time. 
Lieutenant Cofio: You might have come to us for a purpose higher than I can interfere with. You're free to go, with my blessing. -> leave_guard_barracks
===i_cant_see_it===
Lieutenant Cofio looks at you for a long time. A short, quiet beep emanates from her prosthetic eye. She frowns at you. 
Lieutenant Cofio: I don't trust you. But, you might have come to us for a purpose higher than I can interfere with. You're free to go. ->leave_guard_barracks
===cofio_holiday===
Lieutenant Cofio looks at you for a long time. A short, quiet beep emanates from her prosthetic eye. She frowns at you.
Lieutenant Cofio: I don't believe you're telling me the truth. However, I don't see any ill-intent in you. Your business is your own as long as it doesn't interfere with the law.
Lieutenant Cofio: You're free to go. Don't make me regret my decision.
->leave_guard_barracks
===cofio_refusal===
Lieutenant Cofio looks at you for a long time. She frowns at you. You feel like you're under scrutiny from more than just her eyes. 
The shard's reflection flashes from the camera.
Lieutenant Cofio: I don't trust you. But, you might have come to us for a purpose higher than I can interfere with. You're free to go. ->leave_guard_barracks
===leave_guard_barracks===
You leave the guard barracks, slightly confused and more than a little interested about the flashing shard you saw in the security camera's reflection. #City streets
You wander around the city, enjoying the sights of bright coloured lights, breathing in the mixed smells of the street vendors' wares, industrial grease and surrounding forest.
All this time, however, a nagging thought keeps pulling at you. 
You walk towards a screen in a shop window. It's a news report, but you can see a faint reflection of the shard over the presenter's face. 
You look around you, and see most people are looking at small handheld devices. You see a shard reflected in all of them.
You spin, unable to avoid seeing the shard in every reflective surface around you. 
As you move, in a daze of shards and glass, you come across a huge screen, as large as a building's wall. It seems to be in the middle of the street, facing you. It has a white background, and a large shard in the middle. #Optional art: large screen with shard in the middle, Player sillhouette small, looking up at the shard. If not this art, then city streets
->screen
===screen===
+[Step back from the screen] ->step_back
+[Move towards the screen] ->move_towards
===step_back===
You take a step back from the screen. Another. Another. You walk backwards from it slowly, but it doesn't seem to get any further away from you. It's as if the screen is moving with you, getting no closer but also no further away. #Large screen or city streets
->screen
===move_towards===
You take a step towards the screen. It's huge, and you crane your neck to be able to see the shard in its centre. #Large screen or city streets 
While you're looking at the shard, it seems to pulsate. Beating, like a heart would, you watch as the pulsing regularlity of the shard on the screen gets faster and faster. 
Entranced, you watch until, hypnotised, you move forward and touch the screen. 
In a flash, you are gone from the busy street. ->in_data_layer
===in_data_layer===
You land flat on your back, gasping as the wind is knocked out of you. #Complete black screen
Your eyes are blurry. You sit up, rubbing them to clear, and immediately jump backwards in alarm. There is a- something sitting opposite you. 
Your surroundings are black. Walls, floor, ceiling. It's as if you are in an ink-black void. Except for the creature in front of you. 
It is a royal blue, and seems to be made of fabric, with a woven straw-like pattern on its front. Its face is like nothing you have ever seen before, remeniscent of Lieutenant Cofio's cybernetic eye but- all over. Biotechnological, it has whirring sensors and scanners, probing wire tendrils and a piercing red light in the centre of its head. 
#Urban NAMAHAGE image, inky black void. 
NAMAHAGE: Welcome.
*[Where am I?] -> where_am_i
===where_am_i===
Creature: You are in my home. The city's data layer. Hundreds of billions of wires and sparks making up every person's data, everything on their devices that they love more than life itself. 
*[Who are you?] -> who_are_you_namahage
===who_are_you_namahage===
Creature: I am the NAMAHAGE. I watch this world, and many others, from my perch in the data layer. From here, I can see anything that anyone has ever put onto a device. 
NAMAHAGE: At the beginning of every new year, I weed the good children from the bad, bringing blessings to the good and disciplining the unsvory.
*[Children?] -> children_of_technology
===children_of_technology===
NAMAHAGE: Well, we are all of us children of the technology we create, are we not?
*[I suppose so...] -> children
*[I'm not sure I follow.] ->children
===children===
NAMAHAGE: I do not mean children in the literal sense. Anyone who uses technology is in some way a puppet of it. They are all children. Although many of those distasteful 'children' seem to turn out to be adults.
*[I see.] -> artist_namahage
===artist_namahage===
NAMAHAGE: I see you are an artist. I admire that. The creativity, the drive. The independence. Your breed are becoming few and far between, to the detriment of us all. 
*[Thank you?] -> plot_hint
===plot_hint===
NAMAHAGE: I also see that you are... missing something. Something you seek to return to yourself.
*[How could you tell?] -> how_could_you_tell
*[My memories. I need to know who I am.] -> memories
===how_could_you_tell===
NAMAHAGE: Your ship is a part of the network, just like any other. It has been waiting for you.
NAMAHAGE: You will have to choose. One of four. It will not be easy: In every scenario, you lose something. But, if you choose wisely, you will be able to gain another. ->what_do_you_hope_for
===what_do_you_hope_for===
NAMAHAGE: Tell me, {name}. What do you hope for? What is your greatest desire for your own future?
*[I need to discover who I am.] -> who_are_you
*[I want to save the world.] -> save_the_world
*[Those who took my memories deserve nothing but the worst. I'm happy to deliver that to them.] -> revenge
*[I just want to go home.] -> go_home
===memories===
The NAMAHAGE regards you. You hear an intake of air, a whirring of mechanics. A breath. Its visor's red light seems less piercing. Softer. 
NAMAHAGE: You will find them, child. If you really and truly want to discover who you are, you will. -> what_do_you_hope_for
===who_are_you===
~game_state = input_field 
NAMAHAGE: Why is it so important to you, to know who you are? 
*[done] -> input_next_example
===input_next_example===
~game_state = exploring
NAMAHAGE: Some people go their entire lives without truly knowing who they are. I don't believe you will be one of those people.
NAMAHAGE: Be prepared, young one, that with knowledge comes power. And with power comes pain. Be careful with your knowledge, should you choose to receive it when the time comes.
*[I will.] -> namahage_trust

===save_the_world===
NAMAHAGE: From what? What perils are we in that you think you are so powerful to prevent?
*[I-] -> think
===think===
You stop. The words that were in your head, all your carefully-prepared logic, all that you were planning. 
What is your purpose?
The NAMAHAGE is right. What have you convinced yourself is so dangerous? And even if it were as threatening as you fear, what can you do?
*[I don't know.] -> figure_it_out
===figure_it_out===
NAMAHAGE: Your quest is a noble one. Protecting those who need it is an admirable thing indeed. Just make sure that your efforts are directed in the right way, lest you lead yourself astray. ->namahage_trust
===revenge===
NAMAHAGE: Your motivation is pure. If someone has taken something from you unjustly, you should always strive to get it back. 
NAMAHAGE: However, I am not sure that revenge will bring you anything but more sorrow. Pain begets pain, {name}. Bringing torment onto others, no matter how deserved it may be, will never bring you relief. 
*[Thank you for your advice, NAMAHAGE. I will take it into account.] ->namahage_trust
===go_home===
NAMAHAGE: Most do. You will return, {name}. If it is what you truly want, you will stop at nothing to make it happen.
NAMAHAGE: You should be commended on your courage to come to this place. To do these things, despite your fear. Your efforts are not going unnoticed.
*[Thank you, NAMAHAGE.] ->namahage_trust
===namahage_trust===
NAMAHAGE: Now, it is time for you to leave this place. Can I trust you to keep the knowledge of my doings from the townspeople?
*[Of course, your work is important. I'll make sure you're left alone to it.] ->leave_alone
*[Absolutely not, your work is invasive. People should be able to decide for themselves what is good and what's bad: no one being should have that much power. I'm going to tell the people of the city.] ->expose
===leave_alone===
NAMAHAGE: A wise choice. Now, I believe I may have something to help you in your journey.
The being extends its arm, and you see a surprisingly human-like hand emerge from the sleeve. 
It is holding a pure shard, just like the one you saw reflected so many times. The NAMAHAGE offers it to you. 
NAMAHAGE: Remember. Knowledge is power, and power is pain. Do with this what you believe is wisest.
You take the shard. As soon as it is in your hand, you are in the busy street again. The people bustle around you, you hastily move out of the way as a group of people pass you by. ->leave_namahage
===expose===
The NAMAHAGE looks at you for a long while. You hear the whirring, from its head stop. All is eerily still. There is no movement anywhere, save your own. 
You hear a sound from the being. A sigh. 
NAMAHAGE: I can't stop you. As much as I am a powerful being, I am but a bystander in the lives of those who choose their own paths. Do what you will.
NAMAHAGE: Before you leave, however, I want to give you something that I believe will aid you in your journey.
The being extends its arm, and you see a surprisingly human-like hand emerge from the sleeve. 
It is holding a shard, just like the one you saw reflected so many times. Your stomach drops at its colouration: a deep red. The NAMAHAGE offers it to you. 
NAMAHAGE: Remember. Knowledge is power, and power is pain. Do with this what you believe is wisest.
You take the shard. As soon as it is in your hand, you are in the busy street again. The people bustle around you, you hastily move out of the way as a group of people pass you by. ->leave_namahage
===leave_namahage===
Looking around, you see no sign of the NAMAHAGE. No sign of the data layer that you were in but a moment before. 
You look at the shard in your pocket, dazed. That was an experience that you're sure you will never have again.
You leave the city, encountering no resistance as you pass through the gates. Still in a haze, trying to remember everything you were told, you walk back to your ship. ->justenoughartist
->justenoughartist
===justenoughartist===
You get back to your ship. It glows a faint red as you enter it.
AI: You've been gone a while. What have you been up to?
The ship's door shuts.  ->ai_artist_explanation
===ai_artist_explanation===
#Artist explanation 
->leave_monstrous_feminine
===justenoughdoctor===
You get back to your ship. It glows a faint red as you enter it.
AI: You've been gone a while. What have you been up to?
The ship's door shuts. ->ai_doctor_explanation
===ai_doctor_explanation===
#Doctor explanation
->leave_monstrous_feminine
===justenoughmechanic===
You get back to your ship. It glows a faint red as you enter it.
AI: You've been gone a while. What have you been up to?
The ship's door shuts. ->ai_mechanic_explanation
===ai_mechanic_explanation===
#Mechanic explanation
->leave_monstrous_feminine

===leave_monstrous_feminine===
#Leave Monstrous Feminine
You feel the ship shake, ready for takeoff.
*[speech:Where are you taking me?]->movingtoanewlight1
*[speech:I thought we didn't have enough fuel...]->shush1
===shush1===
AI: You know, {name}, you do talk too much sometimes. I have a surprise for you!
AI: You've had to travel so far, and make all the tough decisions... I thought you could use a break for a while. I acquired more fuel.
->movingtoanewlight1
===movingtoanewlight1===
AI: Let's float around for a little bit, shall we, {name}?
The ship blasts off into the aether.
->navigation