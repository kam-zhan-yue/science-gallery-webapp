~temp look_book_1 = false

=== words ===
You breathe a sigh of relief as you approach this planet, everything seems normal, and not too dangerous.

As you step out of your ship you are greeted by seemingly endless shelves of books. The stacks reach as far up and back as you can see, and contain books of every size, shape, and colour you can imagine.

You breathe in the smell of old and new books. Do you pick one up?
+[Pick up a book?]
    ->words_book
+[You don't like reading. Leave the book]
    ->words_librarian

=== words_book ===
~look_book_1 = true
You run your fingers along the spines of the books, and pick up one that calls to you. It’s old and dusty, as though no one has opened it in years. The title reads ‘I, Robot’.
~get(book_1)

You open the book, and briefly skim a tale about humans and robots co-existing. You wonder how long ago this was written, and whether it depicts an accurate history of this planet, Earth.

- Although the library feels cosy, you don’t want to stand around reading. Would you like to take the book?
    +[Yes, take the book]
        You slip the book into your bag. Suddenly a voice pierces the silence.
        
        Librarian: Well hello dearie!! I’d be happy to help you check out that book!
    +[No, you're not a book thief.]
        You’ve had enough of books for now. It’s time to go further into the library. You need to find something, but you’re not quite sure what you’re looking for.
    - ->words_librarian


=== words_librarian ===
Suddenly, you come face to face with something, no, someone, who you can only assume to be the librarian. You don’t know how long she’s been there, or how she managed to appear so quietly.
You try not to stare, instead fixing your gaze past the librarian.

As you do so, you notice a warm glow emanating from one of the aisles behind her. 

It feels like it’s calling to you. Like the shard back on Shangri-La did.

Librarian: Dearie? Are you quite alright?

- You snap your focus back to the librarian. 
    +[speech: Yes of course!]
        Librarian: Well, that's good
    +[speech: No, I don't know who I am]
        Librarian: Well, you’re in the right place. You can learn about a great number of people here. Maybe you’ll find one you want to be.
    - LIbrarian: Now, what can I do for you?
    +[speech: I'd like to borrow this, please]
        ->words_borrow
    +[speech: What's that thing back there?]
        ->words_enquire
    
=== words_borrow ===
{
- look_book_1 == true:
    ->words_library_card
- else :
    ->words_random_book
}

=== words_library_card ===
Librarian: No trouble, here’s your library card. Make sure you bring it back before the date written there.” She hands you a smooth shiny card.
~get(library_card)
You look at the library card and realise it somehow correctly displays your name, photo, and birthday. On the back, “I Robot - Due 27 March 8042”
->words_occupation

=== words_random_book ===
You grasp for a random book on the shelf to go along with your claim, and hand it to the librarian.

She looks down at the book in her hands and reads “Atopic dermatitis, the good, the bad, and the itchy: a thesis”. She looks back at you, her gaze suddenly piercing.

Librarian: This book isn’t what you’re interested in here.
{ class == Doctor:
    ->words_doctor
-else: 
    ->words_not_doctor
}


=== words_doctor ===
+[speech: Actually, I studied eczema. I would love to learn more!]
    ->words_persuasion_success
+[speech: Alright you got me, what's that glowing thing?]
    ->words_enquire
    
=== words_not_doctor ===
+[speech: It is! I... love dermatitist!]
    ->words_persuasion_check_1
+[speech: Alright you got me, what's that glowing thing?]
    ->words_enquire


=== words_persuasion_check_1 ===
{ - persuasion > 5:
    ->words_persuasion_success
- else:
    Librarian: No. I don't think so.
    Her gaze sharpens.
    +[Double down. Start yapping about eczema.]
        ->words_persuasion_check_2
    +[Alright, you got me, what's that glowing thing?]
        ->words_enquire
}

=== words_persuasion_check_2 ===
{ - persuasion > 2:
    ->words_persuasion_success
- else:
    Suddenly she screams.
    Librarian: THIEF! You don’t care about books, you’re trying to distract me so you can steal our memory shard. 
    You realise there’s no more talking. You only have one option.
    +[Fight her.]
    ->words_fight
}

=== words_persuasion_success ===
Her agitation softens as she senses your genuine interest in the book.
Librarian: Well, then of course you should borrow this book!
She blows off a layer of dust that had accumulated on the cover, and presents you with the book and a smooth shiny card. 
~get(book_2)
Librarian: Make sure you return it by the date on your library card.
~get(library_card)
You look at the library card she’s given you and realise it somehow correctly displays your name, photo, and birthday. On the back, “Atopic dermatitis, the good, the bad, and the itchy: a thesis” - Due 27 March 8042”
->words_occupation

=== words_occupation ===
That’s strange. It also lists your occupation, [mechanic/doctor/artist], and says ???
You shake off the strange feeling of not being able to remember exactly who you are, and place the card and book in your bag.
You are once again drawn to the glowing shard in the distance. This time the librarian notices your interest.
->words_enquire


=== words_enquire ===
Librarian: Ah, I see you’re interested in our memory shard. Excellent isn’t it? Our house of knowledge is such a fitting home for it.
You can’t quite explain why, but you need that shard. You weigh up your options and decide how to get it from her.
+[important: Talk her into giving it to you]
    ->words_convince
+[attack: Fight her for the shard]
    ->words_fight

=== words_convince ===
You: It is certainly a wonder. Is there any way I might be able to take it with me?
{class == Doctor:
    ->words_convince_doctor
- else: 
    ->words_convince_normal
}

=== words_convince_doctor ===
You: I have extensive knowledge of medical practices and procedures.” You see her eyes light with joy at the mention of knowledge
You: I could spend some time talking with you, and add the knowledge I have to this library?
She looks thoughtfully at the shard.
Librarian: Yes, I think that sounds about right. Come over here."
->words_persuasion_success_ending

=== words_convince_normal ===
Her eyes widen. “Take it with you? Well, I don’t know about that.”

You: I know it is a big ask. I just feel like I need it.
+[speech: I will take good care of it.]
    ->words_persuasion_check_3
+[inventory: I could trade you something for it?]
    ->words_use_item

=== words_persuasion_check_3 ===
{-persuasion > 3:
    ->words_persuasion_check_3_success
- else: 
    ->words_persuasion_check_3_failure
}

=== words_persuasion_check_3_success ===
    She looks at you, and it feels like she is staring into your soul. 
    It seems she likes what she sees.
    Librarian: Well, child, I cannot let you take something from the library without giving me something in return.
    If you would be willing to share what knowledge you have with me, I would be willing to part with the shard.
    +[speech: Thank you, I would be happy to share.]
    ->words_persuasion_success_ending
    +[On second thoughts, you don't want to talk, you want to fight]
    ->words_fight

=== words_persuasion_check_3_failure ===
Librarian: The library also has needs, child.
She looks at you, and it feels like she is staring into your soul.
It seems she does not like what she sees. One of her tentacles extends outwards, in a different direction to the shard.
->words_persuasion_failure_ending


=== words_use_item ===
Give the librarian an item from your inventory.
~game_state = take_item
*[{book_1}]
    ~game_state = exploring
    ->words_persuasion_success_ending
*[other]
    ~game_state = exploring
    ->words_persuasion_failure_ending

=== words_persuasion_failure_ending ===
You brace yourself. Is she going to hurt you?
The tentacle returns as quickly as it left, clutching… a shard?
Librarian: This is what you deserve.
She hands you the shard.
~get_bad_shard()
It feels … wrong. It’s so cold it stings your skin. You tuck it into your bag as you sense it’s time for you to leave.
You walk down the halls, trying to find your ship, and stumble upon a long timeline. You wonder if you can learn something from this, maybe where to go next.
You pause, looking at the Science Fiction Timeline, until you know where to go next.
You return to your ship, hopeful that your next journey will be better.
->words_end

=== words_persuasion_success_ending ===
She leads you down one of the aisles to the cosiest space you’ve ever seen.
You settle into a plush reading chair, and spend a few hours sharing your knowledge with the librarian.
After you’re done. She thanks you, and one of her tentacles reaches out the door.
Shortly after she draws it back inside, holding the shard. She hands it over to you.
~get_good_shard()
Despite its glass-like appearance it feels warm.
Librarian: Well, feel free to stay as long as you like. Once you’re done in this room I’d encourage you to go next door and look at our timeline.
You take advantage of the respite of this cosy room. Your eyes close, and when they open again you feel rested and refreshed.
The librarian seems to know things, so you should take her up on the suggestion and look at the Sci-Fi timeline next door.
Perhaps it contains a clue for where you should go next. 
Once you have had your fill of the library, and have a sense of where to go next, you return to your ship.
->words_end
    
=== words_fight ===
You need this shard, and the librarian is in your way. You brace yourself.
+[attack: Fight with your fists.]
    ->words_fight_fists
+[inventory: Use an item from your inventory]
    ->words_fight_item

=== words_fight_fists ===
You unleash the force of your fists upon the librarian.
{class == Mechanic:
    Your sentient toolbox also gets in a hit or two.
}
{class == Doctor:
This feels wrong, against everything you trained for.
}
{class == Artist:
The sharpness of your needle is a surprisingly effective weapon, though it saddens you to see it stained with blood.
}
{-finesse>3:
    ->words_fight_success
-else:
    ->words_fight_failure
}

=== words_fight_item ===
Use an item to fight the Librarian.
~game_state = take_item
//TODO fill this in
*[{book_1}]
    ->words_fight_success
*[other]
    ->words_fight_failure

=== words_fight_success ===
At last, she is defeated. You grab one of the ladders that should be for getting books, and climb up towards the shard.
As you climb, you see the warmth drain from the shard, and the colour change to a muddy red.
Undeterred, you snatch it up.
~get_bad_shard()
It feels … wrong. It’s so cold it stings your skin. You tuck it into your bag as you sense it’s time for you to leave.
- You start walking away, when suddenly a fire breaks out. You don’t know when it started, but it is consuming the library.
    +[Try to fight the fire]
        It's use. The blaze is out of control.
        ++[Run to the safety of your ship]
    +[Run to the safety of your ship]
    - You wait out the fire from space. You don't know where else to go.
    +[Wait]
        After some time, the blaze has died down. All that is left is a burned out metal book.
        You look at Untitled (Heat Book) until you know where to go next.
        ->words_end

=== words_fight_failure ===
It’s no use. Every time you try to strike, you are blocked by a tentacle.
Eventually it is clear that it is not worth fighting anymore. You have been defeated.
The librarian looks down at you. It seems like she pities you.
Librarian: My dear. Sharing is the foundation of a library.
Librarian: Take this, and think about what you have done here.
~get_good_shard()
She reaches out a tentacle and grabs the shard, passing it gently to you.
Librarian: Goodbye.
Despite its glass-like appearance, it feels warm. You put it in your bag and walk away.
As you go looking for your ship, you bump into a large metal book. It feels like the library showed you this for a reason.
Maybe it will have a clue for where you could go next.
You stay looking at Untitled (Heat Book) until you know where to go next.
You return to your ship, feeling a mix of emotions.
->words_end

=== words_end ===
->navigation