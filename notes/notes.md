# Theory

- When the manager receives a signal, it sends an updated state of the game to everyone
- The host acts as the server, containing the main logic manager
- However, the host still acts as a client, sending out action signals
- Client sends signals then gets update of state back from server
- Host does the same, but the interpreter simply routes the signal to the manager instead of broadcasting them

- In summary, host acts as both the server and client

# Notes

- At new round, both player's state needs to be updated
  - Send player who revived first?

s h d
0 0 1
0 1 0
1 0 0
1 1 1
