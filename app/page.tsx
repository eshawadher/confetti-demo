'use client';

import { useConfetti } from './hooks/useConfetti';
import './globals.css'

export default function HomePage() {
    const fireConfetti = useConfetti();

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#050E3C] to-[#F9DFDF]">
            <button
                onClick={fireConfetti}
                style={{
                    padding: '12px 24px',
                    fontSize: '18px',
                    borderRadius: '10px',
                    background: "#FCF8F8",
                    color: '#1B3C53',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                Celebrate 🎉
            </button>
        </main>
    );
}
