=== test_responsive_buttons ===
Testing responsive buttons.
+[attack:Deal 10 Damage.]
    ->->
+[important:Give an item]
    ->->
*[inventory:Open your inventory.]
    How dare you.
    ->->
*[speech:Say something meaningful.]
    ->->
*[Just a normal button.]
    ->test_open_inventory
    
=== test_open_inventory ===
Testing open inventory.
~ game_state = take_item
    *[{artist_item}]
        ~take("excalibur")
        A fine specimen. You are now King of Camelot.
        ->->
    *[{doctor_item},{mechanic_item}]
        // take is called outside of the story
        Hmmm. I will find some use of this.
        ->->
    *[other]
        // take is called outside of the story
        You imbecile.
        ->->