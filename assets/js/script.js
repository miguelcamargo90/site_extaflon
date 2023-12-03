import * as THREE from '/';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

const animate = () => {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
