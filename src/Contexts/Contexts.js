import React from 'react';
//יצירת המאגר
const MyContex=React.createContext({});
//ספק של המאגר
export const Myprovider=MyContex.Provider;
//יצוא של המאגר
export default MyContex