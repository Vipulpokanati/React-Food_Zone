import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: {
      Veg: [
              { id: 1, name: 'Paneer Butter Masala', price: 150, image: './images/paneer.jpg' },
              { id: 2, name: 'Veg Biryani', price: 120, image: './images/vegBiryani.jpg' },
              { id: 3, name: 'Palak Paneer', price: 140, image: './images/palakPaneer.jpg' },
              { id: 4, name: 'Chole Bhature', price: 110, image: './images/choleBhature.jpg' },
              { id: 5, name: 'Aloo Gobi', price: 100, image: './images/alooGobi.jpg' },
              { id: 6, name: 'Mixed Veg Curry', price: 130, image: './images/mixedVeg.jpg' },
              { id: 7, name: 'Veg Fried Rice', price: 90, image: './images/vegFired.jpg' },
              { id: 8, name: 'Jeera Rice', price: 70, image: './images/jeeraRice.jpg' },
              { id: 9, name: 'Rajma Chawal', price: 110, image: './images/rajmaChawal.jpg' },
              { id: 10, name: 'Veg Pulao', price: 100, image: './images/vegPulao.jpg' },
              { id: 11, name: 'Shahi Paneer', price: 160, image: './images/shahiPaneer.webp' },
              { id: 12, name: 'Kadai Mushroom', price: 145, image: './images/kadaiMushroom.jpg' },
              { id: 13, name: 'Bhindi Masala', price: 95, image: './images/bhindiMasala.jpg' },
              { id: 14, name: 'Tandoori Roti', price: 20, image: './images/tandooriRoti.jpg' },
              { id: 15, name: 'Stuffed Paratha', price: 40, image: './images/stuffedParatha.jpg' },
              { id: 16, name: 'Malai Kofta', price: 155, image: './images/malaiKofta.jpg' },
              { id: 17, name: 'Vegetable Hakka Noodles', price: 130, image: './images/vegetablehakkaNoodles.jpg' },
              { id: 18, name: 'Veg Manchurian', price: 140, image: './images/vegManchurian.jpg' },
              { id: 19, name: 'Corn Capsicum Masala', price: 135, image: './images/cornCapsicumMasala.jpg' },
              { id: 20, name: 'Baingan Bharta', price: 105, image: './images/bainganBharta.jpg' }
            ],

      NonVeg: [
              
                { id: 21, name: 'Chicken Biryani', price: 200, image: './images/chickenBiryani.avif' },
                { id: 22, name: 'Mutton Biryani', price: 250, image: './images/muttonBiryani.jpg' },
                { id: 23, name: 'Butter Chicken', price: 220, image: './images/butterChicken.jpg' },
                { id: 24, name: 'Chicken 65', price: 180, image: './images/chicken65.jpg'},
                { id: 25, name: 'Andhra Chicken Curry', price: 210, image: './images/andhraChicken.webp'},
                { id: 26, name: 'Mutton Rogan Josh', price: 260, image: './images/muttonRoganJosh.webp' },
                { id: 27, name: 'Chicken Tikka', price: 200, image: './images/chickenTikka.jpg' },
                { id: 28, name: 'Fish Fry', price: 190, image: './images/fishFry.jpg' },
                { id: 29, name: 'Egg Fry', price: 150, image: './images/eggFry.jpg' },
                { id: 30, name: 'Prawns Masala', price: 240, image: './images/prawnsMasala.jpg' },
                { id: 31, name: 'Prawns Biryani', price: 220, image: './images/prawnsBiryani.jpg' },
                { id: 32, name: 'Chicken Noodles', price: 210, image: './images/chickenNoodles.jpg' },
                { id: 33, name: 'Chicken Fired Rice', price: 230, image: './images/chickenFriedRice.png' },
                { id: 34, name: 'Chicken Lollipos', price: 260, image: './images/chickenLollipop.jpg' },
                { id: 35, name: 'Salt Grilled Fish', price: 180, image: './images/saltGrilled.jpg' },
                { id: 36, name: 'Fish Egg Fry', price: 240, image: './images/fishEgg.jpg' },
                { id: 37, name: 'Grilled Fish', price: 150, image: './images/grilledFish.jpg' },
                { id: 38, name: 'Grilled Chicken', price: 250, image: './images/grilledChicken.jpg' },
                { id: 39, name: 'Grilled Mutton', price: 200, image: './images/grilledMutton.jpg' },
                { id: 40, name: 'Tandoori Chicken', price: 220, image: './images/tandooriChicken.jpg' }
              ],

      Drinks: [
          { id: 41, name: 'Coco Cola', price: 40, image:'./images/CocoCola.jpg'},
          { id: 42, name: 'Thumps Up', price: 60, image:'./images/ThumpsUp.jpg'},
          { id: 43, name: 'Pepsi', price: 50, image: './images/pepsi.jpg' },
          { id: 44, name: 'Mountain Dew', price: 55, image: './images/mountainDew.jpg' },
          { id: 45, name: 'Fanta', price: 50, image: './images/fanta.webp' },
          { id: 46, name: 'Limca', price: 45, image: './images/Limca.jpg' },
          { id: 47, name: 'Maaza', price: 50, image: './images/Maaza.webp' },
          { id: 48, name: 'Slice', price: 50, image: './images/Slice.jpg' },
          { id: 49, name: '7 Up', price: 55, image: './images/7Up.jpg' },
          { id: 50, name: 'Appy Fizz', price: 60, image: './images/appleFizz.jpg' },
          { id: 51, name: 'Red Bull', price: 120, image: './images/redBull.jpg' },
          { id: 52, name: 'Monster Energy', price: 130, image: './images/monsterEnergy.jpg' },
          { id: 53, name: 'Gatorade', price: 90, image: './images/Gatorade.jpg' },
          { id: 54, name: 'Tropicana Orange', price: 70, image: './images/TropicanaOrange.jpg' },
          { id: 55, name: 'Real Mixed Fruit', price: 65, image: './images/RealMixedFruit.jpg' },
          { id: 56, name: 'Paper Boat Aamras', price: 60, image: './images/PaperBoatAamras.jpg' },
          { id: 57, name: 'Bisleri Soda', price: 20, image: './images/BisleriSoda.jpg' },
          { id: 58, name: 'Kinley Soda', price: 20, image: './images/KinleySoda.webp' },
          { id: 59, name: 'Amul Kool Badam', price: 30, image: './images/AmulKoolBadam.jpg' },
          { id: 60, name: 'Nimbooz', price: 30, image: './images/Nimbooz.jpg' }
      ],
      IceCreams: [
        { id: 61, name: 'Vanilla', price: 80 ,image:'./images/Vanila.webp'},
        { id: 62, name: 'Chocolate', price: 90,image: './images/Chocolate.jpg'},
        { id: 63, name: 'Mango Ice Cream', price: 90, image: './images/mango.jpg' },
        { id: 64, name: 'Butterscotch Bliss', price: 95, image: './images/butterscotch.jpg' },
        { id: 65, name: 'Black Currant', price: 100, image: './images/blackcurrant.jpg' },
        { id: 66, name: 'Pistachio Scoop', price: 95, image: './images/pistachio.jpg' },
        { id: 67, name: 'Kesar Pista', price: 105, image: './images/kesarpista.png' },
        { id: 68, name: 'Choco Chip', price: 100, image: './images/chocochip.jpg' },
        { id: 69, name: 'Caramel Crunch', price: 110, image: './images/caramelcrunch.webp' },
        { id: 70, name: 'Tutti Frutti', price: 95, image: './images/tuttifrutti.jpg' },
        { id: 71, name: 'Honey Almond', price: 110, image: './images/honey almond.png' },
        { id: 72, name: 'Orange Sorbet', price: 85, image: './images/orangesorbet.jpg' },
        { id: 73, name: 'Blueberry Cream', price: 105, image: './images/blueberrycream.jpg' },
        { id: 74, name: 'Mint Choco', price: 95, image: './images/mintchoco.jpg' },
        { id: 75, name: 'Raspberry Ripple', price: 100, image: './images/raspberryripple.jpg' },
        { id: 76, name: 'Coffee Crunch', price: 100, image: './images/coffeecrunch.webp' },
        { id: 77, name: 'Coconut Cream', price: 90, image: './images/coconut.webp' },
        { id: 78, name: 'Kulfi Traditional', price: 110, image: './images/kulfi.webp' },
        { id: 79, name: 'Falooda Royal', price: 120, image: './images/falooda.jpg' },
        { id: 80, name: 'Strawberry Delight', price: 85, image: './images/strawberry.jpg' }

      ]
    }
  },
  reducers: {}
});
const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: savedCartItems
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      else{
        const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.items = [];
      }

  }
});
const persistedUser = JSON.parse(localStorage.getItem('currentUser'));
const persistedAuth = localStorage.getItem('isAuthenticated') === 'true';
const savedUsers = JSON.parse(localStorage.getItem('Users')) || [];
const userSlice = createSlice({
  name: 'Users',
  initialState: {
    Users: savedUsers,
    isAuthenticated: persistedAuth,
    currentUser: persistedUser
  },
  reducers: {
    registerUser: (state, action) => {
      state.Users.push(action.payload);
      localStorage.setItem('Users', JSON.stringify(state.Users));
    },
    loginuser: (state, action) => {
      const foundUser = state.Users.find(
        user => user.username === action.payload.username && user.password === action.payload.password
      );
      if (foundUser) {
    
        state.isAuthenticated = true;
        state.currentUser = foundUser;
        localStorage.setItem('currentUser', JSON.stringify(foundUser));
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        alert("Invalid credentials");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      localStorage.removeItem('currentUser');
      localStorage.removeItem('isAuthenticated');
    }
  }
});
export const { registerUser, loginuser, logout } = userSlice.actions;
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart
} = cartSlice.actions;
export const Store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart:cartSlice.reducer,
    Users:userSlice.reducer
  }
});
