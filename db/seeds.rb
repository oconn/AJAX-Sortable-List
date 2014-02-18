require 'faker'

position = 1
10.times do 
  Item.create({
    name: Faker::Company.catch_phrase,
    position: position
  })
  position += 1
end