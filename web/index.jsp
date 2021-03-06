<html>

<head>
  <base href="/">
  <title>Angular 2 Tour of Heroes</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="forms.css">
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">

  <script language="JavaScript" type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

  <!-- Polyfill(s) for older browsers -->
  <script src="https://npmcdn.com/core-js/client/shim.min.js"></script>

  <script src="https://npmcdn.com/zone.js@0.6.12?main=browser"></script>
  <script src="https://npmcdn.com/reflect-metadata@0.1.3"></script>
  <script src="https://npmcdn.com/systemjs@0.19.27/dist/system.src.js"></script>

  <script src="systemjs.config.js"></script>
  <script>
    System.import('app').catch(function(err){ console.error(err); });
  </script>

  <script type="text/javascript">
    function changeMenuIcon(x) {
      x.classList.toggle("change");
    }
  </script>

  <script type="text/javascript">
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.body.style.backgroundColor = "white";
    }
  </script>

</head>

<body>
<!--
<h4>Click to add a circle<br>Drag to move a circle.</h4>
<a href="/rest/proba/available">PROBA RUTIRANJA</a> -->

<!-- klikom na meni dugme iskace prozor -->


<!-- -->

<div id="main">

  <div  style="width:100%; height:15%; border:1px solid blue; ">

    <span style="border: 1px solid black; width:50px; float: left;" class="containerForMenu" onclick="changeMenuIcon(this), openNav()">
      <div class="bar1Menu"></div>
      <div class="bar2Menu"></div>
      <div class="bar3Menu"></div>
    </span>

    <span style="border: 1px solid orange; font-size: 200%; height: 100%; width: 80%; float: left;">Naziv kafica</span>

    <span  id='ct' style="border: 1px solid cyan; height: 100%; width: 15%; float: right; align-content: center" >
      <iframe src="http://free.timeanddate.com/clock/i5bpe3oe/n35/tlrs36/ftb/tt0/tw1/tm1/tb4" frameborder="0" width="120" height="34"></iframe>
    </span>

  </div>
  <br/>

  <div style = "width:100%; height:80%; border: 1px solid green">

    <canvas id="canvas" width=700 height=400 style="border: 1px solid red"></canvas>
    <script type="text/javascript">
      // canvas related variables
      // references to canvas and its context and its position on the page
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      var $canvas = $("#canvas");
      var canvasOffset = $canvas.offset();
      var offsetX = canvasOffset.left;
      var offsetY = canvasOffset.top;
      var scrollX = $canvas.scrollLeft();
      var scrollY = $canvas.scrollTop();
      var cw = canvas.width;
      var ch = canvas.height;

      // flag to indicate a drag is in process
      // and the last XY position that has already been processed
      var isDown = false;
      var lastX;
      var lastY;

      // the radian value of a full circle is used often, cache it
      var PI2 = Math.PI * 2;

      // variables relating to existing circles
      var circles = [];
      var stdRadius = 10;
      var draggingCircle = -1;

      // clear the canvas and redraw all existing circles
      function drawAll() {
        ctx.clearRect(0, 0, cw, ch);
        for (var i = 0; i < circles.length; i++) {
          var circle = circles[i];
          ctx.beginPath();
          ctx.arc(circle.x, circle.y, circle.radius, 0, PI2);
          ctx.closePath();
          ctx.fillStyle = circle.color;
          ctx.fill();
        }
      }

      function handleMouseDown(e) {
        // tell the browser we'll handle this event
        e.preventDefault();
        e.stopPropagation();

        // save the mouse position
        // in case this becomes a drag operation
        lastX = parseInt(e.clientX - offsetX);
        lastY = parseInt(e.clientY - offsetY);

        // hit test all existing circles
        var hit = -1;
        for (var i = 0; i < circles.length; i++) {
          var circle = circles[i];
          var dx = lastX - circle.x;
          var dy = lastY - circle.y;
          if (dx * dx + dy * dy < circle.radius * circle.radius) {
            hit = i;
          }
        }

        // if no hits then add a circle
        // if hit then set the isDown flag to start a drag
        if (hit < 0) {
          circles.push({
            x: lastX,
            y: lastY,
            radius: stdRadius*2,
            color: randomColor()
          });
          drawAll();
        } else {
          draggingCircle = circles[hit];
          isDown = true;
        }

      }

      function handleMouseUp(e) {
        // tell the browser we'll handle this event
        e.preventDefault();
        e.stopPropagation();

        // stop the drag
        isDown = false;
      }

      function handleMouseMove(e) {

        // if we're not dragging, just exit
        if (!isDown) {
          return;
        }

        // tell the browser we'll handle this event
        e.preventDefault();
        e.stopPropagation();

        // get the current mouse position
        mouseX = parseInt(e.clientX - offsetX);
        mouseY = parseInt(e.clientY - offsetY);

        // calculate how far the mouse has moved
        // since the last mousemove event was processed
        var dx = mouseX - lastX;
        var dy = mouseY - lastY;

        // reset the lastX/Y to the current mouse position
        lastX = mouseX;
        lastY = mouseY;

        // change the target circles position by the
        // distance the mouse has moved since the last
        // mousemove event
        draggingCircle.x += dx;
        draggingCircle.y += dy;

        // redraw all the circles
        drawAll();
      }

      // listen for mouse events
      $("#canvas").mousedown(function (e) {
        handleMouseDown(e);
      });
      $("#canvas").mousemove(function (e) {
        handleMouseMove(e);
      });
      $("#canvas").mouseup(function (e) {
        handleMouseUp(e);
      });
      $("#canvas").mouseout(function (e) {
        handleMouseUp(e);
      });

      //////////////////////
      // Utility functions

      function randomColor() {
        return ('#' + Math.floor(Math.random() * 16777215).toString(16));
      }

    </script>

  </div>

</div>

<br/><br/>
<!--
<zaposleni>Loading zaposleni...</zaposleni>
-->
</br>
<my-app>Loading... bla bla blaaaaaaaaa</my-app>
<routlet>routlet...</routlet>
<!-- <zaposleni>Zaposleni TAG</zaposleni> -->
</body>
</html>
