class Confection 
    def bake_deserts
      puts "Baking at 350 degrees for 25 minutes."
    end
  end
  
  class Cupcake < Confection
    def frosted
      puts "Applying frosting"
    end
  end
  
  cupCake = Cupcake.new
  cupCake.bake_deserts
  cupCake.frosted
  
  
  
  class BananaCake < Confection
  end
  
  bananaCake = BananaCake.new
  bananaCake.bake_deserts