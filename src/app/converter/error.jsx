'use client';

import { useEffect } from 'react'
import Button from "../_components/ui/Button";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="container max-w-4xl py-20 text-center">
            <h2 className="text-h2">Something went wrong!</h2>
            <Button
                className="mt-7 bg-blue text-blue-light hover:bg-blue/90 transition-colors"
                onClick={() => reset()}
            >
                Try again
            </Button>
        </div>
    )
}