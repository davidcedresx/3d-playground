import React from 'react'
import _bay from './assets/timothy-oldfield-luufnHoChRU-unsplash.jpg'
import _beach from './assets/kris-guico-rsB-he-ye7w-unsplash.jpg'
import { useState } from 'react'
import Attribution from './components/Attribution'
import Scene from './components/Scene'

const images = {
    beach: {
        src: _beach,
        author: '@krisguico'
    },
    bay: {
        src: _bay,
        author: 'oldfieldart'
    }
}

export default function AppComponent() {
    const [currentImage] = useState('beach')

    return (
        <>
            <Scene imageSrc={images[currentImage].src} />
            <div class="hud">
                <Attribution author={images[currentImage].author} />
            </div>
        </>
    )
}