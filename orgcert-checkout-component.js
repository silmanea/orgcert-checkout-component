import React from 'react';
import { Trash2, Shield, Lock, Clock, Linkedin, Youtube, Instagram, Mail, Phone } from 'lucide-react';

const CertifySecureCheckout = () => {
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: 'SSL Certificate - Premium',
      validity: '1-year validity',
      quantity: 1,
      price: 299.99
    }
  ]);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return 30.00;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-600">SecureCertify</a>
          <nav className="flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Products & Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="col-span-8 space-y-6">
              {/* Cart Summary */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
                {cartItems.map(item => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500">{item.validity}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 text-gray-600 hover:text-gray-900"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 text-gray-600 hover:text-gray-900"
                        >
                          +
                        </button>
                        <span className="font-medium">${item.price}</span>
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Instructions */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Payment Instructions</h2>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Shield className="text-blue-600" size={20} />
                    <span className="text-gray-600">All payments are processed through secure payment gateways</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Lock className="text-blue-600" size={20} />
                    <span className="text-gray-600">Your payment information is encrypted and never stored</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Clock className="text-blue-600" size={20} />
                    <span className="text-gray-600">Certificates are issued within 24 hours of payment confirmation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="col-span-4">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>${calculateTax().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-4 border-t">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded mt-6 hover:bg-blue-700">
                  Proceed to Payment
                </button>
                <button className="w-full border border-blue-600 text-blue-600 py-3 rounded mt-4 hover:bg-blue-50">
                  Add More Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-bold mb-4">SecureCertify</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Youtube size={20} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Policies and Procedures</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Refund Policy</a></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-300">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>support@securecertify.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
            <p>© 2025 SecureCertify. All rights reserved.</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CertifySecureCheckout;