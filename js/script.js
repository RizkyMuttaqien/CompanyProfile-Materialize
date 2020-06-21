  //panggil dengan vanila javascript
  const sideNav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sideNav);

  const slider = document.querySelectorAll('.slider');
  M.Slider.init(slider,{
      indicators:false,
      height:500,
      transition:600,
      interval:3000
  });

  const paralax = document.querySelectorAll('.parallax');
  M.Parallax.init(paralax);

  const materialbox = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(materialbox);

  const scroll = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(scroll,{
      scrollOffset: 50
  });