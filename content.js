// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "chuckle" ) {
            alert(list[0].name);
      }
    }
  );

  //data
  const list = [
    {
     "name": "I never forget my son's first words... \"Where the heck have you been for 16 years?\""
    },
    {
     "name": "My boss told me I intimidate my coworkers so I just stared at him until he apologized."
    },
    {
     "name": "Arguing with a woman is like buying a lottery ticket. You know you're not gonna win, but you're sure as hell gonna try."
    },
    {
     "name": "I threw a boomerang many years ago. I now live in constant fear."
    },
    {
     "name": "I was polite today. I said please. Well actually, I said \"b*tch please\"... But whatever."
    },
    {
     "name": "There's no \"I\" in \"team\" but there are 5 in \"individual brilliance\"."
    },
    {
     "name": "She's single if her man can't beat you up."
    },
    {
     "name": "It’s a good thing farts aren’t “contagious” like yawns."
    },
    {
     "name": "The only dates I get these days are software updates."
    },
    {
     "name": "I'm pretty sober, but I'm prettier drunk."
    },
    {
     "name": "Being in a relationship is like riding a bike, but the bike is on fire and everything around you is on fire because you're in hell."
    },
    {
     "name": "I wrote a song about a tortilla well actually it’s more of a wrap"
    },
    {
     "name": "ME: How much for the baby dragon?\nPET STORE CLERK: Sir, that’s a lizard.\nME: *not listening* When do they start breathing fire?"
    },
    {
     "name": "What did one boob say to the other boob? You are my breast friend!"
    },
    {
     "name": "Deuces are wild in poker and in Taco Bell bathrooms."
    },
    {
     "name": "Don't drink and drive cuz you might spill the drink."
    },
    {
     "name": "\"Beauty is not in the face; beauty is a light in the heart \". Does that mean Iron Man is the most beautiful person on earth?"
    },
    {
     "name": "I feel bad for single guys out there. Snap chat filters make 2s look like 10s. Good luck."
    },
    {
     "name": "A tree house is the biggest insult to a tree.\n\"Here, I killed your friend. Hold him.\""
    },
    {
     "name": "Your body is a poop gun and eating is reloading.",
    },
    {
     "name": "All the people who had candy stolen from them as babies, are now the adults buying girl scout cookies outside dispensaries."
    },
    {
     "name": "Friend: \"Hey do you like Disney????\"\nMe: \" Yo breath stink, you better bibbity bobbity back the f*ck up.\""
    },
    {
     "name": "Did you hear about the guys who got arrested for cow tipping, They got off on a tecchnicowlity."
    },
    {
     "name": "The most romantic thing you can do for a Nigerian girl is buy her a rose, oh i almost forgot to add ROYCE."
    },
    {
     "name": "This is not a good joke because there is no punchline."
    }
   ]
  