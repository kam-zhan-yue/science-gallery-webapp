VAR puzzle_success = false

=== folding_space ===
~background = folding_space_main
~ music = bgm_band_2
You come upon a world covered entirely in ocean. Its deep blue seas glisten in the light of distant stars, making the planet look like a perfect sphere, made entirely of water.  ->ai_folding_space

===ai_folding_space===
AI: We're here! This planet is unsuitable for landing, so you'll have to bring me along for your little adventure this time!
You glides around the planet, scanning for any signs of interesting phenomena. After a while, your ship chimes.

AI: I've detected an unidentified structure. I'm moving closer to scan it.

~background = obelisks

Your ship flies further down to the planet’s surface, revealing two black stone obelisks protruding from the waves. They have strange markings etched into the hard stone. 
->explanations

=== explanations ===
Your console buzzes, having finished identifying the strange markings. 
AI: The words on these structures are written in an ancient language. The left one loosely translates to ‘Folding Space’, and the right describes ‘Flight’.
*[speech:What does ‘Folding Space’ signify?]
    ->folding_space_explanation
*[speech:What does ‘Flight’ signify?]
    ->flight_explanation
*   ->continue_folding

=== folding_space_explanation ===
AI: My records show ‘Folding Space’, chukjibeop in the original, to be a theoretical method of travelling great distances instantaneously. An intriguing concept, highly regarded at the time of these monuments’ creation.
    ->explanations

=== flight_explanation ===
AI: My records show the significance of ‘Flight’, bihaengsul in the original, as a power that, in the time these were crafted, seemed unattainable.
    ->explanations
    
=== continue_folding ===

As the ship nears the obelisks, the symbols glow a bright green-blue.

AI: I can't quite make out what's going on here. Rather unsettling, really. The structures seem to be emitting a strange energy force, source unknown.
AI: I'm going to approach cautiously, brace yourself just in case! -> deafening_sound

===deafening_sound===
Suddenly, a deafening sound emits from the two obelisks.

ChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChoose

AI: It would appear the structures intend for you to select one...
AI: Honestly, I have no idea what's happening. No harm in doing what they want, I suppose?
+[Select ‘Folding Space’.]
    ->folding_space_door
+[Select ‘Flight’.]
    ->flight_door

=== folding_space_door ===

~background = obelisks_left

The ‘Folding Space’ statue glows brighter, illuminating a small door on the base of the statue. You move closer to the door, revealing a panel.
AI: Hmm, that looks locked. Let's try to find out how to open it. 
{ class == Mechanic:
    +[important:Use toolbox?]
    ->folding_toolbox
    +[Try to open the door]
    ->folding_space_puzzle
-else:
    +[Try to open the door]
    ->folding_space_puzzle
}

=== flight_door ===

~background = obelisks_right

The ‘Flight’ statue glows brighter, illuminating a small door on the top of the statue. You move closer to the door, revealing a locked panel.
AI: Hmm, that looks locked. Let's try and figure out how to open it. 
{ class == Mechanic:
    +[important:Use toolbox?]
    ->flight_toolbox
    +[Try to open the door]
    ->flight_puzzle
-else: 
    +[Try to open the door]
        ->flight_puzzle
}

=== folding_space_puzzle ===
Success or failure
~ puzzle_success = true
-> folding_open

=== flight_puzzle ===
Success or failure
~ puzzle_success = true
-> flight_open

=== folding_open  ===
After several minutes of careful deliberation, you solve the puzzle and the panel slides to the side.
AI: Oh well done, you! What's inside?
You look closer, and see a small indent behind the now-open panel. You peer inside cautiously. 

//  Panel is open, shard and scroll inside. 

{   puzzle_success:
        Inside the hole, you see a glass shard, glowing a deep blue-green, and a carefully rolled-up piece of parchment. You pick them both up.
        ~get_good_shard()
        ~get(scroll)
    - else:
        Inside the hole, you see a glass shard, glowing a dark red, and a carefully rolled-up piece of parchment. You pick them both up.
        ~get_bad_shard()
        ~get(scroll)
}

-> folding_words

=== folding_toolbox ===
You peer at the puzzle, then turn and reach into your toolbox. You pull out a small prybar, and carefully pull it left. Right. Excruciatingly slowly, you extricate the panel from the sides, revealing a space within. 
AI: Oh, look how clever you are! What's inside?
Inside the indent, you see a glass shard, glowing a deep blue-green, and a carefully rolled-up piece of parchment. You pick them both up.  
~get_good_shard()
~get(scroll)

-> folding_words

=== flight_open ===

After several minutes of careful deliberation, you solve the puzzle and the panel slides to the side.
AI: Oh well done, you! What's inside?
You look closer, and see a small indent behind the now-open panel. You peer inside cautiously. 
//  Panel is open, shard and scroll inside. 

{   puzzle_success:
        Inside the hole, you see a glass shard, glowing a deep blue-green, and a carefully rolled-up piece of parchment. You pick them both up.
        ~get_good_shard()
        ~get(scroll)
    - else:
        Inside the hole, you see a glass shard, glowing a dark red, and a carefully rolled-up piece of parchment. You pick them both up.
        ~get_bad_shard()
        ~get(scroll)
}

-> flight_words

=== flight_toolbox ===

You peer at the puzzle, then turn and reach into your toolbox. You pull out a small prybar, and carefully pull it left. Right. Excruciatingly slowly, you extricate the panel from the sides, revealing a space within. 
AI: Oh, look how clever you are! What's inside?
Inside the hole, you see a glass shard, glowing a deep blue-green, and a carefully rolled-up piece of parchment. You pick them both up.  
~get_good_shard()
~get(scroll)

-> flight_words

=== folding_words ===

You pocket the shard, and unroll the parchment.  
“Time and distance are no constraints to the imaginative mind. The inspiration precedes the means. Without creativity, what do any of us have?” 
You feel these words burn deep in your soul.  
AI: Oh, what beautiful prose!  I'll add it to my records. This is a fascinating find!
-> folding_space_end

=== flight_words ===

You unfurl the parchment. It has a simple but beautiful illustration of a soaring sparrow. The text around the drawing reads:  

“For flight is freedom, and freedom is life. We may never be truly free until we can see our world from the eyes of the birds.” 
You feel these words burn deep in your soul. 
AI: How inspiring! I'll add this to my records, this is such an exciting discovery!
-> folding_space_end

=== folding_space_end ===

~background = obelisks

You retreat back into the cockpit of your ship as you watch both obelisks, with a faint grating sound, retreat into the waves. With a click, they submerge deep underneath the waves. 

~background = folding_space_main

AI: Hmm. I hope you didn't have plans to open the other one. 
You roll your eyes, irritated not a small amount because you’ll never discover what was in the second obelisk. 
AI: Well, we got a shard!  That was a little strange, but I'll do some digging and see what was on this planet originally. We might have just found a brand new discovery!
You fly away from the planet, wondering what might have been.  
-> navigation
