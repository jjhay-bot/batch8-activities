def century year
    p year % 2 ==0? year/100 : 1+(year/100)
end

century (1705)
century (1900)
century (1601)
century (2000)