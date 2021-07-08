def unique_in_order(x)
    a = (x.class == String ? x.chars : x ).chunk { |i| i }
    a.map{|a| a.first}
end


unique_in_order('AAAABBBCCDAABBB')
unique_in_order('ABBCcAD')
unique_in_order([1,2,2,3,3])