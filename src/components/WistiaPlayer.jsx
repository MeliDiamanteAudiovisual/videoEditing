import React, { useEffect } from "react";
import "../App.css";

function WistiaPlayer({ videoId, wrapper, title, description }) {
  useEffect(() => {
    // Wistia embed code
    const script1 = document.createElement("script");
    script1.src = `https://fast.wistia.com/assets/external/E-v1.js`;
    script1.async = true;

    const div = document.createElement("div");
    const caption = document.createElement("div");
    caption.classList.add("caption");
    div.innerHTML = `<span class="wistia_embed wistia_async_${videoId}
    popover=true popoverContent=thumbnail videoFoam=true" style="width:300px;height:200px;">&nbsp;</span>`;
    caption.innerHTML = `

    <div className="caption-text">
      <h2 className="caption-title">${title}</h2>
      <p>${description}</p>
    </div>
`;
    const container = document.getElementById(wrapper);
    container.appendChild(script1);
    container.appendChild(caption);
    container.appendChild(div);

    return () => {
      // Cleanup code
      container.innerHTML = "";
    };
  }, []);

  return <div id={`${wrapper}`} className="video-card"></div>;
}

export default WistiaPlayer;
