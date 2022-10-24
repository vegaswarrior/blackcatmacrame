## Stripe integration instructions

1. Add your stripe **keys** to .env

```
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_PRIVATE_KEY=your_stripe_private_key
```

2.  Add your stripe **public key** to `frontend\src\constants\stripePublicKey.js`

3.  If you want you can **customize** the **email** that's stripe sent to your customers from [here](https://dashboard.stripe.com/settings/branding).

