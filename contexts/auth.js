import { parse } from 'cookie';
import { createContext, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        accountId: null,
        accountRole: null,
        isLoading: true,
      };
    case 'SIGN_IN':
      return {
        ...state,
        accountId: action.payload.account_id,
        accountRole: action.payload.account_role,
        isLoading: false,
        isAuth: action.payload.isAuth,
        isForbidden: action.payload.isForbidden,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        accountId: null,
        accountRole: null,
        isLoading: true,
        isAuth: false,
        isForbidden: true,
      };
  }
};

const reducerInitialState = {
  accountId: null,
  accountRole: null,
  isLoading: true,
  isAuth: false,
  isForbidden: true,
};

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, reducerInitialState);

  const signIn = () => {
    const paths = window.location.pathname.split('/');
    const basePath = paths[1];
    const cookies = parse(document.cookie);

    dispatch({
      type: 'SIGN_IN',
      payload: {
        account_id: cookies?.account_id,
        account_role: cookies?.account_role,
        isAuth: cookies?.account_id !== undefined,
        isForbidden: cookies?.account_role !== basePath,
      },
    });
  };

  const signOut = () => {
    document.cookie = 'account_id=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
    document.cookie = 'account_role=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';

    dispatch({ type: 'SIGN_OUT' });
  };

  return <AuthContext.Provider value={{ ...state, signIn, signOut }}>{children}</AuthContext.Provider>;
}
