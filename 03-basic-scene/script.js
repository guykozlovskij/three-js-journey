console.log(THREE);

const scene = new THREE.Scene();


//cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//mesh - geometry + material 
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


//sizes
const sizes = { width: 800, height: 600 };

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;  
scene.add(camera);

//render
const canvas = document.querySelector('.webgl');
console.log(canvas);

const renderer = new THREE.WebGLRenderer({
  canvas, 

});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);