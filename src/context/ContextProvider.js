import React, { createContext, useCallback, useReducer } from 'react';

const currentColor = localStorage.getItem('currentColor');
const secondaryColor = localStorage.getItem('secondaryColor');
const darkMode = localStorage.getItem('darkMode');

export const uiContext = createContext();

const initialState = {
   menu: true,
   cart: false,
   darkMode: darkMode ? `${darkMode}` : 'light',
   showSearchModal: false,
   showThemebar: false,
   currentColor: currentColor ? `${currentColor}` : '#03C9D7',
   secondaryColor: secondaryColor ? `${secondaryColor}` : '#fb9678',
   chatAnchorEl: null,
   notificationAnchorEl: null,
   userProfileAnchorEl: null,
   actionAnchorEl: null,
   productID: '',
   customerID: '',
   chatMenu: false,
   currentChatIndex: 0,
   mailMenu: false,
   currentMailIndex: 0,
   currentlySelectedMailIndex: 0,
   openSelectedMailDrawer: false,
   mailModal: false
};

const uiReducer = (state, action) => {
   switch (action.type) {
      case 'TOGGLE_MENU':
         return {
            ...state,
            menu: action.value
         }
      case 'TOGGLE_CART': {
         return {
            ...state,
            cart: !state.cart
         }
      }
      case 'DARK_MODE': {
         return {
            ...state,
            darkMode: action.value
         }
      }
      case 'SEARCH_MODAL': {
         return {
            ...state,
            showSearchModal: action.value
         }
      }
      case 'THEME_BAR': {
         return {
            ...state,
            showThemebar: !state.showThemebar
         }
      }
      case 'CURRENT_COLOR': {
         return {
            ...state,
            currentColor: action.value
         }
      }
      case 'SECONDARY_COLOR': {
         return {
            ...state,
            secondaryColor: action.value
         }
      }
      case 'CHAT_ANCHOR_EL': {
         return {
            ...state,
            chatAnchorEl: action.value
         }
      }
      case 'NOTIFICATION_ANCHOR_EL': {
         return {
            ...state,
            notificationAnchorEl: action.value
         }
      }
      case 'USER_PROFILE_ANCHOR_EL': {
         return {
            ...state,
            userProfileAnchorEl: action.value
         }
      }
      case 'ACTION_ANCHOR_EL': {
         return {
            ...state,
            actionAnchorEl: action.value
         }
      }
      case 'PRODUCT_ID': {
         return {
            ...state,
            productID: action.value
         }
      }
      case 'CUSTOMER_ID': {
         return {
            ...state,
            customerID: action.value
         }
      }
      case 'CHAT_MENU': {
         return {
            ...state,
            chatMenu: !state.chatMenu
         }
      }
      case 'CURRENT_CHAT_INDEX': {
         return {
            ...state,
            currentChatIndex: action.value
         }
      }
      case 'MAIL_MENU': {
         return {
            ...state,
            mailMenu: !state.mailMenu
         }
      }
      case 'CURRENT_MAIL_INDEX': {
         return {
            ...state,
            currentMailIndex: action.value
         }
      }
      case 'CURRENTLY_SELECTED_MAIL_INDEX': {
         return {
            ...state,
            currentlySelectedMailIndex: action.value
         }
      }
      case 'OPEN_SELECTED_MAIL_DRAWER': {
         return {
            ...state,
            openSelectedMailDrawer: !state.openSelectedMailDrawer
         }
      }
      case 'MAIL_MODAL': {
         return {
            ...state,
            mailModal: !state.mailModal
         }
      }
      default:
         return {
            ...state
         }
   }
}

