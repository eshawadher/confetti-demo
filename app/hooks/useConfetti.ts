'use client';

import confetti from 'canvas-confetti';

export function useConfetti() {
    const fireConfetti = () => {
        confetti({
            particleCount: 1000,
            spread: 90,
            origin: { y: 0.6 },
        });
    };

    return fireConfetti;
}
