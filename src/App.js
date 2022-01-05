import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Route path="/products" component={Products} />
        <Route path="/posts" component={Posts} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Home} />
      </div>
    </div>
  );
}

export default App;
