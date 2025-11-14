# ShopHub - Next.js 13 E-commerce Store

A full-stack e-commerce store built with Next.js 13, featuring Stripe payment integration, Tailwind CSS for styling, and Zustand for state management.

## 🚀 Features

- **Modern Next.js 13**: Built with the App Router and Server Components
- **Stripe Integration**: Secure payment processing with subscription support
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **State Management**: Efficient cart management with Zustand
- **TypeScript Support**: Type-safe development
- **Server-Side Rendering**: Optimized performance and SEO

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Payments**: Stripe API
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Stripe account with test keys

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Andre-tech671/ShopHub.git
   cd shophub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   STRIPE_SECRET=sk_test_your_stripe_secret_key_here
   ```

4. **Stripe Setup**
   - Create products and prices in your Stripe dashboard
   - Ensure prices are set as recurring subscriptions (monthly)
   - Copy the price IDs for your products

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
shophub/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── checkout/      # Stripe checkout endpoint
│   ├── (store)/           # Route groups
│   │   └── store.js       # Zustand store
│   ├── product/           # Product detail page
│   ├── success/           # Checkout success page
│   ├── cancel/            # Checkout cancel page
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── Header.js          # Navigation header
│   ├── Modal.js           # Shopping cart modal
│   └── ProductCard.js     # Product display component
├── public/                # Static assets
├── .env.local             # Environment variables
└── README.md             # This file
```

## 🔄 How It Works

### 1. **Product Display**
- Products are fetched from Stripe on the server-side
- Each product card displays name, price, description, and image
- Clicking a product navigates to its detail page

### 2. **Cart Management**
- Zustand store manages cart state globally
- Add items to cart from product detail page
- Cart modal shows all items with quantities
- Cart persists across page navigations

### 3. **Checkout Process**
- Cart items are sent to `/api/checkout` endpoint
- Stripe creates a subscription checkout session
- User is redirected to Stripe's hosted checkout page
- After payment, user returns to success or cancel page

### 4. **Payment Flow**
```
User clicks "Add to Cart" → Cart Modal → "Checkout" → API Call → Stripe Session → Redirect to Stripe → Payment → Success/Cancel Page
```

## 🛒 Cart Functionality

The cart system uses Zustand for state management:

- **addItemToCart**: Adds products to cart with price_id, name, and cost
- **removeItemFromCart**: Removes items by index
- **setOpenModal**: Toggles cart modal visibility
- **emptyCart**: Clears all items

## 💳 Stripe Integration

### Checkout API Route (`app/api/checkout/route.js`)
- Receives lineItems from frontend
- Creates Stripe checkout session with subscription mode
- Returns session URL for redirect
- Includes error handling and logging

### Frontend Checkout (`app/Modal.js`)
- Maps cart items to Stripe lineItems format
- Sends POST request to checkout API
- Handles success/error responses
- Redirects to Stripe checkout

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Custom Components**: Reusable UI components
- **Font Awesome**: Icons for cart and social links

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
- Ensure your hosting supports Next.js 13
- Set environment variables for Stripe keys
- Configure build commands if needed

## 🔍 Troubleshooting

### Common Issues

**"Stripe session creation failed"**
- Check your Stripe secret key in `.env.local`
- Ensure prices are set as recurring subscriptions
- Verify API version is compatible

**Cart not updating**
- Check Zustand store implementation
- Verify component re-renders on state changes

**Payment not processing**
- Test with Stripe test cards
- Check webhook endpoints if using webhooks
- Verify success/cancel URLs

## 📝 API Reference

### GET /api/checkout
Not used - checkout is handled via POST

### POST /api/checkout
Creates a Stripe checkout session

**Request Body:**
```json
{
  "lineItems": [
    {
      "price": "price_1ABC...",
      "quantity": 1
    }
  ]
}
```

**Response:**
```json
{
  "session": {
    "url": "https://checkout.stripe.com/..."
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check Stripe documentation for payment-related questions
- Review Next.js docs for framework questions
