import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'maison_veloure_cart_v2';
const WISHLIST_KEY = 'maison_veloure_wishlist_v2';
const FREE_SHIPPING_THRESHOLD = 1000000;
const STANDARD_SHIPPING_COST = 25000;

export function CartProvider({ children }) {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // UI States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState(null);

  // Persist Cart
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Persist Wishlist
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  // Toast helper
  const showToast = (message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  // Add to cart with specific size and color
  const addToCart = (product, selectedSize = null, selectedColor = null, quantity = 1) => {
    const size = selectedSize || product.sizes[0];
    const color = selectedColor || (product.colors && product.colors[0] ? product.colors[0].name : 'Default');
    const itemKey = `${product.id}-${size}-${color}`;

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.itemKey === itemKey);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            itemKey,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            size,
            color,
            quantity
          }
        ];
      }
    });

    showToast(`"${product.name}" (${size}) ditambahkan ke keranjang.`);
    setIsCartOpen(true);
  };

  const updateQuantity = (itemKey, delta) => {
    setCart(prevCart => {
      return prevCart
        .map(item => {
          if (item.itemKey === itemKey) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (itemKey) => {
    setCart(prevCart => prevCart.filter(item => item.itemKey !== itemKey));
    showToast('Item berhasil dihapus dari keranjang.', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist toggle
  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Dihapus dari daftar favorit.', 'info');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Ditambahkan ke daftar favorit!');
        return [...prev, productId];
      }
    });
  };

  // Derived calculations
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingCost = cart.length === 0 ? 0 : (isFreeShipping ? 0 : STANDARD_SHIPPING_COST);
  const totalAmount = subtotal + shippingCost;
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        setIsCartOpen,
        selectedProduct,
        setSelectedProduct,
        toast,
        showToast,
        closeToast,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toggleWishlist,
        totalItemsCount,
        subtotal,
        shippingCost,
        totalAmount,
        isFreeShipping,
        freeShippingProgress,
        remainingForFreeShipping,
        FREE_SHIPPING_THRESHOLD
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
