0 s=0 :rem score
1 x = 20 :rem start x val
2 y = 10 : rem start y val
3 xsp= 0 : rem x speed
4 ysp= 0
5 print"{clr}";:poke53281,9:poke53280,8 :rem clear and color
10 for i = 1 to 300 :n=rnd(1)*999 :poke1024+n,(77.5+rnd(1)):poke55296+n,5:nexti:rem trees
11 for i = 1 to 10 :n=rnd(1)*919 :poke1064+n,90:poke55336+n,2:nexti:rem diamonds
12 for i = 0 to 39 :poke1024+i,127:poke55296+i,0:nexti:rem border top
13 for i = 0 to 39 :poke1984+i,127:poke56256+i,0:nexti:rem border bottom
14 gosub100:x=x+xsp:y=y+ysp:gosub300 :rem clear move check
15 poke 1024 +x + 40*y,81: rem show circle
16 poke55296 +x + 40*y,7
17 ysp=0
18 xsp=0
20 get a$ :rem listen for key
30 if a$ = "i" then ysp=-1:xsp=0:gosub 100
40 if a$ = "k" then ysp=+1:xsp=0:gosub 100
50 if a$ = "j" then xsp=-1:ysp=0:gosub 100
60 if a$ = "l" then xsp=+1:ysp=0:gosub 100
70 if x < 0 then goto500
71 if x > 39then goto500
72 if y < 1 then goto500
73 if y > 23 then goto500
80 goto 14
99 rem sub clears old cir position
100 poke 1024 +x + 40*y,32:rem del cir
110 poke55296 +x + 40*y,7:return
299 rem sub cheks for collision tree or heart
300 if peek(1024+x+40*y)= 77then 500
301 if peek(1024+x+40*y)= 78then 500
302 if peek(1024+x+40*y)= 90then s=s+1
303 if s =10then 600 :
400 return
499 rem end game
500 print"{clr}";
510 print "game over"
520 print "score",s
530 end
600 print"{clr}";
610 print "Cleared the maze!!!"
620 print "score",s 