import {
  createContext,
  useEffect,
  useContext,
  useReducer,
} from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";

const getProductId = (product) => product.productId ?? product.id;

const cartReducer = (prevCart, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, quantity } = action.payload;
      const productId = getProductId(product);
      const existingItem = prevCart.find(
        (item) => getProductId(item) === productId,
      );

      if (existingItem) {
        return prevCart.map((item) =>
          getProductId(item) === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity }];
    }
    case REMOVE_FROM_CART: {
      return prevCart.filter(
        (item) => getProductId(item) !== action.payload.id,
      );
    }
    case CLEAR_CART: {
      return [];
    }
    default:
      return prevCart;
  }
};

export const CartProvider = ({ children }) => {
  const initialCartState = (() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  })();

  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);
  
  const addToCart = (product, quantity) => {
    dispatch({ type: ADD_TO_CART, payload: { product, quantity } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // Calculate total quantity
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
