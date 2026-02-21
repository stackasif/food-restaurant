import image1 from '../src/assets/images/img1.avif';
import image2 from '../src/assets/images/img2.avif';
import image3 from '../src/assets/images/img3.avif';
import image4 from '../src/assets/images/img4.avif';
import image5 from '../src/assets/images/img5.avif';
import image6 from '../src/assets/images/img6.avif';
import image7 from '../src/assets/images/img7.avif';
import image8 from '../src/assets/images/img8.avif';
import image9 from '../src/assets/images/img9.avif';
import image10 from '../src/assets/images/img10.avif';
import image11 from '../src/assets/images/img11.avif';
import image12 from '../src/assets/images/img12.avif';
// import healthy-homemade from '../src/assets/images/cheese-omelet.avif';
import image13 from '../src/assets/images/img13.avif';
import image14 from '../src/assets/images/img14.avif';
import image15 from '../src/assets/images/img15.avif';
import image16 from '../src/assets/images/img16.avif';
import image17 from '../src/assets/images/img17.avif';
import image18 from '../src/assets/images/img18.avif';
import image19 from '../src/assets/images/img19.avif';
import image20 from '../src/assets/images/img20.avif';
import image21 from '../src/assets/images/img21.avif';
import image22 from '../src/assets/images/img22.avif';
import image23 from '../src/assets/images/img23.avif';
import image24 from '../src/assets/images/img24.avif';
// import image25 from '../src/assets/images/veggie-burger.avif';



const foodItems = [
    {"id": 1, "food_name": "Pancakes", "food_category": "breakfast", "food_type": "Veg", "food_quantity": 1, "food_image": image1, "price": 499},
    {"id": 2, "food_name": "Chicken Soup", "food_category": "soups", "food_type": "Non Veg", "food_quantity": 1, "food_image": image2, "price": 399},
    {"id": 3, "food_name": "Minestrone Soup", "food_category": "soups", "food_type": "Veg", "food_quantity": 1, "food_image": image3, "price": 349},
    {"id": 4, "food_name": "Spaghetti Carbonara", "food_category": "pasta", "food_type": "Non Veg", "food_quantity": 1, "food_image": image4, "price": 999},
    {"id": 5, "food_name": "Veg Alfredo Pasta", "food_category": "pasta", "food_type": "Veg", "food_quantity": 1, "food_image": image5, "price": 899},
    {"id": 6, "food_name": "Chicken Alfredo Pasta", "food_category": "pasta", "food_type": "Non Veg", "food_quantity": 1, "food_image": image6, "price": 1099},
    {"id": 7, "food_name": "Paneer Butter Masala", "food_category": "main_course", "food_type": "Veg", "food_quantity": 1, "food_image": image7, "price": 799},
    {"id": 8, "food_name": "Chicken Biryani", "food_category": "main_course", "food_type": "Non Veg", "food_quantity": 1, "food_image": image8, "price": 1199},
    {"id": 9, "food_name": "Margherita Pizza", "food_category": "pizza", "food_type": "Veg", "food_quantity": 1, "food_image": image9, "price": 649},
    {"id": 10, "food_name": "Pepperoni Pizza", "food_category": "pizza", "food_type": "Non Veg", "food_quantity": 1, "food_image": image10, "price": 749},
    {"id": 11, "food_name": "Veggie Burger", "food_category": "burger", "food_type": "Veg", "food_quantity": 1, "food_image": image11, "price": 499},
    {"id": 12, "food_name": "Chicken Burger", "food_category": "burger", "food_type": "Non Veg", "food_quantity": 1, "food_image": image12, "price": 599},
    {"id": 13, "food_name": "Tomato Soup", "food_category": "soups", "food_type": "Veg", "food_quantity": 1, "food_image": image13, "price": 299},
    {"id": 14, "food_name": "Egg Sandwich", "food_category": "breakfast", "food_type": "Non Veg", "food_quantity": 1, "food_image": image14, "price": 349},
    {"id": 15, "food_name": "Mushroom Soup", "food_category": "soups", "food_type": "Veg", "food_quantity": 1, "food_image": image15, "price": 349},
    {"id": 16, "food_name": "Chicken Tikka Masala", "food_category": "main_course", "food_type": "Non Veg", "food_quantity": 1, "food_image": image16, "price": 1199},
    {"id": 17, "food_name": "Cheese Omelette", "food_category": "breakfast", "food_type": "Non Veg", "food_quantity": 1, "food_image": image17, "price": 399},
    {"id": 18, "food_name": "Fettuccine Alfredo", "food_category": "pasta", "food_type": "Veg", "food_quantity": 1, "food_image": image18, "price": 949},
    {"id": 19, "food_name": "Garlic Bread", "food_category": "pizza", "food_type": "Veg", "food_quantity": 1, "food_image": image19, "price": 299},
    {"id": 20, "food_name": "Fish and Chips", "food_category": "main_course", "food_type": "Non Veg", "food_quantity": 1, "food_image": image20, "price": 1099},
    {"id": 21, "food_name": "Hash Browns", "food_category": "breakfast", "food_type": "Veg", "food_quantity": 1, "food_image": image21, "price": 249},
    {"id": 22, "food_name": "Vegetable Soup", "food_category": "soups", "food_type": "Veg", "food_quantity": 1, "food_image": image22, "price": 329},
    {"id": 23, "food_name": "Egg Fried Rice", "food_category": "main_course", "food_type": "Non Veg", "food_quantity": 1, "food_image": image23, "price": 599},
    {"id": 24, "food_name": "Hawaiian Pizza", "food_category": "pizza", "food_type": "Non Veg", "food_quantity": 1, "food_image": image24, "price": 799},
    // {"id": 25, "food_name": "Pasta Primavera", "food_category": "pasta", "food_type": "Veg", "food_quantity": 1, "food_image": image25, "price": 899}
];

export default foodItems;