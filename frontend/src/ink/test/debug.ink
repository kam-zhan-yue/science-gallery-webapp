=== debug_mechanics === 
Debug Mechanics.
->character_select ->
+[Animations]
    ->test_animations
+[Buttons]
    ->test_responsive_buttons
+[Required Item]
    ->test_required_item
+[Take Item]
    ->test_take_item
+[Get Item]
    ->test_get_item


=== test_animations ===
AI Normal #AI
AI Happy #AI:happy
AI Sad #AI:sad
AI Very Happy #AI:veryhappy
->debug_mechanics

=== test_responsive_buttons ===
Testing responsive buttons.
+[attack:Deal 10 Damage.]
    ->->
+[important:Give an item]
    ->->
*[inventory:Open your inventory.]
    Opened the inventory. Might have to submit something
    ->test_take_item
    ->->
*[speech:Say something meaningful.]
    ->->
*[Just a normal button.]
    ->->
    
    
=== test_required_item ===
Get a torch.
~get(torch)
Give me the torch.
{inventory ? (torch):
    ->test_take_torch
-else:
    ->debug_mechanics
}

=== test_take_torch ===
Give me your torch.
~ required_item = torch
~ game_state = take_item
+[{torch}]
    ~ required_item = none
    ~game_state = exploring
    ->debug_mechanics

=== test_take_item ===
Testing open inventory.
~ game_state = take_item
    +[{artist_item}]
        ~take_ink(artist_item)
        A fine specimen. You are now King of Camelot.
        ~ game_state = exploring
        ->debug_mechanics
    +[{doctor_item},{mechanic_item}]
        // take is called outside of the story
        Hmmm. I will find some use of this.
        ~ game_state = exploring
        ->debug_mechanics
    *[other]
        // take is called outside of the story
        You imbecile.
        ~ game_state = exploring
        ->debug_mechanics

=== test_get_item ===
Get something
~get(star)
->debug_mechanics