import React, { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const MouseFollowerDot: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    // Mouse move event listener əlavə edirik
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="">
      {/* Animasiyalı nöqtə */}
      <div
        className="fixed w-4 h-4 bg-[#aeff00] rounded-full pointer-events-none z-50 shadow-lg"
        style={{
          left: `${position.x - 8}px`, // Nöqtəni mərkəzləşdirmək üçün yarısını çıxırıq
          top: `${position.y - 8}px`,
          transition: 'all 0.1s ease-out', // Yumşaq animasiya
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)', // Glow effekti
        }}
      />

      {/* İkinci nöqtə - daha yavaş */}
      <div
        className="fixed w-3 h-3 bg-[#3f3f3f] rounded-full pointer-events-none z-40 opacity-70"
        style={{
          left: `${position.x - 6}px`,
          top: `${position.y - 6}px`,
          transition: 'all 0.3s ease-out', // Daha yavaş animasiya
        }}
      />

      {/* Üçüncü nöqtə - ən yavaş */}
      <div
        className="fixed w-2 h-2 bg-[#f8f8f8] rounded-full pointer-events-none z-30 opacity-50"
        style={{
          left: `${position.x - 4}px`,
          top: `${position.y - 4}px`,
          transition: 'all 0.6s ease-out', // Ən yavaş animasiya
        }}
      />
    </div>
  );
};

export default MouseFollowerDot;