import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";

export function middleware(request) {
	const jwtTokenValue = request.cookies.get("jwtToken")?.value;

	const isPublicPath = request.nextUrl.pathname === "/" || request.nextUrl.pathname === "/signup";

	// console.log(request.nextUrl.pathname, "......", jwtTokenValue?.length);
	//if logged in and jwtToken present
	if (isPublicPath && jwtTokenValue) {
		return NextResponse.redirect(new URL("/home", request.url));
	}

	//if not logged in
	if (!isPublicPath && !jwtTokenValue) {
		return NextResponse.redirect(new URL("/", request.url));
	}
}

export const config = {
	matcher: ["/", "/signup", "/home"],
};
