var env = new Primrose.BrowserEnvironment({
  backgroundColor: 0x000000,
  groundTexture: "deck.png",
  useFog: true
});

env.addEventListener("ready", function(){
  // Perform any post-initialization setup. Once this event fires, the
  // Primrose framework is ready and will start animation as soon as this
  // function returns.
});

env.addEventListener("update", function(){
  // Perform per-frame updates here, like moving objects around according
  // to your own rules.
});