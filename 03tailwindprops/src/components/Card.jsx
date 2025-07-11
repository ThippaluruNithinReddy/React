import React from 'react';

export default function Card({username="Guest"}) {
    return(
        <>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <img
                    className="w-full h-48 object-cover"
                    src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Tech Landscape"
                />
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
                    <p className="mt-2 text-gray-600">
                    Explore the evolving world of technology with trends, tools, and tutorials.
                    </p>
                </div>
                </div>
        </>
    )
}