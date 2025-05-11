
// Jquery start

$(document).ready(function(){
	// Newsticker
	$("#eone_1").eocjsNewsticker({
	  speed:      25,
	  divider:    '***'
	});
	$("#eone_2").eocjsNewsticker({
	  type:       'ajax',
	  source:     './example.json',
	  interval:   30
	});
	// Parallax
	
	// cross-viewport



});

// Jquery end

// js

// Random integer

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", function(event) {
        var scma_jg;

        var defs1 = {
            label: "label",
            value: 30,
            min: 0,
            max: 100,
            decimals: 0,
            gaugeWidthScale: 0.6,
            pointer: true,
            pointerOptions: {
                toplength: 10,
                bottomlength: 10,
                bottomwidth: 2
            },
            counter: true,
            relativeGaugeSize: true
        }

        jg3 = new JustGage({
            id: "scma_jg",
            defaults: defs1
        });

        // 2

        var gg1 = new JustGage({
            id: "gg1",
            value: 50,
            min: 0,
            max: 100,
            title: "Target",
            label: "temperature",
            pointer: true,
            textRenderer: function (val) {
                if (val < 50) {
                    return 'Cold';
                } else if (val > 50) {
                    return 'Hot';
                } else if (val === 50) {
                    return 'OK';
                }
            },
            onAnimationEnd: function () {
                console.log('f: onAnimationEnd()');
            }
        });

        document.getElementById('gg12_refresh').addEventListener('click', function () {
            gg1.refresh(getRandomInt(0, 100));
            return false;
        });

    });

// Inertia Plugin

window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(InertiaPlugin)

    let oldX = 0, 
        oldY = 0, 
        deltaX = 0,
        deltaY = 0
    
    const root = document.querySelector('.mwg_effect000')
    root.addEventListener("mousemove", (e) => {
        // Calculate horizontal movement since the last mouse position
        deltaX = e.clientX - oldX;

        // Calculate vertical movement since the last mouse position
        deltaY = e.clientY - oldY;

        // Update old coordinates with the current mouse position
        oldX = e.clientX;
        oldY = e.clientY;
    })

    root.querySelectorAll('.media').forEach(el => {

        // Add an event listener for when the mouse enters each media
        el.addEventListener('mouseenter', () => {
            
            const tl = gsap.timeline({ 
                onComplete: () => {
                    tl.kill()
                }
            })
            tl.timeScale(1.2) // Animation will play 20% faster than normal
            
            const image = el.querySelector('img')
            tl.to(image, {
               inertia: {
                    x: {
                        velocity: deltaX * 30, // Higher number = movement amplified
                        end: 0 // Go back to the initial position
                    },
                    y: {
                        velocity: deltaY * 30, // Higher number = movement amplified
                        end: 0 // Go back to the initial position
                    },
                },
            })
            tl.fromTo(image, {
                rotate: 0
            }, {
                duration: 0.4,
                rotate:(Math.random() - 0.5) * 30, // Returns a value between -15 & 15
                yoyo: true, 
                repeat: 1,
                ease: 'power1.inOut' // Will slow at the begin and the end
            }, '<') // The animation starts at the same time as the previous tween
        })
    })
})

// js end