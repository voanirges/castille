I developed this odds test
using signalr for real time exchanging messages and data

I did not used database and such stuff but in real scenario 
the data would be used from database and would have timestamp 
when odds become active and expire, so automatically job would update 
odds in realtime instead of admin .Another thing is I did not
used Identity which will use in real scenario for login , roles
authentication and authorization, here I created two pages
one for admin and another for users

How it works :
Admin from his browser can add rows with countries for odds, and when clicks
update odds, using signalr data from table in JSON format is sent to all clients
in real world we can have more channels, so only users subscribed to some
channel would get this odds, channels like "football" or "baseball" etc.
When admin changes odds, all avtive users get message with odds and they are automatically updated
so they got them as nx2 buttons where they can click as to select(vote).
In real scenario this will also send message back to admin and write to database
and remove this odd from client page
