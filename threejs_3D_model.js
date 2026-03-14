import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from 'three';

// Credit: Three.js (https://threejs.org/manual/#en/loading-3d-models)
// for tutorial code

// Credit for 3D model:
// Nissan Fairlady Z S30(240Z) 1978" (https://skfb.ly/6ZZFG) by Lexyc16 is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/).

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5);

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

const loader = new GLTFLoader();

loader.load('./nissan_fairlady_z_s30240z_1978.glb', function(gltf) {
    scene.add(gltf.scene);
}, undefined, function(error) {
    console.log(error);
});

const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

function animate() {
    renderer.render( scene, camera );
}

renderer.setAnimationLoop(animate);
