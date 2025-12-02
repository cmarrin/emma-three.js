import * as THREE from 'three';

class Planet
{
    mesh;
    #speed;

    constructor(size, textureName, cant, speed)
    {
        this.speed = speed;

        const geometry = new THREE.SphereGeometry(size, 32, 16);
        const material = new THREE.MeshPhongMaterial(
            {
                color: 0xffffff,
                shininess: 200
            }
        );
        const texture = new THREE.TextureLoader().load(textureName);
        material.map = texture;
        this.mesh = new THREE.Mesh( geometry, material );
        this.mesh.rotation.x = cant;
    }

    animate(animationTime) {
        this.mesh.rotation.y = animationTime / (1000 * this.speed);
    }
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const earth = new Planet(1, "earth/Earth512x256.png", 0.5, 2);
const moon = new Planet(1/3, "earth/Moon2048x1024.jpg", 0.5, 1);
const moonOrbit = new THREE.Group();

scene.add(earth.mesh);
scene.add(moonOrbit);
moonOrbit.add(moon.mesh);
moon.mesh.position.x = 3;
moonOrbit.rotation.x = 0.4;

scene.add(new THREE.AmbientLight(0x222222, 2));

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(4, 1, 1);
scene.add(light);

camera.position.z = 5;

function animate(animationTime) {
    earth.animate(animationTime);
    moon.animate(animationTime);
    moonOrbit.rotation.y = animationTime / 4000;
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
