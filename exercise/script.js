// Scene
const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 'red'});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75,  sizes.width / sizes.height);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

// Resizes the renderer (canvas)
renderer.setSize(sizes.width, sizes.height);

// Render the scene
renderer.render(scene, camera);

// Transform an object with position, rotation, and scale
// Position uses x, y, and z; 3js considers forward and backwards to be z
