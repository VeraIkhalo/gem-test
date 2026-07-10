import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import dogFood from './assets/dog-food.svg'
import dogs from './assets/dogs.svg'
import food from './assets/food.svg'
import happyDog from './assets/happy-dog.svg'

const criticalImages = [dogFood, dogs, food, happyDog]

criticalImages.forEach((src) => {
  const existingLink = document.querySelector(`link[rel="preload"][href="${src}"]`)

  if (!existingLink) {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    link.fetchPriority = 'high'
    document.head.appendChild(link)
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
