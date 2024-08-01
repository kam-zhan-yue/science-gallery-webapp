=== new_light ===

~background = new_light_main

You stare out into space.

With no clear destination in mind, you take a moment to reflect on everything that has happened since you entered that cave back on Shangri-La.

You think about your friends and family there, and the people you met on your way here.
You look over at the four shards you have collected.

{good_shards} of them are warmly glowing, while {bad_shards} of them are cold and ruddy.

AI: Well friend, this is the end of our time together. You have no more fuel.
AI: However, this is not the end for you.
AI: You have gained experience and memory shards, and now you have a choice.
AI: You can go back to where you started, and forget what you have seen and done

+[speech:What else?]

- AI: You can continue your travels. This ship must return to Shangri-La but you can take an escape pod.

+[speech:What else?]
    -> choices_1
    
=== choices_1 ===

{ good_shards < 2:
    AI: Those are your only options, friend. With more memory shards you could have perhaps done more.
    +[important:Forget]
        -> forget
    +[important:Keep travelling]
        -> continue_travel
- else:
    AI: With the memory shards you have gathered, I have the power to return all your memories to you. You will remember everything about yourself.
    +[speech:What about my friends and family?]
        -> choices_2
}

=== choices_2 ===

AI: You cannot help them. If you return to Shangri-La they will not remember you, and you will not be able to help them. 
+[Can I do anything else?]
    -> anything_else
    
=== anything_else ===

{   good_shards < 4:
    AI: Those are your only options, friend. With more memory shards you could have perhaps done more.
        +[important:Forget]
            -> forget
        +[important:Keep travelling]
            -> continue_travel
        +[important:Remember]
            -> remember
- else:
    AI: There is one more thing you could do.
    
    With the power of these four uncorrupted memory shards, we can return to Shangri-La and wake everyone up just as you were awoken.
                
    They will not regain their memories, nor will you, but you will give them a chance to see the universe for what it is.
            -> choices_3
}

=== choices_3 ===

+[important:Forget]
    -> forget
+[important:Keep travelling]
    -> continue_travel
+[important:Remember]
    -> remember
+[important:Awaken]
    -> awaken
*[speech:How can you do all this?]
    -> choices_explanation
    
=== choices_explanation ===

AI: It is my purpose. I do not know who gave it to me.

AI: I have awoken several members of our community.

AI: So far, no one has successfully gathered the materials we need.

AI: And so, I called to you.

AI: Now, you must choose.

-> choices_3

=== forget ===

You: I choose to forget. I liked my life the way it was.

-> obey

=== obey ===

