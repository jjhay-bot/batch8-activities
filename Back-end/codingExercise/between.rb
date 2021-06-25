def random_number(number)
    if number > 0 && number < 50
        puts "number is between 0-50"
    elsif number > 50 && number < 100
        puts "number is between 50-100"
    else
        puts "number is above 100"
    end
  end
  
  number = rand(0...150)
      puts "random number: #{number} \n"
      puts random_number(number);