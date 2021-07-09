def even_or_odd(number)
    p ['true', 'false'][number % 2]
    # p ['Even', 'Odd'][number % 2]
end
even_or_odd(9)              # Odd/false

#----------------------------------------------------------------------------------------------------------------
def remove_first_last(s)
    p s[1...-1]
end
remove_first_last('hello')      # "ell"

#----------------------------------------------------------------------------------------------------------------
def to_jaden_case x
    x.split.map(&:capitalize).join('')
end

to_jaden_case "The moMent      That trUth is organized, it becomes a lie."
            # "The Moment That Truth Is Organized, It Becomes A Lie."

#----------------------------------------------------------------------------------------------------------------
def unique_in_order(x)
    a = (x.class == String ? x.chars : x ).chunk { |i| i }
    a.map{|a| a.first}
end

unique_in_order('AAAABBBCCDAABBB')
unique_in_order('ABBCcAD')
unique_in_order([1,2,2,3,3]);

#----------------------------------------------------------------------------------------------------------------
def descending_order(n)
    n.digits.sort.reverse.join.to_i
    # n.to_s.chars.map {|n| n}.sort{|a, b| b<=>a }.join.to_i
end
end

descending_order(2121)              #2211

#----------------------------------------------------------------------------------------------------------------
def is_isogram(string)
    # p string.downcase.chars.uniq == string.downcase.chars
    p !string.downcase.chars.uniq!
end

is_isogram("Dermatoglyphics")           # no repeating letters
is_isogram("aba")
is_isogram("moOse") 