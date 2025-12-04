'use client';

//made a custom react hook
//customize location
//customic number of confetti
//customize how much confetti
import confetti from 'canvas-confetti';

export function useConfetti() {
    const fireConfetti = () => {
        confetti({
            particleCount: 1000,
            spread: 90,
            origin: { y: 0.7 },
            //colors: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"],
            colors: ["#9CC6DB", "#050E3C", "#434E78", "#3291B6"],
            //colors: ["#DC143C", "#E43636", "#CD2C58", "#FCC6FF"],
        });
    };

    return fireConfetti;
}
