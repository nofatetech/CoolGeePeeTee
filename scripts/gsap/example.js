import gsap from './register-plugins.js';

// Example animations
export function animateElement(element) {
    // Basic animation
    gsap.to(element, {
        duration: 1,
        x: 100,
        y: 100,
        rotation: 360,
        ease: "power2.inOut"
    });
}

export function animateText(element) {
    // Text scramble animation
    gsap.to(element, {
        duration: 2,
        scrambleText: {
            text: "Hello GSAP!",
            chars: "!@#$%^&*",
            speed: 0.3
        }
    });
}

export function createScrollAnimation(element) {
    // Scroll-triggered animation
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        y: 100,
        opacity: 0,
        duration: 1
    });
}

export function createDraggable(element) {
    // Make element draggable
    Draggable.create(element, {
        type: "x,y",
        inertia: true,
        bounds: "body"
    });
}

// Export all animations as a single object
export default {
    animateElement,
    animateText,
    createScrollAnimation,
    createDraggable
};