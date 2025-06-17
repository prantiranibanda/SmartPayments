import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request) {
	try {
		const req = await request.json();
		// const { amount, currency, receipt } = req;
		const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_API_ID,
      key_secret: process.env.API_SECRET,
    });
		
		const order = await razorpay.orders.create(req);
		console.log(order)
		if (!order) {
			return NextResponse.json(
				{ success: false, message: 'Failed to create order' },
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ success: true, order },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error creating Razorpay order:', error);
		return NextResponse.json(
			{ success: false, message: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
