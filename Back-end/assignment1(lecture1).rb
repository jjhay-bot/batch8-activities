puts "Assignment1 : #3? \n "

contact_data = [["ana@gmail.com", "123 Main Street", "555-123"],["avion@gmail.com", "404 Not found", "123-123" ]]
contacts = {"Analyn Cajocson" => {}, "Avion School" => {}}
Analyn = Hash.new
Analyn[:email] = contact_data[0][0]
Analyn[:address] = contact_data[0][1]
Analyn[:phone] = contact_data[0][2]
Avion = Hash.new
Avion[:email] = contact_data[1][0]
Avion[:address] = contact_data[1][1]
Avion[:phone] = contact_data[1][2]
contacts["Analyn Cajocson"] = Analyn;
contacts["Avion School"] = Avion;
puts contacts;


puts "\n\n "

puts "Assignment1 : #4? \n "

age = rand(30); 
puts "How old are you? \n "
puts "Age: #{age} \n ";
  puts "In 10 years you will be: #{age + 10}"
  puts "In 20 years you will be: #{age + 20}"
  puts "In 30 years you will be: #{age + 30}"
  puts "In 40 years you will be: #{age + 40}"