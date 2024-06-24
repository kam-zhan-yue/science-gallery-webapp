=== folding_space ===
~background = folding_space_main
You come upon a world covered entirely in ocean. Its deep blue seas glisten in the light of distant stars, making the planet look like a perfect sphere, made entirely of water.  

// Show ship sprite

Your ship glides around the planet, searching for a place to land. After a few minutes, your ship chimes: 

“Planet unsuitable for landing. Please stay inside the ship for your comfort and safety.” 

// No longer show ship sprite

You continue to fly around the planet, scanning for any signs of interesting phenomena. After a while, your ship chimes again: 

// Show ship sprite again

“Unidentified structures detected. Entering proximity to scan.”

// Twin obelisks in the sea

Your ship flies further down to the planet’s surface, revealing two black stone obelisks protruding from the waves. They have strange markings etched into the hard stone. 

->explanations

=== explanations ===

// Add in ship sprite

Your ship buzzes, having finished identifying the strange markings. “The words on these structures are written in an ancient language. The left one loosely translates to ‘Folding Space’, and the right describes ‘Flight’.” 
*[What does ‘Folding Space’ signify?]
    ->folding_space_explanation
*[What does ‘Flight’ signify?]
    ->flight_explanation
*   ->continue_folding

=== folding_space_explanation ===
“My records show ‘Folding Space’, chukjibeop in the original, to be a theoretical method of travelling great distances instantaneously. An intriguing concept, highly respected at the time of these monuments’ creation.”
    ->explanations

=== flight_explanation ===
“My records show the significance of ‘Flight’, bihaengsul in the original, as a power that, in the time these were crafted, seemed unattainable.” 
    ->explanations
    
=== continue_folding ===

// No ship sprite

As the ship nears the obelisks, the symbols glow a bright green-blue.

// Ship sprite

“Readings unclear. The structures seem to be emitting a strange energy force from an unknown source. Approaching cautiously.” 

// No ship sprite

Suddenly, a deafening sound emits from the two obelisks.

// Bold this

ChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChooseChoose

// Ship sprite

“It would appear the structures intend for you to select one, for an unknown purpose.” 

+[Select ‘Folding Space’.]
    ->folding_space_door
+[Select ‘Flight’.]
    ->flight_door

=== folding_space_door ===

// Zoom in on left obelisk

The ‘Folding Space’ statue glows brighter, illuminating a small door on the base of the statue. You move closer to the door, revealing a locked panel.
{ class == Mechanic:
    +[Use toolbox?]
    ->folding_toolbox
    +[Try to open the door]
    ->folding_space_puzzle
-else:
    +[Try to open the door]
    ->folding_space_puzzle
}

=== flight_door ===

// Zoom in on right obelisk

The ‘Flight’ statue glows brighter, illuminating a small door on the top of the statue. You move closer to the door, revealing a locked panel.
{ class == Mechanic:
    +[Use toolbox?]
    ->flight_toolbox
    +[Try to open the door]
    ->flight_puzzle
-else: 
    +[Try to open the door]
        ->flight_puzzle
}

=== folding_space_puzzle ===
Success or failure
-> folding_open

=== flight_puzzle ===
Success or failure
-> flight_open

=== folding_open  ===
After several minutes of careful deliberation, you solve the puzzle and the panel slides to the side, revealing a small hole in the obelisk. You peer inside cautiously. 

//  Panel is open, shard and scroll inside. 

If the player succeeded the puzzle: 
Inside the hole, you see a glass shard, glowing a deep blue-green, and a carefully rolled-up piece of parchment. You pick them both up.  

~get_good_shard()
~get(scroll)

If the player failed the puzzle:
Inside the hole, you see a glass shard, glowing a dark red, and a carefully rolled-up piece of parchment. You pick them both up.

~get_bad_shard()
~get(scroll)

// Panel open, shard and scroll is gone

You pocket the shard, and unroll the parchment.  
“Time and distance are no constraints to the imaginative mind. The inspiration precedes the means. Without creativity, what do any of us have?” 
You feel these words burn deep in your soul.  

-> folding_space_end

=== folding_toolbox ===
You peer at the puzzle, then turn and reach into your toolbox. You pull out a small prybar, and carefully pull it left. Right. Excruciatingly slowly, you extricate the panel from the sides, revealing a space within. 

Inside the hole, you see a glass shard, glowing a deep blue-green, and a carefully rolled-up piece of parchment. You pick them both up.  

~get_good_shard()
~get(scroll)

You pocket the shard, and unroll the parchment.  
“Time and distance are no constraints to the imaginative mind. The inspiration precedes the means. Without creativity, what do any of us have?” 
You feel these words burn deep in your soul.  

-> folding_space_end

=== flight_open ===

After several minutes of careful deliberation, you solve the puzzle and the panel slides to the side, revealing a small hole in the obelisk. You peer inside cautiously. 

If the player succeeded the puzzle: 
Inside the hole, you see a glass shard, glowing a deep blue-green, and a carefully rolled-up piece of parchment. You pick them both up.  

~get_good_shard()
~get(scroll)

If the player fails the puzzle:
Inside the hole, you see a glass shard, glowing a dark red, and a carefully rolled-up piece of parchment. You pick them both up. 

~get_bad_shard()
~get(scroll)

You unfurl the parchment. It has a simple but beautiful illustration of a soaring sparrow. The text around the drawing reads:  

“For flight is freedom, and freedom is life. We may never be truly free until we can see our world from the eyes of the birds.” 
You feel these words burn deep in your soul. 

-> folding_space_end

=== flight_toolbox ===

You peer at the puzzle, then turn and reach into your toolbox. You pull out a small prybar, and carefully pull it left. Right. Excruciatingly slowly, you extricate the panel from the sides, revealing a space within. 

Inside the hole, you see a glass shard, glowing a deep blue-green, and a carefully rolled-up piece of parchment. You pick them both up.  

~get_good_shard()
~get(scroll)

You unfurl the parchment. It has a simple but beautiful illustration of a soaring sparrow. The text around the drawing reads:  

“For flight is freedom, and freedom is life. We may never be truly free until we can see our world from the eyes of the birds.” 
You feel these words burn deep in your soul. 

-> folding_space_end

=== folding_space_end ===

// Twin obelisks

You retreat back into the cockpit of your ship as you watch both obelisks, with a faint grating sound, retreat into the waves. With a click, they submerge deep underneath the waves. 

// Ocean, ship sprite

"The obelisks have submerged.”  
You roll your eyes, irritated partly by the ship’s stating of the obvious, partly because you’ll never discover what was in the second obelisk.  
You fly away from the planet, wondering what might have been.  

-> navigation
