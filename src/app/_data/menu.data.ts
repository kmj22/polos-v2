const items = [
  {
    'Draft Beer': [],
    'Bottled Beer': [{
      'name': 'Mango        Hard Seltzer',
      'abv': '5% ABV',
      'brewery': 'White Claw Seltzer Works',
      'location': 'Chicago, IL'
    }, {
      'name': 'Raspberry        Hard Seltzer',
      'abv': '5% ABV',
      'brewery': 'White Claw Seltzer Works',
      'location': 'Chicago, IL'
    }, {
      'name': 'Black Cherry        Hard Seltzer',
      'abv': '5% ABV',
      'brewery': 'White Claw Seltzer Works',
      'location': 'Chicago, IL'
    }, {
      'name': 'Ruby Grapefruit        Hard Seltzer',
      'abv': '5% ABV',
      'brewery': 'White Claw Seltzer Works',
      'location': 'Chicago, IL'
    }, {
      'name': 'BON V!V Mango        Hard Seltzer',
      'abv': '4.5% ABV',
      'brewery': 'Boathouse Beverage Co.',
      'location': 'Norwalk, CT'
    }, {
      'name': 'BON V!V Cranberry        Hard Seltzer',
      'abv': '4.5% ABV',
      'brewery': 'Boathouse Beverage Co.',
      'location': 'Norwalk, CT'
    }, {
      'name': 'BON V!V Black Cherry        Hard Seltzer',
      'abv': '4.5% ABV',
      'brewery': 'Boathouse Beverage Co.',
      'location': 'Norwalk, CT'
    }, {
      'name': 'BON V!V Grapefruit        Hard Seltzer',
      'abv': '4.5% ABV',
      'brewery': 'Boathouse Beverage Co.',
      'location': 'Norwalk, CT'
    }, {
      'name': 'Budweiser        Lager - American',
      'abv': '5% ABV',
      'brewery': 'Anheuser-Busch',
      'location': 'St. Louis, MO'
    }, {
      'name': 'Bud Light        Lager - American Light',
      'abv': '4.2% ABV',
      'brewery': 'Anheuser-Busch',
      'location': 'St. Louis, MO'
    }, {
      'name': 'Michelob ULTRA        Lager - American Light',
      'abv': '4.2% ABV',
      'brewery': 'Anheuser-Busch',
      'location': 'St. Louis, MO'
    }, {
      'name': 'Miller Lite        Lager - American Light',
      'abv': '4.2% ABV',
      'brewery': 'Miller Brewing Company',
      'location': 'Milwaukee, WI'
    }, {
      'name': 'Coors Light        Lager - American Light',
      'abv': '4.2% ABV',
      'brewery': 'Coors Brewing Company',
      'location': 'Golden, CO'
    }, {
      'name': 'Rolling Rock Extra Pale        Lager - American',
      'abv': '4.4% ABV',
      'brewery': 'Latrobe Brewing Co.',
      'location': 'Saint Louis, MO'
    }, {
      'name': 'Pabst Blue Ribbon        Lager - American',
      'abv': '4.8% ABV',
      'brewery': 'Pabst Brewing Company',
      'location': 'Los Angeles, CA'
    }, {
      'name': 'Fat Tire        Red Ale - American Amber / Red',
      'abv': '5.2% ABV',
      'brewery': 'New Belgium Brewing Company',
      'location': 'Fort Collins, CO'
    }, {
      'name': 'Peroni Nastro Azzurro        Lager - Euro Pale',
      'abv': '5.1% ABV',
      'brewery': 'Birra Peroni',
      'location': 'Roma, Lazio'
    }, {
      'name': 'Amstel Light        Lager - American Light',
      'abv': '3.5% ABV',
      'brewery': 'Amstel Bier',
      'location': 'Zoeterwoude, Zuid-Holland'
    }, {
      'name': 'Bass Pale Ale        Pale Ale - English',
      'abv': '5% ABV',
      'brewery': 'Bass Brewers',
      'location': 'Shamlesbury, Lancashire'
    }, {
      'name': 'Heineken        Lager - Euro Pale',
      'abv': '5% ABV',
      'brewery': 'Heineken',
      'location': 'Zoeterwoude, Zuid-Holland'
    }, {
      'name': 'Heineken Light        Lager - American Light',
      'abv': '3.3% ABV',
      'brewery': 'Heineken',
      'location': 'Zoeterwoude, Zuid-Holland'
    }, {
      'name': 'Corona Extra        Lager - American',
      'abv': '4.5% ABV',
      'brewery': 'Grupo Modelo',
      'location': 'Nava, Coahuila de Zaragoza'
    }, {
      'name': 'Corona Light        Lager - American Light',
      'abv': '4.1% ABV',
      'brewery': 'Grupo Modelo',
      'location': 'Nava, Coahuila de Zaragoza'
    }, {
      'name': 'Cidre        Cider - Traditional',
      'abv': '4.5% ABV',
      'brewery': 'Stella Artois',
      'location': 'Leuven, Vlaanderen'
    }, {
      'name': 'Crisp Apple        Cider - Sweet',
      'abv': '5% ABV',
      'brewery': 'Angry Orchard Cider Company',
      'location': 'Walden, NY'
    }, {
      'name': "Not Your Father's Root Beer (5.9%)        Root Beer",
      'abv': '5.9% ABV',
      'brewery': 'Small Town Brewery',
      'location': 'Wauconda, IL'
    }, {
      'name': 'Smirnoff Ice (US Only)        Malt Liquor',
      'abv': '4.5% ABV',
      'brewery': 'Smirnoff',
      'location': 'Norwalk, CT'
    }, {
      'name': 'Twisted Tea Hard Iced Tea        Malt Beer',
      'abv': '5% ABV',
      'brewery': 'Twisted Tea Brewing Company',
      'location': 'Cincinnati, OH'
    }, {'name': "O'Doul's Premium        Non-Alcoholic Beer", 'brewery': 'Anheuser-Busch', 'location': 'St. Louis, MO'}]
  }
];

