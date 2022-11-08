import * as THREE from 'three';


//THREE SCENE
const scene = new THREE.Scene();

//THREE camera 
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.01,1000);

//THREE renderer

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//THREE Light
const ambient  = new THREE.AmbientLight(0xffffff,1);
scene.add(ambient);
const directional =new THREE.DirectionalLight(0xffffff,1);
directional.position.x = 7;
directional.position.y = 14;
scene.add(directional);

// Fog( color : Integer, near : Float, far : Float )

//cube
const geometery = new THREE.BoxGeometry(1,3,2);
const material = new THREE.MeshPhysicalMaterial({
    color: 0x00ff00, //green
    roughness:0.5,
    metalness:0.7,
    // map: new THREE.TextureLoader().load('./img/globe.jpg')
}


);
const cube =  new THREE.Mesh(geometery,material);

scene.add(cube);


const geometry = new THREE.BoxGeometry(1, 1, 1 );
const material1 = new THREE.MeshBasicMaterial( {color: 0x0B5394} );
const cube1 = new THREE.Mesh( geometry, material1 );

// scene.add( cube1 );


//create a render loop
function loop(){
    //modify the scene
    //cube.rotation.x += 0.01;
    cube.rotateX(0.01);
    cube.rotateY(0.01);

    cube1.rotateX(0.01);
    cube1.rotateY(0.005);
    //render a scene
    renderer.render(scene,camera);
    //make it a loop
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);



const TextureLoader = new THREE.TextureLoader();
const globe =TextureLoader.load('./img/tile.jpg')

// // Create a sphere
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5,10,10),
    new THREE.MeshStandardMaterial({
        color:0xff000,
        // map: globe
        // map: new THREE.TextureLoader().load('./img/globe.jpg')
    })
)


sphere.position.set(10,5,0)
scene.add(sphere);

camera.position.z =10;




// // const scene = new THREE.Scene()
// const camera = new THREE.
//     PerspectiveCamera (
//         75,
//         innerWidth/ innerHeight,
//         0.1,
//         1000
//     )

//     const renderer = new THREE.WebGL1Renderer(

//     )
//     renderer.setSize(innerWidth,innerHeight)
//     document.body.appendChild(renderer.domElement)


    
// // Create a sphere
// const sphere = new THREE.MESH(
//     new THREE.SphereGeometry(5,50,50),
//     new THREE.MeshBasicMaterial({
//         color:0xFF000
//     })
// )
// scene.add(sphere);

// function animate(){
//     requestAnimationFrame(animate)
//     renderer.render(scene,camera)
// }
// animate()