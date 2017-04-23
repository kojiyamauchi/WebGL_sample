var THREE = require('three'),
    chroma = require('chroma-js');

if(document.getElementById('sample3')) {

    var draw = function () {

        // WebGL - three.js Code.
        // THREE.Scene(); => putiing objects.
        // THREE.PerspectiveCamera(); => photograph the object.
        // THREE.WebGLRenderer(); => render the camera.
        // View => draw to the canvas.

        // Using chrome-js.
        var scale = chroma.scale(['#ffffff', '#7037e8', '#e8574d', '#459a16']);

        // Variable for Creating Object & Light Source.
        var scene = new THREE.Scene();
        // Variable for Creating Camera.
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        // Add Camera.
        scene.add(camera);

        // Variable for Creating WebGL Renderer.
        var renderer = new THREE.WebGLRenderer({
            alpha: true
        });

        // Render BackGround Color.
        renderer.setClearColor(0x000000, 0);
        // Render Size Set.
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Renderer of Shadow Rendering Active.
        renderer.shadowMapEnabled = true;

        // Add AxisHelper. X Axis => Red Lines, Y Axis => Green Lines, Z Lines => Blue Lines, Argument => Line Length.
        var axes = new THREE.AxisHelper(1000);
        scene.add(axes);

        // Position and Point the Camera.
        camera.position.set(2, -2.5, 40);
        camera.lookAt({
            x: 0,
            y: 0,
            z: 5
        });

        // Add Box.
        var range = 2;
        var stepX = 16;
        var stepY = 6;
        var stepZ = 12;
        for(var i = -35; i < 5; i++) {
            for(var j = -15; j < 15; j++) {
                var box = new THREE.Mesh(new THREE.BoxGeometry(7.5, 7.5, 7.5),
                    new THREE.MeshPhongMaterial(
                    {
                        color: scale(Math.random()).hex(),
                        transparent: true,
                        opacity: 1

                    }));
                box.position.x = i * stepX + (Math.random() - 0.5) * range;
                box.position.y = j * stepY + (Math.random() - 0.5) * range;
                box.position.z = j * stepZ + (Math.random() - 0.5) * range;
                box.castShadow = true;
                scene.add(box);
            }
        }

        // Add Parallel Light Source.
        var directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        // Sort Added Scene.
        renderer.sortObjects = false;

        // Add Canvas to <body>.
        document.getElementById('sample3').appendChild(renderer.domElement);
        render();

        // Box Rotate Function.
        function render() {
            scene.traverse(function (e) {
                if(e instanceof THREE.Mesh) {
                    e.rotation.x += 0.02;
                    e.rotation.y += 0.02;
                    e.rotation.z += 0.02;
                }
            });
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }

        // Responsive Function.
        var windowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        // If Window Resize, Start Up windowResize();
        window.addEventListener('resize', windowResize, false);

    };

    // Loaded All DOM. Start Up draw();
    window.addEventListener('DOMContentLoaded', draw, false);

}
