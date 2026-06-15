import React from 'react';
import Typewriter from 'typewriter-effect';

function TypewriterText() {
  return (
    <div className="text-sm md:text-base text-pastel-muted h-6 font-medium">
      <Typewriter
        options={{
          strings: [
            "Review sản phẩm yêu thích 💕",
            "Chia sẻ deal hot mỗi ngày 🔥",
            "Mua sắm thông minh ✨",
            "Cùng Cyn săn sale nào 🛍️"
          ],
          autoStart: true,
          loop: true,
          delay: 55,
          deleteSpeed: 30
        }}
      />
    </div>
  );
}

export default TypewriterText;
