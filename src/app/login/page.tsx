"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);

    // Backend URL (you should use environment variables in production)
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    // Handle OAuth login
    const handleOAuthLogin = async (provider: string) => {
        setLoading(true);
        // Redirect to the backend auth route
        window.location.href = `${API_URL}/auth/${provider}`;

        setLoading(false);
    };

    useEffect(() => {
        // After redirect, handle the callback to get the tokens
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        const state = urlParams.get("state");
        const decodedState = state ? JSON.parse(atob(state)) : null;
        const provider = decodedState ? decodedState.provider : null; // Extract email from decoded state
        console.log(` code : ${code} `);
        console.log(` provider : ${provider} `);
        if (
            (provider == "linkedin" && code) ||
            (provider == "google" && code)
        ) {
            // Make a request to your backend to exchange the code for tokens
            const fetchTokens = async () => {
                const response = await fetch(
                    `${API_URL}/auth/${provider}/callback?code=${code}&state=${state}`
                );
                const {
                    accessToken,
                    refreshToken,
                    accessTokenExpireIn,
                    refreshTokenExpireIn,
                } = await response.json();

                // Save the access token and refresh token
                localStorage.setItem(
                    "accessTokenExpireIn",
                    accessTokenExpireIn
                );
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
                localStorage.setItem(
                    "refreshTokenExpireIn",
                    refreshTokenExpireIn
                );

                // Clear the URL parameters
                const newUrl =
                    window.location.origin + window.location.pathname; // Base URL without params
                window.history.replaceState({}, document.title, newUrl); // Update the URL

                // Redirect to the home page after successful login
                // window.location.href = "/"; // Redirect to home page
            };

            fetchTokens();
        }
    }, []); // Add an empty dependency array to run this effect only once

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Welcome to OAuthHub
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Sign in with your preferred method
                </p>

                <div className="space-y-4">
                    <button
                        onClick={() => handleOAuthLogin("google")}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <Image
                            src="/google.svg"
                            alt="Google"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                        <span className="text-gray-700">
                            Sign in with Google
                        </span>
                    </button>

                    <button
                        onClick={() => handleOAuthLogin("facebook")}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#1877f2] text-white rounded-lg hover:bg-[#1666d8] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <Image
                            src="/facebook.svg"
                            alt="Facebook"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                        <span>Sign in with Facebook</span>
                    </button>

                    <button
                        onClick={() => handleOAuthLogin("linkedin")}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#006399] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <Image
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                        <span>Sign in with LinkedIn</span>
                    </button>
                </div>

                {loading && (
                    <div className="mt-4 text-center text-gray-600">
                        <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-gray-300 border-t-gray-600 mr-2"></div>
                        Redirecting...
                    </div>
                )}
            </div>
        </main>
    );
}