export const FOOD_MENU = {
  starters: {
    name: 'Starters', category: 'starters', icon: '/assets/pretzel.svg',
    items: [
      {
        'price': '8',
        'name': 'Wisconsin Beer Battered Cheese Curds',
        'desc': 'Served with Spicy Ketchup & Chipotle Ranch Dressing'
      }, {
        'price': '8',
        'name': 'Bavarian Brew Pub Pretzels',
        'desc': 'Served with Guinness Cheddar Cheese Sauce & Stone Ground Mustard'
      }, {
        'price': '8',
        'name': 'Loaded Potato Skins',
        'desc': 'Bacon, Cheddar Cheese & Chives, served with Sour Cream'
      }, {'price': '8', 'name': 'Chicken Fingers', 'desc': 'Served with Honey Mustard'}, {
        'price': '10',
        'name': 'Buffalo Chicken Fingers',
        'desc': 'Served with Blue Cheese Dressing'
      }, {'price': '8', 'name': 'Fried Dill Pickles', 'desc': 'Served with Cajun Ranch Dressing'}, {
        'price': '8',
        'name': 'Beer Battered Mozzarella Sticks',
        'desc': 'Served with Tomato Sauce'
      }, {'price': '8', 'name': 'Fried Green Beans', 'desc': 'Served with Ranch Dressing & Wasabi Sauce'}, {
        'price': '8',
        'name': 'Traditional Bruschetta',
        'desc': 'Seasoned Crostini Topped with Tomato, Basil, Garlic, EVOO & Spices'
      }, {
        'price': '12',
        'name': 'Shrimp Cocktail',
        'desc': 'Chilled Shrimp Served with Cocktail Sauce & Lemon Wedges'
      }, {
        'price': '12',
        'name': 'California Avocado Toast 3 Ways',
        'desc': 'Tomato/Basil/Balsamic Glaze - Sunny Egg & Bacon Crumble - Goat Cheese/Scallions/Honey Drizzle'
      }, {'price': '8', 'name': 'Jalapeño Poppers', 'desc': 'Served with Sour Cream'}, {
        'price': '8',
        'name': 'Corn Nuggets',
        'desc': 'Served with Maple Syrup'
      }, {
        'price': '12',
        'name': 'Fried Calamari',
        'desc': 'Lightly Battered Squid Rings, Served with Tomato Sauce & Lemon Wedges'
      }, {'price': '8', 'name': 'Fried Pierogies', 'desc': 'Served with Sour Cream'}, {
        'price': '10',
        'name': 'Pierogies Sauteed with Butter & Onions',
        'desc': 'Served with Sour Cream'
      }]
  },
  shareables: {
    name: 'Shareables', category: 'shareables', icon: '/assets/nachos.svg',
    items: [
      {
        'price': '12',
        'name': 'Spinach & Artichoke Dip',
        'desc': 'Served with Tortilla Chips'
      }, {
        'price': '12',
        'name': 'Roasted Garlic Hummus Plate',
        'desc': 'Served with Roasted Red Peppers, Marinated Artichokes, Olives, Cucumbers & Pita Wedges'
      }, {
        'price': '10',
        'name': 'Cheese Quesadilla',
        'desc': 'Peppers, Onions & Bacon, Served with Salsa, Guacamole & Sour Cream'
      }, {
        'price': '16',
        'name': 'Pulled Pork Quesadilla',
        'desc': 'BBQ Pulled Pork, Cheddar Cheese, Caramelized Onions, Jalapeño Peppers & Cole Slaw'
      }, {'price': '5', 'name': 'Chips & Salsa'}, {'price': '8', 'name': 'Chips & Guacamole'}, {
        'price': '10',
        'name': 'Loaded Nachos',
        'desc': 'Melted Cheese, Onions, Tomatoes, Black Beans, Black Olives, Jalapeño Peppers & Bacon.  Served with  Salsa, Guacamole & Sour Cream'
      }
    ]
  },
  flatbreads: {
    name: 'Flatbreads', category: 'flatbreads', icon: '/assets/flatbread.svg',
    items: [
      {
        'price': '12',
        'name': 'Apple & Brie',
        'desc': 'Granny Smith Apples, Melted Brie, Caramelized Onions, Scallions & Balsamic Drizzle'
      }, {
        'price': '12',
        'name': 'Fig & Procuitto',
        'desc': 'Crispy Proscuitto, Fig Jam, Gorgonzola Cheese, Caramelized Onions & Fig Balsamic Drizzle'
      }, {
        'price': '12',
        'name': 'Portabello Mushroom',
        'desc': 'Roasted Garlic, Goat Cheese, Caramelized Onions & Truffle Balsamic Drizzle'
      }, {
        'price': '12',
        'name': 'Quattro Formaggi',
        'desc': 'Roasted Garlic, Ricotta Cheese, Provolone, Mozzarella, Parmesan & Herbs'
      }, {'price': '12', 'name': 'Asiago & Arugula', 'desc': 'Creamy Balsamic Dressing & Cherry Tomatoes'}, {
        'price': '12',
        'name': 'Tuscan',
        'desc': 'EVOO, Roasted Garlic, Marinated Artichokes, Roasted Red Peppers & Provolone Cheese'
      }
    ]
  },
  soups: {
    name: 'Soups', category: 'soups', icon: '/assets/soup.svg', items: [
      {'price': '5', 'name': 'Soup of the Day'}, {'price': '6', 'name': 'French Onion'}, {
        'price': '8',
        'name': 'Chili'
      }
    ]
  },
  wings: {
    name: 'Wings', category: 'wings', icon: '/assets/chicken.svg', items: [
      {'name': 'Buffalo'}, {
        'name': '5 Alarm Buffalo',
        'desc': 'Cayenne Pepper - Crushed Red Pepper - Jalapeño Pepper - Habanero Pepper - Ghost Pepper'
      }, {'name': 'BBQ'}, {'name': 'Smoked BBQ'}, {'name': 'Honey Mustard'}, {'name': 'Honey Garlic'}, {'name': 'Garlic Parmesan'}, {'name': 'Pesto Garlic Parmesan'}, {'name': 'Teriyaki'}, {'name': 'Jalapeño Ranch'}, {'name': 'Cajun Ranch'}, {'name': 'Cajun Dry Rub'}, {'name': 'Old Bay Dry Rub'}, {'name': 'Sriracha'}, {'name': 'Sweet Chili'}, {'name': 'Bourbon Maple Bacon'}, {'name': 'Naked'}
    ]
  },
  salads: {
    name: 'Salads', category: 'salads', icon: '/assets/salad.svg', items: [
      {
        'price': '10',
        'name': 'Classic Caesar',
        'desc': 'Romaine Lettuce, Garlic Croutons, Shaved Parmesan & Creamy Caesar Dressing'
      }, {
        'price': '10',
        'name': 'Arugula Salad',
        'desc': 'Baby Arugula, Fresh Mozzarella, Roasted Red Peppers, Gaeta Olives, Crispy Prosciutto & Roasted Garlic Dressing'
      }, {
        'price': '10',
        'name': 'Spinach Salad',
        'desc': 'Bacon, Sliced Egg, Candied Almonds & Crumbled Blue Cheese'
      }, {
        'price': '10',
        'name': 'Strawberry & Pecan Salad',
        'desc': 'Mixed Greens, Mandarin Oranges, Blueberries, Onions, Feta Cheese & Poppyseed Dressing'
      }, {
        'price': '10',
        'name': 'Apple Walnut Salad',
        'desc': 'Mixed Greens, Granny Smith Apples, Craisins, Candied Walnuts, Gorgonzola & Raspberry Vinaigrette'
      }, {
        'price': '10',
        'name': 'Pear & Pistachio Salad',
        'desc': 'Mixed Greens, Grapes, Dried Cherries, Gorgonzola & Cherry Balsamic Vinaigrette'
      }, {
        'price': '10',
        'name': 'Roasted Beet Salad',
        'desc': 'Onions, Cashews, Mandarin Oranges & Goat Cheese mixed with Mandarin Orange Vinaigrette served on a bed of Arugula'
      }, {
        'price': '10',
        'name': 'Cobb Salad',
        'desc': 'Romaine Lettuce, Turkey, Bacon, Egg, Avocado, Tomato, Black Olives & Crumbled Blue Cheese'
      }, {
        'price': '10',
        'name': 'Asian Salad',
        'desc': 'Romaine Lettuce, Crispy Noodles, Honey Roasted Peanuts, Mandarin Oranges.  Shredded Carrots & Sesame Ginger Dressing'
      }, {
        'price': '10',
        'name': 'Mediterranean Chopped Salad',
        'desc': 'Chopped Lettuce, Tomatoes, Onions, Roasted Red Peppers, Provolone Cheese, Salami.  Chick Peas, Artichoke Hearts & Lemon Vinaigrette'
      }, {
        'price': '10',
        'name': 'Southwestern Salad',
        'desc': 'Romaine Lettuce, Fire Roasted Corn, Black Beans, Tomatoes, Roasted Red Peppers.  Tortilla Strips, Frizzled Onions, Shredded Cheddar with Avocado Ranch & BBQ Sauce Drizzle'
      }, {
        'price': '10',
        'name': 'BLT Wedge',
        'desc': 'Iceberg Wedge, Beefsteak Tomato, Bacon Bits, Crumbled Blue Cheese & Blue Cheese Dressing'
      }, {
        'price': '10',
        'name': 'Mozzarella Caprese Salad',
        'desc': 'Fresh Mozzarella, Tomatoes, Fresh Basil.  Dressed with EVOO, Balsamic Glaze, Salt, Pepper & Oregano'
      }, {
        'price': '10',
        'name': 'Greek Salad',
        'desc': 'Romaine Lettuce, Tomatoes, Onions, Cucumbers, Kalamata Olives, Feta Cheese.  Stuffed Grape Leaves, Anchovies & House Vinaigrette Dressing'
      }, {
        'price': '16',
        'name': 'Buffalo Chicken Salad',
        'desc': 'Romaine Lettuce, Blue Cheese Crumble, Blue Cheese Dressing & Buffalo Chicken Fingers'
      }
    ]
  },
  sandwiches: {
    name: 'Sandwiches', category: 'sandwiches', icon: '/assets/sandwich.svg', items: [
      {
        'price': '10',
        'name': 'Grilled Chicken BLT - Turkey BLT - Classic BLT (All Served on Ciabatta Roll)',
        'desc': 'Bacon, Lettuce, Tomato & Mayo'
      }, {
        'price': '18',
        'name': 'Grilled Salmon BLT on Ciabatta Roll',
        'desc': 'Bacon, Lettuce, Tomato & Pesto Mayo'
      }, {
        'price': '12',
        'name': 'Pulled Pork Sandwich',
        'desc': 'BBQ Pulled Pork, Melted Cheddar & Cole Slaw served on a Potato Bun'
      }, {
        'price': '12',
        'name': 'Chicken Parmesan Sandwich',
        'desc': 'Breaded Chicken Cutlet, Mozzarella Cheese & Tomato Sauce'
      }, {
        'price': '12',
        'name': 'Grilled Portabello Panini',
        'desc': 'Roasted Red Peppers, Fresh Mozzarella, Spinach, Pesto Mayo & Balsamic Glaze'
      }, {
        'price': '10',
        'name': 'Brooklyn Panini',
        'desc': 'Grilled Chicken, Roasted Red Peppers, Fresh Mozzarella, Arugula & Balsamic Vinaigrette'
      }, {
        'price': '10',
        'name': 'Jersey Panini',
        'desc': 'Taylor Ham, American Cheese, Tomato, Onions & Mayo'
      }, {
        'price': '10',
        'name': 'Caprese Panini',
        'desc': 'Fresh Mozzarella, Tomatoes, Fresh Basil, Pesto Mayo & Balsamic Glaze'
      }, {
        'price': '14',
        'name': 'Cuban Panini',
        'desc': 'Mojo Marinated Pulled Pork, Sliced Virginia Ham, Melted Swiss Cheese, Sliced Pickles & Mustard'
      }, {
        'price': '12',
        'name': 'Turkey & Brie Panini',
        'desc': 'Sliced Granny Smith Apples, Cranberry Mayo & Arugula'
      }, {
        'price': '10',
        'name': 'Chicken Cordon Blue Panini',
        'desc': 'Fried Chicken, Sliced Virginia Ham, Melted Swiss & Garlic Mayo'
      }, {
        'price': '12',
        'name': 'Chicken Cutlet California Sandwich',
        'desc': 'Fried Chicken, Lettuce, Tomato, Onions & Mayo'
      }, {
        'price': '14',
        'name': 'Asiago Steak Sandwich',
        'desc': 'Thin Sliced Hanger Steak, Asiago Cheese, Caramelized Onions, Arugula & Horseradish Sauce'
      }, {
        'price': '14',
        'name': 'Philly Cheese Steak',
        'desc': 'Thin sliced Hanger Steak with Peppers, Onions, Mushrooms & American Cheese'
      }
    ]
  },
  pizza: {
    name: 'Pizza', category: 'pizza', icon: '/assets/pizza.svg', items: [
      {'price': '10', 'name': 'Classic Cheese'}, {
        'price': '14',
        'name': 'Honey Mustard Chicken Pizza',
        'desc': 'Fried Chicken, Ranch, Honey Mustard & Mozzarella'
      }, {
        'price': '14',
        'name': 'BBQ Chicken Bacon Ranch Pizza',
        'desc': 'Shredded Chicken, Ranch, BBQ Sauce, Bacon & Cheddar Cheese'
      }, {
        'price': '14',
        'name': 'Buffalo Chicken Pizza',
        'desc': 'Shredded Chicken, Bleu Cheese Crumble, Ranch Dressing, Buffalo Sauce & Cheddar Cheese'
      }, {'price': '14', 'name': 'Chicken Parm Pizza', 'desc': 'Fried Chicken & Mozzarella Cheese'}, {
        'price': '14',
        'name': 'Pizza Margherita',
        'desc': 'Fresh Mozzarella, Tomato, Basil & Garlic'
      }, {'price': '16', 'name': 'Vodka Pizza', 'desc': 'Vodka Sauce, Prociutto & Mozzarella'}, {
        'price': '18',
        'name': 'Pesto Chicken Pizza',
        'desc': 'Chicke, Pesto, Tomatoes & Mozzarella'
      }, {
        'price': '16',
        'name': 'Roasted Garlic & Prociutto Pizza',
        'desc': 'Fresh Mozzarella, Tomato, Basil, Roasted Garlic & Crispy Prociutto'
      }
    ]
  },
  burgers: {
    name: 'Burgers', category: 'burgers', icon: '/assets/burger.svg', items: [
      {
        'price': '12',
        'name': 'American Classic Burger',
        'desc': 'Lettuce, Tomato & American Cheese'
      }, {'price': '12', 'name': 'BLT Ranch Burger', 'desc': 'Bacon, Lettuce & Tomato with Ranch Dressing'}, {
        'price': '12',
        'name': 'Chili Burger',
        'desc': 'Melted Cheddar Cheese & Chili'
      }, {'price': '12', 'name': 'Blue Burger', 'desc': 'Bacon, Tomato & Crumbled Blue Cheese'}, {
        'price': '12',
        'name': 'Caprese Burger',
        'desc': 'Fresh Mozzarella, Tomato, Fresh Basil, Basil Aioli & Balsamic Glaze'
      }, {
        'price': '12',
        'name': 'Smoked Gouda Burger',
        'desc': 'Smoked Gouda, Smoked Paprika Onions, Lettuce, Tomato & Smoked BBQ Sauce'
      }, {'price': '12', 'name': 'Gorgonzola Burger', 'desc': 'Mushrooms, Scallions & Gorgonzola Cheese'}, {
        'price': '12',
        'name': 'Jalapeño Burger',
        'desc': 'Pepper Jack & Cheddar Cheese, Sliced Jalapeño Peppers, Frizzled Onions, Lettuce, Tomato & Chipotle Ranch'
      }, {'price': '12', 'name': 'Jersey Burger', 'desc': 'Taylor Ham, Egg & American Cheese'}, {
        'price': '12',
        'name': 'Philly Burger',
        'desc': 'Peppers, Onions, Mushrooms & American Cheese'
      }, {
        'price': '12',
        'name': 'Pulled Pork Burger',
        'desc': 'BBQ Pulled Pork, Cole Slaw & Cheddar Cheese'
      }, {
        'price': '12',
        'name': 'French Onion Burger',
        'desc': 'Brandied Caramelized Onions, Melted Swiss Cheese, Frizzled Onions & Garlic Mayo'
      }, {
        'price': '12',
        'name': 'Texas Burger',
        'desc': 'Bacon, Cheddar Cheese, Onion Rings, BBQ Sauce & Texas Petal Sauce'
      }, {
        'price': '12',
        'name': 'Buffalo Burger',
        'desc': 'Buffalo Sauce, Crumbled Blue Cheese, Lettuce & Frizzled Onions'
      }, {
        'price': '12',
        'name': 'Blackened Jack Burger',
        'desc': 'Sauteed Mushrooms, Melted Swiss. Lettuce, Tomato & Jack Daniels Sauce'
      }, {
        'price': '14',
        'name': 'Turkey Avocado Burger',
        'desc': 'Ground Turkey, Sliced Avocado, Tomato, Cheddar Cheese, Bacon & Honey Mustard'
      }, {
        'price': '14',
        'name': 'Garden Burger',
        'desc': 'Roasted Red Peppers, Portabello Mushrooms, Lettuce, Tomato & Pesto'
      }
    ]
  },
  entrees: {
    name: 'Entrees', category: 'entrees', icon: '/assets/meat.svg', items: [
      {
        'price': '14',
        'name': 'English Style Fish & Chips "Our Own Version"',
        'desc': 'Beer Battered Atlantic Cod with Pub Style Chips served with Tarter Sauce'
      }, {
        'price': '14',
        'name': 'Southern Fried Honey Dipt Chicken',
        'desc': 'With Garlic Mashed Potato & Fire Roasted Corn'
      }, {
        'price': '16',
        'name': 'Homestyle Chicken Pot Pie',
        'desc': 'Chicken, Carrots, Peas, Celery & Onions in a Rich Cream Sauce topped with Puff Pastry'
      }, {
        'price': '24',
        'name': 'Grilled Atlantic Salmon with Sauce vin Blanc',
        'desc': "White Wine Herbed Cream Sauce served with Roasted Potatoes & Chef's Vegetable"
      }, {
        'price': '24',
        'name': 'Baked Atlantic Salmon with Pesto Cream Sauce',
        'desc': 'Parmesan Crusted served with Garlic Mashed Potato & Chefs Vegetable'
      }, {
        'price': '28',
        'name': 'Grilled Double Cut Pork Chop with Apple Ginger Chutney',
        'desc': "Served with Garlic Mashed Potatoes & Chef's Vegetable"
      }, {
        'price': '16',
        'name': 'Chicken Balsamico',
        'desc': 'Grilled Chicken w/Shallots, Tomatoes & Spinach sauteed in a Balsamic Glaze Sauce with Penne Pasta'
      }, {
        'price': '14',
        'name': 'Capellini Caprese',
        'desc': 'Angel Hair with Garlic & Oil, Tomatoes, Basil, Fresh Mozzarella, Olives & Shaved Parmesan'
      }, {'price': '12', 'name': 'Penne Ala Vodka (Pink Cream Sauce with Prosciutto)'}, {
        'price': '12',
        'name': 'Mac & Cheese (Elbow Macaroni in a Creamy Cheese Sauce)'
      }, {'price': '28', 'name': 'Lobster Mac & Cheese with Parmesan Panko Crust'}, {
        'price': '32',
        'name': 'Filet Mignon Bordelaise',
        'desc': "8oz Filet with Red Wine Sauce served with Roasted Potatoes & Chef's Vegetable"
      }, {
        'price': '32',
        'name': 'Filet Mignon Aux Champignons',
        'desc': "8oz Filet with Mushroom Gravy Sauce served with Garlic Mashed & Chef's Vegetables"
      }, {
        'price': '36',
        'name': 'Bone-In Ribeye',
        'desc': "16oz Ribeye with Blue Cheese & Mushroom Crust served with Garlic Mashed & Chef's Vegetable"
      }, {
        'price': '32',
        'name': 'New York Strip Beurre Raifort',
        'desc': "16oz NY Strip Steak with Horseradish Herbed Butter served with Steak Fries & Chef's Vegetable"
      }, {
        'price': '28',
        'name': 'Grilled Hanger Chimichurri',
        'desc': "8oz Marinated Hanger Steak with Chimichurri Sauce, Steak Fries & Chef's Vegetable"
      }
    ]
  },
  sides: {
    name: 'Sides', category: 'sides', icon: '/assets/fries.svg', items: [
      {'price': '6', 'name': 'Beer Battered Onion Rings', 'desc': 'Served with Texas Petal Sauce'}, {
        'price': '6',
        'name': 'Disco Fries',
        'desc': 'Topped with Melted Mozzarella Cheese & Brown Gravy'
      }, {
        'price': '6',
        'name': 'Pizza Fries',
        'desc': 'Topped with Melted Mozzarella Cheese & Tomato Sauce'
      }, {
        'price': '8',
        'name': 'Irish Fries',
        'desc': 'Pub Style Chips Topped with Melted Cheddar Cheese, Bacon Bits, Scallions & Sour Cream'
      }, {
        'price': '8',
        'name': 'Chili Fries',
        'desc': 'Topped with Melted Cheddar Cheese, Chili & Sour Cream'
      }, {
        'price': '8',
        'name': 'Garlic Parmesan Fries',
        'desc': 'Steak Fries with Garlic Parmesan & Melted Mozzarella'
      }, {
        'price': '4',
        'name': 'Cheesy Garlic Bread',
        'desc': 'Topped with Melted Mozzarella served with Tomato Sauce'
      }, {'price': '8', 'name': 'Mac & Cheese', 'desc': 'Elbow Macaroni in a Creamy Cheese Sauce'}, {
        'price': '4',
        'name': 'Herb Roasted Red Potato'
      }, {'price': '4', 'name': 'Garlic Mashed Potato'}, {'price': '4', 'name': 'Steak Fries'}, {
        'price': '4',
        'name': 'Pub Style Chip Fries'
      }, {'price': '6', 'name': 'Tator Tots'}, {'price': '6', 'name': 'Waffle Fries'}, {
        'price': '6',
        'name': 'Sweet Potato Fries'
      }, {'price': '6', 'name': "Chef's Vegetable"}, {
        'price': '8',
        'name': 'Sauteed Spinach with Garlic & Oil'
      }, {'price': '8', 'name': 'Sauteed Portabello Mushrooms'}, {
        'price': '2',
        'name': 'Caramelized Onions'
      }, {'price': '2', 'name': 'Cole Slaw'}, {'price': '6', 'name': 'House Salad'}, {
        'price': '6',
        'name': 'Caesar Salad'
      }
    ]
  },
  kids: {
    name: 'Kids', category: 'kids', icon: '/assets/star.svg', items: [
      {'price': '6', 'name': 'Chicken Fingers with Fries'}, {
        'price': '6',
        'name': 'Grilled Cheese with Fries'
      }, {'price': '6', 'name': 'Cheeseburger with Fries'}, {'price': '6', 'name': 'Corn Dog with Fries'}, {
        'price': '8',
        'name': 'Mac & Cheese'
      }, {'price': '6', 'name': 'Pasta with Butter'}
    ]
  },
  desserts: {
    name: 'Desserts', category: 'desserts', icon: '/assets/dessert.svg', items: [
      {'price': '8', 'name': 'Tiramisu'}, {'price': '8', 'name': 'New York Cheesecake'}, {
        'price': '10',
        'name': 'Apple Crumb Tart'
      }, {'price': '8', 'name': 'Carrot Cake'}, {'price': '8', 'name': 'Chocolate Mousse'}, {
        'price': '10',
        'name': 'Chocolate Lava Cake'
      }, {'price': '10', 'name': 'Peanut Butter Explosion'}, {'price': '8', 'name': 'Funnel Cake Fries'}, {
        'price': '3',
        'name': 'Cannoli'
      }, {'price': '8', 'name': 'Fruit of the Day'}, {
        'price': '6',
        'name': 'Chocolate or Vanilla Ice Cream'
      }, {'price': '8', 'name': 'Ice Cream Sundae'}
    ]
  },
  wine: {
    name: 'Wine', category: 'wine', icon: '/assets/wine.svg',
    categories: [
      {
        title: 'Sparkling',
        items: [
          {
            'price': '$8 / $24',
            'name': 'Pasqua'
          }, {
            'price': '$8 / $24',
            'name': 'Mionetto'
          },
        ]
      },
      {
        title: 'White',
        items: [
          {
            'price': '$5 / $18',
            'name': 'Nando Asti'
          }, {
            'price': '$8 / $24',
            'name': 'Esperto By Livio Felluga'
          }, {
            'price': '$40',
            'name': 'Santa Margherita'
          }, {
            'price': '$8 / $24',
            'name': 'Casillero Del Diablo'
          }, {
            'price': '$8 / $24',
            'name': 'Glass Mountain'
          }, {
            'price': '$9 / $28',
            'name': 'Kendall-Jackson'
          }, {
            'price': '$7 / $21',
            'name': 'Blue Fish'
          },
        ]
      },
      {
        title: 'Red',
        items: [
          {
            'price': '$9 / $28',
            'name': 'Steelhead'
          }, {'price': '$42', 'name': 'La Crema'}, {
            'price': '$24',
            'name': 'Greystone'
          }, {
            'price': '$8 / $24',
            'name': 'Trivento'
          },
          {
            'price': '$8 / $24',
            'name': 'Ravenswood'
          }, {'price': '$38', 'name': 'SIMI'}, {
            'price': '$44',
            'name': 'Educated Guess'
          },
        ]
      },
      {
        title: 'House',
        items: [
          {
            'price': '$7 / $18 / $28',
            'name': 'Home Made Sangria'
          }, {'price': '$6', 'name': 'Pinot Grigio, Chardonnay, White Zinfandel, Merlot, Cabernet Sauvignon'}
        ]
      }
    ],
    items: []

  },
  cocktails: {
    name: 'Cocktails', category: 'cocktails', icon: '/assets/cocktail.svg', items: [
      {
        name: 'A Refreshing Detour',
        desc: 'Bombay Gin, Strawberry Puree, Club Soda, Splash of Cavit Moscato Fresh Basil & Strawberries'
      },
      {name: 'Netcong PD', desc: 'Malibu Rum, Blue Curacao & Pineapple Juice'},
      {name: 'Train Station Martini', desc: 'Jim Beam Red Stag, Apple Pucker, Cranberry Juice & Cherries'},
      {
        name: 'Netcong Fire Dept.',
        desc: 'Effen Cucumber Vodka, Dash of Sriracha Sauce, Tomato Juice & Spices, Celery & Jalapeno'
      },
      {
        name: 'Main Street Margarita',
        desc: '1800 Gold Tequila, Triple Sec, Lime Juice, Blended with Ice & Topped with Rose\'s House Sangria'
      },
      {name: 'The St. Cesario', desc: 'Campari, Orange Juice, Club Soda & Fresh Orange Slice'},
      {name: 'The Maple Ave', desc: 'Frangelico, Liquor 43, Cream, Maple Syrup & Brown Sugar Rim'},
      {
        name: 'The Assumption',
        desc: 'Bulleit Bourbon on the rocks, Lemon & Sugar Syrup.  Topped with a floater of Pedroncelli Rose'
      },
      {name: 'Stroll Street', desc: 'Stoli Razberi, Sour Mix, Sweet Iced Tea & Limes'},
      {name: 'Lenape Lemon Drop', desc: 'Ketel One Citroen, Lemonade, Kiss of Chambord & Sugared Rim'},
      {name: 'Lake Musconetcong', desc: 'Captain Morgan Spiced Rum, Ginger Beer & Muddled Lime'},
      {
        name: 'The Morris Canal',
        desc: 'Three Olives Triple Shot Espresso Vodka, Godiva Chocolate Liquor & Espresso Coffee'
      }
    ]
  },
  beer: {
    name: 'Beer', category: 'beer', icon: '/assets/beer.svg', categories: [{'items': [{'name': 'Mango Crush', 'abv': '4% ABV', 'brewery': 'Southern Tier Brewing Company', 'location': 'Lakewood, NY', 'ibu': '12 IBU', 'beer_style': 'Sour - Fruited', 'url': 'https://untappd.com/b/southern-tier-brewing-company-mango-crush/3031229', 'desc': 'The perfect choice for those who want flavor that reflects the fun of the summer season. Brewed with the perfect balance of mango puree and rich milk sugar, this gose style ale provides a refreshingly smooth drinking experience. 4% ABV', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3031229_3000f_sm.jpeg'}, {'name': "Orange Crushin' It", 'abv': '8% ABV', 'brewery': 'Cape May Brewing Co.', 'location': 'Cape May, NJ', 'ibu': '15 IBU', 'beer_style': 'IPA - American', 'url': 'https://untappd.com/b/cape-may-brewing-co-orange-crushin-it/2808541', 'desc': "Refreshing and great for the beach, Crushin' It is soon to be your summer staple. With Citra, Mosaic, and Azacca hops blending together to accentuate the fresh flavors of orange juice, Crushin' It is dry, approachable, and perfectly balanced. Relax in the sand. Enjoy a no shower happy hour. This beer is best paired with good friends, sunshine, and SPF 30.", 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-2808541_1857d_sm.jpeg'}, {'name': 'Summer Shandy', 'abv': '4.2% ABV', 'brewery': 'Jacob Leinenkugel Brewing Company', 'location': 'Chippewa Falls, WI', 'ibu': '14 IBU', 'beer_style': 'Shandy / Radler', 'url': 'https://untappd.com/b/jacob-leinenkugel-brewing-company-summer-shandy/8949', 'desc': 'A shandy is beer mixed with a little something extra like soda, juice or ginger ale. Leinenkugelâ€™sÂ® Summer ShandyÂ® is a traditional wheat beer with refreshing natural lemonade flavor that makes it perfect for the sun-splashed summer months. For a fun and fresh food pairing, try it with lighter, brighter foods like shrimp quesadillas, pan-seared scallops with lemon vinaigrette, or lemon chicken with pasta.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-8949_03823_sm.jpeg'}, {'name': 'Easy Ringer', 'abv': '4.3% ABV', 'brewery': 'Victory Brewing Company', 'location': 'Downingtown, PA', 'ibu': '25 IBU', 'beer_style': 'IPA - Session / India Session Ale', 'url': 'https://untappd.com/b/victory-brewing-company-easy-ringer/3552759', 'desc': 'Drinking crisp and light with little bitterness and tons of hop character, notes of passionfruit and citrus wow the crowd.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3552759_41c99_sm.jpeg'}, {'name': 'Boat Beer', 'abv': '4.2% ABV', 'brewery': 'Carton Brewing Company', 'location': 'Atlantic Highlands, NJ', 'ibu': '35 IBU', 'beer_style': 'IPA - Session / India Session Ale', 'url': 'https://untappd.com/b/carton-brewing-company-boat-beer/63631', 'desc': 'Boat Beer is designed to be complex enough to merit drinking a few without being crippled by alcohol. Kolsch yeast and German malts are combined to be crisp and refreshing, while a generous amount of American hops have been added to keep it remarkable. Expect it to dance out of the glass with a whack of grapefruit and open into a crisp, stony tangle of white and yellow fruit with pine and moss notes. An IPA for everyday drinking, drink boat beer when you are thirsty from softball, fishing, or explaining why your team is best.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-63631_eec08_sm.jpeg'}, {'name': 'Apricot Wheat', 'abv': '4.9% ABV', 'brewery': 'Ithaca Beer Company', 'location': 'Ithaca, NY', 'beer_style': 'Fruit Beer', 'url': 'https://untappd.com/b/ithaca-beer-company-apricot-wheat/4868', 'desc': 'Our easy drinking wheat beer is light in color and body ... perfect for those looking for a lighter taste. The combination of wheat and barley give our Apricot Wheat a different malt character than any of our other ales. The hint of apricot gives this beer a fruity finish, making it a fun beer to drink.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-4868_df8af_sm.jpeg'}, {'name': 'Samuel Adams Summer Ale', 'abv': '5.3% ABV', 'brewery': 'Boston Beer Company', 'location': 'Boston, MA', 'ibu': '7 IBU', 'beer_style': 'Wheat Beer - American Pale Wheat', 'url': 'https://untappd.com/b/boston-beer-company-samuel-adams-summer-ale/3916', 'desc': 'Samuel AdamsÂ® Summer Ale is an American wheat ale. This hazy golden unfiltered brew combines crisp wheat with the bright citrus of lemon peel and the subtle spice of Grains of Paradise.  This rare African pepper, closely related to cardamom, was first used as a brewing spice in the 13th Century and adds just the right peppery kick. All of these flavors come together to create a thirst quenching and utterly refreshing brew perfect for those warm summer days.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-_3916_sm_2a69f4a012bc330ad111bc2e508cc6.jpeg'}, {'name': 'Black Cherry', 'abv': '5% ABV', 'brewery': "McKenzie's Hard Cider", 'location': 'West Seneca, NY', 'ibu': '8 IBU', 'beer_style': 'Cider - Other Fruit', 'url': 'https://untappd.com/b/mckenzie-s-hard-cider-black-cherry/46197', 'desc': "Reserved for the darkest of hearts, McKenzie's Black Cherry is an inspiration to hard cider - rich amber, full body with a refreshingly sweet cherry finish.", 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-_46197_sm_3ecdcddd31fe3bddfa228de164ee90.jpeg'}, {'name': 'White', 'abv': '5.2% ABV', 'brewery': 'Allagash Brewing Company', 'location': 'Portland, ME', 'ibu': '13 IBU', 'beer_style': 'Wheat Beer - Witbier', 'url': 'https://untappd.com/b/allagash-brewing-company-white/5862', 'desc': 'Allagash White features a refreshing balance of citrus and spice. Wheat, coriander, and CuraÃ§ao orange peel round out the flavor of this pale straw-colored, hazy beer.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-5862_2189b_sm.jpeg'}, {'name': 'Head High', 'abv': '6.6% ABV', 'brewery': 'Kane Brewing Company', 'location': 'Ocean, NJ', 'ibu': '80 IBU', 'beer_style': 'IPA - American', 'url': 'https://untappd.com/b/kane-brewing-company-head-high/69614', 'desc': 'Head High is our interpretation of an American-style India Pale Ale (IPA).  This beer is all about the hops; we use a blend of five different varieties all grown in the Pacific Northwest.  A small charge of Chinook and Columbus early in the boil adds a smooth bitterness.  A majority of the hops are then added late in the kettle or post-fermentation to produce a beer that is heavy on hop flavor and aroma.  The combination of Cascade, Centennial, Citra and Columbus give Head High a noticeable grapefruit flavor with aromas of citrus, tropical fruits and pine.  Our house American ale yeast ferments to a dry finish that accentuates the use of imported Pilsner and lightly kilned crystal malt resulting in Head Highâ€™s straw color and crisp flavor.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-69614_247a2_sm.jpeg'}, {'name': 'The Shipwright', 'abv': '6.2% ABV', 'brewery': 'Czig Meister', 'location': 'Hackettstown, NJ', 'ibu': '73 IBU', 'beer_style': 'IPA - American', 'url': 'https://untappd.com/b/czig-meister-the-shipwright/1753997', 'desc': 'This IPA has HUGE hop aroma and flavor.  With just enough of a malt backbone to keep this beer easy drinking, the hops do all the work.  Big citrusy and fruity flavors come through from the copious dry hop and late kettle additions of Amarillo, El Dorado and Citra hops.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-1753997_96559_sm.jpeg'}, {'name': 'The Great Porter', 'abv': '5.5% ABV', 'brewery': 'Man Skirt Brewing', 'location': 'Hackettstown, NJ', 'ibu': '34 IBU', 'beer_style': 'Porter - American', 'url': 'https://untappd.com/b/man-skirt-brewing-the-great-porter/1218234', 'desc': "Dark, roasty, chocolatey, creamy, with just the right amount of hops to offset the sweetness of the grain bill. Think you don't like dark beers? Give this one a try and you may become a believer. We don't call it Great for nothing.", 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-1218234_02b78_sm.jpeg'}, {'name': 'Stella Artois', 'abv': '5% ABV', 'brewery': 'Stella Artois', 'location': 'Leuven, Vlaanderen', 'ibu': '24 IBU', 'beer_style': 'Lager - Euro Pale', 'url': 'https://untappd.com/b/stella-artois-stella-artois/4010', 'desc': 'Stella Artois was first brewed as a Christmas beer in Leuven. It was named Stella from the star of Christmas, and Artois after Sebastian Artois, founder of the brewery. It is brewed to perfection using the original Stella Artois yeast and the celebrated Saaz hops. It is the optimum premium lager, with its full flavour and clean crisp taste.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-4010_5da67_sm.jpeg'}, {'name': 'Guinness Draught', 'abv': '4.2% ABV', 'brewery': 'Guinness', 'location': "Saint James' Gate, Leinster", 'ibu': '45 IBU', 'beer_style': 'Stout - Irish Dry', 'url': 'https://untappd.com/b/guinness-guinness-draught/4473', 'desc': 'Swirling clouds tumble as the storm begins to calm. Settle. Breathe in the moment, then break through the smooth, light head to the bittersweet reward.Unmistakeably GUINNESS, from the first velvet sip to the last, lingering drop. And every deep-dark satisfying mouthful in between.Pure beauty. Pure GUINNESS.Guinness Draught is sold in kegs, widget cans, and bottles. The ABV varies from 4.1 to 4.3%.Guinness Extra Cold is the exact same beer only served through a super cooler at 3.5 Â°C', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-4473_1cbe8_sm.jpeg'}, {'name': 'Belgian White', 'abv': '5.4% ABV', 'brewery': 'Blue Moon Brewing Company', 'location': 'Denver, CO', 'ibu': '9 IBU', 'beer_style': 'Wheat Beer - Witbier', 'url': 'https://untappd.com/b/blue-moon-brewing-company-belgian-white/3839', 'desc': 'Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg'}, {'name': 'Traditional Lager', 'abv': '4.5% ABV', 'brewery': 'Yuengling Brewery', 'location': 'Pottsville, PA', 'ibu': '16 IBU', 'beer_style': 'Lager - American Amber / Red', 'url': 'https://untappd.com/b/yuengling-brewery-traditional-lager/16649', 'desc': 'Famous for its rich amber color and medium-bodied flavor with roasted caramel malt for a subtle sweetness and a combination of cluster and cascade hops, this true original delivers a well-balanced taste with very distinct character. Born from a historic recipe that was resurrected in 1987, Yuengling Traditional Lager is a true classic.Learn more: http://www.yuengling.com/lager', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-16649_c244e_sm.jpeg'}, {'name': 'Michelob ULTRA', 'abv': '4.2% ABV', 'brewery': 'Anheuser-Busch', 'location': 'St. Louis, MO', 'ibu': '10 IBU', 'beer_style': 'Lager - American Light', 'url': 'https://untappd.com/b/anheuser-busch-michelob-ultra/6655', 'desc': 'A superior light beer. Brewed using the finest barley malt, select grains, all-imported hops and a pure-cultured yeast strain. The special choice of grains combined with the extended mashing process produces a smooth, refreshing beer with fewer carbohydrates.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-6655_afc4e_sm.jpeg'}, {'name': 'Bud Light', 'abv': '4.2% ABV', 'brewery': 'Anheuser-Busch', 'location': 'St. Louis, MO', 'ibu': '6 IBU', 'beer_style': 'Lager - American Light', 'url': 'https://untappd.com/b/anheuser-busch-bud-light/3784', 'desc': 'Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice. Its superior drinkability and refreshing flavor makes it the worldâ€™s favorite light beer.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3784_0e2c3_sm.jpeg'}], 'title': 'Draft Beer'}, {'items': [{'name': 'Mango', 'abv': '5% ABV', 'brewery': 'White Claw Seltzer Works', 'location': 'Chicago, IL', 'beer_style': 'Hard Seltzer', 'url': 'https://untappd.com/b/white-claw-seltzer-works-mango/2795590', 'desc': 'Hard seltzer with a twist of fresh Mango flavor. Enjoy pure refreshment with this sweet, summer fruit flavor year-round.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-2795590_9ea2c_sm.jpeg'}, {'name': 'Raspberry', 'abv': '5% ABV', 'brewery': 'White Claw Seltzer Works', 'location': 'Chicago, IL', 'beer_style': 'Hard Seltzer', 'url': 'https://untappd.com/b/white-claw-seltzer-works-raspberry/2791942', 'desc': 'Where fresh, ripe raspberry flavor meets cold, crisp refreshment. Enjoy the sweet yet tart flavor of White ClawÂ® Hard Seltzer Raspberry today.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-2791942_02038_sm.jpeg'}, {'name': 'Black Cherry', 'abv': '5% ABV', 'brewery': 'White Claw Seltzer Works', 'location': 'Chicago, IL', 'beer_style': 'Hard Seltzer', 'url': 'https://untappd.com/b/white-claw-seltzer-works-black-cherry/2792321', 'desc': "Black Cherry seamlessly balances the tartness and sweetness of a ripe summer cherry. It's the perfect introduction to the crisp, refreshing taste of White ClawÂ® Hard Seltzer.", 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-2792321_ea381_sm.jpeg'}, {'name': 'Ruby Grapefruit', 'abv': '5% ABV', 'brewery': 'White Claw Seltzer Works', 'location': 'Chicago, IL', 'beer_style': 'Hard Seltzer', 'url': 'https://untappd.com/b/white-claw-seltzer-works-ruby-grapefruit/2798572', 'desc': 'The bright citrus flavor of Ruby Grapefruit is unlike any other. With a hint of freshly cut fruit flavor and satisfying zest of grapefruit, youâ€™ll enjoy this smooth tasting beverage in any occasion.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-2798572_53a71_sm.jpeg'}, {'name': 'BON V!V Mango', 'abv': '4.5% ABV', 'brewery': 'Boathouse Beverage Co.', 'location': 'Norwalk, CT', 'beer_style': 'Hard Seltzer', 'url': 'https://untappd.com/b/boathouse-beverage-co-bon-v-v-mango/3363536', 'desc': 'To create the light, refreshing taste of BON V!V, we use simple, select ingredientsâ€”purified water, champagne yeast, and natural fruit flavors. Thatâ€™s it! Thatâ€™s what gets us to our perfect 4.5% ABV. No barley or wheatâ€”weâ€™re totally gluten-free. And only 90 calories? Weâ€™ll cheers to that!', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3363536_f0286_sm.jpeg'}, {'name': 'BON V!V Cranberry', 'abv': '4.5% ABV', 'brewery': 'Boathouse Beverage Co.', 'location': 'Norwalk, CT', 'beer_style': 'Hard Seltzer', 'url': 'https://untappd.com/b/boathouse-beverage-co-bon-v-v-cranberry/3035136', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3035136_a6e63_sm.jpeg'}, {'name': 'BON V!V Black Cherry', 'abv': '4.5% ABV', 'brewery': 'Boathouse Beverage Co.', 'location': 'Norwalk, CT', 'beer_style': 'Hard Seltzer', 'url': 'https://untappd.com/b/boathouse-beverage-co-bon-v-v-black-cherry/3748445', 'desc': 'To create the light, refreshing taste of BON V!V, we use simple, select ingredientsâ€”purified water, champagne yeast, and natural fruit flavors. Thatâ€™s it! Thatâ€™s what gets us to our perfect 4.5% ABV. No barley or wheatâ€”weâ€™re totally gluten free. And only 90 calories? Weâ€™ll cheers to that!', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3748445_ceda9_sm.jpeg'}, {'name': 'BON V!V Grapefruit', 'abv': '4.5% ABV', 'brewery': 'Boathouse Beverage Co.', 'location': 'Norwalk, CT', 'beer_style': 'Hard Seltzer', 'url': 'https://untappd.com/b/boathouse-beverage-co-bon-v-v-grapefruit/3039912', 'desc': 'To create the light, refreshing taste of BON V!V, we use simple, select ingredientsâ€”purified water, champagne yeast, and natural fruit flavors. Thatâ€™s it! Thatâ€™s what gets us to our perfect 4.5% ABV. No barley or wheatâ€”weâ€™re totally gluten-free. And only 90 calories? Weâ€™ll cheers to that!', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3039912_3f590_sm.jpeg'}, {'name': 'Budweiser', 'abv': '5% ABV', 'brewery': 'Anheuser-Busch', 'location': 'St. Louis, MO', 'ibu': '12 IBU', 'beer_style': 'Lager - American', 'url': 'https://untappd.com/b/anheuser-busch-budweiser/3783', 'desc': 'Known as "The King of Beers," Budweiser was first introduced by Adolphus Busch in 1876 and it\'s still brewed with the same high standards today. Budweiser is a medium-bodied, flavorful, crisp American-style lager. Brewed with the best barley malt and a blend of premium hop varieties, it is an icon of core American values like optimism and celebration.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3783_b208c_sm.jpeg'}, {'name': 'Bud Light', 'abv': '4.2% ABV', 'brewery': 'Anheuser-Busch', 'location': 'St. Louis, MO', 'ibu': '6 IBU', 'beer_style': 'Lager - American Light', 'url': 'https://untappd.com/b/anheuser-busch-bud-light/3784', 'desc': 'Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice. Its superior drinkability and refreshing flavor makes it the worldâ€™s favorite light beer.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3784_0e2c3_sm.jpeg'}, {'name': 'Michelob ULTRA', 'abv': '4.2% ABV', 'brewery': 'Anheuser-Busch', 'location': 'St. Louis, MO', 'ibu': '10 IBU', 'beer_style': 'Lager - American Light', 'url': 'https://untappd.com/b/anheuser-busch-michelob-ultra/6655', 'desc': 'A superior light beer. Brewed using the finest barley malt, select grains, all-imported hops and a pure-cultured yeast strain. The special choice of grains combined with the extended mashing process produces a smooth, refreshing beer with fewer carbohydrates.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-6655_afc4e_sm.jpeg'}, {'name': 'Miller Lite', 'abv': '4.2% ABV', 'brewery': 'Miller Brewing Company', 'location': 'Milwaukee, WI', 'ibu': '10 IBU', 'beer_style': 'Lager - American Light', 'url': 'https://untappd.com/b/miller-brewing-company-miller-lite/3811', 'desc': 'Our flagship brand, Miller Lite, is the great tasting, less filling beer that defined the American light beer category in 1975. We deliver a clear, simple message to consumers: \\Miller Lite is the better beer choice.\\" What\'s our proof?1) Miller Lite is the original light beer.2) Miller Lite has real beer taste because it\'s never watered down.3) Miller Lite is the only beer to win four gold awards in the World Beer Cup for best American-style light lager. (2006)', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3811_00614_sm.jpeg'}, {'name': 'Coors Light', 'abv': '4.2% ABV', 'brewery': 'Coors Brewing Company', 'location': 'Golden, CO', 'ibu': '10 IBU', 'beer_style': 'Lager - American Light', 'url': 'https://untappd.com/b/coors-brewing-company-coors-light/3834', 'desc': 'Coors Light is Coors Brewing Company\'s largest-selling brand and the fourth best-selling beer in the U.S. Introduced in 1978, Coors Light has been a favorite in delivering the ultimate in cold refreshment for more than 25 years. The simple, silver-toned can caught people\'s attention and the brew became nicknamed the \\Silver Bullet\\" as sales climbed."', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3834_9e28f_sm.jpeg'}, {'name': 'Rolling Rock Extra Pale', 'abv': '4.4% ABV', 'brewery': 'Latrobe Brewing Co.', 'location': 'Saint Louis, MO', 'ibu': '5 IBU', 'beer_style': 'Lager - American', 'url': 'https://untappd.com/b/latrobe-brewing-co-rolling-rock-extra-pale/38907', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-38907_a690b_sm.jpeg'}, {'name': 'Pabst Blue Ribbon', 'abv': '4.8% ABV', 'brewery': 'Pabst Brewing Company', 'location': 'Los Angeles, CA', 'ibu': '10 IBU', 'beer_style': 'Lager - American', 'url': 'https://untappd.com/b/pabst-brewing-company-pabst-blue-ribbon/3883', 'desc': "This is the original Pabst Blue Ribbon Beer. Nature's choicest products provide its prized flavor. Only the finest of hops and grains are used. Selected as America's Best in 1893.", 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-3883_a0aa4_sm.jpeg'}, {'name': 'Fat Tire', 'abv': '5.2% ABV', 'brewery': 'New Belgium Brewing Company', 'location': 'Fort Collins, CO', 'ibu': '22 IBU', 'beer_style': 'Red Ale - American Amber / Red', 'url': 'https://untappd.com/b/new-belgium-brewing-company-fat-tire/6887', 'desc': 'Fat Tire Amber is the easy-drinking Amber Ale born in Colorado from New Belgium Brewing Company, a certified B-Corp.\xa0Malts: Pale, C-80, Munich, VictoryHops: Willamette, Goldings, NuggetYeast: House Ale Yeast', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-6887_f0b47_sm.jpeg'}, {'name': 'Peroni Nastro Azzurro', 'abv': '5.1% ABV', 'brewery': 'Birra Peroni', 'location': 'Roma, Lazio', 'beer_style': 'Lager - Euro Pale', 'url': 'https://untappd.com/b/birra-peroni-peroni-nastro-azzurro/7427', 'desc': 'NOTE: "Peroni" Original and "Peroni Nastro Azzuro" are two different beers. Ensure you are checking into the correct one.Peroni Nastro Azzurro is 5.1% in alcohol by volume. The beer was crafted with typical Italian care, and designed with the Mediterranean palate in mind. Roberto is the third generation from the Cavalli family to be master brewers for Birra Peroni, ensuring the high quality and standards of the beer.  Italian passion, attention to detail and craftsmanship are the ingredients that now, and forever, will ensure the superior and authentic Italian taste of Peroni Nastro Azzurro.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-_7427_2d8bd3b143ec75ccdceb756fff00.jpeg'}, {'name': 'Amstel Light', 'abv': '3.5% ABV', 'brewery': 'Amstel Bier', 'location': 'Zoeterwoude, Zuid-Holland', 'beer_style': 'Lager - American Light', 'url': 'https://untappd.com/b/amstel-bier-amstel-light/4541', 'desc': 'Amstel Light has a rich, hoppy, never-diluted flavor that sets it apart from other light beers.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-4541_68e90_sm.jpeg'}, {'name': 'Bass Pale Ale', 'abv': '5% ABV', 'brewery': 'Bass Brewers', 'location': 'Shamlesbury, Lancashire', 'ibu': '49 IBU', 'beer_style': 'Pale Ale - English', 'url': 'https://untappd.com/b/bass-brewers-bass-pale-ale/5872', 'desc': 'A classic pale ale. This version of Bass for the North American market at 5% to comply with USA ale regulations.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-5872_5ce96_sm.jpeg'}, {'name': 'Heineken', 'abv': '5% ABV', 'brewery': 'Heineken', 'location': 'Zoeterwoude, Zuid-Holland', 'ibu': '19 IBU', 'beer_style': 'Lager - Euro Pale', 'url': 'https://untappd.com/b/heineken-heineken/5860', 'desc': 'Heineken is a 5% ABV euro pale lager, made by Heineken International since 1873. It is available in a 4.3% alcohol by volume, in countries such as Ireland. It is the flagship product of the company and is made of purified water, malted barley, hops, and yeast. In 1886 H. Elion finished the development of the Heineken A-yeast. This is the yeast that is still used for the beer. The beer is force carbonated. It is popular in the United States, Europe and Middle Eastern countries.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-5860_a68ef_sm.jpeg'}, {'name': 'Heineken Light', 'abv': '3.3% ABV', 'brewery': 'Heineken', 'location': 'Zoeterwoude, Zuid-Holland', 'ibu': '12 IBU', 'beer_style': 'Lager - American Light', 'url': 'https://untappd.com/b/heineken-heineken-light/5867', 'desc': 'Heineken Light is a light-tasting, refreshing beer that maintains the subtle cues of the original Heineken signature flavor, enhanced with a balanced Cascade hop aroma.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-5867_f1dc5_sm.jpeg'}, {'name': 'Corona Extra', 'abv': '4.5% ABV', 'brewery': 'Grupo Modelo', 'location': 'Nava, Coahuila de Zaragoza', 'ibu': '19 IBU', 'beer_style': 'Lager - American', 'url': 'https://untappd.com/b/grupo-modelo-corona-extra/5848', 'desc': 'Corona Extra Mexican Beer is a crisp, clean and well balanced cerveza with fruity-honey aromas and a touch of malt, making it a great tailgating beer, beach drink or barbecue refreshment.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-5848_e34c0_sm.jpeg'}, {'name': 'Corona Light', 'abv': '4.1% ABV', 'brewery': 'Grupo Modelo', 'location': 'Nava, Coahuila de Zaragoza', 'ibu': '18 IBU', 'beer_style': 'Lager - American Light', 'url': 'https://untappd.com/b/grupo-modelo-corona-light/5849', 'desc': 'Corona Light Mexican Beer makes every day the lightest day with its distinctive hop flavor and pleasant fruity-honey aroma. This easy-drinking beer pairs well with spicy food and citrus dishes.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-5849_fe89b_sm.jpeg'}, {'name': 'Cidre', 'abv': '4.5% ABV', 'brewery': 'Stella Artois', 'location': 'Leuven, Vlaanderen', 'ibu': '10 IBU', 'beer_style': 'Cider - Traditional', 'url': 'https://untappd.com/b/stella-artois-cidre/45159', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-45159_a3849_sm.jpeg'}, {'name': 'Crisp Apple', 'abv': '5% ABV', 'brewery': 'Angry Orchard Cider Company', 'location': 'Walden, NY', 'ibu': '10 IBU', 'beer_style': 'Cider - Sweet', 'url': 'https://untappd.com/b/angry-orchard-cider-company-crisp-apple/84251', 'desc': 'A crisp and refreshing cider, its fresh apple aroma and slightly sweet, ripe apple flavor make it hard to resist.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-84251_ba1ac_sm.jpeg'}, {'name': "Not Your Father's Root Beer (5.9%)", 'abv': '5.9% ABV', 'brewery': 'Small Town Brewery', 'location': 'Wauconda, IL', 'beer_style': 'Root Beer', 'url': 'https://untappd.com/b/small-town-brewery-not-your-father-s-root-beer-5-9/867402', 'desc': 'Not Your Fatherâ€™s Root Beer is a category-defining craft specialty ale brewed with unique spices. Brewer Tim Kovacâ€™s creativity and painstaking commitment to flavor complexity results in an unmistakable offering that masterfully blends hints of sarsaparilla, wintergreen, anise, and vanilla. A smooth and balanced Ale, NYFRB has broad appeal â€“ from discerning craft beer drinkers to non-beer drinkers.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-867402_f0d64_sm.jpeg'}, {'name': 'Smirnoff Ice (US Only)', 'abv': '4.5% ABV', 'brewery': 'Smirnoff', 'location': 'Norwalk, CT', 'beer_style': 'Malt Liquor', 'url': 'https://untappd.com/b/smirnoff-smirnoff-ice-us-only/207015', 'desc': 'This is for the US version of this beer. This version in other countries is just vodka, and not a Malt Liquor. If you are drinking this in a non-US country - that drink is not allowed on Untappd.', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-Ice_207015.jpeg'}, {'name': 'Twisted Tea Hard Iced Tea', 'abv': '5% ABV', 'brewery': 'Twisted Tea Brewing Company', 'location': 'Cincinnati, OH', 'beer_style': 'Malt Beer', 'url': 'https://untappd.com/b/twisted-tea-brewing-company-twisted-tea-hard-iced-tea/18075', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-_18075_436af83851045bd39c3bf92ddd53.jpeg'}, {'name': "O'Doul's Premium", 'brewery': 'Anheuser-Busch', 'location': 'St. Louis, MO', 'ibu': '5 IBU', 'beer_style': 'Non-Alcoholic Beer', 'url': 'https://untappd.com/b/anheuser-busch-o-doul-s-premium/17527', 'img': 'https://untappd.akamaized.net/site/beer_logos/beer-17527_2224a_sm.jpeg'}], 'title': 'Bottled Beer'}]
  },
};
