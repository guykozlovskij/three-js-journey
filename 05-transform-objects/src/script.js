import * as THREE from 'three'
import '../src/style.css'

//* Canvas
const canvas = document.querySelector('canvas.webgl')
//* Scene
const scene = new THREE.Scene()

//* Objects
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)


const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

group.add(cube1)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)

cube2.position.x = 2
group.add(cube2)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.x = -2
group.add(cube3)

// //! Objects
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// //! Position 
// // mesh.position.x = 0.7
// // mesh.position.y = -0.6
// // mesh.position.z = 1
// // ⬆️
// mesh.position.set(1, -1, 1)

// //! Scale 
// mesh.scale.set(2, 0.5, 0.5,)

// //! Rotation 
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25
// scene.add(mesh)

//* Axes Helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

//* Camera
const sizes = {
  width: 800,
  height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
//* Look at this!
// camera.lookAt(mesh.position)
// //! normalizes the vectors to a small value
// mesh.position.normalize()

//* Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)