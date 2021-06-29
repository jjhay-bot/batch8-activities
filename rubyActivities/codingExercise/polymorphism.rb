puts "=> Polymorphism by Inheritance  \n "

class Book
  def initialize(title, author, year_publish)
    @title = title
    @author = author
    @year_publish = year_publish
  end
  
  def book_details
    puts "The book #{@title} was written by #{@author} and publish by the year #{@year_publish}"
  end
end

class Son < Book
  def book_details
    puts "The book #{@title} was written by my father and publish by the year #{@year_publish}"
  end
end

class Speaker < Book 
  def book_details
    puts "The book #{@title} was written by #{@author} and publish by the year #{@year_publish}"
  end
end


jhay = Speaker.new("Harry Potter", "J. K. Rowling.", 1997)
jhay.book_details

puts "\n"

son = Son.new("Harry Potter", "J. K. Rowling.", 1997)
son.book_details

puts "\n----------------------------------------------------------------------------------   \n "






puts "=> Polymorphism by Duck-typing \n "

class Salary
  def type(income)
    income.type
  end
end

class Monthly
  def type
    puts "Your salary will be release every month"
  end
end

class Daily
  def type
    puts "Your salary will be release every day"
  end
end

employee_salary = Salary.new
month = Monthly.new
employee_salary.type(month)

puts "\n"

daily = Daily.new
employee_salary.type(daily)

