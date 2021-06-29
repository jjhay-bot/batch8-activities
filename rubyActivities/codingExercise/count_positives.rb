array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

print "count of positives numbers #{array.count {|x| x > 0}} \n "

negatives = array.keep_if {|x| x < 0 }

print "sum of negative numbers: #{negatives.sum} \n "