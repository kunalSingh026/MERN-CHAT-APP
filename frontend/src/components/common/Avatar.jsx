import React, { useState } from 'react';

const Avatar = ({ src, name = "User", size = "w-10 h-10", isOnline = false, className = "" }) => {
  const [imgFailed, setImgFailed] = useState(false);

  const fallbackSrc = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=FFD700&color=000&bold=true`;

  return (
    <div className={`relative inline-block flex-shrink-0 ${className}`}>
      <div className={`${size} rounded-none border-2 border-black shadow-[2px_2px_0px_#000] bg-yellow-400 overflow-hidden flex items-center justify-center font-bold text-black`}>
        {!imgFailed && src ? (
          <img
            src={src}
            alt={name}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={fallbackSrc}
            alt={name}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {isOnline && (
        <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#00FF9C] border-2 border-black shadow-[1px_1px_0px_#000]" title="Online"></span>
      )}
    </div>
  );
};

export default Avatar;
