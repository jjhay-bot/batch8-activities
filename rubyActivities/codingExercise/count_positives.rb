array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

positive = array.select {|x| x > 0 }

negative = array.select {|x| x < 0 }

print [positive.length, negative.sum]