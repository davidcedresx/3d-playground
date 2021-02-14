import React, { useEffect, useRef } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import {
    DoubleSide,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    SphereGeometry,
    TextureLoader,
    WebGLRenderer,
} from "three"

export default function SceneComponent({ imageSrc }) {
    const node = useRef(null)

    useEffect(() => {
        const renderer = new WebGLRenderer({ antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)

        const camera = new PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            1,
            1000
        )
        camera.position.z = 1;

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.05
        controls.screenSpacePanning = false
        controls.minDistance = 100
        controls.maxDistance = 100
        controls.autoRotate = true

        const scene = new Scene()

        const geometry = new SphereGeometry(500, 60, 40)
        const material = new MeshBasicMaterial()
        const mesh = new Mesh(geometry, material)
        mesh.frustumCulled = false
        mesh.scale.x = -1
        scene.add(mesh)

        new TextureLoader().load(imageSrc, (texture) => {
            material.map = texture
            material.side = DoubleSide
            material.needsUpdate = true
        })

        window.addEventListener("resize", () => {
            const { innerWidth, innerHeight } = window
            renderer.setSize(innerWidth, innerHeight)
            camera.aspect = innerWidth / innerHeight
            camera.updateProjectionMatrix()
        })

        renderer.setAnimationLoop(() => {
            controls.update()
            renderer.render(scene, camera)
        })
    }, [node, imageSrc])

    return <div ref={node} />
}
