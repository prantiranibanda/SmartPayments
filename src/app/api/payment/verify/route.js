import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
	try {
		const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = await request.json();

		if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
			return NextResponse.json({ success: false, message: 'Missing parameters' }, { status: 400 });
		}

		const secret = process.env.API_SECRET;
		if (!secret) {
			return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
		}
		// generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);
		const generated_signature = crypto
			.createHmac('sha256', secret)
			.update(`${razorpay_order_id}|${razorpay_payment_id}`)
			.digest('hex');

		if (generated_signature === razorpay_signature) {
			return NextResponse.json({ success: true, message: 'Payment verified' });
		} else {
			return NextResponse.json({ success: false, message: 'Invalid signature' }, { status: 400 });
		}
	} catch (error) {
		return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
	}
}