import * as THREE from 'three';

// Credit: Three.js (https://threejs.org/manual/#en/creating-a-scene)
// Some code is the same as the tutorial, but I changed some of it and added a wireframe to the cube.

// Function to run every frame for animation, or just rendering an image
function animate(time) {
    cubeGroup.rotation.x = time / 2500;
    cubeGroup.rotation.y = time / 1000;
    renderer.render(scene, camera);
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

// Creates the cube
const geometry = new THREE.BoxGeometry(2, 2, 0.5, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00fff0});
const cube = new THREE.Mesh(geometry, material);

// Creates the wireframe for the cube
const edges = new THREE.EdgesGeometry(geometry);
const lines = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 5 })
const wireframe = new THREE.LineSegments(edges, lines);

// Adds cube and wireframe to group so that they will animate together, and adds them to the scene
const cubeGroup = new THREE.Group();
cubeGroup.add(cube);
cubeGroup.add(wireframe);
scene.add(cubeGroup);

camera.position.z = 7;

renderer.setAnimationLoop(animate);