export const ContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(uiReducer, initialState);

   const setMenu = useCallback((value) => {
      dispatch({ type: 'TOGGLE_MENU', value: value });
   }, []);

   const toggleCart = () => {
      dispatch({ type: 'TOGGLE_CART' });
   }

   const toggleDarkMode = (value) => {
      dispatch({ type: 'DARK_MODE', value: value });
   }

   const setShowSearchModal = (value) => {
      dispatch({ type: 'SEARCH_MODAL', value: value });
   }

   const toggleThemebar = () => {
      dispatch({ type: 'THEME_BAR' });
   }

   const setCurrentColor = (value) => {
      dispatch({ type: 'CURRENT_COLOR', value: value });
   }

   const setSecondaryColor = (value) => {
      dispatch({ type: 'SECONDARY_COLOR', value: value });
   }

   const toggleChat = (value) => {
      dispatch({ type: 'CHAT_ANCHOR_EL', value: value });
   }

   const toggleNotification = (value) => {
      dispatch({ type: 'NOTIFICATION_ANCHOR_EL', value: value });
   }

   const toggleUserProfile = (value) => {
      dispatch({ type: 'USER_PROFILE_ANCHOR_EL', value: value });
   }

   const toggleAction = (value) => {
      dispatch({ type: 'ACTION_ANCHOR_EL', value: value });
   }

   const setProductID = useCallback((value) => {
      dispatch({ type: 'PRODUCT_ID', value: value });
   }, []);

   const setCustomerID = useCallback((value) => {
      dispatch({ type: 'CUSTOMER_ID', value: value });
   }, []);

   const toggleChatMenu = () => {
      dispatch({ type: 'CHAT_MENU' });
   };

   const setCurrentChatIndex = (value) => {
      dispatch({ type: 'CURRENT_CHAT_INDEX', value: value });
   };

   const toggleMailMenu = () => {
      dispatch({ type: 'MAIL_MENU' });
   };

   const setCurrentMailIndex = (value) => {
      dispatch({ type: 'CURRENT_MAIL_INDEX', value: value });
   };

   const setCurrentlySelectedMailIndex = (value) => {
      dispatch({ type: 'CURRENTLY_SELECTED_MAIL_INDEX', value: value });
   };

   const setOpenSelectedMailDrawer = () => {
      dispatch({ type: 'OPEN_SELECTED_MAIL_DRAWER' });
   };

   const toggleMailModal = () => {
      dispatch({ type: 'MAIL_MODAL' });
   };

   const createContext = {
      menu: state.menu,
      cart: state.cart,
      darkMode: state.darkMode,
      showSearchModal: state.showSearchModal,
      showThemebar: state.showThemebar,
      currentColor: state.currentColor,
      secondaryColor: state.secondaryColor,
      chatAnchorEl: state.chatAnchorEl,
      notificationAnchorEl: state.notificationAnchorEl,
      userProfileAnchorEl: state.userProfileAnchorEl,
      actionAnchorEl: state.actionAnchorEl,
      productID: state.productID,
      customerID: state.customerID,
      chatMenu: state.chatMenu,
      currentChatIndex: state.currentChatIndex,
      mailMenu: state.mailMenu,
      currentMailIndex: state.currentMailIndex,
      currentlySelectedMailIndex: state.currentlySelectedMailIndex,
      openSelectedMailDrawer: state.openSelectedMailDrawer,
      mailModal: state.mailModal,
      setMenu: setMenu,
      toggleCart: toggleCart,
      toggleDarkMode: toggleDarkMode,
      setShowSearchModal: setShowSearchModal,
      toggleThemebar: toggleThemebar,
      setCurrentColor: setCurrentColor,
      setSecondaryColor: setSecondaryColor,
      toggleChat: toggleChat,
      toggleNotification: toggleNotification,
      toggleUserProfile: toggleUserProfile,
      toggleAction: toggleAction,
      setProductID: setProductID,
      setCustomerID: setCustomerID,
      toggleChatMenu: toggleChatMenu,
      setCurrentChatIndex: setCurrentChatIndex,
      toggleMailMenu: toggleMailMenu,
      setCurrentMailIndex: setCurrentMailIndex,
      setCurrentlySelectedMailIndex: setCurrentlySelectedMailIndex,
      setOpenSelectedMailDrawer: setOpenSelectedMailDrawer,
      toggleMailModal: toggleMailModal
   }

   return (
      <uiContext.Provider value={createContext}>
         {children}
      </uiContext.Provider>
   );
};