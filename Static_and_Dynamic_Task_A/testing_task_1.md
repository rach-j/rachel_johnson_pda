### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1
      # Should be == not =
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # Should be def not dif
  # Should have comma after card1
  if card1.value > card2.value
    return card.name
    # card.name not defined - card object just has a suit and value
  else
    card2
    # For best practice, should explicitly return card2 (although as this is
    # the last thing done in the function, this will automatically return card2
    # if it is higher than card1 because of the way Ruby works)
  end
end
end
# Extra end here not required
# Note if card1 and card2 have the same value, card2 will be returned. I have
# assumed that this function will only be used to compare cards of different
# values and have not sought to add a further if for the case where the two
# cards are equal in value


def self.cards_total(cards)
  # 'self.' not required - function should apply to an array of card objects
  total
  # Total needs to be set equal to zero initially
  for card in cards
    total += card.value
    return "You have a total of" + total
    # Total needs to be converted to string
    # Return statement should be outside of the for loop
  end
end

# Missing 'end' for class CardGame

```
