menu_prices = {
  starter: 6.50,
  main: 17.50,
  dessert: 5.50
}

def total_cost(menu)
running_total = 0
menu.each {|key, value| running_total += value}
p "The total cost of the meal is £#{ '%.2f' % running_total}"
end

total_cost(menu_prices)
