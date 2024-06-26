=== test_animations ===
Librarian Normal #Librarian
Librarian Angry #Librarian:angry
Librarian Sad #Librarian:sad
Double Librarian #Librarian #Librarian
Ship: Try to break #Librarian #Librarian:nothing
->->

=== test_responsive_buttons ===
Testing responsive buttons.
+[attack:Deal 10 Damage.]
    ->->
+[important:Give an item]
    ->->
*[inventory:Open your inventory.]
    Opened the inventory. Might have to submit something
    ->test_open_inventory
    ->->
*[speech:Say something meaningful.]
    ->->
*[Just a normal button.]
    ->->
    
=== test_open_inventory ===
Testing open inventory.
~ game_state = take_item
    *[{artist_item}]
        ~take_ink(artist_item)
        A fine specimen. You are now King of Camelot.
        ~ game_state = exploring
        ->->
    *[{doctor_item},{mechanic_item}]
        // take is called outside of the story
        Hmmm. I will find some use of this.
        ~ game_state = exploring
        ->->
    *[other]
        // take is called outside of the story
        You imbecile.
        ~ game_state = exploring
        ->->