STATE VARIABLES (items to be tracked):
1. Board
2. Guess Count
3. Win(/loss)
4. Secret Card
  4.1?. Correct attributes (secret card property values) // might be redundant if card is already saved
5. Guessed card?
  5.1? Previously guessed cards // might be attached to 5
6. Matching values?

PSEUDOCODE
1. Initialize state variables
  - Board
  - Secret card
  - Guess counter
  - Win/Loss
  - Wrong card guesses
  - Time (ICEBOX)

2. Initialize constants
  - (1/-1) = win/loss
  - Card List
    - Set properties for each
  - Secret Card Obj (includes card attributes as properties)
  - Correct/incorrect/partial square colors in the DOM

3. Store HTML elements
  - Search menu
  - Search dropdown menu
  - Guess bar grid
  - Hint menu
  - Guess Count
  - Winning card display div (revealed after game is finished)
    - also win/loss text

4. On Initial Load
  - Initialize state variables
  - Random number generator chooses mystery card
    - Store mystery card in secret card variable
    - Store correct attributes (properties)
  - Render base game state
    - Render guess count as 0
    - Render hint board as empty
    - Render board as blank
    - Set winner to null
  - Wait for use to submit first answer

5. When player types name
  - Search drop menu sorts through card names for matching characters
    - Return matching/semi-complete names to dropdown menu
      - take input and mutate using .toLowerCase()
      - iterrate through cardList array and compare with cardList.name for similar results;
      - load preview image next to related names (ICEBOX)
    - Allow user to click names in dropdown menu (ICEBOX)?
      - Send clicked name to content attribute inside input field element

6. Player submits first card name
  - Iterrate through card list to find matching card object
    - Save object idx under guessed card state?
  - Compare mystery card and guessed card name (property)
    - If true, move to end of game
    - If false, iterrate through property values of mystery card and guessed card to match values
      - Iterrate through properties to read values and compare with correct value using For..in (cannot use .some() type methods for objects)
        - If .some() returns false, render all board squares normally as red
          - Red will be default square highlight
        - If .some() returns true
          - Iterrate again with .every() on properties to find full matches
            - If true, render respective board squares with matching values as green
            
          - For keywords category
            - Iterrate with .filter()
              - Render matching keywords with green highlight

    - Return matching properties/values to (matching values state)?
  - Render board

7. Rendering board (after submit)
  - Create board squares for each category
  - Highlight board squares based on values of step 6


ICEBOX:
  1. Have JS create large card image so player cant cheat using devtools
  2. 