AI: Very well. We shall return. Please place the shards into the fuel bay.
    +[important:Obey]
        -> forget_ending
    *[speech:If these are fuel, why can't I use them to go somewhere else?] 
        -> obey2
        
=== obey2 ===
AI: Very well. We shall return. Please place the shards into the fuel bay.
+[important:Obey]
    -> forget_ending
*[speech:Talk to me!] 
    -> obey3

=== obey3 ===
AI: Very well. We shall return. Please place the shards into the fuel bay.
+[important:Obey]
    -> forget_ending

=== forget_ending ===

You place the shards in the fuel bay and sit as the ship begins the journey home.

You’re so tired. This has all been so very difficult. You close your eyes.

~background = shangrila_main

Welcome to another day in paradise.

You wake up in your bed, the warmth of daylight gently hitting your face.

Another day in paradise.

You get out of bed, and look down at the code on your hand.

You are grateful for your code.

You never have to make any difficult decisions here.

Another day in paradise.

Nothing will ever change here.

Another day in paradise.

->ending_forget_everything

=== continue_travel ===

You don’t want this journey to end. You must keep travelling.

You: I want to keep going.

AI: Very well. Place the shards you have gathered into the fuel bay, and proceed to the escape pod.

+[important:Obey]
    -> travel_ending
+[speech:These are mine, I'm keeping them.]
    -> rebel

=== rebel ===

AI: They are not yours, and you cannot keep them.

AI: Place the shards you have gathered into the fuel bay, and proceed to the escape pod.

+[important:Obey]
    -> travel_ending
+[speech:No! Take them to the escape pod.]
    -> rebel_2

=== rebel_2 ===

You stuff the shards into your pockets and head to the escape pod.

The doors won’t open.

AI: You are not the owner of this ship. You are not in control.

AI: Place the shards you have gathered into the fuel bay, and the doors will open.

+[important:Obey]
    -> travel_ending
+[speech:Refuse.]
    -> rebel_3
    
=== rebel_3 ===

AI: Do you think you can outlast me? Do you think there is anything else you can do?

You notice that the doors surrounding this section of the ship have all closed.

+[important:Obey]
    -> travel_ending
+[speech:Refuse.]
    You: Let me out!” You scream, and pound your fists against the shuttle door.
    -> rebel_4
    
=== rebel_4 ===

AI: Place the shards you have gathered into the fuel bay, and the doors will open.

+[important:Obey]
    -> travel_ending
+[speech:Refuse.]
    -> rebel_4

=== travel_ending ===

AI: Thank you. Good luck.

You enter the escape pod, and settle into the captain’s chair. 

You may not have your memories, or your shards, but you have a future. 

You set off into the unknown.

-> ending_keep_travelling

=== remember ===

You: I want to remember. I need to know who I am.

AI: If that is what is most important to you. Please wait while I prepare the shards.

As REMNANT-J2B prepares the shards you feel nervous.

Is this the right decision? What if you don’t like who you are? Or, who you were?

It’s too late now, your decision has been made.

You say a silent goodbye to your friends and family back home, knowing you can never see them again.

AI: All ready. Here you go.

Suddenly a flood of memories bursts into your mind. 

The current is so strong you fear you will be washed away.

After some time, the memories settle.

You know who you are.

Are you happy? 

+[important:Yes]
    You are {name}
    -> ending_remember_everything
+[important:No]
    ~progress = 0
    -> navigation

=== awaken ===

REMNANT-J2B seems happier than you’ve ever seen her.

AI: Really? You’re going to do it? Wake everyone up?

+[important:Yes]
    -> continue_awaken
+[important:No. Actually I'm going to Forget]
    -> forget
+[important:No. Actually I'm going to Keep travelling]
    -> continue_travel
+[important:No. Actually I’m going to Remember]
    -> remember

=== continue_awaken ===

You: We’re going to do it. Everyone deserves the chance that I had.

You: Even if we don’t regain our memories, we will be able to make new ones. 

You: Real ones.

You: Let’s do this!

~background = shangrila

It takes you and REMNANT-J2B some time to return to Shangri-La, but finally you arrive.

You look at the gleaming city from space.

AI: It’s time. Place the shards into the beam producer.

+[speech:Will they be ok?]
    AI: You were ok, weren’t you? Place the shards into the beam producer.
    **[speech:I guess so. Go for it]
        -> awaken_ending
+[speech: Go for it]
    -> awaken_ending
    
=== awaken_ending ===

AI: 3

AI: ..2

AI: ..1

A beam of bright, warm, light extends from your ship down to the planet.

As it reflects off of the crystal city it multiplies, scattering beautiful light over the whole planet.

You feel warm inside, in the knowledge that you chose to share your good fortunes.

The ship lands on the planet, and you step out into the sun.

One of the enforcers walks past, and you instinctively tense.

Enforcers: What happened to us?

You relax as you realise even the enforcers were being kept prisoner here.

You are excited for what the future holds.

->ending_wake_shangrila


=== ending_keep_travelling ===
~ending = ending_travel
~achievement = endingTravel
->DONE


=== ending_remember_everything ===
~ending = ending_memory
~achievement = endingMemory
->DONE

=== ending_forget_everything ===
~ending = ending_forget
~achievement = endingForget
->DONE

=== ending_wake_shangrila ===
~ending = ending_wake
->DONE