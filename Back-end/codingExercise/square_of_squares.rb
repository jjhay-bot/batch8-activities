def check_sqrt(x)
    if x < 0
      return x,false
    elsif x**0.5 % 1== 0
        return x,true
    else
        return x,false
    end
end

x = [-1, 0, 3, 4, 25, 26]

x.each { |n| puts check_sqrt(n) }

puts "\n"

number= rand(-50...150)
    puts "random number:"
puts check_sqrt(number)