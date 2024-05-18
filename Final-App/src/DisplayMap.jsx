import React, { useState } from 'react';

function DisplayMap() {
  const [showImage, setShowImage] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [imageName, setImageName] = useState('');

  const handleMouseEnter = (event, name) => {
    const x = event.clientX + 10;
    const y = event.clientY + 10;
    setImagePosition({ x, y });
    setImageName(name);
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };

  return (
    <div style={{ position: 'relative', width: '80%', margin: '0 auto', overflow: 'auto' }}>
      {showImage && (
        <img
          src={`${imageName}.png`} // Assuming all images have .jpg extension
          alt={imageName}
          style={{  position: 'absolute',
          top: imagePosition.y-100,
          left: imagePosition.x-100,
          zIndex: 999,
          borderRadius: '8px', // Rounded borders
          padding: '8px', // Padding
          backgroundColor: 'white', // Background color
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: 200 }}
        />
      )}
      <img
        src="south_shore_gaming.png"
        alt="Gaming Store Map"
        useMap="#store-map"
      />
      <map name="store-map">
        <area
          shape="rect"
          coords="210,17,234,48"
          href="https://www.walmart.ca/en/cp/video-games/10012?icid=dept_flyout_video_games_all_video_games_flyout_48730_SPJ2I4RGQK"
          target="_blank"
          title="Walmart"
          onMouseEnter={(e) => handleMouseEnter(e, 'walmart')}
          onMouseLeave={handleMouseLeave}
        />
        <area
          shape="rect"
          coords="250,90,275,125"
          href="https://www.walmart.ca/en/cp/video-games/10012?icid=dept_flyout_video_games_all_video_games_flyout_48730_SPJ2I4RGQK"
          target="_blank"
          title="Walmart"
          onMouseEnter={(e) => handleMouseEnter(e, 'walmart')}
          onMouseLeave={handleMouseLeave}
        />
        <area
          shape="rect"
          coords="497,152,516,179"
          href="https://www.walmart.ca/en/cp/video-games/10012?icid=dept_flyout_video_games_all_video_games_flyout_48730_SPJ2I4RGQK"
          target="_blank"
          title="Walmart"
          onMouseEnter={(e) => handleMouseEnter(e, 'walmart')}
          onMouseLeave={handleMouseLeave}
        />
        <area
          shape="rect"
          coords="75,60,100,80"
          href="https://www.gamestop.ca"
          target="_blank"
          title="Game Stop"
          onMouseEnter={(e) => handleMouseEnter(e, 'gamestop')}
          onMouseLeave={handleMouseLeave}
        />
        <area
          shape="rect"
          coords="75,80,100,100"
          href="https://www.thesource.ca/fr-ca/jeux-video/c/scc-8"
          target="_blank"
          title="La Source"
          onMouseEnter={(e) => handleMouseEnter(e, 'lasource')}
          onMouseLeave={handleMouseLeave}
        />
        <area
          shape="rect"
          coords="215,325,235,355"
          href="https://www.thesource.ca/fr-ca/jeux-video/c/scc-8"
          target="_blank"
          title="La Source"
          onMouseEnter={(e) => handleMouseEnter(e, 'lasource')}
          onMouseLeave={handleMouseLeave}
        />
        <area
          shape="rect"
          coords="166,193,187,219"
          href="https://www.mastervox.com"
          target="_blank"
          title="Electronique Master Vox"
          onMouseEnter={(e) => handleMouseEnter(e, 'mastervox')}
          onMouseLeave={handleMouseLeave}
        />
        <area
          shape="rect"
          coords="212,232,232,262"
          href="https://www.marcado.ca/marcado-jeux-video-accros/"
          target="_blank"
          title="Jeux Video Accross"
          onMouseEnter={(e) => handleMouseEnter(e, 'accross')}
          onMouseLeave={handleMouseLeave}
        />
          <area
          shape="rect"
          coords="309,412,328,425"
          href="https://www.bestbuy.ca/en-ca/collection/video-games/294126?icmp=vg_shopby_games&cmp=knc-c-71700000085407743-k-43700065219055871&gad_source=1&gclid=Cj0KCQjwgJyyBhCGARIsAK8LVLPOll8CkPBsQvgL7Bq3izpOEZrIWDTJ9mwy-X42f64Iw_COj1Tj0pkaAgTpEALw_wcB&gclsrc=aw.ds"
          target="_blank"
          title="Best Buy"
          onMouseEnter={(e) => handleMouseEnter(e, 'bestbuy')}
          onMouseLeave={handleMouseLeave}
        />
        <area
          shape="rect"
          coords="522,197,539,225"
          href="https://www.bestbuy.ca/en-ca/collection/video-games/294126?icmp=vg_shopby_games&cmp=knc-c-71700000085407743-k-43700065219055871&gad_source=1&gclid=Cj0KCQjwgJyyBhCGARIsAK8LVLPOll8CkPBsQvgL7Bq3izpOEZrIWDTJ9mwy-X42f64Iw_COj1Tj0pkaAgTpEALw_wcB&gclsrc=aw.ds"
          target="_blank"
          title="Best Buy"
          onMouseEnter={(e) => handleMouseEnter(e, 'bestbuy')}
          onMouseLeave={handleMouseLeave}
        />
        <area
          shape="rect"
          coords="323,453,343,479"
          href="https://www.gamestop.ca"
          target="_blank"
          title="Game Stop"
          onMouseEnter={(e) => handleMouseEnter(e, 'gamestop')}
          onMouseLeave={handleMouseLeave}
        />
        <area
          shape="rect"
          coords="518,174,538,204"
          href="https://imaginaire.com/fr/"
          target="_blank"
          title="Imaginaire"
          onMouseEnter={(e) => handleMouseEnter(e, 'imaginaire')}
          onMouseLeave={handleMouseLeave}
        />
        <area
          shape="rect"
          coords="370,190,390,220"
          href="https://www.facebook.com/coingameover/"
          target="_blank"
          title="Le Coin Game Over"
          onMouseEnter={(e) => handleMouseEnter(e, 'coingameover')}
          onMouseLeave={handleMouseLeave}
        />
        {/* Add more area elements for each clickable region */}
      </map>
    </div>
  );
}

export default DisplayMap;
