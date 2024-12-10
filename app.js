import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from '../store/AuthProvider';

import AddProductPage from './pages/AddProductPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SignupPage from './pages/SignupPage';
import Layout from './UI/layout/Layout';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/add" element={<AddProductPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;