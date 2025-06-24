import React, { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    radius: number;
    alpha: number;
    speed: number;
}

const STAR_COUNT = 120;

function randomStar(width: number, height: number): Star {
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.15 + 0.05,
    };
}

const StarBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let stars: Star[] = Array.from({ length: STAR_COUNT }, () =>
            randomStar(width, height)
        );

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            stars = Array.from({ length: STAR_COUNT }, () =>
                randomStar(width, height)
            );
        }

        window.addEventListener("resize", resize);

        function draw() {
            ctx.clearRect(0, 0, width, height);
            for (const star of stars) {
                ctx.save();
                ctx.globalAlpha = star.alpha;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
                ctx.fillStyle = "#fff";
                ctx.shadowColor = "#fff";
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.restore();

                // Move star
                star.y += star.speed;
                if (star.y > height) {
                    star.x = Math.random() * width;
                    star.y = 0;
                }
            }
            animationRef.current = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
};

export default StarBackground;