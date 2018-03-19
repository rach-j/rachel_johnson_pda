cheesecake_ingredients = ["biscuits", "butter", "cream cheese", "sugar", "double cream", "raspberries"]

def display_ingredients(ingredients)
  p "The ingredients in this dish are:"
  ingredients. each {|ingredient| p ingredient}
end

display_ingredients(cheesecake_ingredients)
