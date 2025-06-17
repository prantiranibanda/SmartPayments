import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
	try {
		const resp = NextResponse.json({ success: true, mssg: "User logged out" }, { status: 200 });
		resp.cookies.set("jwtToken", "", { expires: new Date(0) });
		return resp;
	} catch (error) {
		return NextResponse.json({ success: false, mssg: "Server error" }, { status: 200 });
	}
}
