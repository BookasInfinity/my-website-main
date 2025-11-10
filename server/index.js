const express = require('express');
const cors = require('cors');
const { createExpressMiddleware } = require('@trpc/server/adapters/express');
const { initTRPC } = require('@trpc/server');
const { z } = require('zod');

const t = initTRPC.create();

const appRouter = t.router({
  // --- PRODUCT APIS ---
  getProducts: t.procedure.query(() => {
    // In a real app, you'd fetch this from your MySQL database
    console.log('Fetching products from the database...');
    return [
      { id: 'prod_1', name: 'Surviving the Holidays Kit', price: 1999 },
      { id: 'prod_2', name: 'Resume & Interview Kit', price: 2499 },
    ];
  }),

  // --- ORDER APIS ---
  createOrder: t.procedure
    .input(z.object({ productIds: z.array(z.string()) }))
    .mutation(({ input }) => {
      // In a real app, you'd create an order in your MySQL database
      console.log(`Creating order for products: ${input.productIds.join(', ')}`);
      const orderId = `order_${Date.now()}`;
      return { success: true, orderId: orderId };
    }),
      
  // --- EMAIL SUBSCRIBER APIS ---
  addSubscriber: t.procedure
    .input(z.object({ email: z.string().email() }))
    .mutation(({ input }) => {
        // This is where you would call the ConvertKit/Mailchimp API
        console.log(`Subscribing email: ${input.email}`);
        // For now, we just simulate success
        return { success: true };
    })
});

const app = express();
app.use(cors({ origin: '*' })); // Allow all origins for simplicity

app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Export the appRouter type for the client
module.exports.appRouter = appRouter;
